import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Copy, Check, Mail, MessageSquare, Sparkles, Send } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedZalo, setCopiedZalo] = useState(false);

  // Close modal on escape press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("kienvv97@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyZalo = () => {
    navigator.clipboard.writeText("0799256955");
    setCopiedZalo(true);
    setTimeout(() => setCopiedZalo(false), 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#0C0C0C]/92 backdrop-blur-md cursor-pointer"
          />

          {/* Modal Content Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 15 }}
            transition={{ type: 'spring', damping: 26, stiffness: 210 }}
            className="relative w-full max-w-[500px] rounded-[36px] border border-[#D7E2EA]/10 bg-[#121212] p-8 sm:p-10 text-white shadow-[0_30px_60px_rgba(0,0,0,0.85)] z-10 overflow-hidden"
          >
            {/* Close Trigger Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full border border-white/5 bg-white/5 text-white/60 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
              aria-label="Close Contact Panel"
            >
              <X size={16} />
            </button>

            {/* Glowing design background accents */}
            <div className="absolute -top-32 -left-32 w-64 h-64 rounded-full bg-[#B600A8]/10 blur-[90px] pointer-events-none" />
            <div className="absolute -bottom-32 -right-32 w-64 h-64 rounded-full bg-[#7621B0]/10 blur-[90px] pointer-events-none" />

            {/* Title / Header segment */}
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles size={14} className="text-[#B600A8]" />
                <span className="text-[#D7E2EA]/40 uppercase tracking-widest text-[9px] font-mono font-bold">THE MARKETER // SELECTION DIRECTORY</span>
              </div>
              
              <h3 className="text-2.5xl sm:text-3xl font-black uppercase tracking-tight mb-6">
                RECRUIT ME
              </h3>

              <p className="text-[#D7E2EA]/60 text-xs sm:text-sm leading-relaxed mb-8">
                Ready to elevate your active campaigns, streamline AI marketing integrations, or plan core storytelling systems? Get in touch directly.
              </p>

              {/* Stacked Direct Contact Channels */}
              <div className="flex flex-col gap-4">
                
                {/* Channel 1: Gmail */}
                <div className="group relative bg-[#181818]/85 border border-white/[0.04] p-5 rounded-2.5xl transition-all duration-300 hover:border-white/[0.08] hover:bg-white/[0.01]">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3.5">
                      <div className="w-10 h-10 rounded-xl bg-[#B600A8]/10 flex items-center justify-center text-[#B600A8] border border-[#B600A8]/10">
                        <Mail size={18} />
                      </div>
                      <div className="flex flex-col">
                        <span className="font-mono text-[8.5px] font-bold text-white/40 tracking-wider uppercase mb-0.5">Primary Email</span>
                        <a 
                          href="mailto:kienvv97@gmail.com"
                          className="text-[#D7E2EA] font-semibold text-sm sm:text-base hover:text-white hover:underline transition-all select-all font-mono"
                        >
                          kienvv97@gmail.com
                        </a>
                      </div>
                    </div>

                    {/* Copier overlay */}
                    <button
                      onClick={handleCopyEmail}
                      className="p-2 rounded-xl bg-white/5 hover:bg-[#B600A8]/15 border border-white/5 hover:border-[#B600A8]/20 transition-all font-mono text-white/60 hover:text-white cursor-pointer"
                      title="Copy email to clipboard"
                    >
                      {copiedEmail ? (
                        <Check size={14} className="text-emerald-400" />
                      ) : (
                        <Copy size={14} />
                      )}
                    </button>
                  </div>
                </div>

                {/* Channel 2: Zalo */}
                <div className="group relative bg-[#181818]/85 border border-white/[0.04] p-5 rounded-2.5xl transition-all duration-300 hover:border-white/[0.08] hover:bg-white/[0.01]">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3.5">
                      <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 border border-emerald-500/10">
                        <MessageSquare size={18} />
                      </div>
                      <div className="flex flex-col">
                        <span className="font-mono text-[8.5px] font-bold text-white/40 tracking-wider uppercase mb-0.5">Zalo Connection</span>
                        <a 
                          href="https://zalo.me/0799256955"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#D7E2EA] font-black text-sm sm:text-base hover:text-white hover:underline transition-all font-mono"
                        >
                          0799256955
                        </a>
                      </div>
                    </div>

                    {/* Copier overlay */}
                    <button
                      onClick={handleCopyZalo}
                      className="p-2 rounded-xl bg-white/5 hover:bg-emerald-500/15 border border-white/5 hover:border-emerald-500/20 transition-all font-mono text-white/60 hover:text-white cursor-pointer"
                      title="Copy Zalo to clipboard"
                    >
                      {copiedZalo ? (
                        <Check size={14} className="text-emerald-400" />
                      ) : (
                        <Copy size={14} />
                      )}
                    </button>
                  </div>
                </div>

              </div>

              {/* Clean decorative assurance footer info */}
              <div className="mt-8 pt-6 border-t border-white/[0.03] text-center">
                <p className="font-mono text-[8px] text-white/20 uppercase tracking-widest leading-none">
                  // SECURE SECRETS // ZERO FORMS // INSTANT ACCESS
                </p>
              </div>

            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
