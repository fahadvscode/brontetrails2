"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { IMAGES } from "@/lib/constants";

const navLinks = [
  { href: "#overview", label: "Overview" },
  { href: "#location", label: "Location" },
  { href: "#schools", label: "Schools" },
  { href: "#amenities", label: "Amenities" },
  { href: "#faq", label: "FAQ" },
  { href: "#register", label: "Register" },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-stone-200/80 bg-stone-50/90 shadow-sm backdrop-blur-md">
      <nav
        className="mx-auto flex max-w-content items-center justify-between px-5 py-3.5 lg:px-8"
        aria-label="Main navigation"
      >
        <a href="#" className="relative block h-10 w-40 sm:h-11 sm:w-48">
          <Image
            src={IMAGES.logo}
            alt="Bronte Trails South Oakville townhomes logo"
            fill
            className="object-contain object-left"
            sizes="(max-width: 640px) 160px, 192px"
            priority
          />
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-body text-sm font-medium text-brand-deep transition-colors hover:text-brand"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#register" className="btn-primary hidden text-xs lg:inline-flex">
          Get VIP Access
        </a>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-sm text-brand-deep lg:hidden"
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

      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-t border-stone-200 bg-stone-50 px-5 py-4 lg:hidden"
        >
          <ul className="space-y-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block rounded-sm px-2 py-3 font-body text-sm font-medium text-brand-deep"
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
    </header>
  );
}
