"use client";

import React from "react";

export const HeroOverlay: React.FC = () => {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none select-none z-10">
      {/* 1. Deep Midnight Navy Vertical Gradient for Editorial Contrast */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          background:
            "linear-gradient(180deg, rgba(5, 13, 19, 0.70) 0%, rgba(5, 13, 19, 0.20) 22%, rgba(5, 13, 19, 0.05) 45%, rgba(5, 13, 19, 0.50) 75%, rgba(5, 13, 19, 0.95) 100%)",
        }}
      />

      {/* 2. Soft Radial Glow behind Main Headline for Luminous Champagne Typography */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 32%, rgba(217, 173, 104, 0.06) 0%, transparent 65%)",
        }}
      />

      {/* 3. Bottom Ground Silhouette Falloff */}
      <div
        className="absolute inset-x-0 bottom-0 h-44 pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, #050D13 0%, rgba(5, 13, 19, 0.85) 45%, transparent 100%)",
        }}
      />
    </div>
  );
};
