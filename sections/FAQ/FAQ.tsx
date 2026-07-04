"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/cn";

/* -------------------------------------------------------------------------- */
/*  Data                                                                       */
/* -------------------------------------------------------------------------- */

const faqs = [
  {
    id: 1,
    question: "What is your typical turnaround time?",
    answer:
      "Our standard turnaround is 3–5 business days for most projects. For short-form edits (Reels, TikToks, YouTube Shorts) we typically deliver within 24–48 hours. Rush delivery within 12–24 hours is available for an additional fee. We always confirm a clear deadline before starting any project.",
  },
  {
    id: 2,
    question: "How many revisions are included?",
    answer:
      "Every package includes at least 2 rounds of revisions at no extra cost. We work iteratively with you to make sure the final cut matches your vision perfectly. Additional revision rounds beyond the included limit are billed at a flat per-round rate, which we'll outline in your project agreement.",
  },
  {
    id: 3,
    question: "What file formats do you accept and deliver?",
    answer:
      "We accept all major raw and compressed formats — including ProRes, BRAW, R3D, H.264, H.265, and LOG footage from any camera system. Deliverables are exported in any format you need: 4K H.264/H.265 for social, ProRes 422 HQ for broadcast, or custom specs. We also accept and deliver via Google Drive, Dropbox, WeTransfer, or Frame.io.",
  },
  {
    id: 4,
    question: "How does pricing work?",
    answer:
      "Our pricing is project-based and depends on the video length, complexity, and turnaround time. We offer flexible plans for one-off projects as well as monthly retainers for recurring work. After a brief discovery call, we'll send a detailed quote with no hidden fees. Contact us to get a custom estimate tailored to your needs.",
  },
  {
    id: 5,
    question: "How do we collaborate during the project?",
    answer:
      "We use Frame.io for timestamped feedback directly on the video timeline, making revision communication fast and precise. You'll receive a client portal link for each project where you can leave comments, approve cuts, and download deliverables. We're also available on Slack, email, or WhatsApp — whichever you prefer.",
  },
  {
    id: 6,
    question: "Do you work with teams or just individual creators?",
    answer:
      "Both! We work with solo content creators, marketing teams, production companies, and agencies of all sizes. For larger teams we offer dedicated account management, priority queues, and volume-based pricing. Just let us know your scale and we'll tailor a workflow that fits.",
  },
];

/* -------------------------------------------------------------------------- */
/*  Animation variants                                                         */
/* -------------------------------------------------------------------------- */

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const listVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.15 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
};

const answerVariants: Variants = {
  collapsed: { height: 0, opacity: 0 },
  open: {
    height: "auto",
    opacity: 1,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
};

/* -------------------------------------------------------------------------- */
/*  Single Accordion Item                                                      */
/* -------------------------------------------------------------------------- */

function FaqItem({
  faq,
  isOpen,
  onToggle,
}: {
  faq: (typeof faqs)[0];
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div
      variants={itemVariants}
      className={cn(
        "rounded-xl border transition-colors duration-300 overflow-hidden",
        isOpen
          ? "bg-navy-900 border-brick-700/50"
          : "bg-navy-900/60 border-navy-800 hover:border-navy-700"
      )}
    >
      {/* Question row */}
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left group"
      >
        <span
          className={cn(
            "text-base md:text-lg font-medium transition-colors duration-200",
            isOpen ? "text-white" : "text-gray-300 group-hover:text-white"
          )}
        >
          {faq.question}
        </span>

        {/* Icon toggle */}
        <span
          className={cn(
            "flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300",
            isOpen
              ? "bg-brick-600 text-white"
              : "bg-navy-800 text-gray-400 group-hover:bg-navy-700"
          )}
        >
          <AnimatePresence mode="wait" initial={false}>
            {isOpen ? (
              <motion.span
                key="minus"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Minus size={16} />
              </motion.span>
            ) : (
              <motion.span
                key="plus"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Plus size={16} />
              </motion.span>
            )}
          </AnimatePresence>
        </span>
      </button>

      {/* Answer panel */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="answer"
            variants={answerVariants}
            initial="collapsed"
            animate="open"
            exit="collapsed"
            style={{ overflow: "hidden" }}
          >
            <p className="px-6 pb-5 text-gray-400 text-sm md:text-base leading-relaxed">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Section Component                                                          */
/* -------------------------------------------------------------------------- */

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggle = (id: number) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <section className="section bg-background relative overflow-hidden" id="faq">
      {/* Subtle radial glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-brick-600/5 blur-[100px]"
      />

      <div className="container-site relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={sectionVariants}
            className="text-center mb-12"
          >
            <span className="text-label text-brick-500 uppercase tracking-widest block mb-2">
              Got Questions?
            </span>
            <h2 className="text-display-lg text-balance text-white mb-4">
              Frequently asked{" "}
              <span className="gradient-text-accent">questions.</span>
            </h2>
            <p className="text-body-lg text-gray-400">
              Everything you need to know before we start collaborating.
            </p>
          </motion.div>

          {/* Accordion list */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={listVariants}
            className="flex flex-col gap-3"
          >
            {faqs.map((faq) => (
              <FaqItem
                key={faq.id}
                faq={faq}
                isOpen={openId === faq.id}
                onToggle={() => toggle(faq.id)}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
