import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Award, ShieldCheck, Calendar, Building2 } from 'lucide-react';
import { soundFx } from '../utils/audio';

export interface CertificateData {
  title: string;
  issuer: string;
  date: string;
  icon: string;
  color: string;
  credentialId?: string;
  skillsVerified?: string[];
}

interface CertificateModalProps {
  certificate: CertificateData | null;
  onClose: () => void;
}

const CertificateModal: React.FC<CertificateModalProps> = ({ certificate, onClose }) => {
  if (!certificate) return null;

  const handleClose = () => {
    soundFx.playClick();
    onClose();
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

        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-lg glass-card overflow-hidden my-8 z-10"
          style={{
            border: `1px solid ${certificate.color}55`,
            boxShadow: `0 0 50px ${certificate.color}30, 0 20px 60px rgba(0,0,0,0.8)`,
          }}
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between p-6 pb-0">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider" style={{ color: certificate.color }}>
              <ShieldCheck size={16} /> Verified Credential
            </div>
            <button
              onClick={handleClose}
              className="p-2 rounded-full hover:bg-white/10 text-white/70 hover:text-white transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Certificate View Card */}
          <div className="p-6 sm:p-8 text-center space-y-6">
            {/* Certificate Badge Frame */}
            <div className="relative mx-auto w-24 h-24 rounded-2xl flex items-center justify-center"
              style={{
                background: `linear-gradient(135deg, ${certificate.color}25, rgba(5,8,22,0.9))`,
                border: `2px solid ${certificate.color}`,
                boxShadow: `0 0 30px ${certificate.color}40`,
              }}
            >
              <span className="text-4xl">{certificate.icon}</span>
              <Award className="absolute -bottom-2 -right-2 w-8 h-8 p-1.5 rounded-full text-black font-bold"
                style={{ background: certificate.color }} />
            </div>

            <div>
              <h3
                className="text-2xl font-bold mb-2"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {certificate.title}
              </h3>
              <p
                className="text-base font-semibold flex items-center justify-center gap-2"
                style={{ color: certificate.color, fontFamily: "'Space Grotesk', sans-serif" }}
              >
                <Building2 size={16} /> {certificate.issuer}
              </p>
            </div>

            <div className="flex justify-center gap-6 text-sm text-white/60 pt-2" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
              <div className="flex items-center gap-1.5">
                <Calendar size={14} color="#00E5FF" /> Issued: {certificate.date}
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck size={14} color="#00FF88" /> Status: Authentic
              </div>
            </div>

            {certificate.credentialId && (
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] text-xs text-white/50 font-mono">
                Credential ID: {certificate.credentialId}
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="p-6 pt-0 text-center">
            <button
              onClick={handleClose}
              className="btn-primary w-full justify-center"
            >
              Close Preview
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default CertificateModal;
