import React, { useState } from 'react';
import { AdXLogo } from './AdXLogo';
import { Sparkles, Laugh, Compass, Tv, Zap, X, Award, CheckCircle2, ChevronRight } from 'lucide-react';
import { BRAND_CONFIG } from '../data/portfolioData';

export const About: React.FC = () => {
  const [showDossier, setShowDossier] = useState(false);

  return (
    <section id="about" className="relative py-24 md:py-32 bg-[#0E0E18] overflow-hidden border-t border-white/5">
      {/* Background Graphic elements */}
      <div className="absolute inset-0 bg-halftone opacity-25 pointer-events-none" />
      <div className="absolute top-1/4 -left-32 w-80 h-80 rounded-full bg-[#7C3AED]/20 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full bg-[#22D3EE]/20 blur-[130px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header Pill */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-[#22D3EE]/40 mb-3 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#22D3EE]" />
            <span className="font-impact text-xs tracking-widest uppercase text-[#22D3EE]">
              ORIGIN STORY & CREATOR IDENTITY
            </span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl tracking-tighter uppercase text-white">
            THE HUMAN BEHIND <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#22D3EE] via-[#7C3AED] to-[#EC4899]">THE CHAOS</span>
          </h2>
        </div>

        {/* 2-Column Layout: Creator Anime Photograph Frame (left) & Narrative (right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Creator Portrait Card with Studio / Plant Aesthetic (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md rounded-3xl overflow-hidden bg-gradient-to-b from-[#1E1B38] to-[#11111E] border-2 border-[#7C3AED]/50 shadow-[0_20px_60px_rgba(0,0,0,0.8),0_0_40px_rgba(124,58,237,0.25)] p-2">
              
              {/* Halftone Texture & Anime Frame */}
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-[#161226] flex items-center justify-center group">
                
                {/* Visual Creator Illustration inspired by Miles Chi (warm studio setting, green plants, warm lighting, durag/beanie, braids, tan shirt, rings) */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B12] via-transparent to-transparent z-10" />

                <svg 
                  viewBox="0 0 400 520" 
                  className="w-full h-full object-cover relative z-0"
                  aria-label="Creator portrait: Miles Chi (AdX)"
                >
                  <defs>
                    <linearGradient id="warmStudioBg" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#2E2042" />
                      <stop offset="50%" stopColor="#1E162B" />
                      <stop offset="100%" stopColor="#100D1A" />
                    </linearGradient>
                    <linearGradient id="skinGradAbout" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#966147" />
                      <stop offset="100%" stopColor="#673922" />
                    </linearGradient>
                  </defs>

                  {/* Studio Warm Background & Hanging Vines/Plants */}
                  <rect width="400" height="520" fill="url(#warmStudioBg)" />
                  
                  {/* Subtle Studio Window Warm Light */}
                  <rect x="250" y="30" width="120" height="180" rx="8" fill="#FDE68A" opacity="0.1" />
                  <line x1="310" y1="30" x2="310" y2="210" stroke="#FDE68A" strokeWidth="2" opacity="0.2" />
                  <line x1="250" y1="120" x2="370" y2="120" stroke="#FDE68A" strokeWidth="2" opacity="0.2" />

                  {/* Hanging Anime Plant Leaves (Top left & right) */}
                  <path d="M 0 0 Q 60 50 80 120 Q 50 140 10 70 Z" fill="#15803D" opacity="0.5" />
                  <path d="M 20 0 Q 90 80 110 160 Q 70 170 30 110 Z" fill="#22C55E" opacity="0.4" />
                  <path d="M 380 0 Q 340 70 320 140 Q 360 150 400 80 Z" fill="#16A34A" opacity="0.4" />

                  {/* Character Body & Tan Shirt */}
                  <path 
                    d="M 80 520 L 110 380 L 160 340 L 200 355 L 240 340 L 290 380 L 320 520 Z" 
                    fill="#C0A584" 
                    stroke="#261A10" 
                    strokeWidth="3" 
                  />
                  <path d="M 175 350 L 200 400 L 225 350" fill="none" stroke="#261A10" strokeWidth="2.5" />
                  <line x1="200" y1="400" x2="200" y2="520" stroke="#261A10" strokeWidth="2" />
                  {/* Neck */}
                  <path d="M 175 300 L 175 350 Q 200 365 225 350 L 225 300 Z" fill="url(#skinGradAbout)" stroke="#261A10" strokeWidth="2.5" />

                  {/* Head */}
                  <path 
                    d="M 140 210 C 135 290, 175 330, 200 330 C 225 330, 265 290, 260 210 C 260 150, 140 150, 140 210 Z" 
                    fill="url(#skinGradAbout)" 
                    stroke="#261A10" 
                    strokeWidth="2.5" 
                  />

                  {/* Beard & Moustache */}
                  <path d="M 165 290 C 175 320, 200 328, 200 328 C 200 328, 225 320, 235 290 C 220 300, 200 302, 175 298 Z" fill="#14141A" />
                  <path d="M 185 280 Q 200 285 215 280" stroke="#14141A" strokeWidth="2.5" fill="none" strokeLinecap="round" />

                  {/* Charismatic Smirk */}
                  <path d="M 182 268 Q 202 282 220 270" fill="none" stroke="#FFFFFF" strokeWidth="3.5" strokeLinecap="round" />
                  <path d="M 182 268 Q 202 282 220 270" fill="none" stroke="#261A10" strokeWidth="1.5" strokeLinecap="round" />

                  {/* Nose */}
                  <path d="M 197 235 L 203 248 L 195 250" fill="none" stroke="#261A10" strokeWidth="2" strokeLinecap="round" />

                  {/* Anime Eyes */}
                  {/* Left Eye */}
                  <ellipse cx="172" cy="215" rx="14" ry="11" fill="#FFFFFF" stroke="#261A10" strokeWidth="2" />
                  <ellipse cx="174" cy="215" rx="8" ry="9" fill="#3D2012" />
                  <circle cx="176" cy="212" r="3" fill="#FFFFFF" />
                  <path d="M 158 198 Q 174 192 188 200" fill="none" stroke="#101018" strokeWidth="3.5" strokeLinecap="round" />

                  {/* Right Eye */}
                  <ellipse cx="228" cy="215" rx="14" ry="11" fill="#FFFFFF" stroke="#261A10" strokeWidth="2" />
                  <ellipse cx="226" cy="215" rx="8" ry="9" fill="#3D2012" />
                  <circle cx="228" cy="212" r="3" fill="#FFFFFF" />
                  <path d="M 212 200 Q 226 192 242 198" fill="none" stroke="#101018" strokeWidth="3.5" strokeLinecap="round" />

                  {/* Beanie / Durag */}
                  <path d="M 132 180 C 130 90, 270 90, 268 180 C 255 190, 145 190, 132 180 Z" fill="#181824" stroke="#0B0B12" strokeWidth="3" />
                  <path d="M 132 178 Q 200 186 268 178" fill="none" stroke="#2C2C3E" strokeWidth="2.5" />

                  {/* Braided Locs with Gold/Silver Beads */}
                  <path d="M 144 185 Q 136 220 140 255" fill="none" stroke="#0F0F16" strokeWidth="6" strokeLinecap="round" />
                  <circle cx="138" cy="225" r="2.5" fill="#FACC15" />
                  <path d="M 156 190 Q 148 230 152 265" fill="none" stroke="#0F0F16" strokeWidth="6" strokeLinecap="round" />
                  <circle cx="150" cy="240" r="2.5" fill="#E2E8F0" />
                  
                  <path d="M 256 185 Q 264 220 260 255" fill="none" stroke="#0F0F16" strokeWidth="6" strokeLinecap="round" />
                  <circle cx="262" cy="225" r="2.5" fill="#FACC15" />
                  <path d="M 244 190 Q 252 230 248 265" fill="none" stroke="#0F0F16" strokeWidth="6" strokeLinecap="round" />
                  <circle cx="250" cy="240" r="2.5" fill="#E2E8F0" />

                  {/* Thinking hand pose with silver rings */}
                  <g transform="translate(180, 290)">
                    <path d="M 0 30 Q 20 15 35 35 Q 25 60 0 55 Z" fill="url(#skinGradAbout)" stroke="#261A10" strokeWidth="2" />
                    <rect x="14" y="20" width="11" height="6" rx="1.5" fill="#E2E8F0" stroke="#64748B" strokeWidth="1" />
                    <rect x="26" y="27" width="10" height="5" rx="1.5" fill="#CBD5E1" stroke="#475569" strokeWidth="1" />
                  </g>
                </svg>

                {/* Corner Freeze-Frame Stamp */}
                <div className="absolute top-4 left-4 z-20 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#FACC15]" />
                  <span className="font-impact text-xs tracking-wider text-white">
                    [PROFILE IMAGE] · MILES CHI
                  </span>
                </div>

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-4 left-4 right-4 z-20 p-3 rounded-xl bg-black/80 backdrop-blur-md border border-[#7C3AED]/40 flex items-center justify-between">
                  <div>
                    <h4 className="font-display font-black text-sm text-white">Miles Chi</h4>
                    <p className="font-body text-xs text-[#22D3EE]">Creator & Executive Director, AdX</p>
                  </div>
                  <span className="font-impact text-xs text-[#FACC15] bg-[#FACC15]/20 px-2 py-0.5 rounded">
                    40% JESTER
                  </span>
                </div>

              </div>

            </div>
          </div>

          {/* Right Column: Narrative Copy & Brand Archetype Breakdown (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Primary Copy as specified in prompt */}
            <div className="space-y-4 font-body text-base sm:text-lg text-white/85 leading-relaxed">
              <p>
                I'm the creator behind <strong className="text-white font-semibold">AdX</strong> — an anime-focused entertainment brand built around <span className="text-[#FACC15] font-semibold">laughter, wit and eccentric storytelling</span>.
              </p>
              
              <p>
                I take the things anime fans already obsess over — characters, tropes, ridiculous logic, dramatic moments and fandom debates — and turn them into comedy-driven digital entertainment.
              </p>

              {/* Intersection Banner Callout */}
              <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#7C3AED]/20 via-[#22D3EE]/10 to-[#EC4899]/10 border border-[#7C3AED]/40 my-4 shadow-lg">
                <span className="block font-impact text-xs tracking-widest text-[#22D3EE] uppercase mb-1">
                  THE FORMULA & INTERSECTION
                </span>
                <p className="font-display font-black text-base sm:text-xl text-white tracking-tight uppercase">
                  ANIME × COMEDY × STORYTELLING × CREATOR CULTURE
                </p>
              </div>

              <p className="font-display font-bold text-lg sm:text-xl text-white pt-1">
                My goal isn't simply to talk about anime. <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FACC15] to-[#22D3EE]">
                  It's to build an entertainment universe around it.
                </span>
              </p>
            </div>

            {/* Personality Formula Bar (40% Jester, 25% Creator, 20% Anime Superfan, 15% Controlled Chaos) */}
            <div className="p-5 rounded-2xl bg-[#11111E] border border-white/10 space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-impact text-xs tracking-widest text-white/70 uppercase">
                  BRAND PERSONALITY FORMULA
                </span>
                <span className="font-display font-black text-xs text-[#FACC15]">
                  100% UNAPOLOGETIC
                </span>
              </div>

              {/* Segmented Progress Bar */}
              <div className="w-full h-3 rounded-full bg-white/10 overflow-hidden flex">
                <div className="h-full bg-[#FACC15]" style={{ width: '40%' }} title="40% Jester" />
                <div className="h-full bg-[#7C3AED]" style={{ width: '25%' }} title="25% Creator" />
                <div className="h-full bg-[#22D3EE]" style={{ width: '20%' }} title="20% Anime Superfan" />
                <div className="h-full bg-[#EC4899]" style={{ width: '15%' }} title="15% Controlled Chaos" />
              </div>

              {/* Legend */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 text-xs font-body">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FACC15] shrink-0" />
                  <span className="text-white/80"><strong>40%</strong> Jester</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#7C3AED] shrink-0" />
                  <span className="text-white/80"><strong>25%</strong> Creator</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#22D3EE] shrink-0" />
                  <span className="text-white/80"><strong>20%</strong> Superfan</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#EC4899] shrink-0" />
                  <span className="text-white/80"><strong>15%</strong> Chaos</span>
                </div>
              </div>
            </div>

            {/* CTA: MORE ABOUT AdX */}
            <div className="pt-2">
              <button
                onClick={() => setShowDossier(true)}
                id="about-more-cta"
                className="group inline-flex items-center gap-3 px-6 py-3.5 rounded-xl bg-white/5 hover:bg-[#7C3AED] text-white font-display font-extrabold text-xs tracking-wider uppercase border border-white/20 hover:border-[#7C3AED] transition-all duration-300 shadow-md hover:shadow-[0_0_25px_rgba(124,58,237,0.6)] cursor-pointer"
              >
                <span>MORE ABOUT AdX</span>
                <ChevronRight className="w-4 h-4 text-[#22D3EE] group-hover:text-white group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>

        </div>

      </div>

      {/* Interactive Creator Lore & Dossier Modal */}
      {showDossier && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl animate-in fade-in"
          onClick={() => setShowDossier(false)}
        >
          <div 
            className="relative w-full max-w-2xl bg-[#11111E] border-2 border-[#7C3AED] rounded-2xl p-6 sm:p-8 text-white shadow-[0_0_50px_rgba(124,58,237,0.4)] max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
              <div className="flex items-center gap-2">
                <AdXLogo size="sm" />
                <span className="font-impact text-xs tracking-widest text-[#FACC15] ml-2">
                  CONFIDENTIAL CREATOR DOSSIER
                </span>
              </div>
              <button 
                onClick={() => setShowDossier(false)}
                className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-white/70 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-6 font-body text-sm text-white/80">
              <div>
                <h4 className="font-display font-black text-sm text-[#22D3EE] uppercase tracking-wider mb-2">
                  THE ADX PHILOSOPHY
                </h4>
                <p className="leading-relaxed">
                  "Most anime commentary either takes things way too seriously or relies on low-effort regurgitated reaction clips. AdX exists to create genuine comedic theatre around the medium we adore. If a scene made no sense, we don't just complain — we put it on trial with judge robes, evidence files, and cross-examinations."
                </p>
              </div>

              <div>
                <h4 className="font-display font-black text-sm text-[#FACC15] uppercase tracking-wider mb-2">
                  TOP 3 TROPES PERMANENTLY UNDER INVESTIGATION
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-[#FACC15] font-black">01.</span>
                    <span><strong>The Mid-Air Monologue:</strong> Talking for 6 minutes while falling from a 10-foot ledge.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#FACC15] font-black">02.</span>
                    <span><strong>The Window Seat Destiny:</strong> 99.8% of anime protagonists sit in the second-to-last row by the window.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#FACC15] font-black">03.</span>
                    <span><strong>The Power of Friendship CPR:</strong> Defeating an ancient god of destruction because your buddy cheered from the sidelines.</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-display font-black text-sm text-[#EC4899] uppercase tracking-wider mb-2">
                  EQUIPMENT & PRODUCTION STACK
                </h4>
                <p className="text-white/70 text-xs">
                  Sony FX Cinema line · Shure SM7B · DaVinci Resolve Studio · Custom Manga Motion VFX Pipeline · 3 Shots of Espresso per Recording Session.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/10 flex justify-end">
              <button
                onClick={() => setShowDossier(false)}
                className="px-5 py-2 rounded-lg bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-display font-bold text-xs uppercase tracking-wider"
              >
                CLOSE DOSSIER
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
