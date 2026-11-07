"use client";

import React, { useState } from "react";
import Link from "next/link";
import { NyayLinkLogo } from "@/components/branding/NyayLinkLogo";
import { ArrowRight, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "/", isActive: true },
  { label: "About", href: "#about" },
  { label: "Features", href: "#features" },
  { label: "Resources", href: "#resources" },
  { label: "Contact", href: "#contact" },
];

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="relative w-full z-40 border-b border-[#D9AD68]/15 bg-gradient-to-b from-[#050D13]/85 to-transparent">
      <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-[6%] py-5 sm:py-6 flex items-center justify-between">
        {/* Left: Brand Identity */}
        <Link
          href="/"
          className="flex items-center focus:outline-none focus-visible:ring-1 focus-visible:ring-[#D9AD68] rounded-sm transition-transform duration-200 hover:scale-[1.01]"
          aria-label="NyayLink Home"
        >
          <NyayLinkLogo />
        </Link>

        {/* Centre: Nav links */}
        <nav
          className="hidden md:flex items-center space-x-8 lg:space-x-10"
          aria-label="Main navigation"
        >
          {navLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`relative text-[13.5px] lg:text-[14px] tracking-wide transition-colors duration-200 ${
                item.isActive
                  ? "text-[#F4E8D0] font-medium"
                  : "text-stone-300/80 hover:text-[#F4E8D0]"
              }`}
            >
              {item.label}
              {item.isActive && (
                <span className="absolute -bottom-2 left-0 right-0 h-[1.5px] bg-[#D9AD68] rounded-full" />
              )}
            </Link>
          ))}
        </nav>

        {/* Right: Auth & Get Started Actions */}
        <div className="hidden sm:flex items-center space-x-4 lg:space-x-5">
          <Link
            href="#login"
            className="text-[13.5px] lg:text-[14px] font-normal text-stone-300/85 hover:text-[#F4E8D0] px-3 py-1.5 transition-colors duration-200"
          >
            Log In
          </Link>

          <Link
            href="#get-started"
            className="group inline-flex items-center gap-1.5 text-[13.5px] lg:text-[14px] font-medium text-[#F4E8D0] border border-[#D9AD68]/50 hover:border-[#D9AD68] hover:bg-[#D9AD68]/10 px-5 py-2 rounded-full transition-all duration-200 shadow-[0_2px_12px_rgba(217,173,104,0.1)] active:scale-[0.99] focus:outline-none focus-visible:ring-1 focus-visible:ring-[#D9AD68]"
          >
            <span>Get Started</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#D9AD68] transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex sm:hidden items-center">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-stone-300 hover:text-[#F4E8D0] focus:outline-none focus-visible:ring-1 focus-visible:ring-[#D9AD68] rounded-md"
            aria-label="Toggle mobile navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="sm:hidden absolute top-full left-0 w-full bg-[#050D13]/98 backdrop-blur-2xl border-b border-[#D9AD68]/20 px-6 py-6 shadow-2xl z-50"
          >
            <nav className="flex flex-col space-y-4">
              {navLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-[15px] font-medium text-stone-200 hover:text-[#F4E8D0] py-1"
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-[#D9AD68]/15 flex flex-col space-y-3">
                <Link
                  href="#login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center text-sm font-medium text-stone-300 hover:text-[#F4E8D0] py-2"
                >
                  Log In
                </Link>
                <Link
                  href="#get-started"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full inline-flex items-center justify-center gap-1.5 text-sm font-medium text-[#F4E8D0] border border-[#D9AD68]/60 hover:bg-[#D9AD68]/10 py-2.5 rounded-full"
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#D9AD68]" />
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
