"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

// Mock SVG logos for the marquee
const logos = [
  {
    name: "Acme Corp",
    svg: (
      <svg viewBox="0 0 100 30" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="h-8 w-auto">
        <path d="M10,25 L20,5 L30,25 M15,15 L25,15" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        <text x="35" y="22" fontFamily="sans-serif" fontSize="20" fontWeight="bold">ACME</text>
      </svg>
    ),
  },
  {
    name: "GlobalNet",
    svg: (
      <svg viewBox="0 0 140 30" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="h-8 w-auto">
        <circle cx="15" cy="15" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
        <path d="M5,15 L25,15 M15,5 L15,25" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
        <text x="32" y="22" fontFamily="sans-serif" fontSize="20" fontWeight="bold">GlobalNet</text>
      </svg>
    ),
  },
  {
    name: "Stark Ind",
    svg: (
      <svg viewBox="0 0 120 30" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="h-8 w-auto">
        <polygon points="15,5 5,25 25,25" fill="currentColor"/>
        <text x="32" y="22" fontFamily="sans-serif" fontSize="20" fontWeight="bold">STARK</text>
      </svg>
    ),
  },
  {
    name: "Initech",
    svg: (
      <svg viewBox="0 0 120 30" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="h-8 w-auto">
        <rect x="5" y="5" width="20" height="20" rx="4" stroke="currentColor" strokeWidth="4" fill="none"/>
        <circle cx="15" cy="15" r="4" fill="currentColor"/>
        <text x="35" y="22" fontFamily="sans-serif" fontSize="20" fontWeight="bold">Initech</text>
      </svg>
    ),
  },
  {
    name: "Umbrella",
    svg: (
      <svg viewBox="0 0 130 30" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="h-8 w-auto">
        <path d="M5,20 A10,10 0 0,1 25,20" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round"/>
        <path d="M15,20 L15,10" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
        <text x="32" y="22" fontFamily="sans-serif" fontSize="20" fontWeight="bold">Umbrella</text>
      </svg>
    ),
  },
  {
    name: "Massive Dynamic",
    svg: (
      <svg viewBox="0 0 180 30" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="h-8 w-auto">
        <path d="M5,25 L10,5 L15,15 L20,5 L25,25" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        <text x="32" y="22" fontFamily="sans-serif" fontSize="20" fontWeight="bold">MASSIVE D.</text>
      </svg>
    ),
  }
];

export default function TrustedBy() {
  return (
    <section className="relative py-16 lg:py-24 overflow-hidden bg-navy-900 border-t border-navy-800">
      <div className="container-site mb-10 text-center">
        <h2 className="text-label text-gray-500 uppercase tracking-widest">
          Trusted by innovative teams worldwide
        </h2>
      </div>

      {/* Marquee Container */}
      <div className="relative flex w-full overflow-hidden">
        {/* Left/Right Fade Edges */}
        <div className="absolute inset-0 z-10 pointer-events-none fade-sides" />

        <motion.div
          className="flex whitespace-nowrap items-center w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 30, // Adjust speed here
            repeat: Infinity,
          }}
        >
          {/* We duplicate the logos array twice to ensure seamless looping */}
          {[...logos, ...logos].map((logo, idx) => (
            <div
              key={`${logo.name}-${idx}`}
              className={cn(
                "flex items-center justify-center px-8 lg:px-16",
                "text-gray-500 hover:text-white",
                "transition-colors duration-300 ease-out cursor-pointer",
                "opacity-50 hover:opacity-100"
              )}
            >
              {logo.svg}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
