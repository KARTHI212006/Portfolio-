import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Calendar, Award, ExternalLink } from 'lucide-react';
import { certificates } from '../../data/portfolio';
import { soundFx } from '../../utils/audio';

const Certificates: React.FC = () => {
  return (
    <section id="certificates" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-tag-badge"
          >
            <Award size={14} />
            <span>Credentials & Certifications</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight"
          >
            My <span className="gradient-text-luxury">Certifications</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-base sm:text-lg mt-3"
          >
            Industry-recognized credentials validating my technical proficiency and continuous learning.
          </motion.p>
        </div>

        {/* Certificates Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {certificates.map((cert, idx) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
              whileHover={{ y: -8 }}
              className="glass-panel p-8 relative overflow-hidden group flex flex-col cursor-default"
              style={{ borderColor: `${cert.color}20` }}
              onMouseEnter={() => soundFx.playHover()}
            >
              {/* Top accent gradient bar */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5 rounded-t-3xl transition-all duration-300 group-hover:h-1"
                style={{ background: `linear-gradient(90deg, transparent, ${cert.color}, transparent)` }}
              />

              {/* Background glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: `radial-gradient(circle at top right, ${cert.color}12 0%, transparent 60%)` }}
              />

              {/* Certificate number */}
              <div className="absolute top-5 right-5 text-xs font-mono font-bold text-slate-600 group-hover:text-slate-500 transition-colors">
                #{String(idx + 1).padStart(2, '0')}
              </div>

              {/* Icon */}
              <motion.div
                className="text-5xl mb-6 w-fit"
                animate={{ rotate: [0, 8, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, delay: idx * 0.6 }}
              >
                {cert.icon}
              </motion.div>

              {/* Trophy badge */}
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-lg mb-5"
                style={{
                  background: `${cert.color}22`,
                  border: `1px solid ${cert.color}44`,
                }}
              >
                🏆
              </div>

              {/* Title */}
              <h3 className="font-heading font-extrabold text-lg text-white mb-2 leading-tight group-hover:text-sky-100 transition-colors relative z-10">
                {cert.title}
              </h3>

              {/* Issuer */}
              <p
                className="text-sm font-semibold mb-1 relative z-10"
                style={{ color: cert.color }}
              >
                {cert.issuer}
              </p>

              {/* Date */}
              <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-4 relative z-10">
                <Calendar size={12} />
                <span>Issued: {cert.date}</span>
              </div>

              {/* Description */}
              <p className="text-xs text-slate-400 leading-relaxed mb-5 relative z-10 flex-1">
                {cert.description}
              </p>

              {/* Skills Verified */}
              <div className="mb-5 relative z-10">
                <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider block mb-2">
                  Skills Verified
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {cert.skillsVerified.map((skill) => (
                    <span
                      key={skill}
                      className="text-[10px] px-2 py-0.5 rounded-full font-mono font-semibold"
                      style={{
                        backgroundColor: `${cert.color}18`,
                        border: `1px solid ${cert.color}35`,
                        color: cert.color,
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom verify row */}
              <div className="flex items-center justify-between pt-4 border-t border-white/10 relative z-10">
                <div className="flex items-center gap-1.5 text-xs font-semibold" style={{ color: cert.color }}>
                  <ShieldCheck size={14} />
                  <span>Verified Certificate</span>
                </div>
                <span className="text-[10px] font-mono text-slate-500">{cert.credentialId}</span>
              </div>

              {/* Bottom accent line */}
              <div
                className="mt-4 h-0.5 rounded-full mx-auto w-3/4"
                style={{ background: `linear-gradient(90deg, transparent, ${cert.color}60, transparent)` }}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-slate-500 text-sm">
            🎯 Continuously earning new certifications to stay current with industry trends.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default Certificates;
