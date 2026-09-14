import React from 'react';
import { Project } from '../types';
import { Play, Eye, Flame, ShieldAlert, Sparkles, Tv, HelpCircle, FileText, Zap } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  // Select distinct icon & color theme based on format
  const getVisualAccent = (id: string) => {
    switch (id) {
      case 'why-pick-one-lane':
        return {
          icon: <Sparkles className="w-8 h-8 text-amber-400" />,
          glow: 'from-amber-600/40 via-yellow-500/30 to-amber-400/20',
          kanji: '覇気', // Haki / Ambition
          bannerColor: 'bg-gradient-to-r from-amber-500 to-yellow-400',
          bannerTextColor: 'text-black'
        };
      case 'pov-anime-workforce':
        return {
          icon: <Zap className="w-8 h-8 text-yellow-400" />,
          glow: 'from-yellow-500/40 via-amber-500/30 to-black/20',
          kanji: '覚醒', // Awakening / Super Saiyan
          bannerColor: 'bg-yellow-400',
          bannerTextColor: 'text-black'
        };
      case 'protagonist-diet':
        return {
          icon: <Flame className="w-8 h-8 text-red-400" />,
          glow: 'from-red-600/40 via-orange-500/30 to-black/20',
          kanji: '激辛', // Extra Spicy
          bannerColor: 'bg-red-500',
          bannerTextColor: 'text-white'
        };
      case 'nike-gear-5-gus':
        return {
          icon: <Flame className="w-8 h-8 text-[#FACC15]" />,
          glow: 'from-[#7C3AED]/40 via-[#22D3EE]/30 to-[#FACC15]/20',
          kanji: '解放', // Liberation (Gear 5)
          bannerColor: 'bg-gradient-to-r from-[#FACC15] via-[#22D3EE] to-[#7C3AED]',
          bannerTextColor: 'text-black'
        };
      case 'anime-logic-court':
        return {
          icon: <ShieldAlert className="w-8 h-8 text-[#FACC15]" />,
          glow: 'from-[#FACC15]/20 to-[#7C3AED]/20',
          kanji: '裁判', // Trial
          bannerColor: 'bg-[#FACC15]',
          bannerTextColor: 'text-black'
        };
      case 'if-anime-was-real':
        return {
          icon: <Flame className="w-8 h-8 text-[#EC4899]" />,
          glow: 'from-[#EC4899]/20 to-[#22D3EE]/20',
          kanji: '現実', // Reality
          bannerColor: 'bg-[#EC4899]',
          bannerTextColor: 'text-white'
        };
      case 'the-adx-roast':
        return {
          icon: <Sparkles className="w-8 h-8 text-[#22D3EE]" />,
          glow: 'from-[#22D3EE]/20 to-[#7C3AED]/20',
          kanji: '炎上', // Roast / Blaze
          bannerColor: 'bg-[#22D3EE]',
          bannerTextColor: 'text-black'
        };
      case 'hot take-speedrun':
      case 'hot-take-speedrun':
        return {
          icon: <Tv className="w-8 h-8 text-[#FACC15]" />,
          glow: 'from-[#FACC15]/20 to-[#EC4899]/20',
          kanji: '爆速', // Speed
          bannerColor: 'bg-[#FACC15]',
          bannerTextColor: 'text-black'
        };
      case 'anime-job-centre':
        return {
          icon: <FileText className="w-8 h-8 text-[#7C3AED]" />,
          glow: 'from-[#7C3AED]/20 to-[#22D3EE]/20',
          kanji: '就職', // Employment
          bannerColor: 'bg-[#7C3AED]',
          bannerTextColor: 'text-white'
        };
      default:
        return {
          icon: <HelpCircle className="w-8 h-8 text-[#22D3EE]" />,
          glow: 'from-[#7C3AED]/20 to-[#FACC15]/20',
          kanji: '混沌', // Chaos
          bannerColor: 'bg-[#22D3EE]',
          bannerTextColor: 'text-black'
        };
    }
  };

  const accent = getVisualAccent(project.id);

  return (
    <div
      onClick={() => onSelect(project)}
      data-cursor="play"
      id={`project-card-${project.slug}`}
      className="group relative flex flex-col rounded-2xl bg-[#11111E] border-2 border-white/10 hover:border-[#7C3AED] transition-all duration-300 hover:shadow-[0_15px_40px_rgba(124,58,237,0.35),0_0_20px_rgba(34,211,238,0.2)] hover:-translate-y-1.5 cursor-pointer overflow-hidden"
    >
      {/* Top Anime Thumbnail / Video Preview Area (Vertical ratio) */}
      <div className="relative aspect-[16/10] sm:aspect-[4/3] w-full overflow-hidden bg-gradient-to-br from-[#1C1433] via-[#100D1D] to-[#0B0B12] flex items-center justify-center p-6">
        
        {/* Background Halftone & Manga Grid */}
        <div className="absolute inset-0 bg-halftone opacity-25 group-hover:opacity-40 transition-opacity" />
        <div className={`absolute inset-0 bg-gradient-to-tr ${accent.glow} opacity-40 group-hover:opacity-80 transition-opacity duration-300`} />

        {/* Kanji Stamp in corner */}
        <span className="absolute top-3 right-3 font-impact text-3xl text-white/15 group-hover:text-white/30 transition-colors select-none">
          {accent.kanji}
        </span>

        {/* Platform Pill */}
        <div className="absolute top-3 left-3 z-10">
          <span className="px-2.5 py-1 rounded-full text-[10px] font-display font-extrabold tracking-wider uppercase bg-black/70 backdrop-blur-md text-white border border-white/15">
            {project.platform}
          </span>
        </div>

        {/* Center Graphic composition */}
        <div className="relative z-10 flex flex-col items-center text-center transform group-hover:scale-105 transition-transform duration-300">
          <div className="w-16 h-16 rounded-2xl bg-black/60 border border-white/20 flex items-center justify-center mb-3 shadow-xl group-hover:border-[#22D3EE] group-hover:shadow-[0_0_25px_rgba(34,211,238,0.5)] transition-all">
            {accent.icon}
          </div>
          
          <span className="font-impact text-xs tracking-widest text-[#FACC15] uppercase mb-1">
            {project.tag}
          </span>

          <h3 className="font-display font-black text-lg sm:text-xl text-white tracking-tight uppercase max-w-[240px]">
            {project.title}
          </h3>
        </div>

        {/* Hover Overlay with Play Button & X Cursor Trigger */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col items-center justify-center gap-2 z-20">
          <div className="w-14 h-14 rounded-full bg-[#7C3AED] border-2 border-white flex items-center justify-center text-white shadow-[0_0_20px_#7C3AED] transform scale-75 group-hover:scale-100 transition-transform duration-300">
            <Play className="w-6 h-6 fill-current ml-0.5" />
          </div>
          <span className="font-display font-black text-xs tracking-wider text-[#22D3EE] uppercase bg-black/80 px-3 py-1 rounded-full border border-[#22D3EE]/40">
            VIEW CASE STUDY & REEL
          </span>
        </div>

        {/* Bottom Accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#7C3AED] via-[#22D3EE] to-[#FACC15] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
      </div>

      {/* Card Body Information */}
      <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between bg-[#0F0F1A]">
        <div>
          {/* Format & Metrics */}
          <div className="flex items-center justify-between gap-2 mb-2.5">
            <span className="font-display font-extrabold text-xs tracking-wider uppercase text-[#22D3EE]">
              {project.category}
            </span>
            <span className="font-mono text-[11px] text-white/50">
              {project.metrics}
            </span>
          </div>

          {/* Description */}
          <p className="font-body text-sm text-white/75 line-clamp-2 leading-relaxed mb-4">
            {project.description}
          </p>
        </div>

        {/* Action Button */}
        <div className="pt-3 border-t border-white/10 flex items-center justify-between">
          <span className="font-impact text-xs tracking-widest text-[#FACC15] group-hover:text-white transition-colors">
            AdX ORIGINAL IP
          </span>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onSelect(project);
            }}
            className="inline-flex items-center gap-1.5 font-display font-extrabold text-xs tracking-wider uppercase text-white hover:text-[#22D3EE] transition-colors"
          >
            <span>CASE STUDY</span>
            <span className="text-[#22D3EE] font-bold">→</span>
          </button>
        </div>
      </div>
    </div>
  );
};
