"use client";

import { useEffect, useRef, useState } from "react";

const TOTAL_FRAMES = 240;
const MAX_CACHE_SIZE = 36; // Bounded cache: at most 36 full-HD decoded images in memory
const MAX_CONCURRENT_LOADS = 3; // Strict concurrency gate to prevent network/decoding stalls

function getFrameUrl(index: number): string {
  const frameNum = String(index + 1).padStart(3, "0");
  return `/Frames/ezgif-frame-${frameNum}.jpg`;
}

interface QueueItem {
  index: number;
  priority: number;
}

export default function ScrollCanvasBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [hasFirstFrame, setHasFirstFrame] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    let animationFrameId: number | null = null;
    let isUnmounted = false;

    // Cache & in-flight tracking
    const imageCache = new Map<number, HTMLImageElement>();
    const inFlightSet = new Set<number>();
    let loadQueue: QueueItem[] = [];
    let activeLoads = 0;

    // Scroll & progress state
    let targetProgress = 0;
    let currentProgress = 0;
    let currentDesiredFrame = 0;
    let lastRenderedFrame = -1;
    let scrollDirection = 1;
    let lastTimestamp = 0;

    // Authoritative scroll progress calculation directly from viewport scroll
    const updateTargetProgress = () => {
      const scrollY = window.scrollY || window.pageYOffset || 0;
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;
      const maxScroll = Math.max(1, docHeight - winHeight);
      targetProgress = Math.min(1, Math.max(0, scrollY / maxScroll));
    };

    // Canvas sizing with DPR capped at 2
    const resizeCanvas = () => {
      if (!canvas) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = window.innerWidth;
      const height = window.innerHeight;

      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);

      // Redraw current frame on resize if available
      if (lastRenderedFrame >= 0) {
        drawFrameToCanvas(lastRenderedFrame);
      }
    };

    const onResize = () => {
      resizeCanvas();
      updateTargetProgress();
    };

    // Low-level draw call: draws image centered with aspect ratio "cover"
    const drawFrameToCanvas = (index: number): boolean => {
      const img = imageCache.get(index);
      if (!img || !img.complete || img.naturalWidth === 0) {
        return false;
      }

      const canvasW = canvas.width;
      const canvasH = canvas.height;
      const imgW = img.naturalWidth;
      const imgH = img.naturalHeight;

      const scale = Math.max(canvasW / imgW, canvasH / imgH);
      const drawW = imgW * scale;
      const drawH = imgH * scale;
      const offsetX = (canvasW - drawW) / 2;
      const offsetY = (canvasH - drawH) / 2;

      // Draw directly over canvas without clearing first (prevents any blank flash)
      ctx.drawImage(img, offsetX, offsetY, drawW, drawH);
      lastRenderedFrame = index;

      // Refresh LRU position in Map
      imageCache.delete(index);
      imageCache.set(index, img);
      return true;
    };

    // Evict the cached frame furthest from the current desired frame
    const evictFurthestFrame = () => {
      let furthestKey = -1;
      let maxDistance = -1;

      for (const key of imageCache.keys()) {
        if (key === lastRenderedFrame) continue; // Never evict the currently visible frame
        const dist = Math.abs(key - currentDesiredFrame);
        if (dist > maxDistance) {
          maxDistance = dist;
          furthestKey = key;
        }
      }

      if (furthestKey >= 0) {
        const img = imageCache.get(furthestKey);
        if (img) img.src = ""; // Release decoded pixel buffer
        imageCache.delete(furthestKey);
      }
    };

    // Add decoded image to cache with boundary enforcement
    const storeInCache = (index: number, img: HTMLImageElement) => {
      if (imageCache.has(index)) {
        imageCache.delete(index);
      } else if (imageCache.size >= MAX_CACHE_SIZE) {
        evictFurthestFrame();
      }
      imageCache.set(index, img);
    };

    // Pump the prioritized queue with concurrency limit
    const pumpQueue = () => {
      if (isUnmounted || activeLoads >= MAX_CONCURRENT_LOADS || loadQueue.length === 0) {
        return;
      }

      // Sort descending by priority
      loadQueue.sort((a, b) => b.priority - a.priority);
      const item = loadQueue.shift();
      if (!item) return;

      const { index } = item;

      // Skip if already in cache or already in flight
      if (imageCache.has(index)) {
        pumpQueue();
        return;
      }

      activeLoads++;
      inFlightSet.add(index);

      const img = new Image();
      img.src = getFrameUrl(index);

      const onDone = () => {
        activeLoads--;
        inFlightSet.delete(index);
        if (isUnmounted) return;

        storeInCache(index, img);

        // RACE CONDITION FIX:
        // Only draw this frame if it matches the current desired frame!
        // A late-loading old frame will NEVER overwrite a newer frame on screen.
        if (index === currentDesiredFrame && lastRenderedFrame !== currentDesiredFrame) {
          drawFrameToCanvas(index);
        }

        pumpQueue();
      };

      const onError = () => {
        activeLoads--;
        inFlightSet.delete(index);
        if (!isUnmounted) pumpQueue();
      };

      if (img.decode) {
        img.decode().then(onDone).catch(() => {
          img.onload = onDone;
          img.onerror = onError;
        });
      } else {
        img.onload = onDone;
        img.onerror = onError;
      }

      // Try pumping next if slots remain
      if (activeLoads < MAX_CONCURRENT_LOADS && loadQueue.length > 0) {
        pumpQueue();
      }
    };

    // Enqueue a frame with a given priority (and prune stale requests)
    const enqueueFrame = (index: number, priority: number) => {
      if (index < 0 || index >= TOTAL_FRAMES) return;
      if (imageCache.has(index) || inFlightSet.has(index)) return;

      const existing = loadQueue.find((q) => q.index === index);
      if (existing) {
        if (priority > existing.priority) existing.priority = priority;
      } else {
        loadQueue.push({ index, priority });
      }
    };

    // Prioritize neighborhood based on current scroll position and velocity-aware lookahead
    const updateLoadingPriorities = (centerIndex: number, dir: number, isFast: boolean) => {
      // 1. Deprioritize stale queued items far away (> 26 frames away)
      loadQueue = loadQueue.filter((q) => Math.abs(q.index - centerIndex) <= 26);

      // 2. High priority for current target
      enqueueFrame(centerIndex, 1000);

      // 3. Velocity-aware lookahead: up to 16 frames ahead when scrolling fast, 10 when steady
      const forwardCount = isFast ? 16 : 10;
      const backwardCount = isFast ? 5 : 3;

      if (dir >= 0) {
        for (let i = 1; i <= forwardCount; i++) {
          enqueueFrame(centerIndex + i, 800 - i * 25);
        }
        for (let i = 1; i <= backwardCount; i++) {
          enqueueFrame(centerIndex - i, 400 - i * 35);
        }
      } else {
        for (let i = 1; i <= forwardCount; i++) {
          enqueueFrame(centerIndex - i, 800 - i * 25);
        }
        for (let i = 1; i <= backwardCount; i++) {
          enqueueFrame(centerIndex + i, 400 - i * 35);
        }
      }

      pumpQueue();
    };

    // Progressive milestone loading (idle background preloading of every 12th frame)
    const scheduleMilestones = () => {
      for (let i = 0; i < TOTAL_FRAMES; i += 12) {
        enqueueFrame(i, 50);
      }
      enqueueFrame(TOTAL_FRAMES - 1, 50);
      pumpQueue();
    };

    // 1. Initial setup & refresh initialization at nonzero scroll positions
    resizeCanvas();
    updateTargetProgress();

    // Initialize currentProgress to match current scroll position on page load/refresh
    currentProgress = targetProgress;
    currentDesiredFrame = Math.min(
      TOTAL_FRAMES - 1,
      Math.max(0, Math.round(currentProgress * (TOTAL_FRAMES - 1)))
    );

    // Load current target frame immediately with top priority
    enqueueFrame(currentDesiredFrame, 2000);
    if (currentDesiredFrame !== 0) {
      // Also enqueue frame 0 as anchor if not starting at top
      enqueueFrame(0, 1500);
    }
    pumpQueue();

    // 2. Accessibility: Reduced motion check
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) {
      return () => {
        isUnmounted = true;
        window.removeEventListener("resize", onResize);
      };
    }

    // 3. Authoritative passive scroll listener (zero-latency input sync)
    window.addEventListener("scroll", updateTargetProgress, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });

    // 4. Delta-time-aware requestAnimationFrame loop
    const tick = (timestamp: number) => {
      if (isUnmounted) return;

      if (!lastTimestamp) lastTimestamp = timestamp;
      // Clamp unusually large frame deltas after background tab inactivity (max 100ms)
      const rawDt = (timestamp - lastTimestamp) / 1000;
      const dt = Math.min(Math.max(rawDt, 0), 0.1);
      lastTimestamp = timestamp;

      const delta = targetProgress - currentProgress;
      if (Math.abs(delta) > 0.00005) {
        scrollDirection = delta >= 0 ? 1 : -1;

        // Exponential decay smoothing (rate = 14: fluid, responsive, no frame-rate bias)
        const decayRate = 14;
        const factor = 1 - Math.exp(-decayRate * dt);
        currentProgress += delta * factor;

        currentDesiredFrame = Math.min(
          TOTAL_FRAMES - 1,
          Math.max(0, Math.round(currentProgress * (TOTAL_FRAMES - 1)))
        );

        // Render target frame only if changed
        if (currentDesiredFrame !== lastRenderedFrame) {
          const rendered = drawFrameToCanvas(currentDesiredFrame);
          if (!rendered) {
            // Target frame not ready: attempt nearest available cached frame to minimize visual lag
            let closest = -1;
            let minDiff = Infinity;
            for (const key of imageCache.keys()) {
              const diff = Math.abs(key - currentDesiredFrame);
              if (diff < minDiff) {
                minDiff = diff;
                closest = key;
              }
            }
            if (closest >= 0 && minDiff <= 6 && closest !== lastRenderedFrame) {
              drawFrameToCanvas(closest);
            }
          }
        }

        // Detect velocity for dynamic forward lookahead
        const velocity = Math.abs(delta) / Math.max(dt, 0.001);
        const isFast = velocity > 0.4;

        // Keep priority queue updated to fetch upcoming frames
        updateLoadingPriorities(currentDesiredFrame, scrollDirection, isFast);
      } else if (currentProgress !== targetProgress) {
        // Snap when at rest
        currentProgress = targetProgress;
        currentDesiredFrame = Math.min(
          TOTAL_FRAMES - 1,
          Math.max(0, Math.round(currentProgress * (TOTAL_FRAMES - 1)))
        );
        if (currentDesiredFrame !== lastRenderedFrame) {
          drawFrameToCanvas(currentDesiredFrame);
        }
      }

      animationFrameId = requestAnimationFrame(tick);
    };

    animationFrameId = requestAnimationFrame(tick);

    // Schedule background milestones after initial frame paint
    const milestoneTimer = setTimeout(() => {
      if (!isUnmounted) scheduleMilestones();
    }, 400);

    // 5. Cleanup on unmount
    return () => {
      isUnmounted = true;
      clearTimeout(milestoneTimer);
      window.removeEventListener("scroll", updateTargetProgress);
      window.removeEventListener("resize", onResize);
      if (animationFrameId !== null) cancelAnimationFrame(animationFrameId);
      loadQueue = [];
      inFlightSet.clear();
      imageCache.forEach((img) => {
        img.src = "";
      });
      imageCache.clear();
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-0 pointer-events-none overflow-hidden"
      aria-hidden="true"
    >
      <canvas ref={canvasRef} className="h-full w-full block" />
    </div>
  );
}
