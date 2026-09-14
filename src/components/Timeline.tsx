import React from 'react';
import { TIMELINE_CHAPTERS } from '../data/portfolioData';
import { Sparkles, Scroll, ArrowDown } from 'lucide-react';

export const Timeline: React.FC = () => {
  return (
    <section className="relative py-24 md:py-32 bg-[#0E0E18] overflow-hidden border-t border-white/5">
      {/* Halftone & Glow */}
      <div className="absolute inset-0 bg-halftone opacity-20 pointer-events-none" />
      <div className="absolute top-1/3 -left-32 w-80 h-80 rounded-full bg-[#7C3AED]/15 blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-[#EC4899]/40 mb-4 backdrop-blur-md">
            <Scroll className="w-3.5 h-3.5 text-[#EC4899]" />
            <span className="font-impact text-xs tracking-widest uppercase text-[#EC4899]">
              STORY ARCS & MILESTONES
            </span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl tracking-tighter uppercase text-white mb-3">
            THE SCRIPT <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EC4899] via-[#FACC15] to-[#22D3EE]">SO FAR</span>
          </h2>

          <p className="font-body text-base sm:text-lg text-white/75 font-normal">
            Every great anime story has training arcs, tournament trials, and unforeseen plot twists.
          </p>
        </div>

        {/* Vertical Timeline Stack with Spine */}
        <div className="relative pl-6 sm:pl-10 space-y-12 before:absolute before:left-2 sm:before:left-4 before:top-3 before:bottom-3 before:w-0.5 before:bg-gradient-to-b before:from-[#7C3AED] before:via-[#22D3EE] before:to-[#EC4899]">
          
          {TIMELINE_CHAPTERS.map((item, index) => {
            const isNextArc = item.isFuture;
            return (
              <div 
                key={item.id}
                id={`timeline-chapter-${index + 1}`}
                className="relative group"
              >
                {/* Node on Spine */}
                <div 
                  className={`absolute -left-[30px] sm:-left-[38px] top-1.5 w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center border-2 transition-transform duration-300 group-hover:scale-125 ${
                    isNextArc
                      ? 'bg-[#EC4899] border-white text-white shadow-[0_0_15px_#EC4899] animate-pulse'
                      : 'bg-[#0B0B12] border-[#22D3EE] text-[#22D3EE] shadow-[0_0_10px_#22D3EE]'
                  }`}
                >
                  <span className="font-impact text-[10px] sm:text-xs">
                    {isNextArc ? '★' : index + 1}
                  </span>
                </div>

                {/* Chapter Card Content */}
                <div className={`p-6 sm:p-7 rounded-2xl border-2 transition-all duration-300 ${
                  isNextArc
                    ? 'bg-gradient-to-r from-[#1C1226] via-[#150F20] to-[#120B1A] border-[#EC4899] shadow-[0_0_25px_rgba(236,72,153,0.3)]'
                    : 'bg-[#11111E] border-white/10 hover:border-[#7C3AED] hover:bg-[#141424]'
                }`}>
                  
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="font-impact text-xs sm:text-sm tracking-widest uppercase text-[#FACC15]">
                      {item.chapter}
                    </span>
                    <span className="font-mono text-xs text-white/50 bg-white/5 px-2.5 py-0.5 rounded-full">
                      {item.time}
                    </span>
                  </div>

                  <h3 className="font-display font-black text-xl sm:text-2xl text-white tracking-tight uppercase mb-2">
                    {item.title}
                  </h3>

                  <p className="font-body text-sm sm:text-base text-white/80 leading-relaxed">
                    {item.description}
                  </p>

                  {isNextArc && (
                    <div className="mt-4 pt-3 border-t border-[#EC4899]/30 flex items-center gap-2 text-xs font-display font-bold text-[#EC4899]">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>NEW ARC PREMIERING SOON ACROSS ALL CHANNELS</span>
                    </div>
                  )}

                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};
