import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo, education, internship, interests, stats } from '../../data/portfolio';
import { MapPin, Mail, Award, Compass, Heart, GraduationCap, Briefcase } from 'lucide-react';
import { soundFx } from '../../utils/audio';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Title Tag */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-tag-badge"
          >
            <Compass size={14} />
            <span>Discover My Background</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight"
          >
            About <span className="gradient-text-luxury">{personalInfo.name}</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-base sm:text-lg mt-3"
          >
            Fourth-Year Computer Science & Engineering Student, Java Developer & Full Stack Web Developer.
          </motion.p>
        </div>

        {/* Grid 1: Personal Info & Bio */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch mb-16">

          {/* Left Column: Photo & Key Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 glass-panel p-6 flex flex-col justify-between"
          >
            <div className="relative w-full h-80 rounded-2xl overflow-hidden mb-3.5 border border-white/10 group">
              <img
                src={personalInfo.profileImage}
                alt={personalInfo.name}
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="p-3.5 rounded-xl bg-[#0A0A12]/80 backdrop-blur-md border border-blue-500/20 mb-6 text-center shadow-lg">
              <span className="font-heading font-extrabold text-base tracking-wide bg-gradient-to-r from-blue-400 via-sky-300 to-purple-400 bg-clip-text text-transparent block">
                {personalInfo.name}
              </span>
              <span className="text-sky-400 text-xs font-semibold mt-0.5 block">
                {personalInfo.location}
              </span>
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-slate-300">
              <div className="flex justify-between items-center py-2 border-b border-white/10">
                <span className="text-slate-400 font-medium">Full Name:</span>
                <span className="font-bold text-white">{personalInfo.name}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-white/10">
                <span className="text-slate-400 font-medium">Year:</span>
                <span className="font-bold text-blue-300">Fourth Year, B.E. CSE</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-white/10">
                <span className="text-slate-400 font-medium">CGPA:</span>
                <span className="font-bold text-amber-400 font-mono">8.1 / 10</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-white/10">
                <span className="text-slate-400 font-medium">Location:</span>
                <span className="font-bold text-sky-300 flex items-center gap-1">
                  <MapPin size={14} /> Salem, Tamil Nadu, India
                </span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-white/10">
                <span className="text-slate-400 font-medium">Email:</span>
                <span className="font-bold text-purple-300 flex items-center gap-1 text-[11px]">
                  <Mail size={13} /> {personalInfo.email}
                </span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-slate-400 font-medium">Motto:</span>
                <span className="font-accent font-bold text-amber-400">"{personalInfo.motto}"</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Detailed Bio */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 flex flex-col justify-between space-y-6"
          >
            <div className="glass-panel p-8 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-300 text-xs font-bold font-heading uppercase tracking-wider">
                <Award size={14} /> My Vision & Bio
              </div>

              <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white">
                Building <span className="gradient-text-cyan">Impactful Software</span> Through Clean Code
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {personalInfo.intro}
              </p>

              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                {personalInfo.about}
              </p>

              {/* Key highlights */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                {[
                  { icon: '☕', label: 'Java Developer', sub: 'Advanced OOP & DSA' },
                  { icon: '🌐', label: 'Full Stack Web Dev', sub: 'HTML, CSS, JavaScript' },
                  { icon: '✨', label: 'Prompt Engineer', sub: 'AI Tools & LLMs' },
                  { icon: '🔌', label: 'IoT Intern', sub: 'ZEN 1 Tech Park' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2.5 p-3 rounded-xl bg-white/5 border border-white/10">
                    <span className="text-xl">{item.icon}</span>
                    <div>
                      <span className="text-xs font-heading font-bold text-white block">{item.label}</span>
                      <span className="text-[10px] text-slate-400">{item.sub}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Live Stats Counters */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((s, idx) => (
                <div key={idx} className="glass-panel p-4 text-center hover:border-blue-500/40 transition-colors">
                  <span className="font-heading font-extrabold text-xl sm:text-2xl text-sky-400 block">
                    {s.value}{s.suffix}
                  </span>
                  <span className="text-slate-400 text-[11px] font-medium uppercase tracking-wider block mt-1">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Education Timeline Cards Section */}
        <div id="education" className="mt-20">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-tag-badge"
            >
              <GraduationCap size={14} />
              <span>Academic Journey</span>
            </motion.div>
            <h3 className="font-heading font-extrabold text-2xl sm:text-4xl text-white mt-4">
              Academic <span className="gradient-text-luxury">Education</span>
            </h3>
            <p className="text-slate-400 text-sm mt-2">Formal Computer Science & Engineering Academic Journey</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {education.map((edu, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="glass-panel p-8 relative overflow-hidden group hover:border-blue-500/50"
                onMouseEnter={() => soundFx.playHover()}
              >
                {/* Ambient glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: `radial-gradient(circle at top left, ${edu.color}15 0%, transparent 70%)` }}
                />

                <div className="flex items-start justify-between mb-4 relative z-10">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl p-3 rounded-2xl bg-white/5 border border-white/10">{edu.icon}</span>
                    <div>
                      <span className="text-xs font-mono font-bold text-sky-400 tracking-wider block">{edu.graduationYear}</span>
                      <h4 className="font-heading font-bold text-lg text-white">{edu.degree}</h4>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30 shrink-0">
                    {edu.status}
                  </span>
                </div>

                <p className="text-blue-300 text-sm font-semibold mb-1 relative z-10">{edu.field}</p>
                <p className="text-slate-400 text-xs font-medium mb-2 relative z-10">{edu.institution} — {edu.location}</p>
                {edu.cgpa && (
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30 font-bold">
                      CGPA: {edu.cgpa}
                    </span>
                  </div>
                )}

                <ul className="space-y-2 text-xs text-slate-300 list-disc list-inside border-t border-white/10 pt-4 relative z-10">
                  {edu.highlights.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Internship Highlight Section */}
        <div id="internship" className="mt-20">
          <div className="text-center mb-10">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-tag-badge"
            >
              <Briefcase size={14} />
              <span>Work Experience</span>
            </motion.div>
            <h3 className="font-heading font-extrabold text-2xl sm:text-4xl text-white mt-4">
              Professional <span className="gradient-text-emerald">Internship</span>
            </h3>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-8 sm:p-10 border border-emerald-500/40 bg-gradient-to-br from-emerald-950/20 via-[#020617] to-sky-950/20 relative overflow-hidden"
          >
            {/* Background grid pattern */}
            <div
              className="absolute inset-0 opacity-5 pointer-events-none"
              style={{
                backgroundImage: 'linear-gradient(rgba(16,185,129,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.5) 1px, transparent 1px)',
                backgroundSize: '40px 40px',
              }}
            />

            <div className="flex flex-wrap items-center justify-between gap-4 mb-6 border-b border-white/10 pb-6 relative z-10">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 font-heading block">
                  Professional Internship Experience
                </span>
                <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white mt-1">
                  {internship.company} — <span className="text-emerald-400">{internship.domain}</span>
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm font-medium mt-1">
                  📍 {internship.location} &nbsp;|&nbsp; Role: <span className="text-white font-semibold">{internship.role}</span>
                </p>
              </div>

              <div className="px-4 py-2 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-mono font-bold">
                📅 {internship.duration}
              </div>
            </div>

            <p className="text-slate-200 text-sm sm:text-base leading-relaxed mb-6 relative z-10">
              {internship.description}
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10">
              {internship.learnings.map((learn, i) => (
                <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-300 font-medium">
                  <span className="text-emerald-400 font-bold block mb-1">Key Outcome 0{i + 1}</span>
                  {learn}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Interests & Personal Passions Section */}
        <div id="interests" className="mt-20">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-tag-badge"
            >
              <Heart size={14} />
              <span>What I Love</span>
            </motion.div>
            <h3 className="font-heading font-extrabold text-2xl sm:text-4xl text-white mt-4">
              Interests & <span className="gradient-text-gold">Passions</span>
            </h3>
            <p className="text-slate-400 text-sm mt-2">What drives my curiosity and creativity</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {interests.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="glass-panel p-5 text-center flex flex-col items-center justify-between hover:border-amber-500/40 transition-all duration-300 group"
                onMouseEnter={() => soundFx.playHover()}
              >
                <motion.span
                  className="text-3xl mb-3 block"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: idx * 0.5 }}
                >
                  {item.icon}
                </motion.span>
                <h4 className="font-heading font-bold text-sm text-white mb-1 group-hover:text-amber-300 transition-colors">{item.name}</h4>
                <p className="text-[11px] text-slate-400 leading-tight">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
