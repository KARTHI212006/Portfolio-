import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Info, Layers } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { projects, personalInfo } from '../../data/portfolio';
import ProjectModal, { ProjectData } from '../ProjectModal';
import { soundFx } from '../../utils/audio';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  const handleOpenModal = (project: ProjectData) => {
    soundFx.playClick();
    setSelectedProject(project);
  };

  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-tag-badge"
          >
            <Layers size={14} />
            <span>Featured Portfolio Works</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight"
          >
            Featured <span className="gradient-text-luxury">Projects</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-base sm:text-lg mt-3"
          >
            Smart Irrigation System (IoT), Gaming Vault (Web Dev) & Bus Booking System (Java).
          </motion.p>
        </div>

        {/* Projects Showcase Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.12, duration: 0.5 }}
              className="glass-panel overflow-hidden group cursor-pointer border border-white/10 hover:border-purple-500/50 flex flex-col justify-between"
              onClick={() => handleOpenModal(project as ProjectData)}
              onMouseEnter={() => soundFx.playHover()}
            >
              <div>
                {/* Visual Header Canvas */}
                <div
                  className="relative h-52 flex items-center justify-center overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, ${project.color}25, rgba(139,92,246,0.15))`,
                    borderBottom: '1px solid rgba(255,255,255,0.08)',
                  }}
                >
                  {/* Background Grid Pattern */}
                  <div
                    className="absolute inset-0 opacity-20 pointer-events-none"
                    style={{
                      backgroundImage: `linear-gradient(${project.color}40 1px, transparent 1px), linear-gradient(90deg, ${project.color}40 1px, transparent 1px)`,
                      backgroundSize: '28px 28px',
                    }}
                  />

                  {/* Floating Animated Emoji Icon */}
                  <motion.div
                    animate={{ y: [0, -10, 0], scale: [1, 1.05, 1] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: idx * 0.5 }}
                    className="text-7xl relative z-10 drop-shadow-2xl select-none"
                  >
                    {project.emoji}
                  </motion.div>

                  {/* Category Pill Tag */}
                  <div
                    className="absolute top-4 right-4 px-3.5 py-1 rounded-full text-xs font-mono font-bold border backdrop-blur-md"
                    style={{
                      backgroundColor: `${project.color}20`,
                      borderColor: `${project.color}50`,
                      color: project.color,
                    }}
                  >
                    {project.category}
                  </div>

                  {/* Project number badge */}
                  <div className="absolute top-4 left-4 w-7 h-7 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-xs font-heading font-bold text-white">
                    {String(idx + 1).padStart(2, '0')}
                  </div>
                </div>

                {/* Card Content Area */}
                <div className="p-6 space-y-3">
                  <div>
                    <h3 className="font-heading font-extrabold text-xl text-white group-hover:text-sky-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs font-semibold text-purple-400 mt-0.5">
                      {project.subtitle}
                    </p>
                  </div>

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {project.tech.map((t, i) => (
                      <span
                        key={i}
                        className="text-[11px] px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-slate-300 font-mono font-semibold"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons Footer */}
              <div className="px-6 pb-6 pt-2 flex items-center justify-between gap-3" onClick={(e) => e.stopPropagation()}>
                <button
                  onClick={() => handleOpenModal(project as ProjectData)}
                  className="btn-luxury-secondary text-xs flex-1 justify-center !py-2.5"
                  onMouseEnter={() => soundFx.playHover()}
                >
                  <Info size={14} />
                  <span>View Details</span>
                </button>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-luxury-primary text-xs flex-1 justify-center !py-2.5"
                  onMouseEnter={() => soundFx.playHover()}
                  onClick={() => soundFx.playClick()}
                >
                  <FaGithub size={14} />
                  <span>GitHub</span>
                </a>

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-sky-400 hover:border-sky-500/40 transition-all duration-300 shrink-0"
                    title="Live Demo"
                    onMouseEnter={() => soundFx.playHover()}
                    onClick={() => soundFx.playClick()}
                  >
                    <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub Direct Link Button */}
        <div className="mt-14 text-center">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-luxury-secondary inline-flex items-center gap-2"
            onMouseEnter={() => soundFx.playHover()}
            onClick={() => soundFx.playClick()}
          >
            <FaGithub size={18} />
            <span>Explore All Repositories on GitHub</span>
            <ExternalLink size={14} />
          </a>
        </div>

      </div>

      {/* Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default Projects;
