"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { MagneticButton } from "@/components/MagneticButton";

/* -------------------------------------------------------------------------- */
/*  Variants                                                                   */
/* -------------------------------------------------------------------------- */

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

/* -------------------------------------------------------------------------- */
/*  Component                                                                  */
/* -------------------------------------------------------------------------- */

export default function CTA() {
  const sectionRef = useRef<HTMLElement>(null);

  // Parallax scroll for the gradient orbs
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const orbY1 = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  const orbY2 = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-background py-32 md:py-44"
      id="contact"
    >
      {/* ── Animated gradient orbs ─────────────────────────────────────────── */}
      <motion.div
        aria-hidden
        style={{ y: orbY1 }}
        className="pointer-events-none absolute -top-40 -left-40 w-[600px] h-[600px]
                   rounded-full bg-brick-700/20 blur-[140px]"
      />
      <motion.div
        aria-hidden
        style={{ y: orbY2 }}
        className="pointer-events-none absolute -bottom-40 -right-20 w-[500px] h-[500px]
                   rounded-full bg-brick-600/15 blur-[120px]"
      />
      {/* Subtle top-center glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2
                   w-[800px] h-[2px] bg-gradient-to-r from-transparent via-brick-600/50 to-transparent"
      />

      {/* ── Grain texture overlay ──────────────────────────────────────────── */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px",
        }}
      />

      {/* ── Content ────────────────────────────────────────────────────────── */}
      <div className="container-site relative z-10 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={containerVariants}
          className="max-w-4xl mx-auto flex flex-col items-center gap-8"
        >
          {/* Badge */}
          <motion.div variants={itemVariants}>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full
                             bg-brick-600/10 border border-brick-600/30 text-brick-400
                             text-sm font-medium tracking-wide">
              <Sparkles size={14} className="text-brick-500" />
              Let&apos;s create something extraordinary
            </span>
          </motion.div>

          {/* Oversized headline */}
          <motion.h2
            variants={itemVariants}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold
                       leading-[1.05] tracking-tight text-white text-balance"
          >
            Your story.{" "}
            <span
              className="bg-gradient-to-r from-brick-400 via-brick-500 to-red-400
                         bg-clip-text text-transparent"
            >
              Our craft.
            </span>
            <br className="hidden sm:block" />
            {" "}Unforgettable.
          </motion.h2>

          {/* Supporting text */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed"
          >
            From raw footage to cinematic masterpiece — we turn your vision into
            content that stops the scroll, moves audiences, and builds brands.
            Ready when you are.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center gap-4 mt-2"
          >
            {/* Primary */}
            <MagneticButton>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-full
                           bg-brick-600 hover:bg-brick-500 text-white font-semibold text-lg
                           shadow-[0_0_40px_rgba(178,58,46,0.35)] hover:shadow-[0_0_60px_rgba(178,58,46,0.55)]
                           transition-all duration-300"
              >
                Start Your Project
                <motion.span
                  className="inline-flex"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
                >
                  <ArrowRight size={20} />
                </motion.span>
              </motion.a>
            </MagneticButton>

            {/* Secondary */}
            <motion.a
              href="#portfolio"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full
                         border border-navy-700 hover:border-navy-600 text-gray-300
                         hover:text-white font-medium text-lg transition-all duration-300
                         bg-navy-900/40 hover:bg-navy-900/70 backdrop-blur-sm"
            >
              View Our Work
            </motion.a>
          </motion.div>

          {/* Social proof micro-line */}
          <motion.p
            variants={itemVariants}
            className="text-sm text-gray-600 mt-2"
          >
            Trusted by{" "}
            <span className="text-gray-400 font-medium">97+ clients</span>{" "}
            across{" "}
            <span className="text-gray-400 font-medium">12 countries</span>
          </motion.p>
        </motion.div>
      </div>

      {/* ── Bottom border fade ─────────────────────────────────────────────── */}
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-px
                   bg-gradient-to-r from-transparent via-navy-700 to-transparent"
      />
    </section>
  );
}
