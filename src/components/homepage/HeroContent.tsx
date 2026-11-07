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
      className="relative z-20 flex flex-col items-center text-center max-w-[1200px] mx-auto select-none px-4"
    >
      {/* 1. Eyebrow Label with Thin Champagne Divider Lines */}
      <motion.div
        variants={itemVariants}
        className="flex items-center justify-center space-x-3 sm:space-x-5 mb-4 sm:mb-6"
      >
        <div className="h-[1px] w-8 sm:w-20 bg-gradient-to-r from-transparent to-[#D9AD68]/80" />
        <span className="font-sans-body text-[10.5px] sm:text-[12.5px] uppercase tracking-[0.28em] sm:tracking-[0.34em] text-[#D9AD68] font-medium">
          INDIA&apos;S LEGAL ACCESS PLATFORM
        </span>
        <div className="h-[1px] w-8 sm:w-20 bg-gradient-to-l from-transparent to-[#D9AD68]/80" />
      </motion.div>

      {/* 2. Monumental Central Headline framing the Apex */}
      <motion.div variants={itemVariants} className="w-full">
        <h1 className="font-serif-editorial text-[58px] sm:text-[80px] md:text-[98px] lg:text-[116px] xl:text-[132px] text-[#F4E8D0] leading-[0.93] tracking-[-0.025em] font-normal drop-shadow-[0_4px_35px_rgba(0,0,0,0.7)]">
          Justice, Made
          <br />
          Accessible.
        </h1>
      </motion.div>
    </motion.div>
  );
};
