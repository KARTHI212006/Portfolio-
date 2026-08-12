import { motion } from 'framer-motion';
import { experience } from '../../data/portfolio';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="section" style={{ background: 'linear-gradient(180deg, #08091a, #050816)' }}>
      <div className="container">
        {/* Heading */}
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">My Journey</span>
          <h2 className="section-title">
            Experience & <span className="gradient-text-primary">Education</span>
          </h2>
          <div className="divider" />
          <p className="section-subtitle">
            My professional journey, educational milestones, and future aspirations.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Center line */}
          <div
            className="absolute left-1/2 top-0 bottom-0 w-px hidden md:block"
            style={{
              background: 'linear-gradient(to bottom, transparent, #00E5FF 15%, #7C3AED 50%, #00FF88 85%, transparent)',
              transform: 'translateX(-50%)',
            }}
          />

          {experience.map((item, i) => (
            <motion.div
              key={i}
              className={`relative flex gap-8 mb-12 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.7 }}
            >
              {/* Card */}
              <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right md:pr-16' : 'md:text-left md:pl-16'}`}>
                <motion.div
                  className="glass-card p-6 inline-block w-full text-left"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">{item.icon}</span>
                    <span
                      className="text-xs font-bold px-3 py-1 rounded-full"
                      style={{
                        background: `${item.color}22`,
                        border: `1px solid ${item.color}44`,
                        color: item.color,
                        fontFamily: "'Space Grotesk', sans-serif",
                      }}
                    >
                      {item.type === 'education' ? '🎓 Education' : item.type === 'future' ? '🚀 Future' : '💼 Work'}
                    </span>
                  </div>

                  <h3
                    className="text-lg font-bold mb-1"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-sm font-medium mb-1"
                    style={{ color: item.color, fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {item.company}
                  </p>
                  <p
                    className="text-xs mb-3"
                    style={{ color: 'rgba(255,255,255,0.4)', fontFamily: "'Inter', sans-serif" }}
                  >
                    📅 {item.period}
                  </p>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: 'rgba(255,255,255,0.6)', fontFamily: "'Inter', sans-serif", lineHeight: 1.7 }}
                  >
                    {item.description}
                  </p>
                </motion.div>
              </div>

              {/* Center dot */}
              <div
                className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full items-center justify-center text-lg z-10 flex-shrink-0"
                style={{
                  background: `linear-gradient(135deg, ${item.color}22, rgba(5,8,22,0.9))`,
                  border: `2px solid ${item.color}`,
                  boxShadow: `0 0 20px ${item.color}44`,
                  top: '24px',
                }}
              >
                {item.icon}
              </div>

              {/* Spacer for alternating */}
              <div className="hidden md:block flex-1" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
