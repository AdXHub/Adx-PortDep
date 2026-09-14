import React, { useState, useEffect } from 'react';
import { Sparkles, Play, ArrowRight, ShieldAlert, Zap, MessageSquare, Layers, Film, User } from 'lucide-react';
import { AdXLogo } from './AdXLogo';
import { WhyPickOneLanePoster, AnimeFansWorkforcePoster } from './AdXMediaAssets';

interface HeroProps {
  onWatchClick: () => void;
  onWorkClick: () => void;
  chaosMode: boolean;
}

export const Hero: React.FC<HeroProps> = ({ onWatchClick, onWorkClick, chaosMode }) => {
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const [revealedStep, setRevealedStep] = useState(0);
  const [activeVisualTab, setActiveVisualTab] = useState<'poster' | 'skit' | 'portrait'>('poster');

  // Sequential word reveal animation on page load (60fps feel)
  useEffect(() => {
    const timer1 = setTimeout(() => setRevealedStep(1), 150); // "I TURN"
    const timer2 = setTimeout(() => setRevealedStep(2), 400); // "ANIME"
    const timer3 = setTimeout(() => setRevealedStep(3), 650); // "CHAOS"
    const timer4 = setTimeout(() => setRevealedStep(4), 950); // "INTO CONTENT."

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = (clientX - left) / width - 0.5;
    const y = (clientY - top) / height - 0.5;
    setMouseOffset({ x: x * 20, y: y * 20 });
  };

  return (
    <section 
      id="home"
      onMouseMove={handleMouseMove}
      className="relative min-h-screen pt-28 pb-20 md:pt-36 md:pb-28 flex items-center justify-center overflow-hidden bg-[#0B0B12]"
    >
      {/* Background Graphic Architecture: Giant Translucent X Watermark */}
      <div 
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-10 overflow-hidden"
        style={{
          transform: `translate3d(${mouseOffset.x * -0.5}px, ${mouseOffset.y * -0.5}px, 0)`,
        }}
        aria-hidden="true"
      >
        <span className="font-display font-black text-[35vw] text-transparent bg-clip-text bg-gradient-to-br from-[#7C3AED] via-[#22D3EE] to-white leading-none blur-[1px]">
          X
        </span>
      </div>

      {/* Atmospheric Lighting Orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-[#7C3AED]/25 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-[#22D3EE]/20 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#7C3AED]/10 blur-[150px] pointer-events-none" />

      {/* Manga Speed Lines Overlay (accentuated in chaos mode) */}
      <div 
        className={`absolute inset-0 pointer-events-none transition-opacity duration-500 ${
          chaosMode ? 'opacity-40' : 'opacity-15'
        }`}
        style={{
          backgroundImage: 'radial-gradient(circle at center, transparent 30%, rgba(255, 255, 255, 0.05) 90%), repeating-conic-gradient(from 0deg, rgba(255, 255, 255, 0.03) 0deg 1deg, transparent 1deg 4deg)',
        }}
      />

      {/* Halftone Texture Grid */}
      <div className="absolute inset-0 bg-halftone opacity-30 pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines, Sequential Reveal & Actions (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Top Brand Pill & Live Status */}
            <div className="flex flex-wrap items-center gap-2 mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-[#22D3EE] animate-pulse" />
                <span className="font-display font-extrabold text-[11px] tracking-wider uppercase text-white/90">
                  OFFICIAL CREATOR PORTFOLIO
                </span>
                <span className="text-white/30">•</span>
                <span className="font-impact text-xs tracking-widest text-[#FACC15]">
                  ANIME × COMEDY × CHAOS
                </span>
              </div>

              <button
                onClick={onWatchClick}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#7C3AED]/20 hover:bg-[#7C3AED]/40 border border-[#7C3AED]/50 text-[#22D3EE] font-impact text-xs tracking-wider uppercase backdrop-blur-md transition-all hover:scale-105 cursor-pointer"
              >
                <Sparkles className="w-3 h-3 text-[#FACC15]" />
                <span>NEW REEL: NIKE x ONE PIECE</span>
              </button>
            </div>

            {/* Sequential Animated Headline */}
            <h1 className="font-display font-black text-4xl sm:text-6xl xl:text-7xl tracking-tighter leading-[0.95] uppercase mb-6 text-white">
              {/* Word 1: I TURN */}
              <span 
                className={`inline-block mr-3 transition-all duration-500 transform ${
                  revealedStep >= 1 
                    ? 'opacity-100 translate-y-0 filter-none' 
                    : 'opacity-0 translate-y-6 blur-sm'
                }`}
              >
                I TURN
              </span>

              {/* Word 2: ANIME */}
              <span 
                className={`inline-block mr-3 text-transparent bg-clip-text bg-gradient-to-r from-[#22D3EE] to-white transition-all duration-500 transform ${
                  revealedStep >= 2 
                    ? 'opacity-100 translate-y-0 filter-none' 
                    : 'opacity-0 translate-y-6 blur-sm'
                }`}
              >
                ANIME
              </span>

              <br />

              {/* Word 3: CHAOS */}
              <span 
                className={`relative inline-block mr-3 transition-all duration-500 transform ${
                  revealedStep >= 3 
                    ? 'opacity-100 translate-y-0 filter-none' 
                    : 'opacity-0 translate-y-6 blur-sm'
                }`}
              >
                <span className="text-[#FACC15] drop-shadow-[0_0_25px_rgba(250,204,21,0.5)]">
                  CHAOS
                </span>
                {/* Comic sound stamp */}
                <span className="absolute -top-3 -right-6 font-impact text-xs sm:text-sm text-[#EC4899] rotate-12 tracking-widest opacity-90 hidden sm:inline-block">
                  ドドド
                </span>
              </span>

              {/* Word 4: INTO CONTENT. */}
              <span 
                className={`inline-block transition-all duration-500 transform ${
                  revealedStep >= 4 
                    ? 'opacity-100 translate-y-0 filter-none' 
                    : 'opacity-0 translate-y-6 blur-sm'
                }`}
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/70">
                  INTO CONTENT.
                </span>
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="font-display font-extrabold text-lg sm:text-xl text-[#22D3EE] tracking-tight mb-4 flex items-center gap-2">
              <Zap className="w-5 h-5 text-[#FACC15] shrink-0" />
              <span>Comedy. Commentary. Characters. Controlled chaos.</span>
            </p>

            {/* Secondary Text */}
            <p className="font-body text-base sm:text-lg text-white/75 max-w-2xl leading-relaxed mb-8 font-normal">
              <strong className="text-white font-semibold">AdX</strong> is an anime entertainment brand creating witty, eccentric and binge-worthy digital content for audiences who take anime seriously — but not themselves.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              {/* Primary CTA: WATCH THE CHAOS */}
              <button
                onClick={onWatchClick}
                data-cursor="play"
                id="hero-watch-chaos-cta"
                className="group relative inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-lg bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-display font-extrabold text-sm tracking-wider uppercase shadow-[0_0_30px_rgba(124,58,237,0.5)] hover:shadow-[0_0_40px_rgba(124,58,237,0.8)] transition-all duration-200 cursor-pointer border border-[#A855F7]/50 hover:-translate-y-0.5"
              >
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="w-3.5 h-3.5 fill-white ml-0.5" />
                </div>
                <span>WATCH THE CHAOS</span>
              </button>

              {/* Secondary CTA: WORK WITH AdX */}
              <button
                onClick={onWorkClick}
                data-cursor="pointer"
                id="hero-work-with-adx-cta"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-white/5 hover:bg-white/10 text-white font-display font-extrabold text-sm tracking-wider uppercase border border-white/20 hover:border-[#22D3EE]/80 transition-all duration-200 cursor-pointer backdrop-blur-sm group"
              >
                <span>WORK WITH AdX</span>
                <ArrowRight className="w-4 h-4 text-[#22D3EE] group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Quick Micro-Proof Bar */}
            <div className="mt-10 pt-6 border-t border-white/10 flex flex-wrap items-center gap-6 text-xs text-white/60 font-body">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#7C3AED]" />
                <span className="text-white font-medium">[XXM] Views</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#22D3EE]" />
                <span className="text-white font-medium">Original IP Formats</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#FACC15]" />
                <span className="text-white font-medium">Brand Collaborations Ready</span>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Composition with Original Anime Creator Character (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div 
              className="relative mx-auto max-w-md lg:max-w-none transition-transform duration-300 ease-out"
              style={{
                transform: `perspective(1000px) rotateY(${mouseOffset.x * 0.5}deg) rotateX(${mouseOffset.y * -0.5}deg)`,
              }}
            >
              {/* Backing Manga Frame */}
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-b from-[#131322] to-[#0B0B12] border-2 border-[#7C3AED]/50 shadow-[0_20px_60px_rgba(0,0,0,0.8),0_0_40px_rgba(124,58,237,0.25)] p-2">
                
                {/* Top Interactive Artwork Tabs Bar */}
                <div className="flex items-center justify-between px-2 py-2 border-b border-white/10 mb-2 bg-[#0B0B12]/90 flex-wrap gap-2">
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => setActiveVisualTab('poster')}
                      className={`px-2.5 py-1 rounded text-[11px] font-impact uppercase tracking-wider transition-all cursor-pointer ${
                        activeVisualTab === 'poster'
                          ? 'bg-amber-500 text-black shadow-[0_0_10px_rgba(245,158,11,0.5)]'
                          : 'bg-white/5 text-white/70 hover:text-white'
                      }`}
                    >
                      WHY PICK ONE LANE?
                    </button>

                    <button
                      onClick={() => setActiveVisualTab('skit')}
                      className={`px-2.5 py-1 rounded text-[11px] font-impact uppercase tracking-wider transition-all cursor-pointer ${
                        activeVisualTab === 'skit'
                          ? 'bg-yellow-400 text-black shadow-[0_0_10px_rgba(250,204,21,0.5)]'
                          : 'bg-white/5 text-white/70 hover:text-white'
                      }`}
                    >
                      VIRAL SKIT
                    </button>

                    <button
                      onClick={() => setActiveVisualTab('portrait')}
                      className={`px-2.5 py-1 rounded text-[11px] font-impact uppercase tracking-wider transition-all cursor-pointer ${
                        activeVisualTab === 'portrait'
                          ? 'bg-[#7C3AED] text-white shadow-[0_0_10px_rgba(124,58,237,0.5)]'
                          : 'bg-white/5 text-white/70 hover:text-white'
                      }`}
                    >
                      CREATOR
                    </button>
                  </div>

                  <span className="font-mono text-[10px] text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/30 font-bold hidden sm:inline-block">
                    OFFICIAL ASSETS
                  </span>
                </div>

                {/* Character Frame & Original Anime Art Composition */}
                <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-gradient-to-t from-[#0B0B12] via-[#1A1A2E] to-[#251842] flex items-center justify-center group">
                  {activeVisualTab === 'poster' && (
                    <WhyPickOneLanePoster className="w-full h-full" />
                  )}
                  {activeVisualTab === 'skit' && (
                    <AnimeFansWorkforcePoster className="w-full h-full" />
                  )}
                  {activeVisualTab === 'portrait' && (
                    <div className="w-full h-full flex items-end justify-center relative">
                  
                  {/* Glowing background mandala & speed lines */}
                  <div className="absolute inset-0 bg-manga-grid opacity-20" />
                  <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-64 h-64 rounded-full bg-gradient-to-b from-[#7C3AED]/40 to-transparent blur-2xl" />

                  {/* Character Illustration SVG: Anime Creator Miles Chi (Black durag/beanie, braids, warm witty smile, tan overshirt, silver rings) */}
                  <svg 
                    viewBox="0 0 500 620" 
                    className="w-full h-full object-contain relative z-10 filter drop-shadow-[0_15px_25px_rgba(0,0,0,0.9)]"
                    aria-label="Anime creator character portrait illustration"
                  >
                    <defs>
                      <linearGradient id="skinGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#8C583E" />
                        <stop offset="50%" stopColor="#75432B" />
                        <stop offset="100%" stopColor="#5A321E" />
                      </linearGradient>
                      <linearGradient id="shirtGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#C2A888" />
                        <stop offset="100%" stopColor="#9C8164" />
                      </linearGradient>
                      <linearGradient id="duragGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#252532" />
                        <stop offset="100%" stopColor="#111118" />
                      </linearGradient>
                      <linearGradient id="neonGlow" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#7C3AED" />
                        <stop offset="100%" stopColor="#22D3EE" />
                      </linearGradient>
                    </defs>

                    {/* Anime Speed Line Bursts from background */}
                    <g opacity="0.3" stroke="#22D3EE" strokeWidth="1.5">
                      <line x1="250" y1="200" x2="30" y2="40" strokeDasharray="6,4" />
                      <line x1="250" y1="200" x2="470" y2="50" strokeDasharray="8,4" />
                      <line x1="250" y1="200" x2="10" y2="280" />
                      <line x1="250" y1="200" x2="490" y2="290" />
                    </g>

                    {/* Torso & Tan Overshirt */}
                    <path 
                      d="M 120 620 L 140 450 L 190 400 L 250 420 L 310 400 L 360 450 L 380 620 Z" 
                      fill="url(#shirtGrad)" 
                      stroke="#3D2918" 
                      strokeWidth="3" 
                    />
                    {/* Shirt Collar & Buttons */}
                    <path d="M 210 410 L 250 470 L 290 410" fill="none" stroke="#3D2918" strokeWidth="3" />
                    <line x1="250" y1="470" x2="250" y2="620" stroke="#3D2918" strokeWidth="2.5" />
                    <circle cx="250" cy="510" r="4" fill="#3D2918" />
                    <circle cx="250" cy="560" r="4" fill="#3D2918" />
                    {/* Chest Pocket */}
                    <rect x="290" y="470" width="45" height="55" rx="3" fill="none" stroke="#3D2918" strokeWidth="2" />

                    {/* Neck */}
                    <path d="M 215 360 L 215 420 Q 250 435 285 420 L 285 360 Z" fill="url(#skinGrad)" stroke="#3D2918" strokeWidth="3" />

                    {/* Chin & Head Shape */}
                    <path 
                      d="M 175 250 C 170 340, 215 390, 250 390 C 285 390, 330 340, 325 250 C 325 180, 175 180, 175 250 Z" 
                      fill="url(#skinGrad)" 
                      stroke="#3D2918" 
                      strokeWidth="3" 
                    />

                    {/* Beard & Goatee (Charming Witty Groomed) */}
                    <path 
                      d="M 205 340 C 215 375, 250 385, 250 385 C 250 385, 285 375, 295 340 C 280 350, 250 355, 220 350 Z" 
                      fill="#15151B" 
                    />
                    <path d="M 230 330 C 240 334, 260 334, 270 330" stroke="#15151B" strokeWidth="3" fill="none" strokeLinecap="round" />

                    {/* Expressive Witty Smirk Mouth */}
                    <path d="M 225 315 Q 252 332 278 318" fill="none" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" />
                    <path d="M 225 315 Q 252 332 278 318" fill="none" stroke="#3D2918" strokeWidth="2" strokeLinecap="round" />

                    {/* Nose */}
                    <path d="M 246 270 L 253 285 L 244 288" fill="none" stroke="#3D2918" strokeWidth="2.5" strokeLinecap="round" />

                    {/* Anime Eyes with Warm Sparkle */}
                    {/* Left Eye */}
                    <ellipse cx="215" cy="245" rx="18" ry="14" fill="#FFFFFF" stroke="#3D2918" strokeWidth="2.5" />
                    <ellipse cx="217" cy="245" rx="10" ry="11" fill="#452718" />
                    <circle cx="219" cy="242" r="3.5" fill="#FFFFFF" />
                    <circle cx="214" cy="247" r="1.5" fill="#FFFFFF" />
                    {/* Eyebrow Left (expressive raise) */}
                    <path d="M 195 225 Q 215 218 235 228" fill="none" stroke="#181822" strokeWidth="4.5" strokeLinecap="round" />

                    {/* Right Eye */}
                    <ellipse cx="285" cy="245" rx="18" ry="14" fill="#FFFFFF" stroke="#3D2918" strokeWidth="2.5" />
                    <ellipse cx="283" cy="245" rx="10" ry="11" fill="#452718" />
                    <circle cx="285" cy="242" r="3.5" fill="#FFFFFF" />
                    <circle cx="280" cy="247" r="1.5" fill="#FFFFFF" />
                    {/* Eyebrow Right */}
                    <path d="M 265 228 Q 285 220 305 225" fill="none" stroke="#181822" strokeWidth="4.5" strokeLinecap="round" />

                    {/* Ears with Silver Studs */}
                    <path d="M 175 240 Q 160 255 174 275" fill="url(#skinGrad)" stroke="#3D2918" strokeWidth="2.5" />
                    <circle cx="169" cy="265" r="2.5" fill="#22D3EE" stroke="#FFFFFF" strokeWidth="1" />
                    <path d="M 325 240 Q 340 255 326 275" fill="url(#skinGrad)" stroke="#3D2918" strokeWidth="2.5" />
                    <circle cx="331" cy="265" r="2.5" fill="#22D3EE" stroke="#FFFFFF" strokeWidth="1" />

                    {/* Black Beanie / Durag Cap */}
                    <path 
                      d="M 165 215 C 160 110, 340 110, 335 215 C 320 225, 180 225, 165 215 Z" 
                      fill="url(#duragGrad)" 
                      stroke="#0B0B12" 
                      strokeWidth="3.5" 
                    />
                    <path d="M 165 210 Q 250 220 335 210" fill="none" stroke="#353545" strokeWidth="3" />

                    {/* Short Braided Locs with Gold/Silver Beads */}
                    {/* Left Braids */}
                    <path d="M 180 220 Q 170 260 175 300" fill="none" stroke="#111118" strokeWidth="7" strokeLinecap="round" />
                    <circle cx="173" cy="265" r="3" fill="#FACC15" />
                    <circle cx="176" cy="295" r="3" fill="#E2E8F0" />
                    <path d="M 195 225 Q 185 270 190 310" fill="none" stroke="#111118" strokeWidth="7" strokeLinecap="round" />
                    <circle cx="188" cy="280" r="3" fill="#FACC15" />

                    {/* Right Braids */}
                    <path d="M 320 220 Q 330 260 325 300" fill="none" stroke="#111118" strokeWidth="7" strokeLinecap="round" />
                    <circle cx="327" cy="265" r="3" fill="#FACC15" />
                    <circle cx="324" cy="295" r="3" fill="#E2E8F0" />
                    <path d="M 305 225 Q 315 270 310 310" fill="none" stroke="#111118" strokeWidth="7" strokeLinecap="round" />
                    <circle cx="312" cy="280" r="3" fill="#FACC15" />

                    {/* Hand with Silver Rings resting on chin (Signature Thinking Smirk pose) */}
                    <g transform="translate(225, 345)">
                      <path d="M 0 35 Q 25 15 45 40 Q 30 70 0 65 Z" fill="url(#skinGrad)" stroke="#3D2918" strokeWidth="2.5" />
                      {/* Fingers & Textured Silver Rings */}
                      <rect x="18" y="24" width="14" height="8" rx="2" fill="#E2E8F0" stroke="#718096" strokeWidth="1.5" />
                      <rect x="34" y="32" width="12" height="7" rx="2" fill="#CBD5E1" stroke="#475569" strokeWidth="1.5" />
                    </g>

                    {/* Neon Rim Lighting FX */}
                    <path d="M 165 210 Q 250 120 335 210" fill="none" stroke="url(#neonGlow)" strokeWidth="3" opacity="0.8" />
                  </svg>

                  {/* Creator Identification Badge at bottom */}
                  <div className="absolute bottom-3 left-3 right-3 z-20 p-3 rounded-lg bg-[#0B0B12]/90 border border-[#7C3AED]/40 backdrop-blur-md flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="font-display font-black text-sm text-white">Gus</span>
                        <span className="font-impact text-xs text-[#FACC15] bg-[#FACC15]/20 px-1.5 py-0.2 rounded">
                          AdX FOUNDER
                        </span>
                      </div>
                      <p className="text-[11px] text-white/70 font-body">Creator • Jester • Anime Obsessive</p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-[#7C3AED] flex items-center justify-center font-display font-black text-xs text-white shadow-[0_0_10px_#7C3AED]">
                      AdX
                    </div>
                  </div>
                    </div>
                  )}

                </div>

              </div>

              {/* Floating Content Card 1: Anime Logic Court */}
              <div 
                data-cursor="x"
                className="absolute -top-6 -left-6 z-30 p-3 rounded-xl bg-[#0B0B12]/95 border-2 border-[#FACC15] shadow-[0_10px_30px_rgba(0,0,0,0.8),0_0_20px_rgba(250,204,21,0.3)] backdrop-blur-md hidden sm:block animate-bounce [animation-duration:5s]"
              >
                <div className="flex items-center gap-2 mb-1">
                  <ShieldAlert className="w-4 h-4 text-[#FACC15]" />
                  <span className="font-impact text-xs tracking-wider text-[#FACC15]">CRIME DETECTED</span>
                </div>
                <p className="font-display font-black text-xs text-white">Shonen Monologue: 45 Mins</p>
                <span className="text-[10px] text-[#22D3EE] font-body">Status: GUILTY AS CHARGED</span>
              </div>

              {/* Floating Content Card 2: Plot Armour Gauge */}
              <div 
                data-cursor="x"
                className="absolute -bottom-6 -right-6 z-30 p-3.5 rounded-xl bg-[#0B0B12]/95 border-2 border-[#22D3EE] shadow-[0_10px_30px_rgba(0,0,0,0.8),0_0_20px_rgba(34,211,238,0.3)] backdrop-blur-md hidden sm:block"
              >
                <div className="flex items-center justify-between gap-4 mb-1.5">
                  <span className="font-impact text-xs tracking-widest text-[#22D3EE]">PLOT ARMOUR</span>
                  <span className="font-display font-black text-xs text-[#EC4899]">0% LEFT</span>
                </div>
                <div className="w-36 h-2 rounded-full bg-white/10 overflow-hidden">
                  <div className="w-1/12 h-full bg-gradient-to-r from-[#EC4899] to-[#FACC15] animate-pulse" />
                </div>
                <p className="text-[10px] text-white/60 font-body mt-1">"Nobody's armor survives AdX."</p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
