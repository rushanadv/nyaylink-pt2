"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

interface StatItem {
  value: string;
  label: string;
}

const statsData: StatItem[] = [
  {
    value: "10,000+",
    label: "Verified Lawyers",
  },
  {
    value: "50,000+",
    label: "Consultations",
  },
  {
    value: "25+",
    label: "Practice Areas",
  },
];

export const HeroStatistics: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: shouldReduceMotion ? 0.3 : 0.8,
        delay: shouldReduceMotion ? 0 : 0.35,
        ease: [0.16, 1, 0.3, 1] as const,
      }}
      className="relative z-20 w-full max-w-[620px] pt-6 sm:pt-8 select-none"
      aria-label="Platform network milestones"
    >
      <div className="flex flex-wrap items-center gap-6 sm:gap-8 lg:gap-10">
        {statsData.map((stat, idx) => (
          <React.Fragment key={stat.label}>
            {/* Stat Item */}
            <div className="flex flex-col">
              <span className="font-sans-body text-[22px] sm:text-[26px] lg:text-[28px] font-normal tracking-tight text-[#F9F6F0] leading-none mb-1.5">
                {stat.value}
              </span>
              <span className="font-sans-body text-[12px] sm:text-[12.5px] text-stone-300/75 font-normal whitespace-nowrap leading-tight">
                {stat.label}
              </span>
            </div>

            {/* Thin vertical separator between stats */}
            {idx < statsData.length - 1 && (
              <div
                className="hidden sm:block h-7 w-[1px] bg-white/15 shrink-0 self-center"
                aria-hidden="true"
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </motion.div>
  );
};
