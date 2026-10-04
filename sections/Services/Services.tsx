"use client";

import { useState, useId, useRef, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import {
  ArrowRight,
  Video,
  Layers,
  Image as ImageIcon,
  Palette,
  Sparkle,
  Code2,
  Globe,
  Monitor,
  Play,
  X,
} from "lucide-react";
import { cn } from "@/lib/cn";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";

/* -------------------------------------------------------------------------- */
/*  Data                                                                       */
/* -------------------------------------------------------------------------- */

interface ComparisonItem {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  beforeImage: string;
  afterImage: string;
}

const comparisonData: ComparisonItem[] = [
  {
    id: 1,
    title: "Background Masking",
    subtitle: "Edge & Hair Isolation",
    description: "Precise cut-out masking that isolates subjects with sub-pixel and hair-level accuracy for clean, seamless composite integration against any studio or lifestyle backdrop.",
    highlights: ["Flyaway hair retention", "Zero color fringing", "Complex edge cutouts"],
    beforeImage: "/assets/beforeafter/masking/before.jpg",
    afterImage: "/assets/beforeafter/masking/after.jpg",
  },
  {
    id: 2,
    title: "Shadow & Reflection",
    subtitle: "Realistic Lighting & Grounding",
    description: "Authentic contact shadow generation, soft ambient drop shadows, and reflection mapping that convincingly ground products into their environment for commercial catalogs.",
    highlights: ["Cast & contact shadows", "Soft light falloff", "Realistic reflections"],
    beforeImage: "/assets/beforeafter/shadow/before.jpg",
    afterImage: "/assets/beforeafter/shadow/after.jpg",
  },
  {
    id: 3,
    title: "Jewelry Retouch",
    subtitle: "Metal, Gem & Sparkle",
    description: "High-end jewelry retouching that cleans metal surfaces, enhances gemstone brilliance, and removes dust and scratches for luxury catalog-ready results.",
    highlights: ["Metal polish & reflections", "Gemstone clarity", "Dust & scratch removal"],
    beforeImage: "/assets/beforeafter/jewelry/before.jpg",
    afterImage: "/assets/beforeafter/jewelry/after.jpg",
  },
  {
    id: 4,
    title: "Product Retouch",
    subtitle: "E-Commerce Ready",
    description: "Clean, color-accurate product retouching with background cleanup, label correction, and lighting balance for marketplaces and online stores.",
    highlights: ["Color correction", "Background cleanup", "Marketplace-ready output"],
    beforeImage: "/assets/beforeafter/product/before.jpg",
    afterImage: "/assets/beforeafter/product/after.jpg",
  },
  {
    id: 5,
    title: "Beauty Retouch",
    subtitle: "Editorial & Skin Refinement",
    description: "Natural skin refinement, tone harmonization, and subtle contouring — delivering magazine-level editorial polish while preserving authentic organic skin pores and texture.",
    highlights: ["Frequency separation", "Dodge & burn sculpting", "Natural skin texture"],
    beforeImage: "/assets/beforeafter/retouch/before.jpg",
    afterImage: "/assets/beforeafter/retouch/after.jpg",
  },
  {
    id: 6,
    title: "Symmetrical Retouch",
    subtitle: "Portrait & Feature Balance",
    description: "Subtle anatomical symmetry adjustments and facial balance refinements that elevate portrait photography with elegance and poise while preserving natural likeness.",
    highlights: ["Facial contour balance", "Expression harmony", "Subtle alignment"],
    beforeImage: "/assets/beforeafter/symmetrical/before.jpg",
    afterImage: "/assets/beforeafter/symmetrical/after.jpg",
  },
  {
    id: 7,
    title: "Ghost Mannequin",
    subtitle: "Apparel & E-Commerce",
    description: "Professional ghost mannequin technique giving garments a realistic 3D shape without a visible model — perfect for high-conversion apparel storefronts, brand catalogs, and lookbooks.",
    highlights: ["3D hollow volume", "Neck joint restoration", "Wrinkle & symmetry control"],
    beforeImage: "/assets/beforeafter/ghost-mannequin/before.jpg",
    afterImage: "/assets/beforeafter/ghost-mannequin/after.jpg",
  },
];

interface VideoProject {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  duration: string;
  videoSrc: string;
  thumbnail: string;
}

const videoProjects: VideoProject[] = [
  {
    id: "01",
    title: "Human Behavior",
    subtitle: "A YC-backed AI platform that decodes user behavior from session replays.",
    category: "Brand Video",
    duration: "01:24",
    videoSrc: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "02",
    title: "Neon Echoes",
    subtitle: "High-octane commercial brand cut engineered for the future of urban electric mobility.",
    category: "Commercial Cut",
    duration: "01:45",
    videoSrc: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
    thumbnail: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "03",
    title: "Quantum Pulse",
    subtitle: "3D visual choreography and kinetic typography designed for maximum viewer retention.",
    category: "Motion Graphics",
    duration: "00:52",
    videoSrc: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    thumbnail: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&q=80&w=1200",
  },
];

type ServiceDomain = "Image" | "Video" | "Web";

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: typeof Video;
}

