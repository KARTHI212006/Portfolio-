"use client";

import React from "react";
import Link from "next/link";
import { Github, Linkedin, Instagram, Mail, ArrowUp } from "lucide-react";
import { personalInfo } from "@/lib/data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#050816] border-t border-white/10 py-12 relative">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center justify-between">
          {/* Brand & Motto */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-cyan to-accent-violet p-[1px]">
                <div className="w-full h-full bg-[#050816] rounded-[7px] flex items-center justify-center font-heading font-bold text-sm text-accent-cyan">
                  K
                </div>
              </div>
              <span className="font-heading font-bold text-lg text-white">
                {personalInfo.name}
              </span>
            </div>
            <p className="text-muted-foreground text-xs leading-relaxed max-w-sm">
              Computer Science Engineering student focused on building practical web software, AI applications, and intelligent systems.
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-4 flex flex-wrap gap-x-6 gap-y-2 text-xs font-mono text-muted-foreground">
            <Link href="#home" className="hover:text-accent-cyan transition-colors">
              Home
            </Link>
            <Link href="#about" className="hover:text-accent-cyan transition-colors">
              About
            </Link>
            <Link href="#skills" className="hover:text-accent-cyan transition-colors">
              Skills
            </Link>
            <Link href="#projects" className="hover:text-accent-cyan transition-colors">
              Projects
            </Link>
            <Link href="#experience" className="hover:text-accent-cyan transition-colors">
              Experience
            </Link>
            <Link href="#certificates" className="hover:text-accent-cyan transition-colors">
              Certificates
            </Link>
            <Link href="#contact" className="hover:text-accent-cyan transition-colors">
              Contact
            </Link>
          </div>

          {/* Social Icons & Back to Top */}
          <div className="md:col-span-3 flex items-center justify-start md:justify-end gap-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-muted-foreground hover:text-accent-cyan hover:border-accent-cyan/40 transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-muted-foreground hover:text-accent-cyan hover:border-accent-cyan/40 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Profile"
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-muted-foreground hover:text-accent-cyan hover:border-accent-cyan/40 transition-colors"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              aria-label="Send Email"
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-muted-foreground hover:text-accent-cyan hover:border-accent-cyan/40 transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>

            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-accent-cyan/15 text-accent-cyan border border-accent-cyan/30 hover:bg-accent-cyan/30 transition-colors ml-2"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 mt-8 border-t border-white/5 flex flex-wrap items-center justify-between text-[11px] font-mono text-muted-foreground">
          <span>© {currentYear} KARTHIKEYAN S. All rights reserved.</span>
          <span>Designed & Built with Next.js 15, TypeScript & Tailwind CSS</span>
        </div>
      </div>
    </footer>
  );
}
