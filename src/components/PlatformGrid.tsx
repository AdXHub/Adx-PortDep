import React, { useState } from 'react';
import { PLATFORMS_DATA } from '../data/portfolioData';
import { Film, Camera, Tv, Share2, Briefcase, ExternalLink, Check, Copy, Compass } from 'lucide-react';

export const PlatformGrid: React.FC = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const getPlatformIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case 'tiktok': return <Film className="w-7 h-7 text-[#22D3EE]" />;
      case 'instagram': return <Camera className="w-7 h-7 text-[#EC4899]" />;
      case 'youtube': return <Tv className="w-7 h-7 text-[#FACC15]" />;
      case 'facebook': return <Share2 className="w-7 h-7 text-[#7C3AED]" />;
      case 'linkedin': return <Briefcase className="w-7 h-7 text-[#22D3EE]" />;
      default: return <Compass className="w-7 h-7" />;
    }
  };

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section className="relative py-24 md:py-32 bg-[#0B0B12] overflow-hidden border-t border-white/5">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-halftone opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full bg-[#7C3AED]/10 blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-[#22D3EE]/40 mb-4 backdrop-blur-md">
            <Compass className="w-3.5 h-3.5 text-[#22D3EE]" />
            <span className="font-impact text-xs tracking-widest uppercase text-[#22D3EE]">
              MULTI-PLATFORM BROADCAST ECOSYSTEM
            </span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl tracking-tighter uppercase text-white mb-4">
            FIND <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#22D3EE] via-white to-[#7C3AED]">AdX IN THE WILD</span>
          </h2>

          <p className="font-body text-base sm:text-xl text-white/75 font-normal max-w-2xl">
            Where anime absurdity lives daily. Pick your favorite feed and enter the conversation.
          </p>
        </div>

        {/* 5 Platforms Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {PLATFORMS_DATA.map((plat) => (
            <div
              key={plat.id}
              id={`platform-${plat.id}`}
              className="group relative flex flex-col justify-between p-6 rounded-2xl bg-[#11111E] border-2 border-white/10 hover:border-[#7C3AED] transition-all duration-300 hover:shadow-[0_15px_30px_rgba(124,58,237,0.3)] hover:-translate-y-1.5"
            >
              {/* Halftone BG */}
              <div className="absolute inset-0 bg-halftone opacity-15 group-hover:opacity-30 transition-opacity" />

              <div>
                {/* Platform Icon & Verified Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {getPlatformIcon(plat.name)}
                  </div>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-impact tracking-wider uppercase bg-[#22D3EE]/15 text-[#22D3EE] border border-[#22D3EE]/30">
                    VERIFIED
                  </span>
                </div>

                {/* Name & Handle */}
                <h3 className="font-display font-black text-xl text-white uppercase mb-1">
                  {plat.name}
                </h3>
                
                <div className="flex items-center gap-2 mb-3">
                  <span className="font-mono text-xs text-[#FACC15]">
                    {plat.handlePlaceholder}
                  </span>
                  <button
                    onClick={() => handleCopy(plat.id, plat.handlePlaceholder)}
                    className="text-white/40 hover:text-white transition-colors"
                    title="Copy Handle"
                  >
                    {copiedId === plat.id ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                {/* Follower Placeholder */}
                <div className="inline-block px-2.5 py-1 rounded-md bg-white/5 border border-white/10 font-mono text-xs font-semibold text-white/90 mb-4">
                  {plat.followerCountPlaceholder}
                </div>

                {/* Description */}
                <p className="font-body text-xs text-white/70 leading-relaxed mb-6">
                  {plat.description}
                </p>
              </div>

              {/* Action Button */}
              <a
                href={`#${plat.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  alert(`External link placeholder: ${plat.externalLinkPlaceholder}`);
                }}
                className="inline-flex items-center justify-between w-full pt-3 border-t border-white/10 text-xs font-display font-black tracking-wider uppercase text-white hover:text-[#22D3EE] transition-colors group-hover:border-white/25"
              >
                <span>{plat.primaryAction}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          ))}
        </div>

        {/* Note on placeholders as requested in Section 32 */}
        <div className="mt-8 text-center">
          <p className="font-mono text-[11px] text-white/40">
            * Follower stats and external channel URLs utilize editable placeholders [XXK FOLLOWERS] ready for live handles.
          </p>
        </div>

      </div>
    </section>
  );
};