interface ServiceGroup {
  domain: ServiceDomain;
  label: string;
  tagline: string;
  blurb: string;
  icon: typeof ImageIcon;
  items: ServiceItem[];
}

const serviceGroups: ServiceGroup[] = [
  {
    domain: "Image",
    label: "Image Editing",
    tagline: "Before & After Transformations",
    blurb: "Drag the slider to reveal the painstaking detail and technical expertise that goes into every frame we deliver.",
    icon: ImageIcon,
    items: [],
  },
  {
    domain: "Video",
    label: "Video Editing",
    tagline: "Motion & Post-Production",
    blurb: "Cinematic cuts, dynamic motion, and filmic color grading for every frame.",
    icon: Video,
    items: [],
  },
  {
    domain: "Web",
    label: "Web Development",
    tagline: "Full-Stack & Digital Platforms",
    blurb: "High-performance, modern websites and applications engineered for speed and conversion.",
    icon: Code2,
    items: [
      {
        id: "01",
        title: "Custom Web Applications",
        description: "Modern, high-performance web applications built with Next.js, React, and scalable architectures.",
        icon: Code2,
      },
      {
        id: "02",
        title: "Landing Pages & Funnels",
        description: "Immersive, animation-rich landing pages tailored to engage visitors and drive maximum conversions.",
        icon: Globe,
      },
      {
        id: "03",
        title: "E-Commerce & Digital Portals",
        description: "Bespoke digital storefronts and client portals with fluid interactivity and seamless user journeys.",
        icon: Monitor,
      },
    ],
  },
];

/* -------------------------------------------------------------------------- */
/*  Animation Variants                                                         */
/* -------------------------------------------------------------------------- */

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 24 },
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
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  },
  exit: {
    opacity: 0,
    y: -12,
    transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] }
  }
};

/* -------------------------------------------------------------------------- */
/*  Component                                                                  */
/* -------------------------------------------------------------------------- */

