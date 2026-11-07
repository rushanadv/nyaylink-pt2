"use client";

import React from "react";

interface NyayLinkLogoProps {
  className?: string;
  markOnly?: boolean;
}

export const NyayLinkLogo: React.FC<NyayLinkLogoProps> = ({
  className = "",
  markOnly = false,
}) => {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Precision Geometric Architectural Emblem matching Reference */}
      <div className="relative w-8 h-8 flex items-center justify-center shrink-0">
        <svg
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-7 h-7 text-[#F9F6F0]"
          aria-label="NyayLink Emblem"
        >
          {/* Outer faceted geometric octagonal / judicial shield border */}
          <path
            d="M16 2.5L25.5 6.5V17.5L16 29.5L6.5 17.5V6.5L16 2.5Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
            className="opacity-95"
          />
          {/* Inner concentric geometric diamond & scales fulcrum */}
          <path
            d="M16 7L21.5 14.5L16 22L10.5 14.5L16 7Z"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinejoin="round"
            className="opacity-80"
          />
          {/* Center pillar axis */}
          <line
            x1="16"
            y1="9.5"
            x2="16"
            y2="19.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          {/* Fulcrum balance dot */}
          <circle cx="16" cy="14.5" r="1.5" fill="currentColor" />
        </svg>
      </div>

      {!markOnly && (
        <span className="font-sans-body font-semibold text-[19px] sm:text-[20px] tracking-[-0.015em] text-[#F9F6F0]">
          NyayLink
        </span>
      )}
    </div>
  );
};
