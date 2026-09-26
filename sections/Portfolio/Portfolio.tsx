"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Play, X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

/* -------------------------------------------------------------------------- */
/*  Data                                                                       */
/* -------------------------------------------------------------------------- */

type Medium = "Image" | "Video";

const portfolioItems: {
  id: number;
  title: string;
  category: string;
  medium: Medium;
  src: string;
  poster?: string;
}[] = [
  {
    id: 1,
    title: "Poolside Editorial",
    category: "Fashion",
    medium: "Image",
    src: "/assets/portfolio/poolside-fashion.jpg",
  },
  {
    id: 2,
    title: "Studio Glamour",
    category: "Beauty Retouch",
    medium: "Image",
    src: "/assets/portfolio/studio-glamour.jpg",
  },
  {
    id: 3,
    title: "Magazine Flatlay",
    category: "Product Stills",
    medium: "Image",
    src: "/assets/portfolio/magazine-flatlay.jpg",
  },
  {
    id: 4,
    title: "Birthday Moments",
    category: "Portrait",
    medium: "Image",
    src: "/assets/portfolio/birthday-portrait.jpg",
  },
  {
    id: 5,
    title: "Fitness Outdoors",
    category: "Lifestyle",
    medium: "Image",
    src: "/assets/portfolio/fitness-outdoor.jpg",
  },
  {
    id: 6,
    title: "Summer Lifestyle",
    category: "Lifestyle",
    medium: "Image",
    src: "/assets/portfolio/summer-lifestyle.jpg",
  },
  {
    id: 7,
    title: "Urban Street",
    category: "Street Photography",
    medium: "Image",
    src: "/assets/portfolio/urban-street.jpg",
  },
  {
    id: 8,
    title: "Portrait Series I",
    category: "Portrait",
    medium: "Image",
    src: "/assets/portfolio/portrait-dsc1.jpg",
  },
  {
    id: 9,
    title: "Portrait Series II",
    category: "Portrait",
    medium: "Image",
    src: "/assets/portfolio/portrait-dsc2.jpg",
  },
  {
    id: 10,
    title: "Portrait Series III",
    category: "Portrait",
    medium: "Image",
    src: "/assets/portfolio/portrait-dsc3.jpg",
  },
  {
    id: 11,
    title: "Model Editorial",
    category: "Editorial",
    medium: "Image",
    src: "/assets/portfolio/model-editorial.jpg",
  },
  {
    id: 12,
    title: "Kids Photography",
    category: "Portrait",
    medium: "Image",
    src: "/assets/portfolio/kids-photo1.jpg",
  },
  {
    id: 13,
    title: "Kids Photography II",
    category: "Portrait",
    medium: "Image",
    src: "/assets/portfolio/kids-photo2.jpg",
  },
  {
    id: 14,
    title: "Vietnam Lifestyle I",
    category: "Lifestyle",
    medium: "Image",
    src: "/assets/portfolio/vietnam-lifestyle1.jpg",
  },
  {
    id: 15,
    title: "Vietnam Lifestyle II",
    category: "Lifestyle",
    medium: "Image",
    src: "/assets/portfolio/vietnam-lifestyle2.jpg",
  },
  {
    id: 16,
    title: "Action Sports",
    category: "Sports",
    medium: "Image",
    src: "/assets/portfolio/longboard-action.jpg",
  },
  {
    id: 17,
    title: "Lifestyle Shoot",
    category: "Lifestyle",
    medium: "Image",
    src: "/assets/portfolio/lifestyle-hana.jpg",
  },
  {
    id: 18,
    title: "Portrait Shot",
    category: "Portrait",
    medium: "Image",
    src: "/assets/portfolio/portrait-mg.jpg",
  },
];

/* Split into 3 columns, duplicate for infinite loop */
const col1 = portfolioItems.filter((_, i) => i % 3 === 0);
const col2 = portfolioItems.filter((_, i) => i % 3 === 1);
const col3 = portfolioItems.filter((_, i) => i % 3 === 2);

const columns: { items: typeof portfolioItems; direction: "up" | "down" }[] = [
  { items: [...col1, ...col1], direction: "up" },
  { items: [...col2, ...col2], direction: "down" },
  { items: [...col3, ...col3], direction: "up" },
];

/* -------------------------------------------------------------------------- */
/*  Lightbox                                                                   */
/* -------------------------------------------------------------------------- */

