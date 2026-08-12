'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<'loading' | 'reveal' | 'exit'>('loading');
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Particle background canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number; y: number; vx: number; vy: number;
      size: number; opacity: number; color: string;
    }> = [];

    const colors = ['#8B5CF6', '#06B6D4', '#F59E0B', '#10B981'];
    for (let i = 0; i < 90; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        size: Math.random() * 2 + 0.8,
        opacity: Math.random() * 0.7 + 0.2,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    let animId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity;
        ctx.fill();
      });
      animId = requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Progress counter
  useEffect(() => {
    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += Math.random() * 4 + 1.5;
      if (currentProgress >= 100) {
        currentProgress = 100;
        clearInterval(interval);
        setPhase('reveal');
        setTimeout(() => {
          setPhase('exit');
          setTimeout(onComplete, 700);
        }, 500);
      }
      setProgress(Math.floor(currentProgress));
    }, 35);
    return () => clearInterval(interval);
  }, [onComplete]);

  const nameLetters = "KARTHIKEYAN S".split("");
  const circumference = 2 * Math.PI * 58;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <AnimatePresence>
      {phase !== 'exit' && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden bg-[#05050A]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          {/* Animated particle canvas background */}
          <canvas ref={canvasRef} className="absolute inset-0 opacity-50" />

          {/* Ambient Radial Mesh Light */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(circle at 50% 50%, rgba(139,92,246,0.12) 0%, rgba(6,182,212,0.06) 45%, transparent 75%)',
            }}
          />

          {/* Main Loader Core */}
          <div className="relative z-10 flex flex-col items-center gap-8 text-center px-4">
            {/* Animated "K" Emblem Ring */}
            <motion.div
              className="relative flex items-center justify-center"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, type: 'spring', damping: 14 }}
            >
              {/* Rotating Progress Ring */}
              <svg
                width="150"
                height="150"
                viewBox="0 0 150 150"
                className="absolute"
                style={{ transform: 'rotate(-90deg)' }}
              >
                <circle cx="75" cy="75" r="58" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="3" />
                <circle
                  cx="75"
                  cy="75"
                  r="58"
                  fill="none"
                  stroke="url(#luxuryProgressGrad)"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeDasharray={circumference}
                  strokeDashoffset={strokeDashoffset}
                  style={{ transition: 'stroke-dashoffset 0.1s linear' }}
                />
                <defs>
                  <linearGradient id="luxuryProgressGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#8B5CF6" />
                    <stop offset="50%" stopColor="#06B6D4" />
                    <stop offset="100%" stopColor="#F59E0B" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Logo Emblem Box */}
              <motion.div
                className="relative w-24 h-24 rounded-2xl flex items-center justify-center backdrop-blur-md"
                animate={{
                  boxShadow: [
                    '0 0 25px rgba(139,92,246,0.3)',
                    '0 0 60px rgba(139,92,246,0.6), 0 0 80px rgba(6,182,212,0.4)',
                    '0 0 25px rgba(139,92,246,0.3)',
                  ],
                }}
                transition={{ duration: 2.2, repeat: Infinity }}
                style={{
                  background: 'linear-gradient(135deg, rgba(139,92,246,0.18), rgba(6,182,212,0.18))',
                  border: '1px solid rgba(255,255,255,0.15)',
                }}
              >
                <span className="font-heading text-5xl font-extrabold gradient-text-luxury">
                  K
                </span>
              </motion.div>
            </motion.div>

            {/* Name Letter by Letter Reveal */}
            <div className="flex flex-wrap justify-center gap-1 max-w-md">
              {nameLetters.map((letter, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.4 + i * 0.05,
                    duration: 0.5,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="font-heading text-3xl sm:text-4xl font-bold tracking-widest text-slate-100"
                >
                  {letter === ' ' ? '\u00A0\u00A0' : letter}
                </motion.span>
              ))}
            </div>

            {/* Subtitles & Role */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.5 }}
              className="flex flex-wrap items-center justify-center gap-2 text-xs sm:text-sm text-slate-400 font-medium tracking-wider uppercase"
            >
              <span className="text-purple-400 font-semibold">Prompt Engineer</span>
              <span className="text-slate-600">•</span>
              <span className="text-cyan-400 font-semibold">Software Developer</span>
              <span className="text-slate-600">•</span>
              <span className="text-amber-400 font-semibold">AI & Web Developer</span>
            </motion.div>

            {/* Progress Bar & Percentage */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col items-center gap-3 w-full max-w-xs mt-2"
            >
              <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden p-0.5 backdrop-blur-sm">
                <motion.div
                  className="h-full rounded-full"
                  style={{
                    width: `${progress}%`,
                    background: 'linear-gradient(90deg, #8B5CF6, #06B6D4, #F59E0B)',
                    boxShadow: '0 0 15px rgba(139,92,246,0.6)',
                  }}
                />
              </div>
              <div className="flex justify-between w-full text-xs font-mono text-slate-400 tracking-widest">
                <span>INITIALIZING PORTFOLIO</span>
                <span className="text-purple-400 font-bold">{progress}%</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
