import React from 'react';

/**
 * High-fidelity vector reproductions of the official AdX media assets,
 * banners, viral skit stills, and posters uploaded by the creator.
 */

// 1. "WHY PICK ONE LANE? AdX MORE THAN A GAME" (IMG_1317.PNG / Sunset Arena Poster)
export const WhyPickOneLanePoster: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative overflow-hidden rounded-2xl bg-[#0F0D15] shadow-2xl border border-amber-500/30 ${className}`}>
      <svg viewBox="0 0 450 780" className="w-full h-full object-cover" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="skySunset" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1E1B2E" />
            <stop offset="35%" stopColor="#452434" />
            <stop offset="65%" stopColor="#B45309" />
            <stop offset="85%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#FDE68A" />
          </linearGradient>
          <linearGradient id="courtWet" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#B45309" />
            <stop offset="40%" stopColor="#451A03" />
            <stop offset="70%" stopColor="#1C1917" />
            <stop offset="100%" stopColor="#0C0A09" />
          </linearGradient>
          <linearGradient id="goldTextGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FEF08A" />
            <stop offset="40%" stopColor="#F59E0B" />
            <stop offset="80%" stopColor="#D97706" />
            <stop offset="100%" stopColor="#78350F" />
          </linearGradient>
          <filter id="wetGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Sunset Sky & Cloudscape */}
        <rect x="0" y="0" width="450" height="420" fill="url(#skySunset)" />
        {/* Distant Cloud Silhouettes */}
        <path d="M-20 280 Q 80 230 180 270 T 380 260 T 480 290 L 480 420 L -20 420 Z" fill="#78350F" opacity="0.5" />
        <path d="M0 310 Q 120 270 240 310 T 450 300 L 450 420 L 0 420 Z" fill="#451A03" opacity="0.6" />

        {/* Distant Grand Line Coastal Towers & Ocean */}
        <rect x="0" y="380" width="450" height="40" fill="#292524" />
        {/* Fortress Towers */}
        <path d="M40 390 L 40 320 L 60 300 L 80 320 L 80 390 Z" fill="#1C1917" />
        <path d="M90 390 L 90 340 L 115 330 L 140 340 L 140 390 Z" fill="#292524" />
        <path d="M340 390 L 340 330 L 365 320 L 390 330 L 390 390 Z" fill="#1C1917" />
        <path d="M395 390 L 395 310 L 415 295 L 435 310 L 435 390 Z" fill="#292524" />

        {/* Stadium Floodlights & Banners */}
        <g stroke="#FDE68A" strokeWidth="2" opacity="0.9">
          <line x1="25" y1="390" x2="25" y2="240" stroke="#44403C" strokeWidth="4" />
          <line x1="425" y1="390" x2="425" y2="240" stroke="#44403C" strokeWidth="4" />
          {/* Floodlight Banks */}
          <rect x="10" y="210" width="30" height="30" fill="#FDE047" filter="url(#wetGlow)" />
          <rect x="410" y="210" width="30" height="30" fill="#FDE047" filter="url(#wetGlow)" />
        </g>
        {/* AdX Banners on Poles */}
        <rect x="15" y="260" width="20" height="60" fill="#09090B" stroke="#F59E0B" strokeWidth="1" />
        <path d="M22 280 L 25 273 L 28 280 L 31 275 L 34 280 Z" fill="#F59E0B" />
        <rect x="415" y="260" width="20" height="60" fill="#09090B" stroke="#F59E0B" strokeWidth="1" />
        <path d="M422 280 L 425 273 L 428 280 L 431 275 L 434 280 Z" fill="#F59E0B" />

        {/* Sea Birds in Sunset */}
        <g stroke="#292524" strokeWidth="1.5" fill="none">
          <path d="M120 220 Q 125 214 130 220 Q 135 214 140 220" />
          <path d="M150 200 Q 154 195 158 200 Q 162 195 166 200" />
          <path d="M290 210 Q 295 204 300 210 Q 305 204 310 210" />
          <path d="M330 230 Q 334 225 338 230 Q 342 225 346 230" />
        </g>

        {/* Sunset Sun Burst & Ocean Reflection */}
        <circle cx="225" cy="385" r="35" fill="#FEF08A" filter="url(#wetGlow)" />

        {/* Wet Hardwood Court with Dramatic Golden Sunset Reflection */}
        <rect x="0" y="415" width="450" height="365" fill="url(#courtWet)" />
        {/* Court Markings & Center Line Reflections */}
        <g stroke="#FEF08A" strokeWidth="2.5" opacity="0.6">
          <line x1="0" y1="420" x2="450" y2="420" stroke="#F59E0B" strokeWidth="3" />
          <line x1="225" y1="420" x2="225" y2="780" strokeDasharray="16 8" />
          <circle cx="225" cy="560" r="100" fill="none" />
          <circle cx="225" cy="560" r="140" fill="none" strokeWidth="1.5" strokeDasharray="8 6" />
          {/* Key Area Lines */}
          <path d="M125 780 L 160 480 L 290 480 L 325 780" fill="none" />
        </g>

        {/* Wet Puddle Highlights */}
        <ellipse cx="225" cy="560" rx="90" ry="25" fill="#FEF08A" opacity="0.25" filter="url(#wetGlow)" />

        {/* Anime Hooper Character (Back View, Facing Sunset Horizon) */}
        <g id="anime-hooper-sunset">
          {/* Athletic Legs & Sneakers */}
          <path d="M190 620 L 180 700 L 165 720 L 195 720 L 205 690 L 200 620 Z" fill="#292524" />
          <path d="M250 620 L 245 690 L 255 720 L 285 720 L 270 700 L 260 620 Z" fill="#292524" />
          {/* Gold Trim Basketball Shorts */}
          <path d="M175 540 L 275 540 L 285 625 L 235 625 L 225 580 L 215 625 L 165 625 Z" fill="#0C0A09" stroke="#F59E0B" strokeWidth="2" />
          
          {/* Muscular Back & AdX Black/Gold Jersey #01 */}
          <path d="M170 430 L 280 430 L 275 545 L 175 545 Z" fill="#09090B" stroke="#F59E0B" strokeWidth="1.5" />
          {/* Gold Trim Armholes & Collar */}
          <path d="M170 430 Q 185 460 175 490" stroke="#F59E0B" strokeWidth="3" fill="none" />
          <path d="M280 430 Q 265 460 275 490" stroke="#F59E0B" strokeWidth="3" fill="none" />

          {/* AdX Logo on Jersey Back with Crown */}
          {/* Crown on Jersey */}
          <path d="M217 458 L 221 450 L 225 456 L 229 450 L 233 458 Z" fill="#FDE047" />
          {/* AdX text on jersey */}
          <text x="210" y="475" fill="#FFFFFF" fontFamily="sans-serif" fontWeight="900" fontSize="16" letterSpacing="-1">Ad</text>
          <text x="230" y="475" fill="#F59E0B" fontFamily="sans-serif" fontWeight="900" fontSize="18">X</text>
          {/* Number 01 */}
          <text x="225" y="525" textAnchor="middle" fill="#FFFFFF" stroke="#F59E0B" strokeWidth="1.5" fontFamily="sans-serif" fontWeight="900" fontSize="36" letterSpacing="2">
            01
          </text>

          {/* Muscular Arms & Basketball */}
          {/* Left Arm Holding Basketball at Hip */}
          <path d="M170 440 L 140 500 L 150 560" stroke="#57331C" strokeWidth="22" strokeLinecap="round" fill="none" />
          <circle cx="150" cy="570" r="26" fill="#EA580C" stroke="#78350F" strokeWidth="2" />
          <path d="M128 570 Q 150 550 172 570" stroke="#451A03" strokeWidth="2" fill="none" />
          <path d="M128 570 Q 150 590 172 570" stroke="#451A03" strokeWidth="2" fill="none" />
          <line x1="124" y1="570" x2="176" y2="570" stroke="#451A03" strokeWidth="2" />
          <line x1="150" y1="544" x2="150" y2="596" stroke="#451A03" strokeWidth="2" />

          {/* Right Arm Down relaxed */}
          <path d="M280 440 L 305 500 L 300 550" stroke="#57331C" strokeWidth="22" strokeLinecap="round" fill="none" />
          {/* Wristband */}
          <rect x="290" y="525" width="16" height="10" rx="2" fill="#0C0A09" stroke="#F59E0B" strokeWidth="1" />

          {/* Neck & Messy Anime Spiky Hair */}
          <rect x="215" y="415" width="20" height="20" fill="#57331C" />
          <path d="M205 425 Q 195 395 205 380 Q 215 365 225 365 Q 235 365 245 380 Q 255 395 245 425 Z" fill="#0C0A09" />
          {/* Hair spikes catching golden sunlight */}
          <path d="M195 400 L 205 375 L 215 365 L 225 360 L 235 365 L 245 375 L 255 400" stroke="#F59E0B" strokeWidth="2.5" fill="none" />
        </g>

        {/* Top Typography: "WHY PICK ONE LANE?" (Dry Brush Style) */}
        <g id="top-title" filter="url(#wetGlow)">
          <text
            x="225"
            y="95"
            textAnchor="middle"
            fill="#FFFFFF"
            fontFamily="'Cabinet Grotesk', 'Impact', sans-serif"
            fontWeight="900"
            fontSize="44"
            letterSpacing="1"
            fontStyle="italic"
            style={{ filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.9))' }}
          >
            WHY PICK
          </text>
          <text
            x="225"
            y="145"
            textAnchor="middle"
            fill="url(#goldTextGrad)"
            fontFamily="'Cabinet Grotesk', 'Impact', sans-serif"
            fontWeight="900"
            fontSize="52"
            letterSpacing="2"
            fontStyle="italic"
            style={{ filter: 'drop-shadow(0 6px 16px rgba(245,158,11,0.6))' }}
          >
            ONE LANE?
          </text>
        </g>

        {/* Center Golden AdX Crown Logo */}
        <g transform="translate(225, 230) scale(1.1) translate(-65, -30)">
          {/* Crown */}
          <path d="M35 12 L 44 0 L 53 8 L 62 0 L 71 8 L 80 0 L 89 12 Z" fill="#FDE047" stroke="#92400E" strokeWidth="1" />
          <circle cx="62" cy="0" r="2.5" fill="#FEF08A" />
          {/* AdX text */}
          <text x="10" y="48" fill="#FFFFFF" fontFamily="'Cabinet Grotesk', 'Impact', sans-serif" fontWeight="900" fontSize="48" letterSpacing="-2">
            Ad
          </text>
          <text x="75" y="48" fill="url(#goldTextGrad)" fontFamily="'Cabinet Grotesk', 'Impact', sans-serif" fontWeight="900" fontSize="56" letterSpacing="-1">
            X
          </text>
        </g>

        {/* Bottom Tagline: "MORE THAN A GAME" */}
        <g transform="translate(225, 750)">
          <line x1="-120" y1="-14" x2="120" y2="-14" stroke="#F59E0B" strokeWidth="2" />
          <text
            x="0"
            y="0"
            textAnchor="middle"
            fill="#FEF08A"
            fontFamily="'Cabinet Grotesk', 'Impact', sans-serif"
            fontWeight="900"
            fontSize="14"
            letterSpacing="5"
            fontStyle="italic"
          >
            MORE THAN A GAME
          </text>
        </g>
      </svg>
    </div>
  );
};

