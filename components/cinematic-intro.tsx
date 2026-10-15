"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const STORAGE_KEY = "portfolio_intro_seen_v1";

function canPlayIntro(): boolean {
  if (typeof window === "undefined") return false;

  // 1. Respect prefers-reduced-motion
  try {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return false;
    }
  } catch {
    // Ignore media query error
  }

  // 2. Do not play if landing directly on a specific section anchor
  if (window.location.hash && window.location.hash !== "#home") {
    return false;
  }

  // 3. Check sessionStorage: only play once per tab session
  try {
    if (window.sessionStorage.getItem(STORAGE_KEY) === "true") {
      return false;
    }
  } catch {
    // If sessionStorage is restricted, allow playing once in memory
  }

  return true;
}

function markIntroSeen(): void {
  try {
    window.sessionStorage.setItem(STORAGE_KEY, "true");
  } catch {
    // Ignore storage restriction
  }
}

export default function CinematicIntro() {
  const [mounted, setMounted] = useState(false);
  const [active, setActive] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const transitionStartedRef = useRef(false);

  useEffect(() => {
    setMounted(true);

    if (!canPlayIntro()) {
      return;
    }

    // Mark as seen immediately so any page reload or section click doesn't trigger replay
    markIntroSeen();
    setActive(true);
  }, []);

  // Cleanup GSAP tweens on unmount
  useEffect(() => {
    return () => {
      if (overlayRef.current) {
        gsap.killTweensOf(overlayRef.current);
      }
    };
  }, []);

  const completeIntro = (fast = false) => {
    if (transitionStartedRef.current) return;
    transitionStartedRef.current = true;

    const overlay = overlayRef.current;
    if (!overlay) {
      setActive(false);
      return;
    }

    gsap.killTweensOf(overlay);

    // Smooth dissolve into the red hero underneath
    gsap.to(overlay, {
      opacity: 0,
      duration: fast ? 0.35 : 0.85,
      ease: fast ? "power2.out" : "power2.inOut",
      onComplete: () => {
        setActive(false);
      },
    });
  };

  const handleSkip = () => {
    completeIntro(true);
  };

  // Autoplay attempt and fallback watchdog
  useEffect(() => {
    if (!active) return;

    const video = videoRef.current;
    if (!video) return;

    // Autoplay attempt
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Autoplay policy or media error: reveal hero immediately
        completeIntro(true);
      });
    }

    // Fallback: If video hasn't reached playback state within 3.5s, don't keep user waiting
    const stallTimer = setTimeout(() => {
      if (video.currentTime === 0 && !video.ended) {
        completeIntro(true);
      }
    }, 3500);

    // Hard ceiling: Video is 8s; force completion by 8.8s so site is never trapped
    const ceilingTimer = setTimeout(() => {
      completeIntro(false);
    }, 8800);

    return () => {
      clearTimeout(stallTimer);
      clearTimeout(ceilingTimer);
    };
  }, [active]);

  // Video timeupdate: Character finishes disintegrating into ash around ~6.8s - 7.1s.
  // We trigger the seamless GSAP dissolve so the particles disperse directly into the red hero.
  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!video || transitionStartedRef.current) return;

    if (video.currentTime >= 6.9) {
      completeIntro(false);
    }
  };

  if (!mounted || !active) {
    return null;
  }

  return (
    <div
      ref={overlayRef}
      role="dialog"
      aria-modal="true"
      aria-label="Cinematic intro animation"
      className="grain fixed inset-0 z-[90] flex items-center justify-center overflow-hidden bg-red-deep text-white"
    >
      {/* Background radial gradient matching Hero */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(55%_45%_at_78%_30%,rgba(255,255,255,0.16),transparent_70%)]"
      />

      {/* Intro Video */}
      <video
        ref={videoRef}
        src="/videos/portfolio-intro.mp4"
        autoPlay
        muted
        playsInline
        preload="auto"
        controls={false}
        onTimeUpdate={handleTimeUpdate}
        onEnded={() => completeIntro(false)}
        onError={() => completeIntro(true)}
        className="relative z-10 h-full w-full object-cover object-center"
      />

      {/* Accessible Skip Intro button */}
      <div className="fixed right-5 top-5 z-[100] sm:right-8 sm:top-8">
        <button
          type="button"
          onClick={handleSkip}
          aria-label="Skip cinematic intro"
          className="group inline-flex min-h-[44px] items-center gap-2 rounded-full border border-white/25 bg-black/45 px-5 py-2 text-xs font-semibold uppercase tracking-label text-white shadow-card backdrop-blur-md transition-all duration-200 hover:border-white/60 hover:bg-black/75 hover:shadow-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:scale-95"
        >
          <span>Skip Intro</span>
          <span
            aria-hidden="true"
            className="text-sm font-normal text-white/70 transition-transform duration-200 group-hover:translate-x-0.5"
          >
            &rarr;
          </span>
        </button>
      </div>
    </div>
  );
}
