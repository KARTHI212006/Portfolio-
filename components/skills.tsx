import { skillCategories } from "@/lib/data";

export default function TechnicalExpertise() {
  // Focus on Core Languages and Backend Architecture for Technical Expertise
  const technicalCategories = skillCategories.slice(0, 2);

  return (
    <section id="skills" className="relative scroll-mt-24 bg-transparent pb-24 pt-16 border-t border-white/10">
      <div className="container-x">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] lg:gap-16">
          <div data-reveal className="lg:sticky lg:top-32 lg:self-start">
            <p className="label text-[#C5A880] tracking-editorial text-[11px] sm:text-xs">
              03 / Technical Expertise · Systems &amp; Logic
            </p>
            <h2 className="display mt-3 text-3xl sm:text-4xl lg:text-5xl text-[#F4EFEA] leading-[0.95]">
              Technical
              <span className="display-soft block">Expertise</span>
            </h2>
            <p className="mt-5 max-w-[42ch] text-sm sm:text-base leading-relaxed text-[#E6DDD5]/80 font-sans">
              Object-oriented design with Java, relational database schemas with MySQL, and clean responsive interfaces.
            </p>
            <div className="mt-8 hidden lg:block border-l-2 border-[#C5A880]/30 pl-4 text-xs font-mono text-muted">
              <span className="text-[#C5A880]">FOCUS:</span>
              <p className="mt-1">Data integrity, transactional logic, and maintainable modular architectures.</p>
            </div>
          </div>

          <div className="space-y-6">
            {technicalCategories.map((cat, idx) => (
              <div
                key={cat.title}
                data-reveal
                className="rounded-2xl border border-[#C5A880]/15 bg-black/40 p-6 sm:p-8 shadow-card backdrop-blur-sm transition-all duration-300 hover:border-[#C5A880]/35 hover:shadow-gold"
              >
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-5">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-[#C5A880]">[{String(idx + 1).padStart(2, "0")}]</span>
                    <h3 className="font-heading text-xl font-semibold tracking-tight text-[#F4EFEA]">{cat.title}</h3>
                  </div>
                  <span className="inline-flex items-center rounded-full border border-[#C5A880]/20 bg-black/50 px-3 py-1 text-[11px] font-mono tracking-wider text-[#C5A880]">
                    {cat.badge}
                  </span>
                </div>
                <ul className="mt-6 grid gap-x-8 gap-y-6 sm:grid-cols-2">
                  {cat.skills.map((s) => (
                    <li
                      key={s.name}
                      className="group rounded-xl p-2 transition-colors hover:bg-white/[0.02]"
                    >
                      <p className="font-medium text-[#F4EFEA] group-hover:text-[#C5A880] transition-colors">{s.name}</p>
                      <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-muted font-sans">{s.description}</p>
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
