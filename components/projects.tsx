"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Terminal,
  Github,
  ExternalLink,
  Code2,
  CheckCircle2,
  Layers,
  X,
  Sparkles,
} from "lucide-react";
import { projectsList, ProjectItem } from "@/lib/data";

const CATEGORIES = ["ALL", "WEB", "JAVA", "AI / IOT"];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("ALL");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filteredProjects = projectsList.filter((p) => {
    if (activeFilter === "ALL") return true;
    if (activeFilter === "WEB") return p.category.toLowerCase().includes("web");
    if (activeFilter === "JAVA") return p.category.toLowerCase().includes("java") || p.tech.includes("Java");
    if (activeFilter === "AI / IOT") return p.category.toLowerCase().includes("iot") || p.category.toLowerCase().includes("ai");
    return true;
  });

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background glow */}
      <div className="bg-glow-cyan top-1/4 right-0 opacity-20" />
      <div className="bg-glow-violet bottom-10 left-10 opacity-20" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="flex flex-col space-y-2">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-accent-cyan bg-accent-cyan/10 px-3 py-1 rounded-md border border-accent-cyan/20 w-fit">
              <Terminal className="w-3.5 h-3.5" />
              <span>// PRODUCTION SOFTWARE SHOWCASE</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white">
              Featured <span className="text-gradient-cyan">Projects</span>
            </h2>
            <p className="text-muted-foreground text-sm max-w-xl">
              Real software systems built across full-stack web, Java relational databases, and IoT microcontrollers.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all duration-200 cursor-pointer ${
                  activeFilter === cat
                    ? "bg-gradient-to-r from-accent-cyan to-accent-violet text-white shadow-[0_0_15px_rgba(6,182,212,0.4)]"
                    : "text-slate-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: index * 0.08 }}
                className="glass-card glass-card-hover flex flex-col justify-between overflow-hidden group border border-white/10 hover:border-accent-cyan/40 transition-all shadow-xl"
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
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080d22] via-transparent to-transparent opacity-80" />

                    <div className="absolute top-3 left-3">
                      <span className="font-mono text-[10px] px-2.5 py-1 rounded-full bg-[#050816]/90 text-accent-cyan border border-accent-cyan/40 backdrop-blur-md font-bold">
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

                    <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed line-clamp-2">
                      {project.shortDesc}
                    </p>

                    {/* Problem / Solution Micro Summary */}
                    <div className="bg-white/5 p-3 rounded-lg border border-white/5 space-y-1.5 font-sans text-xs">
                      <div>
                        <span className="font-mono text-[10px] text-accent-cyan font-bold block uppercase">
                          Problem
                        </span>
                        <p className="text-slate-300 line-clamp-2">{project.problem}</p>
                      </div>
                      <div>
                        <span className="font-mono text-[10px] text-emerald-400 font-bold block uppercase">
                          Solution
                        </span>
                        <p className="text-slate-300 line-clamp-2">{project.solution}</p>
                      </div>
                    </div>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
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

                {/* Card Footer: Action Links & Modal Trigger */}
                <div className="p-6 pt-0 border-t border-white/10 flex items-center justify-between gap-3 mt-4">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/15 rounded-lg transition-colors cursor-pointer"
                    >
                      <Layers className="w-3.5 h-3.5 text-accent-cyan" />
                      <span>Details</span>
                    </button>

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-semibold text-slate-300 hover:text-white bg-white/5 border border-white/10 rounded-lg transition-colors"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>Code</span>
                      </a>
                    )}
                  </div>

                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-semibold text-accent-cyan bg-accent-cyan/15 border border-accent-cyan/40 hover:bg-accent-cyan/30 rounded-lg transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Live</span>
                    </a>
                  ) : (
                    <span className="font-mono text-[10px] text-slate-500 flex items-center gap-1">
                      <Code2 className="w-3 h-3" />
                      <span>Verified</span>
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Project Breakdown Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-2xl rounded-2xl border border-cyan-500/40 bg-[#080d22] p-6 sm:p-8 shadow-[0_0_50px_rgba(6,182,212,0.2)] max-h-[90vh] overflow-y-auto space-y-6 text-slate-200"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-mono text-xs px-2.5 py-0.5 rounded-full bg-accent-cyan/20 text-accent-cyan border border-accent-cyan/40 font-bold">
                    {selectedProject.badge}
                  </span>
                  <span className="font-mono text-xs px-2.5 py-0.5 rounded-full bg-white/10 text-slate-300">
                    {selectedProject.category}
                  </span>
                </div>
                <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-white">
                  {selectedProject.title}
                </h3>
              </div>

              {/* Modal Banner Image */}
              <div className="relative w-full h-56 rounded-xl overflow-hidden border border-white/10 bg-[#0B1020]">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Problem & Solution */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1">
                  <span className="font-mono text-xs text-rose-400 font-bold uppercase flex items-center gap-1.5">
                    Problem Statement
                  </span>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {selectedProject.problem}
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1">
                  <span className="font-mono text-xs text-emerald-400 font-bold uppercase flex items-center gap-1.5">
                    Engineering Solution
                  </span>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {selectedProject.solution}
                  </p>
                </div>
              </div>

              {/* Key Features */}
              <div className="space-y-2">
                <h4 className="font-mono text-xs text-accent-cyan font-bold uppercase flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  Key Architectural Features
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-300">
                  {selectedProject.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2 bg-white/5 p-2 rounded-lg border border-white/5">
                      <CheckCircle2 className="w-4 h-4 text-accent-cyan flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Developer Contribution & Result */}
              <div className="p-4 rounded-xl bg-accent-cyan/10 border border-accent-cyan/20 space-y-2 text-xs sm:text-sm">
                <div>
                  <span className="font-mono text-[11px] text-accent-cyan font-bold block uppercase">
                    My Contribution
                  </span>
                  <p className="text-white font-medium">{selectedProject.myContribution}</p>
                </div>
                <div>
                  <span className="font-mono text-[11px] text-emerald-400 font-bold block uppercase">
                    Result & Impact
                  </span>
                  <p className="text-slate-300">{selectedProject.result}</p>
                </div>
              </div>

              {/* Tech Stack Pills */}
              <div>
                <span className="font-mono text-xs text-slate-400 block mb-2">Technologies Used:</span>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-xs px-3 py-1 rounded-md bg-white/5 text-accent-cyan border border-accent-cyan/30"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal Action Buttons */}
              <div className="flex flex-wrap items-center justify-end gap-3 pt-4 border-t border-white/10">
                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-mono text-xs font-semibold border border-white/15 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>View Repository</span>
                  </a>
                )}
                {selectedProject.liveUrl && (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-accent-cyan to-accent-violet text-white font-mono text-xs font-bold shadow-lg transition-transform hover:scale-105"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Launch Live App</span>
                  </a>
                )}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white font-mono text-xs transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
