import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { ServicesData } from '../types';
import contactContent from '../data/contentData.json';
import { 
  Target, 
  Sparkles, 
  BarChart3, 
  Cpu, 
  TrendingUp, 
  ArrowUpRight,
  ChevronDown
} from 'lucide-react';

export default function ServicesSection() {
  const { heading, items } = contactContent.services as ServicesData;
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<number>(0);

  // Responsive layout detector
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Desktop Scroll-Linked Sticky Controller
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Track scroll progress to determine current active item index (out of 5 items)
  useEffect(() => {
    if (isMobile) return;
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      const steps = items.length;
      const stepSize = 1 / steps;
      let calculatedIdx = Math.floor(latest / stepSize);
      if (calculatedIdx >= steps) calculatedIdx = steps - 1;
      if (calculatedIdx < 0) calculatedIdx = 0;
      setActiveIndex(calculatedIdx);
    });
    return () => unsubscribe();
  }, [scrollYProgress, isMobile, items.length]);

  // Smooth scroll handler to snap viewport specifically to an item sequence on click
  const handleItemClick = (index: number) => {
    if (!containerRef.current) return;
    const element = containerRef.current;
    const startY = element.offsetTop;
    const totalHeight = element.scrollHeight - window.innerHeight;
    const targetScrollY = startY + (index * (totalHeight / items.length)) + 50;
    
    window.scrollTo({
      top: targetScrollY,
      behavior: 'smooth'
    });
  };

  // Mini-Visual components specifically styled for each expertise category
  const renderDetailVisual = (index: number) => {
    switch (index) {
      case 0:
        return (
          <div className="relative w-12 h-12 flex items-center justify-center">
            {/* Target Radar */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border border-dashed border-[#B600A8]/30"
            />
            <Target className="text-[#B600A8] w-5 h-5 animate-pulse" />
          </div>
        );
      case 1:
        return (
          <div className="relative w-12 h-12 flex items-center justify-center">
            {/* Sparkles Orb */}
            <motion.div 
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-2 bg-[#7621B0]/10 rounded-full filter blur-sm"
            />
            <Sparkles className="text-[#7621B0] w-5 h-5" />
          </div>
        );
      case 2:
        return (
          <div className="relative w-12 h-12 flex items-end justify-center gap-1 px-1.5 pb-2 border-b border-[#10B981]/20">
            {/* Changing Bar Graph */}
            <motion.div 
              animate={{ height: ["40%", "85%", "40%"] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 bg-[#10B981]/40 rounded-t"
            />
            <motion.div 
              animate={{ height: ["90%", "30%", "90%"] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
              className="w-1.5 bg-[#10B981] rounded-t"
            />
            <motion.div 
              animate={{ height: ["60%", "100%", "60%"] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
              className="w-1.5 bg-[#10B981]/60 rounded-t"
            />
          </div>
        );
      case 3:
        return (
          <div className="relative w-12 h-12 flex items-center justify-center">
            {/* CPU Processor Blinks */}
            <motion.div
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-1 border border-[#FF7A00]/20 rounded-lg"
            />
            <Cpu className="text-[#FF7A00] w-5 h-5" />
          </div>
        );
      case 4:
        return (
          <div className="relative w-12 h-12 flex items-center justify-center">
            {/* Dynamic Growth Trend */}
            <motion.div
              animate={{ y: [2, -2, 2] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <TrendingUp className="text-[#00A8E8] w-5.5 h-5.5" />
            </motion.div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      {isMobile ? (
        /* ==================== MOBILE LAYOUT (Accordion Card List - Clean White) ==================== */
        <section
          id="services"
          className="relative w-full bg-white text-black px-6 py-20 select-none z-10 overflow-hidden border-t border-black/5"
        >
          {/* Gentle background decoration glows for mobile white space */}
          <div className="absolute top-[5%] right-[-15%] w-[250px] h-[250px] rounded-full bg-[#B600A8]/3 blur-[80px] pointer-events-none" />
          <div className="absolute bottom-[10%] left-[-15%] w-[220px] h-[220px] rounded-full bg-[#7621B0]/3 blur-[80px] pointer-events-none" />

          <div className="w-full max-w-2xl mx-auto flex flex-col justify-start relative z-10">
            {/* Beautiful, explicitly centered mobile title */}
            <div className="text-center mb-10">
              <h2 className="font-black uppercase leading-none tracking-tight text-black text-4xl">
                {heading}
              </h2>
              <p className="text-[#B600A8] text-[9px] font-mono tracking-[0.25em] uppercase mt-4">
                // EXPERTISE MATRIX & INTEGRATION
              </p>
            </div>

            {/* Accordion Stack Card list with balanced layout */}
            <div className="flex flex-col gap-3">
              {items.map((item, index) => {
                const isOpen = mobileExpanded === index;
                return (
                  <motion.div
                    key={item.id}
                    layout
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                      isOpen 
                        ? 'bg-neutral-50 border-[#B600A8]/20 shadow-sm' 
                        : 'bg-white border-neutral-150 hover:border-neutral-200'
                    }`}
                  >
                    {/* Header bar trigger button element */}
                    <button
                      onClick={() => setMobileExpanded(isOpen ? -1 : index)}
                      className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 cursor-pointer"
                    >
                      <div className="flex items-center gap-4">
                        <span className={`font-mono text-sm font-bold ${isOpen ? 'text-[#B600A8]' : 'text-neutral-400'}`}>
                          {item.num}
                        </span>
                        <h3 className="font-extrabold text-[#0C0C0C] text-sm sm:text-base uppercase tracking-wider">
                          {item.name}
                        </h3>
                      </div>
                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.25 }}
                        className={`p-1.5 rounded-full ${isOpen ? 'bg-[#B600A8]/10 text-[#B600A8]' : 'bg-neutral-100 text-neutral-400'}`}
                      >
                        <ChevronDown size={14} />
                      </motion.div>
                    </button>

                    {/* Collapsible item detail text */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 pb-5 pt-1 border-t border-neutral-100/60 flex flex-col gap-3">
                            <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed font-medium">
                              {item.description}
                            </p>
                            
                            <div className="flex items-center justify-between mt-2 pt-3 border-t border-neutral-100/40">
                              <span className="font-mono text-[8px] text-neutral-400 uppercase tracking-widest font-semibold">
                                STATUS // ACTIVE DEPLOYMENT
                              </span>
                              <div className="flex items-center gap-1 text-[10px] text-[#B600A8] font-mono uppercase font-bold tracking-wider">
                                <span>Core Practice</span>
                                <ArrowUpRight size={11} />
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      ) : (
        /* ==================== DESKTOP LAYOUT (Sticky Pinned List Pure White Canvas Backdrop) ==================== */
        <div ref={containerRef} className="relative w-full h-[320vh]">
          {/* Main sticky viewport pinner - Fixed White Background on desktop too to avoid scroll lag */}
          <div
            className="sticky top-0 h-screen w-full flex flex-col justify-center items-center overflow-hidden z-20 bg-white px-12 md:px-24"
          >
            {/* Elegant premium background vector accents for luxury editorial look on white background */}
            <div className="absolute top-[8%] left-[25%] w-[450px] h-[450px] rounded-full bg-[#B600A8]/3 blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[8%] right-[22%] w-[400px] h-[400px] rounded-full bg-[#7621B0]/2 blur-[120px] pointer-events-none" />

            {/* Inner responsive box */}
            <div className="w-full max-w-5xl mx-auto flex flex-col justify-start relative z-10 h-[82vh]">
              
              {/* Centered header title block */}
              <div className="text-center mb-12 shrink-0 flex flex-col items-center">
                <h2
                  className="font-black uppercase leading-none tracking-tight select-none text-center text-black"
                  style={{ fontSize: "clamp(2.5rem, 5vw, 80px)" }}
                >
                  {heading}
                </h2>
                <p 
                  className="font-mono tracking-[0.25em] uppercase mt-5 text-[10px] md:text-xs text-center text-black/50"
                >
                  // SYSTEMIZED EXPERTISE & DIGITAL DISCOVERY
                </p>
              </div>

              {/* Stacked Vertical List (Grid row system) */}
              <div className="w-full flex flex-col border-t border-neutral-200 justify-center py-2 flex-grow overflow-hidden">
                {items.map((item, index) => {
                  const isActive = activeIndex === index;
                  
                  return (
                    <div
                      key={item.id}
                      onClick={() => handleItemClick(index)}
                      className="group relative w-full border-b border-neutral-200/80 transition-all duration-500 cursor-pointer select-none"
                      style={{
                        paddingTop: isActive ? '20px' : '14px',
                        paddingBottom: isActive ? '20px' : '14px',
                        opacity: isActive ? 1 : 0.28,
                        transform: isActive ? 'scale(1.012)' : 'scale(0.985)',
                      }}
                    >
                      {/* Grid Columns layout */}
                      <div className="grid grid-cols-12 gap-6 items-center w-full">
                        
                        {/* 1. Large Number on Left */}
                        <div className="col-span-1.5 flex items-center justify-start min-w-[70px]">
                          <span 
                            className={`font-mono text-3xl lg:text-4xl font-extrabold tracking-tighter transition-all duration-500 ${
                              isActive ? 'text-[#B600A8] scale-110 font-black' : 'text-neutral-400'
                            }`}
                          >
                            {item.num}
                          </span>
                        </div>

                        {/* 2. Sharp Title (Middle Column group) */}
                        <div className="col-span-4 flex flex-col justify-center pr-3">
                          <h3 
                            className={`font-black text-lg lg:text-xl uppercase tracking-wide leading-none transition-colors duration-500 ${
                              isActive ? 'text-[#0C0C0C]' : 'text-neutral-500'
                            }`}
                          >
                            {item.name}
                          </h3>
                        </div>

                        {/* 3. Description Segment (Fade-in mượt next to title) */}
                        <div className="col-span-5 flex items-center pr-4">
                          <AnimatePresence initial={false}>
                            {isActive ? (
                              <motion.p
                                initial={{ opacity: 0, y: 5 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 5 }}
                                transition={{ duration: 0.35, ease: "easeOut" }}
                                className="text-neutral-700 text-xs lg:text-[13.5px] leading-relaxed font-semibold"
                              >
                                {item.description}
                              </motion.p>
                            ) : (
                              <div className="h-4 w-full" />
                            )}
                          </AnimatePresence>
                        </div>

                        {/* 4. Small Motion Detail / Preview Visual Block */}
                        <div className="col-span-1.5 flex items-center justify-end ml-auto">
                          <AnimatePresence mode="wait">
                            {isActive ? (
                              <motion.div
                                key={`visual-${index}`}
                                initial={{ scale: 0.6, opacity: 0, rotate: -30 }}
                                animate={{ scale: 1, opacity: 1, rotate: 0 }}
                                exit={{ scale: 0.6, opacity: 0, rotate: 30 }}
                                transition={{ type: "spring", stiffness: 220, damping: 16 }}
                                className="w-11 h-11 rounded-full bg-neutral-50 border border-neutral-100 flex items-center justify-center shadow-[0_6px_15px_rgba(0,0,0,0.03)]"
                              >
                                {renderDetailVisual(index)}
                              </motion.div>
                            ) : (
                              <motion.div 
                                className="w-9 h-9 flex items-center justify-center text-neutral-300"
                              >
                                <ArrowUpRight size={16} className="rotate-45" />
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>

                      </div>
                    </div>
                  );
                })}
              </div>

            </div>
          </div>
        </div>
      )}
    </>
  );
}
