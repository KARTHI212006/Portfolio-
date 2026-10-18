import { ArrowUpRight } from "lucide-react";

const tocItems = [
  {
    num: "01",
    label: "About Me",
    desc: "Background, Engineering Philosophy & 8.94 CGPA",
    href: "#about",
    tag: "Profile",
  },
  {
    num: "02",
    label: "Selected Works",
    desc: "Java & MySQL Systems, Console Architectures & IoT Prototype",
    href: "#projects",
    tag: "05 Builds",
  },
  {
    num: "03",
    label: "Technical Expertise",
    desc: "Core Java, OOP Architecture, Relational Schema & MySQL",
    href: "#skills",
    tag: "Stack",
  },
  {
    num: "04",
    label: "Experience & Credentials",
    desc: "ZEN 1 Tech Park 34-Day IoT Internship & B.E. CSE Degree",
    href: "#experience",
    tag: "Verified",
  },
  {
    num: "05",
    label: "Tools & Technologies",
    desc: "Git, Linux, Vercel, Prompt Engineering & AI Acceleration",
    href: "#tools",
    tag: "Workflow",
  },
  {
    num: "06",
    label: "Direct Communication",
    desc: "Internship Inquiries, Code Collaboration & Social Links",
    href: "#contact",
    tag: "Inquiries",
  },
];

export default function TableOfContents() {
  return (
    <section
      id="index"
      aria-label="Table of Contents"
      className="relative scroll-mt-24 border-t border-white/10 bg-transparent py-20 sm:py-24"
    >
      <div className="container-x relative z-10">
        <div data-reveal className="flex flex-col justify-between gap-4 border-b border-white/10 pb-6 sm:flex-row sm:items-end">
          <div>
            <p className="label text-[#C5A880] tracking-editorial text-[11px]">
              00 / Publication Index
            </p>
            <h2 className="display mt-2 text-3xl sm:text-4xl lg:text-5xl text-fg">
              Table of <span className="display-soft">Contents</span>
            </h2>
          </div>
          <p className="max-w-md text-xs sm:text-sm text-muted font-sans">
            A structured architectural index of backend systems, academic milestones, and engineering credentials.
          </p>
        </div>

        <nav aria-label="Sections index" className="mt-8 divide-y divide-white/10 border-b border-white/10">
          {tocItems.map((item) => (
            <a
              key={item.num}
              href={item.href}
              data-reveal
              className="group flex flex-col justify-between gap-3 py-5 transition-all duration-300 hover:bg-white/[0.02] sm:flex-row sm:items-center sm:py-6"
            >
              <div className="flex items-baseline gap-4 sm:gap-6">
                <span className="font-mono text-xs sm:text-sm text-[#C5A880] group-hover:text-white transition-colors">
                  [{item.num}]
                </span>
                <div>
                  <h3 className="font-heading text-lg sm:text-xl font-semibold tracking-tight text-[#F4EFEA] group-hover:text-[#C5A880] transition-colors">
                    {item.label}
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm text-muted/80 font-sans">
                    {item.desc}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 pl-8 sm:pl-0">
                <span className="rounded-full border border-white/10 bg-black/40 px-3 py-1 text-[10px] font-mono tracking-wider text-[#E6DDD5]/80">
                  {item.tag}
                </span>
                <span className="grid h-8 w-8 place-items-center rounded-full border border-white/10 text-muted transition-all duration-300 group-hover:border-[#C5A880]/50 group-hover:text-[#F4EFEA] group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
              </div>
            </a>
          ))}
        </nav>
      </div>
    </section>
  );
}
