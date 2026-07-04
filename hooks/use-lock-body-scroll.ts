"use client";

import { useState, useEffect, useCallback } from "react";

/**
 * Locks / unlocks body scroll — useful when a mobile menu overlay is open.
 * Preserves the current scroll position and restores it on unlock.
 */
export function useLockBodyScroll(locked: boolean): void {
  const lockScroll = useCallback(() => {
    const scrollY = window.scrollY;
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.overflow = "hidden";
  }, []);

  const unlockScroll = useCallback(() => {
    const scrollY = document.body.style.top;
    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.left = "";
    document.body.style.right = "";
    document.body.style.overflow = "";
    window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
  }, []);

  useEffect(() => {
    if (locked) {
      lockScroll();
    } else {
      unlockScroll();
    }

    return () => {
      unlockScroll();
    };
  }, [locked, lockScroll, unlockScroll]);
}
