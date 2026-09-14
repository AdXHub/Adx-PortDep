import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2, Sparkles, MessageSquare, AlertCircle } from 'lucide-react';
import { PROJECT_TYPE_OPTIONS, BUDGET_RANGE_OPTIONS, BRAND_CONFIG } from '../data/portfolioData';

interface ContactProps {
  initialService?: string | null;
}

export const Contact: React.FC<ContactProps> = ({ initialService }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: initialService || PROJECT_TYPE_OPTIONS[0],
    budgetRange: BUDGET_RANGE_OPTIONS[1],
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulate real async submission
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section id="contact" className="relative py-24 md:py-36 bg-[#0B0B12] overflow-hidden border-t border-white/5">
      {/* Halftone & Vibrant Ambient Glow */}
      <div className="absolute inset-0 bg-halftone opacity-25 pointer-events-none" />
      <div className="absolute top-1/4 -right-40 w-96 h-96 rounded-full bg-[#7C3AED]/25 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-40 w-96 h-96 rounded-full bg-[#22D3EE]/20 blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-[#FACC15]/40 mb-4 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-[#FACC15]" />
            <span className="font-impact text-xs tracking-widest uppercase text-[#FACC15]">
              DIRECT LINE TO THE ADX WRITERS ROOM
            </span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl tracking-tighter uppercase text-white mb-4">
            READY TO START <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FACC15] via-white to-[#22D3EE]">
              SOMETHING RIDICULOUS?
            </span>
          </h2>

          <p className="font-body text-base sm:text-xl text-white/80 font-medium max-w-2xl">
            Commercial partnerships. Creative campaigns. Content direction. General anime debates.
          </p>
        </div>

        {/* 2-Column Contact Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Direct Info & Placeholders (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-7 sm:p-8 rounded-3xl bg-[#11111E] border-2 border-white/10 space-y-6">
              <h3 className="font-display font-black text-2xl text-white uppercase tracking-tight">
                LET'S MAKE IT MEMORABLE
              </h3>
              
              <p className="font-body text-sm text-white/75 leading-relaxed">
                Whether you're launching a brand new game, sponsoring a recurring AdX format, or looking to inject authentic internet comedy into your campaign, we respond within 24–48 hours.
              </p>

              {/* Creator Business Email Placeholder */}
              <div className="p-4 rounded-2xl bg-black/60 border border-[#7C3AED]/40 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#7C3AED]/20 border border-[#7C3AED] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-[#22D3EE]" />
                </div>
                <div>
                  <span className="block font-impact text-xs tracking-wider text-white/50 uppercase">
                    OFFICIAL BUSINESS INQUIRIES
                  </span>
                  <a 
                    href={`mailto:${BRAND_CONFIG.emailPlaceholder}`}
                    className="font-mono text-sm sm:text-base font-bold text-[#FACC15] hover:underline"
                  >
                    {BRAND_CONFIG.emailPlaceholder}
                  </a>
                </div>
              </div>

              {/* Representation / Location Placeholder */}
              <div className="p-4 rounded-2xl bg-black/60 border border-white/10 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/20 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-[#EC4899]" />
                </div>
                <div>
                  <span className="block font-impact text-xs tracking-wider text-white/50 uppercase">
                    LOCATION & MANAGEMENT
                  </span>
                  <span className="font-mono text-xs sm:text-sm font-semibold text-white/90">
                    {BRAND_CONFIG.managementPlaceholder}
                  </span>
                </div>
              </div>

            </div>

            {/* Quick Pitch Guarantee */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-[#17132B] to-[#110E20] border border-[#22D3EE]/30">
              <span className="block font-impact text-xs tracking-widest text-[#22D3EE] uppercase mb-1">
                CREATOR INTEGRITY COMMITMENT
              </span>
              <p className="font-body text-xs sm:text-sm text-white/80 leading-relaxed italic">
                "We don't do awkward teleprompter readings. Every sponsored segment is pitched with 3 unique comedy concepts so your team chooses the exact tone you want."
              </p>
            </div>

          </div>

          {/* Right Column: Interactive Booking Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#11111E] border-2 border-[#7C3AED]/50 shadow-[0_20px_60px_rgba(0,0,0,0.8),0_0_30px_rgba(124,58,237,0.2)]">
              
              {submitted ? (
                <div className="py-12 flex flex-col items-center text-center space-y-4 animate-in fade-in">
                  <div className="w-16 h-16 rounded-full bg-green-500/20 border-2 border-green-500 text-green-400 flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-display font-black text-2xl sm:text-3xl text-white uppercase tracking-tight">
                    MESSAGE RECEIVED IN THE WRITERS ROOM!
                  </h3>
                  <p className="font-body text-sm sm:text-base text-white/80 max-w-md leading-relaxed">
                    Thank you, <strong>{formData.name}</strong>. We've logged your inquiry for <strong>{formData.projectType}</strong>. You'll hear back from us at <strong>{formData.email}</strong> shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        company: '',
                        projectType: PROJECT_TYPE_OPTIONS[0],
                        budgetRange: BUDGET_RANGE_OPTIONS[1],
                        message: ''
                      });
                    }}
                    className="mt-4 px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-display font-bold text-xs uppercase tracking-wider"
                  >
                    SEND ANOTHER MESSAGE
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  
                  {/* Row 1: Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block font-display font-bold text-xs text-white/80 uppercase mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Alex Morgan"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/15 text-white placeholder-white/40 focus:outline-none focus:border-[#22D3EE] font-body text-sm"
                      />
                    </div>

                    <div>
                      <label className="block font-display font-bold text-xs text-white/80 uppercase mb-1.5">
                        Business Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="alex@studio.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/15 text-white placeholder-white/40 focus:outline-none focus:border-[#22D3EE] font-body text-sm"
                      />
                    </div>
                  </div>

                  {/* Row 2: Company / Brand */}
                  <div>
                    <label className="block font-display font-bold text-xs text-white/80 uppercase mb-1.5">
                      Company / Brand Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Neo Tokyo Gaming / Crunchyroll / Indie Studio"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/15 text-white placeholder-white/40 focus:outline-none focus:border-[#22D3EE] font-body text-sm"
                    />
                  </div>

                  {/* Row 3: Project Type & Budget Range */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block font-display font-bold text-xs text-white/80 uppercase mb-1.5">
                        Project Type
                      </label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/15 text-white focus:outline-none focus:border-[#22D3EE] font-body text-sm cursor-pointer"
                      >
                        {PROJECT_TYPE_OPTIONS.map((opt) => (
                          <option key={opt} value={opt} className="bg-[#11111E] text-white">
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block font-display font-bold text-xs text-white/80 uppercase mb-1.5">
                        Budget Range
                      </label>
                      <select
                        value={formData.budgetRange}
                        onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/15 text-white focus:outline-none focus:border-[#22D3EE] font-body text-sm cursor-pointer"
                      >
                        {BUDGET_RANGE_OPTIONS.map((opt) => (
                          <option key={opt} value={opt} className="bg-[#11111E] text-white">
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Row 4: Message */}
                  <div>
                    <label className="block font-display font-bold text-xs text-white/80 uppercase mb-1.5">
                      Tell Us About The Chaos (Message) *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Give us a brief overview of your product, campaign goals, target timeline, or desired comedy format..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/15 text-white placeholder-white/40 focus:outline-none focus:border-[#22D3EE] font-body text-sm resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={submitting}
                    id="submit-contact-button"
                    className="w-full py-4 rounded-xl bg-[#FACC15] hover:bg-white text-black font-display font-black text-sm tracking-wider uppercase transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_25px_rgba(250,204,21,0.5)] hover:-translate-y-0.5 disabled:opacity-50"
                  >
                    <Send className="w-4 h-4" />
                    <span>{submitting ? 'TRANSMITTING...' : 'SEND MESSAGE'}</span>
                  </button>

                  <p className="text-[11px] text-white/40 text-center font-body">
                    Protected by AdX Anti-Spam Jutsu. No commercial solicitations sold to third parties.
                  </p>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
