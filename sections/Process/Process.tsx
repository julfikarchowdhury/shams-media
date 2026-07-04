"use client";

import { motion, Variants } from "framer-motion";
import { Search, FolderDown, Scissors, MessageSquare, RotateCcw, Send } from "lucide-react";
import { cn } from "@/lib/cn";

/* -------------------------------------------------------------------------- */
/*  Data                                                                       */
/* -------------------------------------------------------------------------- */

const processSteps = [
  {
    id: "01",
    title: "Discovery",
    description: "We dive deep into your brand, goals, and visual aesthetic to align on the project's vision.",
    icon: Search,
  },
  {
    id: "02",
    title: "Receive Assets",
    description: "You securely transfer your raw footage, brand assets, and any necessary guidelines.",
    icon: FolderDown,
  },
  {
    id: "03",
    title: "Edit",
    description: "Our team crafts the narrative, assembling the footage with precision pacing and rhythm.",
    icon: Scissors,
  },
  {
    id: "04",
    title: "Review",
    description: "You receive the first cut for review via our streamlined feedback platform.",
    icon: MessageSquare,
  },
  {
    id: "05",
    title: "Revise",
    description: "We implement your feedback, refining color, sound, and pacing until it's perfect.",
    icon: RotateCcw,
  },
  {
    id: "06",
    title: "Deliver",
    description: "The final masterpiece is delivered in all requested formats, ready for launch.",
    icon: Send,
  },
];

/* -------------------------------------------------------------------------- */
/*  Animation Variants                                                         */
/* -------------------------------------------------------------------------- */

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
};

// Line animation depends on orientation
const lineVariantsHorizontal: Variants = {
  hidden: { scaleX: 0, transformOrigin: "left" },
  visible: { 
    scaleX: 1,
    transition: { duration: 0.8, ease: "easeInOut" }
  }
};

const lineVariantsVertical: Variants = {
  hidden: { scaleY: 0, transformOrigin: "top" },
  visible: { 
    scaleY: 1,
    transition: { duration: 0.8, ease: "easeInOut" }
  }
};

/* -------------------------------------------------------------------------- */
/*  Component                                                                  */
/* -------------------------------------------------------------------------- */

export default function Process() {
  return (
    <section className="section bg-navy-950 relative overflow-hidden" id="process">
      <div className="container-site relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="text-center mb-16 md:mb-24"
        >
          <span className="text-label text-brick-500 mb-2 block tracking-widest uppercase">
            How It Works
          </span>
          <h2 className="text-display-lg text-balance mx-auto">
            From concept to <span className="gradient-text-accent">final cut.</span>
          </h2>
        </motion.div>

        {/* Process Timeline Container */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="relative flex flex-col md:flex-row md:justify-between gap-8 md:gap-4"
        >
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            const isLast = index === processSteps.length - 1;

            return (
              <motion.div 
                key={step.id} 
                variants={fadeIn}
                className="relative flex flex-row md:flex-col items-start md:items-center gap-6 md:gap-4 flex-1"
              >
                {/* 
                  Connector Lines 
                  - Vertical for mobile (connecting down to the next node)
                  - Horizontal for desktop (connecting right to the next node)
                */}
                {!isLast && (
                  <>
                    {/* Mobile Line (Vertical) */}
                    <motion.div 
                      variants={lineVariantsVertical}
                      className="absolute top-16 left-6 md:hidden w-px h-[calc(100%-48px)] bg-gradient-to-b from-brick-600 to-navy-800 -translate-x-1/2 z-0"
                    />
                    {/* Desktop Line (Horizontal) */}
                    <motion.div 
                      variants={lineVariantsHorizontal}
                      className="hidden md:block absolute top-6 left-[60%] w-[80%] h-px bg-gradient-to-r from-brick-600 to-navy-800 z-0"
                    />
                  </>
                )}

                {/* Node Icon */}
                <div className="relative z-10 shrink-0 w-12 h-12 rounded-full bg-navy-900 border-2 border-navy-800 flex items-center justify-center text-gray-400 group-hover:border-brick-500 transition-colors duration-300">
                  <Icon size={20} strokeWidth={1.5} className="group-hover:text-white transition-colors" />
                </div>

                {/* Content */}
                <div className="md:text-center md:px-2 pt-2 md:pt-4 flex-1">
                  <div className="text-xs font-mono text-brick-500 mb-2 tracking-wider">
                    STEP {step.id}
                  </div>
                  <h3 className="text-heading-sm text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-body-sm text-gray-400 max-w-xs mx-auto md:px-2 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
