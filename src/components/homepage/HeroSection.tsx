"use client";

import React from "react";
import { Navbar } from "@/components/navigation/Navbar";
import { HeroBackground } from "./HeroBackground";
import { HeroOverlay } from "./HeroOverlay";
import { HeroContent } from "./HeroContent";
import { FloatingAIButton } from "./FloatingAIButton";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full min-h-[100svh] flex flex-col justify-between overflow-hidden bg-[#0D0D0F]">
      {/* 1. Full-bleed Monumental Architectural Background */}
      <HeroBackground />

      {/* 2. Layered Dark Cinematic Vignette & Warm Sunset Lighting */}
      <HeroOverlay />

      {/* 3. Top Transparent Editorial Navigation */}
      <Navbar />

      {/* 4. Left Hero Visual Center */}
      <div className="relative z-20 w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-[8%] flex-1 flex flex-col justify-center pt-4 sm:pt-6 lg:pt-8 pb-10 sm:pb-14 lg:pb-16">
        {/* Main Content (Headline, Eyebrow, Supporting Description, 3 CTA Buttons) */}
        <div className="py-6 sm:py-8 lg:py-10">
          <HeroContent />
        </div>
      </div>

      {/* 5. Floating Circular NyayLink AI Pre-Consultation Trigger */}
      <FloatingAIButton />
    </section>
  );
};
