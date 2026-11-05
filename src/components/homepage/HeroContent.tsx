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
      className="relative z-20 max-w-[560px] lg:max-w-[580px] xl:max-w-[620px] flex flex-col justify-center"
    >
      {/* Eyebrow Label */}
      <motion.div variants={itemVariants} className="mb-4 sm:mb-5">
        <span className="font-sans-body text-[11px] sm:text-[11.5px] lg:text-[12px] uppercase tracking-[0.24em] text-stone-300/85 font-medium">
          INDIA&apos;S LEGAL ACCESS PLATFORM
        </span>
      </motion.div>

      {/* Main Headline */}
      <motion.div variants={itemVariants} className="mb-5 sm:mb-6">
        <h1 className="font-serif-editorial text-[50px] sm:text-[64px] md:text-[72px] lg:text-[78px] xl:text-[86px] text-[#F9F6F0] leading-[0.98] tracking-[-0.015em] font-normal">
          Justice, Made
          <br />
          Accessible.
        </h1>
      </motion.div>

      {/* Supporting Description */}
      <motion.div variants={itemVariants} className="mb-8 sm:mb-9 max-w-[480px]">
        <p className="font-sans-body text-[15px] sm:text-[16px] lg:text-[16.5px] leading-[1.58] text-stone-300/80 font-normal">
          Find verified lawyers, get legal guidance,
          <br className="hidden sm:inline" />
          {" "}and manage your cases &mdash; all in one place.
        </p>
      </motion.div>

      {/* CTA Buttons */}
      <motion.div
        variants={itemVariants}
        className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3.5 sm:gap-4"
      >
        {/* Primary CTA */}
        <Link
          href="#legal-help"
          className="group inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-md bg-[#F9F6F0] hover:bg-white text-[#151413] text-[14px] sm:text-[14.5px] font-medium shadow-sm transition-all duration-200 active:scale-[0.99] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 shrink-0"
        >
          <span>Get Legal Help</span>
          <ArrowRight className="w-4 h-4 text-[#151413] transition-transform duration-200 group-hover:translate-x-0.5" />
        </Link>

        {/* Secondary CTA: Join as Lawyer */}
        <Link
          href="#join-lawyer"
          className="inline-flex items-center justify-center px-6 sm:px-7 py-3 sm:py-3.5 rounded-md bg-transparent hover:bg-white/5 border border-white/25 hover:border-white/45 text-[#F9F6F0] text-[14px] sm:text-[14.5px] font-medium transition-all duration-200 active:scale-[0.99] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 shrink-0"
        >
          Join as Lawyer
        </Link>

        {/* Third CTA: For Businesses */}
        <Link
          href="#for-businesses"
          className="group inline-flex items-center justify-center gap-1.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded-md bg-transparent hover:bg-white/5 border border-white/20 hover:border-white/40 text-[#F9F6F0] text-[14px] sm:text-[14.5px] font-medium transition-all duration-200 active:scale-[0.99] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 shrink-0"
        >
          <span>For Businesses</span>
          <ArrowRight className="w-3.5 h-3.5 text-[#F9F6F0]/80 transition-transform duration-200 group-hover:translate-x-0.5" />
        </Link>
      </motion.div>
    </motion.div>
  );
};