// 2. "POV: ANIME FANS ENTER THE WORKFORCE - EP. 1 THE JOB INTERVIEW" (937E5B00-7A1E-4FBC-BFA1-D980EBE87979.PNG)
export const AnimeFansWorkforcePoster: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative overflow-hidden rounded-2xl bg-[#1A1829] shadow-2xl border border-yellow-500/40 ${className}`}>
      <svg viewBox="0 0 450 780" className="w-full h-full object-cover" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="officeBg" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#F5F5F4" />
            <stop offset="100%" stopColor="#D6D3D1" />
          </linearGradient>
          <linearGradient id="goldenAura" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FEF08A" />
            <stop offset="50%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#D97706" />
          </linearGradient>
          <radialGradient id="kiBlastCenter" cx="50%" cy="55%" r="50%">
            <stop offset="0%" stopColor="#FEF08A" stopOpacity="0.85" />
            <stop offset="40%" stopColor="#F59E0B" stopOpacity="0.5" />
            <stop offset="80%" stopColor="#EA580C" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0" />
          </radialGradient>
          <filter id="lightningGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Corporate Office Background */}
        <rect x="0" y="0" width="450" height="780" fill="url(#officeBg)" />
        {/* Office Window & Drapes */}
        <rect x="260" y="80" width="170" height="320" fill="#E7E5E4" stroke="#A8A29E" strokeWidth="3" />
        <line x1="345" y1="80" x2="345" y2="400" stroke="#A8A29E" strokeWidth="2" />
        <line x1="260" y1="240" x2="430" y2="240" stroke="#A8A29E" strokeWidth="2" />
        {/* Wall Art Frame */}
        <rect x="15" y="160" width="130" height="90" fill="#0C4A6E" rx="4" />
        <rect x="25" y="170" width="110" height="70" fill="#38BDF8" rx="2" />
        <circle cx="80" cy="205" r="22" fill="#E0F2FE" />

        {/* Office Desk & Plants */}
        <rect x="0" y="440" width="450" height="80" fill="#78350F" />
        <rect x="0" y="435" width="450" height="8" fill="#B45309" />
        {/* iMac / PC Monitor on Desk */}
        <rect x="320" y="370" width="90" height="65" rx="4" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="2" />
        <rect x="355" y="435" width="20" height="15" fill="#94A3B8" />
        {/* Potted Plant */}
        <circle cx="395" cy="425" r="16" fill="#15803D" />
        <path d="M380 430 Q 395 390 410 430" stroke="#16A34A" strokeWidth="4" fill="none" />
        {/* Pen Holder */}
        <rect x="40" y="420" width="16" height="24" rx="2" fill="#0F172A" />

        {/* Desk Coworker / Interviewer (Facepalming in Exhaustion) */}
        <g id="exhausted-interviewer">
          {/* Green Polo Shirt */}
          <path d="M50 380 L 120 380 L 140 450 L 30 450 Z" fill="#4D7C0F" />
          {/* Head with Hand Covering Face */}
          <circle cx="85" cy="340" r="26" fill="#78350F" />
          {/* Hand on face */}
          <rect x="80" y="325" width="22" height="30" rx="6" fill="#57331C" transform="rotate(-15 90 340)" />
          {/* Notepad on desk */}
          <rect x="85" y="438" width="40" height="30" rx="2" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="1" />
        </g>

        {/* Explosive Golden Ki / Saiyan Aura Burst */}
        <ellipse cx="225" cy="460" rx="210" ry="240" fill="url(#kiBlastCenter)" />

        {/* Dynamic Electric Lightning Arcs & Flying Shattered Floor Debris */}
        <g filter="url(#lightningGlow)" stroke="#FEF08A" strokeWidth="3" fill="none">
          {/* Lightning arcs radiating from Gus */}
          <path d="M120 540 L 90 490 L 130 440 L 70 380 L 110 320" />
          <path d="M320 540 L 360 480 L 310 430 L 370 370 L 330 310" />
          <path d="M160 300 L 180 240 L 150 180 L 200 130" />
          <path d="M280 300 L 260 240 L 290 180 L 250 130" />
          <path d="M60 620 L 110 590 L 70 540 L 130 500" />
          <path d="M380 620 L 330 590 L 370 540 L 310 500" />
        </g>

        {/* Flying Office Carpet Rock Debris */}
        <polygon points="50,470 65,460 70,480 55,490" fill="#44403C" stroke="#F59E0B" strokeWidth="1.5" />
        <polygon points="380,480 400,465 410,490 390,500" fill="#44403C" stroke="#F59E0B" strokeWidth="1.5" />
        <polygon points="90,580 110,565 115,595 95,605" fill="#44403C" stroke="#F59E0B" strokeWidth="1.5" />
        <polygon points="340,580 360,565 370,595 350,605" fill="#44403C" stroke="#F59E0B" strokeWidth="1.5" />

        {/* Gus in Durag (Charging Anime Stance, Muscular, Intense Focus) */}
        <g id="gus-anime-workforce">
          {/* Black Durag & Braids */}
          <path d="M195 240 C 190 205, 255 205, 250 240 Z" fill="#0C0A09" />
          <circle cx="225" cy="235" r="28" fill="#0C0A09" />
          {/* Durag Tie & Cape tail */}
          <path d="M245 240 Q 265 260 270 290 Q 255 290 240 250 Z" fill="#1C1917" />
          {/* Braids flanking cheeks */}
          <path d="M200 245 L 195 285" stroke="#0C0A09" strokeWidth="4" strokeLinecap="round" />
          <path d="M205 245 L 202 295" stroke="#0C0A09" strokeWidth="4" strokeLinecap="round" />

          {/* Intense Anime Expression & High Cheekbones */}
          <path d="M202 235 L 202 265 Q 225 285 245 265 L 245 235 Z" fill="#78350F" />
          {/* Piercing Determined Anime Eyes (Glowing Amber) */}
          <ellipse cx="216" cy="245" rx="5" ry="3.5" fill="#FEF08A" filter="url(#lightningGlow)" />
          <circle cx="216" cy="245" r="2" fill="#451A03" />
          <ellipse cx="234" cy="245" rx="5" ry="3.5" fill="#FEF08A" filter="url(#lightningGlow)" />
          <circle cx="234" cy="245" r="2" fill="#451A03" />

          {/* Muscular Neck & Traps */}
          <path d="M210 275 L 180 310 L 270 310 L 240 275 Z" fill="#57331C" />

          {/* Black Ribbed Tank Top */}
          <path d="M180 310 L 160 380 L 170 470 L 280 470 L 290 380 L 270 310 L 250 360 L 200 360 Z" fill="#18181B" stroke="#27272A" strokeWidth="2" />
          
          {/* Muscular Biceps in Power Stance (One Fist Curled, One Hand Pointing Up) */}
          {/* Left Arm Curled at Head */}
          <path d="M275 320 L 330 310 L 330 260 L 310 270" stroke="#78350F" strokeWidth="24" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          {/* Left Fist */}
          <circle cx="310" cy="270" r="14" fill="#57331C" />
          {/* Right Arm (Jutsu / Charging Stance Hand in Front of Chest) */}
          <path d="M175 320 L 140 370 L 210 380" stroke="#78350F" strokeWidth="22" strokeLinecap="round" fill="none" />
          {/* Right Hand Index Finger Raised */}
          <path d="M210 380 L 212 345" stroke="#78350F" strokeWidth="9" strokeLinecap="round" />

          {/* Athletic Black Gym Shorts & Nike Swoosh */}
          <path d="M165 470 L 285 470 L 315 580 L 240 580 L 225 520 L 210 580 L 135 580 Z" fill="#09090B" stroke="#27272A" strokeWidth="2" />
          {/* Nike Swoosh on Short */}
          <path d="M295 545 Q 303 548 308 543 Q 303 550 295 545 Z" fill="#FFFFFF" />

          {/* Wide Power Stance Legs (Squat Stance on Office Carpet) */}
          <path d="M165 580 L 110 680 L 95 710 L 145 710 L 175 640 Z" fill="#57331C" />
          <path d="M285 580 L 340 680 L 355 710 L 305 710 L 275 640 Z" fill="#57331C" />
          {/* Black Socks & Comfort Slides */}
          <rect x="85" y="690" width="30" height="25" fill="#18181B" rx="4" />
          <rect x="335" y="690" width="30" height="25" fill="#18181B" rx="4" />
          <ellipse cx="95" cy="720" rx="30" ry="12" fill="#0C0A09" />
          <ellipse cx="355" cy="720" rx="30" ry="12" fill="#0C0A09" />
        </g>

        {/* Top Comic Text: "POV: ANIME FANS ENTER THE WORKFORCE" */}
        <g id="top-banner-text" filter="url(#lightningGlow)">
          <text
            x="225"
            y="70"
            textAnchor="middle"
            fill="#FFFFFF"
            fontFamily="'Cabinet Grotesk', 'Impact', sans-serif"
            fontWeight="900"
            fontSize="32"
            letterSpacing="0.5"
            stroke="#000000"
            strokeWidth="2.5"
            paintOrder="stroke fill"
          >
            POV: ANIME FANS
          </text>
          <text
            x="225"
            y="110"
            textAnchor="middle"
            fill="#FFFFFF"
            fontFamily="'Cabinet Grotesk', 'Impact', sans-serif"
            fontWeight="900"
            fontSize="28"
            letterSpacing="0.5"
            stroke="#000000"
            strokeWidth="2.5"
            paintOrder="stroke fill"
          >
            ENTER THE WORKFORCE
          </text>
        </g>

        {/* Golden Impact Badge: "EPISODE 1: THE JOB INTERVIEW" */}
        <g id="episode-badge" filter="url(#lightningGlow)" transform="translate(225, 640)">
          {/* Gold Glowing Background Plate */}
          <rect x="-180" y="-30" width="360" height="60" rx="8" fill="#09090B" stroke="url(#goldenAura)" strokeWidth="3" />
          <text
            x="0"
            y="0"
            textAnchor="middle"
            fill="url(#goldenAura)"
            fontFamily="'Cabinet Grotesk', 'Impact', sans-serif"
            fontWeight="900"
            fontSize="34"
            letterSpacing="2"
          >
            EPISODE 1
          </text>
          <text
            x="0"
            y="22"
            textAnchor="middle"
            fill="#FFFFFF"
            fontFamily="'Cabinet Grotesk', 'Impact', sans-serif"
            fontWeight="900"
            fontSize="18"
            letterSpacing="3"
          >
            THE JOB INTERVIEW
          </text>
        </g>

        {/* Bottom Left: Official AdX Brush Logo with Crown */}
        <g transform="translate(30, 715) scale(0.95)">
          {/* Crown */}
          <path d="M22 6 L 27 0 L 32 4 L 37 0 L 42 4 L 47 0 L 52 6 Z" fill="#FDE047" />
          <text x="5" y="28" fill="#FFFFFF" fontFamily="'Cabinet Grotesk', 'Impact', sans-serif" fontWeight="900" fontSize="30" letterSpacing="-1">
            Ad
          </text>
          <text x="46" y="28" fill="url(#goldenAura)" fontFamily="'Cabinet Grotesk', 'Impact', sans-serif" fontWeight="900" fontSize="34">
            X
          </text>
        </g>
      </svg>
    </div>
  );
};

