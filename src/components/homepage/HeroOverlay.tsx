"use client";

import React from "react";

export const HeroOverlay: React.FC = () => {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none select-none">
      {/* 1. Deep Midnight Navy Atmospheric Vertical Vignette */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          background:
            "linear-gradient(180deg, rgba(5, 13, 19, 0.78) 0%, rgba(5, 13, 19, 0.28) 18%, rgba(5, 13, 19, 0.12) 38%, rgba(5, 13, 19, 0.45) 70%, rgba(5, 13, 19, 0.95) 100%)",
        }}
      />

      {/* 2. Soft Center Radial Dimming for Crisp Typography Readability */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          background:
            "radial-gradient(ellipse at 50% 36%, rgba(5, 13, 19, 0.28) 0%, rgba(5, 13, 19, 0.55) 60%, rgba(5, 13, 19, 0.88) 100%)",
        }}
      />

      {/* 3. Subtle Warm Sunset Glow around the Dome */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 52% 42%, rgba(217, 173, 104, 0.08) 0%, transparent 60%)",
        }}
      />

      {/* 4. Foreground Edge Silhouettes */}
      <div
        className="absolute inset-x-0 bottom-0 h-40 pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, #050D13 0%, rgba(5, 13, 19, 0.85) 40%, transparent 100%)",
        }}
      />
    </div>
  );
};
