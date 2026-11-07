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
      className="relative flex flex-col items-center text-center max-w-[1520px] mx-auto select-none px-4"
    >
      {/* 1. Eyebrow Label with Thin Champagne Divider Lines - sitting behind the dome apex so spire naturally obscures middle letters */}
      <motion.div
        variants={itemVariants}
        className="flex items-center justify-center space-x-3 sm:space-x-5 mb-3 sm:mb-4 md:mb-5"
      >
        <div className="h-[1px] w-10 sm:w-20 md:w-28 bg-gradient-to-r from-transparent to-[#D9AD68]/80" />
        <span className="font-sans-body text-[11px] sm:text-[12.5px] md:text-[13.5px] uppercase tracking-[0.28em] sm:tracking-[0.34em] text-[#D9AD68] font-medium whitespace-nowrap">
          INDIA&apos;S LEGAL ACCESS PLATFORM
        </span>
        <div className="h-[1px] w-10 sm:w-20 md:w-28 bg-gradient-to-l from-transparent to-[#D9AD68]/80" />
      </motion.div>

      {/* 2. Monumental Central Headline framing the Apex & Drum */}
      <motion.div variants={itemVariants} className="w-full">
        <h1 className="font-serif-editorial text-[46px] sm:text-[66px] md:text-[88px] lg:text-[118px] xl:text-[138px] text-[#F4E8D0] leading-[0.93] tracking-[-0.02em] font-normal drop-shadow-[0_4px_35px_rgba(0,0,0,0.7)] flex flex-col items-center">
          {/* Line 1: 'Justice,' and 'Made' framing the dome apex with genuine depth */}
          <span className="flex items-baseline justify-center w-full gap-4 sm:gap-14 md:gap-24 lg:gap-36 xl:gap-48">
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
