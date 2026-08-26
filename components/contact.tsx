"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Terminal,
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Instagram,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { personalInfo } from "@/lib/data";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      // Handler structure prepared for Formspree / Resend API drop-in:
      // await fetch("https://formspree.io/f/YOUR_FORM_ID", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(formData),
      // });

      // Simulated local success response
      await new Promise((resolve) => setTimeout(resolve, 800));

      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setErrors({});
    } catch (err) {
      console.error("Submission error", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-background-secondary/60 relative">
      <div className="container-custom">
        {/* Monospace Section Eyebrow */}
        <div className="flex flex-col items-start space-y-2 mb-12">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-accent-cyan bg-accent-cyan/10 px-3 py-1 rounded-md border border-accent-cyan/20">
            <Terminal className="w-3.5 h-3.5" />
            <span>// Contact Me</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white">
            Get In Touch
          </h2>
          <p className="text-muted-foreground text-sm max-w-xl">
            Have a project in mind, an opportunity, or a question? Send a message below!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT: Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 glass-card p-6 sm:p-8 space-y-6"
          >
            <div className="space-y-2">
              <h3 className="font-heading font-bold text-xl text-white">
                Contact Information
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Feel free to reach out via email, phone, or connect through my social profiles.
              </p>
            </div>

            <div className="space-y-4 pt-2">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-4 p-3 rounded-xl bg-white/5 border border-white/5 hover:border-accent-cyan/40 hover:bg-white/10 transition-all group"
              >
                <div className="p-2.5 rounded-lg bg-accent-cyan/10 text-accent-cyan group-hover:scale-110 transition-transform">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="space-y-0.5 overflow-hidden">
                  <span className="font-mono text-[10px] text-muted-foreground block">
                    Email Address
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-white group-hover:text-accent-cyan transition-colors truncate block">
                    {personalInfo.email}
                  </span>
                </div>
              </a>

              <a
                href={`tel:${personalInfo.phone.replace(/\s+/g, "")}`}
                className="flex items-center gap-4 p-3 rounded-xl bg-white/5 border border-white/5 hover:border-accent-cyan/40 hover:bg-white/10 transition-all group"
              >
                <div className="p-2.5 rounded-lg bg-accent-cyan/10 text-accent-cyan group-hover:scale-110 transition-transform">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="space-y-0.5">
                  <span className="font-mono text-[10px] text-muted-foreground block">
                    Phone Number
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-white group-hover:text-accent-cyan transition-colors block">
                    {personalInfo.phone}
                  </span>
                </div>
              </a>

              <div className="flex items-center gap-4 p-3 rounded-xl bg-white/5 border border-white/5">
                <div className="p-2.5 rounded-lg bg-accent-cyan/10 text-accent-cyan">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="space-y-0.5">
                  <span className="font-mono text-[10px] text-muted-foreground block">
                    Location
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-white block">
                    {personalInfo.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Social Links Row */}
            <div className="pt-4 border-t border-white/10 space-y-3">
              <span className="font-mono text-xs text-muted-foreground block">
                Connect Across Platforms:
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-3 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-accent-cyan hover:border-accent-cyan/40 transition-all"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-3 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-accent-cyan hover:border-accent-cyan/40 transition-all"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={personalInfo.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram Profile"
                  className="p-3 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-accent-cyan hover:border-accent-cyan/40 transition-all"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Validated Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-7 glass-card p-6 sm:p-8"
          >
            {submitted ? (
              <div className="p-8 text-center flex flex-col items-center justify-center space-y-4 my-6">
                <div className="p-4 rounded-full bg-accent-green/10 text-accent-green border border-accent-green/30">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-heading font-bold text-xl text-white">
                  Message Sent Successfully!
                </h3>
                <p className="text-muted-foreground text-xs sm:text-sm max-w-md">
                  Thank you for reaching out, {formData.name || "friend"}! I will review your message and respond promptly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-5 py-2 text-xs font-mono text-accent-cyan border border-accent-cyan/30 rounded-lg hover:bg-accent-cyan/10 transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <h3 className="font-heading font-bold text-xl text-white mb-4">
                  Send a Direct Message
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Input */}
                  <div className="space-y-1">
                    <label htmlFor="contact-name" className="font-mono text-xs text-slate-300 block">
                      Your Name <span className="text-accent-cyan">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      placeholder="Karthik"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className={`w-full px-4 py-2.5 rounded-lg bg-white/5 border ${
                        errors.name ? "border-red-500" : "border-white/10"
                      } text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-accent-cyan transition-colors`}
                    />
                    {errors.name && (
                      <span className="font-mono text-[10px] text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.name}
                      </span>
                    )}
                  </div>

                  {/* Email Input */}
                  <div className="space-y-1">
                    <label htmlFor="contact-email" className="font-mono text-xs text-slate-300 block">
                      Email Address <span className="text-accent-cyan">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className={`w-full px-4 py-2.5 rounded-lg bg-white/5 border ${
                        errors.email ? "border-red-500" : "border-white/10"
                      } text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-accent-cyan transition-colors`}
                    />
                    {errors.email && (
                      <span className="font-mono text-[10px] text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.email}
                      </span>
                    )}
                  </div>
                </div>

                {/* Subject Input */}
                <div className="space-y-1">
                  <label htmlFor="contact-subject" className="font-mono text-xs text-slate-300 block">
                    Subject <span className="text-accent-cyan">*</span>
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    placeholder="Project Inquiry / Job Opportunity"
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    className={`w-full px-4 py-2.5 rounded-lg bg-white/5 border ${
                      errors.subject ? "border-red-500" : "border-white/10"
                    } text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-accent-cyan transition-colors`}
                  />
                  {errors.subject && (
                    <span className="font-mono text-[10px] text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.subject}
                    </span>
                  )}
                </div>

                {/* Message Input */}
                <div className="space-y-1">
                  <label htmlFor="contact-message" className="font-mono text-xs text-slate-300 block">
                    Message <span className="text-accent-cyan">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    placeholder="Hello Karthikeyan, I would like to discuss..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className={`w-full px-4 py-2.5 rounded-lg bg-white/5 border ${
                      errors.message ? "border-red-500" : "border-white/10"
                    } text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-accent-cyan transition-colors resize-none`}
                  />
                  {errors.message && (
                    <span className="font-mono text-[10px] text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.message}
                    </span>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-accent-cyan to-accent-violet font-heading font-bold text-xs text-white tracking-wider uppercase shadow-lg hover:shadow-glow transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>SENDING MESSAGE...</span>
                  ) : (
                    <>
                      <span>SEND MESSAGE</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
