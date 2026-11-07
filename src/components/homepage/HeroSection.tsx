"use client";

import React from "react";
import { Navbar } from "@/components/navigation/Navbar";
import { HeroBackground } from "./HeroBackground";
import { HeroOverlay } from "./HeroOverlay";
import { HeroDomeForeground } from "./HeroDomeForeground";
import { HeroContent } from "./HeroContent";
import { HeroActions } from "./HeroActions";
import { AIAssistantPanel } from "./AIAssistantPanel";
import { HeroTagline } from "./HeroTagline";
import { HeroRightIndicators } from "./HeroRightIndicators";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full min-h-[100svh] flex flex-col justify-between overflow-hidden bg-[#050D13]">
      {/* =========================================================================
          SHARED COMPOSITION WRAPPER (Layers 20 & 40 synchronized bit-for-bit)
          ========================================================================= */}

      {/* 1. Layer 20: 4K Background Photograph & Atmospheric Lighting Overlay */}
      <div className="absolute inset-0 w-full h-full overflow-hidden select-none pointer-events-none z-20">
        <HeroBackground />
        <HeroOverlay />
      </div>

      {/* 2. Layer 30: Eyebrow + Main Headline (Typography behind dome cutout) */}
      <div className="absolute inset-x-0 top-0 z-30 w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-[5%] flex flex-col items-center justify-start pt-20 sm:pt-24 md:pt-28 lg:pt-32 xl:pt-36 pointer-events-none select-none">
        <HeroContent />
      </div>

      {/* 3. Layer 40: Foreground Architectural Dome Cutout (Occluding Layer 30) */}
      <div className="absolute inset-0 w-full h-full overflow-hidden select-none pointer-events-none z-40">
        <HeroDomeForeground />
      </div>

      {/* =========================================================================
          LAYER 50: Navigation & Interactive UI (Always in front & fully interactive)
          ========================================================================= */}
      <div className="relative z-50 w-full min-h-[100svh] flex flex-col justify-between pointer-events-none">
        {/* Top Transparent Editorial Navigation */}
        <div className="w-full pointer-events-auto">
          <Navbar />
        </div>

        {/* Center / Lower-Center: Supporting Description & Dual Primary CTAs */}
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-[5%] flex flex-col items-center justify-center pt-56 sm:pt-64 md:pt-80 lg:pt-[390px] xl:pt-[440px] pointer-events-auto">
          <HeroActions />
        </div>

        {/* Lower Content Band: Lower-Left AI Assistant Panel */}
        <div className="relative w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-[6%] pb-3 sm:pb-5 pointer-events-auto">
          <div className="flex flex-col sm:flex-row items-end justify-between">
            <AIAssistantPanel />
          </div>
        </div>

        {/* Centered Bottom Tagline */}
        <div className="pointer-events-auto">
          <HeroTagline />
        </div>

        {/* Right Vertical Indicators (Desktop) */}
        <HeroRightIndicators />
      </div>
    </section>
  );
};
