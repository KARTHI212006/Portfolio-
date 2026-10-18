import Image from "next/image";
import { ArrowDown, ArrowUpRight, Download } from "lucide-react";
import { CGPA, personalInfo } from "@/lib/data";

const spotlightProject = {
  src: "/images/gamevault.jpg",
  alt: "GameVault project preview",
  badge: "01 · Featured Build",
  title: "GameVault",
  category: "Responsive Web Platform",
  tech: "JavaScript · CSS3 · Vercel",
  summary: "Curated gaming directory featuring dynamic category filtering, responsive UI states and production deployment.",
};

export default function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="grain relative flex min-h-[100dvh] items-center overflow-x-clip bg-transparent pb-20 pt-28 sm:pb-24 sm:pt-32 text-white"
    >
      <div className="container-x relative z-10 w-full">
        {/* Top Editorial Publication Header */}
        <div data-reveal className="mb-8 flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4 text-xs font-mono text-muted">
          <div className="flex items-center gap-3">
            <span className="text-[#C5A880]">[FOLIO &apos;26]</span>
            <span className="text-white/20">/</span>
            <span>ISSUE NO. 01</span>
            <span className="text-white/20">/</span>
            <span className="hidden sm:inline">SALEM, TAMIL NADU (11°39&apos;N 78°09&apos;E)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
            <span className="text-[11px] tracking-wider text-[#E6DDD5]/90 uppercase">Available for Hire</span>
          </div>
        </div>

        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,0.75fr)] lg:gap-14 xl:gap-16">
          {/* Editorial Headline & Narrative (Left Column) */}
          <div className="max-w-2xl">
            <p data-reveal className="label text-[#C5A880] tracking-editorial text-[11px] sm:text-xs">
              Computer Science & Engineering · Class of 2027
            </p>

            <div data-reveal className="mt-3 block max-w-full">
              <h1
                id="hero-title"
                className="display whitespace-nowrap text-[clamp(1.95rem,7.5vw,2.75rem)] sm:text-[clamp(2.75rem,5.5vw,3.75rem)] lg:text-[clamp(3.1rem,4.2vw,4.35rem)] xl:text-[clamp(3.5rem,4vw,4.75rem)] tracking-[-0.035em] text-[#F4EFEA] leading-[0.95]"
              >
                Karthikeyan S.
              </h1>
              <div className="mt-3 flex flex-wrap items-baseline gap-3">
                <p className="font-heading text-lg sm:text-2xl md:text-3xl font-light tracking-tight text-[#E6DDD5]">
                  {personalInfo.role}
                </p>
                <span className="text-[#C5A880]/60 hidden sm:inline" aria-hidden="true">|</span>
                <span className="text-xs font-mono tracking-wider text-[#C5A880] uppercase">
                  Backend &amp; Systems
                </span>
              </div>
            </div>

            {/* Understated Editorial Metadata Ribbon */}
            <div data-reveal className="mt-6 flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2.5 rounded-full border border-[#C5A880]/20 bg-black/45 px-4 py-1.5 text-xs font-mono tracking-wider text-[#E6DDD5] backdrop-blur-sm shadow-sm">
                <span>B.E. CSE</span>
                <span className="text-[#C5A880]/40" aria-hidden="true">·</span>
                <span>2027</span>
                <span className="text-[#C5A880]/40" aria-hidden="true">·</span>
                <span className="font-semibold text-white">CGPA {CGPA}/10</span>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/35 px-3.5 py-1.5 text-xs font-mono text-muted">
                <span>34-Day IoT Intern</span>
                <span className="text-white/20">·</span>
                <span className="text-[#E6DDD5]">ZEN 1</span>
              </div>
            </div>

            {/* Subcopy */}
            <p data-reveal className="mt-6 max-w-[50ch] text-base sm:text-lg leading-relaxed text-[#E6DDD5]/80 font-sans">
              I build robust Java and MySQL backend systems and responsive web interfaces. Final-year CSE student from
              Salem, building practical software and modern web architectures.
            </p>

            {/* Action CTAs */}
            <div data-reveal className="mt-8 flex flex-wrap items-center gap-3.5">
              <a
                href="#projects"
                className="btn-crimson inline-flex min-h-[46px] items-center justify-center gap-2 rounded-full px-7 text-xs font-semibold uppercase tracking-wider text-[#F4EFEA]"
              >
                Explore Projects
              </a>
              <a
                href={personalInfo.resumeUrl}
                download
                className="btn-gold inline-flex min-h-[46px] items-center justify-center gap-2 rounded-full px-6 text-xs font-semibold uppercase tracking-wider text-[#F4EFEA]"
              >
                <Download className="h-4 w-4 text-[#C5A880]" aria-hidden="true" />
                Download Résumé
              </a>
            </div>
          </div>

          {/* Right Column: Architectural Spotlight Card (Desktop Only, restrained & non-competing) */}
          <div data-reveal className="hidden lg:block">
            <div data-parallax data-depth="0.7" className="relative ml-auto w-full max-w-[340px] xl:max-w-[360px]">
              <a
                href="#projects"
                className="group relative block overflow-hidden rounded-2xl border border-[#C5A880]/20 bg-black/45 p-3.5 shadow-card backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#C5A880]/50 hover:shadow-gold"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-black/40">
                  <Image
                    src={spotlightProject.src}
                    alt={spotlightProject.alt}
                    fill
                    priority
                    sizes="(min-width: 1280px) 340px, 320px"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90" />
                  <span className="label absolute bottom-2.5 left-2.5 rounded-full border border-[#C5A880]/30 bg-black/75 px-2.5 py-1 text-[10px] text-[#F4EFEA] font-mono">
                    {spotlightProject.badge}
                  </span>
                </div>
                <div className="px-1.5 pt-3.5 pb-1">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="font-heading text-base font-semibold text-[#F4EFEA] group-hover:text-[#C5A880] transition-colors">
                        {spotlightProject.title}
                      </p>
                      <p className="mt-0.5 text-xs text-muted font-sans">{spotlightProject.category}</p>
                    </div>
                    <div className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-[#C5A880]/20 text-[#C5A880] transition-colors group-hover:border-[#C5A880]/60 group-hover:text-white">
                      <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </div>
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-[#E6DDD5]/75 font-sans">
                    {spotlightProject.summary}
                  </p>
                  <div className="mt-3.5 flex items-center justify-between border-t border-white/10 pt-2.5 text-[11px] font-mono text-muted">
                    <span className="text-[#C5A880]">{spotlightProject.tech}</span>
                    <span className="text-white/40 group-hover:text-white transition-colors">Case Study →</span>
                  </div>
                </div>
              </a>

              {/* Subtle glance indicator */}
              <div className="mt-3 flex items-center justify-between px-1 text-xs text-muted">
                <span className="text-[11px] font-mono tracking-wider text-[#C5A880]/80">01 OF 05 BUILDS</span>
                <a href="#projects" className="text-[11px] font-mono text-muted hover:text-[#F4EFEA] transition-colors">
                  View All Work ↓
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#index"
        aria-label="Scroll to the Index section"
        className="absolute bottom-8 left-1/2 hidden h-11 w-11 -translate-x-1/2 place-items-center rounded-full border border-[#C5A880]/30 text-[#E6DDD5] transition-all hover:border-[#C5A880] hover:text-white sm:grid"
      >
        <ArrowDown className="h-4 w-4" aria-hidden="true" />
      </a>
    </section>
  );
}
