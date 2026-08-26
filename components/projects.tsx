"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Terminal, Github, ExternalLink, Code2, CheckCircle2 } from "lucide-react";
import { projectsList } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="py-20 relative">
      <div className="container-custom">
        {/* Monospace Section Eyebrow */}
        <div className="flex flex-col items-start space-y-2 mb-12">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-accent-cyan bg-accent-cyan/10 px-3 py-1 rounded-md border border-accent-cyan/20">
            <Terminal className="w-3.5 h-3.5" />
            <span>// Featured Projects</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white">
            Engineering & Web Applications
          </h2>
          <p className="text-muted-foreground text-sm max-w-xl">
            Real software systems built across web technologies, Java databases, and IoT microcontrollers.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projectsList.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="glass-card glass-card-hover flex flex-col justify-between overflow-hidden group"
            >
              <div>
                {/* Image Header Box */}
                <div className="relative w-full h-48 bg-[#0B1020] overflow-hidden border-b border-white/10">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1020] via-transparent to-transparent opacity-80" />

                  <div className="absolute top-3 left-3">
                    <span className="font-mono text-[10px] px-2.5 py-1 rounded-full bg-[#050816]/90 text-accent-cyan border border-accent-cyan/40 backdrop-blur-md">
                      {project.badge}
                    </span>
                  </div>

                  <div className="absolute top-3 right-3">
                    <span className="font-mono text-[10px] px-2.5 py-1 rounded-full bg-white/10 text-white backdrop-blur-md">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6 space-y-4">
                  <h3 className="font-heading font-bold text-xl text-white group-hover:text-accent-cyan transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                    {project.shortDesc}
                  </p>

                  {/* Problem / Solution Micro Summary */}
                  <div className="bg-white/5 p-3 rounded-lg border border-white/5 space-y-1.5 font-sans text-xs">
                    <div>
                      <span className="font-mono text-[10px] text-accent-cyan block uppercase">
                        Problem
                      </span>
                      <p className="text-slate-300">{project.problem}</p>
                    </div>
                    <div>
                      <span className="font-mono text-[10px] text-accent-green block uppercase">
                        Solution
                      </span>
                      <p className="text-slate-300">{project.solution}</p>
                    </div>
                  </div>

                  {/* Key Features */}
                  <div className="space-y-1.5">
                    <span className="font-mono text-[11px] text-muted-foreground block">
                      Key Highlights:
                    </span>
                    <ul className="space-y-1 font-sans text-xs text-slate-300">
                      {project.features.slice(0, 3).map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-accent-cyan flex-shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-[10px] px-2 py-0.5 rounded bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/20"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer: Conditional Action Links */}
              <div className="p-6 pt-0 border-t border-white/10 flex items-center justify-between gap-3 mt-4">
                <div className="flex items-center gap-2">
                  {/* Render GitHub button ONLY if githubUrl exists */}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-semibold text-white bg-white/5 border border-white/10 hover:border-accent-cyan hover:text-accent-cyan rounded-lg transition-all duration-200"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Code</span>
                    </a>
                  )}

                  {/* Render Live Demo button ONLY if real URL exists */}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-semibold text-white bg-accent-cyan/15 border border-accent-cyan/40 hover:bg-accent-cyan/30 text-accent-cyan rounded-lg transition-all duration-200"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>

                <span className="font-mono text-[10px] text-muted-foreground flex items-center gap-1">
                  <Code2 className="w-3 h-3 text-accent-cyan" />
                  <span>Real Project</span>
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