function MediaLightbox({
  items,
  index,
  onClose,
  onPrev,
  onNext,
}: {
  items: typeof portfolioItems;
  index: number | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const item = index !== null ? items[index] : null;
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose, onPrev, onNext]);

  useEffect(() => {
    document.body.style.overflow = index !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [index]);

  useEffect(() => {
    if (item?.medium === "Video" && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  }, [index, item?.medium]);

  return (
    <AnimatePresence>
      {index !== null && item && (
        <motion.div
          key="backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[300] flex items-center justify-center"
          style={{ background: "rgba(3,10,18,0.93)", backdropFilter: "blur(14px)", WebkitBackdropFilter: "blur(14px)" }}
          onClick={onClose}
        >
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 16 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex flex-col items-center px-4"
            style={{ maxWidth: "90vw" }}
            onClick={(e) => e.stopPropagation()}
          >
            {item.medium === "Video" ? (
              <video
                ref={videoRef}
                key={item.src}
                src={item.src}
                poster={item.poster}
                controls
                playsInline
                className="rounded-2xl shadow-2xl bg-black"
                style={{
                  maxWidth: "min(88vw, 1100px)",
                  maxHeight: "72vh",
                  width: "min(88vw, 1100px)",
                  aspectRatio: "16/9",
                  objectFit: "contain",
                }}
              />
            ) : (
              <div
                key={item.src}
                className="rounded-2xl shadow-2xl overflow-hidden relative"
                style={{
                  width: "min(88vw, 1100px)",
                  maxHeight: "72vh",
                  aspectRatio: "4/3",
                }}
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  sizes="min(88vw, 1100px)"
                  className="object-contain"
                  quality={90}
                />
              </div>
            )}

            <div className="mt-5 flex items-center gap-3 flex-wrap justify-center">
              <span
                className="px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider border"
                style={{
                  background: "rgba(178,58,46,0.15)",
                  borderColor: "rgba(178,58,46,0.4)",
                  color: "#d96558",
                }}
              >
                {item.medium}
              </span>
              <span className="text-gray-400 text-sm">{item.category}</span>
              <span className="text-white font-semibold text-base">{item.title}</span>
            </div>

            <p className="mt-2 text-xs font-mono" style={{ color: "#52473f" }}>
              {index + 1} / {items.length}
            </p>

            <button
              onClick={onClose}
              aria-label="Close lightbox"
              className="absolute flex items-center justify-center rounded-full transition-all duration-200 hover:scale-110"
              style={{
                top: "-1rem",
                right: "-1rem",
                width: "2.5rem",
                height: "2.5rem",
                background: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.2)",
                color: "#fff",
              }}
            >
              <X size={18} />
            </button>
          </motion.div>

          <button
            onClick={(e) => { e.stopPropagation(); onPrev(); }}
            aria-label="Previous item"
            className="fixed left-4 top-1/2 -translate-y-1/2 flex items-center justify-center rounded-full transition-all duration-200 hover:scale-110"
            style={{
              width: "3rem",
              height: "3rem",
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.15)",
              color: "#fff",
            }}
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); onNext(); }}
            aria-label="Next item"
            className="fixed right-4 top-1/2 -translate-y-1/2 flex items-center justify-center rounded-full transition-all duration-200 hover:scale-110"
            style={{
              width: "3rem",
              height: "3rem",
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.15)",
              color: "#fff",
            }}
          >
            <ChevronRight size={24} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* -------------------------------------------------------------------------- */
/*  Card                                                                       */
/* -------------------------------------------------------------------------- */

function PortfolioCard({
  item,
  onClick,
}: {
  item: (typeof portfolioItems)[number];
  onClick: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className="relative w-full rounded-2xl overflow-hidden group cursor-pointer bg-navy-900 border border-navy-800 flex-shrink-0"
      style={{ height: "340px" }}
    >
      {item.medium === "Video" ? (
        <video
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
          src={item.src}
          poster={item.poster}
          muted
          loop
          playsInline
          preload="none"
          onMouseEnter={(e) => (e.currentTarget as HTMLVideoElement).play()}
          onMouseLeave={(e) => (e.currentTarget as HTMLVideoElement).pause()}
        />
      ) : (
        <Image
          src={item.src}
          alt={item.title}
          fill
          sizes="(max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
          quality={75}
        />
      )}

      <div className="absolute inset-0 bg-navy-950/20 group-hover:bg-navy-950/55 transition-colors duration-500" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/20 to-transparent opacity-80" />

      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-90 group-hover:scale-100">
        <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 text-white shadow-xl">
          {item.medium === "Video"
            ? <Play size={22} className="ml-1 fill-white" />
            : <ZoomIn size={20} />
          }
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full p-5 translate-y-3 group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]">
        <span className="text-xs font-mono text-brick-500 mb-1.5 block uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-75">
          {item.medium} {String.fromCharCode(183)} {item.category}
        </span>
        <h3 className="text-heading-sm text-white drop-shadow-md">{item.title}</h3>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Section                                                                    */
/* -------------------------------------------------------------------------- */

export default function Portfolio() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handlePrev = useCallback(() => {
    setSelectedIndex((i) =>
      i === null ? null : (i - 1 + portfolioItems.length) % portfolioItems.length
    );
  }, []);

  const handleNext = useCallback(() => {
    setSelectedIndex((i) =>
      i === null ? null : (i + 1) % portfolioItems.length
    );
  }, []);

  return (
    <section className="section bg-navy-950 relative overflow-hidden" id="portfolio">
      <div className="relative z-10">

        <div className="container-site mb-12">
          <div className="max-w-xl">
            <span className="text-label text-brick-500 mb-2 block tracking-widest uppercase">
              Selected Works
            </span>
            <h2 className="text-display-lg text-balance">
              Our creative <span className="gradient-text-accent">portfolio.</span>
            </h2>
          </div>
        </div>

        <div
          className="relative w-full overflow-hidden"
          style={{ height: "780px" }}
        >
          <div
            className="pointer-events-none absolute inset-x-0 top-0 z-20"
            style={{
              height: "120px",
              background: "linear-gradient(to bottom, var(--color-navy-950), transparent)",
            }}
          />
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 z-20"
            style={{
              height: "120px",
              background: "linear-gradient(to top, var(--color-navy-950), transparent)",
            }}
          />

          <div className="container-site h-full">
            <div
              className="grid h-full"
              style={{ gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem" }}
            >
              {columns.map((col, colIdx) => (
                <div key={colIdx} className="overflow-hidden">
                  <div className={`marquee-track marquee-track--${col.direction}`}>
                    {col.items.map((item, itemIdx) => (
                      <PortfolioCard
                        key={`${item.id}-${itemIdx}`}
                        item={item}
                        onClick={() =>
                          setSelectedIndex(portfolioItems.findIndex((p) => p.id === item.id))
                        }
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      <MediaLightbox
        items={portfolioItems}
        index={selectedIndex}
        onClose={() => setSelectedIndex(null)}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </section>
  );
}