// 3. WIDE STADIUM HEADER: "NIKE 10:10 FLAMING RUNE HOOP & STRAW HAT HOOPER" (8EE6AFC3-11C9-4A5A-9CC9-30D4FE836F96 3.PNG)
export const NikeRuneHoopBanner: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative overflow-hidden rounded-2xl bg-[#0B0B14] shadow-2xl border border-amber-500/30 ${className}`}>
      <svg viewBox="0 0 1200 480" className="w-full h-full object-cover" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="arenaSpotlight" cx="50%" cy="40%" r="55%">
            <stop offset="0%" stopColor="#EA580C" stopOpacity="0.6" />
            <stop offset="45%" stopColor="#7C2D12" stopOpacity="0.3" />
            <stop offset="90%" stopColor="#0B0B14" stopOpacity="0.95" />
          </radialGradient>
          <linearGradient id="goldBannerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FEF08A" />
            <stop offset="50%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#D97706" />
          </linearGradient>
          <filter id="flameBlur" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Stadium Arena Dome with Crowd Silhouette */}
        <rect width="1200" height="480" fill="#08080E" />
        <rect width="1200" height="480" fill="url(#arenaSpotlight)" />
        {/* Crowd bokeh particles */}
        <g opacity="0.35">
          <circle cx="200" cy="380" r="2" fill="#FACC15" />
          <circle cx="320" cy="410" r="2" fill="#EA580C" />
          <circle cx="850" cy="390" r="2" fill="#FACC15" />
          <circle cx="980" cy="420" r="2" fill="#EA580C" />
          <circle cx="500" cy="400" r="2" fill="#FDE047" />
          <circle cx="700" cy="410" r="2" fill="#FDE047" />
        </g>

        {/* Arena Banners: "DISCIPLINE TODAY" / "A BRIGHTER TOMORROW" */}
        <g opacity="0.5">
          <rect x="80" y="30" width="130" height="150" fill="#1C1917" stroke="#78350F" strokeWidth="2" />
          <text x="145" y="80" textAnchor="middle" fill="#FFFFFF" fontFamily="sans-serif" fontWeight="900" fontSize="16" letterSpacing="2">
            DISCIPLINE
          </text>
          <text x="145" y="105" textAnchor="middle" fill="#FFFFFF" fontFamily="sans-serif" fontWeight="900" fontSize="16" letterSpacing="2">
            TODAY
          </text>
          <path d="M135 125 L 145 115 L 155 125 Z" fill="#F59E0B" />

          <rect x="990" y="30" width="130" height="150" fill="#1C1917" stroke="#78350F" strokeWidth="2" />
          <text x="1055" y="80" textAnchor="middle" fill="#FFFFFF" fontFamily="sans-serif" fontWeight="900" fontSize="14" letterSpacing="1.5">
            A BRIGHTER
          </text>
          <text x="1055" y="105" textAnchor="middle" fill="#FFFFFF" fontFamily="sans-serif" fontWeight="900" fontSize="14" letterSpacing="1.5">
            TOMORROW
          </text>
          <path d="M1045 125 L 1055 115 L 1065 125 Z" fill="#F59E0B" />
        </g>

        {/* Center: Nike 10:10 Digital Shot Clock */}
        <g transform="translate(600, 50)">
          {/* Nike Swoosh */}
          <path d="M-25 -25 Q 0 -15 25 -32 Q 5 -10 -25 -25 Z" fill="#FFFFFF" />
          <text x="0" y="-18" textAnchor="middle" fill="#FFFFFF" fontFamily="sans-serif" fontWeight="900" fontSize="16" letterSpacing="2">
            NIKE
          </text>
          {/* Digital LED Shot Clock */}
          <rect x="-40" y="-8" width="80" height="34" rx="4" fill="#000000" stroke="#78350F" strokeWidth="1.5" />
          <text x="0" y="17" textAnchor="middle" fill="#EF4444" fontFamily="monospace" fontWeight="900" fontSize="22" letterSpacing="2">
            10:10
          </text>
        </g>

        {/* Centerpiece: Glowing Nordic Rune Ring & Flaming Basketball Net */}
        <g transform="translate(600, 230)">
          {/* Nordic Rune Circle (Glowing Neon Amber) */}
          <circle cx="0" cy="0" r="120" stroke="url(#goldBannerGrad)" strokeWidth="8" filter="url(#flameBlur)" opacity="0.9" />
          <circle cx="0" cy="0" r="105" stroke="#FFFFFF" strokeWidth="2" strokeDasharray="14 8" opacity="0.8" />
          {/* Backboard */}
          <rect x="-65" y="-55" width="130" height="90" rx="3" fill="none" stroke="#FFFFFF" strokeWidth="3" opacity="0.75" />
          <rect x="-30" y="-25" width="60" height="45" fill="none" stroke="#FFFFFF" strokeWidth="2" opacity="0.8" />

          {/* Basketball Rim & Flaming Net */}
          <ellipse cx="0" cy="20" rx="45" ry="10" fill="none" stroke="#EA580C" strokeWidth="5" />
          {/* Net */}
          <path d="M-40 20 L -25 90 L 25 90 L 40 20" stroke="#FFFFFF" strokeWidth="2.5" fill="none" opacity="0.85" />
          <line x1="-20" y1="20" x2="20" y2="90" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.7" />
          <line x1="20" y1="20" x2="-20" y2="90" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.7" />

          {/* Raging Basketball in Flames */}
          <circle cx="0" cy="50" r="32" fill="#D97706" stroke="#451A03" strokeWidth="2" />
          <path
            d="M-25 40 Q 0 -30 10 -60 Q 25 -10 15 20 Q 30 10 35 40 Z"
            fill="#FEF08A"
            filter="url(#flameBlur)"
            opacity="0.95"
          />
          <path
            d="M-15 35 Q 0 -15 8 -40 Q 18 0 10 25 Z"
            fill="#F59E0B"
            filter="url(#flameBlur)"
          />
        </g>

        {/* Left Side: Official AdX Brand Identity Lockup */}
        <g transform="translate(180, 240)">
          {/* Crown */}
          <g transform="translate(60, -85) scale(1.1)">
            <path d="M0 24 L 9 6 L 19 16 L 27 0 L 35 16 L 45 6 L 54 24 Z" fill="url(#goldBannerGrad)" stroke="#FEF08A" strokeWidth="1.5" />
            <circle cx="27" cy="0" r="3" fill="#FEF08A" />
          </g>
          <text x="-40" y="-10" fill="#FFFFFF" fontFamily="'Cabinet Grotesk', 'Impact', sans-serif" fontWeight="900" fontSize="76" letterSpacing="-4">
            Ad
          </text>
          <text x="60" y="-10" fill="url(#goldBannerGrad)" fontFamily="'Cabinet Grotesk', 'Impact', sans-serif" fontWeight="900" fontSize="88" letterSpacing="-2">
            X
          </text>

          <text x="45" y="32" textAnchor="middle" fill="#FFFFFF" opacity="0.85" fontFamily="sans-serif" fontWeight="800" fontSize="12" letterSpacing="4">
            CREATE · INSPIRE · PLAY · BEYOND
          </text>
          <line x1="-60" y1="46" x2="150" y2="46" stroke="url(#goldBannerGrad)" strokeWidth="2" />
          <text x="45" y="70" textAnchor="middle" fill="url(#goldBannerGrad)" fontFamily="'Cabinet Grotesk', 'Impact', sans-serif" fontWeight="900" fontSize="22" letterSpacing="3" fontStyle="italic">
            MORE THAN A GAME
          </text>
          <text x="45" y="94" textAnchor="middle" fill="#FFFFFF" opacity="0.6" fontFamily="monospace" fontSize="10" letterSpacing="3">
            ANIME × AI × CULTURE × COMMUNITY
          </text>
        </g>

        {/* Right Side: Anime Hooper #01 with Straw Hat on Back (Luffy Tribute) */}
        <g id="straw-hat-hooper" transform="translate(900, 240)">
          {/* Muscular Back in AdX Jersey #01 */}
          <path d="M-50 40 L 50 40 L 45 240 L -45 240 Z" fill="#0C0A09" stroke="#F59E0B" strokeWidth="2" />
          {/* Gold Accents */}
          <path d="M-50 40 Q -35 70 -45 100" stroke="#F59E0B" strokeWidth="3" fill="none" />
          <path d="M50 40 Q 35 70 45 100" stroke="#F59E0B" strokeWidth="3" fill="none" />

          {/* AdX Logo on Jersey Back */}
          <text x="-25" y="100" fill="#FFFFFF" fontFamily="sans-serif" fontWeight="900" fontSize="20">Ad</text>
          <text x="5" y="100" fill="#F59E0B" fontFamily="sans-serif" fontWeight="900" fontSize="22">X</text>
          {/* Number 01 */}
          <text x="0" y="160" textAnchor="middle" fill="#FFFFFF" stroke="#F59E0B" strokeWidth="1.5" fontFamily="sans-serif" fontWeight="900" fontSize="46" letterSpacing="3">
            01
          </text>

          {/* Straw Hat Hanging on Back (One Piece Luffy Lore) */}
          <circle cx="15" cy="55" r="42" fill="#D97706" stroke="#78350F" strokeWidth="3" />
          {/* Red Ribbon on Straw Hat */}
          <circle cx="15" cy="55" r="28" fill="none" stroke="#DC2626" strokeWidth="6" />
          <circle cx="15" cy="55" r="22" fill="#F59E0B" />

          {/* Left Arm Holding Basketball */}
          <path d="M-50 50 L -80 110 L -60 180" stroke="#78350F" strokeWidth="22" strokeLinecap="round" fill="none" />
          <circle cx="-60" cy="190" r="28" fill="#EA580C" stroke="#78350F" strokeWidth="2" />

          {/* Tagline Callout */}
          <text x="90" y="50" fill="#FFFFFF" fontFamily="'Cabinet Grotesk', 'Impact', sans-serif" fontWeight="900" fontSize="28" fontStyle="italic" letterSpacing="1">
            CHASE
          </text>
          <text x="90" y="80" fill="url(#goldBannerGrad)" fontFamily="'Cabinet Grotesk', 'Impact', sans-serif" fontWeight="900" fontSize="30" fontStyle="italic" letterSpacing="1">
            YOUR
          </text>
          <text x="90" y="112" fill="#FFFFFF" fontFamily="'Cabinet Grotesk', 'Impact', sans-serif" fontWeight="900" fontSize="32" fontStyle="italic" letterSpacing="1">
            GRAND LINE
          </text>
        </g>

        {/* Japanese Vertical Calligraphy on Margins */}
        {/* Left: 「夢は終わらない」 (Dreams Never End) */}
        <g transform="translate(35, 100)">
          <text x="0" y="0" fill="#FFFFFF" opacity="0.85" fontFamily="sans-serif" fontWeight="700" fontSize="16" letterSpacing="8" style={{ writingMode: 'vertical-rl' }}>
            夢は終わらない
          </text>
        </g>
        {/* Right: 「仲間と、もっと遠くへ」 (Further With Our Crew) */}
        <g transform="translate(1165, 100)">
          <text x="0" y="0" fill="#FFFFFF" opacity="0.85" fontFamily="sans-serif" fontWeight="700" fontSize="16" letterSpacing="8" style={{ writingMode: 'vertical-rl' }}>
            仲間と、もっと遠くへ
          </text>
        </g>
      </svg>
    </div>
  );
};

