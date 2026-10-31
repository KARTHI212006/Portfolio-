"use client";

import { useState } from "react";
import Image from "next/image";
import * as Dialog from "@radix-ui/react-dialog";
import { ArrowUpRight, Github, X } from "lucide-react";
import { projectsList, type ProjectItem } from "@/lib/data";

function ProjectLinks({ p }: { p: ProjectItem }) {
  return (
    <div className="flex flex-wrap items-center gap-x-6 gap-y-1">
      <Dialog.Root>
        <Dialog.Trigger className="btn-lav">
          Case study
          <span className="sr-only"> for {p.title}</span>
        </Dialog.Trigger>
        <CaseStudy p={p} />
      </Dialog.Root>
      {p.liveUrl && (
        <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="link-u">
          Live site
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          <span className="sr-only"> of {p.title} (opens in a new tab)</span>
        </a>
      )}
      {p.githubUrl && (
        <a href={p.githubUrl} target="_blank" rel="noopener noreferrer" className="link-u">
          <Github className="h-4 w-4" aria-hidden="true" />
          GitHub
          <span className="sr-only"> repository for {p.title} (opens in a new tab)</span>
        </a>
      )}
    </div>
  );
}

function CaseStudy({ p }: { p: ProjectItem }) {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 z-[60] bg-ink/85" />
      <Dialog.Content className="fixed left-1/2 top-1/2 z-[70] max-h-[92dvh] w-[min(94vw,820px)] -translate-x-1/2 -translate-y-1/2 overflow-y-auto border border-lav/30 bg-ink p-5 text-lav sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="mono text-orchid">{p.badge}</p>
            <Dialog.Title className="display mt-3 text-5xl sm:text-6xl">{p.title}</Dialog.Title>
          </div>
          <Dialog.Close aria-label="Close case study" className="grid h-11 w-11 shrink-0 place-items-center border border-lav/30">
            <X className="h-5 w-5" aria-hidden="true" />
          </Dialog.Close>
        </div>
        <Dialog.Description className="mt-4">{p.shortDesc}</Dialog.Description>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <div>
            <h3 className="mono text-orchid">Problem</h3>
            <p className="mt-2">{p.problem}</p>
          </div>
          <div>
            <h3 className="mono text-orchid">Approach</h3>
            <p className="mt-2">{p.solution}</p>
          </div>
        </div>

        <h3 className="mono mt-8 text-orchid">Features</h3>
        <ul className="mt-3 space-y-2">
          {p.features.map((f) => (
            <li key={f} className="grid grid-cols-[1rem_minmax(0,1fr)] gap-2">
              <span className="mt-2.5 h-1.5 w-1.5 bg-signal" aria-hidden="true" />
              {f}
            </li>
          ))}
        </ul>

        <h3 className="mono mt-8 text-orchid">My role</h3>
        <p className="mt-2">{p.myContribution}</p>

        <h3 className="mono mt-8 text-orchid">Tech stack</h3>
        <ul className="mt-3 flex flex-wrap gap-2">
          {p.tech.map((t) => (
            <li key={t} className="chip">
              {t}
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-wrap gap-x-6">
          {p.liveUrl && (
            <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="link-u">
              Live site <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          )}
          {p.githubUrl && (
            <a href={p.githubUrl} target="_blank" rel="noopener noreferrer" className="link-u">
              <Github className="h-4 w-4" aria-hidden="true" /> GitHub
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          )}
        </div>
      </Dialog.Content>
    </Dialog.Portal>
  );
}

/** Three ruled facts, each taken from the project's own details. */
function Facts({ p }: { p: ProjectItem }) {
  return (
    <dl className="grid grid-cols-3 gap-4 border-y border-lav/30 py-5">
      {p.highlights.map((h) => (
        <div key={h.label}>
          <dd className="display text-4xl sm:text-5xl">{h.value}</dd>
          <dt className="mono mt-2 text-orchid">{h.label}</dt>
        </div>
      ))}
    </dl>
  );
}

function Plate({ p, fig, className, sizes, position = "object-top" }: { p: ProjectItem; fig: string; className: string; sizes: string; position?: string }) {
  return (
    <figure>
      <div data-plate className={`plate ${className}`}>
        <Image src={p.image} alt={`${p.title} project preview`} fill sizes={sizes} className={`object-cover ${position}`} />
      </div>
      <figcaption className="mono mt-3 flex justify-between text-orchid">
        <span>
          {fig} — {p.title}
        </span>
        <span>{p.tech.slice(0, 3).join(" · ")}</span>
      </figcaption>
    </figure>
  );
}

function Title({ p, n, className = "text-[clamp(3rem,7vw,6rem)]" }: { p: ProjectItem; n: string; className?: string }) {
  return (
    <>
      <p className="mono text-orchid">
        {n} — {p.badge}
      </p>
      <h3 className={`display mt-3 ${className}`}>
        <span data-mask>
          <span>{p.title}</span>
        </span>
      </h3>
    </>
  );
}

/** Each project gets its own composition; the plate, ruled facts and caption system stays the same. */
function ProjectRow({ p, n }: { p: ProjectItem; n: string }) {
  switch (p.id) {
    case "gamevault":
      return (
        <article className="animate-rise">
          <Plate p={p} fig="Fig. 01" className="aspect-[16/8]" sizes="(min-width: 1344px) 1248px, 94vw" />
          <div className="mt-10 grid gap-x-6 gap-y-8 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <Title p={p} n={n} />
            </div>
            <div className="space-y-6 lg:col-span-6">
              <p className="max-w-[52ch] text-lg">{p.shortDesc}</p>
              <Facts p={p} />
              <ProjectLinks p={p} />
            </div>
          </div>
        </article>
      );
    case "smart-irrigation":
      return (
        <article className="animate-rise grid gap-x-6 gap-y-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Plate p={p} fig="Fig. 02" className="aspect-[4/5]" sizes="(min-width: 1024px) 520px, 94vw" position="object-center" />
          </div>
          <div className="flex flex-col justify-end space-y-6 lg:col-span-7">
            <Title p={p} n={n} className="text-[clamp(2.75rem,6vw,5rem)]" />
            <p className="max-w-[52ch] text-lg">{p.shortDesc}</p>
            <Facts p={p} />
            <ProjectLinks p={p} />
          </div>
        </article>
      );
    case "bus-booking":
    case "employee-attendance": {
      const flip = p.id === "employee-attendance";
      return (
        <article className="animate-rise grid gap-x-6 gap-y-8 lg:grid-cols-12">
          <div className={`lg:col-span-7 ${flip ? "lg:order-2" : ""}`}>
            <Plate p={p} fig={flip ? "Fig. 04" : "Fig. 03"} className="aspect-[16/10]" sizes="(min-width: 1024px) 730px, 94vw" />
          </div>
          <div className={`space-y-6 lg:col-span-5 ${flip ? "lg:order-1" : ""}`}>
            <Title p={p} n={n} className="text-[clamp(2.5rem,5vw,4.25rem)]" />
            <p className="max-w-[48ch] text-lg">{p.shortDesc}</p>
            <Facts p={p} />
            <ProjectLinks p={p} />
          </div>
        </article>
      );
    }
    default:
      return (
        <article className="animate-rise grid gap-x-6 gap-y-8 border-t border-lav/30 pt-8 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <Plate p={p} fig="Colophon" className="aspect-[16/10]" sizes="(min-width: 1024px) 300px, 94vw" />
          </div>
          <div className="space-y-5 lg:col-span-9">
            <Title p={p} n={n} className="text-[clamp(2rem,4vw,3.25rem)]" />
            <p className="max-w-[60ch]">{p.shortDesc}</p>
            <Facts p={p} />
            <ProjectLinks p={p} />
          </div>
        </article>
      );
  }
}

const filters = ["All", ...Array.from(new Set(projectsList.map((p) => p.category)))];

export default function Projects() {
  const [active, setActive] = useState("All");
  const shown = active === "All" ? projectsList : projectsList.filter((p) => p.category === active);

  return (
    <section id="projects" className="scroll-mt-14 bg-ink py-20 sm:py-28">
      <div className="container-x">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 lg:grid-cols-12">
          <p className="mono text-orchid lg:col-span-3">05 — Work</p>
          <div className="lg:col-span-9">
            <h2 className="serif-i text-[clamp(3rem,7.5vw,6.25rem)]">
              <span data-mask>
                <span>Things I&apos;ve built.</span>
              </span>
            </h2>
            <p data-reveal className="mt-6 max-w-[56ch] text-xl leading-snug">
              Java and MySQL applications, an IoT prototype and web projects. Each one opens a short case study.
            </p>
          </div>
        </div>

        <div data-reveal role="group" aria-label="Filter projects by category" className="mt-12 flex flex-wrap gap-x-7 gap-y-1 border-b border-lav/30">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              aria-pressed={active === f}
              onClick={() => setActive(f)}
              className={`mono -mb-px min-h-[44px] border-b-2 transition-colors ${
                active === f ? "border-signal text-lav" : "border-transparent text-lav/70 hover:text-lav"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
        <p className="sr-only" aria-live="polite">
          Showing {shown.length} {shown.length === 1 ? "project" : "projects"}
        </p>

        <div className="mt-16 space-y-24">
          {shown.map((p) => (
            <ProjectRow key={p.id} p={p} n={String(projectsList.indexOf(p) + 1).padStart(2, "0")} />
          ))}
        </div>
      </div>
    </section>
  );
}
