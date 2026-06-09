"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { IMAGES } from "@/lib/constants";
import { heroBadges } from "@/lib/content";
import { SectionIcon, type IconName } from "./Icons";
import RegisterForm from "./RegisterForm";

export default function Hero() {
  return (
    <section
      id="register"
      className="relative overflow-hidden bg-brand-deep pt-24 lg:pt-28"
    >
      <Image
        src={IMAGES.aerial}
        alt="Aerial view of Bronte Trails freehold townhomes community in Oakville, Ontario"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-brand-deep/90 via-brand-deep/80 to-brand-deep/60"
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-content px-5 py-16 lg:px-8 lg:py-24">
        <div className="grid items-start gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="accent-line-light mb-6" />
            <p className="section-eyebrow-light mb-4">Bronte Trails Towns</p>
            <h1 className="font-display text-[2.25rem] leading-[1.1] text-white md:text-5xl lg:text-[3.5rem]">
              Bronte Trails Townhomes in Oakville
            </h1>
            <p className="mt-5 max-w-xl font-body text-lg font-medium text-white/90">
              Pre-Construction Freehold Townhomes by Caivan Communities
            </p>
            <p className="mt-5 max-w-xl font-body text-base leading-relaxed text-white/80">
              Coming soon to Bronte Road &amp; Upper Middle Road West — where
              350 acres of Bronte Creek Provincial Park meet South Oakville&apos;s
              most coveted address. Register now for VIP pricing, floor plans, and
              first access before the public launch.
            </p>

            <ul className="mt-10 grid gap-3 sm:grid-cols-2">
              {heroBadges.map((badge) => (
                <li
                  key={badge.text}
                  className="flex items-center gap-2.5 font-body text-xs font-medium uppercase tracking-wide text-white/75"
                >
                  <SectionIcon
                    name={badge.icon as IconName}
                    className="h-4 w-4 shrink-0 text-accent-gold"
                  />
                  {badge.text}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="card-surface p-6 shadow-elevated md:p-8"
          >
            <p className="section-eyebrow text-center">VIP Registration</p>
            <div className="accent-line mx-auto my-4" />
            <h2 className="mb-6 text-center font-display text-2xl text-brand-deep md:text-[1.75rem]">
              Get Priority Floor Plans &amp; Pricing
            </h2>
            <RegisterForm formType="hero" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
