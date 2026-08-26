"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin, CheckCircle2, Terminal } from "lucide-react";
import { educationList } from "@/lib/data";

export default function Education() {
  return (
    <section id="education" className="py-20 relative">
      <div className="container-custom">
        {/* Monospace Section Eyebrow */}
        <div className="flex flex-col items-start space-y-2 mb-12">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-accent-cyan bg-accent-cyan/10 px-3 py-1 rounded-md border border-accent-cyan/20">
            <Terminal className="w-3.5 h-3.5" />
            <span>// Education</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white">
            Academic Background
          </h2>
          <p className="text-muted-foreground text-sm max-w-xl">
            Formal computer science engineering degree and foundation studies.
          </p>
        </div>

        {/* Education Timeline Cards */}
        <div className="relative border-l-2 border-white/10 ml-4 sm:ml-6 pl-6 sm:pl-8 space-y-10">
          {educationList.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative group"
            >
              {/* Timeline Node Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-5 h-5 rounded-full bg-[#050816] border-2 border-accent-cyan flex items-center justify-center group-hover:scale-125 transition-transform duration-300">
                <div className="w-2 h-2 rounded-full bg-accent-cyan"></div>
              </div>

              {/* Card Content */}
              <div className="glass-card glass-card-hover p-6 sm:p-8 space-y-4">
                <div className="flex flex-wrap items-start justify-between gap-3 border-b border-white/10 pb-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <GraduationCap className="w-5 h-5 text-accent-cyan" />
                      <h3 className="font-heading font-bold text-lg sm:text-xl text-white">
                        {item.degree}
                      </h3>
                      {item.isCurrent && (
                        <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-accent-green/10 text-accent-green border border-accent-green/30">
                          Current Degree
                        </span>
                      )}
                    </div>
                    <p className="text-sm font-semibold text-accent-cyan/90">
                      {item.institution}
                    </p>
                  </div>

                  <div className="flex flex-col sm:items-end font-mono text-xs text-muted-foreground space-y-1">
                    <div className="flex items-center gap-1.5 bg-white/5 px-2.5 py-1 rounded-md border border-white/5">
                      <Calendar className="w-3.5 h-3.5 text-accent-cyan" />
                      <span>{item.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-muted-foreground" />
                      <span>{item.location}</span>
                    </div>
                  </div>
                </div>

                {/* Highlights List */}
                <div className="space-y-2">
                  <span className="font-mono text-xs text-muted-foreground block">
                    Key Highlights & Learning:
                  </span>
                  <ul className="space-y-2 font-sans text-xs sm:text-sm text-slate-300">
                    {item.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-accent-cyan flex-shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
