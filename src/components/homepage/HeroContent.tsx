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
        staggerChildren: shouldReduceMotion ? 0 : 0.14,
        delayChildren: shouldReduceMotion ? 0 : 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.3 : 0.85,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative z-10 flex flex-col items-center text-center max-w-[1520px] mx-auto select-none px-4"
    >
      {/* 1. Eyebrow Label with Thin Champagne Divider Lines - sitting in the clear dark sky above dome apex */}
      <motion.div
        variants={itemVariants}
        className="flex items-center justify-center space-x-3 sm:space-x-5 mb-4 sm:mb-6 md:mb-8"
      >
        <div className="h-[1px] w-8 sm:w-20 bg-gradient-to-r from-transparent to-[#D9AD68]/80" />
        <span className="font-sans-body text-[10.5px] sm:text-[12.5px] uppercase tracking-[0.28em] sm:tracking-[0.34em] text-[#D9AD68] font-medium">
          INDIA&apos;S LEGAL ACCESS PLATFORM
        </span>
        <div className="h-[1px] w-8 sm:w-20 bg-gradient-to-l from-transparent to-[#D9AD68]/80" />
      </motion.div>

      {/* 2. Monumental Central Headline framing the Apex & Drum */}
      <motion.div variants={itemVariants} className="w-full">
        <h1 className="font-serif-editorial text-[48px] sm:text-[68px] md:text-[92px] lg:text-[124px] xl:text-[144px] text-[#F4E8D0] leading-[0.93] tracking-[-0.02em] font-normal drop-shadow-[0_4px_35px_rgba(0,0,0,0.7)] flex flex-col items-center">
          {/* Line 1: 'Justice,' and 'Made' framing the dome apex with genuine depth */}
          <span className="flex items-baseline justify-center w-full gap-2 sm:gap-12 md:gap-24 lg:gap-40 xl:gap-52">
            <span className="inline-block">Justice,</span>
            <span className="inline-block">Made</span>
          </span>

          {/* Line 2: 'Accessible.' spanning across the drum */}
          <span className="inline-block tracking-[-0.01em] sm:tracking-[0.01em] md:tracking-[0.02em] lg:tracking-[0.03em] mt-1 sm:mt-2">
            Accessible.
          </span>
        </h1>
      </motion.div>
    </motion.div>
  );
};
