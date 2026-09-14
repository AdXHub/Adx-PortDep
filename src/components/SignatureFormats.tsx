import React from 'react';
import { SIGNATURE_FORMATS } from '../data/portfolioData';
import { Tv, Sparkles, Flame, ShieldAlert, FileText, MessageSquare, Play, Clapperboard } from 'lucide-react';

interface SignatureFormatsProps {
  onSelectFormat?: (title: string) => void;
}

export const SignatureFormats: React.FC<SignatureFormatsProps> = ({ onSelectFormat }) => {
  const getFormatBadge = (status: string) => {
    switch (status) {
      case 'Flagship Show':
        return {
          bg: 'bg-[#FACC15]/15 text-[#FACC15] border-[#FACC15]/40',
          dot: 'bg-[#FACC15]'
        };
      case 'Weekly Series':
        return {
          bg: 'bg-[#22D3EE]/15 text-[#22D3EE] border-[#22D3EE]/40',
          dot: 'bg-[#22D3EE]'
        };
      default:
        return {
          bg: 'bg-[#7C3AED]/15 text-[#7C3AED] border-[#7C3AED]/40',
          dot: 'bg-[#7C3AED]'
        };
    }
  };

  return (
    <section id="universe" className="relative py-24 md:py-32 bg-[#0E0E18] overflow-hidden border-t border-white/5">
      {/* Background Graphic elements */}
      <div className="absolute inset-0 bg-halftone opacity-25 pointer-events-none" />
      <div className="absolute top-1/3 -right-40 w-96 h-96 rounded-full bg-[#7C3AED]/15 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-40 w-96 h-96 rounded-full bg-[#22D3EE]/15 blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-[#EC4899]/40 mb-4 backdrop-blur-md">
            <Clapperboard className="w-3.5 h-3.5 text-[#EC4899]" />
            <span className="font-impact text-xs tracking-widest uppercase text-[#EC4899]">
              ORIGINAL ENTERTAINMENT NETWORK
            </span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl tracking-tighter uppercase text-white mb-4">
            RECURRING <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EC4899] via-[#7C3AED] to-[#22D3EE]">CHAOS</span>
          </h2>

          <p className="font-body text-base sm:text-xl text-white/75 font-normal max-w-2xl">
            More than an account. AdX is building a syndicated lineup of recurring comedy properties with dedicated fan communities.
          </p>
        </div>

        {/* 6 Formats Grid (Styled like television / anime streaming lineup cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SIGNATURE_FORMATS.map((format) => {
            const badge = getFormatBadge(format.status);
            return (
              <div
                key={format.id}
                id={`format-card-${format.code}`}
                data-cursor="x"
                className="group relative flex flex-col justify-between rounded-3xl bg-[#11111E] border-2 border-white/10 hover:border-[#22D3EE] p-6 sm:p-7 transition-all duration-300 hover:shadow-[0_15px_40px_rgba(34,211,238,0.25),0_0_20px_rgba(124,58,237,0.3)] hover:-translate-y-1.5 overflow-hidden"
              >
                {/* Background Halftone & Kanji Watermark */}
                <div className="absolute inset-0 bg-halftone opacity-20 group-hover:opacity-40 transition-opacity" />
                <span className="absolute -bottom-6 -right-4 font-display font-black text-8xl text-white/[0.04] group-hover:text-white/[0.08] transition-colors select-none">
                  {format.code}
                </span>

                <div>
                  {/* Top Bar: Code Number & Status Pill */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="font-impact text-2xl text-[#22D3EE] tracking-widest">
                      {format.code}
                    </span>
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-display font-black tracking-wider uppercase border ${badge.bg}`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${badge.dot}`} />
                      {format.status}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="font-display font-black text-xl sm:text-2xl text-white tracking-tight uppercase mb-2 group-hover:text-[#FACC15] transition-colors">
                    {format.title}
                  </h3>

                  <p className="font-impact text-xs tracking-wider text-[#22D3EE] uppercase mb-4">
                    {format.tagline}
                  </p>

                  <p className="font-body text-sm text-white/70 leading-relaxed mb-6">
                    {format.description}
                  </p>
                </div>

                {/* Bottom Hook Callout & Production Count */}
                <div className="pt-4 border-t border-white/10 space-y-3">
                  <div className="p-3 rounded-xl bg-black/60 border border-white/10">
                    <span className="block font-impact text-[10px] tracking-widest text-[#FACC15] uppercase mb-1">
                      SIGNATURE HOOK
                    </span>
                    <p className="font-body text-xs text-white/80 italic">
                      "{format.signatureHook}"
                    </p>
                  </div>

                  <div className="flex items-center justify-between text-xs font-mono text-white/40 pt-1">
                    <span>{format.episodeCountPlaceholder}</span>
                    <span className="text-[#22D3EE] font-display font-bold text-[11px] group-hover:underline">
                      AdX NETWORK
                    </span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Network Banner */}
        <div className="mt-14 p-6 rounded-2xl bg-gradient-to-r from-[#7C3AED]/20 via-black to-[#22D3EE]/20 border border-white/15 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#7C3AED] flex items-center justify-center font-display font-black text-white text-lg">
              ✕
            </div>
            <div>
              <h4 className="font-display font-black text-base text-white uppercase">
                COMMERCIAL SPONSORSHIPS FOR SIGNATURE FORMATS
              </h4>
              <p className="font-body text-xs text-white/70">
                Brands can sponsor entire seasons, co-create custom skits, or integrate products into character storylines.
              </p>
            </div>
          </div>

          <a
            href="#contact"
            className="px-5 py-2.5 rounded-lg bg-[#FACC15] hover:bg-white text-black font-display font-extrabold text-xs tracking-wider uppercase transition-colors shadow-md"
          >
            SPONSOR A SERIES
          </a>
        </div>

      </div>
    </section>
  );
};
