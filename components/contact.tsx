"use client";

import { useState } from "react";
import { ArrowUpRight, Github, Instagram, Linkedin, Mail } from "lucide-react";
import { personalInfo } from "@/lib/data";

type Fields = { name: string; email: string; message: string };
type Errors = Partial<Record<keyof Fields, string>>;

const inputClass =
  "mt-2 w-full rounded-2xl border border-line bg-panel px-4 py-3 text-base text-fg placeholder:text-muted/70 transition-colors focus:border-red focus:outline-none focus-visible:outline-offset-0 aria-[invalid=true]:border-red";

export default function Contact() {
  const [fields, setFields] = useState<Fields>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [opened, setOpened] = useState(false);

  const update = (k: keyof Fields) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFields((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const next: Errors = {};
    if (fields.name.trim().length < 2) next.name = "Enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email.trim())) next.email = "Enter a valid email address.";
    if (fields.message.trim().length < 10) next.message = "Write at least a short message.";
    setErrors(next);
    if (Object.keys(next).length) return;

    // Static hosting has no server, so this opens the visitor's email app with the message filled in.
    const subject = encodeURIComponent(`Portfolio enquiry from ${fields.name.trim()}`);
    const body = encodeURIComponent(`${fields.message.trim()}\n\nFrom: ${fields.name.trim()} <${fields.email.trim()}>`);
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
    setOpened(true);
  };

  const socials = [
    { href: `mailto:${personalInfo.email}`, label: "Email", value: personalInfo.email, Icon: Mail },
    { href: personalInfo.linkedin, label: "LinkedIn", value: "karthikeyan-s", Icon: Linkedin },
    { href: personalInfo.github, label: "GitHub", value: "KARTHI212006", Icon: Github },
    { href: personalInfo.instagram, label: "Instagram", value: "@itz_karthi_k_k", Icon: Instagram },
  ];

  return (
    <section id="contact" className="relative scroll-mt-24 border-t border-line bg-ink pb-20 pt-24">
      <div className="container-x">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:gap-20">
          <div data-reveal>
            <p className="pill label border-line text-muted">
              <span className="h-2 w-2 rounded-full bg-red" aria-hidden="true" />
              Contact
            </p>
            <h2 className="mt-5 text-[clamp(2.75rem,8vw,5.5rem)] font-bold leading-[0.92] tracking-[-0.04em]">
              Let&apos;s talk<span className="text-red">.</span>
            </h2>
            <p className="mt-5 max-w-[44ch] text-lg leading-relaxed text-muted">
              I&apos;m looking for internships and entry-level software development roles. Send a message and I&apos;ll
              reply by email.
            </p>

            <ul className="mt-9 divide-y divide-line border-y border-line">
              {socials.map(({ href, label, value, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="group flex min-h-[60px] items-center gap-4 py-3"
                  >
                    <Icon className="h-5 w-5 text-red" aria-hidden="true" />
                    <span className="label w-24 text-muted">{label}</span>
                    <span className="min-w-0 flex-1 truncate">{value}</span>
                    <ArrowUpRight
                      className="h-4 w-4 text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                    {href.startsWith("http") && <span className="sr-only">(opens in a new tab)</span>}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <form
            data-reveal
            onSubmit={submit}
            noValidate
            className="rounded-3xl border border-line bg-panel p-6 shadow-card sm:p-8"
            aria-label="Contact form"
          >
            <div>
              <label htmlFor="c-name" className="label text-muted">
                Name
              </label>
              <input
                id="c-name"
                name="name"
                autoComplete="name"
                value={fields.name}
                onChange={update("name")}
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? "c-name-err" : undefined}
                className={inputClass}
                placeholder="Your name"
              />
              {errors.name && (
                <p id="c-name-err" role="alert" className="mt-2 text-sm text-red">
                  {errors.name}
                </p>
              )}
            </div>
            <div className="mt-5">
              <label htmlFor="c-email" className="label text-muted">
                Email
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
                className={inputClass}
                placeholder="you@example.com"
              />
              {errors.email && (
                <p id="c-email-err" role="alert" className="mt-2 text-sm text-red">
                  {errors.email}
                </p>
              )}
            </div>
            <div className="mt-5">
              <label htmlFor="c-message" className="label text-muted">
                Message
              </label>
              <textarea
                id="c-message"
                name="message"
                rows={5}
                value={fields.message}
                onChange={update("message")}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? "c-message-err" : undefined}
                className={`${inputClass} resize-y`}
                placeholder="How can I help?"
              />
              {errors.message && (
                <p id="c-message-err" role="alert" className="mt-2 text-sm text-red">
                  {errors.message}
                </p>
              )}
            </div>
            <button type="submit" className="btn-red mt-7 w-full sm:w-auto">
              Open in email app
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </button>
            <p className="mt-4 text-sm text-muted" aria-live="polite">
              {opened
                ? "Your email app should have opened with the message ready to send. If not, email me directly using the address on the left."
                : "This opens your email app with the message filled in."}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
