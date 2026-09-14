import React from 'react';

export interface AdXLogoProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'hero';
  variant?: 'default' | 'lockup' | 'crest' | 'shield' | 'minimal';
  showTagline?: boolean;
  className?: string;
  animated?: boolean;
}

export const AdXLogo: React.FC<AdXLogoProps> = ({
  size = 'md',
  variant = 'default',
  showTagline = false,
  className = '',
  animated = true,
}) => {
  const sizeMap = {
    xs: { h: 28, text: 'text-lg', crownScale: 0.55 },
    sm: { h: 36, text: 'text-2xl', crownScale: 0.7 },
    md: { h: 48, text: 'text-3xl md:text-4xl', crownScale: 0.9 },
    lg: { h: 64, text: 'text-5xl md:text-6xl', crownScale: 1.2 },
    xl: { h: 92, text: 'text-6xl md:text-7xl', crownScale: 1.6 },
    hero: { h: 120, text: 'text-7xl md:text-8xl', crownScale: 2.1 },
  };

  const currentSize = sizeMap[size];

  // 1. BASKETBALL CLUB CREST VARIANT (IMG_1324 / Video 2)
  if (variant === 'crest') {
    return (
      <div className={`relative inline-flex flex-col items-center select-none group ${className}`} id="adx-crest-logo">
        <div className="relative flex items-center justify-center">
          <svg
            viewBox="0 0 320 360"
            className="w-auto drop-shadow-[0_10px_25px_rgba(245,158,11,0.35)]"
            style={{ height: currentSize.h * 2.2 }}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="crestGold" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FDE047" />
                <stop offset="35%" stopColor="#D97706" />
                <stop offset="70%" stopColor="#F59E0B" />
                <stop offset="100%" stopColor="#92400E" />
              </linearGradient>
              <linearGradient id="flameOrange" x1="0%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#EA580C" />
                <stop offset="60%" stopColor="#F59E0B" />
                <stop offset="100%" stopColor="#FEF08A" />
              </linearGradient>
              <linearGradient id="shieldDark" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#18181B" />
                <stop offset="100%" stopColor="#09090B" />
              </linearGradient>
              <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="6" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Back Golden Wings */}
            <g opacity="0.9" filter="url(#goldGlow)">
              <path d="M40 180 C 15 140, 20 80, 85 95 C 60 120, 60 160, 80 190 Z" fill="url(#crestGold)" />
              <path d="M280 180 C 305 140, 300 80, 235 95 C 260 120, 260 160, 240 190 Z" fill="url(#crestGold)" />
              <path d="M50 200 C 20 180, 15 130, 75 145 Z" fill="url(#crestGold)" opacity="0.8" />
              <path d="M270 200 C 300 180, 305 130, 245 145 Z" fill="url(#crestGold)" opacity="0.8" />
            </g>

            {/* Main Shield Outer Rim */}
            <path
              d="M160 330 C 100 290, 60 230, 60 100 L 160 70 L 260 100 C 260 230, 220 290, 160 330 Z"
              fill="url(#crestGold)"
              stroke="#FDE047"
              strokeWidth="2"
            />
            {/* Inner Shield Body */}
            <path
              d="M160 320 C 105 282, 70 225, 70 108 L 160 80 L 250 108 C 250 225, 215 282, 160 320 Z"
              fill="url(#shieldDark)"
              stroke="#78350F"
              strokeWidth="3"
            />

            {/* Glowing Nordic / Mystic Rune Circle */}
            <circle cx="160" cy="180" r="62" stroke="url(#crestGold)" strokeWidth="3" strokeDasharray="6 4" opacity="0.9" />
            <circle cx="160" cy="180" r="54" stroke="#FDE047" strokeWidth="1.5" opacity="0.6" />

            {/* Flaming Basketball & Net */}
            <g>
              {/* Basketball Net */}
              <path d="M128 175 L 192 175 L 175 220 L 145 220 Z" fill="none" stroke="#FFFFFF" strokeWidth="2" opacity="0.8" />
              <path d="M135 175 L 175 220 M185 175 L 145 220 M148 175 L 165 220 M172 175 L 155 220" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.7" />
              {/* Basketball Sphere */}
              <circle cx="160" cy="170" r="28" fill="#D97706" stroke="#78350F" strokeWidth="2" />
              <path d="M132 170 C 145 152, 175 152, 188 170" stroke="#451A03" strokeWidth="2" fill="none" />
              <path d="M132 170 C 145 188, 175 188, 188 170" stroke="#451A03" strokeWidth="2" fill="none" />
              <line x1="132" y1="170" x2="188" y2="170" stroke="#451A03" strokeWidth="2" />
              <line x1="160" y1="142" x2="160" y2="198" stroke="#451A03" strokeWidth="2" />
              {/* Raging Flames */}
              <path
                d="M145 150 C 140 120, 155 105, 160 90 C 165 110, 175 115, 175 130 C 180 115, 185 125, 180 145 C 175 135, 170 140, 170 150 Z"
                fill="url(#flameOrange)"
                filter="url(#goldGlow)"
              />
            </g>

            {/* Floating 5-Point Gold Crown on Top */}
            <g transform="translate(160, 68) scale(0.9) translate(-50, -40)">
              <path
                d="M10 38 L 22 14 L 38 28 L 50 4 L 62 28 L 78 14 L 90 38 C 70 42, 30 42, 10 38 Z"
                fill="url(#crestGold)"
                stroke="#FEF08A"
                strokeWidth="1.5"
              />
              <circle cx="50" cy="4" r="3.5" fill="#FEF08A" />
              <circle cx="22" cy="14" r="2.5" fill="#FEF08A" />
              <circle cx="78" cy="14" r="2.5" fill="#FEF08A" />
              <circle cx="10" cy="38" r="2" fill="#FEF08A" />
              <circle cx="90" cy="38" r="2" fill="#FEF08A" />
            </g>

            {/* Central AdX Brush Signature */}
            <g transform="translate(85, 205)">
              <text
                x="15"
                y="38"
                fill="#FFFFFF"
                fontFamily="'Cabinet Grotesk', 'Impact', sans-serif"
                fontWeight="900"
                fontSize="42"
                letterSpacing="-2"
                style={{ filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.8))' }}
              >
                Ad
              </text>
              <text
                x="72"
                y="38"
                fill="url(#crestGold)"
                fontFamily="'Cabinet Grotesk', 'Impact', sans-serif"
                fontWeight="900"
                fontSize="48"
                letterSpacing="-1"
                style={{ filter: 'drop-shadow(0 2px 10px rgba(245,158,11,0.6))' }}
              >
                X
              </text>
            </g>

            {/* Ribbon Banner at Bottom */}
            <g transform="translate(45, 280)">
              <path
                d="M10 15 L 0 5 L 15 0 L 25 15 L 205 15 L 215 0 L 230 5 L 220 15 L 210 30 L 20 30 Z"
                fill="#18181B"
                stroke="url(#crestGold)"
                strokeWidth="2"
              />
              <text
                x="115"
                y="24"
                textAnchor="middle"
                fill="#FDE047"
                fontFamily="'Cabinet Grotesk', sans-serif"
                fontWeight="900"
                fontSize="12"
                letterSpacing="2.5"
              >
                BASKETBALL CLUB
              </text>
            </g>
          </svg>
        </div>

        {showTagline && (
          <div className="text-center mt-2">
            <span className="font-impact tracking-[0.25em] text-[#FACC15] text-xs uppercase block">
              MORE THAN A GAME
            </span>
            <span className="text-[10px] tracking-widest text-white/60 uppercase block">
              CHASE YOUR GRAND LINE
            </span>
          </div>
        )}
      </div>
    );
  }

  // 2. PRIMARY BRUSH & CROWN LOGO (IMG_1325 & Main Video Outro)
  return (
    <div
      className={`inline-flex flex-col select-none group relative ${className}`}
      id="adx-official-logo"
    >
      <div className="relative inline-flex items-center">
        {/* The 5-Point Royal Crown (As seen in IMG_1325 and all branding) */}
        <div
          className="absolute -top-3.5 left-1/2 -translate-x-[15%] z-20 pointer-events-none transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1"
          style={{
            transform: `scale(${currentSize.crownScale}) translateY(-20%) translateX(25%) rotate(8deg)`,
            transformOrigin: 'bottom center',
          }}
        >
          <svg
            width="44"
            height="28"
            viewBox="0 0 44 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="drop-shadow-[0_2px_8px_rgba(245,158,11,0.6)]"
          >
            <defs>
              <linearGradient id="crownGoldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FEF08A" />
                <stop offset="30%" stopColor="#F59E0B" />
                <stop offset="70%" stopColor="#D97706" />
                <stop offset="100%" stopColor="#92400E" />
              </linearGradient>
            </defs>
            {/* 5-Point Royal Crown Outline & Facets */}
            <path
              d="M4 22 L 9 8 L 17 17 L 22 2 L 27 17 L 35 8 L 40 22 C 30 26, 14 26, 4 22 Z"
              fill="url(#crownGoldGradient)"
              stroke="#FEF08A"
              strokeWidth="0.8"
            />
            {/* Crown Pearls / Jewels */}
            <circle cx="22" cy="2" r="2" fill="#FEF08A" />
            <circle cx="9" cy="8" r="1.5" fill="#FEF08A" />
            <circle cx="35" cy="8" r="1.5" fill="#FEF08A" />
            <circle cx="4" cy="22" r="1.2" fill="#FEF08A" />
            <circle cx="40" cy="22" r="1.2" fill="#FEF08A" />
            {/* Base Band */}
            <path d="M5 21.5 C 16 24.5, 28 24.5, 39 21.5" stroke="#78350F" strokeWidth="1" />
          </svg>
        </div>

        {/* The Brand Monogram: Textured Dry-Brush "Ad" + Gold Brush "X" */}
        <div className="inline-flex items-baseline font-display font-black tracking-tight relative z-10">
          {/* "Ad" in Bold Textured White Calligraphic Brush */}
          <span
            className={`text-white ${currentSize.text} tracking-tighter relative inline-block transition-transform duration-300 group-hover:text-white/95`}
            style={{
              textShadow: '0 0 15px rgba(255,255,255,0.2), 0 4px 12px rgba(0,0,0,0.8)',
              fontFamily: "'Cabinet Grotesk', 'Impact', sans-serif",
              letterSpacing: '-0.04em',
            }}
          >
            Ad
          </span>

          {/* "X" in Brushed Rich Gold Metallic Foil Stroke */}
          <span
            className={`relative inline-block ${currentSize.text} ml-0.5 transition-transform duration-300 group-hover:scale-105`}
            style={{
              fontFamily: "'Cabinet Grotesk', 'Impact', sans-serif",
              letterSpacing: '-0.02em',
              background: 'linear-gradient(135deg, #FEF08A 0%, #F59E0B 45%, #D97706 75%, #92400E 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              filter: 'drop-shadow(0 0 16px rgba(245, 158, 11, 0.45)) drop-shadow(0 2px 4px rgba(0,0,0,0.9))',
            }}
          >
            X
          </span>

          {/* Golden Particle Glint Effect */}
          {animated && (
            <span className="absolute -top-1 -right-2 w-2 h-2 rounded-full bg-[#FDE047] opacity-75 blur-[1px] animate-pulse pointer-events-none" />
          )}
        </div>
      </div>

      {/* FULL OFFICIAL LOCKUP TAGLINES (As on IMG_1325) */}
      {(variant === 'lockup' || showTagline) && (
        <div className="flex flex-col items-center mt-1.5 w-full">
          {/* Top Line: CREATE · INSPIRE · PLAY · BEYOND */}
          <span className="font-display font-bold text-[9px] md:text-[10px] tracking-[0.24em] text-white/80 uppercase text-center whitespace-nowrap">
            CREATE · INSPIRE · PLAY · BEYOND
          </span>

          {/* Golden Brush Tapered Stroke Divider */}
          <div className="w-full max-w-[140px] my-1 flex items-center justify-center">
            <svg viewBox="0 0 140 4" className="w-full h-1" fill="none">
              <path
                d="M0 2 C 35 0, 105 0, 140 2 C 105 3.5, 35 3.5, 0 2 Z"
                fill="url(#goldDividerGradient)"
              />
              <defs>
                <linearGradient id="goldDividerGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#F59E0B" stopOpacity="0" />
                  <stop offset="25%" stopColor="#FDE047" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="#F59E0B" stopOpacity="1" />
                  <stop offset="75%" stopColor="#D97706" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#92400E" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Middle Line: MORE THAN A GAME */}
          <span
            className="font-impact italic tracking-[0.18em] text-[11px] md:text-xs uppercase text-center"
            style={{
              background: 'linear-gradient(90deg, #FDE047 0%, #F59E0B 50%, #D97706 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            MORE THAN A GAME
          </span>

          {/* Bottom Line: ANIME X AI X CULTURE X COMMUNITY */}
          <span className="font-mono text-[8px] md:text-[9px] tracking-[0.22em] text-white/50 uppercase mt-0.5 text-center whitespace-nowrap">
            ANIME × AI × CULTURE × COMMUNITY
          </span>
        </div>
      )}
    </div>
  );
};
