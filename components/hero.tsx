import Image from "next/image";
import { ArrowDown, Download } from "lucide-react";
import { CGPA, personalInfo } from "@/lib/data";

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
 * Crimson hero. Its background is the exact colour of the intro video's last frame (#BE0C2A),
 * so the scrubbed intro ends and this section simply continues. Real project covers sit in a
 * tilted stack; everything is plain HTML so it reads without JS.
 */
export default function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="grain relative flex min-h-[100dvh] items-center overflow-x-clip bg-red-deep pb-24 pt-28 text-white"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(55%_45%_at_78%_30%,rgba(255,255,255,0.14),transparent_70%)]"
      />

      <div className="container-x relative z-10">
        <p data-reveal className="label text-white">
          Hello, I&apos;m
        </p>
        <div data-reveal className="relative mt-4 block w-fit max-w-full">
          <h1 id="hero-title" className="display text-[clamp(2.6rem,11.4vw,10rem)]">
            Karthikeyan
            <span className="mt-2 block text-[0.4em] leading-[1] text-white/90">{personalInfo.role}</span>
          </h1>
          <span className="glass-tag label absolute -top-5 right-0 max-sm:hidden sm:-right-6 sm:translate-x-1/4">
            B.E. CSE · 2027
          </span>
          <span className="glass-tag label absolute -bottom-5 right-4 max-sm:hidden">
            CGPA {CGPA}/10
          </span>
        </div>

        <div className="mt-12 grid grid-cols-1 items-end gap-12 lg:grid-cols-[minmax(0,6fr)_minmax(0,5fr)]">
          <div>
            <p data-reveal className="max-w-[46ch] text-lg leading-relaxed text-white">
              I build Java and MySQL applications and responsive web interfaces. Final-year CSE student, open to
              internships and entry-level roles.
            </p>
            <div data-reveal className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className="btn bg-white text-[#150608] hover:bg-ink hover:text-white">
                Explore Projects
              </a>
              <a href={personalInfo.resumeUrl} download className="btn border border-white/80 text-white hover:bg-white hover:text-[#150608]">
                <Download className="h-4 w-4" aria-hidden="true" />
                Download Résumé
              </a>
            </div>
          </div>

          {/* Tilted project covers: decorative preview, real content lives in #projects */}
          <div data-reveal className="hidden lg:block">
            <div data-parallax data-depth="1.2" className="relative ml-auto h-[420px] w-full max-w-[440px]">
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
                    <p className="text-base font-semibold text-white">{p.title}</p>
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
        className="absolute bottom-8 left-1/2 hidden h-11 w-11 -translate-x-1/2 place-items-center rounded-full border border-white/60 text-white transition-colors hover:bg-white hover:text-[#150608] sm:grid"
      >
        <ArrowDown className="h-5 w-5" aria-hidden="true" />
      </a>
    </section>
  );
}
