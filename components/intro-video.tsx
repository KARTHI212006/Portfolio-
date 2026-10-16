"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Scroll-scrubbed intro (GSAP + ScrollTrigger).
 * - The video is never played; scroll progress drives video.currentTime (smoothed with a lerp),
 *   so scrolling back up plays it in reverse.
 * - Pinning is CSS sticky inside a wrapper whose height is set in CSS, so nothing shifts.
 * - The last frame of the footage is the hero's crimson, so the hero simply continues below it.
 * - Falls back to nothing (wrapper hidden) for reduced motion, data-saver, or any load error.
 */
export default function IntroVideo() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const blendRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const wrap = wrapRef.current;
    const video = videoRef.current;
    const blend = blendRef.current;
    if (!wrap || !video || !blend) return;

    const mm = gsap.matchMedia();
    let blobUrl: string | null = null;
    let cancelled = false;

    const skip = () => {
      wrap.dataset.state = "static";
      ScrollTrigger.refresh();
    };

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const conn = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
      if (conn?.saveData) {
        skip();
        return;
      }

      const small = window.matchMedia("(max-width: 767px)").matches;
      const src = small ? "/videos/portfolio-intro-mobile.mp4" : "/videos/portfolio-intro.mp4";

      let target = 0;
      let current = 0;
      let ready = false;

      const tick = () => {
        if (!ready || !video.duration) return;
        current += (target - current) * 0.14;
        if (Math.abs(target - current) < 0.0005) current = target;
        const t = current * video.duration;
        if (Math.abs(video.currentTime - t) > 1 / 60) video.currentTime = t;
      };

      const start = () => {
        if (cancelled) return;
        ready = true;
        ScrollTrigger.create({
          trigger: wrap,
          start: "top top",
          end: "bottom bottom",
          onUpdate: (self) => {
            target = self.progress;
            // fade the bottom edge into the hero crimson over the last 12% of the scroll
            blend.style.opacity = String(gsap.utils.clamp(0, 1, (self.progress - 0.88) / 0.12));
          },
        });
        gsap.ticker.add(tick);
        ScrollTrigger.refresh();
      };

      // Preload the whole file as a blob so seeking never waits on the network.
      fetch(src)
        .then((r) => {
          if (!r.ok) throw new Error(String(r.status));
          return r.blob();
        })
        .then((b) => {
          if (cancelled) return;
          blobUrl = URL.createObjectURL(b);
          video.addEventListener("loadedmetadata", start, { once: true });
          video.addEventListener("error", skip, { once: true });
          video.src = blobUrl;
          video.load();
        })
        .catch(skip);

      return () => {
        ready = false;
        gsap.ticker.remove(tick);
      };
    });

    (window as Window & { __motionReady?: boolean }).__motionReady = true;

    return () => {
      cancelled = true;
      mm.revert();
      if (blobUrl) URL.revokeObjectURL(blobUrl);
    };
  }, []);

  return (
    <div ref={wrapRef} id="intro" className="intro-wrap" aria-hidden="true">
      <div className="intro-sticky">
        <video
          ref={videoRef}
          className="intro-video"
          muted
          playsInline
          preload="auto"
          disablePictureInPicture
          tabIndex={-1}
          poster="/videos/portfolio-intro-poster.jpg"
        />
        <div ref={blendRef} className="intro-blend" />
      </div>
    </div>
  );
}
