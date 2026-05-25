import React, { useState, useEffect } from 'react';
import HeroSection from './components/HeroSection';
import CampaignSnapshots from './components/CampaignSnapshots';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import ContactModal from './components/ContactModal';
import ProjectDetailModal from './components/ProjectDetailModal';
import { ProjectItem } from './types';

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  // Synchronously configure Jack's exact window meta-title target on mount
  useEffect(() => {
    document.title = "Kien Le -- The Marketer";
  }, []);

  return (
    <div
      id="app-wrapper"
      className="w-full min-h-screen bg-[#0C0C0C] font-sans antialiased text-[#D7E2EA] relative selection:bg-[#B600A8]/20 selection:text-white"
      style={{ overflowX: 'clip' }}
    >
      {/* 1. HeroSection - Navbar + Heading + Portrait */}
      <HeroSection onContactClick={() => setIsContactOpen(true)} />

      {/* 2. CampaignSnapshots (Marketing Work Wall) */}
      <CampaignSnapshots />

      {/* 3. AboutSection - Character Scroll Reveal + Floating Assets */}
      <AboutSection onContactClick={() => setIsContactOpen(true)} />

      {/* 4. ServicesSection - 5 Vertical Items on White Canvas */}
      <ServicesSection />

      {/* 5. ProjectsSection - 3 Sticky Stacking Responsive Cards */}
      <ProjectsSection onProjectClick={(project) => setSelectedProject(project)} />

      {/* 6. ContactSection - Let's Build Together dynamic bottom footer anchor */}
      <ContactSection onContactClick={() => setIsContactOpen(true)} />

      {/* 7. ContactModal Overlay Portal */}
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />

      {/* 8. Project Details Custom Case-Study Modal */}
      <ProjectDetailModal
        isOpen={selectedProject !== null}
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onContactClick={() => setIsContactOpen(true)}
      />
    </div>
  );
}
