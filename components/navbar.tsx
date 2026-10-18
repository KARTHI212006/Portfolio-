"use client";

import { useEffect, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { id: "index", label: "Index" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Expertise" },
  { id: "experience", label: "Experience" },
  { id: "tools", label: "Tools" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  // Highlight the section that crosses the middle of the viewport.
  useEffect(() => {
    const sections = ["home", ...links.map((l) => l.id)]
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-3 z-50 flex justify-center px-3 sm:top-5 sm:px-5">
      <nav
        aria-label="Primary"
        className="flex w-full max-w-[960px] items-center justify-between gap-2 rounded-full border border-[#C5A880]/20 bg-[#0a080a]/85 py-2 pl-3 pr-2.5 shadow-2xl backdrop-blur-md"
      >
        <a href="#home" className="flex items-center gap-2.5 rounded-full pr-2" aria-label="Karthikeyan S, back to top">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-[#9E1B2C] border border-[#C5A880]/30 font-heading text-xs font-bold text-white shadow-sm">
            KS
          </span>
          <span className="hidden font-heading text-xs font-bold tracking-wider uppercase text-[#F4EFEA] sm:inline">
            Karthikeyan S.
          </span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                aria-current={active === l.id ? "location" : undefined}
                className={cn(
                  "relative rounded-full px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider transition-colors",
                  active === l.id ? "text-[#F4EFEA] font-semibold" : "text-[#A89F97]/80 hover:text-[#F4EFEA]"
                )}
              >
                {l.label}
                {active === l.id && (
                  <span
                    className="absolute inset-x-3 -bottom-1 h-0.5 rounded-full bg-[#C5A880]"
                    aria-hidden="true"
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="btn-crimson inline-flex min-h-[36px] items-center justify-center rounded-full px-4 font-mono text-[10px] font-semibold uppercase tracking-widest text-white shadow-sm transition-all"
          >
            Connect
          </a>

          <Dialog.Root open={open} onOpenChange={setOpen}>
            <Dialog.Trigger
              aria-label="Open menu"
              className="grid h-9 w-9 place-items-center rounded-full border border-white/15 text-fg md:hidden transition-colors hover:border-[#C5A880]/50 hover:text-white"
            >
              <Menu className="h-4 w-4" aria-hidden="true" />
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm" />
              <Dialog.Content className="fixed inset-x-3 top-3 z-[70] rounded-3xl border border-[#C5A880]/20 bg-[#0e080a] p-6 shadow-2xl">
                <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-4">
                  <Dialog.Title className="font-mono text-[10px] uppercase tracking-editorial text-[#C5A880]">
                    Editorial Folio Index
                  </Dialog.Title>
                  <Dialog.Description className="sr-only">Site navigation</Dialog.Description>
                  <Dialog.Close
                    aria-label="Close menu"
                    className="grid h-9 w-9 place-items-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-[#C5A880]/50 hover:text-white"
                  >
                    <X className="h-4 w-4" aria-hidden="true" />
                  </Dialog.Close>
                </div>
                <ul className="flex flex-col">
                  {links.map((l) => (
                    <li key={l.id} className="border-t border-white/10 first:border-t-0">
                      <a
                        href={`#${l.id}`}
                        onClick={() => setOpen(false)}
                        className={cn(
                          "flex min-h-[52px] items-center justify-between font-heading text-lg font-semibold tracking-tight transition-colors",
                          active === l.id ? "text-[#C5A880]" : "text-[#F4EFEA]/90 hover:text-[#C5A880]"
                        )}
                      >
                        <span>{l.label}</span>
                        <span className="font-mono text-xs text-muted">#0{links.indexOf(l) + 1}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      </nav>
    </header>
  );
}
