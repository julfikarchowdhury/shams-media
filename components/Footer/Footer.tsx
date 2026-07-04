import Link from "next/link";
import { AtSign, Send, Video, Globe, Mail, Phone, MapPin } from "lucide-react";

/* -------------------------------------------------------------------------- */
/*  Data                                                                       */
/* -------------------------------------------------------------------------- */

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Portfolio", href: "#work-grid" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#start-project" },
];

const socialLinks = [
  { label: "Instagram", href: "https://instagram.com", icon: AtSign },
  { label: "Twitter / X", href: "https://twitter.com", icon: Send },
  { label: "YouTube", href: "https://youtube.com", icon: Video },
  { label: "LinkedIn", href: "https://linkedin.com", icon: Globe },
];

const contactInfo = [
  { icon: Mail, text: "hello@shamsmedia.com", href: "mailto:hello@shamsmedia.com" },
  { icon: Phone, text: "+1 (555) 000-0000", href: "tel:+15550000000" },
  { icon: MapPin, text: "Available Worldwide", href: null },
];

/* -------------------------------------------------------------------------- */
/*  Component                                                                  */
/* -------------------------------------------------------------------------- */

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-navy-950 overflow-hidden" id="contact">
      {/* ── Grain texture ──────────────────────────────────────────────────── */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px",
        }}
      />

      {/* ── Subtle top-line separator ──────────────────────────────────────── */}
      <div
        aria-hidden
        className="absolute top-0 left-0 right-0 h-px
                   bg-gradient-to-r from-transparent via-navy-700 to-transparent"
      />

      {/* ── Red glow accent ────────────────────────────────────────────────── */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-60 left-1/2 -translate-x-1/2
                   w-[500px] h-[300px] rounded-full bg-brick-700/10 blur-[100px]"
      />

      <div className="container-site relative z-10 pt-16 pb-8">
        {/* ── Main grid ──────────────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-14">
          {/* Brand column */}
          <div className="flex flex-col gap-5">
            <Link href="/" className="flex items-center gap-2 group w-fit">
              <span className="text-2xl font-extrabold text-white tracking-tight">
                Shams<span className="text-brick-500">.</span>
              </span>
            </Link>
            <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
              A premium creative editing agency crafting cinematic content that
              captivates, converts, and endures.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3 mt-1">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full flex items-center justify-center
                             bg-navy-800 border border-navy-700 text-gray-400
                             hover:bg-brick-600 hover:border-brick-600 hover:text-white
                             transition-all duration-300"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation column */}
          <div>
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-5">
              Navigation
            </h3>
            <ul className="flex flex-col gap-3">
              {navLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-200
                               flex items-center gap-2 group w-fit"
                  >
                    <span
                      className="block w-0 h-px bg-brick-500 transition-all duration-300
                                 group-hover:w-4"
                    />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-5">
              Get In Touch
            </h3>
            <ul className="flex flex-col gap-4">
              {contactInfo.map(({ icon: Icon, text, href }) => (
                <li key={text}>
                  {href ? (
                    <a
                      href={href}
                      className="flex items-center gap-3 text-sm text-gray-400
                                 hover:text-white transition-colors duration-200 group w-fit"
                    >
                      <span className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center
                                       bg-navy-800 border border-navy-700 text-gray-500
                                       group-hover:border-brick-700 group-hover:text-brick-400
                                       transition-all duration-300">
                        <Icon size={14} />
                      </span>
                      {text}
                    </a>
                  ) : (
                    <span className="flex items-center gap-3 text-sm text-gray-500">
                      <span className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center
                                       bg-navy-800 border border-navy-700 text-gray-600">
                        <Icon size={14} />
                      </span>
                      {text}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Bottom bar ─────────────────────────────────────────────────── */}
        <div
          className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4
                     border-t border-navy-800/70"
        >
          <p className="text-xs text-gray-600">
            © {year} Shams Media. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <a href="#" className="text-xs text-gray-600 hover:text-gray-400 transition-colors duration-200">
              Privacy Policy
            </a>
            <span className="text-navy-700">·</span>
            <a href="#" className="text-xs text-gray-600 hover:text-gray-400 transition-colors duration-200">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
