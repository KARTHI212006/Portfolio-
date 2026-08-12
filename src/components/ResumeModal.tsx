import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, Printer, Mail, MapPin, Award, Briefcase, GraduationCap, Code, Brain } from 'lucide-react';
import { FaGithub, FaInstagram } from 'react-icons/fa';
import { personalInfo, education, internship, skillsCategory, projects } from '../data/portfolio';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md">
        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-4xl bg-[#0A0A12] border border-purple-500/30 rounded-3xl shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col text-slate-100"
        >
          {/* Header Controls */}
          <div className="flex items-center justify-between px-6 py-4 bg-[#10101F] border-b border-white/10 shrink-0">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
              <span className="w-3 h-3 rounded-full bg-green-500/80"></span>
              <span className="font-mono text-xs text-slate-400 ml-2">KARTHIKEYAN_S_RESUME.pdf</span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handlePrint}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-semibold text-slate-200 hover:bg-white/10 transition-colors"
                title="Print Resume"
              >
                <Printer size={14} />
                <span className="hidden sm:inline">Print</span>
              </button>

              <a
                href={`mailto:${personalInfo.email}?subject=Resume Inquiry - KARTHIKEYAN S`}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-purple-600/30 border border-purple-500/40 text-xs font-semibold text-purple-300 hover:bg-purple-600/50 transition-colors no-underline"
              >
                <Download size={14} />
                <span>Contact Direct</span>
              </a>

              <button
                onClick={onClose}
                className="p-1.5 rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Printable Resume Body */}
          <div className="p-6 sm:p-10 overflow-y-auto space-y-8 font-sans custom-scrollbar">
            {/* Header / Bio */}
            <div className="border-b border-white/10 pb-6">
              <h1 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                {personalInfo.name}
              </h1>
              <p className="text-purple-400 font-semibold text-lg mt-1">
                {personalInfo.headline}
              </p>
              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 mt-3">
                <span className="flex items-center gap-1"><MapPin size={14} className="text-cyan-400" /> {personalInfo.location}</span>
                <span className="flex items-center gap-1"><Mail size={14} className="text-cyan-400" /> {personalInfo.email}</span>
                <span className="flex items-center gap-1"><FaGithub size={14} className="text-cyan-400" /> github.com/KARTHI212006</span>
                <span className="flex items-center gap-1"><FaInstagram size={14} className="text-cyan-400" /> @itz_karthi_k_k</span>
              </div>
            </div>

            {/* Career Objective */}
            <div>
              <h2 className="font-heading text-sm uppercase tracking-widest text-cyan-400 font-bold flex items-center gap-2 mb-2">
                <Brain size={16} /> Career Objective
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed bg-purple-950/20 border border-purple-500/20 p-4 rounded-xl">
                {personalInfo.objective}
              </p>
            </div>

            {/* Education */}
            <div>
              <h2 className="font-heading text-sm uppercase tracking-widest text-cyan-400 font-bold flex items-center gap-2 mb-3">
                <GraduationCap size={16} /> Education
              </h2>
              <div className="space-y-4">
                {education.map((edu, idx) => (
                  <div key={idx} className="bg-white/5 border border-white/10 p-4 rounded-xl">
                    <div className="flex flex-wrap justify-between items-start">
                      <div>
                        <h3 className="font-bold text-white text-base">{edu.degree} - {edu.field}</h3>
                        <p className="text-purple-300 text-sm font-medium">{edu.institution}, {edu.location}</p>
                      </div>
                      <span className="text-xs font-mono text-cyan-300 bg-cyan-950/40 px-2.5 py-1 rounded-md border border-cyan-800/40">
                        {edu.graduationYear}
                      </span>
                    </div>
                    <ul className="mt-2 space-y-1 text-xs text-slate-300 list-disc list-inside">
                      {edu.highlights.map((h, i) => (
                        <li key={i}>{h}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Internship */}
            <div>
              <h2 className="font-heading text-sm uppercase tracking-widest text-cyan-400 font-bold flex items-center gap-2 mb-3">
                <Briefcase size={16} /> Internship Experience
              </h2>
              <div className="bg-emerald-950/20 border border-emerald-500/30 p-4 rounded-xl">
                <div className="flex flex-wrap justify-between items-start">
                  <div>
                    <h3 className="font-bold text-white text-base">{internship.role}</h3>
                    <p className="text-emerald-400 text-sm font-semibold">{internship.company} — {internship.location}</p>
                    <p className="text-xs text-slate-400 mt-0.5">Domain: <span className="text-emerald-300">{internship.domain}</span></p>
                  </div>
                  <span className="text-xs font-mono text-emerald-300 bg-emerald-950/60 px-3 py-1 rounded-md border border-emerald-500/40 mt-1 sm:mt-0">
                    {internship.duration}
                  </span>
                </div>
                <p className="text-xs text-slate-300 mt-2">{internship.description}</p>
                <div className="mt-3">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Key Outcomes:</span>
                  <ul className="mt-1 space-y-1 text-xs text-slate-300 list-disc list-inside">
                    {internship.learnings.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Skills Summary */}
            <div>
              <h2 className="font-heading text-sm uppercase tracking-widest text-cyan-400 font-bold flex items-center gap-2 mb-3">
                <Code size={16} /> Key Technical Skills
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {skillsCategory.map((cat, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 p-3.5 rounded-xl">
                    <h4 className="font-bold text-xs text-purple-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <span>{cat.icon}</span> {cat.title}
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {cat.skills.map((s, j) => (
                        <span key={j} className="text-[11px] px-2 py-0.5 rounded bg-white/10 text-slate-200 border border-white/10">
                          {s.name}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Projects */}
            <div>
              <h2 className="font-heading text-sm uppercase tracking-widest text-cyan-400 font-bold flex items-center gap-2 mb-3">
                <Award size={16} /> Key Projects
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {projects.map((proj) => (
                  <div key={proj.id} className="bg-white/5 border border-white/10 p-4 rounded-xl">
                    <h3 className="font-bold text-white text-sm">{proj.title}</h3>
                    <p className="text-xs text-purple-300 font-medium mb-1.5">{proj.subtitle}</p>
                    <p className="text-xs text-slate-300 leading-relaxed mb-3">{proj.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {proj.tech.map((t, idx) => (
                        <span key={idx} className="text-[10px] px-2 py-0.5 rounded bg-purple-900/40 text-purple-300 border border-purple-500/30">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer motto */}
            <div className="text-center pt-4 border-t border-white/10">
              <span className="font-accent text-sm tracking-widest text-amber-400 uppercase font-bold">
                "{personalInfo.motto}"
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ResumeModal;
