"use client";

import React from "react";

export const HeroOverlay: React.FC = () => {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none select-none z-10">
      {/* Primary horizontal dark charcoal gradient from left */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          background:
            "linear-gradient(90deg, rgba(13, 13, 15, 0.98) 0%, rgba(13, 13, 15, 0.94) 28%, rgba(13, 13, 15, 0.82) 42%, rgba(13, 13, 15, 0.40) 58%, rgba(13, 13, 15, 0.08) 68%, rgba(13, 13, 15, 0) 78%)",
        }}
      />

      {/* Vertical vignette for navbar and lower metrics contrast */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          background:
            "linear-gradient(180deg, rgba(12, 11, 10, 0.6) 0%, rgba(12, 11, 10, 0.1) 18%, rgba(12, 11, 10, 0) 40%, rgba(12, 11, 10, 0.25) 75%, rgba(12, 11, 10, 0.8) 100%)",
        }}
      />

      {/* Subtle warm sunset glow accentuating the dome on the right */}
      <div
        className="hidden md:block absolute right-0 top-0 bottom-0 w-1/2 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 70% 45%, rgba(240, 160, 90, 0.07) 0%, rgba(200, 120, 60, 0.03) 45%, transparent 75%)",
        }}
      />

      {/* Medium screen scrim (tablets in portrait) for crystal-clear readability */}
      <div
        className="hidden sm:block lg:hidden absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, rgba(13, 13, 15, 0.85) 0%, rgba(13, 13, 15, 0.65) 50%, rgba(13, 13, 15, 0.2) 100%)",
        }}
      />

      {/* Mobile contrast scrim for crystal-clear readability on small screens */}
      <div className="sm:hidden absolute inset-0 bg-[#0D0D0F]/70 pointer-events-none" />
    </div>
  );
};
