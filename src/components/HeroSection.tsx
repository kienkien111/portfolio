import React from 'react';
import { HeroData } from '../types';
import contactContent from '../data/contentData.json';
import ContactButton from './ContactButton';
import Magnet from './Magnet';
import FadeIn from './FadeIn';

interface HeroSectionProps {
  onContactClick: () => void;
}

export default function HeroSection({ onContactClick }: HeroSectionProps) {
  const { title, description, portraitUrl } = contactContent.hero as HeroData;

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative w-full h-screen flex flex-col justify-between overflow-hidden select-none bg-[#0C0C0C]"
    >
      {/* Absolute Hero Portrait (Centered absolutely with z-10 on desktop only) */}
      <div className="hidden sm:flex absolute left-1/2 -translate-x-1/2 z-10 sm:w-[360px] md:w-[440px] lg:w-[520px] sm:bottom-0 sm:top-auto sm:translate-y-0 justify-center items-end">
        <FadeIn delay={0.6} y={30} duration={0.8} className="w-full">
          <Magnet
            padding={150}
            strength={3}
            activeTransition="transform 0.3s ease-out"
            inactiveTransition="transform 0.6s ease-in-out"
            className="w-full"
          >
            <img
              src={portraitUrl}
              alt="Kien Le Portrait"
              className="w-full h-auto object-contain pointer-events-auto select-none drop-shadow-[0_15px_30px_rgba(0,0,0,0.8)]"
              referrerPolicy="no-referrer"
            />
          </Magnet>
        </FadeIn>
      </div>

      {/* Navbar segment */}
      <nav className="w-full px-6 md:px-10 pt-6 md:pt-8 flex justify-between items-center z-20">
        <FadeIn delay={0} y={-20} className="w-full flex justify-between items-center">
          <a
            href="#about"
            onClick={(e) => handleLinkClick(e, 'about')}
            className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200"
          >
            About
          </a>
          <a
            href="#services"
            onClick={(e) => handleLinkClick(e, 'services')}
            className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200"
          >
            Skills
          </a>
          <a
            href="#projects"
            onClick={(e) => handleLinkClick(e, 'projects')}
            className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200"
          >
            Projects
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              onContactClick();
            }}
            className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200"
          >
            Contact
          </a>
        </FadeIn>
      </nav>

      {/* Massive Hero Heading (Lowercase "i" and curly apostrophe via dynamic title mapping) */}
      <div className="w-full px-6 md:px-10 flex-grow flex flex-col items-center justify-center overflow-hidden z-0">
        {/* Mobile portrait: only visible below sm, positioned neatly above the text without overlapping */}
        <div className="flex sm:hidden mb-4 w-[120px] justify-center items-center">
          <FadeIn delay={0.6} y={15} duration={0.8} className="w-full">
            <img
              src={portraitUrl}
              alt="Kien Le Portrait Mobile"
              className="w-full h-auto object-contain pointer-events-auto select-none drop-shadow-[0_10px_22px_rgba(0,0,0,0.55)]"
              referrerPolicy="no-referrer"
            />
          </FadeIn>
        </div>

        <FadeIn delay={0.15} y={40} className="w-full text-center">
          <h1
            id="hero-heading"
            className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw] mt-2 sm:mt-4 md:-mt-5 select-none"
          >
            {title}
          </h1>
        </FadeIn>
      </div>

      {/* Hero Bottom bar */}
      <div className="w-full px-6 md:px-10 pb-7 sm:pb-8 md:pb-10 flex justify-between items-end z-20">
        {/* Left-hand brief statement */}
        <div className="overflow-hidden">
          <FadeIn delay={0.35} y={20}>
            <p className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug text-[clamp(0.75rem,1.4vw,1.5rem)] max-w-[160px] sm:max-w-[220px] md:max-w-[260px]">
              {description}
            </p>
          </FadeIn>
        </div>

        {/* Right-hand Action Button */}
        <div>
          <FadeIn delay={0.5} y={20}>
            <ContactButton onClick={onContactClick} />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
