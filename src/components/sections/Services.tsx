import React from 'react';
import { motion } from 'framer-motion';
import { services } from '../../data/portfolio';
import { Sparkles, ArrowRight } from 'lucide-react';
import { soundFx } from '../../utils/audio';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-tag-badge"
          >
            <Sparkles size={14} />
            <span>Specialized Capabilities</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight"
          >
            Services & <span className="gradient-text-luxury">Solutions</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-base sm:text-lg mt-3"
          >
            Delivering high-performance AI prompt architectures, full-stack applications, and embedded IoT systems.
          </motion.p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass-panel p-6 flex flex-col justify-between group relative overflow-hidden hover:border-purple-500/40"
              onMouseEnter={() => soundFx.playHover()}
            >
              {/* Radial ambient glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at top right, ${service.color}18 0%, transparent 70%)`,
                }}
              />

              <div>
                <div className="text-4xl mb-4 p-3 rounded-2xl bg-white/5 border border-white/10 w-fit">
                  {service.icon}
                </div>

                <h3 className="font-heading font-extrabold text-xl text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {service.title}
                </h3>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              {/* Feature Pills */}
              <div className="space-y-2 border-t border-white/10 pt-4">
                {service.features.map((feat) => (
                  <div key={feat} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: service.color }} />
                    <span className="text-xs text-slate-300 font-medium">{feat}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Collaboration Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 glass-panel p-8 sm:p-12 text-center bg-gradient-to-r from-purple-950/40 via-cyan-950/30 to-amber-950/30 border border-purple-500/30 relative overflow-hidden"
        >
          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white">
              Have an AI or Web Project in Mind?
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Let's collaborate on building an exceptional digital experience, custom prompt architecture, or intelligent software system.
            </p>
            <div className="pt-2">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  soundFx.playClick();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-luxury-primary"
                onMouseEnter={() => soundFx.playHover()}
              >
                <span>Let's Work Together</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Services;
