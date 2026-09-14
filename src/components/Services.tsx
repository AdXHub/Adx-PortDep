import React, { useState } from 'react';
import { SERVICES_DATA, COMMERCIAL_INDUSTRIES } from '../data/portfolioData';
import { Sparkles, ArrowRight, CheckCircle, Briefcase, Zap, Flame } from 'lucide-react';

interface ServicesProps {
  onSelectServiceForContact?: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectServiceForContact }) => {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const handleInquire = (serviceTitle: string) => {
    if (onSelectServiceForContact) {
      onSelectServiceForContact(serviceTitle);
    }
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="relative py-24 md:py-32 bg-[#0E0E18] overflow-hidden border-t border-white/5">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-halftone opacity-25 pointer-events-none" />
      <div className="absolute top-1/4 -right-40 w-96 h-96 rounded-full bg-[#7C3AED]/20 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-40 w-96 h-96 rounded-full bg-[#22D3EE]/15 blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-[#FACC15]/40 mb-4 backdrop-blur-md">
            <Briefcase className="w-3.5 h-3.5 text-[#FACC15]" />
            <span className="font-impact text-xs tracking-widest uppercase text-[#FACC15]">
              COMMERCIAL SERVICES & CREATIVE CAPABILITIES
            </span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl tracking-tighter uppercase text-white mb-4">
            LET'S MAKE SOMETHING <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FACC15] via-white to-[#22D3EE]">
              PEOPLE ACTUALLY WATCH.
            </span>
          </h2>

          <p className="font-body text-base sm:text-xl text-white/75 font-normal max-w-2xl">
            Entertainment-first content engineered for cultural relevance, organic shareability, and genuine audience loyalty.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-20">
          {SERVICES_DATA.map((service, index) => (
            <div
              key={service.id}
              id={`service-${service.id}`}
              className="group relative flex flex-col justify-between p-7 rounded-3xl bg-[#11111E] border-2 border-white/10 hover:border-[#7C3AED] transition-all duration-300 hover:shadow-[0_15px_40px_rgba(124,58,237,0.3)] hover:-translate-y-1"
            >
              {/* Halftone BG */}
              <div className="absolute inset-0 bg-halftone opacity-20 group-hover:opacity-35 transition-opacity" />

              <div>
                {/* Number & Tagline */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs text-[#22D3EE] font-bold tracking-wider">
                    SERVICE 0{index + 1}
                  </span>
                  <div className="w-2 h-2 rounded-full bg-[#7C3AED] group-hover:animate-ping" />
                </div>

                {/* Title */}
                <h3 className="font-display font-black text-xl sm:text-2xl text-white tracking-tight uppercase mb-2 group-hover:text-[#FACC15] transition-colors">
                  {service.title}
                </h3>

                <p className="font-impact text-xs text-[#22D3EE] tracking-wider uppercase mb-4">
                  {service.tagline}
                </p>

                <p className="font-body text-sm text-white/75 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Deliverables List */}
                <div className="space-y-2 mb-6 pt-4 border-t border-white/10">
                  <span className="block font-impact text-[10px] tracking-widest text-white/50 uppercase">
                    KEY DELIVERABLES:
                  </span>
                  {service.deliverables.map((del, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-2 text-xs text-white/80 font-body">
                      <CheckCircle className="w-3.5 h-3.5 text-[#22D3EE] shrink-0" />
                      <span>{del}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Inquire Action */}
              <div className="pt-4 border-t border-white/10">
                <button
                  onClick={() => handleInquire(service.title)}
                  className="w-full py-2.5 px-4 rounded-xl bg-white/5 hover:bg-[#7C3AED] text-white font-display font-extrabold text-xs tracking-wider uppercase border border-white/15 hover:border-[#7C3AED] transition-all flex items-center justify-center gap-2 cursor-pointer group/btn"
                >
                  <span>INQUIRE ABOUT THIS SERVICE</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Commercial Positioning Section (Section 20) */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#1A1633] via-[#0F0D1C] to-[#0B0B12] border-2 border-[#7C3AED]/50 shadow-[0_20px_60px_rgba(0,0,0,0.8),0_0_40px_rgba(124,58,237,0.2)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-[#FACC15]/40 mb-4">
                <Flame className="w-3.5 h-3.5 text-[#FACC15]" />
                <span className="font-impact text-xs tracking-widest text-[#FACC15] uppercase">
                  PARTNERSHIP MANIFESTO
                </span>
              </div>

              <h3 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tighter uppercase mb-4 leading-tight">
                YOUR BRAND. <br />
                <span className="text-[#FACC15]">MY CHAOS.</span> <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#22D3EE] to-white">LET'S TALK.</span>
              </h3>

              <p className="font-body text-base sm:text-lg text-white/85 leading-relaxed mb-6 font-normal">
                AdX collaborates with brands that want <strong className="text-white">entertainment rather than interruptions</strong>. When your product enters an AdX sketch, it doesn't break the joke — it becomes the fuel.
              </p>

              <div className="mb-8">
                <span className="block font-impact text-xs tracking-wider text-white/60 uppercase mb-3">
                  RELEVANT INDUSTRIES & CULTURE SECTORS:
                </span>
                <div className="flex flex-wrap gap-2">
                  {COMMERCIAL_INDUSTRIES.map((ind, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 rounded-lg text-xs font-display font-bold bg-white/5 border border-white/10 text-white/90 hover:border-[#22D3EE] hover:text-[#22D3EE] transition-colors"
                    >
                      {ind}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#FACC15] hover:bg-white text-black font-display font-black text-sm tracking-wider uppercase transition-all shadow-[0_0_25px_rgba(250,204,21,0.5)] cursor-pointer hover:-translate-y-0.5"
              >
                <span>START A PROJECT</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Right Quote / Stats Badge */}
            <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-black/60 border border-white/10 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-[#22D3EE]">
                  <Sparkles className="w-5 h-5" />
                  <span className="font-impact text-xs tracking-widest uppercase">THE ADX PROMISE TO BRANDS</span>
                </div>
                <blockquote className="font-body text-sm sm:text-base text-white/90 italic leading-relaxed">
                  "No scripted corporate buzzwords. No deadpan awkward ad reads. Every collaboration is written from scratch to ensure the audience laughs first, respects the integration, and remembers your brand."
                </blockquote>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <span className="font-display font-black text-sm text-white">Miles Chi</span>
                  <span className="block font-body text-xs text-white/50">Director & Creator, AdX</span>
                </div>
                <span className="font-mono text-xs text-[#FACC15]">[YOUR EMAIL] READY</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
