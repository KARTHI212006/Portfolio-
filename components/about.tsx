import Image from "next/image";
import { MapPin } from "lucide-react";
import { CGPA, personalInfo, statsList } from "@/lib/data";

const techChips = ["Java", "Python", "C", "C++", "HTML", "CSS", "JavaScript", "MySQL", "AI tools"];

export default function About() {
  return (
    <section id="about" className="grain relative scroll-mt-24 overflow-x-clip bg-transparent pb-28 pt-16 sm:pt-24 border-t border-white/10">
      <div className="container-x relative z-10">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-20">
          {/* Architectural portrait frame */}
          <div data-reveal className="mx-auto w-full max-w-[380px] lg:mx-0">
            <div data-parallax data-depth="0.8" className="relative">
              <div className="relative overflow-hidden rounded-2xl border border-[#C5A880]/20 bg-black/45 p-3 shadow-2xl backdrop-blur-sm">
                <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-black/40">
                  <Image
                    src="/images/profile.jpg"
                    alt="Portrait of Karthikeyan S in a dark suit outside an office building"
                    fill
                    sizes="(min-width: 1024px) 380px, 80vw"
                    className="object-cover object-[50%_18%]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] text-[#E6DDD5]">
                    <span className="font-mono tracking-wider text-[#C5A880]">KARTHIKEYAN S.</span>
                    <span className="font-mono text-muted">B.E. CSE · 2027</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Introduction */}
          <div>
            <p data-reveal className="label text-[#C5A880] tracking-editorial text-[11px] sm:text-xs">
              01 / About Me · Engineering Philosophy
            </p>

            <div data-reveal className="mt-3 block">
              <h2 className="display text-[clamp(2.5rem,7vw,5.5rem)] text-fg leading-[0.95] tracking-[-0.035em]">
                Driven by logic
                <span className="display-soft block text-[0.62em]">and practical systems</span>
              </h2>
            </div>

            <p data-reveal className="mt-6 text-xl font-semibold tracking-tight sm:text-2xl text-[#F4EFEA]">
              I&apos;m Karthikeyan S.
              <span className="mt-1 block text-base font-normal text-muted sm:text-lg font-sans">{personalInfo.role}</span>
            </p>

            <p data-reveal className="mt-5 max-w-[58ch] text-base leading-relaxed text-[#E6DDD5]/85 sm:text-lg font-sans">
              {personalInfo.bio}
            </p>

            <p data-reveal className="mt-4 max-w-[58ch] text-base leading-relaxed text-[#E6DDD5]/80 font-sans">
              B.E. Computer Science and Engineering at M.P. Nachimuthu M. Jaganathan Engineering College, expected
              graduation 2027, CGPA {CGPA}/10.
            </p>

            <p data-reveal className="mt-4 flex items-center gap-2 text-sm text-muted font-sans">
              <MapPin className="h-4 w-4 text-[#C5A880]" aria-hidden="true" />
              {personalInfo.location}
            </p>

            <ul data-reveal className="mt-8 flex flex-wrap gap-2" aria-label="Technologies I work with">
              {techChips.map((t) => (
                <li
                  key={t}
                  className="inline-flex items-center rounded-full border border-[#C5A880]/15 bg-black/40 px-3.5 py-1.5 text-xs font-mono text-[#E6DDD5] transition-colors hover:border-[#C5A880]/40"
                >
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Stats */}
        <dl className="mt-20 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {statsList.map((s) => (
            <div
              key={s.id}
              data-reveal
              className="rounded-2xl border border-[#C5A880]/15 bg-black/40 p-5 sm:p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-[#C5A880]/40 hover:shadow-gold"
            >
              <dt className="label text-[#C5A880] text-[10px] tracking-editorial">{s.label}</dt>
              <dd className="display mt-3 text-4xl tabular-nums sm:text-5xl text-[#F4EFEA]">
                {s.value}
                {s.unit && <span className="ml-1 text-lg font-mono font-normal text-[#C5A880] sm:text-xl">{s.unit}</span>}
                <span className="mt-2 block font-sans text-xs font-normal tracking-normal text-muted">{s.note}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
