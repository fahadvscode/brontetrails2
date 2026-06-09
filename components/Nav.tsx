"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IMAGES } from "@/lib/constants";

const navLinks = [
  { href: "#overview", label: "Overview" },
  { href: "#location", label: "Location" },
  { href: "#schools", label: "Schools" },
  { href: "#amenities", label: "Lifestyle" },
  { href: "#faq", label: "FAQ" },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || menuOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid
          ? "border-b border-ink/5 bg-white/95 shadow-soft backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav
        className="mx-auto flex max-w-shell items-center justify-between px-5 py-4 lg:px-8"
        aria-label="Main navigation"
      >
        <a href="#" className="relative block h-9 w-36 sm:h-10 sm:w-44">
          <Image
            src={IMAGES.logo}
            alt="Bronte Trails South Oakville townhomes logo"
            fill
            className={`object-contain object-left transition-all ${
              solid ? "" : "brightness-0 invert"
            }`}
            sizes="(max-width: 640px) 144px, 176px"
            priority
          />
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`rounded-full px-4 py-2 font-body text-sm font-medium transition-colors ${
                  solid
                    ? "text-ink/70 hover:bg-linen hover:text-brand"
                    : "text-white/90 hover:bg-white/10 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#register"
          className={`hidden text-xs lg:inline-flex ${
            solid ? "btn-primary" : "btn-primary bg-white text-brand hover:bg-linen hover:text-brand-dark"
          }`}
        >
          Get VIP Access
        </a>

        <button
          type="button"
          className={`flex h-10 w-10 items-center justify-center rounded-full lg:hidden ${
            solid ? "text-ink" : "text-white"
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-ink/5 bg-white lg:hidden"
          >
            <ul className="space-y-1 px-5 py-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="block rounded-xl px-3 py-3 font-body text-sm font-medium text-ink"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="#register"
                  className="btn-primary w-full text-xs"
                  onClick={() => setMenuOpen(false)}
                >
                  Get VIP Access
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
