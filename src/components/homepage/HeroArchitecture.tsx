"use client";

import React from "react";
import { ArchitecturalCanvas } from "../three/ArchitecturalCanvas";

export const HeroArchitecture: React.FC = () => {
  return (
    <div className="w-full flex items-center justify-center">
      <ArchitecturalCanvas />
    </div>
  );
};
