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
      {/* 1. Eyebrow Heading: INDIA'S LEGAL ACCESS PLATFORM with Champagne Divider Lines */}
      <motion.div
        variants={itemVariants}
        className="flex items-center justify-center space-x-3 sm:space-x-5 mb-3 sm:mb-4 md:mb-5"
      >
        <div className="h-[1px] w-10 sm:w-16 md:w-24 bg-gradient-to-r from-transparent via-[#F4D59C]/50 to-[#E6AE65]/90" />
        <span className="font-sans-body text-[10.5px] sm:text-[12px] md:text-[13px] uppercase tracking-[0.32em] sm:tracking-[0.40em] text-[#F4D59C] font-medium whitespace-nowrap drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
          INDIA&apos;S LEGAL ACCESS PLATFORM
        </span>
        <div className="h-[1px] w-10 sm:w-16 md:w-24 bg-gradient-to-l from-transparent via-[#F4D59C]/50 to-[#E6AE65]/90" />
      </motion.div>

      {/* 2. Monumental Central Headline in Bodoni Moda with Warm Metallic Champagne Gold & Luminous Glow */}
      <motion.div variants={itemVariants} className="relative w-full flex flex-col items-center">
        {/* Gentle ambient golden halo behind typography */}
        <div
          className="absolute -inset-x-24 -inset-y-12 sm:-inset-x-32 sm:-inset-y-20 bg-[radial-gradient(ellipse_80%_60%_at_50%_48%,rgba(244,213,156,0.16)_0%,rgba(230,174,101,0.06)_50%,transparent_78%)] pointer-events-none blur-3xl z-[-1]"
          aria-hidden="true"
        />

        <h1 
          className="font-serif-editorial font-normal leading-[0.90] sm:leading-[0.88] lg:leading-[0.87] tracking-[-0.024em] sm:tracking-[-0.028em] flex flex-col items-center gold-headline-glow"
          style={{ fontSize: "clamp(2.85rem, 9.8vw, 11.85rem)" }}
        >
          {/* Line 1: 'Justice, Made' */}
          <span className="inline-block gold-text-gradient px-1">
            Justice, Made
          </span>

          {/* Line 2: 'Accessible.' */}
          <span className="inline-block gold-text-gradient px-1 mt-0.5 sm:mt-1 lg:mt-1.5">
            Accessible.
          </span>
        </h1>
      </motion.div>
    </motion.div>
  );
};
