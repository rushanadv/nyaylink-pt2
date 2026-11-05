import React from "react";
import { Navbar } from "@/components/navigation/Navbar";
import { HeroSection } from "@/components/homepage/HeroSection";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-[#EEEAE1] selection:bg-[#493025] selection:text-[#EEEAE1]">
      {/* Navigation */}
      <Navbar />

      {/* Page 01: The Grand Facade */}
      <HeroSection />
    </main>
  );
}
