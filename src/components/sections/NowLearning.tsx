import React from 'react';
import { motion } from 'framer-motion';
import { nowLearning } from '../../data/portfolio';
import { Zap, BookOpen } from 'lucide-react';

const NowLearning: React.FC = () => {
  return (
    <section id="now-learning" className="py-16 relative z-10">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-panel p-8 sm:p-10 border border-sky-500/20 bg-gradient-to-br from-sky-950/20 via-[#020617] to-blue-950/20 relative overflow-hidden"
        >
          {/* Background circuit grid */}
          <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage: 'linear-gradient(rgba(56,189,248,1) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,1) 1px, transparent 1px)',
              backgroundSize: '30px 30px',
            }}
          />

          {/* Floating decorative elements — subtle gaming feel */}
          <div className="absolute top-4 right-6 text-2xl opacity-20 select-none">⚡</div>
          <div className="absolute bottom-4 left-8 text-xl opacity-15 select-none">🎯</div>

          <div className="relative z-10">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-300 text-xs font-bold font-heading uppercase tracking-wider w-fit">
                <Zap size={14} className="text-sky-400" />
                <span>Currently Leveling Up</span>
              </div>

              <div className="flex items-center gap-2">
                {/* Pulsing dot — "now playing" indicator */}
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-sky-500"></span>
                </span>
                <span className="text-xs text-slate-400 font-mono">Active Learning Mode</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6">
              <div className="max-w-md">
                <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white mb-2">
                  Now <span className="gradient-text-cyan">Learning</span>
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Actively expanding my backend & framework skills to become a well-rounded Full Stack Java Developer.
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-500 font-mono">
                <BookOpen size={14} />
                <span>Self-learning & online resources</span>
              </div>
            </div>

            {/* Learning cards */}
            <div className="grid sm:grid-cols-3 gap-5 mt-8">
              {nowLearning.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-sky-500/30 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <h4 className="font-heading font-bold text-white text-sm group-hover:text-sky-300 transition-colors">
                        {item.name}
                      </h4>
                      <p className="text-[11px] text-slate-400">{item.desc}</p>
                    </div>
                  </div>

                  {/* Progress bar */}
                  <div className="mt-3">
                    <div className="flex justify-between text-[10px] text-slate-500 mb-1.5">
                      <span className="font-mono font-bold uppercase tracking-wider">Progress</span>
                      <span className="font-mono text-sky-400 font-bold">{item.progress}%</span>
                    </div>
                    <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.progress}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: i * 0.15, ease: 'easeOut' }}
                        className="h-full rounded-full"
                        style={{
                          background: `linear-gradient(90deg, ${item.color}, ${item.color}88)`,
                          boxShadow: `0 0 8px ${item.color}60`,
                        }}
                      />
                    </div>

                    {/* XP style label */}
                    <div className="mt-2 flex gap-2">
                      <span
                        className="text-[10px] px-2 py-0.5 rounded-full font-mono font-bold"
                        style={{
                          backgroundColor: `${item.color}18`,
                          border: `1px solid ${item.color}40`,
                          color: item.color,
                        }}
                      >
                        Beginner → Intermediate
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default NowLearning;
