/**
 * Design token constants — mirrors values in globals.css @theme.
 * Use these in TypeScript / JS contexts (e.g., GSAP, Framer Motion animations).
 */

export const colors = {
  // Navy scale
  navy: {
    950: "#030a12",
    900: "#08111f",
    800: "#0d1a2d",
    700: "#12243d",
    600: "#1a3052",
    500: "#234068",
    400: "#3a5c8a",
    300: "#5a7eab",
    200: "#8aaacb",
    100: "#c0d3e8",
    50:  "#eaf1f8",
  },
  // Brick Red scale
  brick: {
    900: "#570a0a",
    800: "#8f1212",
    700: "#c41c1c",
    600: "#ff3131",
    500: "#ff4d4d",
    400: "#ff6e6e",
    300: "#ff9999",
    200: "#ffc4c4",
    100: "#ffe5e5",
    50:  "#fff5f5",
  },
  // Neutrals
  white:   "#f8f7f5",
  black:   "#060503",
  gray: {
    50:  "#f0ede9",
    100: "#e0dbd5",
    200: "#c8c0b8",
    300: "#a89e95",
    400: "#877d74",
    500: "#6b6057",
    600: "#52473f",
    700: "#3b332c",
    800: "#28221c",
    900: "#16120e",
  },
  // Semantic
  background:    "#08111f",
  surface:       "#0d1a2d",
  surfaceRaised: "#12243d",
  border:        "#1a3052",
  accent:        "#ff3131",
  accentHover:   "#ff4d4d",
} as const;

export const font = {
  sans:    "'Inter Variable', system-ui, -apple-system, sans-serif",
  display: "'Syne Variable', 'Inter Variable', system-ui, sans-serif",
  mono:    "'JetBrains Mono', 'Fira Code', ui-monospace, monospace",
} as const;

export const duration = {
  fast:   150,
  base:   250,
  slow:   400,
  slower: 600,
} as const;

export const easing = {
  spring: [0.34, 1.56, 0.64, 1] as const,
  out:    [0.22, 1,    0.36, 1] as const,
  in:     [0.64, 0,    0.78, 0] as const,
  inout:  [0.65, 0,    0.35, 1] as const,
} as const;

export const breakpoints = {
  sm:  640,
  md:  768,
  lg:  1024,
  xl:  1280,
  "2xl": 1536,
} as const;
