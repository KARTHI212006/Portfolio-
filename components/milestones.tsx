"use client";

import React from "react";
import { motion } from "framer-motion";
import { Rocket, Zap, GraduationCap, Wrench, ShieldCheck, TrendingUp } from "lucide-react";
import { milestonesList } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = {
  Rocket,
  Zap,
  GraduationCap,
  Wrench,
};

export default function Milestones() {
  return (
    <section id="milestones" className="relative py-20 overflow-hidden">
      {/* Ambient background glow */}
      <div className="bg-glow-violet top-1/2 right-0 -translate-y-1/2 opacity-25" />
      <div className="bg-glow-cyan bottom-0 left-10 opacity-20" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-violet/10 border border-accent-violet/30 text-accent-violet text-xs font-mono mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>05 / PROOF OF WORK & TELEMETRY</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white">
            Verified <span className="text-gradient-cyan">Milestones</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-accent-cyan to-accent-violet mx-auto my-3 rounded-full" />
          <p className="text-muted-foreground text-sm">
            Audited engineering milestones, academic metrics, and verified production achievements across software, hardware, and relational databases.
          </p>
        </div>

        {/* Telemetry Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {milestonesList.map((m, idx) => {
            const IconComponent = iconMap[m.icon] || TrendingUp;
            return (
              <motion.div
                key={m.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="group relative rounded-2xl border border-white/10 bg-[#080d22]/70 backdrop-blur-md p-6 hover:border-accent-cyan/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] transition-all flex flex-col justify-between"
              >
                {/* Top Badge & Icon */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-accent-cyan/10 border border-accent-cyan/30 flex items-center justify-center text-accent-cyan group-hover:scale-110 transition-transform">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono font-bold tracking-wider px-2 py-0.5 rounded bg-white/5 border border-white/10 text-slate-300">
                      {m.tag}
                    </span>
                  </div>

                  {/* Value & Unit */}
                  <div className="flex items-baseline gap-1.5 my-2">
                    <span className="font-heading text-3xl sm:text-4xl font-extrabold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-violet-400 transition-all">
                      {m.value}
                    </span>
                    {m.unit && (
                      <span className="font-mono text-xs text-accent-cyan font-bold">
                        {m.unit}
                      </span>
                    )}
                  </div>

                  <h3 className="font-heading text-sm font-bold text-slate-200 mb-1 tracking-wide">
                    {m.title}
                  </h3>
                </div>

                <p className="text-xs text-muted-foreground leading-relaxed mt-2 pt-3 border-t border-white/5">
                  {m.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
