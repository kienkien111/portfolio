import React, { useState } from 'react';
import { Mail, ArrowUpRight, Facebook, Linkedin, ArrowUp, Sparkles } from 'lucide-react';
import Magnet from './Magnet';
import FadeIn from './FadeIn';

interface ContactSectionProps {
  onContactClick: () => void;
}

export default function ContactSection({ onContactClick }: ContactSectionProps) {
  const [isCopied, setIsCopied] = useState(false);

  // Address coordinate copy triggers
  const handleCopyEmail = () => {
    navigator.clipboard.writeText("kienvv97@gmail.com");
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section
      id="contact"
      className="relative w-full bg-[#0C0C0C] text-[#D7E2EA] pt-24 pb-12 px-6 md:px-12 overflow-hidden select-none z-10"
    >
      {/* Background radial glowing orbs & filters */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(182,0,168,0.12)_0%,rgba(118,33,176,0.04)_45%,rgba(12,12,12,0)_80%)] pointer-events-none" />
      
      {/* Sub-grid mesh container */}
      <div className="w-full max-w-5xl mx-auto flex flex-col justify-between min-h-[70vh] relative z-10">
        
        {/* Core CTA Grid content */}
        <div className="flex flex-col items-center justify-center text-center my-auto py-12">
          
          {/* Spark heading decor */}
          <div className="overflow-hidden mb-4">
            <FadeIn delay={0} y={15} className="flex items-center gap-2 text-[#B600A8]/80 text-xs sm:text-sm tracking-[0.25em] uppercase font-bold">
              <Sparkles size={16} className="animate-pulse" />
              <span>Initiate Transmission</span>
            </FadeIn>
          </div>

          {/* Headline "LET'S BUILD TOGETHER" - Lowercase "i" styled curly apostrophe */}
          <div className="overflow-hidden mb-6">
            <FadeIn delay={0.1} y={30}>
              <h2
                className="hero-heading font-black uppercase tracking-tight leading-[0.95] text-center"
                style={{ fontSize: "clamp(2.5rem, 8vw, 6.5rem)" }}
              >
                LET&apos;S BUILD<br />TOGETHER
              </h2>
            </FadeIn>
          </div>

          {/* Main Magnetic Interactive Email address */}
          <div className="mt-8 mb-12">
            <FadeIn delay={0.2} y={30}>
              <Magnet padding={100} strength={3.5}>
                <a
                  href="mailto:kienvv97@gmail.com"
                  id="email-cta-link"
                  className="relative group inline-flex flex-col items-center justify-center bg-white/[0.02] hover:bg-[#B600A8]/10 border border-[#D7E2EA]/10 hover:border-[#B600A8]/40 px-8 py-6 rounded-3xl transition-all duration-500 shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_15px_40px_rgba(182,0,168,0.2)]"
                >
                  {/* Subtle hover neon glow behind email text */}
                  <div className="absolute inset-x-12 inset-y-4 bg-[#B600A8]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
                  
                  <span className="text-[#D7E2EA]/50 text-xs sm:text-sm font-semibold uppercase tracking-widest mb-1 group-hover:text-white transition-colors">
                    Click to Open Mail client
                  </span>
                  
                  {/* Main Email typography with slide-out underline */}
                  <div className="flex items-center gap-2 relative">
                    <span 
                      className="text-[#D7E2EA] font-medium leading-none tracking-normal select-all select-none group-hover:text-white transition-all text-xl sm:text-3.5xl md:text-4xl"
                    >
                      kienvv97@gmail.com
                    </span>
                    <ArrowUpRight className="text-[#D7E2EA]/40 group-hover:text-[#B600A8] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" size={24} />
                  </div>

                  <span className="absolute bottom-4 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-[#B600A8] to-[#7621B0] transition-all duration-500 group-hover:w-[70%]" />
                </a>
              </Magnet>
            </FadeIn>

            {/* Quick copy convenience button */}
            <div className="mt-4 flex justify-center">
              <FadeIn delay={0.3} y={15}>
                <button
                  onClick={handleCopyEmail}
                  className="text-xs font-medium text-[#D7E2EA]/40 hover:text-[#B600A8] transition-colors focus:outline-none cursor-pointer uppercase tracking-widest flex items-center gap-1.5 border border-white/5 bg-white/2"
                >
                  {isCopied ? (
                    <span className="text-emerald-400 font-bold">[ Coordinate data copied! ]</span>
                  ) : (
                    <span>[ Copy Email Address ]</span>
                  )}
                </button>
              </FadeIn>
            </div>
          </div>

          {/* Interactive CTA to trigger full modal */}
          <div>
            <FadeIn delay={0.4} y={20}>
              <button
                onClick={onContactClick}
                className="contact-gradient-btn px-10 py-4.5 rounded-full text-white font-black uppercase tracking-[0.2em] text-sm hover:scale-[1.08] transition-transform duration-300"
              >
                Launch Contact Panel
              </button>
            </FadeIn>
          </div>

        </div>

        {/* Footer Coordinate details strip */}
        <div className="w-full border-t border-[#D7E2EA]/10 pt-10 mt-12 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-[#D7E2EA]/50">
          
          {/* Profile signatures */}
          <div>
            <span className="font-mono text-xs uppercase tracking-widest">&copy; 2026 Kien Le. All campaigns preserved.</span>
          </div>

          {/* Social connections stack */}
          <div className="flex items-center gap-8 font-medium">
            <a
              href="https://www.facebook.com/KienLe04"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group text-sm font-medium uppercase tracking-widest hover:text-white transition-colors duration-200 flex items-center gap-1.5"
            >
              <Facebook size={15} />
              <span>Facebook</span>
              <span className="absolute bottom-[-4px] left-0 w-0 h-[1.5px] bg-[#B600A8] group-hover:w-full transition-all duration-300" />
            </a>

            <a
              href="https://www.linkedin.com/in/tuan-kien-le-b89810388"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group text-sm font-medium uppercase tracking-widest hover:text-white transition-colors duration-200 flex items-center gap-1.5"
            >
              <Linkedin size={15} />
              <span>LinkedIn</span>
              <span className="absolute bottom-[-4px] left-0 w-0 h-[1.5px] bg-[#7621B0] group-hover:w-full transition-all duration-300" />
            </a>
          </div>

          {/* Back to Top Anchor element */}
          <div>
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-2 bg-zinc-900 border border-zinc-800 hover:border-[#B600A8]/50 hover:bg-zinc-800/80 hover:text-white px-4 py-2.5 rounded-xl transition-all duration-300 cursor-pointer text-xs uppercase tracking-widest font-mono"
            >
              <span>Back to Orbit</span>
              <ArrowUp size={14} className="group-hover:-translate-y-0.75 transition-all text-[#B600A8]" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
