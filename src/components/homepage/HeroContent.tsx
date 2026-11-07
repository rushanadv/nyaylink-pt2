"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

export const HeroContent: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.12,
        delayChildren: shouldReduceMotion ? 0 : 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.3 : 0.8,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative z-40 flex flex-col items-center text-center max-w-[1520px] mx-auto select-none px-4"
    >
      {/* 1. Eyebrow Label with Fine Champagne Divider Lines - completely in front and fully visible */}
      <motion.div
        variants={itemVariants}
        className="flex items-center justify-center space-x-3 sm:space-x-5 mb-3 sm:mb-4 md:mb-5"
      >
        <div className="h-[1px] w-12 sm:w-20 md:w-28 bg-gradient-to-r from-transparent to-[#D9AD68]/80" />
        <span className="font-sans-body text-[11px] sm:text-[12.5px] md:text-[13.5px] uppercase tracking-[0.28em] sm:tracking-[0.34em] text-[#D9AD68] font-medium whitespace-nowrap">
          INDIA&apos;S LEGAL ACCESS PLATFORM
        </span>
        <div className="h-[1px] w-12 sm:w-20 md:w-28 bg-gradient-to-l from-transparent to-[#D9AD68]/80" />
      </motion.div>

      {/* 2. Monumental Central Headline - completely in front and fully visible */}
      <motion.div variants={itemVariants} className="w-full">
        <h1 className="font-serif-editorial text-[48px] sm:text-[68px] md:text-[90px] lg:text-[114px] xl:text-[128px] text-[#F4E8D0] leading-[0.96] sm:leading-[0.93] tracking-[-0.015em] font-normal drop-shadow-[0_4px_35px_rgba(0,0,0,0.85)] flex flex-col items-center">
          {/* Line 1: 'Justice, Made' */}
          <span className="inline-block tracking-[-0.015em]">
            Justice, Made
          </span>

          {/* Line 2: 'Accessible.' */}
          <span className="inline-block tracking-[-0.01em] sm:tracking-[0.01em] mt-1 sm:mt-2">
            Accessible.
          </span>
        </h1>
      </motion.div>
    </motion.div>
  );
};
