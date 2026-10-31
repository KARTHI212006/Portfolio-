"use client";

import { useEffect, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Work" },
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
    <header className="fixed inset-x-0 top-0 z-50 border-b border-lav/25 bg-ink">
      <nav aria-label="Primary" className="container-x flex h-14 items-center justify-between">
        <a href="#home" className="mono flex min-h-[44px] items-center gap-2" aria-label="Karthikeyan S, back to top">
          <span className="inline-block h-2 w-2 bg-signal" aria-hidden="true" />
          Karthikeyan S.
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                aria-current={active === l.id ? "location" : undefined}
                className={cn(
                  "mono flex min-h-[44px] items-center underline decoration-1 underline-offset-[8px] transition-colors",
                  active === l.id ? "text-lav decoration-signal" : "text-lav/70 decoration-transparent hover:text-lav"
                )}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <Dialog.Root open={open} onOpenChange={setOpen}>
          <Dialog.Trigger aria-label="Open menu" className="mono flex min-h-[44px] items-center gap-2 md:hidden">
            Menu
            <Menu className="h-5 w-5" aria-hidden="true" />
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 z-[60] bg-ink/80" />
            <Dialog.Content className="fixed inset-x-0 top-0 z-[70] border-b border-lav/25 bg-ink px-5 pb-6 pt-3">
              <div className="mb-2 flex items-center justify-between">
                <Dialog.Title className="mono text-lav/70">Menu</Dialog.Title>
                <Dialog.Description className="sr-only">Site navigation</Dialog.Description>
                <Dialog.Close aria-label="Close menu" className="grid h-11 w-11 place-items-center">
                  <X className="h-5 w-5" aria-hidden="true" />
                </Dialog.Close>
              </div>
              <ul className="flex flex-col">
                {links.map((l) => (
                  <li key={l.id} className="rule-t">
                    <a
                      href={`#${l.id}`}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "serif-i flex min-h-[56px] items-center text-4xl",
                        active === l.id ? "text-orchid" : "text-lav"
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
      </nav>
    </header>
  );
}
