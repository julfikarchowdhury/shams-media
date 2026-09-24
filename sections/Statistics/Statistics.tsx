"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useAnimation, Variants, useInView } from "framer-motion";
import { cn } from "@/lib/cn";

/* -------------------------------------------------------------------------- */
/*  Counter Hook                                                              */
/* -------------------------------------------------------------------------- */

function useCountUp(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTimestamp: number | null = null;
    let animationFrame: number;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);

      setCount(Math.floor(progress * target));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(step);
      }
    };

    animationFrame = requestAnimationFrame(step);

    return () => cancelAnimationFrame(animationFrame);
  }, [target, duration, start]);

  return count;
}

function formatStat(num: number) {
  if (num >= 1_000_000) {
    const millions = num / 1_000_000;
    return `${millions % 1 === 0 ? millions.toFixed(0) : millions.toFixed(1)}M+`;
  }
  if (num >= 10_000) {
    return `${Math.round(num / 1000)}K+`;
  }
  return num.toLocaleString();
}

/* -------------------------------------------------------------------------- */
/*  Component                                                                 */
/* -------------------------------------------------------------------------- */

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.15, ease: [0.22, 1, 0.36, 1] },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Statistics() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const projects = useCountUp(182, 2000, isInView);
  const clients = useCountUp(97, 2000, isInView);
  const countries = useCountUp(12, 2000, isInView);
  const views = useCountUp(1_245_000, 2000, isInView);

  const stats = [
    { id: 1, label: "Projects Completed", value: formatStat(projects) },
    { id: 2, label: "Clients Served", value: formatStat(clients) },
    { id: 3, label: "Countries Reached", value: formatStat(countries) },
    { id: 4, label: "Views Generated", value: formatStat(views) },
  ];

  return (
    <section ref={ref} className="section bg-navy-950 relative overflow-hidden" id="statistics">
      <div className="container-site relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="text-center mb-12"
        >
          <span className="text-label text-brick-500 uppercase tracking-wider block mb-2">
            Our Impact
          </span>
          <h2 className="text-display-lg text-balance text-white">
            Numbers that speak <span className="gradient-text-accent">volumes</span>
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.id}
              variants={itemVariants}
              className={cn(
                "flex flex-col items-center justify-center text-center",
                "min-w-0 w-full overflow-hidden",
                "px-4 py-8 rounded-xl bg-navy-900 border border-navy-800 shadow-lg",
                "group hover:shadow-2xl transition-shadow duration-300"
              )}
            >
              <p
                className={cn(
                  "font-display font-bold text-brick-500 mb-2 tabular-nums",
                  "text-4xl md:text-5xl leading-none tracking-tight",
                  "w-full truncate transition-colors group-hover:text-brick-400"
                )}
              >
                {stat.value}
              </p>
              <p className="text-label text-gray-400 uppercase tracking-wider px-1">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
