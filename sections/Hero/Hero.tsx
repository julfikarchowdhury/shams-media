"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useSpring, Variants } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Play, Star } from "lucide-react";

import { cn } from "@/lib/cn";
import { useMousePosition } from "@/hooks/use-mouse-position";
import { MagneticButton } from "@/components/MagneticButton";

/* -------------------------------------------------------------------------- */
/*  Animation Variants                                                         */
/* -------------------------------------------------------------------------- */

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const timelineVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
      delay: 0.5,
    },
  },
};

/* -------------------------------------------------------------------------- */
/*  Component                                                                  */
/* -------------------------------------------------------------------------- */

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { x: mouseX, y: mouseY } = useMousePosition();
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    const handleResize = () => setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const calcX = windowSize.width ? (mouseX / windowSize.width - 0.5) * 2 : 0;
  const calcY = windowSize.height ? (mouseY / windowSize.height - 0.5) * 2 : 0;

  const springConfig = { damping: 50, stiffness: 400 };
  const smoothX = useSpring(calcX * 12, springConfig);
  const smoothY = useSpring(calcY * 12, springConfig);

  return (
    <section
      id="home"
      ref={containerRef}
      className={cn(
        "relative min-h-[100dvh]",
        "pt-24 pb-16",
        "gradient-hero grain",
      )}
    >
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-brick-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-navy-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container-site relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-10 items-start">

          {/* ── Left Column: Content ────────────────────────────────────────── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-6 lg:pr-8 lg:pb-[45vh]"
          >
            <motion.div variants={itemVariants} className="inline-flex">
              <span className="badge badge-accent">
                <span className="relative flex h-2 w-2 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brick-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brick-500"></span>
                </span>
                Premium Creative Agency
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-display-xl text-balance"
            >
              Cinematic visuals that <span className="gradient-text-accent">captivate</span> and convert.
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-body-lg text-secondary text-balance max-w-lg"
            >
              We craft stunning video content, motion graphics, and brand storytelling designed to elevate your agency and engage your audience.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-4 mt-4"
            >
              <MagneticButton>
                <Link href="#contact" className="btn btn-xl btn-primary group">
                  Start a Project
                  <ArrowUpRight size={20} strokeWidth={2.5} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </MagneticButton>
              <Link href="#reel" className="btn btn-xl btn-ghost group">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-navy-800 border border-navy-700 mr-2 transition-colors group-hover:bg-brick-600/20 group-hover:border-brick-600/30">
                  <Play size={14} className="ml-0.5 text-white" />
                </div>
                View Showreel
              </Link>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-6 mt-8 pt-8 border-t border-navy-800"
            >
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-navy-900 bg-navy-700 overflow-hidden flex items-center justify-center">
                    <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt={`Client ${i}`} className="w-full h-full object-cover opacity-80" />
                  </div>
                ))}
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1 text-brick-500">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>
                <span className="text-sm font-medium text-gray-300 mt-1">Trusted by 200+ brands</span>
              </div>
            </motion.div>
          </motion.div>

          {/* ── Right Column: sticky video card (pins until hero ends) ─────── */}
          <div className="relative hidden md:block w-full lg:sticky lg:top-28 self-start">
            <motion.div
              variants={timelineVariants}
              initial="hidden"
              animate="visible"
              style={{ x: smoothX, y: smoothY }}
              className="card-glass w-full max-w-[600px] ml-auto p-6 relative z-10 shadow-2xl overflow-hidden"
            >
              {/* Fake UI Header */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/5">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="text-xs font-mono text-gray-400">SHAMS_MEDIA_FINAL_V2.proj</div>
                <div className="w-12 h-6 rounded bg-navy-800/50" />
              </div>

              {/* Video Preview Area (Mock) */}
              <div className="aspect-video w-full rounded-xl bg-navy-950 border border-white/5 relative overflow-hidden mb-6 group cursor-pointer">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&q=80&w=1200')] bg-cover bg-center opacity-60 mix-blend-luminosity group-hover:opacity-80 transition-opacity duration-500" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 transition-transform duration-300 group-hover:scale-110">
                    <Play size={24} className="ml-1 text-white fill-white" />
                  </div>
                </div>
                <div className="absolute bottom-3 left-4 px-2 py-1 rounded bg-black/60 backdrop-blur text-[10px] font-mono text-white/90">
                  00:01:24:12
                </div>
              </div>

              {/* Timeline Tracks */}
              <div className="space-y-3 relative">
                <div className="absolute top-0 bottom-0 left-[35%] w-px bg-brick-500 z-20">
                  <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-3 h-3 bg-brick-500 rounded-sm" />
                </div>

                <div className="h-8 rounded-md bg-navy-800/40 flex items-center px-2 gap-2 w-full overflow-hidden">
                  <div className="w-16 shrink-0 text-[10px] font-mono text-gray-500">V1</div>
                  <div className="flex-1 flex gap-1 h-5 relative">
                    <div className="absolute left-0 w-[45%] h-full rounded-sm bg-blue-500/20 border border-blue-500/30" />
                    <div className="absolute left-[46%] w-[30%] h-full rounded-sm bg-brick-500/30 border border-brick-500/40" />
                    <div className="absolute left-[77%] w-[20%] h-full rounded-sm bg-blue-500/20 border border-blue-500/30" />
                  </div>
                </div>

                <div className="h-8 rounded-md bg-navy-800/40 flex items-center px-2 gap-2 w-full overflow-hidden">
                  <div className="w-16 shrink-0 text-[10px] font-mono text-gray-500">A1</div>
                  <div className="flex-1 flex gap-1 h-5 relative">
                    <div className="absolute left-0 w-[100%] h-full rounded-sm bg-emerald-500/10 border border-emerald-500/20 overflow-hidden flex flex-col justify-center gap-[2px]">
                      <div className="w-full h-px bg-emerald-500/40 opacity-50" />
                      <div className="w-full h-px bg-emerald-500/40 opacity-80" />
                      <div className="w-full h-px bg-emerald-500/40 opacity-50" />
                    </div>
                  </div>
                </div>

                <div className="h-8 rounded-md bg-navy-800/40 flex items-center px-2 gap-2 w-full overflow-hidden">
                  <div className="w-16 shrink-0 text-[10px] font-mono text-gray-500">G1</div>
                  <div className="flex-1 flex gap-1 h-5 relative">
                    <div className="absolute left-[30%] w-[15%] h-full rounded-sm bg-purple-500/20 border border-purple-500/30" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
