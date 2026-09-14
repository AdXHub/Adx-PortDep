import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize2, Sparkles, Flame, RotateCcw, Upload, Film, ChevronLeft, ChevronRight, Check } from 'lucide-react';
import { AdXLogo } from './AdXLogo';

export interface VideoReel {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: string;
  duration: string;
  speaker: string;
  dialogue: string;
  subtitles: string[];
  visualTheme: 'sunset' | 'skit' | 'hoops' | 'cyber' | 'tech' | 'flame' | 'gear5' | 'crest';
  accentColor: string;
  bgGradient: string;
}

export const Showreel: React.FC = () => {
  const [activeReelIndex, setActiveReelIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [videoFileUrl, setVideoFileUrl] = useState<string | null>(null);
  const [customReelMap, setCustomReelMap] = useState<Record<string, string>>({});
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // The 8 uploaded videos and brand reels from the creator
  const reels: VideoReel[] = [
    {
      id: 'reel-anthem',
      number: 'REEL 01',
      title: 'WHY PICK ONE LANE? (OFFICIAL ANTHEM)',
      subtitle: 'Brand Manifesto & Creator Philosophy',
      category: 'Brand Manifesto',
      duration: '00:32',
      speaker: 'GUS (AdX CREATOR)',
      dialogue: 'They told me: Gus, why don\'t you choose one lane? Why pick one thing? ... Why choose at all? Because the moment you shrink your vision, it\'s finished. We created AdX, where every passion becomes one fearless vision. More than a game. Welcome to AdX.',
      subtitles: [
        'They told me: Gus, why don\'t you choose one lane? Why pick one thing?',
        'Anime, comedy, sports, tech... why choose at all?',
        'Because the moment you shrink your vision, it\'s finished.',
        'We created AdX, where every passion becomes one fearless vision.',
        'More than a game. Welcome to AdX.'
      ],
      visualTheme: 'sunset',
      accentColor: '#F59E0B',
      bgGradient: 'from-[#451A03] via-[#1C0D05] to-[#0B0B12]'
    },
    {
      id: 'reel-hot-sauce',
      number: 'REEL 02',
      title: 'THE PROTAGONIST DIET (HOT SAUCE TRAINING)',
      subtitle: 'Viral Comedy Skit · 6.2M Views',
      category: 'Anime Comedy Skit',
      duration: '00:26',
      speaker: 'GUS & EXHAUSTED CUSTOMER',
      dialogue: 'A protagonist never retreats! That\'s our hottest sauce? Excellent, the training begins. Sir, that\'s the mild one. Bring me milk... the ancestors have voted.',
      subtitles: [
        'Friend: "You can stop, bro."',
        'Gus (sweating intensely in durag): "A protagonist never retreats!"',
        'Waiter: "That\'s our hottest sauce."',
        'Gus: "EXCELLENT. The training begins!"',
        'Customer crying: "My ancestors survived hardship so I could defeat this chicken!"',
        'Gus taking order: "Sir, that\'s the mild one."',
        'Customer: "Bring me milk. The ancestors have voted."'
      ],
      visualTheme: 'skit',
      accentColor: '#EF4444',
      bgGradient: 'from-[#7F1D1D] via-[#2A0808] to-[#0B0B12]'
    },
    {
      id: 'reel-championship-spark',
      number: 'REEL 03',
      title: 'ANIME HOOPS: CHAMPIONSHIP SPARK',
      subtitle: 'VFX Action & Confetti Celebration',
      category: 'VFX & Basketball',
      duration: '00:18',
      speaker: 'COMMENTATOR & CREW',
      dialogue: 'Lightning dribble through three defenders! Golden electric trail sparks off the hardwood into the confetti explosion under the AdX Crown.',
      subtitles: [
        'Golden electric trail charging off the crossover!',
        'Step-back behind the arc with manga speedlines!',
        'Swish! Confetti showers the arena under the AdX Crown!',
        'Tokyo neon screens light up with the AdX family!'
      ],
      visualTheme: 'hoops',
      accentColor: '#FACC15',
      bgGradient: 'from-[#78350F] via-[#2E1065] to-[#0B0B12]'
    },
    {
      id: 'reel-cyber-court',
      number: 'REEL 04',
      title: 'CYBER COURT: THE TUNNEL WALK',
      subtitle: 'Futuristic AI Arena Walkout',
      category: 'Cinematic Concept',
      duration: '00:22',
      speaker: 'STADIUM ANNOUNCER',
      dialogue: 'Hooper #01 in black and gold jersey steps out of the dark tunnel into the neon metropolis cyber arena. Roar of 50,000 fans echoes across the digital skyline.',
      subtitles: [
        'Footsteps echoing through the dark stadium concourse...',
        'Holographic digital waves pulsing across the sky...',
        'Hooper #01 emerges onto the glowing cyber court hardwood.',
        'Welcome to the future of anime and sport.'
      ],
      visualTheme: 'cyber',
      accentColor: '#22D3EE',
      bgGradient: 'from-[#083344] via-[#0D1829] to-[#0B0B12]'
    },
    {
      id: 'reel-tech-ignition',
      number: 'REEL 05',
      title: 'TECH IGNITION: CIRCUIT BASKETBALL',
      subtitle: '3D Gold Microchip to Crown Reveal',
      category: '3D Motion Identity',
      duration: '00:14',
      speaker: 'SYSTEM INITIALIZING',
      dialogue: 'Golden microprocessor basketball pulsing with neural circuit board electricity, swirling energy vortex ignites into the 3D AdX Royal Crown.',
      subtitles: [
        '[SYSTEM BOOT]: Neural Basketball Engine Online',
        'Circuit board traces radiating high-voltage gold arcs...',
        'Kinetic vortex collapsing inward at critical mass...',
        '[IGNITION]: The Official AdX Crown Unlocked.'
      ],
      visualTheme: 'tech',
      accentColor: '#F59E0B',
      bgGradient: 'from-[#2E1065] via-[#451A03] to-[#0B0B12]'
    },
    {
      id: 'reel-flaming-hoop',
      number: 'REEL 06',
      title: 'MANGA SPEED STRIKE: FLAMING RUNE HOOP',
      subtitle: 'High Impact Shonen Slam',
      category: 'Visual Effects',
      duration: '00:12',
      speaker: 'SHONEN ACTION IMPACT',
      dialogue: 'Flaming basketball crashing through the Nordic rune net with explosive manga speedlines and shattered backboard sparks.',
      subtitles: [
        'Dunk of God ignited from the free throw line!',
        'Nordic rune circle glowing at maximum intensity!',
        'Flaming net combusts on contact! ZZZT!',
        'Direct hit. Pure adrenaline.'
      ],
      visualTheme: 'flame',
      accentColor: '#EA580C',
      bgGradient: 'from-[#9A3412] via-[#431407] to-[#0B0B12]'
    },
    {
      id: 'reel-gear-5',
      number: 'REEL 07',
      title: 'NIKE x ONE PIECE: GEAR 5 GUS',
      subtitle: 'Drums of Liberation on Hardwood',
      category: 'Commercial Campaign',
      duration: '00:30',
      speaker: 'GEAR 5 GUS',
      dialogue: 'Pattern recognition is easy when you\'re the one changing the shape of the world. Pressure reveals the pattern, and this pattern is pure joy!',
      subtitles: [
        'Throne of basketballs: "Pattern recognition is easy..."',
        'Drums of Liberation! White cloud hair transformation!',
        'Directing the fire baby! Watch the neon rings light up!',
        'Watch me turn this game into a masterpiece!'
      ],
      visualTheme: 'gear5',
      accentColor: '#7C3AED',
      bgGradient: 'from-[#581C87] via-[#1E1B4B] to-[#0B0B12]'
    },
    {
      id: 'reel-sunset-sparkle',
      number: 'REEL 08',
      title: 'THE GRAND LINE SUNSET: SPARKLE AURA',
      subtitle: 'Coastal Court to 3D Shield Crest',
      category: 'Brand Awakening',
      duration: '00:20',
      speaker: 'CHASE YOUR GRAND LINE',
      dialogue: 'Hooper walking out onto wet court at golden sunset, sparkling magic aura wraps around him and coalesces into the 3D spinning AdX Basketball Crest.',
      subtitles: [
        'Ocean waves crashing against the stone arena pier...',
        'Golden light catching the wet hardwood reflections...',
        'Sparkling starlight aura wraps around the hooper...',
        'The AdX Basketball Club Crest awakens.'
      ],
      visualTheme: 'crest',
      accentColor: '#FDE047',
      bgGradient: 'from-[#78350F] via-[#3B0764] to-[#0B0B12]'
    }
  ];

  const currentReel = reels[activeReelIndex];

  // Check if custom video exists for active reel
  useEffect(() => {
    const custom = customReelMap[currentReel.id];
    if (custom) {
      setVideoFileUrl(custom);
    } else {
      setVideoFileUrl(null);
    }
    setProgress(0);
    setSubIndex(0);
    setIsPlaying(false);
  }, [activeReelIndex, customReelMap, currentReel.id]);

  // Player Ticker
  useEffect(() => {
    if (!isPlaying) return;

    if (videoFileUrl && videoRef.current) {
      videoRef.current.play();
      return;
    }

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setIsPlaying(false);
          return 0;
        }
        return prev + 1;
      });
    }, 130);

    return () => clearInterval(interval);
  }, [isPlaying, videoFileUrl]);

  // Subtitle sync
  useEffect(() => {
    if (videoFileUrl) return;
    const numSubs = currentReel.subtitles.length;
    const step = 100 / numSubs;
    const currentSub = Math.min(Math.floor(progress / step), numSubs - 1);
    setSubIndex(currentSub);
  }, [progress, videoFileUrl, currentReel]);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setCustomReelMap(prev => ({ ...prev, [currentReel.id]: url }));
      setVideoFileUrl(url);
      setIsPlaying(true);
      if (videoRef.current) {
        videoRef.current.src = url;
        videoRef.current.play();
      }
    }
  };

  const togglePlay = () => {
    if (videoRef.current && videoFileUrl) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <section id="showreel" className="relative py-24 md:py-32 overflow-hidden border-t border-white/5 bg-[#08080E]">
      {/* Background Ambience */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full bg-amber-500/10 blur-[180px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#7C3AED]/20 border border-[#7C3AED]/50 mb-4 backdrop-blur-md">
            <Flame className="w-4 h-4 text-[#FACC15] animate-pulse" />
            <span className="font-impact text-xs tracking-widest uppercase text-[#FACC15]">
              OFFICIAL CREATOR REELS & SHOWCASES
            </span>
          </div>

          <h2 className="font-display font-black text-4xl sm:text-6xl tracking-tighter uppercase text-white mb-3">
            WATCH THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FACC15] via-[#22D3EE] to-[#7C3AED]">CHAOS IN MOTION</span>
          </h2>

          <p className="font-body text-base sm:text-lg text-white/80 max-w-2xl mx-auto">
            From viral anime comedy skits to high-octane commercial brand anthems. Experience the authentic AdX universe.
          </p>
        </div>

        {/* REEL SELECTOR TABS (8 Uploaded Videos) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
          {reels.map((reel, index) => {
            const isActive = activeReelIndex === index;
            return (
              <button
                key={reel.id}
                onClick={() => setActiveReelIndex(index)}
                className={`shrink-0 px-4 py-2.5 rounded-xl border text-xs font-display font-bold uppercase transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                  isActive
                    ? 'bg-amber-500/20 border-amber-500 text-amber-300 shadow-[0_0_20px_rgba(245,158,11,0.3)]'
                    : 'bg-white/5 border-white/10 text-white/70 hover:text-white hover:bg-white/10'
                }`}
              >
                <span className="font-mono text-[10px] text-[#22D3EE] font-black">{reel.number}</span>
                <span className="truncate max-w-[160px] sm:max-w-[200px]">{reel.title.split('(')[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Video Player Frame with Custom Controls */}
        <div className="relative rounded-3xl overflow-hidden bg-[#0D0D17] border-2 border-amber-500/40 shadow-[0_20px_80px_rgba(0,0,0,0.9),0_0_60px_rgba(245,158,11,0.2)]">
          
          {/* Top Player Status Bar */}
          <div className="flex items-center justify-between px-6 py-3.5 bg-[#121222] border-b border-white/10 text-xs font-mono text-white/75">
            <div className="flex items-center gap-3">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500" />
              </span>
              <span className="font-bold text-white tracking-wider">{currentReel.number}: {currentReel.title}</span>
              <span className="hidden sm:inline-block text-white/30">•</span>
              <span className="hidden sm:inline-block text-[#22D3EE]">{currentReel.category}</span>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-amber-300 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/30 text-[11px] font-bold">
                {currentReel.duration}
              </span>
              {/* Optional Local Video File Picker */}
              <label className="cursor-pointer hover:text-[#22D3EE] transition-colors inline-flex items-center gap-1 text-[11px]" title="Upload MP4 from your files">
                <Upload className="w-3.5 h-3.5" />
                <span className="hidden md:inline">Drop MP4</span>
                <input type="file" accept="video/*" onChange={handleFileUpload} className="hidden" />
              </label>
            </div>
          </div>

          {/* MAIN PLAYER VIEWPORT */}
          <div className="relative aspect-video w-full overflow-hidden flex items-center justify-center">
            
            {/* If user provided direct MP4 video file */}
            {videoFileUrl ? (
              <video
                ref={videoRef}
                src={videoFileUrl}
                className="w-full h-full object-cover"
                muted={isMuted}
                loop
                playsInline
                onClick={togglePlay}
              />
            ) : (
              /* DYNAMIC VISUAL SIMULATION CANVAS */
              <div className={`w-full h-full bg-gradient-to-b ${currentReel.bgGradient} relative flex items-center justify-center p-8 overflow-hidden`}>
                
                {/* Visual Simulation Elements per theme */}
                {currentReel.visualTheme === 'sunset' && (
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-80">
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                    {/* Sunset court sun & reflections */}
                    <div className="w-64 h-64 rounded-full bg-amber-500/30 blur-3xl animate-pulse" />
                    <AdXLogo size="hero" variant="lockup" animated />
                  </div>
                )}

                {currentReel.visualTheme === 'skit' && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center pointer-events-none">
                    <div className="px-4 py-1.5 rounded-full bg-red-600/30 border border-red-500 text-red-300 font-impact text-sm uppercase mb-4 tracking-widest">
                      VIRAL SKIT SCENE · 6.2M VIEWS
                    </div>
                    <h3 className="font-display font-black text-3xl sm:text-5xl text-white uppercase tracking-tight max-w-2xl mb-4">
                      "A PROTAGONIST NEVER RETREATS!"
                    </h3>
                    <p className="font-mono text-sm text-yellow-300 bg-black/60 px-4 py-2 rounded-lg border border-yellow-500/40">
                      Gus in durag sweating eating mild sauce · "Bring me milk, the ancestors have voted."
                    </p>
                  </div>
                )}

                {currentReel.visualTheme === 'gear5' && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center pointer-events-none">
                    <div className="w-72 h-72 rounded-full bg-purple-600/30 blur-3xl" />
                    <div className="px-4 py-1 rounded-full bg-purple-600/30 border border-purple-400 text-purple-300 font-impact text-xs uppercase mb-3">
                      NIKE x ONE PIECE · GEAR 5 CORNELL #7
                    </div>
                    <h3 className="font-display font-black text-4xl sm:text-6xl text-white uppercase tracking-tight">
                      DRUMS OF LIBERATION
                    </h3>
                    <span className="font-impact text-xl text-yellow-400 mt-2">
                      "PATTERN RECOGNITION IS EASY WHEN YOU CHANGE THE WORLD"
                    </span>
                  </div>
                )}

                {currentReel.visualTheme === 'cyber' && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none">
                    <div className="w-96 h-96 rounded-full bg-cyan-500/20 blur-3xl" />
                    <AdXLogo size="xl" variant="default" animated />
                    <span className="font-mono text-xs text-cyan-400 tracking-[0.3em] uppercase mt-4">
                      [CYBER ARENA TUNNEL WALK · 4K 60FPS]
                    </span>
                  </div>
                )}

                {currentReel.visualTheme === 'tech' && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none">
                    <div className="w-64 h-64 rounded-full bg-amber-500/40 blur-2xl animate-spin" />
                    <AdXLogo size="hero" variant="crest" animated />
                  </div>
                )}

                {(currentReel.visualTheme === 'hoops' || currentReel.visualTheme === 'flame' || currentReel.visualTheme === 'crest') && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none">
                    <AdXLogo size="hero" variant="crest" animated />
                    <span className="font-impact text-lg text-amber-300 mt-4 tracking-widest uppercase">
                      CHASE YOUR GRAND LINE · MORE THAN A GAME
                    </span>
                  </div>
                )}

                {/* Subtitle Teleprompter HUD */}
                <div className="absolute bottom-6 left-6 right-6 z-20">
                  <div className="max-w-3xl mx-auto bg-black/80 backdrop-blur-md rounded-xl p-4 border border-amber-500/30 shadow-2xl">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                      <span className="font-mono text-[10px] text-amber-300 font-bold uppercase tracking-wider">
                        {currentReel.speaker}
                      </span>
                    </div>
                    <p className="font-body text-sm sm:text-base text-white font-medium leading-relaxed">
                      "{currentReel.subtitles[subIndex] || currentReel.dialogue}"
                    </p>
                  </div>
                </div>

                {/* Big Center Play Overlay Button */}
                {!isPlaying && (
                  <button
                    onClick={togglePlay}
                    className="absolute inset-0 z-30 flex items-center justify-center bg-black/40 hover:bg-black/20 transition-all cursor-pointer group"
                    aria-label="Play Reel"
                  >
                    <div className="w-20 h-20 rounded-full bg-amber-500/90 hover:bg-amber-400 flex items-center justify-center shadow-[0_0_40px_rgba(245,158,11,0.6)] transform group-hover:scale-110 transition-transform">
                      <Play className="w-9 h-9 fill-black text-black ml-1" />
                    </div>
                  </button>
                )}
              </div>
            )}
          </div>

          {/* Bottom Custom Playback Bar */}
          <div className="p-4 sm:p-6 bg-[#0E0E1A] border-t border-white/10">
            {/* Progress Bar */}
            <div className="relative w-full h-1.5 bg-white/10 rounded-full mb-4 cursor-pointer overflow-hidden">
              <div
                className="absolute top-0 left-0 bottom-0 bg-gradient-to-r from-amber-500 to-yellow-300 transition-all duration-100"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <button
                  onClick={togglePlay}
                  className="w-10 h-10 rounded-xl bg-amber-500 hover:bg-amber-400 text-black flex items-center justify-center font-bold transition-transform hover:scale-105 cursor-pointer"
                >
                  {isPlaying ? <Pause className="w-5 h-5 fill-black" /> : <Play className="w-5 h-5 fill-black ml-0.5" />}
                </button>

                <button
                  onClick={() => {
                    setActiveReelIndex((prev) => (prev > 0 ? prev - 1 : reels.length - 1));
                  }}
                  className="p-2 text-white/60 hover:text-white transition-colors cursor-pointer"
                  title="Previous Reel"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <button
                  onClick={() => {
                    setActiveReelIndex((prev) => (prev < reels.length - 1 ? prev + 1 : 0));
                  }}
                  className="p-2 text-white/60 hover:text-white transition-colors cursor-pointer"
                  title="Next Reel"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="p-2 text-white/60 hover:text-white transition-colors cursor-pointer"
                >
                  {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                </button>

                <span className="font-mono text-xs text-white/50">
                  {currentReel.number} / 08
                </span>
              </div>

              {/* Tagline pill */}
              <div className="font-impact text-xs text-amber-400 tracking-widest uppercase hidden md:inline-block">
                MORE THAN A GAME · CHASE YOUR GRAND LINE
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
