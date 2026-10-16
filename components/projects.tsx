"use client";

import { useState } from "react";
import Image from "next/image";
import * as Dialog from "@radix-ui/react-dialog";
import { ArrowUpRight, Github, X } from "lucide-react";
import { projectsList, type ProjectItem } from "@/lib/data";

function ProjectLinks({ p }: { p: ProjectItem }) {
  if (!p.githubUrl && !p.liveUrl) return null;
  return (
    <div className="flex flex-wrap gap-3">
      {p.githubUrl && (
        <a href={p.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-outline !min-h-[40px] !px-4">
          <Github className="h-4 w-4" aria-hidden="true" />
          GitHub
          <span className="sr-only"> repository for {p.title} (opens in a new tab)</span>
        </a>
      )}
      {p.liveUrl && (
        <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-red !min-h-[40px] !px-4">
          Live demo
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          <span className="sr-only"> of {p.title} (opens in a new tab)</span>
        </a>
      )}
    </div>
  );
}

function CaseStudy({ p }: { p: ProjectItem }) {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 z-[60] bg-black/80" />
      <Dialog.Content className="fixed left-1/2 top-1/2 z-[70] max-h-[92dvh] w-[min(94vw,820px)] -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-3xl border border-line bg-ink p-5 shadow-card sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="label text-red">{p.badge}</p>
            <Dialog.Title className="mt-2 font-heading text-2xl font-bold tracking-tight sm:text-3xl">
              {p.title}
            </Dialog.Title>
          </div>
          <Dialog.Close
            aria-label="Close case study"
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-line"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </Dialog.Close>
        </div>
        <Dialog.Description className="mt-3 text-muted">{p.shortDesc}</Dialog.Description>

        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <div>
            <h3 className="label text-muted">Problem</h3>
            <p className="mt-2 leading-relaxed">{p.problem}</p>
          </div>
          <div>
            <h3 className="label text-muted">Approach</h3>
            <p className="mt-2 leading-relaxed">{p.solution}</p>
          </div>
        </div>

        <h3 className="label mt-7 text-muted">Features</h3>
        <ul className="mt-3 space-y-2">
          {p.features.map((f) => (
            <li key={f} className="flex gap-3 leading-relaxed">
              <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red" aria-hidden="true" />
              {f}
            </li>
          ))}
        </ul>

        <h3 className="label mt-7 text-muted">My role</h3>
        <p className="mt-2 leading-relaxed">{p.myContribution}</p>

        <h3 className="label mt-7 text-muted">Tech stack</h3>
        <ul className="mt-3 flex flex-wrap gap-2">
          {p.tech.map((t) => (
            <li key={t} className="chip">
              {t}
            </li>
          ))}
        </ul>

        <div className="mt-8">
          <ProjectLinks p={p} />
        </div>
      </Dialog.Content>
    </Dialog.Portal>
  );
}

function ProjectRow({ p, flip }: { p: ProjectItem; flip: boolean }) {
  return (
    <article className="animate-rise grid gap-4 lg:grid-cols-2 lg:gap-5">
      {/* Photo card */}
      <div
        className={`relative min-h-[260px] overflow-hidden rounded-[2rem] border border-line bg-panel shadow-card sm:min-h-[340px] ${
          flip ? "lg:order-2" : ""
        }`}
      >
        <Image
          src={p.image}
          alt={`${p.title} project preview`}
          fill
          sizes="(min-width: 1024px) 590px, 94vw"
          className="object-cover"
        />
        <span className="glass-tag label absolute left-4 top-4 !py-1.5 text-[11px]">{p.badge}</span>
      </div>

      {/* Glow card: three real facts about the project */}
      <div className="relative flex flex-col overflow-hidden rounded-[2rem] border border-line bg-[radial-gradient(120%_90%_at_100%_0%,rgba(240,55,79,0.5),transparent_62%),linear-gradient(165deg,#2b0d13,#130A0C)] p-6 shadow-card sm:p-8">
        <h3 className="display text-3xl sm:text-4xl">{p.title}</h3>
        <p className="mt-3 max-w-[48ch] leading-relaxed text-fg/80">{p.shortDesc}</p>
        <dl className="mt-6 grid grid-cols-3 gap-3 border-y border-white/15 py-5">
          {p.highlights.map((h) => (
            <div key={h.label}>
              <dd className="display text-2xl sm:text-3xl">{h.value}</dd>
              <dt className="mt-2 text-xs leading-snug text-fg/70">{h.label}</dt>
            </div>
          ))}
        </dl>
        <ul className="mt-5 flex flex-wrap gap-2" aria-label="Tech stack">
          {p.tech.map((t) => (
            <li key={t} className="chip !px-3 !py-1 !text-[13px]">
              {t}
            </li>
          ))}
        </ul>
        <div className="mt-auto flex flex-wrap items-center gap-3 pt-7">
          <Dialog.Root>
            <Dialog.Trigger className="btn-light !min-h-[40px] !px-4">
              Case study
              <span className="sr-only"> for {p.title}</span>
            </Dialog.Trigger>
            <CaseStudy p={p} />
          </Dialog.Root>
          <ProjectLinks p={p} />
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
    <section id="projects" className="grain relative scroll-mt-24 bg-ink pb-24 pt-8">
      <div className="container-x relative z-10">
        <div data-reveal className="max-w-3xl">
          <p className="pill label border-line text-muted">
            <span className="h-2 w-2 rounded-full bg-red" aria-hidden="true" />
            Projects
          </p>
          <div className="relative mt-5 block w-fit">
            <h2 className="display text-[clamp(2.75rem,8vw,6.5rem)]">
              Things
              <span className="display-soft block text-[0.62em]">I&apos;ve built</span>
            </h2>
            <span className="glass-tag label absolute -right-4 -top-4 translate-x-full max-md:hidden">
              {projectsList.length} projects
            </span>
          </div>
          <p className="mt-5 max-w-[56ch] text-lg leading-relaxed text-muted">
            Java and MySQL applications, an IoT prototype and web projects. Each one opens a short case study.
          </p>
        </div>

        <div data-reveal role="group" aria-label="Filter projects by category" className="mt-10 flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              aria-pressed={active === f}
              onClick={() => setActive(f)}
              className={`min-h-[44px] rounded-full border px-5 text-sm font-medium transition-colors ${
                active === f
                  ? "border-red-deep bg-red-deep text-white"
                  : "border-white/20 text-fg hover:border-white/55"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
        <p className="sr-only" aria-live="polite">
          Showing {shown.length} {shown.length === 1 ? "project" : "projects"}
        </p>

        <div className="mt-10 space-y-5">
          {shown.map((p, i) => (
            <ProjectRow key={p.id} p={p} flip={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
