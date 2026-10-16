"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * The single animation system for the site (GSAP + ScrollTrigger).
 * - Scroll reveals: [data-reveal] elements are batched and revealed once.
 * - Photo frame: gentle float + limited pointer parallax (fine pointers only).
 * Everything lives inside gsap.matchMedia(), so reduced-motion users get static
 * content and every tween, trigger and listener is reverted on unmount.
 */
export default function SiteMotion() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    (window as Window & { __motionReady?: boolean }).__motionReady = true;
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const done = (els: gsap.TweenTarget) => gsap.set(els, { clearProps: "transform" });

      ScrollTrigger.batch("[data-reveal]", {
        start: "top 90%",
        once: true,
        onEnter: (els) =>
          gsap.to(els, {
            opacity: 1,
            y: 0,
            duration: 0.75,
            ease: "power3.out",
            stagger: 0.08,
            overwrite: true,
            onComplete: () => done(els),
          }),
      });

      // Decorative sparkles: slow, low-amplitude drift (transform only).
      gsap.utils.toArray<HTMLElement>("[data-float]").forEach((el, i) => {
        gsap.to(el, {
          y: i % 2 ? 8 : -8,
          rotation: i % 2 ? 12 : -12,
          duration: 3 + i * 0.6,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
        });
      });

      // Pointer parallax for [data-parallax] groups (hero cards, portrait frame). Small, bounded
      // movement, only on devices that have a fine pointer; each group listens on its own section.
      if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
        const cleanups = gsap.utils.toArray<HTMLElement>("[data-parallax]").map((frame) => {
          const stage = frame.closest("section");
          if (!stage) return () => {};
          const depth = Number(frame.dataset.depth ?? 1);
          const moveX = gsap.quickTo(frame, "x", { duration: 0.8, ease: "power3.out" });
          const moveY = gsap.quickTo(frame, "y", { duration: 0.8, ease: "power3.out" });
          const onMove = (e: PointerEvent) => {
            const r = stage.getBoundingClientRect();
            moveX(((e.clientX - r.left) / r.width - 0.5) * 16 * depth);
            moveY(((e.clientY - r.top) / r.height - 0.5) * 12 * depth);
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

    // Fonts and images shift layout slightly; recompute trigger positions once loaded.
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);

    return () => {
      window.removeEventListener("load", refresh);
      mm.revert();
    };
  }, []);

  return null;
}
