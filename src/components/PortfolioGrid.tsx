import React, { useState } from 'react';
import { Project, ProjectCategory } from '../types';
import { PROJECTS_DATA } from '../data/portfolioData';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';
import { Sparkles, Layers, Flame } from 'lucide-react';

export const PortfolioGrid: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const categories = [
    'All',
    'Commercial / Brand Campaign',
    'Comedy / Commentary',
    'Comedy Skit',
    'Anime Comedy',
    'Commentary',
    'Community Content',
  ];

  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === selectedCategory);

  return (
    <section id="work" className="relative py-24 md:py-32 bg-[#0B0B12] overflow-hidden">
      {/* Subtle Halftone & Radial glow */}
      <div className="absolute inset-0 bg-halftone opacity-20 pointer-events-none" />
      <div className="absolute top-1/3 -right-40 w-96 h-96 rounded-full bg-[#7C3AED]/15 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 -left-40 w-96 h-96 rounded-full bg-[#22D3EE]/15 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-[#7C3AED]/40 mb-4 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-[#22D3EE]" />
            <span className="font-impact text-xs tracking-widest uppercase text-[#22D3EE]">
              FEATURED WORK & FORMATS
            </span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl tracking-tighter uppercase text-white mb-4">
            ENTER THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] via-[#A855F7] to-[#22D3EE]">AdX UNIVERSE</span>
          </h2>

          <p className="font-body text-base sm:text-xl text-white/75 font-normal max-w-2xl">
            <strong className="text-[#FACC15] font-semibold">Anime was already dramatic.</strong> I just made it worse.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-12 scrollbar-none">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-lg text-xs font-display font-extrabold tracking-wider uppercase whitespace-nowrap transition-all duration-200 cursor-pointer border ${
                  isSelected
                    ? 'bg-[#7C3AED] text-white border-[#A855F7] shadow-[0_0_15px_rgba(124,58,237,0.5)]'
                    : 'bg-[#11111E] text-white/70 border-white/10 hover:border-white/25 hover:text-white'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Projects Grid: Responsive 3 Columns on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={(p) => setActiveProject(p)}
            />
          ))}
        </div>

        {/* Footer Prompt in Grid */}
        <div className="mt-16 text-center">
          <p className="font-body text-xs text-white/50 mb-3">
            Want to co-create a dedicated comedy episode around your brand or game?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 font-display font-extrabold text-xs tracking-wider uppercase text-[#22D3EE] hover:text-[#FACC15] transition-colors"
          >
            <span>COMMISSION AN ORIGINAL SKIT</span>
            <span>→</span>
          </a>
        </div>

      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
};
