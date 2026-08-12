import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import CountUp from 'react-countup';
import { Trophy, Code2, Award, Briefcase, TrendingUp } from 'lucide-react';

interface AchievementItem {
  icon: React.ReactNode;
  value: number;
  suffix: string;
  label: string;
  sublabel: string;
  color: string;
  glowColor: string;
}

const achievements: AchievementItem[] = [
  {
    icon: <Code2 size={28} />,
    value: 3,
    suffix: '+',
    label: 'Projects Completed',
    sublabel: 'IoT, Web & Java Applications',
    color: '#2563EB',
    glowColor: 'rgba(37,99,235,0.3)',
  },
  {
    icon: <Trophy size={28} />,
    value: 3,
    suffix: '+',
    label: 'Programming Languages',
    sublabel: 'Java, Python, JavaScript',
    color: '#38BDF8',
    glowColor: 'rgba(56,189,248,0.3)',
  },
  {
    icon: <Award size={28} />,
    value: 3,
    suffix: '+',
    label: 'Certifications',
    sublabel: 'Full Stack, IoT, AI For Everyone',
    color: '#8B5CF6',
    glowColor: 'rgba(139,92,246,0.3)',
  },
  {
    icon: <Briefcase size={28} />,
    value: 1,
    suffix: '',
    label: 'Internship',
    sublabel: 'ZEN 1 Tech Park, Coimbatore',
    color: '#10B981',
    glowColor: 'rgba(16,185,129,0.3)',
  },
];

const Achievements: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="achievements" className="py-24 relative z-10" ref={ref}>
      {/* Ambient background glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-[120px] bg-blue-700/10 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-[120px] bg-purple-700/10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-tag-badge"
          >
            <TrendingUp size={14} />
            <span>Milestones & Numbers</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight"
          >
            My <span className="gradient-text-luxury">Achievements</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-base sm:text-lg mt-3"
          >
            Key milestones that define my development journey so far.
          </motion.p>
        </div>

        {/* Achievement Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {achievements.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5, ease: 'easeOut' }}
              whileHover={{ y: -8, scale: 1.03 }}
              className="glass-panel p-6 sm:p-8 text-center relative overflow-hidden group cursor-default"
              style={{ borderColor: `${item.color}20` }}
            >
              {/* Hover glow layer */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: `radial-gradient(circle at center, ${item.glowColor} 0%, transparent 70%)` }}
              />

              {/* Top accent line */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5 rounded-t-3xl"
                style={{ background: `linear-gradient(90deg, transparent, ${item.color}, transparent)` }}
              />

              {/* Icon */}
              <motion.div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 relative z-10"
                style={{
                  backgroundColor: `${item.color}18`,
                  border: `1px solid ${item.color}40`,
                  color: item.color,
                }}
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 6, repeat: Infinity, delay: idx * 0.8 }}
              >
                {item.icon}
              </motion.div>

              {/* Counter */}
              <div className="relative z-10 mb-2">
                <span
                  className="font-heading font-extrabold text-4xl sm:text-5xl block"
                  style={{ color: item.color }}
                >
                  {isInView ? (
                    <CountUp
                      end={item.value}
                      duration={2.5}
                      delay={idx * 0.15}
                      suffix={item.suffix}
                    />
                  ) : (
                    `0${item.suffix}`
                  )}
                </span>
              </div>

              {/* Label */}
              <h3 className="font-heading font-bold text-white text-sm sm:text-base mb-1 relative z-10">
                {item.label}
              </h3>
              <p className="text-slate-400 text-[11px] sm:text-xs relative z-10">
                {item.sublabel}
              </p>

              {/* Bottom decorative ring */}
              <div
                className="absolute -bottom-8 -right-8 w-20 h-20 rounded-full border-2 opacity-10"
                style={{ borderColor: item.color }}
              />
              <div
                className="absolute -bottom-4 -right-4 w-10 h-10 rounded-full opacity-20"
                style={{ backgroundColor: item.color }}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom motivational strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 glass-panel p-6 sm:p-8 text-center bg-gradient-to-r from-blue-950/30 via-purple-950/20 to-sky-950/30 border border-blue-500/20"
        >
          <p className="text-slate-300 text-sm sm:text-base">
            🚀 <span className="text-white font-semibold">Currently in my 4th Year</span> — actively building more projects, earning certifications, and targeting internships at leading tech companies.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default Achievements;
