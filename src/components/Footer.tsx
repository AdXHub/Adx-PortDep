import React, { useState } from 'react';
import { AdXLogo } from './AdXLogo';
import { Sparkles, ArrowUp, Zap, Heart, Laugh } from 'lucide-react';
import { BRAND_CONFIG, PLATFORMS_DATA } from '../data/portfolioData';

interface FooterProps {
  onChaosClick?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onChaosClick }) => {
  const [easterEggActive, setEasterEggActive] = useState(false);
  const [easterEggQuote, setEasterEggQuote] = useState('');

  const easterEggQuotes = [
    "You clicked the secret jutsu! Power level is now over 9,000.",
    "Plot Armour check: 100% defective. Proceed with caution.",
    "AdX Rule #1: If it's ridiculous, it gets 3 sequels.",
    "Glasses push activated: The answer is 42.",
    "Somewhere, an anime protagonist is eating bread while running."
  ];

  const handleEasterEgg = () => {
    const randomQuote = easterEggQuotes[Math.floor(Math.random() * easterEggQuotes.length)];
    setEasterEggQuote(randomQuote);
    setEasterEggActive(true);
    setTimeout(() => setEasterEggActive(false), 3500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#07070D] border-t border-white/10 pt-16 pb-12 overflow-hidden text-white">
      {/* Background Graphic watermark */}
      <div className="absolute inset-0 bg-halftone opacity-25 pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-[#7C3AED]/15 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand & Tagline (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <AdXLogo size="lg" />
            
            <p className="font-impact text-sm sm:text-base tracking-widest text-[#FACC15] uppercase">
              {BRAND_CONFIG.tagline}
            </p>

            <p className="font-body text-sm text-white/70 max-w-sm leading-relaxed">
              An eccentric anime creator brand built around laughter, controlled chaos, and unhinged cultural commentary.
            </p>

            {/* Easter Egg Trigger Button */}
            <div className="pt-2">
              <button
                onClick={handleEasterEgg}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 hover:bg-[#EC4899]/20 border border-white/15 hover:border-[#EC4899] text-xs font-mono text-white/80 transition-all cursor-pointer"
                title="Click for hidden AdX jutsu easter egg"
              >
                <Zap className="w-3.5 h-3.5 text-[#FACC15]" />
                <span>SECRET JUTSU (CLICK ME)</span>
              </button>

              {easterEggActive && (
                <div className="mt-2 p-2.5 rounded-xl bg-black/90 border border-[#EC4899] text-xs text-[#EC4899] font-body italic animate-in fade-in zoom-in">
                  "{easterEggQuote}"
                </div>
              )}
            </div>
          </div>

          {/* Col 2: Navigation (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-display font-black text-xs text-white/50 tracking-widest uppercase">
              UNIVERSE MAP
            </h4>
            <ul className="space-y-2 text-sm font-display font-bold uppercase tracking-wider">
              <li>
                <a href="#work" className="text-white/80 hover:text-[#22D3EE] transition-colors">
                  Featured Work
                </a>
              </li>
              <li>
                <a href="#showreel" className="text-white/80 hover:text-[#22D3EE] transition-colors">
                  30s Showreel
                </a>
              </li>
              <li>
                <a href="#about" className="text-white/80 hover:text-[#22D3EE] transition-colors">
                  About AdX
                </a>
              </li>
              <li>
                <a href="#universe" className="text-white/80 hover:text-[#22D3EE] transition-colors">
                  Recurring Formats
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/80 hover:text-[#22D3EE] transition-colors">
                  Services & Capabilities
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/80 hover:text-[#22D3EE] transition-colors">
                  Contact & Bookings
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Social Feeds & Direct Connect (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-display font-black text-xs text-white/50 tracking-widest uppercase">
              PLATFORM NETWORK
            </h4>
            
            <div className="flex flex-wrap gap-2 pt-1">
              {PLATFORMS_DATA.map((plat) => (
                <a
                  key={plat.id}
                  href={`#platform-${plat.id}`}
                  className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#22D3EE] text-xs font-display font-bold text-white/90 transition-colors"
                >
                  {plat.name}
                </a>
              ))}
            </div>

            <div className="pt-4">
              <span className="block font-impact text-xs text-white/50 uppercase tracking-wider mb-1">
                MANAGEMENT & BOOKINGS
              </span>
              <span className="font-mono text-xs text-[#22D3EE]">
                {BRAND_CONFIG.emailPlaceholder}
              </span>
            </div>
          </div>

        </div>

        {/* Humorous Legal Disclaimer & Copyright (Section 25) */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-white/55 font-body">
          
          <div className="max-w-2xl space-y-1 text-center md:text-left">
            <p className="italic">
              "{BRAND_CONFIG.legalDisclaimer}"
            </p>
            <p className="font-mono text-[11px] text-white/40">
              © {BRAND_CONFIG.copyrightYear} <strong className="text-white font-bold">{BRAND_CONFIG.name}</strong>. All rights reserved. Built with anime energy, zero filler, and controlled chaos.
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="p-3 rounded-xl bg-white/5 hover:bg-[#7C3AED] text-white/80 hover:text-white transition-all border border-white/10 hover:border-[#7C3AED] flex items-center gap-2 font-display font-bold text-xs uppercase tracking-wider shrink-0 cursor-pointer"
            aria-label="Back to Top"
          >
            <span>TOP OF PAGE</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>

        </div>

      </div>
    </footer>
  );
};
