import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, CheckCircle, MessageSquare, Phone } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { personalInfo } from '../../data/portfolio';
import { soundFx } from '../../utils/audio';

const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = 'Valid email is required';
    if (!form.subject.trim()) newErrors.subject = 'Subject is required';
    if (!form.message.trim() || form.message.length < 5) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      soundFx.playClick();
      return;
    }
    setSending(true);
    soundFx.playClick();
    await new Promise(r => setTimeout(r, 1200));
    setSending(false);
    setSent(true);
    soundFx.playSuccess();
    setForm({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSent(false), 5000);
  };

  const contactInfo = [
    { icon: Phone, label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone}`, color: '#38BDF8' },
    { icon: Mail, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}`, color: '#06B6D4' },
    { icon: MapPin, label: 'Location', value: personalInfo.location, href: '#', color: '#8B5CF6' },
  ];

  const socials = [
    { icon: FaGithub, href: personalInfo.github, label: 'GitHub', color: '#38BDF8' },
    { icon: FaLinkedin, href: personalInfo.linkedin, label: 'LinkedIn', color: '#0A66C2' },
    { icon: Mail, href: `mailto:${personalInfo.email}`, label: 'Email', color: '#10B981' },
  ];

  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-tag-badge"
          >
            <MessageSquare size={14} />
            <span>Let's Connect</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight"
          >
            Contact <span className="gradient-text-luxury">{personalInfo.shortName}</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-base sm:text-lg mt-3"
          >
            Reach out for job opportunities, project collaborations, or just to say hello!
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-stretch">

          {/* Left Info Panel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-8 flex flex-col justify-between space-y-8"
          >
            <div className="space-y-4">
              <h3 className="font-heading font-extrabold text-2xl text-white">
                Get In Touch <span className="gradient-text-cyan">Directly</span>
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Whether you have a Java Developer / Full Stack Web Developer opportunity, a project collaboration idea, or just want to connect — feel free to reach out!
              </p>
            </div>

            {/* Contact details */}
            <div className="space-y-3">
              {contactInfo.map(({ icon: Icon, label, value, href, color }) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-sky-500/40 transition-all duration-300 no-underline group"
                  onMouseEnter={() => soundFx.playHover()}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110"
                    style={{ backgroundColor: `${color}18`, border: `1px solid ${color}40` }}
                  >
                    <Icon size={20} color={color} />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 block uppercase tracking-wider">{label}</span>
                    <span className="font-heading font-bold text-sm text-white block group-hover:text-sky-300 transition-colors">{value}</span>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Accounts */}
            <div>
              <span className="text-xs font-heading font-bold uppercase tracking-wider text-slate-400 block mb-3">
                Social Profiles & Repositories
              </span>
              <div className="flex gap-3">
                {socials.map(({ icon: Icon, href, label, color }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15, y: -4 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:border-sky-500/50 transition-all duration-300"
                    style={{ color }}
                    aria-label={label}
                    title={label}
                    onMouseEnter={() => soundFx.playHover()}
                  >
                    <Icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Location map preview box */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-950/30 to-sky-950/30 border border-blue-500/20 text-center">
              <MapPin size={28} className="text-sky-400 mx-auto mb-2" />
              <h4 className="font-heading font-bold text-white text-base">Salem, Tamil Nadu, India 🇮🇳</h4>
              <p className="text-slate-400 text-xs mt-1">Available for Remote Roles & Global Opportunities</p>
            </div>
          </motion.div>

          {/* Right Interactive Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-8"
          >
            <h3 className="font-heading font-extrabold text-2xl text-white mb-6">
              Send a Message
            </h3>

            {sent ? (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center py-12 space-y-4"
              >
                <CheckCircle size={56} className="text-emerald-400 mx-auto" />
                <h4 className="font-heading font-bold text-xl text-emerald-400">
                  Message Sent!
                </h4>
                <p className="text-slate-300 text-sm">
                  Thank you for reaching out! KARTHIKEYAN S will get back to you promptly.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono font-bold text-slate-300 mb-1.5 uppercase">
                      Name *
                    </label>
                    <input
                      type="text"
                      placeholder="Your Full Name"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 focus:bg-sky-500/5 transition-all duration-300 text-sm"
                      value={form.name}
                      onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    />
                    {errors.name && <p className="text-[11px] text-red-400 mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold text-slate-300 mb-1.5 uppercase">
                      Email *
                    </label>
                    <input
                      type="email"
                      placeholder="name@domain.com"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 focus:bg-sky-500/5 transition-all duration-300 text-sm"
                      value={form.email}
                      onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                    />
                    {errors.email && <p className="text-[11px] text-red-400 mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-slate-300 mb-1.5 uppercase">
                    Subject *
                  </label>
                  <input
                    type="text"
                    placeholder="Job Opportunity / Project Collaboration"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 focus:bg-sky-500/5 transition-all duration-300 text-sm"
                    value={form.subject}
                    onChange={e => setForm(f => ({ ...f, subject: e.target.value }))}
                  />
                  {errors.subject && <p className="text-[11px] text-red-400 mt-1">{errors.subject}</p>}
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-slate-300 mb-1.5 uppercase">
                    Message *
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Hello Karthikeyan, I would like to discuss..."
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 focus:bg-sky-500/5 transition-all duration-300 text-sm resize-none"
                    value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                  />
                  {errors.message && <p className="text-[11px] text-red-400 mt-1">{errors.message}</p>}
                </div>

                <motion.button
                  type="submit"
                  disabled={sending}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-luxury-primary w-full justify-center text-sm !py-3.5 mt-2"
                >
                  {sending ? (
                    <span>Sending Message...</span>
                  ) : (
                    <>
                      <Send size={16} />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
