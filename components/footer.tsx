import { ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-[#C5A880]/20 bg-[#080708]/90 py-12 backdrop-blur-md">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-8 border-b border-white/10 pb-8 sm:flex-row sm:items-end">
          <div>
            <p className="font-mono text-xs tracking-editorial text-[#C5A880] uppercase">
              Colophon · Folio 2026 Edition
            </p>
            <h3 className="font-heading mt-2 text-2xl font-bold tracking-tight text-[#F4EFEA]">
              Karthikeyan S.
            </h3>
            <p className="mt-1 text-xs text-[#E6DDD5]/80 font-sans">
              Java Full Stack Developer · B.E. Computer Science &amp; Engineering (CGPA 8.94)
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 font-mono text-xs text-muted">
            <span className="flex items-center gap-2 text-[#E6DDD5]/80">
              <span className="h-1.5 w-1.5 rounded-full bg-[#3FB950]" aria-hidden="true" />
              Available for 2026 Opportunities
            </span>
            <span className="text-white/20">/</span>
            <span>Salem, Tamil Nadu, India</span>
          </div>
        </div>

        <div className="mt-6 flex flex-col items-start justify-between gap-4 text-xs text-muted/70 sm:flex-row sm:items-center">
          <p className="font-mono text-[11px]">
            &copy; 2026 Karthikeyan S. Architectural developer folio. All systems verified.
          </p>
          <a
            href="#home"
            className="group inline-flex min-h-[44px] items-center gap-2 rounded-full border border-white/10 bg-black/40 px-4 py-1.5 font-mono text-[11px] text-[#E6DDD5]/90 transition-all hover:border-[#C5A880]/50 hover:text-[#C5A880]"
          >
            <span>Back to top</span>
            <ArrowUp className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
