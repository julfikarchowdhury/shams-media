"use client";

import { motion, Variants } from "framer-motion";
import { CheckCircle2, Zap, UserCheck, RefreshCw } from "lucide-react";
import { cn } from "@/lib/cn";

/* -------------------------------------------------------------------------- */
/*  Data                                                                       */
/* -------------------------------------------------------------------------- */

const features = [
  {
    id: 1,
    title: "Uncompromising Quality",
    description: "Every frame is meticulously crafted. We don't just edit; we engineer visual experiences.",
    icon: CheckCircle2,
  },
  {
    id: 2,
    title: "Lightning Fast Turnaround",
    description: "Our streamlined workflows guarantee a 48-hour delivery on most standard projects without sacrificing detail.",
    icon: Zap,
  },
  {
    id: 3,
    title: "Dedicated Directors",
    description: "Work directly with an experienced creative director who understands your brand's unique voice.",
    icon: UserCheck,
  },
  {
    id: 4,
    title: "Revisions Until Perfect",
    description: "Your satisfaction is our baseline. We offer comprehensive revision rounds to ensure the final product is flawless.",
    icon: RefreshCw,
  },
];

/* -------------------------------------------------------------------------- */
/*  Animation Variants                                                         */
/* -------------------------------------------------------------------------- */

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
};

/* -------------------------------------------------------------------------- */
/*  Component                                                                  */
/* -------------------------------------------------------------------------- */

export default function WhyChooseUs() {
  return (
    <section className="section bg-background relative overflow-hidden" id="why-us">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-navy-500/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 -translate-x-1/2" />
      
      <div className="container-site relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* ── Left Column: Headline ────────────────────────────────────────── */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="lg:col-span-5 lg:sticky lg:top-32"
          >
            <span className="text-label text-brick-500 mb-2 block tracking-widest uppercase">
              The Shams Media Difference
            </span>
            <h2 className="text-display-lg text-balance mb-6">
              Why leading brands <span className="gradient-text-accent">choose us.</span>
            </h2>
            <p className="text-body-lg text-gray-400 max-w-md">
              We combine artistic intuition with technical precision. Partnering with us means gaining a dedicated team obsessed with making your visual content extraordinary.
            </p>
          </motion.div>

          {/* ── Right Column: Features Grid ────────────────────────────────── */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6"
          >
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <motion.div 
                  key={feature.id} 
                  variants={fadeIn}
                  className={cn(
                    "group relative p-6 md:p-8 rounded-2xl",
                    "bg-surface border border-border",
                    "transition-all duration-300 ease-out",
                    "hover:-translate-y-1 hover:border-brick-600/40 hover:bg-surface-raised hover:shadow-card-hover"
                  )}
                >
                  <div className="w-12 h-12 rounded-xl bg-navy-900 border border-navy-800 flex items-center justify-center text-brick-500 mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:bg-brick-600/10">
                    <Icon size={24} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-heading-sm mb-3 text-white transition-colors duration-300 group-hover:text-brick-400">
                    {feature.title}
                  </h3>
                  <p className="text-body-sm text-gray-400">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
