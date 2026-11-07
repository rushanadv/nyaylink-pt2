"use client";

import React from "react";
import { Navbar } from "@/components/navigation/Navbar";
import { HeroBackground } from "./HeroBackground";
import { HeroOverlay } from "./HeroOverlay";
import { HeroContent } from "./HeroContent";
import { AIAssistantPanel } from "./AIAssistantPanel";
import { HeroTagline } from "./HeroTagline";
import { HeroRightIndicators } from "./HeroRightIndicators";
import { VerifiedSealBadge } from "./VerifiedSealBadge";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full min-h-[100svh] flex flex-col justify-between overflow-hidden bg-[#050D13]">
      {/* 1. Full-bleed Monumental Central Architectural Background */}
      <HeroBackground />

      {/* 2. Deep Midnight Navy Atmospheric Vignette */}
      <HeroOverlay />

      {/* 3. Top Transparent Editorial Navigation */}
      <Navbar />

      {/* 4. Verified Bar Council Seal Badge (Top Right Quadrant) */}
      <div className="absolute top-32 sm:top-36 md:top-40 lg:top-44 right-10 sm:right-16 md:right-24 lg:right-28 xl:right-36 z-25 pointer-events-auto">
        <VerifiedSealBadge />
      </div>

      {/* 5. Center Monumental Hero Headline */}
      <div className="relative z-20 w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-[6%] flex-1 flex flex-col justify-center pt-2 sm:pt-4 pb-2 sm:pb-4">
        <HeroContent />
      </div>

      {/* 6. Lower Content Band: Lower-Left AI Assistant Panel */}
      <div className="relative z-20 w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-[6%] pb-4 sm:pb-6">
        <div className="flex flex-col sm:flex-row items-end justify-between">
          <AIAssistantPanel />
        </div>
      </div>

      {/* 7. Centered Bottom Tagline */}
      <HeroTagline />

      {/* 8. Right Vertical Indicators (Desktop) */}
      <HeroRightIndicators />
    </section>
  );
};
