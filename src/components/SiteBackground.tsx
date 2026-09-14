import React, { useState, useEffect } from 'react';
import { Image as ImageIcon, Sliders, Eye, EyeOff, Upload, Check, RefreshCw } from 'lucide-react';

interface SiteBackgroundProps {
  chaosMode?: boolean;
}

export const SiteBackground: React.FC<SiteBackgroundProps> = ({ chaosMode = false }) => {
  // Preset background options matching user's uploaded artwork
  const [backgroundIndex, setBackgroundIndex] = useState(0);
  const [customImage, setCustomImage] = useState<string | null>(null);
  const [opacityLevel, setOpacityLevel] = useState<number>(45); // 45% default - optimal anti-clash balance
  const [showControls, setShowControls] = useState<boolean>(false);
  const [useVignette, setUseVignette] = useState<boolean>(true);

  // Check if user previously saved a custom background in localStorage
  useEffect(() => {
    try {
      const savedBg = localStorage.getItem('adx_custom_bg');
      if (savedBg) {
        setCustomImage(savedBg);
      }
      const savedOpacity = localStorage.getItem('adx_bg_opacity');
      if (savedOpacity) {
        setOpacityLevel(Number(savedOpacity));
      }
    } catch {
      // Ignore storage errors in restricted contexts
    }
  }, []);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) {
          setCustomImage(result);
          try {
            localStorage.setItem('adx_custom_bg', result);
          } catch {
            // Storage quota handled
          }
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleOpacityChange = (val: number) => {
    setOpacityLevel(val);
    try {
      localStorage.setItem('adx_bg_opacity', String(val));
    } catch {
      // Ignore
    }
  };

  const presetThemes = [
    {
      id: 'grand-line',
      name: 'CHASE YOUR GRAND LINE',
      subtitle: 'Gear 5 Throne & Devil Fruit Sneaker',
      accent: '#FACC15'
    },
    {
      id: 'gear5-gus',
      name: 'GEAR 5 GUS (CORNELL #7)',
      subtitle: 'Game Day Shonen Transformation',
      accent: '#22D3EE'
    },
    {
      id: 'sunset-sunny',
      name: 'THOUSAND SUNNY ARENA',
      subtitle: 'Tropical Island Basketball Stadium',
      accent: '#7C3AED'
    }
  ];

  return (
    <>
      {/* FIXED LAYER 1: The Artistic Background Container */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none transition-opacity duration-700"
        style={{ opacity: opacityLevel / 100 }}
      >
        {customImage ? (
          // User Uploaded Image from device
          <div 
            className="w-full h-full bg-cover bg-center bg-no-repeat transition-all duration-700 scale-105"
            style={{ backgroundImage: `url(${customImage})` }}
          />
        ) : (
          // High-Fidelity SVG Illustration of Gus on the Basketball Throne (Gear 5 x Nike x One Piece)
          <div className="w-full h-full relative flex items-center justify-center">
            <svg 
              className="w-full h-full object-cover preserve-3d" 
              viewBox="0 0 1920 1080" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid slice"
            >
              <defs>
                {/* Sky & Stadium Gradients */}
                <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#0B0B14" />
                  <stop offset="35%" stopColor="#1E0D36" />
                  <stop offset="65%" stopColor="#3B154D" />
                  <stop offset="85%" stopColor="#2E103B" />
                  <stop offset="100%" stopColor="#11081C" />
                </linearGradient>

                {/* Sunset Sun Burst */}
                <radialGradient id="sunGlow" cx="0.5" cy="0.4" r="0.4">
                  <stop offset="0%" stopColor="#FACC15" stopOpacity="0.45" />
                  <stop offset="35%" stopColor="#EC4899" stopOpacity="0.25" />
                  <stop offset="70%" stopColor="#7C3AED" stopOpacity="0.1" />
                  <stop offset="100%" stopColor="#0B0B12" stopOpacity="0" />
                </radialGradient>

                {/* Glowing Gear 5 Aura */}
                <radialGradient id="gear5Aura" cx="0.5" cy="0.45" r="0.35">
                  <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
                  <stop offset="20%" stopColor="#E0F2FE" stopOpacity="0.5" />
                  <stop offset="50%" stopColor="#22D3EE" stopOpacity="0.3" />
                  <stop offset="80%" stopColor="#7C3AED" stopOpacity="0.15" />
                  <stop offset="100%" stopColor="#000000" stopOpacity="0" />
                </radialGradient>

                {/* Hardwood Basketball Court */}
                <linearGradient id="courtGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#4A2511" stopOpacity="0.9" />
                  <stop offset="30%" stopColor="#78350F" stopOpacity="0.95" />
                  <stop offset="70%" stopColor="#9A3412" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#271005" stopOpacity="0.98" />
                </linearGradient>

                {/* Basketball Texture Pattern */}
                <radialGradient id="ballShade" cx="0.35" cy="0.35" r="0.65">
                  <stop offset="0%" stopColor="#F97316" />
                  <stop offset="45%" stopColor="#EA580C" />
                  <stop offset="85%" stopColor="#9A3412" />
                  <stop offset="100%" stopColor="#431407" />
                </radialGradient>

                {/* Purple Devil Fruit Sneaker Glow */}
                <linearGradient id="devilFruitSneaker" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#9333EA" />
                  <stop offset="50%" stopColor="#7C3AED" />
                  <stop offset="100%" stopColor="#4C1D95" />
                </linearGradient>

                <filter id="glowEffect" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="15" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* 1. Deep Sky & Tropical Atmosphere */}
              <rect width="1920" height="1080" fill="url(#skyGrad)" />
              <rect width="1920" height="1080" fill="url(#sunGlow)" />

              {/* 2. Distant Palm Trees & Temple Colonnades */}
              <g opacity="0.35">
                {/* Left Palm Fronds */}
                <path d="M-50,0 Q180,120 220,380 C180,260 80,180 -50,150 Z" fill="#0E231F" />
                <path d="M-20,0 Q240,80 320,290 C220,220 120,130 -20,80 Z" fill="#091A17" />
                <path d="M0,80 Q290,180 380,450 C290,360 160,260 0,180 Z" fill="#132B25" />
                
                {/* Right Palm Fronds */}
                <path d="M1970,0 Q1740,120 1700,380 C1740,260 1840,180 1970,150 Z" fill="#0E231F" />
                <path d="M1940,0 Q1680,80 1600,290 C1700,220 1800,130 1940,80 Z" fill="#091A17" />
                <path d="M1920,80 Q1630,180 1540,450 C1630,360 1760,260 1920,180 Z" fill="#132B25" />

                {/* Colonnade Pillars */}
                <rect x="80" y="240" width="90" height="580" fill="#181528" rx="8" />
                <rect x="1750" y="240" width="90" height="580" fill="#181528" rx="8" />
              </g>

              {/* 3. Hardwood Basketball Floor with Court Lines */}
              <path d="M0,680 L1920,680 L1920,1080 L0,1080 Z" fill="url(#courtGrad)" />
              
              {/* Wooden Planks Pattern */}
              <g opacity="0.15" stroke="#000000" strokeWidth="2">
                {[700, 740, 780, 820, 860, 900, 940, 980, 1020, 1060].map((y) => (
                  <line key={y} x1="0" y1={y} x2="1920" y2={y} />
                ))}
              </g>

              {/* Painted Straw Hat Skull & Crossbones on the Hardwood Floor */}
              <g transform="translate(960, 960)" opacity="0.55">
                {/* Crossbones */}
                <path d="M-180,-70 L180,70 M-180,70 L180,-70" stroke="#FACC15" strokeWidth="18" strokeLinecap="round" />
                {/* Jolly Roger Skull */}
                <circle cx="0" cy="0" r="65" fill="#FFFFFF" />
                {/* Straw Hat */}
                <path d="M-90,-15 C-60,-50 60,-50 90,-15 Z" fill="#FACC15" />
                <rect x="-95" y="-18" width="190" height="12" rx="6" fill="#FACC15" />
                <rect x="-65" y="-22" width="130" height="8" fill="#EF4444" />
                {/* Eye Sockets */}
                <circle cx="-22" cy="10" r="14" fill="#0B0B12" />
                <circle cx="22" cy="10" r="14" fill="#0B0B12" />
                {/* Grin */}
                <path d="M-28,40 Q0,55 28,40" stroke="#0B0B12" strokeWidth="6" strokeLinecap="round" fill="none" />
                {/* Large Nike Swoosh beneath the Jolly Roger */}
                <path d="M-320,60 C-180,105 120,85 280,-20 C210,35 -40,75 -240,45 Z" fill="#000000" opacity="0.4" />
              </g>

              {/* 4. THE THRONE OF BASKETBALLS (Magnificent stacked pyramid) */}
              <g id="basketballThrone">
                {/* Throne Base Layer Balls */}
                {[
                  { cx: 720, cy: 840, r: 68 },
                  { cx: 830, cy: 850, r: 72 },
                  { cx: 960, cy: 860, r: 75 },
                  { cx: 1090, cy: 850, r: 72 },
                  { cx: 1200, cy: 840, r: 68 },
                  { cx: 650, cy: 820, r: 62 },
                  { cx: 1270, cy: 820, r: 62 },
                  
                  // Tier 2 Balls
                  { cx: 760, cy: 750, r: 65 },
                  { cx: 870, cy: 760, r: 68 },
                  { cx: 960, cy: 770, r: 70 },
                  { cx: 1050, cy: 760, r: 68 },
                  { cx: 1160, cy: 750, r: 65 },

                  // Throne Backrest Balls (High stacking)
                  { cx: 740, cy: 620, r: 58 },
                  { cx: 840, cy: 610, r: 62 },
                  { cx: 960, cy: 600, r: 65 },
                  { cx: 1080, cy: 610, r: 62 },
                  { cx: 1180, cy: 620, r: 58 },
                  
                  { cx: 780, cy: 500, r: 54 },
                  { cx: 880, cy: 480, r: 58 },
                  { cx: 960, cy: 470, r: 60 },
                  { cx: 1040, cy: 480, r: 58 },
                  { cx: 1140, cy: 500, r: 54 },

                  { cx: 830, cy: 390, r: 50 },
                  { cx: 960, cy: 370, r: 55 },
                  { cx: 1090, cy: 390, r: 50 },
                  { cx: 960, cy: 290, r: 52 }
                ].map((b, i) => (
                  <g key={i}>
                    <circle cx={b.cx} cy={b.cy} r={b.r} fill="url(#ballShade)" filter="drop-shadow(0 8px 12px rgba(0,0,0,0.6))" />
                    {/* Basketball Ribbing lines */}
                    <path 
                      d={`M${b.cx - b.r + 5},${b.cy} C${b.cx - 10},${b.cy - b.r/2} ${b.cx + 10},${b.cy + b.r/2} ${b.cx + b.r - 5},${b.cy}`} 
                      stroke="#1C0A04" 
                      strokeWidth="3.5" 
                      fill="none" 
                    />
                    <path 
                      d={`M${b.cx},${b.cy - b.r + 5} C${b.cx - b.r/2},${b.cy - 10} ${b.cx + b.r/2},${b.cy + 10} ${b.cx},${b.cy + b.r - 5}`} 
                      stroke="#1C0A04" 
                      strokeWidth="3.5" 
                      fill="none" 
                    />
                    {/* Nike Swoosh on select balls */}
                    {i % 2 === 0 && (
                      <path 
                        d={`M${b.cx - 20},${b.cy - 5} Q${b.cx},${b.cy + 12} ${b.cx + 25},${b.cy - 12} Q${b.cx + 5},${b.cy + 2} ${b.cx - 20},${b.cy - 5} Z`} 
                        fill="#FFFFFF" 
                        opacity="0.85" 
                      />
                    )}
                  </g>
                ))}
              </g>

              {/* 5. GEAR 5 GUS / LUFFY AURA & SILHOUETTE ON THE THRONE */}
              <g id="gear5Figure" transform="translate(960, 560)">
                {/* Swirling Divine Smoke Cloud Halo */}
                <circle cx="0" cy="-70" r="280" fill="url(#gear5Aura)" opacity="0.9" />
                
                {/* White Fiery Clouds around Shoulders & Head */}
                <path 
                  d="M-180,-90 C-240,-40 -200,60 -120,40 C-80,90 -20,90 20,60 C80,90 160,80 180,20 C240,40 260,-40 200,-100 C240,-180 150,-240 80,-210 C20,-270 -60,-260 -110,-210 C-190,-220 -230,-150 -180,-90 Z" 
                  fill="#FFFFFF" 
                  opacity="0.92"
                  filter="url(#glowEffect)"
                />

                {/* Fiery Spiky Cloud Hair */}
                <path 
                  d="M-90,-160 C-110,-240 -60,-310 -10,-320 C10,-280 40,-290 60,-330 C100,-290 120,-220 90,-160 C130,-180 150,-130 110,-100 C70,-50 -70,-50 -110,-100 C-140,-130 -120,-170 -90,-160 Z" 
                  fill="#FFFFFF"
                />

                {/* Face & Confident Smile */}
                <circle cx="0" cy="-110" r="55" fill="#D97706" opacity="0.3" />
                
                {/* Glowing Cyan Eyes */}
                <ellipse cx="-22" cy="-125" rx="9" ry="6" fill="#22D3EE" filter="drop-shadow(0 0 8px #22D3EE)" />
                <ellipse cx="22" cy="-125" rx="9" ry="6" fill="#22D3EE" filter="drop-shadow(0 0 8px #22D3EE)" />
                <circle cx="-22" cy="-125" r="3" fill="#FFFFFF" />
                <circle cx="22" cy="-125" r="3" fill="#FFFFFF" />

                {/* Iconic Charismatic Smirk */}
                <path d="M-25,-92 Q0,-72 25,-92" stroke="#FFFFFF" strokeWidth="5" strokeLinecap="round" fill="none" />

                {/* Open Red Captain Jacket / Cornell Red Uniform */}
                <path d="M-105,-40 L-40,120 L-85,140 L-145,-10 Z" fill="#DC2626" />
                <path d="M105,-40 L40,120 L85,140 L145,-10 Z" fill="#DC2626" />

                {/* Muscular Torso with X Chest Scar */}
                <path d="M-55,-20 L55,-20 L40,120 L-40,120 Z" fill="#B45309" opacity="0.65" />
                <path d="M-28,30 L28,70 M-28,70 L28,30" stroke="#78350F" strokeWidth="6" strokeLinecap="round" />

                {/* Yellow Sash & Jean Shorts */}
                <rect x="-60" y="115" width="120" height="22" rx="4" fill="#FACC15" />
                <path d="M-75,135 L75,135 L90,240 L-90,240 Z" fill="#1D4ED8" opacity="0.85" />
                <path d="M-92,235 C-92,250 -60,255 -55,240 C-50,255 -20,255 -15,240" fill="#FFFFFF" />
                <path d="M15,240 C20,255 50,255 55,240 C60,255 92,250 92,235" fill="#FFFFFF" />

                {/* 6. HELD HIGH: THE CUSTOM NIKE X ONE PIECE DEVIL FRUIT SNEAKER */}
                <g transform="translate(-140, -130) rotate(-18)">
                  {/* Sneaker Outsole & Midsole */}
                  <path d="M-100,55 L85,55 C105,55 115,40 100,20 L80,-15 C75,-25 60,-28 45,-25 L-50,-5 C-65,-2 -85,15 -100,55 Z" fill="url(#devilFruitSneaker)" />
                  {/* Crisp White Midsole with Air Units */}
                  <rect x="-105" y="45" width="220" height="22" rx="8" fill="#FFFFFF" />
                  <rect x="-85" y="49" width="35" height="12" rx="4" fill="#22D3EE" opacity="0.7" />
                  
                  {/* Neon Lime Green Swoosh */}
                  <path d="M-70,25 C-30,35 40,30 75,-15 C55,10 -15,22 -65,18 Z" fill="#A3E635" filter="drop-shadow(0 0 6px #A3E635)" />

                  {/* Swirling Gomu Gomu Devil Fruit Cloud Engraving on Upper */}
                  <path d="M-40,15 C-25,5 -15,25 0,15 C15,5 25,25 40,15" stroke="#FACC15" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.75" />
                  
                  {/* Sneaker Aura Glow */}
                  <circle cx="0" cy="15" r="95" fill="#7C3AED" opacity="0.25" filter="url(#glowEffect)" />
                </g>
              </g>

              {/* 7. DYNAMIC ANIME DISPLAY TYPOGRAPHY (CHASE YOUR GRAND LINE) */}
              <g transform="translate(960, 810)">
                <text 
                  x="0" 
                  y="0" 
                  textAnchor="middle" 
                  fontFamily="'Bebas Neue', 'Montserrat', sans-serif" 
                  fontSize="82" 
                  fontWeight="900" 
                  fill="#FFFFFF" 
                  letterSpacing="4"
                  style={{ textShadow: '0 8px 30px rgba(0,0,0,0.9), 0 0 40px rgba(250,204,21,0.5)' }}
                >
                  CHASE YOUR
                </text>
                <text 
                  x="0" 
                  y="75" 
                  textAnchor="middle" 
                  fontFamily="'Bebas Neue', 'Montserrat', sans-serif" 
                  fontSize="110" 
                  fontWeight="900" 
                  fill="#FACC15" 
                  letterSpacing="6"
                  fontStyle="italic"
                  style={{ textShadow: '0 10px 40px rgba(0,0,0,0.95), 0 0 50px rgba(250,204,21,0.7)' }}
                >
                  GRAND LINE
                </text>
              </g>
            </svg>
          </div>
        )}
      </div>

      {/* FIXED LAYER 2: THE "ANTI-CLASH" MULTI-STOP COMPLEMENTARY MASKS */}
      {useVignette && (
        <div className="fixed inset-0 pointer-events-none z-0">
          {/* Deep dark top gradient (keeps Navbar and Hero headline 100% legible) */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B12]/92 via-[#0B0B12]/75 to-[#0B0B12]/95" />

          {/* Radial spotlight: softly illuminates the central character artwork while darkening reading zones */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(11,11,18,0.65)_50%,rgba(11,11,18,0.95)_100%)]" />

          {/* Manga Halftone Grid overlay that bonds the artwork into the AdX comic universe */}
          <div className="absolute inset-0 bg-halftone opacity-20 mix-blend-overlay" />

          {/* Atmospheric Brand Rim Light Gradients */}
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#7C3AED]/15 rounded-full blur-[180px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-[#22D3EE]/15 rounded-full blur-[180px]" />
          
          {chaosMode && (
            <div className="absolute inset-0 bg-gradient-to-tr from-[#EC4899]/15 via-transparent to-[#FACC15]/15 mix-blend-screen animate-pulse" />
          )}
        </div>
      )}

      {/* FLOATING QUICK CONTROLS: "BACKGROUND AMBIENCE" (Bottom-right pill) */}
      <div className="fixed bottom-6 right-6 z-40">
        <div className="relative">
          {showControls ? (
            <div className="mb-3 p-4 rounded-2xl bg-[#0F0F1A]/95 backdrop-blur-xl border-2 border-[#7C3AED]/60 shadow-[0_20px_50px_rgba(0,0,0,0.9)] w-72 text-white animate-in fade-in slide-in-from-bottom-3 duration-200">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Sliders className="w-4 h-4 text-[#FACC15]" />
                  <span className="font-impact text-sm tracking-wider uppercase text-white">
                    BACKGROUND TUNING
                  </span>
                </div>
                <button
                  onClick={() => setShowControls(false)}
                  className="text-white/60 hover:text-white text-xs font-mono px-2 py-0.5 rounded bg-white/5"
                >
                  ESC
                </button>
              </div>

              {/* Opacity Slider */}
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-xs font-mono text-white/70">
                  <span>Intensity</span>
                  <span className="text-[#FACC15] font-bold">{opacityLevel}%</span>
                </div>
                <input
                  type="range"
                  min="15"
                  max="90"
                  value={opacityLevel}
                  onChange={(e) => handleOpacityChange(Number(e.target.value))}
                  className="w-full h-1.5 bg-white/20 rounded-lg appearance-none cursor-pointer accent-[#FACC15]"
                />
                <div className="flex justify-between text-[10px] text-white/40 font-mono">
                  <span>Subtle (Dark)</span>
                  <span>Balanced</span>
                  <span>Vivid (Art)</span>
                </div>
              </div>

              {/* Anti-Clash Vignette Toggle */}
              <div className="flex items-center justify-between py-2 border-t border-white/10 text-xs">
                <span className="text-white/80">Anti-Clash Shield</span>
                <button
                  onClick={() => setUseVignette(!useVignette)}
                  className={`px-2.5 py-1 rounded-full text-[11px] font-impact uppercase tracking-wider transition-colors ${
                    useVignette 
                      ? 'bg-[#22D3EE]/20 text-[#22D3EE] border border-[#22D3EE]/40' 
                      : 'bg-white/5 text-white/50 border border-white/10'
                  }`}
                >
                  {useVignette ? 'PROTECTED' : 'RAW IMAGE'}
                </button>
              </div>

              {/* Upload Local Image File */}
              <div className="mt-3 pt-3 border-t border-white/10">
                <label className="flex items-center justify-center gap-2 w-full py-2 px-3 rounded-xl bg-[#7C3AED]/20 hover:bg-[#7C3AED]/30 border border-[#7C3AED]/40 text-xs font-impact tracking-wider uppercase text-[#22D3EE] cursor-pointer transition-all">
                  <Upload className="w-3.5 h-3.5" />
                  <span>USE MY IMAGE FILE</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                </label>
                {customImage && (
                  <button
                    onClick={() => {
                      setCustomImage(null);
                      try {
                        localStorage.removeItem('adx_custom_bg');
                      } catch {}
                    }}
                    className="w-full text-center mt-2 text-[10px] text-red-400/80 hover:text-red-300 underline font-mono"
                  >
                    Reset to Default Grand Line Art
                  </button>
                )}
              </div>
            </div>
          ) : null}

          {/* Toggle Button */}
          <button
            onClick={() => setShowControls(!showControls)}
            title="Adjust background artwork and contrast"
            className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#0F0F1A]/90 hover:bg-[#1E1235] border-2 border-[#7C3AED]/50 hover:border-[#FACC15] text-white backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.8)] transition-all group"
          >
            <ImageIcon className="w-4 h-4 text-[#FACC15] group-hover:rotate-12 transition-transform" />
            <span className="font-impact text-xs tracking-wider uppercase text-white/90 group-hover:text-white">
              BG AMBIENCE ({opacityLevel}%)
            </span>
          </button>
        </div>
      </div>
    </>
  );
};
