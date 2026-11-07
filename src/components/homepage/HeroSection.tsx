"use client";

import React from "react";
import { Navbar } from "@/components/navigation/Navbar";
import { HeroBackground } from "./HeroBackground";
import { HeroOverlay } from "./HeroOverlay";
import { HeroContent } from "./HeroContent";
import { HeroActions } from "./HeroActions";
import { AIAssistantPanel } from "./AIAssistantPanel";
import { HeroTagline } from "./HeroTagline";
import { HeroRightIndicators } from "./HeroRightIndicators";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full min-h-[100svh] flex flex-col justify-between overflow-hidden bg-[#050D13]">
      {/* =========================================================================
          Z-INDEX 0: Solid Midnight Navy Canvas Base
          ========================================================================= */}
      <div className="absolute inset-0 bg-[#050D13] z-0 pointer-events-none select-none" />

      {/* =========================================================================
          Z-INDEX 10: Genuine Supreme Court of India Photograph & Atmospheric Lighting
          ========================================================================= */}
      <HeroBackground />
      <HeroOverlay />

      {/* =========================================================================
          Z-INDEX 50: Top Editorial Navigation
          ========================================================================= */}
      <div className="relative z-50 w-full pointer-events-auto">
        <Navbar />
      </div>

      {/* =========================================================================
          Z-INDEX 40 & 30: Centered Typographic Hero Layer (Entirely in Front of Image)
          ========================================================================= */}
      <div className="relative w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-[5%] flex-1 flex flex-col items-center justify-start pt-6 sm:pt-8 md:pt-10 lg:pt-12 pointer-events-auto">
        {/* Z-index 40: Eyebrow heading + Main headline */}
        <HeroContent />

        {/* Z-index 30: Supporting description + Dual Primary CTAs */}
        <div className="mt-5 sm:mt-6 md:mt-7 w-full">
          <HeroActions />
        </div>
      </div>

      {/* =========================================================================
          Z-INDEX 50: Lower Content Band (AI Assistant Panel on Left)
          ========================================================================= */}
      <div className="relative z-50 w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-[6%] pb-3 sm:pb-4 pointer-events-auto">
        <div className="flex flex-col sm:flex-row items-end justify-between">
          <AIAssistantPanel />
        </div>
      </div>

      {/* Bottom Centered Tagline & Architectural Attribution */}
      <HeroTagline />

      {/* Right Vertical Indicators (Desktop) */}
      <HeroRightIndicators />
    </section>
  );
};
