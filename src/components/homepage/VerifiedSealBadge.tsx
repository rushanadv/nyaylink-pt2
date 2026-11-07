"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

export const VerifiedSealBadge: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.aside
      initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: shouldReduceMotion ? 0.3 : 0.9,
        delay: shouldReduceMotion ? 0 : 0.25,
        ease: [0.16, 1, 0.3, 1] as const,
      }}
      className="hidden md:flex flex-col items-center select-none cursor-default"
      aria-label="Verified Legal Network"
    >
      <div className="relative group w-24 h-24 lg:w-28 lg:h-28 flex items-center justify-center">
        {/* Subtle hover glow */}
        <div
          className="absolute inset-0 rounded-full bg-[#D9AD68]/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          aria-hidden="true"
        />

        <svg
          viewBox="0 0 120 120"
          className="w-full h-full text-[#D9AD68] transition-transform duration-500 group-hover:scale-105"
          aria-hidden="true"
        >
          <defs>
            {/* Top arc: Clockwise from (22, 60) to (98, 60) */}
            <path id="topArc" d="M 22,60 A 38,38 0 0,1 98,60" fill="none" />
            {/* Bottom arc: Counter-clockwise from (22, 60) to (98, 60) */}
            <path id="bottomArc" d="M 22,60 A 38,38 0 0,0 98,60" fill="none" />
          </defs>

          {/* Outer elegant ring */}
          <circle
            cx="60"
            cy="60"
            r="54"
            fill="none"
            stroke="#D9AD68"
            strokeWidth="1.35"
            strokeOpacity="0.85"
          />

          {/* Inner hairline dashed ring */}
          <circle
            cx="60"
            cy="60"
            r="50"
            fill="none"
            stroke="#D9AD68"
            strokeWidth="0.5"
            strokeOpacity="0.35"
            strokeDasharray="2.5 2.5"
          />

          {/* Top Arc Text: VERIFIED BY */}
          <text
            fill="#D9AD68"
            fontSize="8.5"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontWeight="600"
            letterSpacing="0.24em"
            opacity="0.95"
          >
            <textPath href="#topArc" startOffset="50%" textAnchor="middle">
              VERIFIED BY
            </textPath>
          </text>

          {/* Flanking accent dots */}
          <circle cx="17" cy="60" r="1.5" fill="#D9AD68" opacity="0.9" />
          <circle cx="103" cy="60" r="1.5" fill="#D9AD68" opacity="0.9" />

          {/* Bottom Arc Text: BAR COUNCIL */}
          <text
            fill="#D9AD68"
            fontSize="8"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontWeight="600"
            letterSpacing="0.24em"
            opacity="0.95"
          >
            <textPath href="#bottomArc" startOffset="50%" textAnchor="middle">
              BAR COUNCIL
            </textPath>
          </text>

          {/* Central Scales of Justice Emblem */}
          <g
            transform="translate(40, 38) scale(1)"
            stroke="#D9AD68"
            strokeWidth="1.6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* Center post */}
            <line x1="20" y1="6" x2="20" y2="34" />
            {/* Pedestal base */}
            <line x1="13" y1="34" x2="27" y2="34" />
            {/* Top finial / jewel */}
            <circle cx="20" cy="5" r="1.5" fill="#D9AD68" />
            {/* Balance beam */}
            <line x1="5" y1="11" x2="35" y2="11" />
            {/* Left pan suspension cords */}
            <line x1="5" y1="11" x2="1" y2="20" />
            <line x1="5" y1="11" x2="9" y2="20" />
            {/* Left pan bowl */}
            <path d="M 0 20 Q 5 24.5 10 20 Z" fill="#D9AD68" fillOpacity="0.2" />
            {/* Right pan suspension cords */}
            <line x1="35" y1="11" x2="31" y2="20" />
            <line x1="35" y1="11" x2="39" y2="20" />
            {/* Right pan bowl */}
            <path d="M 30 20 Q 35 24.5 40 20 Z" fill="#D9AD68" fillOpacity="0.2" />
          </g>
        </svg>
      </div>
    </motion.aside>
  );
};
