import React, { useState } from 'react';
import { SiteBackground } from './components/SiteBackground';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { PortfolioGrid } from './components/PortfolioGrid';
import { AdXMediaShowcase } from './components/AdXMediaShowcase';
import { Showreel } from './components/Showreel';
import { About } from './components/About';
import { AdXRule } from './components/AdXRule';
import { SignatureFormats } from './components/SignatureFormats';
import { PlatformGrid } from './components/PlatformGrid';
import { Services } from './components/Services';
import { StatsAndCollaborations } from './components/StatsAndCollaborations';
import { Timeline } from './components/Timeline';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const [chaosMode, setChaosMode] = useState(false);
  const [selectedServiceForContact, setSelectedServiceForContact] = useState<string | null>(null);

  const toggleChaosMode = () => {
    setChaosMode((prev) => !prev);
  };

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`min-h-screen bg-[#0B0B12] text-white selection:bg-[#7C3AED] selection:text-white font-body relative ${
      chaosMode ? 'chaos-active' : ''
    }`}>
      {/* Dynamic Complementary Background & Ambient Controls */}
      <SiteBackground chaosMode={chaosMode} />

      {/* Desktop Reactive Custom Cursor */}
      <CustomCursor />

      {/* Top Fixed Navigation */}
      <Navbar 
        chaosMode={chaosMode} 
        onToggleChaos={toggleChaosMode} 
      />

      <main>
        {/* 1. Hero Section */}
        <Hero
          onWatchClick={() => scrollToSection('showreel')}
          onWorkClick={() => scrollToSection('contact')}
          chaosMode={chaosMode}
        />

        {/* 2. High-Velocity Anime Marquee */}
        <Marquee />

        {/* 3. Featured Portfolio Grid (Projects + Case Studies) */}
        <PortfolioGrid />

        {/* 4. Media Vault & Visual Showcase (Posters, Banners, Skits, Crests) */}
        <AdXMediaShowcase />

        {/* 5. 30 Seconds of Chaos Showreel Player (8 Creator Reels) */}
        <Showreel />

        {/* 5. Creator Profile & Personality Formula */}
        <About />

        {/* 6. The AdX Rule (Laugh. Surprise. Relate. Share.) */}
        <AdXRule />

        {/* 7. Recurring Formats (Entertainment Network) */}
        <SignatureFormats />

        {/* 8. Platform Ecosystem (TikTok, IG, YT, FB, LI) */}
        <PlatformGrid />

        {/* 9. Commercial Services & Creative Capabilities */}
        <Services 
          onSelectServiceForContact={(svc) => {
            setSelectedServiceForContact(svc);
            scrollToSection('contact');
          }}
        />

        {/* 10. Impact Stats & Brand Collaborations */}
        <StatsAndCollaborations />

        {/* 11. Story Arcs & Milestones Timeline */}
        <Timeline />

        {/* 12. Contact & Commercial Inquiries Form */}
        <Contact initialService={selectedServiceForContact} />
      </main>

      {/* 13. Brand Footer with Easter Egg */}
      <Footer onChaosClick={toggleChaosMode} />
    </div>
  );
}
