"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight, Video, Layers, Image as ImageIcon, Layout, Palette, Sparkles } from "lucide-react";
import { cn } from "@/lib/cn";

/* -------------------------------------------------------------------------- */
/*  Data                                                                       */
/* -------------------------------------------------------------------------- */

type ServiceDomain = "Image" | "Video";

const serviceGroups: {
  domain: ServiceDomain;
  blurb: string;
  items: {
    id: string;
    title: string;
    description: string;
    icon: typeof Video;
  }[];
}[] = [
  {
    domain: "Image",
    blurb: "Stills, retouch, and click-ready creatives.",
    items: [
      {
        id: "01",
        title: "Image Editing",
        description: "High-end retouching, manipulation, and composite work for flawless visual assets.",
        icon: ImageIcon,
      },
      {
        id: "02",
        title: "Thumbnails",
        description: "Click-worthy, high-conversion thumbnails optimized for YouTube and social platforms.",
        icon: Layout,
      },
      {
        id: "03",
        title: "AI Enhancement",
        description: "Upscaling, noise reduction, and generative fills using cutting-edge AI technologies.",
        icon: Sparkles,
      },
    ],
  },
  {
    domain: "Video",
    blurb: "Cuts, motion, and color for every frame.",
    items: [
      {
        id: "04",
        title: "Video Editing",
        description: "Cinematic cuts, pacing, and rhythm that keep viewers hooked from the first frame to the last.",
        icon: Video,
      },
      {
        id: "05",
        title: "Motion Graphics",
        description: "Dynamic 2D and 3D animations that bring your brand identity and complex ideas to life.",
        icon: Layers,
      },
      {
        id: "06",
        title: "Color Grading",
        description: "Professional color correction and grading to give your footage that premium, filmic look.",
        icon: Palette,
      },
    ],
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
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

/* -------------------------------------------------------------------------- */
/*  Component                                                                  */
/* -------------------------------------------------------------------------- */

export default function Services() {
  return (
    <section className="section bg-navy-900 relative overflow-hidden" id="services">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brick-600/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
      
      <div className="container-site relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="mb-16 md:mb-20"
        >
          <span className="text-label text-brick-500 mb-2 block tracking-widest uppercase">
            Our Expertise
          </span>
          <h2 className="text-display-lg text-balance max-w-2xl">
            Everything you need for <span className="gradient-text-mixed">flawless production.</span>
          </h2>
        </motion.div>

        <div className="flex flex-col gap-16 md:gap-20">
          {serviceGroups.map((group) => (
            <div key={group.domain}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={fadeIn}
                className="mb-8"
              >
                <span className="text-xs font-mono uppercase tracking-widest text-brick-500 mb-2 block">
                  {group.domain}
                </span>
                <p className="text-body text-gray-400">{group.blurb}</p>
              </motion.div>

              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
              >
                {group.items.map((service) => {
                  const Icon = service.icon;
                  return (
                    <motion.div 
                      key={service.id} 
                      variants={fadeIn}
                      className="group relative h-full"
                    >
                      <div className={cn(
                        "relative h-full w-full rounded-2xl p-8 lg:p-10",
                        "bg-navy-950 border border-navy-800",
                        "transition-all duration-500 ease-out",
                        "group-hover:border-brick-600/50 group-hover:bg-navy-900 group-hover:-translate-y-2 group-hover:shadow-glow-subtle",
                        "overflow-hidden flex flex-col"
                      )}>
                        <div className="absolute top-0 right-0 w-32 h-32 bg-brick-600/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                        <div className="flex items-start justify-between mb-8">
                          <span className="text-4xl font-display font-light text-navy-700 transition-colors duration-500 group-hover:text-brick-500/30">
                            {service.id}
                          </span>
                          <div className="w-12 h-12 rounded-full bg-navy-800 border border-navy-700 flex items-center justify-center text-gray-400 transition-all duration-500 group-hover:bg-brick-600 group-hover:border-brick-500 group-hover:text-white group-hover:scale-110">
                            <Icon size={22} strokeWidth={1.5} />
                          </div>
                        </div>

                        <div className="mt-auto">
                          <h3 className="text-heading-md mb-3 text-white transition-colors duration-300 group-hover:text-brick-400">
                            {service.title}
                          </h3>
                          <p className="text-body-sm text-gray-400 leading-relaxed mb-6">
                            {service.description}
                          </p>
                        </div>

                        <div className="flex items-center gap-2 text-sm font-semibold text-brick-500 tracking-wide mt-auto opacity-0 translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                          <span>Learn more</span>
                          <ArrowRight size={16} />
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
