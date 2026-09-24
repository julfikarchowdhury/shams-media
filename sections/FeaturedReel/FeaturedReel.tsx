"use client";

import { motion, Variants } from "framer-motion";
import { Play, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/cn";

/* -------------------------------------------------------------------------- */
/*  Mock Data                                                                  */
/* -------------------------------------------------------------------------- */

const featuredProject = {
  title: "Neon Echoes — Brand Anthem",
  category: "Commercial",
  description: "A fast-paced, high-energy cinematic piece showcasing the future of urban mobility for Neon Motors.",
  image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=2000",
};

const gridProjects = [
  {
    id: 1,
    title: "Silent Horizon",
    category: "Short Film",
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 2,
    title: "Vanguard FW24",
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1551244072-5d12893278ab?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    title: "Ascent",
    category: "Documentary",
    image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 4,
    title: "Sonic Resonance",
    category: "Music Video",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=800",
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
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.3 }
  }
};

/* -------------------------------------------------------------------------- */
/*  Component                                                                  */
/* -------------------------------------------------------------------------- */

export default function FeaturedReel() {
  return (
    <section className="section bg-background" id="reel">
      <div className="container-site">
        
        {/* Section Header */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 lg:mb-16"
        >
          <div className="max-w-2xl">
            <span className="text-label text-brick-500 mb-2 block tracking-widest uppercase">
              Featured Reel
            </span>
            <h2 className="text-display-lg text-balance">
              Stories that demand <span className="gradient-text-white">attention.</span>
            </h2>
          </div>
          <Link href="#portfolio" className="btn btn-secondary btn-lg shrink-0 group">
            View All Projects
            <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </motion.div>

        {/* Cinematic Main Player */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className={cn(
            "relative w-full aspect-video lg:aspect-cinema rounded-2xl lg:rounded-3xl",
            "overflow-hidden group cursor-pointer",
            "border border-navy-700 bg-navy-950 shadow-2xl"
          )}
        >
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-[0.22,1,0.36,1] group-hover:scale-105"
            style={{ backgroundImage: `url(${featuredProject.image})` }}
          />
          
          {/* Overlays */}
          <div className="absolute inset-0 bg-navy-950/20 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-0" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/30 to-transparent fade-bottom" />
          
          {/* Play Button Center */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 transition-all duration-500 ease-out group-hover:scale-110 group-hover:bg-brick-600/90 group-hover:border-brick-500 group-hover:shadow-glow-accent">
              <Play size={32} className="ml-2 text-white fill-white" />
            </div>
          </div>

          {/* Bottom Content */}
          <div className="absolute bottom-0 left-0 w-full p-6 lg:p-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="badge badge-neutral mb-4 bg-navy-900/60 backdrop-blur-md border-white/10 text-white">
                {featuredProject.category}
              </div>
              <h3 className="text-heading-lg mb-2 text-white">
                {featuredProject.title}
              </h3>
              <p className="text-body text-gray-300 max-w-xl line-clamp-2">
                {featuredProject.description}
              </p>
            </div>
            <div className="hidden md:block">
              <div className="text-sm font-mono text-gray-400 tracking-wider">02:45</div>
            </div>
          </div>
        </motion.div>

        {/* Grid of Smaller Projects */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6"
        >
          {gridProjects.map((project) => (
            <motion.div key={project.id} variants={fadeIn} className="group cursor-pointer">
              <div className="relative aspect-video rounded-xl overflow-hidden bg-navy-900 border border-navy-800 mb-4">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-[0.22,1,0.36,1] group-hover:scale-110"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                <div className="absolute inset-0 bg-navy-900/30 group-hover:bg-transparent transition-colors duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent opacity-80" />
                
                {/* Hover Play Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-90 group-hover:scale-100">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30">
                    <Play size={20} className="ml-1 text-white fill-white" />
                  </div>
                </div>
              </div>

              <div className="flex flex-col">
                <span className="text-xs font-mono text-brick-500 mb-1 uppercase tracking-wider">
                  {project.category}
                </span>
                <h4 className="text-heading-sm group-hover:text-brick-400 transition-colors duration-300">
                  {project.title}
                </h4>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
