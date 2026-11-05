"use client";

import React from "react";
import { HeroActions } from "./HeroActions";
import { motion, useReducedMotion, Variants } from "framer-motion";
import { Scale, FileText, Briefcase } from "lucide-react";

export const HeroContent: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.1,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col justify-center h-full space-y-6 lg:space-y-8 py-4 sm:py-6 lg:pr-6 xl:pr-10"
    >
      {/* Eyebrow: OUR MISSION with refined hairline rule */}
      <motion.div
        variants={itemVariants}
        className="flex items-center space-x-3.5"
      >
        <span className="font-mono-tech text-[11px] sm:text-[12px] tracking-[0.22em] uppercase text-[#66625C] font-semibold">
          OUR MISSION
        </span>
        <div className="h-[1px] w-12 sm:w-16 bg-[#CCB99F]/70" />
      </motion.div>

      {/* Main Headline */}
      <motion.div variants={itemVariants} className="space-y-1">
        <h1 className="font-serif-display font-light text-[40px] leading-[1.02] sm:text-[54px] md:text-[60px] lg:text-[52px] xl:text-[64px] 2xl:text-[72px] text-[#191917] tracking-[-0.015em]">
          ACCESS TO JUSTICE,
          <span className="block italic font-normal text-[#24221F]">
            FOR EVERY CITIZEN.
          </span>
        </h1>
      </motion.div>

      {/* Supporting Description */}
      <motion.div variants={itemVariants} className="max-w-lg">
        <p className="font-sans-body text-[15px] sm:text-[17px] lg:text-[18px] leading-[1.6] text-[#33312E] font-normal">
          &ldquo;Technology, trust and legal expertise — working together for a
          fairer India.&rdquo;
        </p>
      </motion.div>

      {/* Action CTAs */}
      <motion.div variants={itemVariants}>
        <HeroActions />
      </motion.div>

      {/* Three Architectural Ecosystem Pillars */}
      <motion.div
        variants={itemVariants}
        className="pt-6 lg:pt-8 border-t border-[#CCB99F]/40"
      >
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-3 xl:gap-5">
          {/* Vertical 1: Marketplace */}
          <div className="space-y-1">
            <div className="flex items-center space-x-1.5 text-[#9B815A]">
              <Scale className="w-3.5 h-3.5 shrink-0" />
              <span className="font-mono-tech text-[10px] tracking-[0.14em] uppercase text-[#66625C] font-semibold">
                Marketplace
              </span>
            </div>
            <p className="text-[12px] leading-snug text-[#24221F]">
              Verified advocates & Bar Council credential checks.
            </p>
          </div>

          {/* Vertical 2: Intake */}
          <div className="space-y-1">
            <div className="flex items-center space-x-1.5 text-[#9B815A]">
              <FileText className="w-3.5 h-3.5 shrink-0" />
              <span className="font-mono-tech text-[10px] tracking-[0.14em] uppercase text-[#66625C] font-semibold">
                Assisted Intake
              </span>
            </div>
            <p className="text-[12px] leading-snug text-[#24221F]">
              Multilingual procedural guidance & smart routing.
            </p>
          </div>

          {/* Vertical 3: SaaS */}
          <div className="space-y-1">
            <div className="flex items-center space-x-1.5 text-[#9B815A]">
              <Briefcase className="w-3.5 h-3.5 shrink-0" />
              <span className="font-mono-tech text-[10px] tracking-[0.14em] uppercase text-[#66625C] font-semibold">
                Advocate SaaS
              </span>
            </div>
            <p className="text-[12px] leading-snug text-[#24221F]">
              Digital dockets, calendars & practice workflows.
            </p>
          </div>
        </div>

        {/* Legal Regulatory Compliance Assurance */}
        <div className="flex flex-wrap items-center justify-between gap-2 text-[10px] sm:text-[11px] text-[#66625C] pt-3 mt-3 font-mono-tech border-t border-[#CCB99F]/20">
          <span className="tracking-wider uppercase">
            Advocates Act (1961) Compliant
          </span>
          <span className="tracking-wider uppercase">
            Neutral Ecosystem · Confidential
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
};
