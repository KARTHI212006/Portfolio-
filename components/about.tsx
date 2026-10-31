import Image from "next/image";
import { CGPA, personalInfo, statsList } from "@/lib/data";

const worksWith = ["Java", "Python", "C", "C++", "HTML", "CSS", "JavaScript", "MySQL", "AI tools"];

/** Paper interlude: magazine spread with a narrow plate, wide text, and a ruled facts strip. */
export default function About() {
  return (
    <section id="about" className="tone-paper scroll-mt-14 bg-paper py-20 text-ink sm:py-28">
      <div className="container-x">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 lg:grid-cols-12">
          <p className="mono text-violet lg:col-span-3">02 — About</p>

          <div className="lg:col-span-6">
            <h2 className="serif-i text-[clamp(3rem,7.5vw,6.25rem)]">
              <span data-mask>
                <span>Hello, I&apos;m</span>
              </span>
              <span data-mask>
                <span>Karthikeyan.</span>
              </span>
            </h2>
            <p data-reveal className="mt-8 max-w-[56ch] text-xl leading-snug">
              {personalInfo.bio}
            </p>
            <p data-reveal className="mt-5 max-w-[56ch]">
              B.E. Computer Science and Engineering at M.P. Nachimuthu M. Jaganathan Engineering College, expected
              graduation 2027, CGPA {CGPA}/10. Based in {personalInfo.location}.
            </p>
            <p data-reveal className="mono mt-8 text-violet">
              Works with
            </p>
            <p data-reveal className="mono mt-2 max-w-[56ch] leading-7">
              {worksWith.join(" · ")}
            </p>
          </div>

          <figure data-reveal className="lg:col-span-3">
            <div data-plate className="plate duotone aspect-[3/4] max-w-[320px] lg:max-w-none">
              <Image
                src="/images/profile.jpg"
                alt="Karthikeyan S, head and shoulders, in a dark suit"
                fill
                sizes="(min-width: 1024px) 300px, 320px"
                className="object-cover object-[50%_8%]"
              />
            </div>
            <figcaption className="mono mt-3 text-violet">Fig. 02 — Karthikeyan S.</figcaption>
          </figure>
        </div>

        <dl className="mt-20 grid grid-cols-2 border-t border-ink/30 lg:grid-cols-4">
          {statsList.map((s) => (
            <div key={s.id} data-reveal className="border-b border-ink/30 py-6 pr-4 lg:border-b-0">
              <dt className="mono text-violet">{s.label}</dt>
              <dd className="mt-4">
                <span className="display block text-6xl sm:text-7xl">
                  {s.value}
                  {s.unit && <span className="ml-1 text-2xl text-signal-deep sm:text-3xl">{s.unit}</span>}
                </span>
                <span className="mono mt-2 block">{s.note}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
