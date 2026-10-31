"use client";

import Image from "next/image";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { certificatesList, educationList, experienceList } from "@/lib/data";

export default function Experience() {
  const internship = experienceList[0];

  return (
    <section id="experience" className="tone-paper scroll-mt-14 bg-paper py-20 text-ink sm:py-28">
      <div className="container-x">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 lg:grid-cols-12">
          <p className="mono text-violet lg:col-span-3">04 — Experience</p>
          <div className="lg:col-span-9">
            <h2 className="serif-i text-[clamp(3rem,7.5vw,6.25rem)]">
              <span data-mask>
                <span>Learning by doing.</span>
              </span>
            </h2>
            <div data-reveal className="mt-8 grid gap-6 border-t border-ink/30 pt-6 md:grid-cols-[minmax(0,12rem)_minmax(0,1fr)]">
              <p className="mono text-violet">
                {internship.duration}
                <br />
                {internship.period}
              </p>
              <div>
                <p className="text-xl font-semibold">
                  {internship.role}, {internship.company}
                </p>
                <p className="mono mt-1">{internship.location}</p>
                <p className="mt-4 max-w-[60ch]">{internship.description}</p>
                <ul className="mt-4 max-w-[60ch] space-y-2">
                  {internship.achievements.map((a) => (
                    <li key={a} className="grid grid-cols-[1rem_minmax(0,1fr)] gap-2 text-[15px]">
                      <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 bg-signal-deep" />
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <ul className="mt-16 grid gap-10 md:grid-cols-3 md:gap-6" aria-label="Certificates">
          {certificatesList.map((c, i) => (
            <li key={c.id} data-reveal>
              <Dialog.Root>
                <Dialog.Trigger className="group block w-full text-left">
                  <div data-plate className="plate relative aspect-[3/2] bg-lav">
                    <Image
                      src={c.image}
                      alt={`Certificate: ${c.title}`}
                      fill
                      sizes="(min-width: 768px) 400px, 94vw"
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03] group-focus-visible:scale-[1.03]"
                    />
                  </div>
                  <p className="mono mt-3 flex justify-between text-violet">
                    <span>Fig. 0{i + 4}</span>
                    <span>View certificate</span>
                  </p>
                  <h3 className="mt-2 text-xl font-semibold leading-snug">{c.title}</h3>
                  <p className="mt-1 text-[15px]">{c.issuer}</p>
                  <p className="mono mt-1">{c.date}</p>
                </Dialog.Trigger>

                <Dialog.Portal>
                  <Dialog.Overlay className="fixed inset-0 z-[60] bg-ink/85" />
                  <Dialog.Content className="fixed left-1/2 top-1/2 z-[70] max-h-[92dvh] w-[min(94vw,880px)] -translate-x-1/2 -translate-y-1/2 overflow-y-auto border border-lav/30 bg-ink p-4 text-lav sm:p-6">
                    <div className="flex items-start justify-between gap-4">
                      <Dialog.Title className="serif-i text-3xl leading-tight sm:text-4xl">{c.title}</Dialog.Title>
                      <Dialog.Close aria-label="Close certificate" className="grid h-11 w-11 shrink-0 place-items-center border border-lav/30">
                        <X className="h-5 w-5" aria-hidden="true" />
                      </Dialog.Close>
                    </div>
                    <Dialog.Description className="mono mt-3 text-orchid">
                      {c.issuer} · {c.date}
                      {c.credentialId ? ` · ID ${c.credentialId}` : ""}
                    </Dialog.Description>
                    <div className="relative mt-4 aspect-[3/2] bg-aub">
                      <Image src={c.image} alt={`Full certificate: ${c.title}`} fill sizes="880px" className="object-contain" />
                    </div>
                    <p className="mt-4 text-[15px] leading-relaxed">{c.description}</p>
                  </Dialog.Content>
                </Dialog.Portal>
              </Dialog.Root>
            </li>
          ))}
        </ul>

        <div className="mt-24 grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-12">
          <p className="mono text-violet lg:col-span-3">Education</p>
          <ol className="border-b border-ink/30 lg:col-span-9">
            {educationList.map((e) => (
              <li key={e.id} data-reveal className="grid gap-2 border-t border-ink/30 py-6 sm:grid-cols-[minmax(0,1fr)_auto] sm:gap-8">
                <div>
                  <h3 className="text-xl font-semibold">{e.institution}</h3>
                  <p className="mt-1">{e.degree}</p>
                  <p className="mono mt-1 text-violet">{e.location}</p>
                </div>
                <p className="mono sm:text-right">{e.period}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
