"use client";

import { useState } from "react";
import Image from "next/image";
import * as Dialog from "@radix-ui/react-dialog";
import { ArrowUpRight, Github, X } from "lucide-react";
import { projectsList, type ProjectItem } from "@/lib/data";

function ProjectLinks({ p }: { p: ProjectItem }) {
  if (!p.githubUrl && !p.liveUrl) return null;
  return (
    <div className="flex flex-wrap items-center gap-2.5">
      {p.githubUrl && (
        <a
          href={p.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-[38px] items-center gap-1.5 rounded-full border border-white/15 bg-white/[0.03] px-4 text-xs font-mono text-[#E6DDD5] transition-all hover:border-[#C5A880]/40 hover:bg-white/[0.06] hover:text-white"
        >
          <Github className="h-3.5 w-3.5 text-[#C5A880]" aria-hidden="true" />
          GitHub
          <span className="sr-only"> repository for {p.title} (opens in a new tab)</span>
        </a>
      )}
      {p.liveUrl && (
        <a
          href={p.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-[38px] items-center gap-1.5 rounded-full bg-[#9E1B2C] px-4 text-xs font-mono font-medium text-[#F4EFEA] shadow-sm transition-all hover:bg-[#B71F34]"
        >
          Live Demo
          <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          <span className="sr-only"> of {p.title} (opens in a new tab)</span>
        </a>
      )}
    </div>
  );
}

function CaseStudy({ p }: { p: ProjectItem }) {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 z-[60] bg-black/85 backdrop-blur-md" />
      <Dialog.Content className="fixed left-1/2 top-1/2 z-[70] max-h-[92dvh] w-[min(94vw,840px)] -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-3xl border border-[#C5A880]/20 bg-[#0d0b0c] p-6 text-[#F4EFEA] shadow-2xl sm:p-8">
        <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-5">
          <div>
            <span className="inline-flex items-center rounded-full border border-[#C5A880]/30 bg-black/60 px-3 py-1 text-[11px] font-mono tracking-wider text-[#C5A880]">
              {p.badge}
            </span>
            <Dialog.Title className="mt-3 font-heading text-2xl sm:text-3xl font-semibold tracking-tight text-[#F4EFEA]">
              {p.title}
            </Dialog.Title>
          </div>
          <Dialog.Close
            aria-label="Close case study"
            className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/15 text-muted transition-colors hover:border-[#C5A880] hover:text-white"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </Dialog.Close>
        </div>

        <Dialog.Description className="mt-4 text-sm sm:text-base leading-relaxed text-[#E6DDD5]/85 font-sans">
          {p.shortDesc}
        </Dialog.Description>

        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-black/40 p-5">
            <h3 className="label text-[#C5A880] text-[10px] tracking-editorial">Problem Specification</h3>
            <p className="mt-2 text-xs sm:text-sm leading-relaxed text-[#E6DDD5]/80 font-sans">{p.problem}</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-black/40 p-5">
            <h3 className="label text-[#C5A880] text-[10px] tracking-editorial">Architecture &amp; Approach</h3>
            <p className="mt-2 text-xs sm:text-sm leading-relaxed text-[#E6DDD5]/80 font-sans">{p.solution}</p>
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-white/10 bg-black/40 p-5">
          <h3 className="label text-[#C5A880] text-[10px] tracking-editorial">Key Architectural Features</h3>
          <ul className="mt-3 space-y-2 font-sans">
            {p.features.map((f) => (
              <li key={f} className="flex gap-2.5 text-xs sm:text-sm leading-relaxed text-[#E6DDD5]/85">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C5A880]" aria-hidden="true" />
                {f}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-black/40 p-5">
            <h3 className="label text-[#C5A880] text-[10px] tracking-editorial">Engineering Contribution</h3>
            <p className="mt-2 text-xs sm:text-sm leading-relaxed text-[#E6DDD5]/80 font-sans">{p.myContribution}</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-black/40 p-5">
            <h3 className="label text-[#C5A880] text-[10px] tracking-editorial">Technology Stack</h3>
            <ul className="mt-2.5 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <li
                  key={t}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-mono text-[#E6DDD5]"
                >
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-5">
          <ProjectLinks p={p} />
        </div>
      </Dialog.Content>
    </Dialog.Portal>
  );
}

function ProjectRow({ p, flip, index }: { p: ProjectItem; flip: boolean; index: number }) {
  const indexStr = String(index + 1).padStart(2, "0");
  return (
    <article className="grid gap-6 lg:grid-cols-2 lg:gap-8">
      {/* Photo card */}
      <div
        className={`group relative min-h-[280px] overflow-hidden rounded-2xl border border-[#C5A880]/15 bg-black/45 shadow-card backdrop-blur-sm transition-all duration-300 hover:border-[#C5A880]/40 sm:min-h-[350px] ${
          flip ? "lg:order-2" : ""
        }`}
      >
        <Image
          src={p.image}
          alt={`${p.title} project preview`}
          fill
          sizes="(min-width: 1024px) 590px, 94vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-90" />
        <span className="label absolute left-3.5 top-3.5 rounded-full border border-[#C5A880]/30 bg-black/75 px-3 py-1 text-[10px] font-mono text-[#F4EFEA]">
          FOLIO REF. {indexStr} · {p.badge}
        </span>
      </div>

      {/* Info card */}
      <div className="relative flex flex-col justify-between overflow-hidden rounded-2xl border border-[#C5A880]/15 bg-black/40 p-6 sm:p-8 shadow-card backdrop-blur-sm transition-all duration-300 hover:border-[#C5A880]/35 hover:shadow-gold">
        <div>
          <div className="flex items-center justify-between gap-3 text-xs font-mono text-[#C5A880]">
            <span>{p.category.toUpperCase()}</span>
            <span>[{indexStr} / 05]</span>
          </div>
          <h3 className="font-heading mt-2 text-2xl sm:text-3xl font-semibold tracking-tight text-[#F4EFEA]">{p.title}</h3>
          <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#E6DDD5]/80 font-sans">{p.shortDesc}</p>

          <dl className="mt-6 grid grid-cols-3 gap-3 border-y border-white/10 py-5">
            {p.highlights.map((h) => (
              <div key={h.label}>
                <dd className="font-heading text-lg sm:text-2xl font-semibold text-[#F4EFEA]">{h.value}</dd>
                <dt className="mt-1 text-[10px] sm:text-[11px] leading-snug font-mono text-muted">{h.label}</dt>
              </div>
            ))}
          </dl>
        </div>

        <div className="mt-6">
          <ul className="flex flex-wrap gap-2" aria-label="Tech stack">
            {p.tech.map((t) => (
              <li
                key={t}
                className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-mono text-[#E6DDD5]/85"
              >
                {t}
              </li>
            ))}
          </ul>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Dialog.Root>
              <Dialog.Trigger className="inline-flex min-h-[38px] items-center justify-center gap-1.5 rounded-full border border-[#C5A880]/30 bg-[#C5A880]/[0.06] px-4 text-xs font-mono font-medium text-[#F4EFEA] transition-all hover:border-[#C5A880]/70 hover:bg-[#C5A880]/[0.12]">
                Detailed Case Study
                <span className="sr-only"> for {p.title}</span>
              </Dialog.Trigger>
              <CaseStudy p={p} />
            </Dialog.Root>
            <ProjectLinks p={p} />
          </div>
        </div>
      </div>
    </article>
  );
}

const filters = ["All", ...Array.from(new Set(projectsList.map((p) => p.category)))];

export default function Projects() {
  const [active, setActive] = useState("All");
  const shown = active === "All" ? projectsList : projectsList.filter((p) => p.category === active);

  return (
    <section id="projects" className="grain relative scroll-mt-24 bg-transparent pb-28 pt-16 border-t border-white/10">
      <div className="container-x relative z-10">
        <div data-reveal className="max-w-3xl">
          <p className="label text-[#C5A880] tracking-editorial text-[11px] sm:text-xs">
            02 / Selected Works · Portfolio Catalog
          </p>
          <div className="mt-3 block">
            <h2 className="display text-[clamp(2.5rem,7vw,5.5rem)] text-fg leading-[0.95] tracking-[-0.035em]">
              Selected
              <span className="display-soft block text-[0.62em]">Architectures &amp; Builds</span>
            </h2>
          </div>
          <p className="mt-5 max-w-[56ch] text-base sm:text-lg leading-relaxed text-[#E6DDD5]/80 font-sans">
            Real software systems across Java and MySQL architectures, an automated IoT prototype, and responsive
            web solutions. Select any project for an architectural case study.
          </p>
        </div>

        {/* Category Filters */}
        <div
          data-reveal
          role="group"
          aria-label="Filter projects by category"
          className="mt-10 flex flex-wrap gap-2.5"
        >
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              aria-pressed={active === f}
              onClick={() => setActive(f)}
              className={`min-h-[40px] rounded-full border px-4 text-xs font-mono transition-all ${
                active === f
                  ? "border-[#C5A880] bg-[#C5A880]/15 text-[#F4EFEA] shadow-gold font-semibold"
                  : "border-white/10 bg-black/40 text-muted hover:border-[#C5A880]/40 hover:text-white"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
        <p className="sr-only" aria-live="polite">
          Showing {shown.length} {shown.length === 1 ? "project" : "projects"}
        </p>

        {/* Project List */}
        <div className="mt-10 space-y-8">
          {shown.map((p, i) => (
            <ProjectRow key={p.id} p={p} flip={i % 2 === 1} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
