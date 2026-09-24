"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/cn";
import { useScrolled } from "@/hooks/use-scrolled";
import { useLockBodyScroll } from "@/hooks/use-lock-body-scroll";
import { navLinks, ctaLink } from "@/data/navigation";

/* -------------------------------------------------------------------------- */
/*  Animation variants                                                         */
/* -------------------------------------------------------------------------- */

const navbarVariants: Variants = {
  transparent: {
    backgroundColor: "rgba(8, 17, 31, 0)",
    backdropFilter: "blur(0px)",
    borderBottomColor: "rgba(26, 48, 82, 0)",
  },
  glass: {
    backgroundColor: "rgba(8, 17, 31, 0.72)",
    backdropFilter: "blur(20px) saturate(1.3)",
    borderBottomColor: "rgba(26, 48, 82, 0.5)",
  },
};

const mobileMenuVariants: Variants = {
  closed: {
    opacity: 0,
    y: "-100%",
    transition: {
      duration: 0.4,
      ease: [0.65, 0, 0.35, 1],
      when: "afterChildren",
    },
  },
  open: {
    opacity: 1,
    y: "0%",
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
      when: "beforeChildren",
      staggerChildren: 0.06,
      delayChildren: 0.15,
    },
  },
};

const mobileLinkVariants: Variants = {
  closed: {
    opacity: 0,
    y: 24,
    filter: "blur(6px)",
    transition: { duration: 0.25, ease: [0.65, 0, 0.35, 1] },
  },
  open: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
};

const hamburgerTopVariants: Variants = {
  closed: { rotate: 0, y: 0 },
  open: { rotate: 45, y: 6 },
};

const hamburgerBottomVariants: Variants = {
  closed: { rotate: 0, y: 0 },
  open: { rotate: -45, y: -6 },
};

/* -------------------------------------------------------------------------- */
/*  Component                                                                  */
/* -------------------------------------------------------------------------- */

