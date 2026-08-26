"use client";

import React from "react";
import { motion } from "framer-motion";
import { Terminal, Target, Sparkles } from "lucide-react";
import { careerGoal } from "@/lib/data";

export default function CareerGoal() {
  return (
    <section id="career-goal" className="py-20 bg-background-secondary/60 relative overflow-hidden">
      {/* Ambient Glow Backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-gradient-to-r from-accent-cyan/10 to-accent-violet/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* Monospace Section Eyebrow */}
        <div className="flex flex-col items-center text-center space-y-2 mb-8">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-accent-cyan bg-accent-cyan/10 px-3 py-1 rounded-md border border-accent-cyan/20">
            <Terminal className="w-3.5 h-3.5" />
            <span>// Career Vision</span>
          </div>
        </div>

        {/* Visually Distinct Callout Band */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-card p-8 sm:p-12 border-accent-cyan/40 bg-gradient-to-br from-accent-cyan/10 via-[#0B1020] to-accent-violet/15 max-w-4xl mx-auto shadow-2xl rounded-2xl relative overflow-hidden text-center space-y-6"
        >
          <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-accent-cyan/15 text-accent-cyan border border-accent-cyan/30 mx-auto">
            <Target className="w-8 h-8" />
          </div>

          <div className="space-y-3">
            <span className="font-mono text-xs text-accent-cyan tracking-widest uppercase block">
              {careerGoal.title}
            </span>
            <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-white tracking-tight leading-tight">
              &ldquo;<span className="text-gradient-cyan">{careerGoal.statement}</span>&rdquo;
            </h2>
          </div>

          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            {careerGoal.supportingText}
          </p>

          <div className="pt-2 flex items-center justify-center gap-2 font-mono text-xs text-accent-green">
            <Sparkles className="w-4 h-4" />
            <span>Focused on continuous learning & innovative software solutions</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
