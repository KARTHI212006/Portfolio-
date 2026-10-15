import Image from "next/image";
import { ArrowDown, Download } from "lucide-react";
import { personalInfo } from "@/lib/data";

const previews = [
  {
    src: "/images/gamevault.jpg",
    alt: "GameVault website preview",
    title: "GameVault",
    meta: "HTML, CSS, JavaScript",
    position: "left-0 top-0 w-[74%] rotate-[-5deg]",
  },
  {
    src: "/images/irrigation.jpg",
    alt: "Smart Irrigation System project photo",
    title: "Smart Irrigation System",
    meta: "Arduino, IoT sensors",
    position: "bottom-0 right-0 w-[68%] rotate-[4deg]",
  },
];

/**
 * Red intro band. Real project covers sit in a tilted stack on the right;
 * everything is plain HTML so the hero stays readable without JS or WebGL.
 * Entrance and pointer parallax are driven by <SiteMotion /> via data attributes.
 */
export default function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="grain relative flex min-h-[100dvh] items-center overflow-x-clip bg-red-deep pb-20 pt-24 text-white"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(55%_45%_at_78%_30%,rgba(255,255,255,0.16),transparent_70%)]"
      />

      <div className="container-x relative z-10">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-10">
          <div>
            <p data-hero className="label text-white">
              Hello, I&apos;m
            </p>
            <h1
              id="hero-title"
              data-hero
              className="mt-4 text-[clamp(3rem,8vw,6.75rem)] font-bold leading-[0.9] tracking-[-0.045em]"
            >
              Karthikeyan S<span className="text-ink">.</span>
            </h1>
            <p data-hero className="mt-6 font-heading text-2xl font-semibold tracking-tight sm:text-3xl">
              {personalInfo.role}
            </p>
            <p data-hero className="mt-4 max-w-[46ch] text-lg leading-relaxed text-white">
              I build Java and MySQL applications and responsive web interfaces. Final-year CSE student, open to
              internships and entry-level roles.
            </p>
            <div data-hero className="mt-9 flex flex-wrap gap-3">
              <a href="#projects" className="btn bg-white text-ink-text hover:bg-ink hover:text-white">
                Explore Projects
              </a>
              <a
                href={personalInfo.resumeUrl}
                download
                className="btn border border-white/80 text-white hover:bg-white hover:text-ink-text"
              >
                <Download className="h-4 w-4" aria-hidden="true" />
                Download Résumé
              </a>
            </div>
          </div>

          {/* Tilted project covers: decorative preview, real content lives in #projects */}
          <div data-hero className="hidden lg:block">
            <div data-parallax data-depth="1.4" className="relative mx-auto h-[580px] w-full max-w-[460px]">
              {previews.map((p) => (
                <a
                  key={p.title}
                  href="#projects"
                  className={`absolute block overflow-hidden rounded-[1.75rem] border border-black/30 bg-ink p-2 shadow-card transition-transform duration-300 hover:-translate-y-1 ${p.position}`}
                >
                  <div className="relative aspect-[16/10] overflow-hidden rounded-[1.25rem]">
                    <Image src={p.src} alt={p.alt} fill sizes="340px" className="object-cover" />
                  </div>
                  <div className="px-3 pb-2 pt-3">
                    <p className="font-heading text-base font-semibold text-white">{p.title}</p>
                    <p className="text-sm text-muted">{p.meta}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to the About section"
        className="absolute bottom-8 left-1/2 hidden h-11 w-11 -translate-x-1/2 place-items-center rounded-full border border-white/60 text-white transition-colors hover:bg-white hover:text-ink-text sm:grid"
      >
        <ArrowDown className="h-5 w-5" aria-hidden="true" />
      </a>
    </section>
  );
}
