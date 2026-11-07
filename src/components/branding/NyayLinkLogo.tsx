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
      {/* Precision Scales of Justice inside Classical Judicial Shield */}
      <div className="relative w-9 h-9 flex items-center justify-center shrink-0">
        <svg
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8 text-[#D9AD68]"
          aria-label="NyayLink Judicial Scales Shield Emblem"
        >
          {/* Classical heraldic shield contour */}
          <path
            d="M18 3.5L30 7.5V17.5C30 25.5 24.5 30.5 18 33C11.5 30.5 6 25.5 6 17.5V7.5L18 3.5Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
            className="opacity-95"
          />

          {/* Central Scales of Justice Pillar */}
          <line
            x1="18"
            y1="9.5"
            x2="18"
            y2="25.5"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
          {/* Pillar base stylobate */}
          <line
            x1="14"
            y1="25.5"
            x2="22"
            y2="25.5"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
          />

          {/* Scales Balance Beam / Fulcrum */}
          <path
            d="M11 13.5H25"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
          <circle cx="18" cy="11.5" r="1.3" fill="currentColor" />

          {/* Left Pan: Chains and Bowl */}
          <path
            d="M11 13.5L9.5 18M11 13.5L12.5 18"
            stroke="currentColor"
            strokeWidth="1.1"
            strokeLinecap="round"
          />
          <path
            d="M8.5 18C8.5 19.5 13.5 19.5 13.5 18H8.5Z"
            fill="currentColor"
            fillOpacity="0.4"
            stroke="currentColor"
            strokeWidth="1.1"
            strokeLinejoin="round"
          />

          {/* Right Pan: Chains and Bowl */}
          <path
            d="M25 13.5L23.5 18M25 13.5L26.5 18"
            stroke="currentColor"
            strokeWidth="1.1"
            strokeLinecap="round"
          />
          <path
            d="M22.5 18C22.5 19.5 27.5 19.5 27.5 18H22.5Z"
            fill="currentColor"
            fillOpacity="0.4"
            stroke="currentColor"
            strokeWidth="1.1"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {!markOnly && (
        <span className="font-serif-editorial text-[22px] sm:text-[24px] tracking-[0.01em] text-[#F4E8D0] font-normal">
          NyayLink
        </span>
      )}
    </div>
  );
};
