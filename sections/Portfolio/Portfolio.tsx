"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play } from "lucide-react";
import { cn } from "@/lib/cn";

/* -------------------------------------------------------------------------- */
/*  Data                                                                       */
/* -------------------------------------------------------------------------- */

type Medium = "Image" | "Video";

const categories = ["All", "Image", "Video"] as const;

const portfolioData: {
  id: number;
  title: string;
  category: string;
  medium: Medium;
  image: string;
  height: string;
}[] = [
  // Video — unique from FeaturedReel hero titles where possible
  {
    id: 1,
    title: "Urban Pulse",
    category: "Commercial",
    medium: "Video",
    image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&q=80&w=800",
    height: "h-[300px]",
  },
  {
    id: 2,
    title: "Silent Horizon",
    category: "Short Film",
    medium: "Video",
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=800",
    height: "h-[400px]",
  },
  {
    id: 3,
    title: "Vanguard FW24",
    category: "Fashion",
    medium: "Video",
    image: "https://images.unsplash.com/photo-1551244072-5d12893278ab?auto=format&fit=crop&q=80&w=800",
    height: "h-[450px]",
  },
  {
    id: 4,
    title: "Sonic Resonance",
    category: "Music Video",
    medium: "Video",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=800",
    height: "h-[350px]",
  },
  {
    id: 5,
    title: "Ascent",
    category: "Documentary",
    medium: "Video",
    image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&q=80&w=800",
    height: "h-[500px]",
  },
  {
    id: 6,
    title: "Ethereal Cut",
    category: "Fashion",
    medium: "Video",
    image: "https://images.unsplash.com/photo-1600096194534-95cf5ece04cf?auto=format&fit=crop&q=80&w=800",
    height: "h-[320px]",
  },
  // Image — retouch / stills / thumbnails
  {
    id: 7,
    title: "Lumina Beauty",
    category: "Beauty Retouch",
    medium: "Image",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=800",
    height: "h-[400px]",
  },
  {
    id: 8,
    title: "Atlas Product Pack",
    category: "Product Stills",
    medium: "Image",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800",
    height: "h-[320px]",
  },
  {
    id: 9,
    title: "Click Magnet Set",
    category: "Thumbnails",
    medium: "Image",
    image: "https://images.unsplash.com/photo-1611162616471-46b635cb9539?auto=format&fit=crop&q=80&w=800",
    height: "h-[280px]",
  },
  {
    id: 10,
    title: "Velvet Composite",
    category: "Composite",
    medium: "Image",
    image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=800",
    height: "h-[450px]",
  },
  {
    id: 11,
    title: "Shelf Ready",
    category: "E-commerce",
    medium: "Image",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800",
    height: "h-[360px]",
  },
  {
    id: 12,
    title: "Noir Editorial",
    category: "Retouch",
    medium: "Image",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=800",
    height: "h-[420px]",
  },
];

/* -------------------------------------------------------------------------- */
/*  Component                                                                  */
/* -------------------------------------------------------------------------- */

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>("All");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return portfolioData;
    return portfolioData.filter((project) => project.medium === activeCategory);
  }, [activeCategory]);

  return (
    <section className="section bg-navy-950 relative overflow-hidden" id="portfolio">
      <div className="container-site relative z-10">
        
        {/* Section Header & Filter */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div className="max-w-xl">
            <span className="text-label text-brick-500 mb-2 block tracking-widest uppercase">
              Selected Works
            </span>
            <h2 className="text-display-lg text-balance">
              Our creative <span className="gradient-text-accent">portfolio.</span>
            </h2>
          </div>

          {/* Filter Bar */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                  activeCategory === category
                    ? "bg-brick-600 text-white shadow-glow-accent"
                    : "bg-navy-900 text-gray-400 hover:bg-navy-800 hover:text-white border border-navy-800"
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                key={project.id}
                className={cn(
                  "relative break-inside-avoid w-full rounded-2xl overflow-hidden group cursor-pointer",
                  "bg-navy-900 border border-navy-800",
                  project.height
                )}
              >
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-[0.22,1,0.36,1] group-hover:scale-110"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                
                {/* Overlays */}
                <div className="absolute inset-0 bg-navy-950/20 group-hover:bg-navy-950/60 transition-colors duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/20 to-transparent opacity-80" />
                
                {/* Video: play icon · Image: zoom-only (no play) */}
                {project.medium === "Video" && (
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-90 group-hover:scale-100">
                    <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 text-white shadow-xl">
                      <Play size={24} className="ml-1 fill-white" />
                    </div>
                  </div>
                )}

                {/* Bottom Content */}
                <div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-[0.22,1,0.36,1]">
                  <span className="text-xs font-mono text-brick-500 mb-2 block uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {project.medium} · {project.category}
                  </span>
                  <h3 className="text-heading-md text-white mb-1 drop-shadow-md">
                    {project.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
