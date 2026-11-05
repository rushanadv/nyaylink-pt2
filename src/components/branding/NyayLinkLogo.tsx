import React from "react";

interface NyayLinkLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "full" | "mark" | "stacked";
}

export const NyayLinkLogo: React.FC<NyayLinkLogoProps> = ({
  className = "",
  size = "md",
  variant = "full",
}) => {
  const pixelSizes = {
    sm: 24,
    md: 32,
    lg: 44,
  };

  const currentPx = pixelSizes[size];

  const wordmarkSizes = {
    sm: "text-base tracking-[0.2em]",
    md: "text-lg tracking-[0.22em]",
    lg: "text-2xl tracking-[0.25em]",
  };

  return (
    <div className={`flex items-center gap-3.5 select-none ${className}`}>
      {/* Architectural Symbol: Three columns, lintel, and the subtle brass equity fulcrum */}
      <div
        className="relative flex items-center justify-center shrink-0"
        style={{ width: `${currentPx}px`, height: `${currentPx}px` }}
      >
        <svg
          width={currentPx}
          height={currentPx}
          viewBox="0 0 44 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ color: "#191917", display: "block" }}
          aria-label="NyayLink Architectural Pillar Mark"
        >
          {/* Subtle base stylobate step */}
          <rect x="4" y="38" width="36" height="2.5" rx="0.5" fill="currentColor" opacity="0.9" />
          <rect x="7" y="34.5" width="30" height="2" rx="0.5" fill="currentColor" opacity="0.6" />

          {/* Three classical columns */}
          {/* Left Column */}
          <rect x="10" y="14" width="4" height="19" rx="0.75" fill="currentColor" />
          <path d="M9 13.5H15V14.5H9V13.5Z" fill="currentColor" opacity="0.8" />
          
          {/* Center Column (slightly dignified prominence) */}
          <rect x="20" y="12" width="4" height="21" rx="0.75" fill="currentColor" />
          <path d="M19 11.5H25V12.5H19V11.5Z" fill="currentColor" opacity="0.8" />
          
          {/* Right Column */}
          <rect x="30" y="14" width="4" height="19" rx="0.75" fill="currentColor" />
          <path d="M29 13.5H35V14.5H29V13.5Z" fill="currentColor" opacity="0.8" />

          {/* Upper Entablature Architrave */}
          <rect x="6" y="9" width="32" height="3" rx="0.75" fill="currentColor" />
          <rect x="8" y="6" width="28" height="2" rx="0.5" fill="#9B815A" />

          {/* Brass Fulcrum / Sun Disk of Equity */}
          <circle cx="22" cy="4" r="2" fill="#9B815A" />
        </svg>
      </div>

      {variant !== "mark" && (
        <div className="flex flex-col justify-center">
          <span
            className={`font-serif-display font-semibold text-[#191917] leading-none ${wordmarkSizes[size]}`}
          >
            NYAYLINK
          </span>
          <span className="font-mono-tech text-[9px] tracking-[0.28em] text-[#66625C] mt-1 uppercase">
            Legal Ecosystem · India
          </span>
        </div>
      )}
    </div>
  );
};
