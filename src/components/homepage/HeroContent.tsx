"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

export const HeroContent: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.12,
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
      className="relative z-20 flex flex-col items-center text-center max-w-[1100px] mx-auto select-none px-4"
    >
      {/* 1. Eyebrow Label with Thin Champagne Divider Lines */}
      <motion.div
        variants={itemVariants}
        className="flex items-center justify-center space-x-3 sm:space-x-4 mb-4 sm:mb-6"
      >
        <div className="h-[1px] w-8 sm:w-16 bg-gradient-to-r from-transparent to-[#D9AD68]/70" />
        <span className="font-sans-body text-[10.5px] sm:text-[12px] uppercase tracking-[0.26em] sm:tracking-[0.3em] text-[#D9AD68] font-medium">
          INDIA&apos;S LEGAL ACCESS PLATFORM
        </span>
        <div className="h-[1px] w-8 sm:w-16 bg-gradient-to-l from-transparent to-[#D9AD68]/70" />
      </motion.div>

      {/* 2. Monumental Central Headline */}
      <motion.div variants={itemVariants} className="mb-6 sm:mb-8">
        <h1 className="font-serif-editorial text-[56px] sm:text-[76px] md:text-[90px] lg:text-[108px] xl:text-[120px] text-[#F4E8D0] leading-[0.95] tracking-[-0.02em] font-normal drop-shadow-[0_4px_30px_rgba(0,0,0,0.6)]">
          Justice, Made
          <br />
          Accessible.
        </h1>
      </motion.div>

      {/* 3. Two Prominent Primary CTA Buttons */}
      <motion.div
        variants={itemVariants}
        className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 w-full max-w-[480px]"
      >
        {/* Primary CTA: Get Legal Help */}
        <Link
          href="#legal-help"
          className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 sm:py-4 rounded-md bg-[#D9AD68] hover:bg-[#E2BA77] text-[#050D13] text-[14.5px] sm:text-[15px] font-semibold tracking-wide shadow-[0_8px_24px_rgba(217,173,104,0.3)] transition-all duration-200 active:scale-[0.99] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D9AD68] shrink-0"
        >
          <span>Get Legal Help</span>
          <ArrowRight className="w-4 h-4 text-[#050D13] transition-transform duration-200 group-hover:translate-x-0.5" />
        </Link>

        {/* Secondary CTA: Join as Lawyer */}
        <Link
          href="#join-lawyer"
          className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 sm:py-4 rounded-md bg-[#050D13]/40 hover:bg-[#D9AD68]/10 border border-[#D9AD68]/45 hover:border-[#D9AD68] text-[#F4E8D0] text-[14.5px] sm:text-[15px] font-medium tracking-wide transition-all duration-200 active:scale-[0.99] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D9AD68] shrink-0"
        >
          Join as Lawyer
        </Link>
      </motion.div>
    </motion.div>
  );
};
