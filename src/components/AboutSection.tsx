import React from 'react';
import { motion } from 'motion/react';
import { AboutData } from '../types';
import contactContent from '../data/contentData.json';
import ContactButton from './ContactButton';
import FadeIn from './FadeIn';

interface AboutSectionProps {
  onContactClick: () => void;
}

export default function AboutSection({ onContactClick }: AboutSectionProps) {
  const { text, assets } = contactContent.about as AboutData;

  return (
    <section
      id="about"
      className="relative min-h-[90vh] md:min-h-screen w-full flex flex-col justify-center items-center bg-[#0C0C0C] overflow-hidden px-6 sm:px-8 md:px-10 py-24 select-none z-0"
    >
      {/* Absolute Decorative 3D Images in Corners - Pushed to extremes and downsized to avoid overlapping copy */}
      
      {/* Top-Left: Moon Icon */}
      <div className="absolute top-[6%] left-[-4%] sm:left-[1%] md:left-[2%] z-10 opacity-30 md:opacity-60 pointer-events-none">
        <FadeIn delay={0.15} x={-60} y={0} duration={1.1}>
          <img
            src={assets.moon}
            alt="3D Moon Asset"
            className="w-[90px] sm:w-[130px] md:w-[170px] h-auto object-contain select-none"
            referrerPolicy="no-referrer"
          />
        </FadeIn>
      </div>

      {/* Bottom-Left: 3D Object */}
      <div className="absolute bottom-[8%] left-[-4%] sm:left-[2%] md:left-[5%] z-10 opacity-25 md:opacity-50 pointer-events-none">
        <FadeIn delay={0.3} x={-60} y={0} duration={1.1}>
          <img
            src={assets.bottomLeftObj}
            alt="3D Geometric Element"
            className="w-[80px] sm:w-[110px] md:w-[145px] h-auto object-contain select-none"
            referrerPolicy="no-referrer"
          />
        </FadeIn>
      </div>

      {/* Top-Right: Lego Icon */}
      <div className="absolute top-[6%] right-[-4%] sm:right-[1%] md:right-[2%] z-10 opacity-30 md:opacity-60 pointer-events-none">
        <FadeIn delay={0.2} x={60} y={0} duration={1.1}>
          <img
            src={assets.lego}
            alt="3D Toy Block Asset"
            className="w-[90px] sm:w-[130px] md:w-[170px] h-auto object-contain select-none"
            referrerPolicy="no-referrer"
          />
        </FadeIn>
      </div>

      {/* Bottom-Right: 3D Group */}
      <div className="absolute bottom-[8%] right-[-4%] sm:right-[2%] md:right-[5%] z-10 opacity-25 md:opacity-50 pointer-events-none">
        <FadeIn delay={0.35} x={60} y={0} duration={1.1}>
          <img
            src={assets.bottomRightGroup}
            alt="3D Combined Group Asset"
            className="w-[100px] sm:w-[130px] md:w-[170px] h-auto object-contain select-none"
            referrerPolicy="no-referrer"
          />
        </FadeIn>
      </div>

      {/* Center Layout Container */}
      <div className="w-full max-w-[760px] flex flex-col items-center justify-center text-center z-20 pointer-events-auto">
        {/* Mask/Slide Reveal Heading from bottom */}
        <div className="overflow-hidden mb-8 md:mb-10 w-full flex justify-center">
          <motion.h2
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="hero-heading font-black uppercase leading-none tracking-tight text-center select-none text-white"
            style={{ fontSize: "clamp(2.8rem, 11vw, 120px)" }}
          >
            ABOUT ME
          </motion.h2>
        </div>

        {/* High-Readability Width-Optimized Case Statement (Fade-up) */}
        <div className="w-full mb-10 md:mb-12 flex justify-center px-2">
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 0.95, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-white text-[15px] sm:text-lg md:text-xl leading-relaxed text-center max-w-[620px] font-medium tracking-wide selection:bg-[#B600A8]/30"
          >
            {text}
          </motion.p>
        </div>

        {/* Contact CTA Placement directly under paragraph */}
        <div className="pointer-events-auto">
          <FadeIn delay={0.4} y={15}>
            <ContactButton onClick={onContactClick} />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
