"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function BootLoader() {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState("[INITIALIZING]");
  const [streamLines, setStreamLines] = useState<string[]>([
    "▶ BOOTING KARTHIKEYAN.OS // KERNEL v3.0...",
    "▶ VERIFYING RUNTIME: REACT 19 • NEXT.JS 15 • JAVA ECOSYSTEM...",
  ]);

  useEffect(() => {
    // Check if user already booted during this browser session
    const hasBooted = sessionStorage.getItem("portfolio_booted");
    if (hasBooted === "true") {
      setIsVisible(false);
      return;
    }

    const streamLogs = [
      "▶ MOUNTING CORE MODULES: JAVA • MYSQL • JDBC • NEXT.JS",
      "▶ CALIBRATING AI PROMPT PIPELINES & LLM AGENTS...",
      "▶ LOADING TELEMETRY: 3 PRODUCTION CASE STUDIES DETECTED",
      "▶ VERIFIED CREDENTIALS: 3 AUDITED CERTIFICATES READY",
      "▶ IDENTITY CONFIRMED: KARTHIKEYAN S [DEVELOPER MODE: ACTIVE]",
    ];

    let currentLogIndex = 0;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setStatusText("[ONLINE - ACCESS GRANTED]");
          setTimeout(() => {
            setIsVisible(false);
            sessionStorage.setItem("portfolio_booted", "true");
          }, 450);
          return 100;
        }

        const next = prev + Math.floor(Math.random() * 12) + 8;
        const bounded = Math.min(next, 100);

        if (bounded > 30 && currentLogIndex === 0) {
          setStreamLines((prev) => [...prev, streamLogs[0]]);
          currentLogIndex = 1;
        } else if (bounded > 55 && currentLogIndex === 1) {
          setStreamLines((prev) => [...prev, streamLogs[1]]);
          currentLogIndex = 2;
        } else if (bounded > 75 && currentLogIndex === 2) {
          setStreamLines((prev) => [...prev, streamLogs[2], streamLogs[3]]);
          currentLogIndex = 4;
        } else if (bounded >= 95 && currentLogIndex === 4) {
          setStreamLines((prev) => [...prev, streamLogs[4]]);
          setStatusText("[SYSTEM READY]");
          currentLogIndex = 5;
        }

        return bounded;
      });
    }, 110);

    return () => clearInterval(interval);
  }, []);

  const handleSkip = () => {
    setIsVisible(false);
    sessionStorage.setItem("portfolio_booted", "true");
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02, filter: "blur(8px)" }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#050816] text-white overflow-hidden p-4 select-none"
        >
          {/* Cyber ambient glow backdrop */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-violet-600/15 rounded-full blur-[90px] pointer-events-none" />

          {/* High-Tech HUD Container */}
          <div className="relative w-full max-w-lg rounded-2xl border border-cyan-500/30 bg-[#080d22]/90 backdrop-blur-xl p-6 sm:p-8 shadow-[0_0_50px_rgba(6,182,212,0.15)] flex flex-col items-center text-center">
            {/* HUD Header */}
            <div className="w-full flex items-center justify-between pb-4 border-b border-white/10 text-xs font-mono">
              <span className="text-accent-cyan tracking-wider flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-accent-cyan animate-pulse" />
                KARTHIKEYAN.OS // v3.0
              </span>
              <span className="text-emerald-400 font-semibold">{statusText}</span>
            </div>

            {/* Glowing Core Orb with Pulse Ring */}
            <div className="relative my-6 flex items-center justify-center">
              <div className="relative w-20 h-20 rounded-full bg-gradient-to-tr from-cyan-500 via-blue-600 to-violet-600 flex items-center justify-center text-2xl font-black shadow-[0_0_30px_rgba(6,182,212,0.5)]">
                <span className="text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">K</span>
              </div>
              <div className="absolute inset-0 -m-3 rounded-full border border-cyan-400/40 animate-ping opacity-60 pointer-events-none" />
              <div className="absolute inset-0 -m-6 rounded-full border border-dashed border-violet-500/30 animate-[spin_10s_linear_infinite] pointer-events-none" />
            </div>

            {/* Name & Primary Role */}
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-200 to-white">
              KARTHIKEYAN S
            </h1>
            <p className="text-xs sm:text-sm font-mono text-cyan-300/80 tracking-widest mt-1 mb-4">
              JAVA FULL STACK DEVELOPER • AI WORKFLOWS
            </p>

            {/* Console Stream Box */}
            <div className="w-full bg-[#030612]/80 rounded-lg p-3 text-left font-mono text-[11px] sm:text-xs text-slate-300 border border-white/5 h-24 overflow-hidden flex flex-col justify-end space-y-1">
              {streamLines.slice(-3).map((line, idx) => (
                <div key={idx} className="truncate text-cyan-300/90 animate-pulse">
                  {line}
                </div>
              ))}
            </div>

            {/* Progress Bar & Percentage */}
            <div className="w-full mt-5">
              <div className="flex justify-between text-xs font-mono text-slate-400 mb-1.5">
                <span>SYSTEM SYNCHRONIZATION</span>
                <span className="text-accent-cyan font-bold">{progress}%</span>
              </div>
              <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden p-0.5 border border-white/10">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-emerald-400"
                  style={{ width: `${progress}%` }}
                  transition={{ ease: "easeOut", duration: 0.2 }}
                />
              </div>
            </div>

            {/* Skip Option */}
            <button
              onClick={handleSkip}
              className="mt-5 text-[11px] font-mono text-slate-400 hover:text-white transition-colors underline cursor-pointer"
            >
              [PRESS TO SKIP SEQUENCE ⚡]
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
