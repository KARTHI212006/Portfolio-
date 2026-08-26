"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Mail,
  Github,
  Linkedin,
  Instagram,
  Code2,
  Cpu,
  GraduationCap,
  Briefcase,
  Award,
} from "lucide-react";
import {
  personalInfo,
  projectsList,
  experienceList,
  certificatesList,
} from "@/lib/data";

export default function Hero() {
  // Real computed statistics directly from data arrays
  const stats = [
    {
      value: `${projectsList.length}+`,
      label: "Real Projects",
      icon: Code2,
    },
    {
      value: `${experienceList.length}`,
      label: "Internship Completed",
      icon: Briefcase,
    },
    {
      value: `${certificatesList.length}`,
      label: "Verified Certificate",
      icon: Award,
    },
  ];

  return (
    <section
      id="home"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden"
    >
      {/* Decorative ambient background glows */}
      <div className="bg-glow-cyan top-10 -left-20" />
      <div className="bg-glow-violet bottom-10 right-0" />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* LEFT COLUMN: Hero text content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 flex flex-col space-y-6"
          >
            {/* Availability & Role Pill Badge */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-cyan/10 border border-accent-cyan/30 text-accent-cyan text-xs font-mono">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-cyan opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-cyan"></span>
                </span>
                <span>AVAILABLE FOR OPPORTUNITIES</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-muted-foreground text-xs font-mono">
                <span>CSE 2027</span>
              </div>
            </div>

            {/* Greeting */}
            <p className="text-sm md:text-base font-mono text-accent-cyan tracking-wide">
              Hello, I&apos;m 👋
            </p>

            {/* Gradient Name Wordmark (Unique single instance) */}
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight">
              <span className="text-gradient-cyan">
                {personalInfo.gradientWordmark}
              </span>
            </h1>

            {/* Main Role & Eyebrow */}
            <div className="flex items-center gap-2 text-lg sm:text-xl font-heading font-semibold text-slate-200">
              <span className="text-accent-cyan font-mono">{`//`}</span>
              <h2>{personalInfo.role}</h2>
            </div>

            {/* Bio Description */}
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed max-w-xl">
              {personalInfo.bio}
            </p>

            {/* 3 Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 text-xs font-heading font-bold text-white bg-gradient-to-r from-accent-cyan to-accent-violet rounded-xl shadow-lg hover:shadow-glow transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <span>VIEW PROJECTS</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href={personalInfo.resumeUrl}
                download
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 text-xs font-heading font-bold text-white bg-white/5 border border-white/15 hover:border-accent-cyan/50 hover:bg-white/10 rounded-xl transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <Download className="w-4 h-4 text-accent-cyan" />
                <span>DOWNLOAD RESUME</span>
              </a>

              <Link
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 text-xs font-heading font-semibold text-slate-300 hover:text-accent-cyan transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>Contact Me</span>
              </Link>
            </div>

            {/* Divider & Socials */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-muted-foreground hover:text-accent-cyan hover:border-accent-cyan/40 transition-all duration-200"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-muted-foreground hover:text-accent-cyan hover:border-accent-cyan/40 transition-all duration-200"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  aria-label="Send Email"
                  className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-muted-foreground hover:text-accent-cyan hover:border-accent-cyan/40 transition-all duration-200"
                >
                  <Mail className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram Profile"
                  className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-muted-foreground hover:text-accent-cyan hover:border-accent-cyan/40 transition-all duration-200"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              </div>

              <div className="font-mono text-xs text-muted-foreground flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent-green"></span>
                <span>Location: {personalInfo.location}</span>
              </div>
            </div>

            {/* Real Stats Row (Computed directly from data.ts length) */}
            <div className="grid grid-cols-3 gap-3 pt-4">
              {stats.map((stat, idx) => {
                const IconComp = stat.icon;
                return (
                  <div
                    key={idx}
                    className="glass-card p-3 sm:p-4 flex flex-col items-center sm:items-start space-y-1"
                  >
                    <div className="flex items-center gap-1.5 text-accent-cyan">
                      <IconComp className="w-4 h-4" />
                      <span className="font-heading font-extrabold text-xl sm:text-2xl text-white">
                        {stat.value}
                      </span>
                    </div>
                    <span className="font-mono text-[11px] text-muted-foreground text-center sm:text-left">
                      {stat.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Photo with Identity Card & Floating Tags */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center relative"
          >
            <div className="relative w-full max-w-md">
              {/* Corner Tag 1: Top Left */}
              <div className="absolute -top-3 -left-3 z-20 px-3 py-1.5 rounded-lg bg-[#0B1020]/90 border border-accent-cyan/40 backdrop-blur-md shadow-lg flex items-center gap-2">
                <Code2 className="w-4 h-4 text-accent-cyan" />
                <span className="font-mono text-xs text-white">Java Dev</span>
              </div>

              {/* Corner Tag 2: Top Right */}
              <div className="absolute -top-3 -right-3 z-20 px-3 py-1.5 rounded-lg bg-[#0B1020]/90 border border-accent-violet/40 backdrop-blur-md shadow-lg flex items-center gap-2">
                <Cpu className="w-4 h-4 text-accent-violet" />
                <span className="font-mono text-xs text-white">AI Tools</span>
              </div>

              {/* Profile Image Box */}
              <div className="relative rounded-2xl p-1 bg-gradient-to-b from-accent-cyan/30 via-accent-violet/20 to-transparent border border-white/10 overflow-hidden shadow-2xl">
                <div className="relative w-full h-[380px] sm:h-[420px] rounded-xl overflow-hidden bg-[#0B1020]">
                  <Image
                    src="/images/profile.jpg"
                    alt="KARTHIKEYAN S - AI & Software Developer"
                    fill
                    sizes="(max-width: 768px) 100vw, 450px"
                    className="object-cover object-top hover:scale-105 transition-transform duration-500"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-transparent opacity-60" />
                </div>
              </div>

              {/* Floating Identity Card next to photo */}
              <div className="mt-4 glass-card p-4 border border-white/15 shadow-xl flex flex-col space-y-2">
                <div className="flex items-center justify-between border-b border-white/10 pb-2">
                  <span className="font-heading font-bold text-sm text-white flex items-center gap-1.5">
                    <GraduationCap className="w-4 h-4 text-accent-cyan" />
                    <span>Identity Overview</span>
                  </span>
                  <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-accent-green/10 text-accent-green border border-accent-green/30">
                    Active Student
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1">
                  {personalInfo.identityPills.map((pill, idx) => (
                    <div
                      key={idx}
                      className="bg-white/5 p-2 rounded-lg border border-white/5 flex flex-col"
                    >
                      <span className="font-mono text-[10px] text-muted-foreground">
                        {pill.label}
                      </span>
                      <span className="font-sans font-semibold text-xs text-white truncate">
                        {pill.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
