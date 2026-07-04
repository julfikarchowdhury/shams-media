"use client";

import { useState, useEffect } from "react";

/**
 * Detects whether the page has been scrolled past a given threshold.
 * @param threshold  Number of pixels from the top to trigger the scroll state.
 * @returns          `true` when `window.scrollY >= threshold`.
 */
export function useScrolled(threshold = 20): boolean {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY >= threshold);
    };

    // Check on mount in case the page is already scrolled
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return scrolled;
}
