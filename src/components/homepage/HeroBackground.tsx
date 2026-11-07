"use client";

import React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

export const HeroBackground: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden select-none pointer-events-none">
      <motion.div
        initial={{ scale: shouldReduceMotion ? 1 : 1.04, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          duration: shouldReduceMotion ? 0.3 : 1.4,
          ease: [0.16, 1, 0.3, 1] as const,
        }}
        className="relative w-full h-full"
      >
        <Image
          src="/assets/nyaylink/architecture/hero-courthouse-4k.webp"
          alt="Monumental Supreme Court judicial courthouse architecture at dramatic sunset with central dome"
          fill
          priority
          sizes="100vw"
          quality={95}
          className="object-cover object-[center_32%] sm:object-[center_28%]"
        />
      </motion.div>
    </div>
  );
};
