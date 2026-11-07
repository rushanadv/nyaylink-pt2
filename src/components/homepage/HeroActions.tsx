"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

export const HeroActions: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: shouldReduceMotion ? 0.3 : 0.8,
        delay: shouldReduceMotion ? 0 : 0.22,
        ease: [0.16, 1, 0.3, 1] as const,
      }}
      className="relative z-30 flex flex-col items-center text-center max-w-[680px] mx-auto select-none px-4"
    >
      {/* Supporting Description */}
      <p className="font-sans-body text-[14.5px] sm:text-[16px] md:text-[17px] text-stone-200/90 font-normal leading-relaxed mb-5 sm:mb-6 max-w-[560px] drop-shadow-[0_2px_14px_rgba(0,0,0,0.9)]">
        Find verified lawyers, get legal guidance, and manage your cases &mdash; all in one place.
      </p>

      {/* Dual Primary Action CTA Buttons */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 w-full sm:w-auto">
        {/* Primary CTA: Get Legal Help → (Warm Ivory/Gold Filled Pill) */}
        <Link
          href="#legal-help"
          className="group inline-flex items-center justify-center gap-2.5 px-7 sm:px-8 py-3.5 sm:py-4 rounded-full bg-[#F4E8D0] hover:bg-white text-[#0B151D] text-[14px] sm:text-[15px] font-medium shadow-[0_4px_24px_rgba(217,173,104,0.35)] hover:shadow-[0_6px_28px_rgba(244,232,208,0.55)] transition-all duration-200 active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D9AD68]"
        >
          <span>Get Legal Help</span>
          <ArrowRight className="w-4 h-4 text-[#0B151D] transition-transform duration-200 group-hover:translate-x-0.5" />
        </Link>

        {/* Secondary CTA: Join as Lawyer (Translucent Outline Pill) */}
        <Link
          href="#join-lawyer"
          className="inline-flex items-center justify-center px-7 sm:px-8 py-3.5 sm:py-4 rounded-full bg-[#0B151D]/75 hover:bg-[#0B151D]/95 border border-[#D9AD68]/45 hover:border-[#D9AD68]/80 text-[#F4E8D0] text-[14px] sm:text-[15px] font-medium backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.6)] transition-all duration-200 active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D9AD68]/60"
        >
          Join as Lawyer
        </Link>
      </div>
    </motion.div>
  );
};
