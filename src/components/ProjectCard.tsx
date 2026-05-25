import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ProjectItem } from '../types';
import LiveProjectButton from './LiveProjectButton';

interface ProjectCardProps {
  project: ProjectItem;
  index: number;
  totalCards: number;
  onOpenDetails: (project: ProjectItem) => void;
  key?: any;
}

export default function ProjectCard({ project, index, totalCards, onOpenDetails }: ProjectCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll tracking specifically for stacking depth effects
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Calculate scaling down, opacity reduction, and subtle blur as the next card scrolls over this one
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.65]);
  const blurValue = useTransform(scrollYProgress, [0, 1], ["blur(0px)", "blur(2px)"]);

  // Calculate custom top sticky position based on card index to stack cleanly with partial stack overhead lines
  const stickyTop = `calc(${index * 32}px + 110px)`;

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[100vh] sm:h-[110vh] flex flex-col items-center justify-start select-none"
    >
      {/* Sticky Inner Card with Framer Motion interactive styling */}
      <motion.div
        style={{
          scale,
          opacity,
          filter: blurValue,
          top: stickyTop,
          zIndex: index + 10,
          willChange: 'transform, opacity, filter',
        }}
        id={`project-card-${project.id}`}
        className="sticky w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border border-white/10 hover:border-[#B600A8]/20 bg-[#0C0C0C]/95 backdrop-blur-sm p-6 sm:p-8 md:p-10 flex flex-col justify-between gap-5 sm:gap-7 transition-all duration-700 shadow-[0_30px_70px_rgba(0,0,0,0.95)]"
      >
        {/* Card Header segment - Elegant minimal layout */}
        <div className="w-full flex justify-between items-center border-b border-white/5 pb-4.5">
          <div className="flex items-center gap-5">
            {/* Massive outline/glow Project numeric indicator */}
            <div
              className="font-black text-transparent select-none tracking-tighter leading-none"
              style={{
                fontSize: "clamp(2.5rem, 6vw, 4.8rem)",
                WebkitTextStroke: "1px rgba(215, 226, 234, 0.45)",
                fontFamily: "var(--font-sans)"
              } as React.CSSProperties}
            >
              {project.num}
            </div>
            <div className="hidden sm:block font-mono text-[10px] text-[#D7E2EA]/40 uppercase tracking-[0.25em]">
              // ACTIVE CAMPAIGN STREAM 00{project.id}
            </div>
          </div>

          {/* Action Trigger Link Button */}
          <div className="flex items-center pointer-events-auto">
            <LiveProjectButton label="VIEW PROJECT" onClick={() => onOpenDetails(project)} />
          </div>
        </div>

        {/* Dual-Column Grid structure with premium hover zoom action */}
        <div className="w-full grid grid-cols-1 md:grid-cols-10 gap-5 sm:gap-7 flex-grow items-stretch select-none pointer-events-auto overflow-hidden my-4">
          {/* Left Column (40% width) - Stacked visuals */}
          <div className="md:col-span-4 flex flex-col gap-4 sm:gap-6 justify-between overflow-hidden">
            {/* Top row Image with premium hover zoom */}
            <div
              style={{ height: "clamp(100px, 14vw, 210px)" }}
              className="w-full rounded-[24px] sm:rounded-[32px] overflow-hidden bg-zinc-950 border border-white/5 group/img1"
            >
              <img
                src={project.images.col1Row1}
                alt={`${project.name} Details 1`}
                className="w-full h-full object-cover select-none transition-transform duration-700 ease-out sm:group-hover/img1:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Bottom row Image with premium hover zoom */}
            <div
              style={{ height: "clamp(130px, 18vw, 290px)" }}
              className="w-full rounded-[24px] sm:rounded-[32px] overflow-hidden bg-zinc-950 border border-white/5 group/img2"
            >
              <img
                src={project.images.col1Row2}
                alt={`${project.name} Details 2`}
                className="w-full h-full object-cover select-none transition-transform duration-700 ease-out sm:group-hover/img2:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Right Column (60% width) - Massive core asset showcase */}
          <div className="md:col-span-6 rounded-[24px] sm:rounded-[36px] overflow-hidden bg-zinc-950 border border-white/5 min-h-[200px] md:min-h-0 group/img3">
            <img
              src={project.images.col2}
              alt={`${project.name} Core Display`}
              className="w-full h-full object-cover select-none transition-transform duration-[850ms] ease-out sm:group-hover/img3:scale-[1.035]"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* Bottom Caption Area - Luxe typography and metadata showcase */}
        <div className="w-full flex flex-col md:flex-row justify-between items-stretch md:items-center pt-4 border-t border-white/5 gap-4">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
            {/* Title */}
            <h3 className="text-[#D7E2EA] font-semibold uppercase text-xl sm:text-2xl md:text-2.5xl tracking-wide">
              {project.name}
            </h3>
            
            <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-[#B600A8]" />
            
            {/* Meta capsules */}
            <div className="flex items-center gap-3">
              <span className="text-[#D7E2EA]/60 uppercase text-[10px] sm:text-xs tracking-widest font-mono bg-white/5 px-2.5 py-1 rounded-full border border-white/5 font-medium">
                {project.category}
              </span>
              <span className="text-white/40 text-[10px] sm:text-xs tracking-widest font-mono">
                [ EST. {project.year} ]
              </span>
            </div>
          </div>
          
          <div className="font-mono text-[9px] text-[#D7E2EA]/45 uppercase tracking-[0.2em] flex items-center gap-2 self-start md:self-auto">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>LIVE INTERACTIVE TRANSMISSION</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
