"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export const HeroActions: React.FC = () => {
  return (
    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4 sm:pt-6">
      {/* Primary CTA */}
      <motion.div
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      >
        <Link
          href="#get-started"
          className="group relative inline-flex items-center justify-between sm:justify-center px-7 py-4 bg-[#24221F] text-[#EEEAE1] text-[13px] tracking-[0.14em] uppercase font-medium rounded-[2px] transition-all duration-300 hover:bg-[#191917] hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9B815A]"
          aria-label="Get Started with NyayLink"
        >
          <span className="relative z-10 font-semibold">GET STARTED</span>
          <ArrowRight className="ml-3 w-4 h-4 text-[#CCB99F] transition-transform duration-300 group-hover:translate-x-1" />
          <span className="absolute inset-0 border border-[#9B815A]/30 rounded-[2px] pointer-events-none" />
        </Link>
      </motion.div>

      {/* Secondary CTA */}
      <motion.div
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      >
        <Link
          href="#learn-more"
          className="group inline-flex items-center justify-between sm:justify-center px-7 py-4 bg-transparent border border-[#191917]/70 text-[#191917] text-[13px] tracking-[0.14em] uppercase font-medium rounded-[2px] transition-all duration-300 hover:bg-[#F5F1E9] hover:border-[#191917] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9B815A]"
          aria-label="Learn More about the Platform"
        >
          <span>LEARN MORE</span>
          <ArrowRight className="ml-3 w-4 h-4 text-[#493025] transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </motion.div>
    </div>
  );
};
