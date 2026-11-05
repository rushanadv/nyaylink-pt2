"use client";

import React from "react";

export const HeroOverlay: React.FC = () => {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none select-none">
      {/* Primary horizontal dark charcoal gradient from left */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          background:
            "linear-gradient(90deg, rgba(13, 13, 15, 0.98) 0%, rgba(13, 13, 15, 0.94) 24%, rgba(13, 13, 15, 0.80) 36%, rgba(13, 13, 15, 0.40) 50%, rgba(13, 13, 15, 0.08) 64%, rgba(13, 13, 15, 0) 74%)",
        }}
      />

      {/* Vertical vignette for navbar and lower metrics contrast */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          background:
            "linear-gradient(180deg, rgba(12, 11, 10, 0.55) 0%, rgba(12, 11, 10, 0.1) 18%, rgba(12, 11, 10, 0) 40%, rgba(12, 11, 10, 0.2) 75%, rgba(12, 11, 10, 0.75) 100%)",
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

      {/* Mobile contrast scrim for crystal-clear readability on small screens */}
      <div className="sm:hidden absolute inset-0 bg-[#0D0D0F]/65 pointer-events-none" />
    </div>
  );
};