// 4. "GRAND LINE HARBOR & THOUSAND SUNNY" (60DF3ED8-7AF3-4116-99FF-ED8FC52F00B9 3.PNG)
export const GrandLineSunnyBanner: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative overflow-hidden rounded-2xl bg-[#09080F] shadow-2xl border border-amber-500/30 ${className}`}>
      <svg viewBox="0 0 1200 480" className="w-full h-full object-cover" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="sunnySunset" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1E1B4B" />
            <stop offset="35%" stopColor="#831843" />
            <stop offset="70%" stopColor="#EA580C" />
            <stop offset="90%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#FEF08A" />
          </linearGradient>
          <linearGradient id="goldTextGradSunny" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FEF08A" />
            <stop offset="50%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#B45309" />
          </linearGradient>
        </defs>

        {/* Grand Line Golden Sunset Sea & Sky */}
        <rect width="1200" height="320" fill="url(#sunnySunset)" />
        {/* Distant Sea & Waves */}
        <rect y="320" width="1200" height="160" fill="#0F172A" />
        <line x1="0" y1="320" x2="1200" y2="320" stroke="#F59E0B" strokeWidth="2" opacity="0.6" />

        {/* Center: The Straw Hat Pirate Ship (Thousand Sunny / Going Merry Silhouette) */}
        <g transform="translate(620, 260)">
          {/* Big Skull Jolly Roger Sail */}
          <path d="M-60 -110 Q 0 -130 60 -110 L 45 -40 Q 0 -50 -45 -40 Z" fill="#F8FAFC" stroke="#000000" strokeWidth="2" />
          <circle cx="0" cy="-75" r="16" fill="#000000" />
          <ellipse cx="-6" cy="-77" rx="3" ry="4" fill="#FFFFFF" />
          <ellipse cx="6" cy="-77" rx="3" ry="4" fill="#FFFFFF" />
          {/* Ship Hull & Mast */}
          <path d="M-70 -20 L 70 -20 L 50 30 L -50 30 Z" fill="#78350F" stroke="#451A03" strokeWidth="3" />
          <line x1="0" y1="-140" x2="0" y2="20" stroke="#451A03" strokeWidth="4" />
          {/* Lion figurehead mane */}
          <circle cx="70" cy="-10" r="14" fill="#F59E0B" />
        </g>

        {/* Left Side: Official AdX Logo & Tagline */}
        <g transform="translate(180, 230)">
          {/* Crown */}
          <path d="M40 -70 L 48 -82 L 57 -74 L 65 -88 L 73 -74 L 82 -82 L 90 -70 Z" fill="#FDE047" />
          <text x="-40" y="-10" fill="#FFFFFF" fontFamily="'Cabinet Grotesk', 'Impact', sans-serif" fontWeight="900" fontSize="74" letterSpacing="-4">
            Ad
          </text>
          <text x="56" y="-10" fill="url(#goldTextGradSunny)" fontFamily="'Cabinet Grotesk', 'Impact', sans-serif" fontWeight="900" fontSize="84" letterSpacing="-2">
            X
          </text>
          <text x="40" y="28" textAnchor="middle" fill="#FFFFFF" opacity="0.8" fontFamily="sans-serif" fontWeight="800" fontSize="12" letterSpacing="4">
            CREATE · INSPIRE · PLAY · BEYOND
          </text>
          <line x1="-50" y1="42" x2="130" y2="42" stroke="url(#goldTextGradSunny)" strokeWidth="2" />
          <text x="40" y="68" textAnchor="middle" fill="url(#goldTextGradSunny)" fontFamily="'Cabinet Grotesk', 'Impact', sans-serif" fontWeight="900" fontSize="24" letterSpacing="2" fontStyle="italic">
            CHASE YOUR GRAND LINE
          </text>
        </g>

        {/* Right Pier: Wooden Pillar Signposts (DREAMS / DISCIPLINE / COMMUNITY / A BRIGHTER TOMORROW) */}
        <g transform="translate(1000, 160)">
          {/* Wooden Post */}
          <rect x="0" y="0" width="16" height="300" fill="#451A03" stroke="#292524" strokeWidth="2" />
          {/* Signboard 1: DREAMS */}
          <rect x="-60" y="30" width="130" height="32" rx="4" fill="#78350F" stroke="#F59E0B" strokeWidth="1.5" transform="rotate(-6 0 45)" />
          <text x="5" y="52" textAnchor="middle" fill="#FEF08A" fontFamily="sans-serif" fontWeight="900" fontSize="14" letterSpacing="2" transform="rotate(-6 0 45)">
            DREAMS
          </text>
          {/* Signboard 2: DISCIPLINE */}
          <rect x="-55" y="80" width="140" height="32" rx="4" fill="#78350F" stroke="#F59E0B" strokeWidth="1.5" transform="rotate(4 0 95)" />
          <text x="15" y="102" textAnchor="middle" fill="#FEF08A" fontFamily="sans-serif" fontWeight="900" fontSize="14" letterSpacing="2" transform="rotate(4 0 95)">
            DISCIPLINE
          </text>
          {/* Signboard 3: COMMUNITY */}
          <rect x="-65" y="130" width="145" height="32" rx="4" fill="#78350F" stroke="#F59E0B" strokeWidth="1.5" transform="rotate(-3 0 145)" />
          <text x="8" y="152" textAnchor="middle" fill="#FEF08A" fontFamily="sans-serif" fontWeight="900" fontSize="14" letterSpacing="2" transform="rotate(-3 0 145)">
            COMMUNITY
          </text>
          {/* Signboard 4: A BRIGHTER TOMORROW */}
          <rect x="-60" y="180" width="170" height="32" rx="4" fill="#78350F" stroke="#F59E0B" strokeWidth="1.5" transform="rotate(2 0 195)" />
          <text x="25" y="202" textAnchor="middle" fill="#FEF08A" fontFamily="sans-serif" fontWeight="900" fontSize="13" letterSpacing="1.5" transform="rotate(2 0 195)">
            A BRIGHTER TOMORROW
          </text>
        </g>
      </svg>
    </div>
  );
};
