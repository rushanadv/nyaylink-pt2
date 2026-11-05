"use client";

import React, { useState } from "react";
import Link from "next/link";
import { NyayLinkLogo } from "@/components/branding/NyayLinkLogo";
import { ArrowRight, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Discover", href: "#discover" },
  { label: "For Citizens", href: "#citizens" },
  { label: "For Advocates", href: "#advocates" },
  { label: "About", href: "#about" },
];

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="relative w-full z-40">
      <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-[8%] pt-6 sm:pt-7 pb-4 flex items-center justify-between">
        {/* Left: Brand Identity */}
        <Link
          href="/"
          className="flex items-center focus:outline-none focus-visible:ring-1 focus-visible:ring-white/50 rounded-sm"
          aria-label="NyayLink Home"
        >
          <NyayLinkLogo />
        </Link>

        {/* Centre: Nav links */}
        <nav
          className="hidden md:flex items-center space-x-7 lg:space-x-8"
          aria-label="Main navigation"
        >
          {navLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-[13.5px] lg:text-[14px] font-normal text-stone-200/80 hover:text-[#F9F6F0] transition-colors duration-200"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right: Auth & Get Started Actions */}
        <div className="hidden sm:flex items-center space-x-3.5 lg:space-x-4">
          <Link
            href="#login"
            className="text-[13.5px] lg:text-[14px] font-medium text-[#F9F6F0] border border-white/20 hover:border-white/40 hover:bg-white/5 px-4 py-2 rounded-md transition-all duration-200 focus:outline-none focus-visible:ring-1 focus-visible:ring-white/50"
          >
            Log in
          </Link>

          <Link
            href="#get-started"
            className="inline-flex items-center gap-1.5 text-[13.5px] lg:text-[14px] font-medium text-[#151413] bg-[#F9F6F0] hover:bg-white px-4 py-2 rounded-md shadow-sm transition-all duration-200 hover:shadow active:scale-[0.99] focus:outline-none focus-visible:ring-1 focus-visible:ring-stone-300"
          >
            <span>Get Started</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#151413]" />
          </Link>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex sm:hidden items-center">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-stone-200 hover:text-white focus:outline-none focus-visible:ring-1 focus-visible:ring-white/50 rounded-md"
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
            className="sm:hidden absolute top-full left-0 w-full bg-[#0D0D0F]/95 backdrop-blur-xl border-b border-white/10 px-6 py-6 shadow-2xl"
          >
            <nav className="flex flex-col space-y-4">
              {navLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-[15px] font-medium text-stone-200 hover:text-white py-1"
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-white/10 flex flex-col space-y-3">
                <Link
                  href="#login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center text-sm font-medium text-[#F9F6F0] border border-white/20 py-2.5 rounded-md"
                >
                  Log in
                </Link>
                <Link
                  href="#get-started"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full inline-flex items-center justify-center gap-1.5 text-sm font-medium text-[#151413] bg-[#F9F6F0] py-2.5 rounded-md"
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
