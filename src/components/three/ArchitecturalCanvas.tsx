"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { SceneManager } from "./scene/scene-manager";
import { Eye, Layers } from "lucide-react";

export const ArchitecturalCanvas: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sceneManagerRef = useRef<SceneManager | null>(null);
  const animationFrameIdRef = useRef<number | null>(null);
  const [isWireframe, setIsWireframe] = useState(false);

  useEffect(() => {
    if (!containerRef.current || !canvasRef.current) return;

    const container = containerRef.current;
    const canvas = canvasRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    // Detect prefers-reduced-motion
    const reducedMotionMedia = window.matchMedia("(prefers-reduced-motion: reduce)");
    let prefersReducedMotion = reducedMotionMedia.matches;

    const handleMotionChange = (e: MediaQueryListEvent) => {
      prefersReducedMotion = e.matches;
    };
    reducedMotionMedia.addEventListener("change", handleMotionChange);

    // Initialize WebGLRenderer
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        canvas,
        antialias: true,
        alpha: false,
        powerPreference: "high-performance",
      });
    } catch (e) {
      console.warn("WebGL not supported, falling back to static visual", e);
      return;
    }

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.05;
    renderer.outputColorSpace = THREE.SRGBColorSpace;

    // Initialize Scene Manager
    const sceneManager = new SceneManager(width / height);
    sceneManagerRef.current = sceneManager;

    // Animation Loop
    const render = () => {
      sceneManager.update(prefersReducedMotion);
      renderer.render(sceneManager.scene, sceneManager.camera);
      animationFrameIdRef.current = requestAnimationFrame(render);
    };
    render();

    // Mouse Move Parallax Handler
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const nx = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const ny = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      sceneManager.setMouse(nx, ny);
    };

    const handleMouseLeave = () => {
      sceneManager.setMouse(0, 0);
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    // Resize Observer
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width: newW, height: newH } = entry.contentRect;
        if (newW > 0 && newH > 0) {
          renderer.setSize(newW, newH);
          sceneManager.handleResize(newW, newH);
        }
      }
    });
    resizeObserver.observe(container);

    // Cleanup
    return () => {
      reducedMotionMedia.removeEventListener("change", handleMotionChange);
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
      resizeObserver.disconnect();

      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
      sceneManager.dispose();
      renderer.dispose();
    };
  }, []);

  // Toggle wireframe mode for architectural analysis
  const toggleWireframe = () => {
    if (!sceneManagerRef.current) return;
    const nextState = !isWireframe;
    setIsWireframe(nextState);

    sceneManagerRef.current.scene.traverse((obj) => {
      if (obj instanceof THREE.Mesh && obj.material) {
        if (Array.isArray(obj.material)) {
          obj.material.forEach((m) => (m.wireframe = nextState));
        } else {
          obj.material.wireframe = nextState;
        }
      }
    });
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[16/12] max-h-[580px] lg:max-h-[640px] xl:max-h-[680px] overflow-hidden rounded-[2px] border border-[#CCB99F]/60 shadow-[0_24px_60px_rgba(73,48,37,0.12)] bg-[#EEEAE1]"
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full block cursor-grab active:cursor-grabbing focus:outline-none"
        aria-label="Interactive procedural Three.js 3D architectural model of Indian judicial dome, colonnade and timber traverse"
      />

      {/* Top Architectural Spec Tag */}
      <div className="absolute top-5 left-5 flex items-center space-x-2 font-mono-tech text-[9px] tracking-[0.2em] text-[#24221F] bg-[#EEEAE1]/90 backdrop-blur-sm px-3 py-1.5 rounded-[1px] border border-[#CCB99F]/60 uppercase shadow-sm pointer-events-none">
        <span className="w-1.5 h-1.5 rounded-full bg-[#9B815A] animate-pulse" />
        <span>PROCEDURAL THREE.JS ARCHITECTURAL WORLD</span>
      </div>

      {/* Interactive Controls Overlay */}
      <div className="absolute top-5 right-5 flex items-center space-x-2">
        <button
          type="button"
          onClick={toggleWireframe}
          className="flex items-center space-x-1.5 font-mono-tech text-[10px] tracking-wider text-[#24221F] bg-[#F5F1E9]/95 hover:bg-[#EEEAE1] active:scale-95 px-3 py-1.5 rounded-[1px] border border-[#CCB99F]/70 shadow-sm transition-all duration-150"
          title="Toggle Architectural Wireframe"
        >
          {isWireframe ? (
            <>
              <Eye className="w-3.5 h-3.5 text-[#9B815A]" />
              <span>SHADED</span>
            </>
          ) : (
            <>
              <Layers className="w-3.5 h-3.5 text-[#9B815A]" />
              <span>WIREFRAME</span>
            </>
          )}
        </button>
      </div>

      {/* Bottom Monograph Plaque */}
      <div className="absolute bottom-5 right-5 sm:bottom-6 sm:right-6 bg-[#24221F]/95 backdrop-blur-md border border-[#9B815A]/50 text-[#EEEAE1] px-4 py-3 sm:px-5 sm:py-3.5 rounded-[2px] shadow-2xl max-w-[280px] sm:max-w-[320px] pointer-events-auto">
        <div className="flex items-center justify-between pb-1.5 border-b border-[#CCB99F]/20 mb-1.5">
          <span className="font-mono-tech text-[9px] sm:text-[10px] tracking-[0.2em] text-[#CCB99F] uppercase">
            PROCEDURAL MODEL
          </span>
          <span className="font-mono-tech text-[9px] sm:text-[10px] text-[#9B815A]">
            LIVE WEBGL
          </span>
        </div>
        <p className="font-serif-display text-[13px] sm:text-[14px] leading-snug tracking-wide text-[#F5F1E9]">
          Radial Dome Ribs · Walnut Traverse (36 Fins) · Basalt Inlay
        </p>
        <div className="flex items-center justify-between mt-2 pt-1.5 border-t border-[#CCB99F]/15 font-mono-tech text-[8px] sm:text-[9px] text-[#CCB99F]/80">
          <span>PARAMETRIC GEOMETRY</span>
          <span>16:9 VIEWPORT</span>
        </div>
      </div>

      {/* Soft gradient edge blend on desktop */}
      <div className="hidden lg:block absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-[#EEEAE1] to-transparent pointer-events-none" />
    </div>
  );
};
