import { skillCategories } from "@/lib/data";
import { Bot, Cpu, GitBranch, Zap } from "lucide-react";

const toolsData = [
  {
    num: "01",
    title: "AI & Prompt Engineering",
    desc: "Leveraging structured LLM prompts, multi-turn context management, and tools like Claude, ChatGPT, and Gemini to accelerate full-stack architecture, testing, and debugging.",
    tag: "ACCELERATION",
    Icon: Bot,
    highlights: ["Structured prompt frameworks", "Rapid prototyping & refactoring", "Algorithmic validation"],
  },
  {
    num: "02",
    title: "Version Control & Deployment",
    desc: "Clean Git commit hygiene, GitHub repository management, branch workflows, and zero-configuration production deployments on Vercel.",
    tag: "DEVOPS",
    Icon: GitBranch,
    highlights: ["Semantic Git commit history", "GitHub repository maintenance", "Vercel continuous deployments"],
  },
  {
    num: "03",
    title: "IoT & Embedded Prototyping",
    desc: "Hands-on hardware logic with Arduino Uno microcontrollers, analog soil moisture sensors, 5V relay module switching, and submersible DC pump control.",
    tag: "HARDWARE",
    Icon: Zap,
    highlights: ["Arduino Uno microcontrollers", "C++ embedded firmware", "Relay module circuit control"],
  },
  {
    num: "04",
    title: "Modern Web Toolchain",
    desc: "Building responsive, semantic interfaces using modern HTML5, Tailwind CSS design tokens, JavaScript ES6+ async logic, and Next.js static architecture.",
    tag: "WEB STACK",
    Icon: Cpu,
    highlights: ["Semantic HTML5 structures", "Responsive Tailwind CSS tokens", "Async JavaScript logic"],
  },
];

export default function ToolsAndTech() {
  return (
    <section id="tools" className="relative scroll-mt-24 bg-transparent pb-28 pt-16 border-t border-white/10">
      <div className="container-x">
        <div data-reveal className="max-w-3xl">
          <p className="label text-[#C5A880] tracking-editorial text-[11px] sm:text-xs">
            05 / Tools &amp; Technologies · Modern Engineering
          </p>
          <div className="mt-3 block">
            <h2 className="display text-[clamp(2.5rem,7vw,5.5rem)] text-fg leading-[0.95] tracking-[-0.035em]">
              Tools &amp;
              <span className="display-soft block text-[0.62em]">Technologies</span>
            </h2>
          </div>
          <p className="mt-5 max-w-[56ch] text-base sm:text-lg leading-relaxed text-[#E6DDD5]/80 font-sans">
            How I build faster and smarter: combining structured prompt engineering with Git version control,
            embedded Arduino hardware, and modern responsive web tooling.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8">
          {toolsData.map((t) => {
            const Icon = t.Icon;
            return (
              <div
                key={t.num}
                data-reveal
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-[#C5A880]/15 bg-black/40 p-6 sm:p-8 shadow-card backdrop-blur-sm transition-all duration-300 hover:border-[#C5A880]/40 hover:shadow-gold"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 border-b border-white/10 pb-4">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs text-[#C5A880]">[{t.num}]</span>
                      <span className="inline-flex items-center rounded-full border border-[#C5A880]/20 bg-black/50 px-3 py-1 text-[10px] font-mono tracking-wider text-[#C5A880]">
                        {t.tag}
                      </span>
                    </div>
                    <div className="grid h-8 w-8 place-items-center rounded-full border border-white/10 text-muted transition-colors group-hover:border-[#C5A880]/50 group-hover:text-[#F4EFEA]">
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </div>
                  </div>

                  <h3 className="font-heading mt-4 text-xl sm:text-2xl font-semibold tracking-tight text-[#F4EFEA] group-hover:text-[#C5A880] transition-colors">
                    {t.title}
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm leading-relaxed text-[#E6DDD5]/80 font-sans">
                    {t.desc}
                  </p>
                </div>

                <ul className="mt-6 space-y-2 border-t border-white/10 pt-4 font-mono text-[11px] text-muted">
                  {t.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-[#C5A880]" aria-hidden="true" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
