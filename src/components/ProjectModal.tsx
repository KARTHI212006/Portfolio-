import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Code2, CheckCircle2, Layers } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { soundFx } from '../utils/audio';

export interface ProjectData {
  id: number;
  title: string;
  description: string;
  fullDescription?: string;
  features?: string[];
  architecture?: string[];
  image: string;
  tech: string[];
  liveUrl: string;
  githubUrl: string;
  color: string;
  category: string;
}

interface ProjectModalProps {
  project: ProjectData | null;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  const handleClose = () => {
    soundFx.playClick();
    onClose();
  };

  const projectIcons: Record<number, string> = {
    1: '🎮',
    2: '🌱',
    3: '💼',
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-3xl glass-card overflow-hidden my-8 z-10"
          style={{
            border: `1px solid ${project.color}44`,
            boxShadow: `0 0 50px ${project.color}25, 0 20px 60px rgba(0,0,0,0.8)`,
          }}
        >
          {/* Header Bar */}
          <div
            className="flex items-center justify-between p-6"
            style={{
              borderBottom: '1px solid rgba(255,255,255,0.08)',
              background: `linear-gradient(135deg, ${project.color}15, transparent)`,
            }}
          >
            <div className="flex items-center gap-3">
              <span className="text-3xl">{projectIcons[project.id] || '🚀'}</span>
              <div>
                <span
                  className="text-xs font-bold px-3 py-1 rounded-full uppercase"
                  style={{
                    background: `${project.color}20`,
                    border: `1px solid ${project.color}40`,
                    color: project.color,
                    fontFamily: "'Space Grotesk', sans-serif",
                  }}
                >
                  {project.category}
                </span>
                <h3
                  className="text-2xl font-bold mt-1"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {project.title}
                </h3>
              </div>
            </div>

            <button
              onClick={handleClose}
              className="p-2 rounded-full hover:bg-white/10 text-white/70 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X size={24} />
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto custom-scrollbar">
            {/* Description */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-cyan-400 mb-2 flex items-center gap-2">
                <Code2 size={16} /> Overview
              </h4>
              <p className="text-white/75 text-base leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                {project.fullDescription || project.description}
              </p>
            </div>

            {/* Features */}
            {project.features && project.features.length > 0 && (
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-cyan-400 mb-3 flex items-center gap-2">
                  <CheckCircle2 size={16} /> Key Features
                </h4>
                <div className="grid sm:grid-cols-2 gap-3">
                  {project.features.map((feat, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]"
                    >
                      <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ background: project.color }} />
                      <span className="text-sm text-white/80" style={{ fontFamily: "'Inter', sans-serif" }}>
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Architecture Highlights */}
            {project.architecture && project.architecture.length > 0 && (
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-purple-400 mb-3 flex items-center gap-2">
                  <Layers size={16} /> Technical Architecture
                </h4>
                <ul className="space-y-2">
                  {project.architecture.map((item, i) => (
                    <li key={i} className="text-sm text-white/70 flex items-center gap-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                      <span className="text-purple-400">▹</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Technologies Used */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-cyan-400 mb-3">
                Tech Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1.5 rounded-lg text-xs font-semibold"
                    style={{
                      background: 'rgba(255,255,255,0.06)',
                      border: '1px solid rgba(255,255,255,0.12)',
                      color: 'rgba(255,255,255,0.9)',
                      fontFamily: "'Space Grotesk', sans-serif",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Modal Footer / Action Buttons */}
          <div
            className="p-6 flex flex-wrap gap-4 items-center justify-end"
            style={{
              borderTop: '1px solid rgba(255,255,255,0.08)',
              background: 'rgba(5,8,22,0.9)',
            }}
          >
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => soundFx.playHover()}
              onClick={() => soundFx.playClick()}
              className="btn-secondary"
            >
              <FaGithub size={16} /> Source Code
            </a>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => soundFx.playHover()}
              onClick={() => soundFx.playClick()}
              className="btn-primary"
            >
              <ExternalLink size={16} /> Live Demo
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ProjectModal;
