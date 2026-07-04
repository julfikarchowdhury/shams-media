"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useAnimation, Variants, useInView } from "framer-motion";
import { cn } from "@/lib/cn";

/* -------------------------------------------------------------------------- */
/*  Counter Hook                                                              */
/* -------------------------------------------------------------------------- */

function useCountUp(target: number, duration = 2000) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const startTimestamp = performance.now();
    const step = (timestamp: number) => {
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
    // cleanup
    return () => setCount(target);
  }, [target, duration]);
  return count;
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

  // Target numbers – replace with real data later
  const projects = useCountUp(182);
  const clients = useCountUp(97);
  const countries = useCountUp(12);
  const views = useCountUp(1245000);

  const formatNumber = (num: number) => {
    return num.toLocaleString();
  };

  const stats = [
    { id: 1, label: "Projects Completed", value: formatNumber(projects) },
    { id: 2, label: "Clients Served", value: formatNumber(clients) },
    { id: 3, label: "Countries Reached", value: formatNumber(countries) },
    { id: 4, label: "Views Generated", value: formatNumber(views) },
  ];

  return (
    <section ref={ref} className="section bg-navy-950 relative overflow-hidden" id="statistics">
      <div className="container-site relative z-10 py-16">
        {/* Header */}
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

        {/* Stats Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.id}
              variants={itemVariants}
              className={cn(
                "flex flex-col items-center text-center p-6 rounded-xl bg-navy-900 border border-navy-800 shadow-lg",
                "group hover:shadow-2xl transition-shadow duration-300"
              )}
            >
              <p className="text-display-xl font-bold text-brick-500 mb-2 transition-colors group-hover:text-brick-400">
                {stat.value}
              </p>
              <p className="text-label text-gray-400 uppercase tracking-wider">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
