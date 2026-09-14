import React, { useState, useEffect } from 'react';
import { Project } from '../types';
import { X, Play, Pause, Volume2, VolumeX, Sparkles, Share2, Eye, Award, Film, MessageCircle } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(35);
  const [activeTab, setActiveTab] = useState<'case-study' | 'bts'>('case-study');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // Video progress simulation
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 1));
    }, 200);
    return () => clearInterval(interval);
  }, [isPlaying]);

  if (!project) return null;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.origin + `#project-${project.slug}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-xl overflow-y-auto"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div 
        className="relative w-full max-w-5xl bg-[#0F0F1A] border-2 border-[#7C3AED]/70 rounded-2xl overflow-hidden shadow-[0_25px_80px_rgba(0,0,0,0.9),0_0_50px_rgba(124,58,237,0.3)] my-auto text-white flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#0B0B12]/90">
          <div className="flex items-center gap-3">
            <span className="font-impact text-sm text-[#FACC15] tracking-widest px-2 py-0.5 rounded bg-[#FACC15]/10 border border-[#FACC15]/30">
              {project.tag}
            </span>
            <span className="text-white/40">•</span>
            <span className="text-xs font-display font-bold text-[#22D3EE] tracking-wider uppercase">
              {project.category}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyLink}
              title="Share Case Study"
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/80 hover:text-white transition-colors text-xs flex items-center gap-1.5"
            >
              <Share2 className="w-4 h-4" />
              <span className="hidden sm:inline">{copied ? 'Copied!' : 'Share'}</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-white/5 hover:bg-[#EC4899]/20 hover:text-[#EC4899] text-white/80 transition-colors"
              aria-label="Close Case Study"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body: Split into Vertical Player (left) & Deep-Dive Info (right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 overflow-y-auto">
          
          {/* Left Column: Vertical 9:16 Video Player Container (5 cols) */}
          <div className="lg:col-span-5 p-6 bg-[#08080E] flex flex-col items-center justify-center border-b lg:border-b-0 lg:border-r border-white/10">
            <div className="relative w-full max-w-[280px] sm:max-w-[320px] aspect-[9/16] rounded-2xl overflow-hidden bg-gradient-to-b from-[#1C1433] via-[#0D0B18] to-black border-2 border-[#7C3AED]/40 shadow-2xl flex flex-col justify-between p-4 group">
              
              {/* Halftone Texture inside player */}
              <div className="absolute inset-0 bg-halftone opacity-20 pointer-events-none" />

              {/* Top Video Overlay Info */}
              <div className="relative z-10 flex items-center justify-between">
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  <span className="font-impact text-xs tracking-wider text-white">AdX ORIGINAL</span>
                </div>
                <span className="text-[11px] font-display font-bold text-white/80 bg-white/10 px-2 py-0.5 rounded">
                  {project.platform}
                </span>
              </div>

              {/* Center Content: Animated Graphic / Subtitle preview */}
              <div className="relative z-10 flex flex-col items-center text-center my-auto px-2">
                <div className="w-16 h-16 rounded-full bg-[#7C3AED]/30 border-2 border-[#22D3EE] flex items-center justify-center mb-4 shadow-[0_0_20px_rgba(34,211,238,0.5)]">
                  <Film className="w-8 h-8 text-[#22D3EE]" />
                </div>
                
                <h4 className="font-display font-black text-xl text-white tracking-tight uppercase mb-2">
                  {project.title}
                </h4>

                {/* Simulated Anime Punchline Subtitle Box */}
                <div className="p-3 rounded-lg bg-black/85 border border-[#FACC15]/60 text-left w-full shadow-lg">
                  <div className="flex items-center gap-1 mb-1">
                    <span className="font-impact text-[10px] text-[#FACC15] tracking-widest uppercase">
                      SUBTITLES [JP ➔ EN]
                    </span>
                  </div>
                  <p className="font-body text-xs font-medium text-white italic leading-snug">
                    "{project.caseStudy.keyPunchline || project.description}"
                  </p>
                </div>
              </div>

              {/* Bottom Video Controls */}
              <div className="relative z-10 flex flex-col gap-2 bg-black/75 p-3 rounded-xl backdrop-blur-md border border-white/10">
                {/* Progress bar */}
                <div className="w-full h-1.5 bg-white/20 rounded-full overflow-hidden cursor-pointer">
                  <div 
                    className="h-full bg-gradient-to-r from-[#7C3AED] to-[#22D3EE]"
                    style={{ width: `${progress}%` }}
                  />
                </div>

                <div className="flex items-center justify-between text-xs text-white/80 pt-1">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="flex items-center gap-1.5 hover:text-white font-display font-bold"
                  >
                    {isPlaying ? <Pause className="w-3.5 h-3.5 fill-current" /> : <Play className="w-3.5 h-3.5 fill-current" />}
                    <span>{isPlaying ? 'PAUSE' : 'PLAY'}</span>
                  </button>

                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[10px] text-white/60">00:{progress < 10 ? `0${progress}` : progress} / 00:45</span>
                    <button onClick={() => setIsMuted(!isMuted)} className="hover:text-white">
                      {isMuted ? <VolumeX className="w-3.5 h-3.5 text-white/60" /> : <Volume2 className="w-3.5 h-3.5 text-[#22D3EE]" />}
                    </button>
                  </div>
                </div>
              </div>

            </div>

            {/* Video Placeholder Indicator */}
            <span className="mt-3 text-[11px] font-mono text-white/40">
              Placeholder Video Simulation · Embed Target: {project.video}
            </span>
          </div>

          {/* Right Column: Case Study Breakdown (7 cols) */}
          <div className="lg:col-span-7 p-6 sm:p-8 space-y-6">
            
            {/* Title & Stats */}
            <div>
              <h2 id="modal-project-title" className="font-display font-black text-2xl sm:text-4xl text-white tracking-tight uppercase mb-2">
                {project.title}
              </h2>
              <p className="font-body text-base text-white/80 leading-relaxed">
                {project.caseStudy.overview}
              </p>
            </div>

            {/* Metrics Chips */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <span className="block font-impact text-xs tracking-wider text-white/50">PERFORMANCE</span>
                <span className="font-display font-black text-sm sm:text-base text-[#22D3EE]">{project.caseStudy.metrics}</span>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <span className="block font-impact text-xs tracking-wider text-white/50">PLATFORM</span>
                <span className="font-display font-black text-sm sm:text-base text-[#FACC15]">{project.platform}</span>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 col-span-2 sm:col-span-1">
                <span className="block font-impact text-xs tracking-wider text-white/50">FORMAT</span>
                <span className="font-display font-black text-sm sm:text-base text-[#EC4899]">{project.category}</span>
              </div>
            </div>

            {/* Deep-Dive Accordion / Sections */}
            <div className="space-y-4">
              {/* Concept Section */}
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                <h4 className="font-display font-black text-xs text-[#22D3EE] tracking-wider uppercase mb-1 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  THE COMEDIC CONCEPT
                </h4>
                <p className="font-body text-sm text-white/75 leading-relaxed">
                  {project.caseStudy.concept}
                </p>
              </div>

              {/* Creative Direction */}
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                <h4 className="font-display font-black text-xs text-[#7C3AED] tracking-wider uppercase mb-1 flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5" />
                  CREATIVE DIRECTION & VISUAL PACING
                </h4>
                <p className="font-body text-sm text-white/75 leading-relaxed">
                  {project.caseStudy.creativeDirection}
                </p>
              </div>

              {/* Behind the Scenes */}
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                <h4 className="font-display font-black text-xs text-[#FACC15] tracking-wider uppercase mb-1 flex items-center gap-1.5">
                  <MessageCircle className="w-3.5 h-3.5" />
                  BEHIND THE SCENES & WRITING ROOM
                </h4>
                <p className="font-body text-sm text-white/75 leading-relaxed">
                  {project.caseStudy.behindTheScenes}
                </p>
              </div>
            </div>

            {/* Modal Bottom CTA */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs text-white/50 font-body">
                Part of the official AdX Entertainment Universe
              </span>
              <a
                href="#contact"
                onClick={() => onClose()}
                className="px-5 py-2 rounded-lg bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-display font-extrabold text-xs tracking-wider uppercase transition-colors"
              >
                COLLABORATE ON THIS FORMAT
              </a>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
