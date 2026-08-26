"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Sparkles } from "lucide-react";
import { personalInfo } from "@/lib/data";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Education", href: "#education" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Certificates", href: "#certificates" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Simple active section tracker
      const sections = navLinks.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#050816]/85 backdrop-blur-md border-b border-white/10 py-3 shadow-lg shadow-black/40"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Brand Logo & Wordmark */}
        <Link
          href="#home"
          className="flex items-center gap-3 group"
          aria-label="Karthikeyan S Portfolio Home"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-cyan to-accent-violet p-[1.5px] transition-transform duration-300 group-hover:scale-105">
            <div className="w-full h-full bg-[#050816] rounded-[10px] flex items-center justify-center font-heading font-bold text-lg text-accent-cyan group-hover:bg-transparent group-hover:text-white transition-colors duration-300">
              K
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-bold text-white text-base tracking-wide group-hover:text-accent-cyan transition-colors">
              {personalInfo.name}
            </span>
            <span className="font-mono text-[10px] text-muted-foreground tracking-wider uppercase">
              AI & Web Developer
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-white/5 border border-white/10 backdrop-blur-md px-4 py-1.5 rounded-full" aria-label="Main Desktop Navigation">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                  isActive
                    ? "bg-accent-cyan/15 text-accent-cyan font-semibold border border-accent-cyan/30"
                    : "text-muted-foreground hover:text-white hover:bg-white/5"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA Button & Mobile Menu Toggle */}
        <div className="flex items-center gap-3">
          <Link
            href="#contact"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-heading font-semibold text-white bg-gradient-to-r from-accent-cyan/20 to-accent-violet/20 border border-accent-cyan/40 hover:border-accent-cyan hover:bg-accent-cyan/30 rounded-lg transition-all duration-300 shadow-glow"
          >
            <Sparkles className="w-3.5 h-3.5 text-accent-cyan" />
            <span>HIRE ME</span>
          </Link>

          {/* Hamburger Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-white hover:text-accent-cyan focus:outline-none"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0B1020]/95 border-b border-white/10 backdrop-blur-xl px-6 py-6 transition-all">
          <nav className="flex flex-col gap-3" aria-label="Main Mobile Navigation">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-slate-200 hover:text-accent-cyan py-2 border-b border-white/5 flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="font-mono text-[10px] text-accent-cyan/60">→</span>
              </Link>
            ))}
            <Link
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 w-full py-2.5 text-center text-xs font-heading font-bold text-white bg-gradient-to-r from-accent-cyan to-accent-violet rounded-lg shadow-lg"
            >
              HIRE ME
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
