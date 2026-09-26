"use client";

import { motion, Variants } from "framer-motion";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";

/* -------------------------------------------------------------------------- */
/*  Data                                                                       */
/* -------------------------------------------------------------------------- */

const comparisonData = [
  {
    id: 1,
    title: "Ghost Mannequin",
    description: "Professional ghost mannequin technique giving garments a 3D shape without a model — perfect for e-commerce apparel.",
    beforeImage: "/assets/beforeafter/ghost-mannequin/before.jpg",
    afterImage: "/assets/beforeafter/ghost-mannequin/after.jpg",
    beforeLabel: "BEFORE",
    afterLabel: "AFTER",
  },
  {
    id: 2,
    title: "Background Masking",
    description: "Precise cut-out masking that isolates subjects with hair-level accuracy for clean, professional results.",
    beforeImage: "/assets/beforeafter/masking/before.jpg",
    afterImage: "/assets/beforeafter/masking/after.jpg",
    beforeLabel: "BEFORE",
    afterLabel: "AFTER",
  },
  {
    id: 3,
    title: "Beauty Retouch",
    description: "Natural skin refinement and tonal balance — editorial polish without looking plastic.",
    beforeImage: "/assets/beforeafter/retouch/before.jpg",
    afterImage: "/assets/beforeafter/retouch/after.jpg",
    beforeLabel: "BEFORE",
    afterLabel: "AFTER",
  },
  {
    id: 4,
    title: "Symmetrical Retouch",
    description: "Subtle symmetry corrections and refinements that bring balance and harmony to portrait photography.",
    beforeImage: "/assets/beforeafter/symmetrical/before.jpg",
    afterImage: "/assets/beforeafter/symmetrical/after.jpg",
    beforeLabel: "BEFORE",
    afterLabel: "AFTER",
  },
  {
    id: 5,
    title: "Shadow & Reflection",
    description: "Natural shadow and reflection creation that grounds products convincingly in their environment.",
    beforeImage: "/assets/beforeafter/shadow/before.jpg",
    afterImage: "/assets/beforeafter/shadow/after.jpg",
    beforeLabel: "BEFORE",
    afterLabel: "AFTER",
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
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-14"
        >
          {comparisonData.map((item) => (
            <motion.div key={item.id} variants={fadeIn} className="flex flex-col">
              {/* Card header */}
              <div className="mb-5 flex items-start gap-5">
                {/* Accent line + number */}
                <div className="flex flex-col items-center gap-2 pt-1 flex-shrink-0">
                  <span
                    className="text-xs font-mono font-bold"
                    style={{ color: "rgba(178,58,46,0.7)", letterSpacing: "0.05em" }}
                  >
                    {String(item.id).padStart(2, "0")}
                  </span>
                  <div
                    className="w-px flex-1"
                    style={{
                      minHeight: "40px",
                      background: "linear-gradient(to bottom, rgba(178,58,46,0.6), transparent)",
                    }}
                  />
                </div>
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
