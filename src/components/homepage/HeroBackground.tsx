"use client";

import React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

export const HeroBackground: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden select-none pointer-events-none z-10">
      <motion.div
        initial={{ scale: shouldReduceMotion ? 1 : 1.03, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          duration: shouldReduceMotion ? 0.3 : 1.2,
          ease: [0.16, 1, 0.3, 1] as const,
        }}
        className="relative w-full h-full"
      >
        <Image
          src="/assets/nyaylink/architecture/hero-supreme-court-actual-4k.webp"
          alt="Supreme Court of India monumental architecture, Tilak Marg, New Delhi"
          fill
          priority
          sizes="100vw"
          quality={90}
          className="object-cover object-[center_32%] sm:object-[center_28%]"
        />
      </motion.div>
    </div>
  );
};
