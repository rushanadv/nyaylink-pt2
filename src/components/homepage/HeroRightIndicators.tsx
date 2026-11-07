"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

export const HeroRightIndicators: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <aside
      aria-hidden="true"
      className="hidden xl:flex flex-col items-center fixed right-8 sm:right-10 top-1/2 -translate-y-1/2 z-30 pointer-events-none select-none space-y-4"
    >
      {/* Vertical 'LEGAL' Marker Text */}
      <span className="font-sans-body text-[9.5px] uppercase tracking-[0.3em] text-[#D9AD68]/75 [writing-mode:vertical-rl] rotate-180 font-medium">
        LEGAL
      </span>

      {/* Vertical Line with Glowing Indicator Dot */}
      <div className="relative w-[1px] h-28 bg-gradient-to-b from-[#D9AD68]/20 via-[#D9AD68]/60 to-[#D9AD68]/20 flex items-center justify-center">
        <motion.div
          animate={
            shouldReduceMotion
              ? {}
              : {
                  scale: [1, 1.25, 1],
                  opacity: [0.7, 1, 0.7],
                }
          }
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="w-2 h-2 rounded-full bg-[#F4E8D0] shadow-[0_0_8px_#D9AD68]"
        />
      </div>

      {/* Section Indicator: 01 / 04 */}
      <div className="flex flex-col items-center text-[10.5px] font-mono tracking-wider text-stone-400/90 leading-tight">
        <span className="text-[#F4E8D0] font-semibold">01</span>
        <span className="w-2.5 h-[1px] bg-[#D9AD68]/40 my-0.5" />
        <span className="text-stone-400/70">04</span>
      </div>
    </aside>
  );
};
