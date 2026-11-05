"use client";

import React from "react";
import { HeroContent } from "./HeroContent";
import { HeroArchitecture } from "./HeroArchitecture";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full min-h-[calc(100vh-5rem)] flex items-center justify-center overflow-hidden bg-[#EEEAE1] architectural-grid py-6 sm:py-8 lg:py-10">
      {/* Subtle stone ambient lighting radial */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#EEEAE1]/40 to-[#EEEAE1] pointer-events-none" />

      {/* Main Hero Container */}
      <div className="relative w-full max-w-[1540px] mx-auto px-6 sm:px-10 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-12 items-center">
          {/* Left Column: Warm ivory editorial surface (5 of 12 columns = ~42%) */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <HeroContent />
          </div>

          {/* Right Column: Monumental Architectural Visual (7 of 12 columns = ~58%) */}
          <div className="lg:col-span-7 flex items-center justify-center">
            <HeroArchitecture />
          </div>
        </div>
      </div>

      {/* Subtle bottom architectural border */}
      <div className="absolute bottom-0 inset-x-0 h-[1px] bg-[#CCB99F]/40" />
    </section>
  );
};
