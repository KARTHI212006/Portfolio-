"use client";

import Image from "next/image";
import * as Dialog from "@radix-ui/react-dialog";
import { Briefcase, GraduationCap, X } from "lucide-react";
import { certificatesList, educationList, experienceList } from "@/lib/data";

// Short pill label shown over each image (kept factual: taken from the certificates).
const pillById: Record<string, string> = {
  "zen1-cert": "IoT Intern · 34 days",
  "novitech-fullstack-cert": "Full Stack · 30 days",
  "kongu-iot-bootcamp-cert": "IoT Bootcamp",
};

export default function Experience() {
  const internship = experienceList[0];

  return (
    <section id="experience" className="relative scroll-mt-24 bg-transparent pb-24 pt-8">
      <div className="container-x">
        <div data-reveal className="max-w-3xl">
          <p className="pill label border-line text-muted">
            <Briefcase className="h-3.5 w-3.5 text-red" aria-hidden="true" />
            Experience
            <span className="h-2 w-2 rounded-full bg-red" aria-hidden="true" />
          </p>
          <div className="relative mt-5 block w-fit">
            <h2 className="display text-[clamp(2.75rem,8vw,6.5rem)]">
              Learning
              <span className="display-soft block text-[0.62em]">by doing</span>
            </h2>
            <span className="glass-tag label absolute -right-4 -top-4 translate-x-full max-md:hidden">Internship</span>
          </div>
          <p className="mt-5 max-w-[56ch] text-lg leading-relaxed text-muted">
            {internship.description} Alongside it, I completed a full stack masterclass and an IoT prototyping
            bootcamp. Select a card to view the certificate.
          </p>
        </div>

        <ul
          className="-mx-5 mt-14 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4 sm:-mx-8 sm:px-8 md:mx-0 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:px-0"
          aria-label="Experience and certificates"
          tabIndex={0}
        >
          {certificatesList.map((c, i) => (
            <li
              key={c.id}
              data-reveal
              className={`w-[82%] shrink-0 snap-center sm:w-[60%] md:w-auto ${i === 1 ? "md:mt-10" : ""}`}
            >
              <Dialog.Root>
                <Dialog.Trigger className="group block w-full text-left">
                  <div className="relative aspect-[3/2] overflow-hidden rounded-3xl bg-panel shadow-card ring-1 ring-line">
                    <Image
                      src={c.image}
                      alt={`Certificate: ${c.title}`}
                      fill
                      sizes="(min-width: 768px) 380px, 82vw"
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04] group-focus-visible:scale-[1.04]"
                    />
                    <span className="label absolute left-3 top-3 rounded-full bg-ink px-3 py-1.5 text-[11px] text-fg">
                      {pillById[c.id] ?? "Certificate"}
                    </span>
                  </div>
                  <h3 className="mt-5 text-xl font-semibold leading-snug tracking-tight">{c.title}</h3>
                  <p className="mt-1.5 text-sm text-muted">{c.issuer}</p>
                  <p className="mt-1 text-sm font-medium text-red">{c.date}</p>
                </Dialog.Trigger>

                <Dialog.Portal>
                  <Dialog.Overlay className="fixed inset-0 z-[60] bg-black/80" />
                  <Dialog.Content className="fixed left-1/2 top-1/2 z-[70] max-h-[92dvh] w-[min(94vw,880px)] -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-3xl border border-line bg-ink p-4 text-fg shadow-card sm:p-6">
                    <div className="flex items-start justify-between gap-4">
                      <Dialog.Title className="font-heading text-xl font-semibold leading-snug sm:text-2xl">
                        {c.title}
                      </Dialog.Title>
                      <Dialog.Close
                        aria-label="Close certificate"
                        className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-line"
                      >
                        <X className="h-5 w-5" aria-hidden="true" />
                      </Dialog.Close>
                    </div>
                    <Dialog.Description className="mt-2 text-sm text-muted">
                      {c.issuer} · {c.date}
                      {c.credentialId ? ` · ID ${c.credentialId}` : ""}
                    </Dialog.Description>
                    <div className="relative mt-4 aspect-[3/2] overflow-hidden rounded-2xl bg-panel">
                      <Image src={c.image} alt={`Full certificate: ${c.title}`} fill sizes="880px" className="object-contain" />
                    </div>
                    <p className="mt-4 text-sm leading-relaxed text-muted">{c.description}</p>
                  </Dialog.Content>
                </Dialog.Portal>
              </Dialog.Root>
            </li>
          ))}
        </ul>

        {/* Education */}
        <div className="mt-24 grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] lg:gap-20">
          <div data-reveal>
            <p className="pill label border-line text-muted">
              <GraduationCap className="h-3.5 w-3.5 text-red" aria-hidden="true" />
              Education
            </p>
            <h2 className="display mt-5 text-4xl sm:text-5xl">
              Where <span className="display-soft">I study</span>
            </h2>
          </div>
          <ol className="divide-y divide-line border-y border-line">
            {educationList.map((e) => (
              <li key={e.id} data-reveal className="grid gap-2 py-7 sm:grid-cols-[minmax(0,1fr)_auto] sm:gap-8">
                <div>
                  <h3 className="text-xl font-semibold tracking-tight">{e.institution}</h3>
                  <p className="mt-1 text-muted">{e.degree}</p>
                  <p className="mt-1 text-sm text-muted">{e.location}</p>
                </div>
                <p className="label self-start text-red sm:text-right">{e.period}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
