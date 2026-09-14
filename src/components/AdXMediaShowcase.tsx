import React, { useState } from 'react';
import { Sparkles, Flame, Eye, Film, Download, Layers, Shield, Trophy, ExternalLink, Zap, Maximize2, X } from 'lucide-react';
import { AdXLogo } from './AdXLogo';
import { 
  WhyPickOneLanePoster, 
  AnimeFansWorkforcePoster, 
  NikeRuneHoopBanner, 
  GrandLineSunnyBanner 
} from './AdXMediaAssets';

type ShowcaseFilter = 'all' | 'showcase' | 'content' | 'crests';

export const AdXMediaShowcase: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<ShowcaseFilter>('all');
  const [selectedAssetModal, setSelectedAssetModal] = useState<string | null>(null);

  const showcaseItems = [
    {
      id: 'why-pick-one-lane',
      type: 'showcase' as const,
      title: 'WHY PICK ONE LANE? (FLAGSHIP POSTER)',
      subtitle: 'Official Sunset Arena & Grand Line Horizon Art',
      badge: 'BRAND MANIFESTO',
      badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
      description: 'The iconic visual statement for AdX: anime hooper #01 on the wet court at sunset looking out towards the ocean fortress. Proving you never have to shrink your vision to fit a single box.',
      motto: 'MORE THAN A GAME · CHASE YOUR GRAND LINE',
      renderComponent: <WhyPickOneLanePoster className="w-full h-full min-h-[460px]" />
    },
    {
      id: 'pov-anime-workforce',
      type: 'content' as const,
      title: 'POV: ANIME FANS ENTER THE WORKFORCE',
      subtitle: 'Episode 1: The Job Interview · Viral Comedy Skit',
      badge: 'VIRAL CONTENT · 4.8M VIEWS',
      badgeColor: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/40',
      description: 'Starring Gus charging a full Super Saiyan power stance during an entry-level job interview with flying office debris and glowing golden lightning aura while the interviewer facepalms in pure disbelief.',
      motto: 'ANIME. ABSURDITY. ENTERTAINMENT.',
      renderComponent: <AnimeFansWorkforcePoster className="w-full h-full min-h-[460px]" />
    },
    {
      id: 'nike-rune-hoop',
      type: 'showcase' as const,
      title: 'NIKE 10:10 ARENA & FLAMING RUNE HOOP',
      subtitle: 'Commercial Campaign Arena Banner',
      badge: 'SHOWCASE BANNER',
      badgeColor: 'bg-red-500/20 text-red-300 border-red-500/40',
      description: 'High-energy stadium banner featuring the glowing Nordic rune net engulfed in flames, Nike 10:10 digital shot clock, Japanese calligraphy 「夢は終わらない」, and the anime hooper with the straw hat tribute.',
      motto: 'BASKETBALL × MINDSET × CULTURE',
      renderComponent: <NikeRuneHoopBanner className="w-full h-full min-h-[300px]" />
    },
    {
      id: 'thousand-sunny-dock',
      type: 'showcase' as const,
      title: 'CHASE YOUR GRAND LINE: THOUSAND SUNNY DOCK',
      subtitle: 'One Piece Pirate Lore x Basketball Pier',
      badge: 'BRAND NARRATIVE',
      badgeColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40',
      description: 'The anime hooper standing on the stone dock holding his basketball as the Straw Hat pirate ship sails into a radiant sunset horizon. Signposts mark Dreams, Discipline, Community, and A Brighter Tomorrow.',
      motto: 'CREATE · INSPIRE · PLAY · BEYOND',
      renderComponent: <GrandLineSunnyBanner className="w-full h-full min-h-[300px]" />
    },
    {
      id: 'basketball-club-crest',
      type: 'crests' as const,
      title: 'AdX BASKETBALL CLUB CHAMPIONSHIP CREST',
      subtitle: 'Official Championship Shield & Flaming Rune Roundel',
      badge: 'OFFICIAL CREST',
      badgeColor: 'bg-amber-400/20 text-amber-300 border-amber-400/50',
      description: 'The golden championship crest featuring double winged borders, the 5-point royal crown, flaming basketball swishing through net, and ancient runic circle with "CHASE YOUR GRAND LINE".',
      motto: 'DREAM · DISCIPLINE · COMMUNITY · VICTORY',
      renderComponent: (
        <div className="w-full h-full min-h-[460px] bg-gradient-to-b from-[#1C1204] via-[#0D0903] to-[#0B0B12] rounded-2xl border border-amber-500/40 flex flex-col items-center justify-center p-8 text-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-radial from-amber-500/10 to-transparent pointer-events-none" />
          <AdXLogo size="hero" variant="crest" showTagline animated />
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            <span className="px-2.5 py-1 rounded bg-amber-500/10 border border-amber-500/30 text-amber-300 font-mono text-xs">
              VECTOR EMBLEM
            </span>
            <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-white/70 font-mono text-xs">
              4K GOLD METALLIC
            </span>
          </div>
        </div>
      )
    },
    {
      id: 'official-crown-lockup',
      type: 'crests' as const,
      title: 'OFFICIAL AdX CROWN & DRY-BRUSH LOGO LOCKUP',
      subtitle: 'Primary Brand Trademark & Tagline System',
      badge: 'BRAND IDENTITY',
      badgeColor: 'bg-yellow-400/20 text-yellow-300 border-yellow-400/50',
      description: 'The authentic brand mark: white textured dry-brush "Ad", crossed gold metallic foil brush "X", 5-point royal gold crown, and the quadrupedal domain: Anime × AI × Culture × Community.',
      motto: 'MORE THAN A GAME',
      renderComponent: (
        <div className="w-full h-full min-h-[460px] bg-gradient-to-b from-[#181829] via-[#0F0F1A] to-[#0B0B12] rounded-2xl border border-amber-500/40 flex flex-col items-center justify-center p-8 text-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-radial from-yellow-500/10 to-transparent pointer-events-none" />
          <AdXLogo size="hero" variant="lockup" animated />
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <span className="text-xs font-mono text-white/60">
              CROWN: 5-POINT ROYAL GOLD
            </span>
            <span className="text-xs font-mono text-amber-400">
              FOIL: METALLIC BRUSH X
            </span>
          </div>
        </div>
      )
    }
  ];

  const filteredItems = showcaseItems.filter(item => {
    if (activeFilter === 'all') return true;
    return item.type === activeFilter;
  });

  return (
    <section id="universe" className="relative py-24 md:py-32 overflow-hidden border-t border-white/5 bg-[#0A0A12]">
      {/* Ambient Lighting */}
      <div className="absolute top-1/4 right-10 w-[600px] h-[600px] rounded-full bg-amber-500/5 blur-[200px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] rounded-full bg-[#7C3AED]/10 blur-[180px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 mb-3 backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span className="font-impact text-xs tracking-widest uppercase text-amber-400">
                MEDIA VAULT & VISUAL UNIVERSE
              </span>
            </div>

            <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl tracking-tighter uppercase text-white">
              CONTENT & <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500">SHOWCASE VAULT</span>
            </h2>
            <p className="font-body text-base text-white/70 max-w-xl mt-2">
              Explore the official posters, viral anime skits, and brand crests shaping the AdX universe.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 bg-white/5 p-1.5 rounded-xl border border-white/10">
            {[
              { id: 'all', label: 'ALL MEDIA' },
              { id: 'showcase', label: 'SHOWCASE ART' },
              { id: 'content', label: 'VIRAL CONTENT' },
              { id: 'crests', label: 'BRAND CRESTS' },
            ].map((tab) => {
              const isActive = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveFilter(tab.id as ShowcaseFilter)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-display font-bold uppercase transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-amber-500 text-black shadow-[0_0_15px_rgba(245,158,11,0.4)]'
                      : 'text-white/70 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Media Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col rounded-3xl overflow-hidden bg-[#11111E] border border-white/10 hover:border-amber-500/50 transition-all duration-300 shadow-2xl group"
            >
              {/* Media Container with Full Render */}
              <div className="relative aspect-[4/5] sm:aspect-[16/11] overflow-hidden bg-black flex items-center justify-center">
                {item.renderComponent}

                {/* Top Overlay Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className={`px-3 py-1 rounded-full text-[11px] font-impact uppercase tracking-wider border backdrop-blur-md ${item.badgeColor}`}>
                    {item.badge}
                  </span>
                </div>

                {/* Inspect Overlay on Hover */}
                <button
                  onClick={() => setSelectedAssetModal(item.id)}
                  className="absolute bottom-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity p-2.5 rounded-xl bg-black/80 hover:bg-amber-500 text-white hover:text-black border border-white/20 transition-all cursor-pointer shadow-lg"
                  title="Expand to Full View"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>

              {/* Card Meta & Description */}
              <div className="p-6 flex flex-col justify-between flex-1 bg-[#0F0F1A]">
                <div>
                  <h3 className="font-display font-black text-xl text-white tracking-tight uppercase group-hover:text-amber-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="font-mono text-xs text-[#22D3EE] mt-0.5 mb-3">
                    {item.subtitle}
                  </p>
                  <p className="font-body text-sm text-white/75 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="font-impact text-xs text-amber-400 tracking-wider uppercase">
                    {item.motto}
                  </span>
                  <button
                    onClick={() => setSelectedAssetModal(item.id)}
                    className="inline-flex items-center gap-1.5 text-xs font-display font-bold text-white/80 hover:text-white uppercase transition-colors cursor-pointer"
                  >
                    <span>DETAILS</span>
                    <ExternalLink className="w-3.5 h-3.5 text-amber-400" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FULLSCREEN ASSET MODAL */}
        {selectedAssetModal && (() => {
          const asset = showcaseItems.find(i => i.id === selectedAssetModal);
          if (!asset) return null;
          return (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl">
              <div className="relative max-w-4xl w-full bg-[#121220] rounded-3xl border border-amber-500/50 shadow-[0_0_80px_rgba(245,158,11,0.25)] overflow-hidden max-h-[90vh] flex flex-col">
                {/* Modal Header */}
                <div className="flex items-center justify-between p-6 border-b border-white/10 bg-[#161626]">
                  <div>
                    <span className={`px-2.5 py-0.5 rounded text-[10px] font-impact uppercase tracking-wider border ${asset.badgeColor} inline-block mb-1`}>
                      {asset.badge}
                    </span>
                    <h3 className="font-display font-black text-2xl text-white uppercase">{asset.title}</h3>
                  </div>
                  <button
                    onClick={() => setSelectedAssetModal(null)}
                    className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white cursor-pointer transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Modal Body */}
                <div className="p-6 overflow-y-auto flex flex-col items-center">
                  <div className="w-full max-w-2xl aspect-[4/5] sm:aspect-video rounded-2xl overflow-hidden shadow-2xl mb-6 flex items-center justify-center">
                    {asset.renderComponent}
                  </div>
                  <p className="text-white/85 text-base leading-relaxed text-center max-w-2xl font-body">
                    {asset.description}
                  </p>
                  <div className="mt-4 font-impact text-sm text-amber-400 tracking-widest uppercase">
                    {asset.motto}
                  </div>
                </div>
              </div>
            </div>
          );
        })()}

      </div>
    </section>
  );
};
