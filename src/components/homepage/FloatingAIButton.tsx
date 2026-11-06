"use client";

import React, { useState } from "react";
import { MessageSquare, Sparkles } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

export const FloatingAIButton: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  return (
    <aside
      aria-label="AI Consultation Assistant"
      className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 lg:bottom-9 lg:right-9 z-50 flex items-center justify-end select-none"
    >
      {/* Refined Tooltip on Hover */}
      <motion.div
        initial={false}
        animate={
          isHovered
            ? { opacity: 1, x: 0, scale: 1 }
            : { opacity: 0, x: 8, scale: 0.96 }
        }
        transition={{ duration: 0.18, ease: "easeOut" }}
        className="pointer-events-none absolute right-[calc(100%+14px)] hidden sm:flex items-center gap-2 whitespace-nowrap rounded-md bg-[#161416]/95 backdrop-blur-md px-3.5 py-2 border border-[#CCB99F]/35 shadow-[0_8px_24px_rgba(0,0,0,0.5)] z-20"
        role="tooltip"
        id="nyaylink-ai-tooltip"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-[#CCB99F] animate-pulse" />
        <span className="font-sans-body text-[12.5px] font-medium tracking-wide text-[#F9F6F0]">
          NyayLink AI <span className="text-[#CCB99F]/80">·</span> Pre-Consultation
        </span>
      </motion.div>

      {/* Interactive Circular Trigger with Rotating Iridescent Ring */}
      <motion.div
        className="relative flex items-center justify-center"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onFocus={() => setIsHovered(true)}
        onBlur={() => setIsHovered(false)}
        whileHover={shouldReduceMotion ? {} : { scale: 1.055 }}
        whileTap={shouldReduceMotion ? {} : { scale: 0.96 }}
        transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* 1. Subtle Outer Pearlescent Glow */}
        <div
          className={`rainbow-glow ${
            isHovered ? "opacity-60 !blur-[7px] brightness-125" : "opacity-32"
          }`}
          aria-hidden="true"
        />

        {/* 2. Thin Rotating Iridescent Rainbow Ring (2–3px conic gradient mask) */}
        <div
          className={`rainbow-ring ${isHovered ? "brightness-120" : ""}`}
          aria-hidden="true"
        />

        {/* 3. Warm Ivory Circular Button Core */}
        <button
          type="button"
          aria-describedby="nyaylink-ai-tooltip"
          aria-label="NyayLink AI Pre-Consultation (Visual Placeholder)"
          className="group relative z-10 flex items-center justify-center w-14 h-14 sm:w-[68px] sm:h-[68px] rounded-full bg-[#F7F2E9] border border-[#CCB99F]/35 shadow-[0_10px_28px_rgba(0,0,0,0.45),0_2px_6px_rgba(0,0,0,0.12),inset_0_1px_1px_rgba(255,255,255,0.9)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#CCB99F] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0D0D0F] cursor-pointer transition-shadow duration-300 hover:shadow-[0_14px_36px_rgba(0,0,0,0.55),0_3px_10px_rgba(0,0,0,0.18)]"
        >
          {/* Subtle inner highlight bevel */}
          <div className="absolute inset-[1.5px] rounded-full border border-white/60 pointer-events-none" />

          {/* Deep Burgundy Message Icon with Muted Champagne/Brass Sparkle */}
          <div className="relative flex items-center justify-center text-[#552A32] transition-transform duration-200 group-hover:scale-105">
            <MessageSquare
              className="w-6 h-6 sm:w-7 sm:h-7 stroke-[1.8] text-[#552A32]"
              aria-hidden="true"
            />
            <Sparkles
              className="absolute -top-1 -right-1.5 w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#BFA175] fill-[#BFA175]/30 animate-pulse"
              aria-hidden="true"
            />
          </div>
        </button>
      </motion.div>
    </aside>
  );
};
