"use client";

import React, { useState } from "react";
import Link from "next/link";
import { NyayLinkLogo } from "@/components/branding/NyayLinkLogo";
import { Menu, X, ArrowUpRight } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
  isActive?: boolean;
}

const navItems: NavItem[] = [
  { label: "Home", href: "#", isActive: true },
  { label: "Features", href: "#features" },
  { label: "For Citizens", href: "#citizens" },
  { label: "For Advocates", href: "#advocates" },
  { label: "About", href: "#about" },
];

export const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="relative w-full z-50 bg-[#EEEAE1]/95 backdrop-blur-md border-b border-[#CCB99F]/30 transition-colors duration-200">
      <div className="max-w-[1540px] mx-auto px-6 sm:px-10 lg:px-14 h-20 sm:h-22 flex items-center justify-between">
        {/* Left: Original NyayLink Architectural Wordmark */}
        <Link
          href="#"
          className="group flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9B815A] rounded py-1 transition-transform duration-200"
          aria-label="NyayLink Home"
        >
          <NyayLinkLogo size="md" />
        </Link>

        {/* Centre: Desktop Navigation Links */}
        <nav
          className="hidden md:flex items-center space-x-1 lg:space-x-2"
          aria-label="Main Navigation"
        >
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`relative px-4 py-2 text-[13px] lg:text-[14px] font-medium tracking-[0.06em] uppercase transition-all duration-200 ${
                item.isActive
                  ? "text-[#191917] font-semibold"
                  : "text-[#66625C] hover:text-[#191917]"
              }`}
            >
              {item.label}
              {item.isActive && (
                <span className="absolute bottom-0 left-4 right-4 h-[1.5px] bg-[#493025] rounded-full" />
              )}
            </Link>
          ))}
        </nav>

        {/* Right: Actions */}
        <div className="hidden sm:flex items-center space-x-4 lg:space-x-6">
          <Link
            href="#login"
            className="text-[13px] lg:text-[14px] font-medium tracking-[0.06em] text-[#24221F] hover:text-[#191917] px-3 py-2 transition-colors duration-150"
          >
            Log In
          </Link>

          <Link
            href="#get-started"
            className="group relative inline-flex items-center justify-center px-5 py-2.5 text-[13px] lg:text-[14px] font-medium tracking-[0.06em] text-[#EEEAE1] bg-[#24221F] hover:bg-[#191917] transition-all duration-200 rounded-[2px] shadow-sm hover:shadow active:scale-[0.98]"
          >
            <span>Get Started</span>
            <ArrowUpRight className="ml-1.5 w-3.5 h-3.5 text-[#CCB99F] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex sm:hidden items-center">
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-[#24221F] hover:text-[#191917] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9B815A] rounded"
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="sm:hidden border-b border-[#CCB99F]/40 bg-[#F5F1E9] px-6 py-6 shadow-lg animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-base font-medium tracking-[0.08em] uppercase py-1 ${
                  item.isActive ? "text-[#191917] font-semibold" : "text-[#66625C]"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-[#CCB99F]/30 flex flex-col space-y-3">
              <Link
                href="#login"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-base font-medium text-[#24221F] py-2"
              >
                Log In
              </Link>
              <Link
                href="#get-started"
                onClick={() => setIsMobileMenuOpen(false)}
                className="inline-flex items-center justify-center px-5 py-3 text-sm font-medium tracking-wider text-[#EEEAE1] bg-[#24221F] rounded-[2px]"
              >
                Get Started
                <ArrowUpRight className="ml-2 w-4 h-4 text-[#CCB99F]" />
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
