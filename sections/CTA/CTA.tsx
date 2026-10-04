"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, Variants, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Mail,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Copy,
  Check,
  MessageCircle,
} from "lucide-react";
import { MagneticButton } from "@/components/MagneticButton";
import { cn } from "@/lib/cn";

/* -------------------------------------------------------------------------- */
/*  Variants                                                                   */
/* -------------------------------------------------------------------------- */

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

/* -------------------------------------------------------------------------- */
/*  Component                                                                  */
/* -------------------------------------------------------------------------- */

export default function CTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const whatsappUrl = "https://wa.me/8801790599393";
  const recipientEmail = "mdshaharul2024@gmail.com";

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Video Editing",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Parallax scroll for the gradient orbs
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const orbY1 = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  const orbY2 = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(recipientEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus("loading");

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${recipientEmail}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          Name: formData.name,
          Email: formData.email,
          Service: formData.service,
          Message: formData.message,
          _subject: `New Project Inquiry: ${formData.name} (${formData.service})`,
          _captcha: "false",
          _template: "table",
        }),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", service: "Video Editing", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-background py-28 md:py-36"
      id="contact"
    >
      {/* ── Animated gradient orbs ─────────────────────────────────────────── */}
      <motion.div
        aria-hidden
        style={{ y: orbY1 }}
        className="pointer-events-none absolute -top-40 -left-40 w-[600px] h-[600px]
                   rounded-full bg-brick-700/20 blur-[140px]"
      />
      <motion.div
        aria-hidden
        style={{ y: orbY2 }}
        className="pointer-events-none absolute -bottom-40 -right-20 w-[500px] h-[500px]
                   rounded-full bg-brick-600/15 blur-[120px]"
      />
      {/* Subtle top-center glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2
                   w-[800px] h-[2px] bg-gradient-to-r from-transparent via-brick-600/50 to-transparent"
      />

      {/* ── Grain texture overlay ──────────────────────────────────────────── */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px",
        }}
      />

      {/* ── Content ────────────────────────────────────────────────────────── */}
      <div className="container-site relative z-10">
        
        {/* Top Hero Banner */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={containerVariants}
          className="max-w-4xl mx-auto flex flex-col items-center text-center gap-8 mb-20 md:mb-28"
        >
          {/* Badge */}
          <motion.div variants={itemVariants}>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full
                             bg-brick-600/10 border border-brick-600/30 text-brick-400
                             text-sm font-medium tracking-wide">
              <Sparkles size={14} className="text-brick-500" />
              Let&apos;s create something extraordinary
            </span>
          </motion.div>

          {/* Oversized headline */}
          <motion.h2
            variants={itemVariants}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold
                       leading-[1.05] tracking-tight text-white text-balance"
          >
            Your story.{" "}
            <span
              className="bg-gradient-to-r from-brick-400 via-brick-500 to-red-400
                         bg-clip-text text-transparent"
            >
              Our craft.
            </span>
            <br className="hidden sm:block" />
            {" "}Unforgettable.
          </motion.h2>

          {/* Supporting text */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed"
          >
            From raw footage to cinematic masterpiece — we turn your vision into
            content that stops the scroll, moves audiences, and builds brands.
          </motion.p>

          {/* Quick CTA buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center gap-4 mt-2"
          >
            {/* Primary: Redirects to WhatsApp */}
            <MagneticButton>
              <motion.a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-full
                           bg-brick-600 hover:bg-brick-500 text-white font-semibold text-lg
                           shadow-[0_0_40px_rgba(255,49,49,0.35)] hover:shadow-[0_0_60px_rgba(255,49,49,0.55)]
                           transition-all duration-300"
              >
                Start Your Project
                <motion.span
                  className="inline-flex"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
                >
                  <ArrowRight size={20} />
                </motion.span>
              </motion.a>
            </MagneticButton>

            {/* Secondary */}
            <motion.a
              href="#portfolio"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full
                         border border-navy-700 hover:border-navy-600 text-gray-300
                         hover:text-white font-medium text-lg transition-all duration-300
                         bg-navy-900/40 hover:bg-navy-900/70 backdrop-blur-sm"
            >
              View Our Work
            </motion.a>
          </motion.div>
        </motion.div>

        {/* ── Dedicated Contact & Free Mailing Section ──────────────────────── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeInUp}
          className="rounded-3xl bg-navy-950/80 border border-navy-800 p-8 sm:p-12 lg:p-16 backdrop-blur-xl relative overflow-hidden shadow-2xl"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-brick-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start relative z-10">
            
            {/* Left: Contact Channels info */}
            <div className="lg:col-span-5 flex flex-col">
              <span className="text-xs font-mono uppercase tracking-widest text-brick-500 mb-2 block font-semibold">
                Direct Contact
              </span>
              <h3 className="text-display-md text-white mb-4">
                Let&apos;s talk about <br />
                <span className="gradient-text-accent">your next project.</span>
              </h3>
              <p className="text-body-sm text-gray-400 mb-8 leading-relaxed">
                Whether you need high-end image retouching, cinematic video editing, or custom web development, drop us a message or email us directly.
              </p>

              <div className="space-y-4">
                {/* Email Direct Card */}
                <div className="p-4 rounded-2xl bg-navy-900/70 border border-navy-800 flex items-center justify-between gap-4 group hover:border-brick-600/40 transition-colors">
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="w-10 h-10 rounded-xl bg-brick-600/10 border border-brick-600/20 flex items-center justify-center text-brick-400 shrink-0">
                      <Mail size={18} />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[11px] font-mono text-gray-500 uppercase block">Email Us</span>
                      <a
                        href={`mailto:${recipientEmail}`}
                        className="text-sm font-medium text-white hover:text-brick-400 transition-colors truncate block"
                      >
                        {recipientEmail}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={copyToClipboard}
                    className="p-2 rounded-lg bg-navy-800 text-gray-400 hover:text-white transition-colors cursor-pointer shrink-0"
                    title="Copy email to clipboard"
                    type="button"
                  >
                    {copiedEmail ? <Check size={16} className="text-green-400" /> : <Copy size={16} />}
                  </button>
                </div>

                {/* WhatsApp Direct Card */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-navy-900/70 border border-navy-800 flex items-center justify-between gap-4 group hover:border-[#25D366]/40 transition-colors"
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="w-10 h-10 rounded-xl bg-[#25D366]/10 border border-[#25D366]/20 flex items-center justify-center text-[#25D366] shrink-0">
                      <MessageCircle size={18} />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[11px] font-mono text-gray-500 uppercase block">WhatsApp Fast Chat</span>
                      <span className="text-sm font-medium text-white group-hover:text-[#25D366] transition-colors truncate block">
                        +880 1790 599393
                      </span>
                    </div>
                  </div>
                  <ArrowRight size={16} className="text-gray-500 group-hover:text-white transition-transform group-hover:translate-x-1 shrink-0" />
                </a>
              </div>

              <div className="mt-8 pt-6 border-t border-navy-800/80 flex items-center gap-3 text-xs text-gray-500 font-mono">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span>Active 7 days a week • Typical response time &lt; 1 hour</span>
              </div>
            </div>

            {/* Right: Free Mailing Form */}
            <div className="lg:col-span-7 rounded-2xl bg-navy-900/50 border border-navy-800/80 p-6 sm:p-8">
              <h4 className="text-heading-sm text-white mb-2">Send Us an Email</h4>
              <p className="text-xs text-gray-400 mb-6">
                Your message will be sent directly to <span className="text-brick-400 font-mono">{recipientEmail}</span>.
              </p>

              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="p-8 rounded-2xl bg-green-950/20 border border-green-500/30 text-center flex flex-col items-center"
                  >
                    <div className="w-14 h-14 rounded-full bg-green-500/20 border border-green-500/40 flex items-center justify-center text-green-400 mb-4">
                      <CheckCircle2 size={30} />
                    </div>
                    <h5 className="text-heading-sm text-white mb-2">Message Sent Successfully!</h5>
                    <p className="text-body-sm text-gray-300 max-w-md mb-6 leading-relaxed">
                      Thank you for reaching out. We have received your message at <span className="text-white font-semibold font-mono">{recipientEmail}</span> and will respond promptly.
                    </p>
                    <button
                      type="button"
                      onClick={() => setStatus("idle")}
                      className="btn btn-secondary btn-sm"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-4"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name input */}
                      <div>
                        <label className="block text-xs font-mono text-gray-400 mb-1.5 uppercase tracking-wider">
                          Your Name
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Alex Carter"
                          className="w-full px-4 py-3 rounded-xl bg-navy-950 border border-navy-800 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-brick-500 transition-colors"
                        />
                      </div>

                      {/* Email input */}
                      <div>
                        <label className="block text-xs font-mono text-gray-400 mb-1.5 uppercase tracking-wider">
                          Your Email
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="alex@example.com"
                          className="w-full px-4 py-3 rounded-xl bg-navy-950 border border-navy-800 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-brick-500 transition-colors"
                        />
                      </div>
                    </div>

                    {/* Service selector */}
                    <div>
                      <label className="block text-xs font-mono text-gray-400 mb-1.5 uppercase tracking-wider">
                        Service Needed
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-navy-950 border border-navy-800 text-white text-sm focus:outline-none focus:border-brick-500 transition-colors cursor-pointer"
                      >
                        <option value="Video Editing">Video Editing & Motion Graphics</option>
                        <option value="Image Editing">Image Editing & Retouching</option>
                        <option value="Web Development">Web Development & Landing Pages</option>
                        <option value="Complete Production Package">Full Production Package</option>
                        <option value="Other Inquiry">Other Inquiry</option>
                      </select>
                    </div>

                    {/* Message textarea */}
                    <div>
                      <label className="block text-xs font-mono text-gray-400 mb-1.5 uppercase tracking-wider">
                        Project Details / Message
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your project, timeline, deliverables, or questions..."
                        className="w-full px-4 py-3 rounded-xl bg-navy-950 border border-navy-800 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-brick-500 transition-colors resize-none"
                      />
                    </div>

                    {/* Error Notice */}
                    {status === "error" && (
                      <div className="p-3 rounded-xl bg-red-950/40 border border-red-500/30 flex items-center gap-3 text-red-300 text-xs">
                        <AlertCircle size={16} className="shrink-0 text-red-400" />
                        <span>
                          Could not send automatically. Please write us directly at{" "}
                          <a href={`mailto:${recipientEmail}`} className="underline font-semibold">
                            {recipientEmail}
                          </a>
                        </span>
                      </div>
                    )}

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className={cn(
                        "w-full py-3.5 px-6 rounded-xl font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-lg",
                        status === "loading"
                          ? "bg-navy-800 text-gray-400 cursor-not-allowed"
                          : "bg-brick-600 hover:bg-brick-500 text-white shadow-brick-600/20 hover:shadow-brick-600/40"
                      )}
                    >
                      {status === "loading" ? (
                        <>
                          <Loader2 size={18} className="animate-spin" />
                          <span>Sending to {recipientEmail}...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message to {recipientEmail}</span>
                          <Send size={16} />
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>

          </div>
        </motion.div>

      </div>

      {/* ── Bottom border fade ─────────────────────────────────────────────── */}
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-px
                   bg-gradient-to-r from-transparent via-navy-700 to-transparent"
      />
    </section>
  );
}

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};
