"use client";

import Image from "next/image";
import * as Dialog from "@radix-ui/react-dialog";
import { X, ExternalLink } from "lucide-react";
import { certificatesList, educationList, experienceList } from "@/lib/data";

const pillById: Record<string, string> = {
  "zen1-cert": "IoT Intern · 34 days",
  "novitech-fullstack-cert": "Full Stack · 30 days",
  "kongu-iot-bootcamp-cert": "IoT Bootcamp",
};

export default function Experience() {
  const internship = experienceList[0];

  return (
    <section id="experience" className="relative scroll-mt-24 bg-transparent pb-28 pt-16 border-t border-white/10">
      <div className="container-x">
        <div data-reveal className="max-w-3xl">
          <p className="label text-[#C5A880] tracking-editorial text-[11px] sm:text-xs">
            04 / Experience &amp; Education · Credentials
          </p>
          <div className="mt-3 block">
            <h2 className="display text-[clamp(2.5rem,7vw,5.5rem)] text-fg leading-[0.95] tracking-[-0.035em]">
              Experience &amp;
              <span className="display-soft block text-[0.62em]">Education</span>
            </h2>
          </div>
          <p className="mt-5 max-w-[56ch] text-base sm:text-lg leading-relaxed text-[#E6DDD5]/80 font-sans">
            {internship.description} Completed a certified 30-day Full Stack MasterClass and an Autonomous IoT
            prototyping bootcamp. Select any credential to view verified details.
          </p>
        </div>

        {/* Certificate Cards */}
        <div
          className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3"
          aria-label="Experience and certificates"
        >
          {certificatesList.map((c) => (
            <div key={c.id} data-reveal className="group block w-full text-left">
              <Dialog.Root>
                <Dialog.Trigger className="block w-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A880]/80 rounded-2xl">
                  <div className="rounded-2xl border border-[#C5A880]/15 bg-black/40 p-3.5 shadow-card backdrop-blur-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:border-[#C5A880]/40 group-hover:shadow-gold">
                    <div className="relative aspect-[3/2] overflow-hidden rounded-xl bg-black/40">
                      <Image
                        src={c.image}
                        alt={`Certificate: ${c.title}`}
                        fill
                        sizes="(min-width: 768px) 380px, 90vw"
                        className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                      />
                      <span className="label absolute left-2.5 top-2.5 rounded-full border border-[#C5A880]/30 bg-black/80 px-2.5 py-1 text-[10px] font-mono text-[#F4EFEA]">
                        {pillById[c.id] ?? "Certificate"}
                      </span>
                    </div>
                    <div className="pt-4 pb-1">
                      <h3 className="font-heading text-lg font-semibold leading-snug tracking-tight text-[#F4EFEA] group-hover:text-[#C5A880] transition-colors">
                        {c.title}
                      </h3>
                      <p className="mt-1.5 text-xs sm:text-sm text-muted font-sans">{c.issuer}</p>
                      <div className="mt-3 flex items-center justify-between text-xs text-[#E6DDD5]/80 font-mono">
                        <span className="text-[#C5A880]">{c.date}</span>
                        <ExternalLink className="h-3.5 w-3.5 text-muted transition-colors group-hover:text-white" />
                      </div>
                    </div>
                  </div>
                </Dialog.Trigger>

                <Dialog.Portal>
                  <Dialog.Overlay className="fixed inset-0 z-[60] bg-black/85 backdrop-blur-md" />
                  <Dialog.Content className="fixed left-1/2 top-1/2 z-[70] max-h-[92dvh] w-[min(94vw,880px)] -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-3xl border border-[#C5A880]/20 bg-[#0d0b0c] p-6 text-[#F4EFEA] shadow-2xl sm:p-8">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <Dialog.Title className="font-heading text-xl sm:text-2xl font-semibold leading-snug text-[#F4EFEA]">
                          {c.title}
                        </Dialog.Title>
                        <Dialog.Description className="mt-1.5 text-xs sm:text-sm text-muted font-mono">
                          {c.issuer} · {c.date}
                          {c.credentialId ? ` · Credential ID: ${c.credentialId}` : ""}
                        </Dialog.Description>
                      </div>
                      <Dialog.Close
                        aria-label="Close certificate modal"
                        className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/15 text-muted transition-colors hover:border-[#C5A880] hover:text-white"
                      >
                        <X className="h-4 w-4" aria-hidden="true" />
                      </Dialog.Close>
                    </div>

                    <div className="relative mt-5 aspect-[3/2] overflow-hidden rounded-xl border border-white/10 bg-black/50">
                      <Image
                        src={c.image}
                        alt={`Full certificate: ${c.title}`}
                        fill
                        sizes="880px"
                        className="object-contain"
                      />
                    </div>
                    <p className="mt-4 text-xs sm:text-sm leading-relaxed text-[#E6DDD5]/80 font-sans">{c.description}</p>
                  </Dialog.Content>
                </Dialog.Portal>
              </Dialog.Root>
            </div>
          ))}
        </div>

        {/* Education Timeline */}
        <div className="mt-24 grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] lg:gap-16">
          <div data-reveal>
            <p className="label text-[#C5A880] tracking-editorial text-[11px] sm:text-xs">
              Education · Academic Journey
            </p>
            <h2 className="display mt-3 text-3xl sm:text-4xl lg:text-5xl text-[#F4EFEA] leading-[0.95]">
              Where <span className="display-soft">I study</span>
            </h2>
          </div>

          <div className="space-y-4">
            {educationList.map((e, idx) => (
              <div
                key={e.id}
                data-reveal
                className="rounded-2xl border border-[#C5A880]/15 bg-black/40 p-6 sm:p-7 shadow-card backdrop-blur-sm transition-all duration-300 hover:border-[#C5A880]/35 hover:shadow-gold"
              >
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-mono text-[#C5A880]">
                      <span>[{String(idx + 1).padStart(2, "0")}]</span>
                      <span>{e.location}</span>
                    </div>
                    <h3 className="font-heading mt-1 text-lg sm:text-xl font-semibold tracking-tight text-[#F4EFEA]">
                      {e.institution}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-[#E6DDD5]/90 font-sans">{e.degree}</p>
                  </div>
                  <span className="inline-flex items-center rounded-full border border-[#C5A880]/20 bg-black/50 px-3 py-1 text-xs font-mono tracking-wider text-[#C5A880]">
                    {e.period}
                  </span>
                </div>
                {e.highlights && e.highlights.length > 0 && (
                  <ul className="mt-4 space-y-1.5 border-t border-white/10 pt-4 font-sans">
                    {e.highlights.map((h) => (
                      <li key={h} className="text-xs sm:text-sm leading-relaxed text-[#E6DDD5]/75">
                        {h}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