export default function Navbar() {
  const scrolled = useScrolled(20);
  const [mobileOpen, setMobileOpen] = useState(false);

  useLockBodyScroll(mobileOpen);

  const toggleMobile = useCallback(() => {
    setMobileOpen((prev) => !prev);
  }, []);

  const closeMobile = useCallback(() => {
    setMobileOpen(false);
  }, []);

  return (
    <>
      {/* ── Sticky Header ─────────────────────────────────────────────── */}
      <motion.header
        initial="transparent"
        animate={scrolled || mobileOpen ? "glass" : "transparent"}
        variants={navbarVariants}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed inset-x-0 top-0 z-50",
          "border-b border-transparent",
          "transition-shadow",
          scrolled && "shadow-lg",
        )}
        style={{ WebkitBackdropFilter: scrolled || mobileOpen ? "blur(20px) saturate(1.3)" : "blur(0px)" }}
      >
        <nav
          className="container-site flex items-center justify-between h-[72px] lg:h-[80px]"
          aria-label="Primary navigation"
        >
          {/* ── Logo ──────────────────────────────────────────────────── */}
          <Link
            href="#home"
            onClick={closeMobile}
            className="relative z-10 flex items-center gap-2 group"
            aria-label="Shams Media — Home"
          >
            {/* Stylised "S" mark */}
            <span
              className={cn(
                "flex items-center justify-center",
                "w-9 h-9 rounded-lg",
                "bg-brick-600 text-white",
                "font-display font-bold text-lg",
                "transition-transform duration-300 ease-out",
                "group-hover:scale-110 group-hover:rotate-[-4deg]",
              )}
            >
              S
            </span>
            <span className="font-display font-semibold text-lg tracking-tight text-white">
              Shams
              <span className="text-brick-400 ml-0.5">Media</span>
            </span>
          </Link>

          {/* ── Desktop Links ─────────────────────────────────────────── */}
          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "relative px-4 py-2 rounded-lg",
                    "text-sm font-medium text-gray-300",
                    "transition-colors duration-200 ease-out",
                    "hover:text-white",
                    "group",
                  )}
                >
                  {link.label}
                  {/* Hover underline */}
                  <span
                    className={cn(
                      "absolute left-4 right-4 bottom-0.5 h-px",
                      "bg-brick-500 origin-left",
                      "scale-x-0 group-hover:scale-x-100",
                      "transition-transform duration-300 ease-out",
                    )}
                  />
                </Link>
              </li>
            ))}
          </ul>

          {/* ── Desktop CTA + Mobile Toggle ────────────────────────────── */}
          <div className="flex items-center gap-3">
            {/* CTA — desktop only */}
            <Link
              href={ctaLink.href}
              className={cn(
                "hidden lg:inline-flex",
                "btn btn-md btn-primary",
                "group gap-2",
              )}
            >
              {ctaLink.label}
              <ArrowUpRight
                size={16}
                strokeWidth={2.5}
                className="transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>

            {/* Hamburger — mobile only */}
            <button
              type="button"
              onClick={toggleMobile}
              className={cn(
                "relative z-10 lg:hidden",
                "btn btn-icon btn-md btn-ghost",
                "text-white",
              )}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              <motion.div className="flex flex-col items-center justify-center gap-[5px] w-5">
                <motion.span
                  variants={hamburgerTopVariants}
                  animate={mobileOpen ? "open" : "closed"}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="block w-5 h-[2px] bg-current origin-center"
                />
                <motion.span
                  variants={hamburgerBottomVariants}
                  animate={mobileOpen ? "open" : "closed"}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="block w-5 h-[2px] bg-current origin-center"
                />
              </motion.div>
            </button>
          </div>
        </nav>
      </motion.header>

      {/* ── Mobile Menu Overlay ────────────────────────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className={cn(
              "fixed inset-0 z-40 lg:hidden",
              "flex flex-col",
              "bg-navy-900/95 backdrop-blur-2xl",
            )}
            style={{ WebkitBackdropFilter: "blur(40px)" }}
          >
            {/* Accent gradient glow */}
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[30vh] rounded-full pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(178,58,46,0.12) 0%, transparent 70%)",
              }}
            />

            {/* Spacer for the header height */}
            <div className="h-[72px] shrink-0" />

            {/* Links */}
            <nav className="flex-1 flex flex-col justify-center px-8 -mt-12">
              <ul className="flex flex-col gap-2">
                {navLinks.map((link, i) => (
                  <motion.li key={link.href} variants={mobileLinkVariants}>
                    <Link
                      href={link.href}
                      onClick={closeMobile}
                      className={cn(
                        "flex items-center justify-between",
                        "py-4 px-2",
                        "text-3xl font-display font-semibold text-white",
                        "border-b border-navy-700/60",
                        "transition-colors duration-200",
                        "hover:text-brick-400",
                        "group",
                      )}
                    >
                      <span className="flex items-center gap-4">
                        <span className="text-sm font-mono text-brick-600/80 tabular-nums">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        {link.label}
                      </span>
                      <ArrowUpRight
                        size={20}
                        className="text-navy-400 transition-all duration-300 group-hover:text-brick-400 group-hover:translate-x-1 group-hover:-translate-y-1"
                      />
                    </Link>
                  </motion.li>
                ))}
              </ul>

              {/* Mobile CTA */}
              <motion.div variants={mobileLinkVariants} className="mt-10">
                <Link
                  href={ctaLink.href}
                  onClick={closeMobile}
                  className="btn btn-lg btn-primary w-full group"
                >
                  {ctaLink.label}
                  <ArrowUpRight
                    size={18}
                    strokeWidth={2.5}
                    className="transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>
              </motion.div>
            </nav>

            {/* Footer info */}
            <motion.div
              variants={mobileLinkVariants}
              className="px-8 pb-8 text-sm text-gray-500"
            >
              <p>© {new Date().getFullYear()} Shams Media</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
