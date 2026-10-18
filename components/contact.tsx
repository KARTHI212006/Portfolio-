"use client";

import { useState } from "react";
import { ArrowUpRight, Github, Instagram, Linkedin, Mail, Send } from "lucide-react";
import { personalInfo } from "@/lib/data";

type Fields = { name: string; email: string; message: string };
type Errors = Partial<Record<keyof Fields, string>>;

export default function Contact() {
  const [fields, setFields] = useState<Fields>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [opened, setOpened] = useState(false);

  const update = (k: keyof Fields) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFields((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const next: Errors = {};
    if (fields.name.trim().length < 2) next.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email.trim())) next.email = "Please enter a valid email address.";
    if (fields.message.trim().length < 10) next.message = "Please write at least a brief message.";
    setErrors(next);
    if (Object.keys(next).length) return;

    // Static export mailto launcher
    const subject = encodeURIComponent(`Portfolio inquiry from ${fields.name.trim()}`);
    const body = encodeURIComponent(
      `${fields.message.trim()}\n\nFrom: ${fields.name.trim()} <${fields.email.trim()}>`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
    setOpened(true);
  };

  const socials = [
    { href: `mailto:${personalInfo.email}`, channel: "01", label: "Email Dispatch", value: personalInfo.email, Icon: Mail },
    { href: personalInfo.linkedin, channel: "02", label: "LinkedIn Network", value: "karthikeyan-s", Icon: Linkedin },
    { href: personalInfo.github, channel: "03", label: "GitHub Repositories", value: "KARTHI212006", Icon: Github },
    { href: personalInfo.instagram, channel: "04", label: "Instagram Channel", value: "@itz_karthi_k_k", Icon: Instagram },
  ];

  return (
    <section id="contact" className="relative scroll-mt-24 overflow-hidden border-t border-white/10 bg-transparent pb-28 pt-20">
      <div className="container-x relative z-10">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:gap-20">
          <div data-reveal>
            <p className="label text-[#C5A880] tracking-editorial text-[11px] sm:text-xs">
              06 / Direct Communication · Inquiries
            </p>
            <div className="mt-3 block">
              <h2 className="display text-[clamp(2.75rem,8vw,6rem)] text-fg leading-[0.95] tracking-[-0.035em]">
                Initiate
                <span className="display-soft block text-[0.62em]">Collaboration</span>
              </h2>
            </div>
            <p className="mt-5 max-w-[44ch] text-base sm:text-lg leading-relaxed text-[#E6DDD5]/85 font-sans">
              Currently available for 2026 full-time developer roles, internships, and Java backend engineering opportunities.
              Direct dispatch or verified network channels below.
            </p>

            <ul className="mt-9 divide-y divide-white/10 border-y border-white/10">
              {socials.map(({ href, channel, label, value, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="group flex min-h-[58px] items-center gap-4 py-3.5 transition-colors hover:bg-white/[0.02] px-1"
                  >
                    <span className="font-mono text-xs text-[#C5A880] group-hover:text-white transition-colors">
                      [{channel}]
                    </span>
                    <Icon className="h-4 w-4 text-[#C5A880]/70 transition-colors group-hover:text-white" aria-hidden="true" />
                    <span className="label w-28 text-muted/80 text-[11px]">{label}</span>
                    <span className="min-w-0 flex-1 truncate text-xs sm:text-sm text-[#F4EFEA]/90 font-mono">{value}</span>
                    <ArrowUpRight
                      className="h-4 w-4 text-[#C5A880]/50 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white"
                      aria-hidden="true"
                    />
                    {href.startsWith("http") && <span className="sr-only">(opens in a new tab)</span>}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-xl border border-[#C5A880]/15 bg-black/40 p-4 font-mono text-xs text-[#E6DDD5]/80">
              <div className="flex items-center gap-2 text-[#C5A880]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#3FB950] animate-pulse" aria-hidden="true" />
                <span className="tracking-widest uppercase text-[10px]">Availability Status</span>
              </div>
              <p className="mt-1 text-[11px] text-muted">
                Immediate response window: &lt; 24 hours · Salem, Tamil Nadu, India (UTC +05:30)
              </p>
            </div>
          </div>

          <form
            data-reveal
            onSubmit={submit}
            noValidate
            className="rounded-2xl border border-[#C5A880]/20 bg-[#0e0c0e]/85 p-6 sm:p-8 shadow-card backdrop-blur-md"
            aria-label="Direct message dispatch"
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <span className="label text-[#C5A880] text-[10px] tracking-widest uppercase font-mono">
                  Dispatch Form
                </span>
                <h3 className="font-heading mt-1 text-lg font-semibold text-[#F4EFEA]">
                  Send a Direct Message
                </h3>
              </div>
              <span className="rounded-full border border-[#C5A880]/20 bg-black/40 px-3 py-1 font-mono text-[10px] text-[#C5A880]">
                FOLIO '26
              </span>
            </div>

            <div className="mt-6">
              <label htmlFor="c-name" className="label text-[#E6DDD5]/90 text-[11px] font-mono tracking-wider uppercase">
                Your Name / Organization
              </label>
              <input
                id="c-name"
                name="name"
                autoComplete="name"
                value={fields.name}
                onChange={update("name")}
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? "c-name-err" : undefined}
                className="mt-2 w-full rounded-xl border border-white/15 bg-black/60 px-4 py-3 text-sm text-[#F4EFEA] transition-all placeholder:text-muted/40 focus:border-[#C5A880]/70 focus:ring-1 focus:ring-[#C5A880]/30 focus:outline-none"
                placeholder="Alex Mercer"
              />
              {errors.name && (
                <p id="c-name-err" role="alert" className="mt-2 text-xs text-[#d3102f]">
                  {errors.name}
                </p>
              )}
            </div>

            <div className="mt-6">
              <label htmlFor="c-email" className="label text-[#E6DDD5]/90 text-[11px] font-mono tracking-wider uppercase">
                Email Address
              </label>
              <input
                id="c-email"
                name="email"
                type="email"
                autoComplete="email"
                spellCheck={false}
                value={fields.email}
                onChange={update("email")}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? "c-email-err" : undefined}
                className="mt-2 w-full rounded-xl border border-white/15 bg-black/60 px-4 py-3 text-sm text-[#F4EFEA] transition-all placeholder:text-muted/40 focus:border-[#C5A880]/70 focus:ring-1 focus:ring-[#C5A880]/30 focus:outline-none"
                placeholder="alex@company.com"
              />
              {errors.email && (
                <p id="c-email-err" role="alert" className="mt-2 text-xs text-[#d3102f]">
                  {errors.email}
                </p>
              )}
            </div>

            <div className="mt-6">
              <label htmlFor="c-message" className="label text-[#E6DDD5]/90 text-[11px] font-mono tracking-wider uppercase">
                Project Scope / Role Details
              </label>
              <textarea
                id="c-message"
                name="message"
                rows={4}
                value={fields.message}
                onChange={update("message")}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? "c-message-err" : undefined}
                className="mt-2 w-full resize-y rounded-xl border border-white/15 bg-black/60 px-4 py-3 text-sm text-[#F4EFEA] transition-all placeholder:text-muted/40 focus:border-[#C5A880]/70 focus:ring-1 focus:ring-[#C5A880]/30 focus:outline-none"
                placeholder="Outline opportunity, tech stack, or engineering inquiry..."
              />
              {errors.message && (
                <p id="c-message-err" role="alert" className="mt-2 text-xs text-[#d3102f]">
                  {errors.message}
                </p>
              )}
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="submit"
                className="btn-crimson inline-flex min-h-[46px] w-full items-center justify-center gap-2 rounded-full px-6 text-xs font-heading font-semibold uppercase tracking-widest text-white shadow-lg transition-all sm:w-auto"
              >
                <span>Dispatch Email</span>
                <Send className="h-3.5 w-3.5" aria-hidden="true" />
              </button>

              <span className="font-mono text-[10px] text-muted text-center sm:text-right">
                Direct client launcher
              </span>
            </div>

            <p className="mt-4 text-[11px] leading-relaxed text-muted/80 font-mono" aria-live="polite">
              {opened
                ? "Your email client has been prepared with your message. If it did not open, reach out directly at karthikeyankarthikeyan1710@gmail.com."
                : "Opens default email application with prefilled message."}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
