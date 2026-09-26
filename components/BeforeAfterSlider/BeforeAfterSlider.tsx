"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { cn } from "@/lib/cn";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
}

export function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = "Before",
  afterLabel = "After",
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback(
    (clientX: number) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const pos = Math.max(2, Math.min(98, (x / rect.width) * 100));
      setSliderPosition(pos);
      if (!hasInteracted) setHasInteracted(true);
    },
    [hasInteracted]
  );

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isDragging) return;
      handleMove(e.clientX);
    },
    [isDragging, handleMove]
  );

  const handleTouchMove = useCallback(
    (e: TouchEvent) => {
      if (!isDragging) return;
      e.preventDefault();
      handleMove(e.touches[0].clientX);
    },
    [isDragging, handleMove]
  );

  const handleInteractionEnd = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleInteractionEnd);
      window.addEventListener("touchmove", handleTouchMove, { passive: false });
      window.addEventListener("touchend", handleInteractionEnd);
    } else {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleInteractionEnd);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleInteractionEnd);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleInteractionEnd);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleInteractionEnd);
    };
  }, [isDragging, handleMouseMove, handleTouchMove, handleInteractionEnd]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative w-full rounded-2xl overflow-hidden cursor-ew-resize select-none",
        "bg-navy-900 shadow-2xl"
      )}
      style={{ aspectRatio: "3/2" }}
      onMouseDown={(e) => {
        setIsDragging(true);
        handleMove(e.clientX);
      }}
      onTouchStart={(e) => {
        setIsDragging(true);
        handleMove(e.touches[0].clientX);
      }}
    >
      {/* Before image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${beforeImage})` }}
      />

      {/* After image - clipped */}
      <div
        className="absolute inset-0 bg-cover bg-center pointer-events-none"
        style={{
          backgroundImage: `url(${afterImage})`,
          clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`,
        }}
      />

      {/* Divider line with glow */}
      <div
        className="absolute top-0 bottom-0 z-20 pointer-events-none"
        style={{
          left: `${sliderPosition}%`,
          width: "2px",
          transform: "translateX(-50%)",
          background: "rgba(255,255,255,0.9)",
          boxShadow: "0 0 14px 3px rgba(255,255,255,0.25), 0 0 3px 1px rgba(178,58,46,0.5)",
        }}
      />

      {/* Handle */}
      <div
        className="absolute top-1/2 z-30 pointer-events-none"
        style={{
          left: `${sliderPosition}%`,
          transform: "translate(-50%, -50%)",
        }}
      >
        <div
          className="w-11 h-11 rounded-full flex items-center justify-center"
          style={{
            background: "rgba(255,255,255,0.97)",
            boxShadow: "0 4px 20px rgba(0,0,0,0.4), 0 0 0 3px rgba(178,58,46,0.2)",
          }}
        >
          <svg width="20" height="12" viewBox="0 0 20 12" fill="none">
            <path d="M1 6H19M1 6L5 2M1 6L5 10M19 6L15 2M19 6L15 10"
              stroke="#1e293b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      {/* BEFORE badge — always visible, bottom-left, outside clip context */}
      <div className="absolute bottom-4 left-4 z-30 pointer-events-none">
        <span
          className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-mono font-semibold uppercase tracking-widest"
          style={{
            background: "rgba(0,0,0,0.6)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            color: "#e5e7eb",
            border: "1px solid rgba(255,255,255,0.18)",
          }}
        >
          {beforeLabel}
        </span>
      </div>

      {/* AFTER badge — always visible, bottom-right, outside clip context */}
      <div className="absolute bottom-4 right-4 z-30 pointer-events-none">
        <span
          className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-mono font-semibold uppercase tracking-widest"
          style={{
            background: "rgba(178,58,46,0.85)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            color: "#fff",
            border: "1px solid rgba(220,80,60,0.5)",
            boxShadow: "0 2px 16px rgba(178,58,46,0.35)",
          }}
        >
          {afterLabel}
        </span>
      </div>

      {/* Drag hint — fades after first interaction */}
      <div
        className="absolute inset-0 flex items-end justify-center pb-16 z-10 pointer-events-none transition-opacity duration-500"
        style={{ opacity: hasInteracted ? 0 : 1 }}
      >
        <span
          className="text-xs font-mono uppercase tracking-[0.2em]"
          style={{
            color: "rgba(255,255,255,0.45)",
            textShadow: "0 1px 6px rgba(0,0,0,0.9)",
          }}
        >
          ← drag to compare →
        </span>
      </div>
    </div>
  );
}
