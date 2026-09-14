import React, { useState } from 'react';
import { METRICS_DATA, BRAND_PARTNERS, TESTIMONIAL } from '../data/portfolioData';
import { BarChart3, Download, Sparkles, CheckCircle2, ShieldCheck, Quote, X } from 'lucide-react';

export const StatsAndCollaborations: React.FC = () => {
  const [showMediaKitModal, setShowMediaKitModal] = useState(false);
  const [emailInput, setEmailInput] = useState('');
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleMediaKitSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput) return;
    setDownloadSuccess(true);
    setTimeout(() => {
      setDownloadSuccess(false);
      setShowMediaKitModal(false);
      setEmailInput('');
    }, 2500);
  };

  return (
    <section id="stats" className="relative py-24 md:py-32 bg-[#0B0B12] overflow-hidden border-t border-white/5">
      {/* Background graphic */}
      <div className="absolute inset-0 bg-halftone opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-[#22D3EE]/10 blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* STATS SECTION (Section 21) */}
        <div className="mb-24">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-[#22D3EE]/40 mb-4 backdrop-blur-md">
              <BarChart3 className="w-3.5 h-3.5 text-[#22D3EE]" />
              <span className="font-impact text-xs tracking-widest uppercase text-[#22D3EE]">
                CREATOR PERFORMANCE & AUDIENCE REACH
              </span>
            </div>

            <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl tracking-tighter uppercase text-white mb-3">
              IMPACT BY <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#22D3EE] via-white to-[#7C3AED]">THE NUMBERS</span>
            </h2>

            <p className="font-body text-base sm:text-xl text-white/75 font-normal">
              Numbers fluctuate. <strong className="text-[#FACC15]">Laughter remains consistent.</strong>
            </p>
          </div>

          {/* 6 Metrics Cards Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 mb-12">
            {METRICS_DATA.map((metric) => (
              <div
                key={metric.id}
                id={`stat-${metric.id}`}
                className="group relative flex flex-col justify-center items-center text-center p-6 rounded-2xl bg-[#11111E] border-2 border-white/10 hover:border-[#22D3EE] transition-all duration-300 hover:shadow-[0_10px_30px_rgba(34,211,238,0.25)] hover:-translate-y-1"
              >
                {/* Halftone BG */}
                <div className="absolute inset-0 bg-halftone opacity-20 group-hover:opacity-30 transition-opacity" />

                <span className="relative z-10 font-display font-black text-2xl sm:text-3xl text-white group-hover:text-[#FACC15] transition-colors mb-2">
                  {metric.valuePlaceholder}
                </span>

                <span className="relative z-10 font-impact text-xs tracking-wider text-[#22D3EE] uppercase mb-1">
                  {metric.label}
                </span>

                <span className="relative z-10 font-body text-[11px] text-white/50">
                  {metric.context}
                </span>
              </div>
            ))}
          </div>

          {/* Media Kit CTA Button */}
          <div className="flex flex-col items-center justify-center text-center">
            <button
              onClick={() => setShowMediaKitModal(true)}
              id="request-media-kit-cta"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-display font-black text-sm tracking-wider uppercase shadow-[0_0_30px_rgba(124,58,237,0.5)] hover:shadow-[0_0_40px_rgba(124,58,237,0.8)] transition-all cursor-pointer border border-[#A855F7]/40"
            >
              <Download className="w-4 h-4" />
              <span>REQUEST MEDIA KIT</span>
            </button>
            <span className="text-xs text-white/50 font-body mt-2">
              Comprehensive demographic breakdown, engagement curves & case histories
            </span>
          </div>
        </div>

        {/* COLLABORATIONS & BRAND PARTNERS (Section 22) */}
        <div className="pt-16 border-t border-white/10">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-3 backdrop-blur-md">
              <ShieldCheck className="w-3.5 h-3.5 text-[#FACC15]" />
              <span className="font-impact text-xs tracking-widest uppercase text-white/80">
                PROVEN BRAND INTEGRATIONS
              </span>
            </div>

            <h3 className="font-display font-black text-2xl sm:text-4xl text-white tracking-tight uppercase mb-2">
              BRANDS THAT SURVIVED <span className="text-[#FACC15]">THE CHAOS</span>
            </h3>
            <p className="font-body text-sm sm:text-base text-white/70">
              Selected campaign partners who trusted authentic comedy over dry scripts.
            </p>
          </div>

          {/* Brand Logo Placeholders Cloud */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
            {BRAND_PARTNERS.map((brand) => (
              <div
                key={brand.id}
                className="group p-5 rounded-2xl bg-[#11111E] border border-white/10 hover:border-white/30 flex flex-col items-center justify-center text-center transition-all hover:bg-[#161626]"
              >
                <span className="font-display font-black text-xs sm:text-sm text-white/80 group-hover:text-white uppercase tracking-wider mb-1">
                  {brand.name}
                </span>
                <span className="font-impact text-[10px] text-[#22D3EE] tracking-wider uppercase">
                  {brand.industry}
                </span>
              </div>
            ))}
          </div>

          {/* Featured Partnership Quote / Testimonial */}
          <div className="max-w-3xl mx-auto p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#17142E] to-[#120F24] border-2 border-[#7C3AED]/40 shadow-xl relative overflow-hidden text-center">
            <Quote className="w-12 h-12 text-[#7C3AED]/30 mx-auto mb-4" />
            
            <blockquote className="font-body text-lg sm:text-2xl text-white font-medium italic leading-relaxed mb-6">
              "{TESTIMONIAL.quote}"
            </blockquote>

            <div className="flex flex-col items-center">
              <span className="font-display font-black text-sm text-[#FACC15] uppercase tracking-wider">
                {TESTIMONIAL.author}
              </span>
              <span className="font-body text-xs text-white/60">
                {TESTIMONIAL.role}
              </span>
            </div>
          </div>

        </div>

      </div>

      {/* Media Kit Modal */}
      {showMediaKitModal && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl animate-in fade-in"
          onClick={() => setShowMediaKitModal(false)}
        >
          <div 
            className="relative w-full max-w-lg bg-[#11111E] border-2 border-[#7C3AED] rounded-2xl p-6 sm:p-8 text-white shadow-[0_0_50px_rgba(124,58,237,0.5)]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-5">
              <div className="flex items-center gap-2">
                <span className="font-display font-black text-lg text-white">AdX</span>
                <span className="font-impact text-xs text-[#22D3EE] tracking-widest ml-1 uppercase">
                  OFFICIAL MEDIA KIT 2025
                </span>
              </div>
              <button 
                onClick={() => setShowMediaKitModal(false)}
                className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-white/70 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {downloadSuccess ? (
              <div className="text-center py-8 space-y-3">
                <div className="w-12 h-12 rounded-full bg-green-500/20 text-green-400 border border-green-500/40 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="font-display font-black text-xl text-white uppercase">
                  Media Kit Dispatched!
                </h4>
                <p className="font-body text-sm text-white/70">
                  We've sent the complete AdX creator deck and demographic sheets to <strong>{emailInput}</strong>.
                </p>
              </div>
            ) : (
              <form onSubmit={handleMediaKitSubmit} className="space-y-4">
                <p className="font-body text-sm text-white/80 leading-relaxed">
                  Enter your business email to immediately receive the updated AdX Media Kit (PDF) featuring verified audience demographics, past campaign conversion case studies, and tier rate cards.
                </p>

                <div>
                  <label className="block font-display font-bold text-xs text-white/70 uppercase mb-1">
                    Work Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="partner@yourbrand.com"
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-[#22D3EE] text-sm font-body"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-display font-black text-xs tracking-wider uppercase transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                >
                  <Download className="w-4 h-4" />
                  <span>SEND MEDIA KIT (PDF)</span>
                </button>

                <p className="text-[11px] text-white/40 text-center">
                  Direct contact: [YOUR EMAIL] · No spam, guaranteed.
                </p>
              </form>
            )}

          </div>
        </div>
      )}
    </section>
  );
};
