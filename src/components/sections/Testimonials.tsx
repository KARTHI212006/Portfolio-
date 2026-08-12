import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { testimonials } from '../../data/portfolio';

const Testimonials: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent(c => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent(c => (c + 1) % testimonials.length);

  return (
    <section
      id="testimonials"
      className="section"
      style={{ background: 'linear-gradient(180deg, #08091a, #050816)' }}
    >
      <div className="container">
        {/* Heading */}
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">Client Love</span>
          <h2 className="section-title">
            What People <span className="gradient-text-primary">Say</span>
          </h2>
          <div className="divider" />
          <p className="section-subtitle">
            Testimonials from clients and collaborators who've experienced my work firsthand.
          </p>
        </motion.div>

        {/* Featured testimonial */}
        <div className="max-w-3xl mx-auto mb-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -30, scale: 0.97 }}
              transition={{ duration: 0.5 }}
              className="testimonial-card text-center"
            >
              {/* Quote mark */}
              <div
                className="text-6xl mb-6 leading-none"
                style={{
                  color: testimonials[current].color,
                  opacity: 0.4,
                  fontFamily: 'Georgia, serif',
                }}
              >
                "
              </div>

              <p
                className="text-lg leading-relaxed mb-8"
                style={{
                  color: 'rgba(255,255,255,0.8)',
                  fontFamily: "'Inter', sans-serif",
                  lineHeight: 1.8,
                  fontStyle: 'italic',
                }}
              >
                {testimonials[current].content}
              </p>

              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                  <Star key={i} size={16} fill={testimonials[current].color} color={testimonials[current].color} />
                ))}
              </div>

              {/* Avatar */}
              <div className="flex items-center justify-center gap-4">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center text-lg font-bold"
                  style={{
                    background: `${testimonials[current].color}22`,
                    border: `2px solid ${testimonials[current].color}`,
                    fontFamily: "'Space Grotesk', sans-serif",
                    color: testimonials[current].color,
                  }}
                >
                  {testimonials[current].avatar}
                </div>
                <div className="text-left">
                  <p
                    className="font-bold"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {testimonials[current].name}
                  </p>
                  <p
                    className="text-sm"
                    style={{
                      color: 'rgba(255,255,255,0.5)',
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    {testimonials[current].role} · {testimonials[current].company}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-6 mt-8">
            <motion.button
              onClick={prev}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-11 h-11 rounded-full flex items-center justify-center"
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                color: 'rgba(255,255,255,0.7)',
                cursor: 'pointer',
              }}
            >
              <ChevronLeft size={18} />
            </motion.button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  style={{
                    width: i === current ? '24px' : '8px',
                    height: '8px',
                    borderRadius: '4px',
                    background: i === current ? '#00E5FF' : 'rgba(255,255,255,0.2)',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                  }}
                />
              ))}
            </div>

            <motion.button
              onClick={next}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-11 h-11 rounded-full flex items-center justify-center"
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                color: 'rgba(255,255,255,0.7)',
                cursor: 'pointer',
              }}
            >
              <ChevronRight size={18} />
            </motion.button>
          </div>
        </div>

        {/* All testimonials grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {testimonials.map((testimonial, i) => (
            <motion.button
              key={i}
              className="testimonial-card text-left cursor-pointer"
              onClick={() => setCurrent(i)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              style={{
                border: i === current ? `1px solid ${testimonial.color}44` : '1px solid rgba(255,255,255,0.08)',
                width: '100%',
              }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
                  style={{
                    background: `${testimonial.color}22`,
                    color: testimonial.color,
                    fontFamily: "'Space Grotesk', sans-serif",
                  }}
                >
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    {testimonial.name}
                  </p>
                  <p className="text-xs" style={{ color: 'rgba(255,255,255,0.4)', fontFamily: "'Inter', sans-serif" }}>
                    {testimonial.role}
                  </p>
                </div>
              </div>
              <p
                className="text-xs leading-relaxed line-clamp-3"
                style={{ color: 'rgba(255,255,255,0.55)', fontFamily: "'Inter', sans-serif" }}
              >
                "{testimonial.content}"
              </p>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
