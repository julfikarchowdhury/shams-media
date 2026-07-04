"use client";

import { motion, Variants } from "framer-motion";
import {
  Video,
  LayoutDashboard,
  Building2,
  Shirt,
  School,
  HeartPulse,
  Dumbbell,
  Car,
  UtensilsCrossed,
  ShoppingBag,
} from "lucide-react";

/* -------------------------------------------------------------------------- */
/*  Data                                                                       */
/* -------------------------------------------------------------------------- */

const industries = [
  { id: 1, label: "Content Creators", icon: Video, color: "text-red-400" },
  { id: 2, label: "SaaS", icon: LayoutDashboard, color: "text-blue-400" },
  { id: 3, label: "Real Estate", icon: Building2, color: "text-amber-400" },
  { id: 4, label: "Fashion", icon: Shirt, color: "text-pink-400" },
  { id: 5, label: "Education", icon: School, color: "text-violet-400" },
  { id: 6, label: "Healthcare", icon: HeartPulse, color: "text-emerald-400" },
  { id: 7, label: "Fitness", icon: Dumbbell, color: "text-orange-400" },
  { id: 8, label: "Automotive", icon: Car, color: "text-sky-400" },
  { id: 9, label: "Restaurants", icon: UtensilsCrossed, color: "text-yellow-400" },
  { id: 10, label: "E-commerce", icon: ShoppingBag, color: "text-teal-400" },
];

/* -------------------------------------------------------------------------- */
/*  Variants                                                                   */
/* -------------------------------------------------------------------------- */

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.1 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const headingVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

/* -------------------------------------------------------------------------- */
/*  Component                                                                  */
/* -------------------------------------------------------------------------- */

export default function Industries() {
  return (
    <section className="section bg-background relative overflow-hidden" id="industries">
      {/* Subtle radial glow backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
      >
        <div className="w-[600px] h-[600px] rounded-full bg-brick-600/5 blur-[120px]" />
      </div>

      <div className="container-site relative z-10">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={headingVariants}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="text-label text-brick-500 uppercase tracking-widest block mb-2">
            Industries We Serve
          </span>
          <h2 className="text-display-lg text-balance text-white">
            We speak every{" "}
            <span className="gradient-text-accent">industry's language.</span>
          </h2>
          <p className="text-body-lg text-gray-400 mt-4">
            From viral creators to enterprise brands, our editing craft scales
            seamlessly across every vertical.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={containerVariants}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
        >
          {industries.map(({ id, label, icon: Icon, color }) => (
            <motion.div
              key={id}
              variants={cardVariants}
              whileHover={{ y: -4, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="group relative flex flex-col items-center justify-center gap-4 p-6 rounded-2xl
                         bg-navy-900 border border-navy-800 cursor-default overflow-hidden
                         hover:border-brick-700 hover:shadow-[0_0_28px_rgba(178,58,46,0.15)]
                         transition-colors duration-300"
            >
              {/* Hover glow bubble */}
              <span
                aria-hidden
                className="absolute inset-0 scale-0 group-hover:scale-100 transition-transform duration-500
                           rounded-2xl bg-brick-600/5 pointer-events-none"
              />

              {/* Icon container */}
              <div
                className="relative z-10 w-12 h-12 rounded-xl flex items-center justify-center
                            bg-navy-800 group-hover:bg-navy-700 transition-colors duration-300
                            shadow-inner"
              >
                <Icon
                  size={22}
                  className={`${color} transition-transform duration-300 group-hover:scale-110`}
                />
              </div>

              {/* Label */}
              <p className="relative z-10 text-sm font-medium text-gray-300 text-center leading-tight
                            group-hover:text-white transition-colors duration-300">
                {label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
