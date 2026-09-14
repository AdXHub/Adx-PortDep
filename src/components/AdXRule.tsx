import React, { useState } from 'react';
import { ADX_RULES } from '../data/portfolioData';
import { Sparkles, Check, Flame, MessageSquare, Share2, Laugh } from 'lucide-react';

export const AdXRule: React.FC = () => {
  const [activePillar, setActivePillar] = useState<number>(0);

  const getPillarIcon = (index: number) => {
    switch (index) {
      case 0: return <Laugh className="w-8 h-8 text-[#FACC15]" />;
      case 1: return <Flame className="w-8 h-8 text-[#22D3EE]" />;
      case 2: return <MessageSquare className="w-8 h-8 text-[#7C3AED]" />;
      case 3: return <Share2 className="w-8 h-8 text-[#EC4899]" />;
      default: return <Sparkles className="w-8 h-8" />;
    }
  };

  return (
    <section className="relative py-24 md:py-36 bg-[#0B0B12] overflow-hidden border-t border-white/5">
      {/* Background manga speedlines & ambient colors */}
      <div className="absolute inset-0 bg-halftone opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full bg-[#7C3AED]/15 blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-[#FACC15]/40 mb-4 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-[#FACC15]" />
            <span className="font-impact text-xs tracking-widest uppercase text-[#FACC15]">
              CONTENT PHILOSOPHY & QUALITY BENCHMARK
            </span>
          </div>

          <h2 className="font-display font-black text-4xl sm:text-6xl tracking-tighter uppercase text-white mb-4">
            THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] via-[#22D3EE] to-[#FACC15]">AdX RULE</span>
          </h2>

          <p className="font-body text-base sm:text-xl text-white/75 font-normal max-w-2xl mx-auto">
            If an idea can achieve all four, it belongs in the AdX universe.
          </p>
        </div>

        {/* The Four Giant Animated Words Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
          {ADX_RULES.map((rule, idx) => {
            const isActive = activePillar === idx;
            return (
              <div
                key={rule.word}
                onClick={() => setActivePillar(idx)}
                onMouseEnter={() => setActivePillar(idx)}
                data-cursor="pointer"
                className={`relative p-6 sm:p-8 rounded-2xl transition-all duration-300 cursor-pointer overflow-hidden border-2 flex flex-col justify-between min-h-[260px] group ${
                  isActive 
                    ? 'bg-[#141224] border-[#7C3AED] shadow-[0_15px_40px_rgba(124,58,237,0.35),0_0_20px_rgba(34,211,238,0.2)] -translate-y-2' 
                    : 'bg-[#0E0E18] border-white/10 hover:border-white/20'
                }`}
              >
                {/* Background Halftone */}
                <div className="absolute inset-0 bg-halftone opacity-20 group-hover:opacity-40 transition-opacity" />

                {/* Top Code & Icon */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="font-mono text-xs text-white/50 tracking-widest">
                    0{idx + 1} / 04
                  </span>
                  <div className="p-2 rounded-xl bg-white/5 group-hover:bg-white/10 transition-colors">
                    {getPillarIcon(idx)}
                  </div>
                </div>

                {/* Giant Word */}
                <div className="relative z-10 my-4">
                  <h3 
                    className="font-display font-black text-4xl sm:text-5xl tracking-tighter uppercase transition-colors duration-300"
                    style={{ color: isActive ? rule.color : '#FFFFFF' }}
                  >
                    {rule.word}
                  </h3>
                  <span className="font-impact text-xs tracking-widest text-white/60 uppercase block mt-1">
                    {rule.subtitle}
                  </span>
                </div>

                {/* Micro preview */}
                <div className="relative z-10 pt-3 border-t border-white/10">
                  <p className="font-body text-xs text-white/70 line-clamp-2">
                    {rule.explanation}
                  </p>
                </div>

                {/* Active Indicator Bar */}
                <div 
                  className="absolute bottom-0 left-0 right-0 h-1 transition-transform duration-300 origin-left"
                  style={{ 
                    backgroundColor: rule.color,
                    transform: isActive ? 'scaleX(1)' : 'scaleX(0)'
                  }} 
                />
              </div>
            );
          })}
        </div>

        {/* Interactive Deep-Dive Card of the Active Pillar */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#141224] via-[#16142A] to-[#120F20] border-2 border-white/15 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#7C3AED]/20 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-2 mb-2">
                <span 
                  className="font-display font-black text-2xl sm:text-3xl tracking-tight uppercase"
                  style={{ color: ADX_RULES[activePillar].color }}
                >
                  {ADX_RULES[activePillar].word}
                </span>
                <span className="text-white/40">•</span>
                <span className="font-impact text-sm text-white/80 tracking-widest uppercase">
                  {ADX_RULES[activePillar].subtitle}
                </span>
              </div>

              <p className="font-body text-base sm:text-lg text-white/90 leading-relaxed mb-4">
                {ADX_RULES[activePillar].explanation}
              </p>

              <div className="p-3.5 rounded-xl bg-black/60 border border-white/10 flex items-center gap-3">
                <span className="font-impact text-xs text-[#FACC15] tracking-wider uppercase px-2 py-0.5 rounded bg-[#FACC15]/20">
                  EXECUTION BENCHMARK
                </span>
                <p className="font-body text-xs sm:text-sm text-white/80 italic">
                  "{ADX_RULES[activePillar].microExample}"
                </p>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center">
              <span className="font-impact text-xs tracking-widest text-white/50 uppercase mb-1">
                ADX VERIFICATION
              </span>
              <div className="flex items-center gap-2 text-white font-display font-black text-lg">
                <Check className="w-5 h-5 text-[#22D3EE]" />
                <span>100% AUDIENCE TESTED</span>
              </div>
              <span className="text-xs text-white/50 font-body mt-1">Zero filler content guaranteed.</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
