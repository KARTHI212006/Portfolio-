"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Terminal,
  Coffee,
  FileCode2,
  Layout,
  Globe,
  Server,
  Database,
  Sparkles,
  Cpu,
  Bot,
  Zap,
  GitBranch,
} from "lucide-react";
import { skillCategories } from "@/lib/data";

// Icon mapping helper
const iconMap: Record<string, React.ElementType> = {
  Terminal,
  Coffee,
  FileCode2,
  Layout,
  Globe,
  Server,
  Database,
  Sparkles,
  Cpu,
  Bot,
  Zap,
  GitBranch,
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-background-secondary/60 relative">
      <div className="container-custom">
        {/* Monospace Section Eyebrow */}
        <div className="flex flex-col items-start space-y-2 mb-12">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-accent-cyan bg-accent-cyan/10 px-3 py-1 rounded-md border border-accent-cyan/20">
            <Terminal className="w-3.5 h-3.5" />
            <span>// Skills & Toolkit</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white">
            Technical Competencies
          </h2>
          <p className="text-muted-foreground text-sm max-w-xl">
            Practical skills, tools, and engineering stacks used to build reliable software solutions.
          </p>
        </div>

        {/* Grouped Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIdx * 0.15 }}
              className="glass-card p-6 flex flex-col justify-between space-y-6"
            >
              {/* Category Header */}
              <div className="border-b border-white/10 pb-4 flex items-center justify-between">
                <h3 className="font-heading font-bold text-lg text-white">
                  {category.title}
                </h3>
                <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/30">
                  {category.badge}
                </span>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill) => {
                  const IconComponent = iconMap[skill.icon] || Terminal;
                  return (
                    <div
                      key={skill.name}
                      className="group p-3 rounded-xl bg-white/5 border border-white/5 hover:border-accent-cyan/30 hover:bg-white/10 transition-all duration-300 flex items-start gap-3"
                    >
                      <div className="p-2 rounded-lg bg-accent-cyan/10 text-accent-cyan group-hover:scale-110 group-hover:bg-accent-cyan group-hover:text-black transition-all duration-300 mt-0.5">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <div className="space-y-0.5">
                        <h4 className="font-heading font-semibold text-sm text-white group-hover:text-accent-cyan transition-colors">
                          {skill.name}
                        </h4>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          {skill.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Bottom tag */}
              <div className="pt-2 font-mono text-[11px] text-muted-foreground flex items-center gap-1.5">
                <span className="text-accent-cyan">▸</span>
                <span>Verified practical application</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
