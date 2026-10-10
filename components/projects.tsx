"use client";

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

function ProjectCard({ p, featured }: { p: ProjectItem; featured: boolean }) {
  return (
    <article
      data-reveal
      className={`flex flex-col overflow-hidden rounded-3xl border border-line bg-panel shadow-card ${
        featured ? "md:col-span-2 md:grid md:grid-cols-2" : ""
      }`}
    >
      <div className={`relative overflow-hidden bg-ink ${featured ? "aspect-[16/10] md:aspect-auto md:min-h-[360px]" : "aspect-[16/10]"}`}>
        <Image
          src={p.image}
          alt={`${p.title} project preview`}
          fill
          sizes={featured ? "(min-width: 768px) 560px, 94vw" : "(min-width: 768px) 560px, 94vw"}
          className="object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col p-6 sm:p-8">
        <p className="label text-red">{p.badge}</p>
        <h3 className="mt-3 text-2xl font-bold leading-tight tracking-tight sm:text-3xl">{p.title}</h3>
        <p className="mt-3 leading-relaxed text-muted">{p.shortDesc}</p>
        <ul className="mt-5 flex flex-wrap gap-2" aria-label="Tech stack">
          {p.tech.map((t) => (
            <li key={t} className="chip !px-3 !py-1 !text-[13px]">
              {t}
            </li>
          ))}
        </ul>
        <div className="mt-auto flex flex-wrap items-center gap-3 pt-7">
          <Dialog.Root>
            <Dialog.Trigger className="btn-red !min-h-[40px] !px-4">
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

export default function Projects() {
  return (
    <section id="projects" className="grain relative scroll-mt-24 bg-ink pb-24 pt-8">
      <div className="container-x relative z-10">
        <div data-reveal className="max-w-3xl">
          <p className="pill label border-line text-muted">
            <span className="h-2 w-2 rounded-full bg-red" aria-hidden="true" />
            Projects
          </p>
          <h2 className="mt-5 text-[clamp(2.75rem,8vw,5.75rem)] font-bold leading-[0.92] tracking-[-0.04em]">
            Things I&apos;ve built<span className="text-red">.</span>
          </h2>
          <p className="mt-5 max-w-[56ch] text-lg leading-relaxed text-muted">
            Java and MySQL applications, an IoT prototype and web projects. Each card opens a short case study.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 md:gap-6">
          {projectsList.map((p, i) => (
            <ProjectCard key={p.id} p={p} featured={i === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}
