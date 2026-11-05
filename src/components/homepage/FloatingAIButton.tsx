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
        className="pointer-events-none absolute right-[calc(100%+14px)] hidden sm:flex items-center gap-2 whitespace-nowrap rounded-md bg-[#161416]/95 backdrop-blur-md px-3.5 py-2 border border-[#CCB99F]/35 shadow-[0_8px_24px_rgba(0,0,0,0.5)]"
        role="tooltip"
        id="nyaylink-ai-tooltip"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-[#CCB99F] animate-pulse" />
        <span className="font-sans-body text-[12.5px] font-medium tracking-wide text-[#F9F6F0]">
          NyayLink AI <span className="text-[#CCB99F]/80">·</span> Pre-Consultation
        </span>
      </motion.div>

      {/* Interactive Circular Trigger */}
      <div className="relative flex items-center justify-center">
        {/* Restrained Breathing / Ambient Pulse Outer Ring */}
        {!shouldReduceMotion && (
          <motion.div
            animate={{
              scale: [1, 1.14, 1],
              opacity: [0.25, 0.5, 0.25],
            }}
            transition={{
              duration: 3.6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-0 rounded-full bg-[#4A1E26]/40 blur-md pointer-events-none"
          />
        )}

        <motion.button
          type="button"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onFocus={() => setIsHovered(true)}
          onBlur={() => setIsHovered(false)}
          whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
          whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
          transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
          aria-describedby="nyaylink-ai-tooltip"
          aria-label="NyayLink AI Pre-Consultation (Visual Placeholder)"
          className="group relative flex items-center justify-center w-14 h-14 sm:w-[68px] sm:h-[68px] rounded-full bg-gradient-to-br from-[#451C24] via-[#35151B] to-[#220D12] border border-[#CCB99F]/70 shadow-[0_12px_32px_rgba(0,0,0,0.65),0_2px_8px_rgba(69,28,36,0.35)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#CCB99F] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0D0D0F] cursor-pointer"
        >
          {/* Subtle Warm Brass Accent Rim */}
          <div className="absolute inset-[1.5px] rounded-full border border-white/10 pointer-events-none" />

          {/* Elegant Ivory Conversation Icon with subtle brass starlet */}
          <div className="relative flex items-center justify-center text-[#F9F6F0] transition-transform duration-200 group-hover:scale-105">
            <MessageSquare
              className="w-6 h-6 sm:w-7 sm:h-7 stroke-[1.8] text-[#F9F6F0]"
              aria-hidden="true"
            />
            <Sparkles
              className="absolute -top-1 -right-1.5 w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#CCB99F] fill-[#CCB99F]/20 animate-pulse"
              aria-hidden="true"
            />
          </div>
        </motion.button>
      </div>
    </aside>
  );
};
