import React from 'react';
import { ProjectsData, ProjectItem } from '../types';
import contactContent from '../data/contentData.json';
import FadeIn from './FadeIn';
import ProjectCard from './ProjectCard';

interface ProjectsSectionProps {
  onProjectClick: (project: ProjectItem) => void;
}

export default function ProjectsSection({ onProjectClick }: ProjectsSectionProps) {
  const { heading, items } = contactContent.projects as ProjectsData;

  return (
    <section
      id="projects"
      className="relative w-full bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-10 px-5 sm:px-8 md:px-10 pt-24 sm:pt-32 pb-20 select-none flex flex-col justify-start"
    >
      <div className="w-full max-w-5xl mx-auto flex flex-col">
        {/* Singular "Project" Heading */}
        <div className="overflow-hidden mb-16 sm:mb-20 md:mb-24 text-center">
          <FadeIn delay={0} y={40}>
            <h2
              className="hero-heading font-black uppercase leading-none tracking-tight select-none"
              style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
            >
              {heading}
            </h2>
          </FadeIn>
        </div>

        {/* Sticky-stacking Cards loop container */}
        <div className="flex flex-col gap-10 sm:gap-14 md:gap-16 pb-12 w-full">
          {items.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              totalCards={items.length}
              onOpenDetails={onProjectClick}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
