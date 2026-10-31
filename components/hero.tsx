import Image from "next/image";
import { Download } from "lucide-react";
import { CGPA, personalInfo } from "@/lib/data";

const rows = [
  { k: "Role", v: personalInfo.role },
  { k: "Degree", v: "B.E. Computer Science and Engineering" },
  { k: "Graduating / CGPA", v: `2027 / ${CGPA} out of 10` },
  { k: "Based in", v: personalInfo.location },
];

/**
 * Hero B, "Specimen": full-height duotone portrait, stacked masthead type, ruled data table.
 * Plain HTML so it reads without JS; GSAP only reveals the type lines and the plate.
 */
export default function Hero() {
  return (
    <section id="home" aria-labelledby="hero-title" className="relative bg-ink text-lav">
      <div className="grid min-h-[100dvh] grid-cols-1 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
        {/* Portrait plate */}
        <div className="relative order-first min-h-[420px]">
          <div data-plate className="plate duotone absolute inset-0">
            <Image
              src="/images/profile.jpg"
              alt="Portrait of Karthikeyan S in a dark suit outside a glass office building"
              fill
              priority
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="object-cover object-[50%_18%]"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 z-10 bg-[linear-gradient(180deg,rgba(23,19,28,0)_55%,#17131C_100%)]"
            />
          </div>
          <p className="mono absolute bottom-4 left-5 z-20 text-lav sm:left-8">Fig. 00 — Portrait</p>
        </div>

        {/* Masthead + data */}
        <div className="flex flex-col px-5 pb-10 pt-8 sm:px-8 lg:px-12 lg:pb-10 lg:pt-24">
          <p data-reveal className="mono text-orchid">
            Hello, I&apos;m Karthikeyan S.
          </p>

          <h1 id="hero-title" className="mt-5">
            <span className="sr-only">Karthikeyan S, </span>
            <span data-mask aria-hidden="true">
              <span className="display-wide block text-[clamp(4.5rem,21vw,8rem)] lg:text-[clamp(5rem,11.4vw,10.5rem)]">Java</span>
            </span>
            <span data-mask aria-hidden="true">
              <span className="serif-i block text-[clamp(4.5rem,21vw,8rem)] leading-[0.85] text-orchid lg:text-[clamp(5rem,11.4vw,10.5rem)]">full</span>
            </span>
            <span data-mask aria-hidden="true">
              <span className="display-wide block text-[clamp(4.5rem,21vw,8rem)] lg:text-[clamp(5rem,11.4vw,10.5rem)]">Stack</span>
            </span>
            <span className="sr-only">Developer</span>
          </h1>

          <p data-reveal className="mt-8 max-w-[44ch] text-lg">
            I build Java and MySQL applications and responsive web interfaces. Final-year CSE student, open to
            internships and entry-level roles.
          </p>

          <dl data-reveal className="mt-8 border-b border-lav/30">
            {rows.map((r) => (
              <div key={r.k} className="grid grid-cols-[minmax(0,9rem)_minmax(0,1fr)] gap-4 border-t border-lav/30 py-3 sm:grid-cols-[12rem_minmax(0,1fr)]">
                <dt className="mono text-orchid">{r.k}</dt>
                <dd className="mono">{r.v}</dd>
              </div>
            ))}
          </dl>

          <div data-reveal className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-2">
            <a href="#projects" className="btn-lav">
              Explore projects <span aria-hidden="true">→</span>
            </a>
            <a href={personalInfo.resumeUrl} download className="link-u">
              <Download className="h-4 w-4" aria-hidden="true" />
              Résumé
            </a>
            <span className="mono ml-auto flex items-center gap-2">
              <span className="inline-block h-2 w-2 bg-signal" aria-hidden="true" />
              Open to roles
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
