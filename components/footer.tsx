import { ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-lav/25 bg-ink py-8">
      <div className="container-x flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <p className="mono max-w-[70ch] leading-6 text-lav/80">
          © 2026 Karthikeyan S. · Salem, Tamil Nadu · Set in Archivo, Instrument Serif and IBM Plex Mono · Next.js, GSAP
        </p>
        <a href="#home" className="mono inline-flex min-h-[44px] items-center gap-2 hover:text-orchid">
          Back to top
          <ArrowUp className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
}
