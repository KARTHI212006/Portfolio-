import Image from "next/image";
import { Download, MapPin } from "lucide-react";
import { CGPA, personalInfo, statsList } from "@/lib/data";

const techChips = ["Java", "Python", "C", "C++", "HTML", "CSS", "JavaScript", "MySQL", "AI tools"];

function Sparkle({ className }: { className: string }) {
  return (
    <svg
      data-float
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={`absolute ${className}`}
      fill="currentColor"
    >
      <path d="M12 0c.6 6.2 5.8 11.4 12 12-6.2.6-11.4 5.8-12 12-.6-6.2-5.8-11.4-12-12C6.2 11.4 11.4 6.2 12 0Z" />
    </svg>
  );
}

export default function About() {
  return (
    <section id="about" className="grain relative scroll-mt-24 overflow-x-clip bg-ink pb-24 pt-32 sm:pt-40">
      <div className="container-x relative z-10">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-20">
          {/* Framed portrait */}
          <div data-hero className="mx-auto w-full max-w-[380px] lg:mx-0">
            <div data-parallax className="relative">
              <div
                aria-hidden="true"
                className="absolute inset-0 translate-x-4 translate-y-4 rotate-[5deg] rounded-[2rem] border border-red/60"
              />
              <div className="relative rotate-[-3deg] overflow-hidden rounded-[2rem] border border-line bg-panel p-2 shadow-card">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem]">
                  <Image
                    src="/images/profile.jpg"
                    alt="Portrait of Karthikeyan S in a dark suit outside a glass office building"
                    fill
                    priority
                    sizes="(min-width: 1024px) 380px, 80vw"
                    className="object-cover object-[50%_18%]"
                  />
                </div>
              </div>
              <Sparkle className="-left-5 -top-5 h-8 w-8 text-red" />
              <Sparkle className="-right-4 top-1/3 h-5 w-5 text-fg" />
              <Sparkle className="-bottom-4 left-10 h-6 w-6 text-red" />
            </div>
          </div>

          {/* Introduction */}
          <div>
            <p data-hero className="pill label border-line text-muted">
              <span className="h-2 w-2 rounded-full bg-red" aria-hidden="true" />
              About me
            </p>
            <h1
              data-hero
              className="mt-5 text-[clamp(4.25rem,13vw,9.5rem)] font-bold leading-[0.88] tracking-[-0.045em]"
            >
              Hello<span className="text-red">!</span>
            </h1>
            <p data-hero className="mt-5 font-heading text-2xl font-semibold tracking-tight sm:text-3xl">
              I&apos;m Karthikeyan S.
              <span className="mt-1 block text-lg font-medium text-muted sm:text-xl">
                Java Developer | Full Stack Developer | AI Enthusiast
              </span>
            </p>
            <p data-hero className="mt-6 max-w-[58ch] text-base leading-relaxed text-muted sm:text-lg">
              {personalInfo.bio}
            </p>
            <p data-hero className="mt-4 max-w-[58ch] text-base leading-relaxed text-fg/90">
              B.E. Computer Science and Engineering at M.P. Nachimuthu M. Jaganathan Engineering College, expected
              graduation 2027, CGPA {CGPA}/10.
            </p>
            <p data-hero className="mt-3 flex items-center gap-2 text-sm text-muted">
              <MapPin className="h-4 w-4 text-red" aria-hidden="true" />
              {personalInfo.location}
            </p>

            <ul data-hero className="mt-7 flex flex-wrap gap-2" aria-label="Technologies I work with">
              {techChips.map((t) => (
                <li key={t} className="chip">
                  {t}
                </li>
              ))}
            </ul>

            <div data-hero className="mt-9 flex flex-wrap gap-3">
              <a href="#projects" className="btn-red">
                View projects
              </a>
              <a href={personalInfo.resumeUrl} download className="btn-outline">
                <Download className="h-4 w-4" aria-hidden="true" />
                Download résumé
              </a>
            </div>
          </div>
        </div>

        {/* Stats */}
        <dl className="mt-20 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {statsList.map((s) => (
            <div
              key={s.id}
              data-reveal
              className="rounded-3xl border border-line bg-panel p-5 shadow-card sm:p-6"
            >
              <dt className="label text-muted">{s.label}</dt>
              <dd className="mt-4 font-heading text-5xl font-bold tracking-tight tabular-nums sm:text-6xl">
                {s.value}
                {s.unit && <span className="ml-1 text-xl font-semibold text-red sm:text-2xl">{s.unit}</span>}
                <span className="mt-2 block font-sans text-sm font-normal tracking-normal text-muted">{s.note}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
