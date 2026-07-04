"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { cn } from "@/lib/cn";

/* -------------------------------------------------------------------------- */
/*  Mock testimonial data                                                     */
/* -------------------------------------------------------------------------- */

const testimonials = [
  {
    id: 1,
    name: "Ava Martinez",
    company: "Lumina Studios",
    photo: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&q=80&w=200&h=200",
    rating: 5,
    feedback: "The team transformed our footage into a visual masterpiece. Their attention to detail is unmatched.",
  },
  {
    id: 2,
    name: "Liam Chen",
    company: "Pixel Pulse",
    photo: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&q=80&w=200&h=200",
    rating: 4,
    feedback: "Professional, fast, and the final cut exceeded our expectations. Highly recommend!",
  },
  {
    id: 3,
    name: "Sofia Rossi",
    company: "Vivid Vibes",
    photo: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=200&h=200",
    rating: 5,
    feedback: "Their creative vision gave our brand a fresh, cinematic voice. A true partnership.",
  },
];

/* -------------------------------------------------------------------------- */
/*  Animation variants                                                        */
/* -------------------------------------------------------------------------- */

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

/* -------------------------------------------------------------------------- */
/*  Component                                                                 */
/* -------------------------------------------------------------------------- */

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const slideCount = testimonials.length;

  // Auto‑advance carousel every 6 seconds
  useEffect(() => {
    const startAutoPlay = () => {
      timeoutRef.current = setTimeout(() => {
        setCurrent((prev) => (prev + 1) % slideCount);
      }, 6000);
    };
    startAutoPlay();
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [current, slideCount]);

  const goPrev = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setCurrent((prev) => (prev - 1 + slideCount) % slideCount);
  };

  const goNext = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setCurrent((prev) => (prev + 1) % slideCount);
  };

  return (
    <section className="section bg-navy-950 relative overflow-hidden" id="testimonials">
      <div className="container-site relative z-10 py-16">
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center mb-12"
        >
          <span className="text-label text-brick-500 uppercase tracking-wider block mb-2">
            Hear From Our Clients
          </span>
          <h2 className="text-display-lg text-balance text-white">
            Real stories, real <span className="gradient-text-accent">impact</span>
          </h2>
        </motion.div>

        {/* Carousel Wrapper */}
        <div className="relative flex items-center justify-center">
          {/* Prev Arrow */}
          <button
            onClick={goPrev}
            aria-label="Previous testimonial"
            className="absolute left-0 -translate-x-1/2 bg-navy-800/60 backdrop-blur-md rounded-full p-2 hover:bg-navy-700 transition-colors"
          >
            <ChevronLeft className="text-white w-6 h-6" />
          </button>

          {/* Slides */}
          <div className="w-full overflow-hidden max-w-4xl">
            <motion.div
              className="flex"
              animate={{ x: `-${current * 100}%` }}
              transition={{ type: "spring", stiffness: 80, damping: 20 }}
            >
              {testimonials.map((t) => (
                <motion.div
                  key={t.id}
                  variants={cardVariants}
                  className={cn(
                    "flex-shrink-0 w-full p-4",
                    "flex items-center justify-center"
                  )}
                >
                  {/* Glass Card */}
                  <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 max-w-md w-full text-center shadow-lg">
                    <img
                      src={t.photo}
                      alt={t.name}
                      className="mx-auto mb-4 w-20 h-20 rounded-full object-cover border-2 border-white/30"
                    />
                    <p className="text-body-lg text-gray-200 italic mb-4">"{t.feedback}"</p>
                    <div className="flex items-center justify-center mb-2 space-x-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={cn(
                            "w-5 h-5",
                            i < t.rating ? "text-brick-500 fill-current" : "text-gray-600"
                          )}
                        />
                      ))}
                    </div>
                    <p className="text-heading-md text-white font-medium">{t.name}</p>
                    <p className="text-label text-gray-400">{t.company}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Next Arrow */}
          <button
            onClick={goNext}
            aria-label="Next testimonial"
            className="absolute right-0 translate-x-1/2 bg-navy-800/60 backdrop-blur-md rounded-full p-2 hover:bg-navy-700 transition-colors"
          >
            <ChevronRight className="text-white w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
