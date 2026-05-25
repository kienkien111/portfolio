import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ProjectItem } from '../types';
import { X, Calendar, User, Briefcase, Award, Hammer, MessageSquare } from 'lucide-react';

interface ProjectDetailModalProps {
  isOpen: boolean;
  project: ProjectItem | null;
  onClose: () => void;
  onContactClick: () => void;
}

type TabType = 'overview' | 'process' | 'results';

export default function ProjectDetailModal({ isOpen, project, onClose, onContactClick }: ProjectDetailModalProps) {
  const [activeTab, setActiveTab] = useState<TabType>('overview');
  const [activeImage, setActiveImage] = useState<string>('');

  // Lock body scroll when overlay is active
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Set default active image when project loads
  useEffect(() => {
    if (project) {
      setActiveImage(project.images.col2);
      setActiveTab('overview');
    }
  }, [project]);

  // Escape key back out detector
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  // Render a list of available project showcase images
  const itemImages = [
    project.images.col2,
    project.images.col1Row1,
    project.images.col1Row2,
  ];

  const hasResponsibilities = project.responsibilities && project.responsibilities.length > 0;
  const hasOutcomes = project.outcomes && project.outcomes.length > 0;
  const hasTools = project.tools && project.tools.length > 0;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10 select-none">
          {/* Blur back-backdrop overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 bg-[#060608]/90 backdrop-blur-md cursor-pointer"
            onClick={onClose}
          />

          {/* Centered Modal card box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 40 }}
            transition={{ type: "spring", damping: 28, stiffness: 280 }}
            className="relative bg-[#0F0F12] border border-white/10 rounded-[30px] sm:rounded-[36px] md:rounded-[44px] shadow-[0_30px_90px_rgba(182,0,168,0.2)] max-w-5xl w-full max-h-[92vh] sm:max-h-[85vh] overflow-hidden grid grid-cols-1 md:grid-cols-12 gap-0 z-50 pointer-events-auto"
          >
            {/* Close action trigger (X button) */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 sm:top-6 sm:right-6 rounded-full w-10 h-10 flex items-center justify-center bg-white/5 hover:bg-white/15 border border-white/5 hover:border-white/20 transition-all duration-300 pointer-events-auto cursor-pointer z-50 active:scale-95 text-white/70 hover:text-white"
              aria-label="Close Case Study"
            >
              <X size={18} />
            </button>

            {/* Left Column (Mockup Visual Viewport column) */}
            <div className="md:col-span-5 h-[230px] sm:h-[300px] md:h-full bg-zinc-950 border-r border-white/5 flex flex-col justify-between overflow-hidden relative">
              {/* Primary viewport photo */}
              <div className="w-full flex-grow relative overflow-hidden group select-none">
                <motion.img
                  key={activeImage}
                  initial={{ opacity: 0.4, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.55, ease: "easeOut" }}
                  src={activeImage}
                  alt={`${project.name} Featured Image`}
                  className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-104 select-none"
                  referrerPolicy="no-referrer"
                />
                
                {/* Subtle linear card glass shading overlay */}
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
              </div>

              {/* Thumbnails array row selector */}
              <div className="absolute bottom-4 left-0 w-full flex justify-center gap-2 px-4 z-10 pointer-events-auto">
                {itemImages.map((img, idx) => (
                  <button
                    key={`${project.id}-thumb-${idx}`}
                    onClick={() => setActiveImage(img)}
                    className={`relative w-12 sm:w-16 h-8 sm:h-11 rounded-lg overflow-hidden border transition-all duration-300 cursor-pointer ${
                      activeImage === img 
                        ? 'border-[#B600A8] scale-105 shadow-[0_0_12px_rgba(182,0,168,0.5)]' 
                        : 'border-white/15 hover:border-white/35 opacity-75 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={img}
                      alt="Thumbnail selector"
                      className="w-full h-full object-cover select-none"
                      referrerPolicy="no-referrer"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Right Column (Structured Copy Section) */}
            <div className="md:col-span-7 p-6 sm:p-8 md:p-10 flex flex-col justify-between overflow-y-auto max-h-[50vh] sm:max-h-[55vh] md:max-h-full">
              <div>
                {/* Header Metadata Ribbon */}
                <div className="flex flex-wrap items-center gap-2.5 sm:gap-3.5 mb-2.5">
                  <span className="font-mono text-[9px] sm:text-[10px] text-white/40 tracking-widest uppercase">
                    // CASE REF: {project.id}
                  </span>
                  <div className="w-1 h-1 rounded-full bg-white/20" />
                  <span className="font-mono text-[9px] sm:text-[10px] text-[#B600A8] tracking-widest uppercase font-semibold">
                    {project.category}
                  </span>
                  <div className="w-1 h-1 rounded-full bg-white/20" />
                  <span className="font-mono text-[9px] sm:text-[10px] text-white/40 tracking-widest font-mono">
                    [ {project.year} ]
                  </span>
                </div>

                {/* Main Heading title */}
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black uppercase tracking-tight text-white mb-5 sm:mb-6 select-text">
                  {project.name}
                </h2>

                {/* Subtitle description overlay */}
                {project.subtitle && (
                  <p className="text-white/80 font-medium text-xs sm:text-sm tracking-wide leading-relaxed italic border-l-2 border-[#B600A8] pl-3 mb-6 select-text">
                    {project.subtitle}
                  </p>
                )}

                {/* Tabs Navigation selectors */}
                <div className="flex gap-1 border-b border-white/5 pb-2.5 mb-6 relative pointer-events-auto">
                  {(['overview', 'process', 'results'] as TabType[]).map((tab) => {
                    const isActive = activeTab === tab;
                    const labels: Record<TabType, string> = {
                      overview: 'Overview',
                      process: 'Process',
                      results: 'Results & Outcomes'
                    };

                    return (
                      <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className="relative px-3.5 py-1.5 sm:px-4 sm:py-2 text-[11px] sm:text-xs font-semibold tracking-wider uppercase transition-colors duration-400 cursor-pointer text-white/70 hover:text-white"
                      >
                        <span className="relative z-10">{labels[tab]}</span>
                        {isActive && (
                          <motion.div
                            layoutId="modalActiveTabBar"
                            className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#B600A8]"
                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                          />
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Content display based on active tab view */}
                <div className="min-h-[170px] select-text">
                  <AnimatePresence mode="wait">
                    {activeTab === 'overview' && (
                      <motion.div
                        key="overview-tab"
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 8 }}
                        transition={{ duration: 0.25 }}
                        className="flex flex-col gap-4 font-sans text-xs sm:text-sm text-[#D7E2EA]/85"
                      >
                        {/* Role Segment */}
                        {project.role && (
                          <div className="flex items-center gap-2 bg-white/[0.02] border border-white/5 rounded-xl px-3 py-2.5">
                            <Briefcase size={15} className="text-[#B600A8] shrink-0" />
                            <div className="font-sans leading-none">
                              <span className="text-white/40 block text-[9px] uppercase tracking-widest font-mono">My Professional Role</span>
                              <span className="font-bold text-white text-xs sm:text-sm">{project.role}</span>
                            </div>
                          </div>
                        )}

                        {/* Statement overview paragraph */}
                        {project.overview && (
                          <p className="leading-relaxed text-[#D7E2EA]/80 whitespace-pre-line text-xs sm:text-sm">
                            {project.overview}
                          </p>
                        )}

                        {/* Tool boxes tags heap */}
                        {hasTools && (
                          <div className="mt-2.5">
                            <div className="flex items-center gap-1.5 mb-2 font-mono text-[9px] text-white/35 uppercase tracking-widest">
                              <Hammer size={10} />
                              <span>Tactical Tech & Software</span>
                            </div>
                            <div className="flex flex-wrap gap-1.5">
                              {project.tools?.map((tool, index) => (
                                <span
                                  key={`${project.id}-tool-${index}`}
                                  className="font-mono text-[9px] sm:text-xs tracking-wide bg-white/5 px-2.5 py-1 rounded-full border border-white/5 font-medium hover:border-white/10 text-white/80"
                                >
                                  {tool}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </motion.div>
                    )}

                    {activeTab === 'process' && (
                      <motion.div
                        key="process-tab"
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 8 }}
                        transition={{ duration: 0.25 }}
                        className="flex flex-col gap-3 font-sans text-xs sm:text-sm text-[#D7E2EA]/85"
                      >
                        <div className="flex items-center gap-1.5 mb-1.5 font-mono text-[9px] text-white/35 uppercase tracking-widest">
                          <User size={10} />
                          <span>Key Action Steps & Execution</span>
                        </div>
                        {hasResponsibilities ? (
                          <ul className="flex flex-col gap-2.5">
                            {project.responsibilities?.map((resp, index) => (
                              <li key={`${project.id}-resp-${index}`} className="flex items-start gap-2.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#B600A8] mt-1.5 shrink-0" />
                                <span className="leading-relaxed select-text font-normal text-[#D7E2EA]/80">{resp}</span>
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <p className="italic text-white/50 text-xs">Responsibilities parameters omitted.</p>
                        )}
                      </motion.div>
                    )}

                    {activeTab === 'results' && (
                      <motion.div
                        key="results-tab"
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 8 }}
                        transition={{ duration: 0.25 }}
                        className="flex flex-col gap-4 font-sans text-xs sm:text-sm text-[#D7E2EA]/85"
                      >
                        <div className="flex items-center gap-1.5 mb-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-lg px-2.5 py-1.5 w-fit font-mono text-[9px] uppercase tracking-widest">
                          <Award size={10} className="shrink-0" />
                          <span>Verified Impact Performance</span>
                        </div>

                        {hasOutcomes ? (
                          <div className="flex flex-col gap-3">
                            {project.outcomes?.map((out, index) => (
                              <div 
                                key={`${project.id}-outcome-${index}`} 
                                className="p-4 sm:p-5 rounded-2xl bg-emerald-500/[0.02] border border-emerald-500/10 flex items-start gap-3 w-full"
                              >
                                <span className="font-mono font-bold text-[#B600A8] text-sm leading-none mt-0.5">※</span>
                                <p className="leading-relaxed font-bold select-text text-white text-xs sm:text-[14px]">
                                  {out}
                                </p>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <p className="italic text-white/50 text-xs">Outcomes logs empty.</p>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Footer Modal CTA Hook */}
              <div className="mt-8 pt-4 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 pointer-events-auto">
                <span className="font-mono text-[9px] text-[#D7E2EA]/35 uppercase tracking-widest text-center sm:text-left">
                  // SCALE CAMPAIGNS & INTEGRATE WORKFLOWS ON SHORT SHIFTS
                </span>
                
                <button
                  onClick={() => {
                    onClose();
                    onContactClick();
                  }}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-[#B600A8] hover:bg-[#8e0083] text-white text-xs font-bold uppercase tracking-widest transition-all duration-300 transform active:scale-97 shadow-[0_0_20px_rgba(182,0,168,0.4)] cursor-pointer hover:shadow-[0_0_28px_rgba(182,0,168,0.6)]"
                >
                  RECRUIT ME
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
