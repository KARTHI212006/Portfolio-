import { skillCategories } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="relative scroll-mt-24 bg-ink pb-24 pt-8">
      <div className="container-x">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] lg:gap-20">
          <div data-reveal className="lg:sticky lg:top-32 lg:self-start">
            <p className="pill label border-line text-muted">
              <span className="h-2 w-2 rounded-full bg-red" aria-hidden="true" />
              Skills
            </p>
            <h2 className="mt-5 text-4xl font-bold leading-[0.95] tracking-[-0.035em] sm:text-6xl">
              What I work with<span className="text-red">.</span>
            </h2>
            <p className="mt-5 max-w-[40ch] text-muted">
              Languages, tools and workflows I have used in coursework, projects and my IoT internship.
            </p>
          </div>

          <div className="divide-y divide-line border-y border-line">
            {skillCategories.map((cat) => (
              <div key={cat.title} data-reveal className="grid gap-6 py-8 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
                <div>
                  <h3 className="font-heading text-xl font-semibold tracking-tight">{cat.title}</h3>
                  <p className="label mt-2 text-red">{cat.badge}</p>
                </div>
                <ul className="grid gap-x-8 gap-y-5 sm:grid-cols-2">
                  {cat.skills.map((s) => (
                    <li key={s.name}>
                      <p className="font-medium">{s.name}</p>
                      <p className="mt-1 text-sm leading-relaxed text-muted">{s.description}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
