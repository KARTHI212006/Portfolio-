import { skillCategories } from "@/lib/data";

const stack = ["Java", "JDBC", "MySQL"];

/** Lavender ground: a TRACEN-style index. Ruled rows, one real diagram (the stack used in two projects). */
export default function Skills() {
  return (
    <section id="skills" className="tone-paper scroll-mt-14 bg-lav py-20 text-ink sm:py-28">
      <div className="container-x">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <p className="mono text-violet">03 — Skills</p>
          </div>
          <div className="lg:col-span-9">
            <h2 className="display text-[clamp(4rem,12vw,9rem)]">
              <span data-mask>
                <span>Skills</span>
              </span>
            </h2>
            <p data-reveal className="mt-6 max-w-[52ch] text-xl leading-snug">
              Languages, tools and workflows from coursework, projects and my IoT internship.
            </p>
          </div>
        </div>

        <div className="mt-16 border-b border-ink/30">
          {skillCategories.map((cat) => (
            <div key={cat.title} data-reveal className="grid gap-x-6 gap-y-6 border-t border-ink/30 py-8 lg:grid-cols-12">
              <div className="lg:col-span-3">
                <h3 className="serif-i text-3xl">{cat.title}</h3>
                <p className="mono mt-2 text-violet">{cat.badge}</p>
              </div>
              <ul className="grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:col-span-9">
                {cat.skills.map((s) => (
                  <li key={s.name}>
                    <p className="font-semibold">{s.name}</p>
                    <p className="mt-1 text-[15px] leading-snug text-ink/80">{s.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <figure data-reveal className="mt-14 grid gap-x-6 gap-y-4 lg:grid-cols-12">
          <figcaption className="mono text-violet lg:col-span-3">
            Fig. 03 — Data layer in the Bus Booking and Employee Attendance projects
          </figcaption>
          <ol className="flex flex-wrap items-center gap-3 lg:col-span-9" aria-label="Java, JDBC, MySQL">
            {stack.map((s, i) => (
              <li key={s} className="flex items-center gap-3">
                <span className="mono border border-ink px-5 py-3 text-[13px]">{s}</span>
                {i < stack.length - 1 && (
                  <span aria-hidden="true" className="font-mono text-xl">
                    →
                  </span>
                )}
              </li>
            ))}
          </ol>
        </figure>
      </div>
    </section>
  );
}
