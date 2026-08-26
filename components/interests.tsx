"use client";

import React from "react";
import { motion } from "framer-motion";
import { Terminal, Heart, Hash } from "lucide-react";
import { interestsList } from "@/lib/data";

export default function Interests() {
  return (
    <section id="interests" className="py-20 relative">
      <div className="container-custom">
        {/* Monospace Section Eyebrow */}
        <div className="flex flex-col items-start space-y-2 mb-10">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-accent-cyan bg-accent-cyan/10 px-3 py-1 rounded-md border border-accent-cyan/20">
            <Terminal className="w-3.5 h-3.5" />
            <span>// Areas of Interest</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white">
            Technical & Domain Interests
          </h2>
          <p className="text-muted-foreground text-sm max-w-xl">
            Domains I am actively exploring, practicing, and building projects in.
          </p>
        </div>

        {/* Chip List */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap gap-3"
        >
          {interestsList.map((interest, idx) => (
            <div
              key={idx}
              className="glass-card glass-card-hover px-4 py-2.5 rounded-xl border border-white/10 flex items-center gap-2 group cursor-default"
            >
              <Hash className="w-4 h-4 text-accent-cyan group-hover:rotate-12 transition-transform" />
              <span className="font-sans font-semibold text-xs sm:text-sm text-slate-200 group-hover:text-accent-cyan transition-colors">
                {interest}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
