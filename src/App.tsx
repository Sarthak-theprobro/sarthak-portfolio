import { useState } from 'react';
import { NeuralCanvas } from './components/NeuralCanvas';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { GitHubHeatmapHUD } from './components/GitHubHeatmapHUD';
import { Pillars } from './components/Pillars';
import { ArchitectureCaseStudies } from './components/ArchitectureCaseStudies';
import { GitDiffInspector } from './components/GitDiffInspector';
import { PricingPackages } from './components/PricingPackages';
import { InteractiveTerminal } from './components/InteractiveTerminal';
import { AboutStory } from './components/AboutStory';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { SkillsMatrix } from './components/SkillsMatrix';
import { Testimonials } from './components/Testimonials';
import { FounderFAQ } from './components/FounderFAQ';
import { Footer } from './components/Footer';
import { MVPBookingModal } from './components/MVPBookingModal';

export function App() {
  const [isMVPModalOpen, setIsMVPModalOpen] = useState<boolean>(false);

  const handleOpenMVP = () => {
    setIsMVPModalOpen(true);
  };

  const handleCloseMVP = () => {
    setIsMVPModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#08090d] text-gray-100 relative selection:bg-cyan-500 selection:text-black font-sans">
      {/* 1. 4D Interactive Neural Particle Background (Canvas) */}
      <NeuralCanvas />

      {/* 2. Top Navigation & Status Radar Header */}
      <Navbar onOpenMVP={handleOpenMVP} />

      {/* Main Content Sections */}
      <main className="relative z-10">
        {/* 3. Hero Section & Live HUD Metrics Ticker */}
        <Hero onOpenMVP={handleOpenMVP} />

        {/* 4. Live System Diagnostics HUD & GitHub Activity Heatmap */}
        <GitHubHeatmapHUD />

        {/* 5. The 4 Engineering Pillars */}
        <Pillars />

        {/* 6. Interactive Architecture & Case Studies Simulator */}
        <ArchitectureCaseStudies />

        {/* 7. Live Surgical Git PR Diff & Code Hygiene Inspector */}
        <GitDiffInspector />

        {/* 8. 3 Transparent Client Packages & Pricing Tiers */}
        <PricingPackages onOpenMVP={handleOpenMVP} />

        {/* 9. Interactive Developer CLI Terminal */}
        <InteractiveTerminal onOpenMVP={handleOpenMVP} />

        {/* 10. The Operator Story & Engineering Philosophy */}
        <AboutStory />

        {/* 11. Career Experience Timeline & Production PRs */}
        <ExperienceTimeline />

        {/* 12. Technical Skills Matrix */}
        <SkillsMatrix />

        {/* 13. Verified Production Testimonials & Social Proof */}
        <Testimonials />

        {/* 14. Founder MVP Partnership FAQ Accordion */}
        <FounderFAQ />
      </main>

      {/* 15. The 7-Day MVP Launchpad & Footer */}
      <Footer onOpenMVP={handleOpenMVP} />

      {/* 16. Interactive MVP Booking Ticket Modal */}
      <MVPBookingModal isOpen={isMVPModalOpen} onClose={handleCloseMVP} />
    </div>
  );
}

export default App;