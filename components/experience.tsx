"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Terminal, Briefcase, Calendar, MapPin, Award, CheckCircle2 } from "lucide-react";
import { experienceList } from "@/lib/data";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

export default function Experience() {
  const [selectedCert, setSelectedCert] = useState<string | null>(null);

  return (
    <section id="experience" className="py-20 bg-background-secondary/60 relative">
      <div className="container-custom">
        {/* Monospace Section Eyebrow */}
        <div className="flex flex-col items-start space-y-2 mb-12">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-accent-cyan bg-accent-cyan/10 px-3 py-1 rounded-md border border-accent-cyan/20">
            <Terminal className="w-3.5 h-3.5" />
            <span>// Work Experience</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white">
            Internship & Practical Training
          </h2>
          <p className="text-muted-foreground text-sm max-w-xl">
            Real industry exposure, hardware integration, and embedded systems development.
          </p>
        </div>

        {/* Experience List */}
        <div className="space-y-8">
          {experienceList.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="glass-card glass-card-hover p-6 sm:p-8 space-y-6"
            >
              {/* Header Info */}
              <div className="flex flex-wrap items-start justify-between gap-4 border-b border-white/10 pb-6">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <Briefcase className="w-5 h-5 text-accent-cyan" />
                    <h3 className="font-heading font-bold text-xl text-white">
                      {exp.role}
                    </h3>
                    <span className="font-mono text-[10px] px-2.5 py-0.5 rounded bg-accent-green/10 text-accent-green border border-accent-green/30">
                      {exp.duration}
                    </span>
                  </div>

                  <p className="text-base font-bold text-accent-cyan">
                    {exp.company}
                  </p>
                  <p className="font-mono text-xs text-muted-foreground">
                    Domain: {exp.domain}
                  </p>
                </div>

                <div className="flex flex-col sm:items-end font-mono text-xs text-muted-foreground space-y-1.5">
                  <div className="flex items-center gap-1.5 bg-white/5 px-3 py-1 rounded-md border border-white/10 text-white">
                    <Calendar className="w-3.5 h-3.5 text-accent-cyan" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-muted-foreground" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground text-sm leading-relaxed">
                {exp.description}
              </p>

              {/* Achievements */}
              <div className="space-y-2">
                <span className="font-mono text-xs text-accent-cyan block">
                  Key Achievements & Exposure:
                </span>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 font-sans text-xs sm:text-sm text-slate-300">
                  {exp.achievements.map((ach, aIdx) => (
                    <li key={aIdx} className="flex items-start gap-2 bg-white/5 p-3 rounded-lg border border-white/5">
                      <CheckCircle2 className="w-4 h-4 text-accent-cyan flex-shrink-0 mt-0.5" />
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Certificate Preview Trigger if available */}
              {exp.certificateImage && (
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedCert(exp.certificateImage || null)}
                    className="inline-flex items-center gap-2 px-4 py-2 text-xs font-mono font-semibold text-accent-cyan bg-accent-cyan/10 border border-accent-cyan/30 hover:bg-accent-cyan/20 rounded-lg transition-all"
                  >
                    <Award className="w-4 h-4" />
                    <span>View ZEN 1 Internship Certificate</span>
                  </button>

                  <span className="font-mono text-[10px] text-muted-foreground hidden sm:inline">
                    Verified Industry Certificate
                  </span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Certificate Modal Dialog */}
      <Dialog open={!!selectedCert} onOpenChange={() => setSelectedCert(null)}>
        <DialogContent className="max-w-2xl bg-[#0B1020] border-white/15">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-accent-cyan">
              <Award className="w-5 h-5" />
              <span>ZEN 1 Tech Park — IoT Internship Certificate</span>
            </DialogTitle>
          </DialogHeader>
          {selectedCert && (
            <div className="relative w-full h-[350px] sm:h-[450px] rounded-xl overflow-hidden bg-black/50 border border-white/10 mt-2">
              <Image
                src={selectedCert}
                alt="ZEN 1 Tech Park Certificate"
                fill
                className="object-contain"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
