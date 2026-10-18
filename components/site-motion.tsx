"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Editorial Animation System (GSAP + ScrollTrigger).
 * - Scroll reveals: [data-reveal] elements enter smoothly with transform + opacity.
 * - Parallax: subtle pointer tilt for fine-pointer desktop only.
 * - Respects prefers-reduced-motion completely via matchMedia.
 */
export default function SiteMotion() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    (window as Window & { __motionReady?: boolean }).__motionReady = true;
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const done = (els: gsap.TweenTarget) => gsap.set(els, { clearProps: "transform" });

      ScrollTrigger.batch("[data-reveal]", {
        start: "top 92%",
        once: true,
        onEnter: (els) =>
          gsap.to(els, {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
            stagger: 0.06,
            overwrite: true,
            onComplete: () => done(els),
          }),
      });

      // Bounded pointer parallax for fine pointers on featured cards and portrait
      if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
        const cleanups = gsap.utils.toArray<HTMLElement>("[data-parallax]").map((frame) => {
          const stage = frame.closest("section");
          if (!stage) return () => {};
          const depth = Number(frame.dataset.depth ?? 1);
          const moveX = gsap.quickTo(frame, "x", { duration: 0.8, ease: "power3.out" });
          const moveY = gsap.quickTo(frame, "y", { duration: 0.8, ease: "power3.out" });
          const onMove = (e: PointerEvent) => {
            const r = stage.getBoundingClientRect();
            moveX(((e.clientX - r.left) / r.width - 0.5) * 12 * depth);
            moveY(((e.clientY - r.top) / r.height - 0.5) * 8 * depth);
          };
          stage.addEventListener("pointermove", onMove);
          return () => stage.removeEventListener("pointermove", onMove);
        });
        return () => cleanups.forEach((c) => c());
      }
    });

    mm.add("(prefers-reduced-motion: reduce)", () => {
      gsap.set("[data-reveal]", { opacity: 1, y: 0, clearProps: "transform" });
    });

    // Recompute trigger positions once fonts and images settle
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);

    return () => {
      window.removeEventListener("load", refresh);
      mm.revert();
    };
  }, []);

  return null;
}