export default function Services() {
  const [activeDomain, setActiveDomain] = useState<ServiceDomain>("Image");
  const [selectedVideo, setSelectedVideo] = useState<VideoProject | null>(null);
  const videoModalRef = useRef<HTMLVideoElement>(null);
  const tabGroupId = useId();

  const activeGroup = serviceGroups.find((g) => g.domain === activeDomain) ?? serviceGroups[0];

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedVideo(null);
    };
    if (selectedVideo) {
      window.addEventListener("keydown", handler);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [selectedVideo]);

  useEffect(() => {
    if (selectedVideo && videoModalRef.current) {
      videoModalRef.current.currentTime = 0;
      videoModalRef.current.play().catch(() => {});
    }
  }, [selectedVideo]);

  return (
    <section className="section bg-navy-900 relative overflow-hidden" id="services">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brick-600/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-navy-700/20 rounded-full blur-[140px] pointer-events-none translate-y-1/3 -translate-x-1/4" />
      
      <div className="container-site relative z-10">
        
        {/* Section Header - Middle aligned */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="mb-8 md:mb-10 max-w-3xl mx-auto text-center flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-800/80 border border-navy-700/80 text-brick-400 text-xs font-mono uppercase tracking-widest mb-3">
            <Sparkle size={12} className="fill-brick-400" />
            <span>Our Expertise</span>
          </div>
          <h2 className="text-display-lg text-white text-balance">
            Everything you need for <span className="gradient-text-mixed">flawless production.</span>
          </h2>
        </motion.div>

        {/* Tabs Navigation Bar - Middle aligned */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="flex justify-center mb-8"
        >
          <div
            role="tablist"
            aria-label="Service domains"
            className="inline-flex flex-wrap justify-center p-1.5 rounded-2xl sm:rounded-full bg-navy-950 border border-navy-800 backdrop-blur-md shadow-2xl relative gap-1"
          >
            {serviceGroups.map((group) => {
              const isActive = activeDomain === group.domain;
              const Icon = group.icon;
              const count =
                group.domain === "Image"
                  ? comparisonData.length
                  : group.domain === "Video"
                  ? videoProjects.length
                  : group.items.length;
              return (
                <button
                  key={group.domain}
                  role="tab"
                  id={`tab-${tabGroupId}-${group.domain.toLowerCase()}`}
                  aria-selected={isActive}
                  aria-controls={`panel-${tabGroupId}-${group.domain.toLowerCase()}`}
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => setActiveDomain(group.domain)}
                  className={cn(
                    "relative px-5 sm:px-6 py-2.5 rounded-xl sm:rounded-full text-sm font-medium transition-colors duration-300 flex items-center gap-2.5 outline-none focus-visible:ring-2 focus-visible:ring-brick-500 cursor-pointer select-none",
                    isActive ? "text-white font-semibold" : "text-gray-400 hover:text-white"
                  )}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeServiceTabPill"
                      className="absolute inset-0 rounded-xl sm:rounded-full bg-gradient-to-r from-brick-600 to-brick-500 shadow-[0_0_24px_rgba(255,49,49,0.4)]"
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    />
                  )}
                  <Icon size={16} className={cn("relative z-10 transition-transform duration-300", isActive && "scale-110")} />
                  <span className="relative z-10 whitespace-nowrap">{group.label}</span>
                  <span
                    className={cn(
                      "relative z-10 text-xs px-2 py-0.5 rounded-full transition-colors font-mono",
                      isActive ? "bg-white/20 text-white font-semibold" : "bg-navy-800 text-gray-400"
                    )}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Tab Context Subnav / Meta Bar - Middle aligned */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pb-6 mb-10 border-b border-navy-800/60 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-brick-500 animate-pulse shrink-0" />
            <span className="text-xs font-mono uppercase tracking-widest text-brick-400 font-medium whitespace-nowrap">
              {activeGroup.label}
            </span>
            <span className="text-navy-700 hidden sm:inline">•</span>
          </div>
          <p className="text-sm text-gray-300">
            {activeGroup.blurb}
          </p>
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeDomain}
            role="tabpanel"
            id={`panel-${tabGroupId}-${activeDomain.toLowerCase()}`}
            aria-labelledby={`tab-${tabGroupId}-${activeDomain.toLowerCase()}`}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={staggerContainer}
          >
            {activeDomain === "Image" ? (
              /* Image Tab: 1 in a row cards with alternating placement */
              <div className="flex flex-col gap-10 md:gap-14">
                {comparisonData.map((item, index) => {
                  const isEven = index % 2 === 0;
                  return (
                    <motion.div
                      key={item.id}
                      variants={fadeIn}
                      className="group relative rounded-3xl bg-navy-950 border border-navy-800/90 p-6 sm:p-8 lg:p-10 overflow-hidden hover:border-brick-600/40 transition-all duration-500 shadow-2xl"
                    >
                      <div className="absolute top-0 right-0 w-80 h-80 bg-brick-600/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
                        {/* Before/After Slider Side */}
                        <div className={cn("w-full lg:col-span-7", isEven ? "lg:order-1" : "lg:order-2")}>
                          <div className="rounded-2xl overflow-hidden border border-navy-800 shadow-xl bg-navy-900">
                            <BeforeAfterSlider
                              beforeImage={item.beforeImage}
                              afterImage={item.afterImage}
                              showBadges={false}
                            />
                          </div>
                        </div>

                        {/* Description Side with Title and Subtitle */}
                        <div className={cn("w-full lg:col-span-5 flex flex-col justify-center", isEven ? "lg:order-2" : "lg:order-1")}>
                          <div className="flex items-center gap-3 mb-4">
                            <span className="text-xs font-mono font-bold text-brick-500 px-3 py-1 rounded-full bg-brick-600/10 border border-brick-600/20">
                              {String(item.id).padStart(2, "0")}
                            </span>
                            <span className="text-xs font-mono uppercase tracking-widest text-brick-400 font-medium">
                              {item.subtitle}
                            </span>
                          </div>

                          <h3 className="text-display-md text-white mb-3 group-hover:text-brick-400 transition-colors duration-300">
                            {item.title}
                          </h3>

                          <p className="text-body-sm text-gray-300 leading-relaxed mb-6">
                            {item.description}
                          </p>

                          <div className="flex flex-wrap gap-2 mb-8">
                            {item.highlights.map((highlight) => (
                              <span
                                key={highlight}
                                className="text-xs px-3 py-1 rounded-full bg-navy-900 border border-navy-800 text-gray-400 font-mono"
                              >
                                {highlight}
                              </span>
                            ))}
                          </div>

                          <a
                            href="#contact"
                            className="inline-flex items-center gap-2 text-sm font-semibold text-brick-500 hover:text-brick-400 tracking-wide transition-colors duration-300 self-start group/link"
                          >
                            <span>Inquire about this style</span>
                            <ArrowRight size={16} className="transition-transform duration-300 group-hover/link:translate-x-1" />
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            ) : activeDomain === "Video" ? (
              /* Video Tab: Thumbnail + Title + Subtitle */
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                {videoProjects.map((video) => (
                  <motion.div
                    key={video.id}
                    variants={fadeIn}
                    className="group flex flex-col cursor-pointer"
                    onClick={() => setSelectedVideo(video)}
                  >
                    {/* Thumbnail */}
                    <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-navy-950 border border-navy-800 transition-all duration-500 ease-out group-hover:border-brick-600/50 group-hover:shadow-[0_0_30px_rgba(255,49,49,0.2)] group-hover:-translate-y-1.5">
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-navy-950/25 group-hover:bg-navy-950/5 transition-colors duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-transparent to-transparent opacity-70" />

                      {/* Center Play Button Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/25 flex items-center justify-center text-white transition-all duration-300 ease-out group-hover:scale-110 group-hover:bg-brick-600 group-hover:border-brick-500 shadow-xl">
                          <Play size={22} className="ml-1 fill-white" />
                        </div>
                      </div>

                      {/* Duration Tag */}
                      <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-md bg-navy-950/85 backdrop-blur-md border border-white/10 text-[11px] font-mono text-gray-300">
                        {video.duration}
                      </div>
                    </div>

                    {/* Title and Subtitle underneath */}
                    <div className="mt-4 flex flex-col">
                      <div className="flex items-center justify-between gap-3 mb-1.5">
                        <h3 className="text-heading-md text-white transition-colors duration-300 group-hover:text-brick-400">
                          {video.title}
                        </h3>
                        <span className="text-xs font-mono uppercase tracking-wider text-brick-400 font-medium">
                          {video.category}
                        </span>
                      </div>
                      <p className="text-body-sm text-gray-400 leading-relaxed">
                        {video.subtitle}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              /* Web Tab: Service Offering Cards */
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {activeGroup.items.map((service) => {
                  const Icon = service.icon;
                  return (
                    <motion.div 
                      key={service.id} 
                      variants={fadeIn}
                      className="group relative h-full"
                    >
                      <a
                        href="#contact"
                        className={cn(
                          "relative h-full w-full rounded-2xl p-8 lg:p-10",
                          "bg-navy-950 border border-navy-800",
                          "transition-all duration-500 ease-out",
                          "group-hover:border-brick-600/50 group-hover:bg-navy-900 group-hover:-translate-y-2 group-hover:shadow-glow-subtle",
                          "overflow-hidden flex flex-col block"
                        )}
                      >
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
                          <span>Inquire now</span>
                          <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                        </div>
                      </a>
                    </motion.div>
                  );
                })}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
        
      </div>

      {/* Big Video Lightbox Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            key="video-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[300] flex items-center justify-center px-4"
            style={{
              background: "rgba(3,10,18,0.93)",
              backdropFilter: "blur(14px)",
              WebkitBackdropFilter: "blur(14px)",
            }}
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              key={selectedVideo.id}
              initial={{ opacity: 0, scale: 0.92, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 16 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex flex-col items-center w-full"
              style={{ maxWidth: "min(92vw, 1100px)" }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl bg-black border border-navy-800">
                <video
                  ref={videoModalRef}
                  src={selectedVideo.videoSrc}
                  poster={selectedVideo.thumbnail}
                  controls
                  autoPlay
                  playsInline
                  className="w-full aspect-video object-contain bg-black"
                />
              </div>

              <div className="mt-5 flex items-center gap-3 flex-wrap justify-center text-center">
                <span className="px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider border bg-brick-600/15 border-brick-600/40 text-brick-400">
                  {selectedVideo.category}
                </span>
                <span className="text-white font-semibold text-base">{selectedVideo.title}</span>
                <span className="text-gray-500 text-sm hidden sm:inline">•</span>
                <span className="text-gray-400 text-sm">{selectedVideo.subtitle}</span>
              </div>

              <button
                onClick={() => setSelectedVideo(null)}
                aria-label="Close video player"
                className="absolute -top-12 right-0 md:-right-4 md:-top-12 w-10 h-10 rounded-full bg-navy-800/90 border border-navy-700 flex items-center justify-center text-gray-400 hover:text-white hover:bg-brick-600 transition-colors cursor-pointer"
              >
                <X size={20} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
