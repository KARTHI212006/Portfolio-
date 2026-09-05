"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Terminal, Award, ExternalLink, Calendar, ShieldCheck, Inbox } from "lucide-react";
import { certificatesList, CertificateItem } from "@/lib/data";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

export default function Certificates() {
  const [activeCert, setActiveCert] = useState<CertificateItem | null>(null);

  return (
    <section id="certificates" className="py-20 relative">
      <div className="container-custom">
        {/* Monospace Section Eyebrow */}
        <div className="flex flex-col items-start space-y-2 mb-12">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-accent-cyan bg-accent-cyan/10 px-3 py-1 rounded-md border border-accent-cyan/20">
            <Terminal className="w-3.5 h-3.5" />
            <span>// Certifications & Credential</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white">
            Verified Certifications
          </h2>
          <p className="text-muted-foreground text-sm max-w-xl">
            Official credentials and completion certificates for technical domain expertise.
          </p>
        </div>

        {/* Certificates Grid or Graceful Empty State */}
        {certificatesList.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificatesList.map((cert, idx) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                onClick={() => setActiveCert(cert)}
                className="glass-card glass-card-hover p-5 flex flex-col justify-between cursor-pointer group"
              >
                <div className="space-y-4">
                  {/* Image Preview Box */}
                  <div className="relative w-full h-44 rounded-lg overflow-hidden bg-[#020612] border border-white/10 p-2">
                    <Image
                      src={cert.image}
                      alt={cert.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 350px"
                      className="object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                      <div className="p-2 rounded-full bg-accent-cyan/20 border border-accent-cyan/40 text-accent-cyan backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity">
                        <ExternalLink className="w-5 h-5" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between gap-2 flex-wrap">
                      <div className="flex items-center gap-1.5">
                        <ShieldCheck className="w-3.5 h-3.5 text-accent-green" />
                        <span className="font-mono text-[10px] text-accent-green uppercase font-semibold">
                          Verified Credential
                        </span>
                      </div>
                      {cert.badge && (
                        <span className="font-mono text-[9px] px-2 py-0.5 rounded bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/25 font-bold tracking-wider">
                          {cert.badge}
                        </span>
                      )}
                    </div>
                    <h3 className="font-heading font-bold text-base text-white group-hover:text-accent-cyan transition-colors line-clamp-2">
                      {cert.title}
                    </h3>
                    <p className="text-xs font-medium text-slate-300">
                      {cert.issuer}
                    </p>
                    {cert.credentialId && (
                      <p className="font-mono text-[11px] text-slate-400">
                        ID: <span className="text-accent-cyan/90">{cert.credentialId}</span>
                      </p>
                    )}
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between font-mono text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-accent-cyan" />
                    <span className="text-[11px]">{cert.date}</span>
                  </div>
                  <span className="text-accent-cyan text-[11px] group-hover:underline">
                    View full →
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          /* Graceful Empty State (Never show blank space) */
          <div className="glass-card p-12 text-center flex flex-col items-center justify-center space-y-4 max-w-lg mx-auto">
            <div className="p-4 rounded-full bg-white/5 border border-white/10 text-muted-foreground">
              <Inbox className="w-8 h-8" />
            </div>
            <h3 className="font-heading font-bold text-lg text-white">
              No Additional Certificates Listed Yet
            </h3>
            <p className="text-muted-foreground text-xs leading-relaxed">
              New certification records will automatically render here as entries are added to <code className="text-accent-cyan">lib/data.ts</code>.
            </p>
          </div>
        )}
      </div>

      {/* Certificate Viewer Modal Dialog */}
      <Dialog open={!!activeCert} onOpenChange={() => setActiveCert(null)}>
        {activeCert && (
          <DialogContent className="max-w-3xl bg-[#0B1020] border-white/15">
            <DialogHeader>
              <div className="flex items-center justify-between gap-3 flex-wrap">
                <DialogTitle className="flex items-center gap-2 text-white font-heading font-bold text-lg sm:text-xl">
                  <Award className="w-5 h-5 text-accent-cyan flex-shrink-0" />
                  <span>{activeCert.title}</span>
                </DialogTitle>
                {activeCert.badge && (
                  <span className="font-mono text-[10px] px-2.5 py-1 rounded bg-accent-cyan/15 text-accent-cyan border border-accent-cyan/30 font-bold">
                    {activeCert.badge}
                  </span>
                )}
              </div>
              <DialogDescription className="text-xs font-mono text-muted-foreground pt-1">
                Issued by {activeCert.issuer} • {activeCert.date}
                {activeCert.credentialId && ` • ID: ${activeCert.credentialId}`}
              </DialogDescription>
            </DialogHeader>

            <div className="relative w-full h-[380px] sm:h-[480px] rounded-xl overflow-hidden bg-black/60 border border-white/10 my-2">
              <Image
                src={activeCert.image}
                alt={activeCert.title}
                fill
                className="object-contain"
              />
            </div>

            <div className="bg-white/5 p-4 rounded-xl border border-white/5 text-xs text-muted-foreground space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="font-mono text-accent-cyan font-bold block uppercase text-[11px]">
                  Official Credential Verification Details
                </span>
                <a
                  href={activeCert.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-cyan font-mono text-[11px] hover:underline inline-flex items-center gap-1"
                >
                  <span>Open High-Res</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <p className="text-slate-200 text-xs sm:text-sm leading-relaxed">{activeCert.description}</p>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
}
