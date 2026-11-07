"use client";

import React from "react";
import { Navbar } from "@/components/navigation/Navbar";
import { HeroBackground } from "./HeroBackground";
import { HeroOverlay } from "./HeroOverlay";
import { HeroDomeForeground } from "./HeroDomeForeground";
import { HeroContent } from "./HeroContent";
import { AIAssistantPanel } from "./AIAssistantPanel";
import { HeroTagline } from "./HeroTagline";
import { HeroRightIndicators } from "./HeroRightIndicators";
import { VerifiedSealBadge } from "./VerifiedSealBadge";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full min-h-[100svh] flex flex-col justify-between overflow-hidden bg-[#050D13]">
      {/* 1. Full-bleed Monumental Central Architectural Background (Layer 1: Lowest, z-0) */}
      <HeroBackground />

      {/* 2. Top Transparent Editorial Navigation (Layer 5: Header, z-40) */}
      <Navbar />

      {/* 3. Center Monumental Hero Headline (Layer 2: Typography behind dome on desktop, fully legible on mobile/portrait) */}
      <div className="relative z-20 lg:z-10 w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-[5%] flex-1 flex flex-col justify-start pt-6 sm:pt-8 md:pt-10 lg:pt-12 pointer-events-auto">
        <HeroContent />
      </div>

      {/* 4. Foreground Architectural Dome Cutout (Layer 3: Occluding dome structure, z-15) */}
      <HeroDomeForeground />

      {/* 5. Atmospheric Vignette & Lighting Harmonization (Layer 4: Uniform film tone, z-20) */}
      <HeroOverlay />

      {/* 6. Verified Bar Council Seal Badge (Top Right Quadrant, z-30) */}
      <div className="absolute top-28 sm:top-32 md:top-36 lg:top-40 right-8 sm:right-12 md:right-20 lg:right-24 xl:right-32 z-30 pointer-events-auto">
        <VerifiedSealBadge />
      </div>

      {/* 7. Lower Content Band: Lower-Left AI Assistant Panel (z-30) */}
      <div className="relative z-30 w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-[6%] pb-4 sm:pb-6 pointer-events-auto">
        <div className="flex flex-col sm:flex-row items-end justify-between">
          <AIAssistantPanel />
        </div>
      </div>

      {/* 8. Centered Bottom Tagline (z-30) */}
      <HeroTagline />

      {/* 9. Right Vertical Indicators (Desktop, z-30) */}
      <HeroRightIndicators />
    </section>
  );
};
