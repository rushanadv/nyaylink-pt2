"use client";

import React, { useState } from "react";
import { Mic, Sparkles, ArrowRight, Volume2 } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

interface LanguageOption {
  code: string;
  label: string;
}

const languages: LanguageOption[] = [
  { code: "hi", label: "हिंदी" },
  { code: "en", label: "English" },
  { code: "ta", label: "தமிழ்" },
  { code: "bn", label: "বাংলা" },
];

export const AIAssistantPanel: React.FC = () => {
  const [selectedLang, setSelectedLang] = useState<string>("en");
  const [isListening, setIsListening] = useState<boolean>(false);
  const shouldReduceMotion = useReducedMotion();

  const handleLanguageSelect = (code: string) => {
    setSelectedLang(code);
  };

  const toggleMic = () => {
    setIsListening((prev) => !prev);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: shouldReduceMotion ? 0.3 : 0.8,
        delay: shouldReduceMotion ? 0 : 0.35,
        ease: [0.16, 1, 0.3, 1] as const,
      }}
      className="relative w-full max-w-[420px] sm:max-w-[460px] rounded-2xl bg-[#0B151D]/80 backdrop-blur-xl border border-[#D9AD68]/25 p-5 sm:p-6 shadow-[0_24px_60px_rgba(0,0,0,0.65)] overflow-hidden"
      aria-label="NyayLink AI Legal Assistant"
    >
      {/* Subtle warm champagne corner glow */}
      <div
        className="absolute -top-12 -left-12 w-32 h-32 rounded-full bg-[#D9AD68]/15 blur-2xl pointer-events-none"
        aria-hidden="true"
      />

      {/* Top Header Row with Title, Subtitle, and Circular Microphone CTA */}
      <div className="flex items-start justify-between gap-4 mb-4 sm:mb-5">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#D9AD68] fill-[#D9AD68]/20" aria-hidden="true" />
            <h3 className="font-sans-body text-[16px] sm:text-[17px] font-semibold text-[#F4E8D0] tracking-tight">
              Ask NyayLink AI
            </h3>
          </div>
          <p className="font-sans-body text-[12.5px] sm:text-[13px] text-[#A9ADB0] leading-snug">
            Get instant legal guidance in your language.
          </p>
        </div>

        {/* Circular Champagne Gold Microphone Button */}
        <button
          type="button"
          onClick={toggleMic}
          aria-label={isListening ? "Stop listening" : "Start voice guidance in your language"}
          className={`relative group flex items-center justify-center w-12 h-12 rounded-full shrink-0 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D9AD68] cursor-pointer shadow-md ${
            isListening
              ? "bg-[#E2BA77] scale-105 ring-4 ring-[#D9AD68]/40"
              : "bg-gradient-to-br from-[#E2BA77] to-[#D9AD68] hover:scale-105 active:scale-95"
          }`}
        >
          {isListening ? (
            <Volume2 className="w-5 h-5 text-[#050D13] animate-pulse" aria-hidden="true" />
          ) : (
            <Mic className="w-5 h-5 text-[#050D13] transition-transform duration-200 group-hover:scale-110" aria-hidden="true" />
          )}

          {/* Ambient voice-active ping */}
          {isListening && !shouldReduceMotion && (
            <span className="absolute inset-0 rounded-full bg-[#D9AD68]/50 animate-ping pointer-events-none" />
          )}
        </button>
      </div>

      {/* Language Selection Pills */}
      <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
        {languages.map((lang) => {
          const isActive = selectedLang === lang.code;
          return (
            <button
              key={lang.code}
              type="button"
              onClick={() => handleLanguageSelect(lang.code)}
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[12px] sm:text-[12.5px] font-medium transition-all duration-200 cursor-pointer ${
                isActive
                  ? "bg-[#D9AD68]/20 border border-[#D9AD68] text-[#F4E8D0] shadow-sm"
                  : "bg-[#050D13]/60 border border-white/10 text-stone-300 hover:border-[#D9AD68]/50 hover:text-[#F4E8D0]"
              }`}
              aria-pressed={isActive}
            >
              <span>{lang.label}</span>
              <ArrowRight
                className={`w-3 h-3 transition-transform duration-200 ${
                  isActive ? "text-[#D9AD68] translate-x-0.5" : "text-stone-400 opacity-60"
                }`}
                aria-hidden="true"
              />
            </button>
          );
        })}
      </div>
    </motion.div>
  );
};
