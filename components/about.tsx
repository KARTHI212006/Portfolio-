"use client";

import React from "react";
import { motion } from "framer-motion";
import { User, MapPin, GraduationCap, Target, Terminal, Code2 } from "lucide-react";
import { personalInfo } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="py-20 bg-background-secondary/60 relative">
      <div className="container-custom">
        {/* Monospace Section Eyebrow */}
        <div className="flex flex-col items-start space-y-2 mb-12">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-accent-cyan bg-accent-cyan/10 px-3 py-1 rounded-md border border-accent-cyan/20">
            <Terminal className="w-3.5 h-3.5" />
            <span>// About Me</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white">
            Engineering & Problem Solving
          </h2>
          <p className="text-muted-foreground text-sm max-w-xl">
            Passionate computer science student combining analytical logic with modern software craftsmanship.
          </p>
        </div>

        {/* About Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Bio Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 glass-card p-6 sm:p-8 flex flex-col justify-between space-y-6"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-accent-cyan/10 border border-accent-cyan/30 text-accent-cyan">
                  <User className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg text-white">
                    Who I Am
                  </h3>
                  <p className="font-mono text-xs text-muted-foreground">
                    Final-Year CSE Student @ Salem, India
                  </p>
                </div>
              </div>

              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                I am a final-year Computer Science Engineering student graduating in 2027 from <strong className="text-white">M.P. Nachimuthu M. Jaganathan Engineering College</strong>. My engineering journey is driven by a curiosity to solve real-world problems through clean code, structured software architecture, and intelligent AI models.
              </p>

              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                From developing pure HTML/CSS/JS platforms like <strong className="text-accent-cyan">GameVault</strong> to building embedded IoT systems and Java database architectures, I focus on software efficiency, fast user experiences, and maintainable project structures.
              </p>
            </div>

            {/* Quick Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/10">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-accent-cyan mt-1 flex-shrink-0" />
                <div>
                  <span className="font-mono text-xs text-muted-foreground block">Location</span>
                  <span className="text-xs font-semibold text-white">{personalInfo.location}</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <GraduationCap className="w-4 h-4 text-accent-cyan mt-1 flex-shrink-0" />
                <div>
                  <span className="font-mono text-xs text-muted-foreground block">Degree</span>
                  <span className="text-xs font-semibold text-white">B.E. Computer Science (2023-2027)</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Focus Areas & Career Goal Callout Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            {/* Core Competencies Box */}
            <div className="glass-card p-6 flex flex-col space-y-4">
              <div className="flex items-center gap-2 text-accent-violet">
                <Code2 className="w-5 h-5" />
                <h3 className="font-heading font-bold text-base text-white">
                  Core Engineering Focus
                </h3>
              </div>
              <ul className="space-y-2.5 font-sans text-xs sm:text-sm text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-accent-cyan font-mono font-bold">✓</span>
                  <span><strong>Full Stack Web Dev:</strong> Building responsive, optimized web apps.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-cyan font-mono font-bold">✓</span>
                  <span><strong>Java & SQL Architecture:</strong> OOP principles, JDBC, and relational schemas.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-cyan font-mono font-bold">✓</span>
                  <span><strong>AI & Prompt Engineering:</strong> Leveraging ChatGPT, Claude, and Gemini APIs.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-cyan font-mono font-bold">✓</span>
                  <span><strong>IoT & Embedded Logic:</strong> Microcontrollers, relay control & sensor integration.</span>
                </li>
              </ul>
            </div>

            {/* Target Career Banner */}
            <div className="glass-card p-6 border-accent-cyan/30 bg-gradient-to-br from-accent-cyan/10 via-transparent to-accent-violet/10 flex flex-col space-y-3">
              <div className="flex items-center gap-2 text-accent-cyan">
                <Target className="w-5 h-5" />
                <span className="font-mono text-xs font-bold uppercase tracking-wider">
                  Primary Objective
                </span>
              </div>
              <p className="font-heading font-bold text-lg text-white">
                Become an AI Engineer at Google
              </p>
              <p className="text-muted-foreground text-xs leading-relaxed">
                Dedicated to continuous technical growth, algorithmic problem solving, and building next-generation intelligent applications.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
