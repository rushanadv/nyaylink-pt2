"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Mic, Sparkles } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

export const HeroContent: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const [questionText, setQuestionText] = useState("");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.1,
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
        duration: shouldReduceMotion ? 0.3 : 0.7,
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
      {/* 1. Eyebrow Label */}
      <motion.div variants={itemVariants} className="mb-3 sm:mb-4">
        <span className="font-sans-body text-[11px] sm:text-[11.5px] lg:text-[12px] uppercase tracking-[0.24em] text-stone-300/85 font-medium">
          INDIA&apos;S LEGAL ACCESS PLATFORM
        </span>
      </motion.div>

      {/* 2. Dominant Editorial Headline */}
      <motion.div variants={itemVariants} className="mb-4 sm:mb-5">
        <h1 className="font-serif-editorial text-[48px] sm:text-[60px] md:text-[68px] lg:text-[74px] xl:text-[80px] text-[#F9F6F0] leading-[0.98] tracking-[-0.015em] font-normal">
          Justice, Made
          <br />
          Accessible.
        </h1>
      </motion.div>

      {/* 3. Supporting Description */}
      <motion.div variants={itemVariants} className="mb-6 sm:mb-7 max-w-[480px]">
        <p className="font-sans-body text-[15px] sm:text-[16px] lg:text-[16.5px] leading-[1.55] text-stone-300/80 font-normal">
          Find verified lawyers, get legal guidance,
          <br className="hidden sm:inline" />
          {" "}and manage your cases &mdash; all in one place.
        </p>
      </motion.div>

      {/* 4. Primary CTA Buttons (Prominent Primary Actions) */}
      <motion.div
        variants={itemVariants}
        className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4"
      >
        {/* Primary Action: Get Legal Help */}
        <Link
          href="#legal-help"
          className="group inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-md bg-[#F9F6F0] hover:bg-white text-[#151413] text-[14px] sm:text-[14.5px] font-medium shadow-sm transition-all duration-200 active:scale-[0.99] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 shrink-0"
        >
          <span>Get Legal Help</span>
          <ArrowRight className="w-4 h-4 text-[#151413] transition-transform duration-200 group-hover:translate-x-0.5" />
        </Link>

        {/* Secondary Action: Join as Lawyer */}
        <Link
          href="#join-lawyer"
          className="inline-flex items-center justify-center px-6 sm:px-7 py-3 sm:py-3.5 rounded-md bg-transparent hover:bg-white/5 border border-white/25 hover:border-white/45 text-[#F9F6F0] text-[14px] sm:text-[14.5px] font-medium transition-all duration-200 active:scale-[0.99] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 shrink-0"
        >
          Join as Lawyer
        </Link>
      </motion.div>

      {/* 5. Additional Entry Point: NyayLink AI Pre-Consultation Input */}
      <motion.div
        variants={itemVariants}
        className="mt-6 sm:mt-7 pt-5 sm:pt-6 border-t border-white/12 max-w-[500px]"
      >
        {/* Editorial Label */}
        <div className="flex flex-col space-y-0.5 mb-2.5">
          <div className="flex items-center gap-1.5">
            <Sparkles className="w-3 h-3 text-[#CCB99F]" aria-hidden="true" />
            <span className="font-sans-body text-[10.5px] sm:text-[11px] uppercase tracking-[0.22em] text-[#CCB99F] font-semibold">
              NYAYLINK AI
            </span>
          </div>
          <p className="font-sans-body text-[13px] sm:text-[13.5px] text-stone-300/80 font-normal">
            Prefer to start with a question?
          </p>
        </div>

        {/* Horizontal Input Container */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="relative flex items-center w-full rounded-md bg-[#131214]/85 backdrop-blur-md border border-white/18 hover:border-white/30 focus-within:border-[#CCB99F]/70 focus-within:ring-1 focus-within:ring-[#CCB99F]/40 p-1.5 transition-all duration-200 shadow-[0_8px_24px_rgba(0,0,0,0.35)]"
        >
          <input
            type="text"
            value={questionText}
            onChange={(e) => setQuestionText(e.target.value)}
            placeholder="Describe your legal problem in any language..."
            className="flex-1 min-w-0 bg-transparent px-3 py-1.5 text-[13.5px] sm:text-[14px] text-[#F9F6F0] placeholder:text-stone-400/60 focus:outline-none"
            aria-label="Describe your legal problem in any language"
          />

          {/* Microphone Icon Button */}
          <button
            type="button"
            aria-label="Voice input"
            className="p-2 text-stone-300/80 hover:text-[#F9F6F0] hover:bg-white/5 rounded-md transition-colors shrink-0 cursor-pointer"
          >
            <Mic className="w-4 h-4 text-[#CCB99F]" />
          </button>

          {/* Ivory Ask → Button */}
          <button
            type="submit"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md bg-[#F9F6F0] hover:bg-white text-[#151413] text-[13px] sm:text-[13.5px] font-medium shadow-sm transition-all duration-150 active:scale-[0.98] shrink-0 cursor-pointer"
          >
            <span>Ask</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#151413]" />
          </button>
        </form>
      </motion.div>
    </motion.div>
  );
};
