import React, { useState, useEffect } from 'react';
import { AdXLogo } from './AdXLogo';
import { Menu, X, Sparkles, Flame, Volume2, VolumeX } from 'lucide-react';

interface NavbarProps {
  chaosMode: boolean;
  onToggleChaos: () => void;
  audioActive: boolean;
  onToggleAudio: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  chaosMode,
  onToggleChaos,
  audioActive,
  onToggleAudio
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'work', 'about', 'universe', 'services', 'contact'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'HOME', href: '#home', id: 'home' },
    { label: 'WORK', href: '#work', id: 'work' },
    { label: 'ABOUT', href: '#about', id: 'about' },
    { label: 'ADX UNIVERSE', href: '#universe', id: 'universe' },
    { label: 'SERVICES', href: '#services', id: 'services' },
    { label: 'CONTACT', href: '#contact', id: 'contact' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      id="main-navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#0B0B12]/90 backdrop-blur-md border-b border-[#7C3AED]/30 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.8)]' 
          : 'bg-gradient-to-b from-[#0B0B12]/80 via-[#0B0B12]/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left: AdX Logo */}
        <a 
          href="#home" 
          onClick={(e) => { e.preventDefault(); handleLinkClick('#home'); }}
          className="flex items-center gap-2 group focus:outline-none focus:ring-2 focus:ring-[#7C3AED] rounded-lg p-1"
          aria-label="AdX Home"
        >
          <AdXLogo size="md" showTagline={false} />
          <span className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-impact uppercase tracking-widest text-[#22D3EE] bg-[#22D3EE]/10 border border-[#22D3EE]/30 rounded">
            CREATOR BRAND
          </span>
        </a>

        {/* Center/Right: Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className={`relative px-3 py-1.5 font-display text-xs font-extrabold tracking-wider transition-all duration-200 uppercase ${
                  isActive 
                    ? 'text-[#22D3EE]' 
                    : 'text-white/80 hover:text-white hover:bg-white/5 rounded-md'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-gradient-to-r from-[#7C3AED] to-[#22D3EE] shadow-[0_0_8px_#22D3EE]" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right Actions: Chaos Mode Toggle, Audio Toggle, & Bold LET'S CREATE CTA */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Chaos Mode Switch */}
          <button
            onClick={onToggleChaos}
            title={chaosMode ? "Disable Chaos Mode" : "Enable Chaos Mode"}
            aria-label="Toggle Anime Chaos Mode"
            className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-xs font-display font-bold border transition-all duration-200 cursor-pointer ${
              chaosMode
                ? 'bg-[#FACC15] text-black border-[#FACC15] shadow-[0_0_15px_rgba(250,204,21,0.6)] animate-pulse'
                : 'bg-white/5 text-white/80 border-white/10 hover:border-[#FACC15]/60 hover:text-[#FACC15]'
            }`}
          >
            <Flame className={`w-3.5 h-3.5 ${chaosMode ? 'text-black fill-current' : 'text-[#FACC15]'}`} />
            <span className="hidden md:inline">CHAOS</span>
          </button>

          {/* Audio atmosphere toggle */}
          <button
            onClick={onToggleAudio}
            title={audioActive ? "Mute Atmosphere" : "Unmute Atmosphere SFX"}
            aria-label="Toggle sound atmosphere"
            className={`p-2 rounded-md border text-xs transition-all duration-200 cursor-pointer ${
              audioActive
                ? 'bg-[#7C3AED]/30 text-[#22D3EE] border-[#22D3EE]/50 shadow-[0_0_10px_rgba(34,211,238,0.3)]'
                : 'bg-white/5 text-white/60 border-white/10 hover:text-white'
            }`}
          >
            {audioActive ? <Volume2 className="w-3.5 h-3.5 text-[#22D3EE]" /> : <VolumeX className="w-3.5 h-3.5" />}
          </button>

          {/* Bold CTA Button: LET'S CREATE */}
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('#contact');
            }}
            id="nav-cta-button"
            className="group relative inline-flex items-center justify-center px-4 sm:px-5 py-2 font-display font-black text-xs sm:text-sm tracking-wider uppercase text-black bg-[#FACC15] hover:bg-white rounded-md transition-all duration-300 shadow-[0_0_20px_rgba(250,204,21,0.4)] hover:shadow-[0_0_25px_rgba(255,255,255,0.7)] hover:-translate-y-0.5 active:translate-y-0 cursor-pointer overflow-hidden border border-[#FACC15]"
          >
            <span className="relative z-10 flex items-center gap-1.5 font-extrabold">
              LET'S CREATE
              <Sparkles className="w-3.5 h-3.5 text-black group-hover:rotate-12 transition-transform duration-300" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#22D3EE] to-[#7C3AED] opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-0" />
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-md bg-white/5 border border-white/10 text-white hover:text-[#22D3EE] focus:outline-none"
            aria-label="Toggle Mobile Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0B0B12]/98 border-b border-[#7C3AED]/40 px-5 pt-3 pb-6 space-y-3 shadow-2xl backdrop-blur-xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-2 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="px-3 py-2.5 rounded-lg text-sm font-display font-extrabold tracking-wider uppercase text-white/90 hover:text-[#22D3EE] hover:bg-[#7C3AED]/20 transition-all flex items-center justify-between border-l-2 border-transparent hover:border-[#22D3EE]"
              >
                <span>{link.label}</span>
                <span className="text-[#FACC15] text-xs font-impact">→</span>
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-white/10 flex items-center justify-between">
            <span className="text-xs text-white/60 font-body">ANIME × COMEDY × CHAOS</span>
            <span className="text-xs text-[#22D3EE] font-display font-bold">AdX 2025</span>
          </div>
        </div>
      )}
    </header>
  );
};
