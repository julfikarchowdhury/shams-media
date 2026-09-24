"use client";

import { HTMLMotionProps, motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/cn";
import { fadeUp, staggerContainer, disableVariantMotion } from "@/lib/motion";

interface AnimatedSectionProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  delayChildren?: number;
  stagger?: number;
}

export function AnimatedSection({
  children,
  className,
  delayChildren = 0.1,
  stagger = 0.1,
  ...props
}: AnimatedSectionProps) {
  const prefersReduced = useReducedMotion();
  
  // Conditionally disable motion if requested by OS
  const containerVars = prefersReduced 
    ? disableVariantMotion(staggerContainer(stagger, delayChildren)) 
    : staggerContainer(stagger, delayChildren);

  const itemVars = prefersReduced ? disableVariantMotion(fadeUp) : fadeUp;

  return (
    <motion.div
      variants={containerVars}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10%" }}
      className={cn("w-full", className)}
      {...props}
    >
      {/* We need to apply itemVariants to immediate children */}
      {/* For simplicity, we just pass down variants via Context or map children */}
      {/* Since we don't want to break semantic HTML by forcing extra divs, 
          it's usually better to just use this as a container and let consumers 
          add motion.div variants={fadeUp} to their items. */}
      {children}
    </motion.div>
  );
}
