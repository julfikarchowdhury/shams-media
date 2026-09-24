/**
 * lib/motion.ts
 * Shared Framer Motion Variants and easing presets.
 * Import from here rather than defining inline — keeps all animation
 * parameters consistent and easy to tweak from one place.
 */

import type { Variants } from "framer-motion";

/* -------------------------------------------------------------------------- */
/*  Easing presets                                                             */
/* -------------------------------------------------------------------------- */

/** Cinematic ease — fast start, long tail. Use for entrance animations. */
export const EASE_CINEMATIC: [number, number, number, number] = [0.22, 1, 0.36, 1];

/** Spring-like ease — slight overshoot. Use for hover / interactive. */
export const EASE_SPRING: [number, number, number, number] = [0.34, 1.56, 0.64, 1];

/** Standard ease-in-out. Use for exits. */
export const EASE_INOUT: [number, number, number, number] = [0.65, 0, 0.35, 1];

/* -------------------------------------------------------------------------- */
/*  Container / stagger presets                                               */
/* -------------------------------------------------------------------------- */

export const staggerContainer = (
  stagger = 0.1,
  delayChildren = 0.1
): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: stagger, delayChildren },
  },
});

/* -------------------------------------------------------------------------- */
/*  Item-level Variants                                                       */
/* -------------------------------------------------------------------------- */

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE_CINEMATIC },
  },
};

export const fadeDown: Variants = {
  hidden: { opacity: 0, y: -24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE_CINEMATIC },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: EASE_CINEMATIC },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: EASE_CINEMATIC },
  },
};

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: EASE_CINEMATIC },
  },
};

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: EASE_CINEMATIC },
  },
};

/* -------------------------------------------------------------------------- */
/*  Reduced-motion safe wrapper                                               */
/* -------------------------------------------------------------------------- */

/**
 * Given any Variants object, returns a version where every `visible` state
 * has `transition.duration = 0` — making animations instant for users who
 * prefer reduced motion. The caller is responsible for detecting the pref
 * (via `useReducedMotion` from framer-motion).
 */
export function disableVariantMotion(variants: Variants): Variants {
  return Object.fromEntries(
    Object.entries(variants).map(([key, value]) => {
      if (typeof value === "object" && value !== null && "transition" in value) {
        return [key, { ...value, transition: { duration: 0 } }];
      }
      return [key, value];
    })
  );
}
