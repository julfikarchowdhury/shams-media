"use client";

import { motion, Variants } from "framer-motion";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";

/* -------------------------------------------------------------------------- */
/*  Data                                                                       */
/* -------------------------------------------------------------------------- */

const comparisonData = [
  {
    id: 1,
    title: "Product Photo Cleanup",
    description: "Clean backgrounds, color correction, and polish that make e-commerce stills shelf-ready.",
    beforeImage: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=2000&sat=-80&contrast=-40",
    afterImage: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=2000",
    beforeLabel: "RAW STILL",
    afterLabel: "RETOUCHED",
  },
  {
    id: 2,
    title: "Beauty Retouch",
    description: "Natural skin refinement and tonal balance — editorial polish without looking plastic.",
    beforeImage: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=2000&sat=-60&contrast=-30",
    afterImage: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=2000",
    beforeLabel: "BEFORE",
    afterLabel: "AFTER",
  },
  {
    id: 3,
    title: "Cinematic Color Grading",
    description: "Transforming flat, LOG footage into a vibrant, moody masterpiece.",
    beforeImage: "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&q=80&w=2000&sat=-100&contrast=-50",
    afterImage: "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&q=80&w=2000",
    beforeLabel: "RAW LOG",
    afterLabel: "GRADED",
  },
  {
    id: 4,
    title: "VFX & Compositing",
    description: "Seamlessly integrating 3D elements and removing unwanted background objects.",
    beforeImage: "https://images.unsplash.com/photo-1551244072-5d12893278ab?auto=format&fit=crop&q=80&w=2000&sat=-50",
    afterImage: "https://images.unsplash.com/photo-1551244072-5d12893278ab?auto=format&fit=crop&q=80&w=2000&sat=50",
    beforeLabel: "BEFORE VFX",
    afterLabel: "AFTER VFX",
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
    transition: { staggerChildren: 0.2, delayChildren: 0.2 }
  }
};

/* -------------------------------------------------------------------------- */
/*  Component                                                                  */
/* -------------------------------------------------------------------------- */

export default function BeforeAfterSection() {
  return (
    <section className="section bg-background relative overflow-hidden" id="transformations">
      <div className="container-site relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="mb-16 md:mb-20 text-center max-w-3xl mx-auto"
        >
          <span className="text-label text-brick-500 mb-2 block tracking-widest uppercase">
            The Transformation
          </span>
          <h2 className="text-display-lg text-balance mb-6">
            Seeing is <span className="gradient-text-white">believing.</span>
          </h2>
          <p className="text-body-lg text-gray-400">
            Drag the slider to reveal the painstaking detail and technical expertise that goes into every frame we deliver.
          </p>
        </motion.div>

        {/* Sliders Container */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="flex flex-col gap-16 md:gap-24"
        >
          {comparisonData.map((item) => (
            <motion.div key={item.id} variants={fadeIn} className="flex flex-col">
              <div className="mb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                  <h3 className="text-heading-md text-white mb-2">{item.title}</h3>
                  <p className="text-body-sm text-gray-400 max-w-lg">{item.description}</p>
                </div>
              </div>
              
              <BeforeAfterSlider 
                beforeImage={item.beforeImage}
                afterImage={item.afterImage}
                beforeLabel={item.beforeLabel}
                afterLabel={item.afterLabel}
              />
            </motion.div>
          ))}
        </motion.div>
        
      </div>
    </section>
  );
}
