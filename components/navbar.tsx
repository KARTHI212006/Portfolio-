"use client";

import { useEffect, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("about");
  const [open, setOpen] = useState(false);

  // Highlight the section that crosses the middle of the viewport.
  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.id))
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
        className="flex w-full max-w-[880px] items-center justify-between gap-2 rounded-full border border-line bg-black/90 py-2 pl-3 pr-2 shadow-card backdrop-blur-md"
      >
        <a href="#about" className="flex items-center gap-2.5 rounded-full pr-2" aria-label="Karthikeyan S, back to top">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-red-deep font-heading text-sm font-bold text-white">
            KS
          </span>
          <span className="hidden font-heading text-sm font-semibold tracking-tight sm:inline">Karthikeyan S</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                aria-current={active === l.id ? "location" : undefined}
                className={cn(
                  "relative rounded-full px-3.5 py-2 text-sm transition-colors",
                  active === l.id ? "text-fg" : "text-muted hover:text-fg"
                )}
              >
                {l.label}
                {active === l.id && (
                  <span className="absolute inset-x-3.5 -bottom-0.5 h-0.5 rounded-full bg-red" aria-hidden="true" />
                )}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a href="#contact" className="btn-red label !min-h-[40px] !px-4 !text-[12px]">
            Let&apos;s connect
          </a>

          <Dialog.Root open={open} onOpenChange={setOpen}>
            <Dialog.Trigger
              aria-label="Open menu"
              className="grid h-10 w-10 place-items-center rounded-full border border-line text-fg md:hidden"
            >
              <Menu className="h-5 w-5" aria-hidden="true" />
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 z-[60] bg-black/70" />
              <Dialog.Content className="fixed inset-x-3 top-3 z-[70] rounded-3xl border border-line bg-ink p-5 shadow-card">
                <div className="mb-4 flex items-center justify-between">
                  <Dialog.Title className="label text-muted">Menu</Dialog.Title>
                  <Dialog.Description className="sr-only">Site navigation</Dialog.Description>
                  <Dialog.Close
                    aria-label="Close menu"
                    className="grid h-10 w-10 place-items-center rounded-full border border-line"
                  >
                    <X className="h-5 w-5" aria-hidden="true" />
                  </Dialog.Close>
                </div>
                <ul className="flex flex-col">
                  {links.map((l) => (
                    <li key={l.id} className="border-t border-line first:border-t-0">
                      <a
                        href={`#${l.id}`}
                        onClick={() => setOpen(false)}
                        className={cn(
                          "flex min-h-[52px] items-center justify-between font-heading text-2xl font-semibold",
                          active === l.id ? "text-red" : "text-fg"
                        )}
                      >
                        {l.label}
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
