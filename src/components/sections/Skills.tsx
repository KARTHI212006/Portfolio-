import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { skillsCategory } from '../../data/portfolio';
import { Cpu, Zap } from 'lucide-react';
import { soundFx } from '../../utils/audio';

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="skills" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Title Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-tag-badge"
          >
            <Cpu size={14} />
            <span>Technical Mastery</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight"
          >
            Skills & <span className="gradient-text-cyan">Expertise</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-base sm:text-lg mt-3"
          >
            Programming languages, frontend skills, developer tools & core CS concepts.
          </motion.p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {skillsCategory.map((cat, idx) => {
            const isActive = activeCategory === idx;
            const isLearning = cat.title === 'Currently Learning';
            return (
              <motion.button
                key={idx}
                onClick={() => {
                  soundFx.playClick();
                  setActiveCategory(idx);
                }}
                onMouseEnter={() => soundFx.playHover()}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full font-heading font-bold text-xs sm:text-sm tracking-wide transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-blue-600 via-sky-500 to-purple-500 text-white shadow-lg shadow-blue-500/25 border border-white/20'
                    : 'bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10'
                }`}
              >
                <span>{cat.icon}</span>
                <span>{cat.title}</span>
                {isLearning && (
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
                  </span>
                )}
              </motion.button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillsCategory[activeCategory].skills.map((skill, i) => {
            const isLearning = skill.tag === 'Learning';
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="glass-panel p-6 relative overflow-hidden group hover:border-blue-500/40 transition-all duration-300"
                onMouseEnter={() => soundFx.playHover()}
              >
                {/* Hover glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: `radial-gradient(circle at top left, ${skill.color}15 0%, transparent 60%)` }}
                />

                <div className="flex items-center justify-between mb-4 relative z-10">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{skill.icon}</span>
                    <div>
                      <h4 className="font-heading font-bold text-white text-base">{skill.name}</h4>
                      <span
                        className="text-[10px] font-mono font-bold uppercase tracking-widest"
                        style={{ color: isLearning ? '#38BDF8' : skill.color }}
                      >
                        {skill.tag}
                        {isLearning && <Zap size={10} className="inline ml-1" />}
                      </span>
                    </div>
                  </div>
                  <span
                    className="font-heading font-extrabold text-lg"
                    style={{ color: skill.color }}
                  >
                    {skill.level}%
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden relative z-10">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: i * 0.1, ease: 'easeOut' }}
                    className="h-full rounded-full"
                    style={{
                      background: isLearning
                        ? `linear-gradient(90deg, #38BDF8, #8B5CF6)`
                        : `linear-gradient(90deg, ${skill.color}, ${skill.color}88)`,
                      boxShadow: `0 0 10px ${skill.color}60`,
                    }}
                  />
                </div>

                {isLearning && (
                  <p className="text-[10px] text-slate-500 mt-2 font-mono relative z-10">
                    Currently learning — growing rapidly 🚀
                  </p>
                )}
              </motion.div>
            );
          })}
        </motion.div>

        {/* All Skill Pills Cloud */}
        <div className="mt-16 text-center">
          <span className="text-xs font-heading uppercase tracking-widest text-slate-400 font-bold block mb-6">
            Complete Technical Skill Set
          </span>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {skillsCategory.flatMap(c => c.skills).map((item, i) => (
              <span
                key={i}
                className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-slate-200 font-heading font-semibold text-xs flex items-center gap-2 hover:border-sky-500/40 hover:text-sky-300 transition-all duration-300"
              >
                <span>{item.icon}</span>
                <span>{item.name}</span>
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
