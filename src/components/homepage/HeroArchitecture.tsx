"use client";

import React, { useRef, useState, useCallback } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

export const HeroArchitecture: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (shouldReduceMotion || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      // Subtle, restrained architectural tilt (max 1.8 degrees)
      const rX = ((y - centerY) / centerY) * -1.8;
      const rY = ((x - centerX) / centerX) * 1.8;

      setRotateX(rX);
      setRotateY(rY);
    },
    [shouldReduceMotion]
  );

  const handleMouseLeave = useCallback(() => {
    setRotateX(0);
    setRotateY(0);
  }, []);

  return (
    <motion.div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full aspect-[16/12] max-h-[580px] lg:max-h-[640px] xl:max-h-[680px] flex items-center justify-center overflow-hidden rounded-[2px] border border-[#CCB99F]/60 shadow-[0_24px_60px_rgba(73,48,37,0.12)] bg-[#F5F1E9]"
      style={{
        perspective: 1200,
      }}
    >
      <motion.div
        className="relative w-full h-full will-change-transform"
        animate={{
          rotateX: shouldReduceMotion ? 0 : rotateX,
          rotateY: shouldReduceMotion ? 0 : rotateY,
        }}
        transition={{
          type: "spring",
          stiffness: 140,
          damping: 26,
          mass: 0.5,
        }}
      >
        {/* Main Monumental Judicial Facade Image */}
        <div className="relative w-full h-full select-none">
          <Image
            src="/assets/nyaylink/architecture/judicial-facade-monument.jpg"
            alt="Monumental contemporary Indian judicial facade in warm sandstone and limestone with classical colonnades"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 58vw"
            className="object-cover object-[center_35%] transition-transform duration-700 ease-out"
          />

          {/* Warm sunlight tone overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#493025]/10 via-transparent to-[#9B815A]/10 pointer-events-none mix-blend-multiply" />

          {/* Precision architectural inner border */}
          <div className="absolute inset-3 sm:inset-4 border border-white/20 pointer-events-none rounded-[1px]" />

          {/* Architectural Monograph Plaque */}
          <div className="absolute bottom-5 right-5 sm:bottom-6 sm:right-6 bg-[#24221F]/95 backdrop-blur-md border border-[#9B815A]/50 text-[#EEEAE1] px-4 py-3 sm:px-5 sm:py-3.5 rounded-[2px] shadow-2xl max-w-[270px] sm:max-w-[310px] pointer-events-auto">
            <div className="flex items-center justify-between pb-1.5 border-b border-[#CCB99F]/20 mb-1.5">
              <span className="font-mono-tech text-[9px] sm:text-[10px] tracking-[0.2em] text-[#CCB99F] uppercase">
                FACADE ELEVATION
              </span>
              <span className="font-mono-tech text-[9px] sm:text-[10px] text-[#9B815A]">
                ARCH. 01
              </span>
            </div>
            <p className="font-serif-display text-[13px] sm:text-[14px] leading-snug tracking-wide text-[#F5F1E9]">
              Dholpur Sandstone & Colonnade Geometry
            </p>
            <div className="flex items-center justify-between mt-2 pt-1.5 border-t border-[#CCB99F]/15 font-mono-tech text-[8px] sm:text-[9px] text-[#CCB99F]/80">
              <span>INSTITUTIONAL PERMANENCE</span>
              <span>28°36&apos;N · 77°14&apos;E</span>
            </div>
          </div>

          {/* Top subtle architectural tag */}
          <div className="absolute top-5 left-5 font-mono-tech text-[9px] tracking-[0.22em] text-[#24221F] bg-[#EEEAE1]/95 backdrop-blur-sm px-3 py-1 rounded-[1px] border border-[#CCB99F]/60 uppercase shadow-sm">
            CONTEMPORARY INDIAN JUDICIAL DESIGN
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
