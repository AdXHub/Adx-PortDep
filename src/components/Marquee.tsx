import React from 'react';

export const Marquee: React.FC = () => {
  const items = [
    { text: 'ANIME. ABSURDITY. ENTERTAINMENT.', highlight: true },
    { text: 'ドドド', kanji: true },
    { text: 'MAKE ANIME CULTURE IMPOSSIBLE TO SCROLL PAST.', highlight: false },
    { text: 'ゴゴゴ', kanji: true },
    { text: 'NO PLOT ARMOUR IS SAFE.', highlight: true },
    { text: 'ズキューン', kanji: true },
    { text: 'COMEDY. COMMENTARY. CHARACTERS.', highlight: false },
    { text: 'バーン', kanji: true },
    { text: '40% JESTER × 25% CREATOR', highlight: true },
  ];

  return (
    <div className="relative w-full py-4 bg-[#11111E] border-y border-[#7C3AED]/40 overflow-hidden select-none">
      {/* Track 1: Leftward infinite flow */}
      <div className="flex w-max animate-marquee space-x-8 items-center">
        {[...items, ...items, ...items].map((item, idx) => (
          <div key={idx} className="flex items-center space-x-6 shrink-0">
            {item.kanji ? (
              <span className="font-impact text-2xl text-[#EC4899] font-black tracking-widest opacity-90">
                {item.text}
              </span>
            ) : item.highlight ? (
              <span className="font-display font-black text-sm md:text-base text-[#FACC15] tracking-wider uppercase drop-shadow-[0_0_10px_rgba(250,204,21,0.3)]">
                {item.text}
              </span>
            ) : (
              <span className="font-display font-extrabold text-sm md:text-base text-white/90 tracking-wider uppercase">
                {item.text}
              </span>
            )}
            <span className="text-[#22D3EE] font-black text-lg">✕</span>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-marquee {
          animation: marquee 35s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};
