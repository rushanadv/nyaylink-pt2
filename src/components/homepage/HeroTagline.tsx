"use client";

import React from "react";

export const HeroTagline: React.FC = () => {
  return (
    <footer className="relative z-50 w-full max-w-[1720px] mx-auto px-4 sm:px-10 lg:px-[6%] pb-3 sm:pb-4 pt-1 select-none">
      <div className="flex flex-col items-center justify-center space-y-1.5">
        <div className="flex items-center justify-center space-x-2 sm:space-x-4 w-full">
          {/* Left divider line */}
          <div className="h-[1px] hidden sm:block flex-1 max-w-[140px] sm:max-w-[200px] bg-gradient-to-r from-transparent via-[#D9AD68]/40 to-[#D9AD68]/70" />

          {/* Tagline */}
          <p className="font-sans-body text-[9px] sm:text-[11px] uppercase tracking-[0.16em] sm:tracking-[0.28em] text-[#D9AD68]/85 font-medium whitespace-nowrap text-center">
            LEGAL HELP <span className="text-stone-400/60 mx-1">/</span> EXPERT GUIDANCE{" "}
            <span className="text-stone-400/60 mx-1">/</span> A STRONGER INDIA
          </p>

          {/* Right divider line */}
          <div className="h-[1px] hidden sm:block flex-1 max-w-[140px] sm:max-w-[200px] bg-gradient-to-l from-transparent via-[#D9AD68]/40 to-[#D9AD68]/70" />
        </div>

        {/* CC BY-SA 4.0 Image Credit & License Attribution */}
        <p className="text-[9.5px] sm:text-[10px] text-stone-400/50 font-sans-body tracking-wider text-center">
          Photograph:{" "}
          <a
            href="https://commons.wikimedia.org/wiki/File:Supreme_Court_of_India_front_view_02.jpg"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-stone-300 underline decoration-stone-500/30 transition-colors"
          >
            Supreme Court of India
          </a>{" "}
          by{" "}
          <a
            href="https://commons.wikimedia.org/wiki/User:Pinakpani"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-stone-300 underline decoration-stone-500/30 transition-colors"
          >
            Pinakpani
          </a>{" "}
          /{" "}
          <a
            href="https://creativecommons.org/licenses/by-sa/4.0/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-stone-300 underline decoration-stone-500/30 transition-colors"
          >
            CC BY-SA 4.0
          </a>
        </p>
      </div>
    </footer>
  );
};
