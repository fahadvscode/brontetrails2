"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { IMAGES } from "@/lib/constants";
import { heroBadges } from "@/lib/content";
import { SectionIcon, type IconName } from "./Icons";
import RegisterForm from "./RegisterForm";

export default function Hero() {
  return (
    <section id="register" className="relative overflow-hidden">
      <Image
        src={IMAGES.aerial}
        alt="Aerial view of Bronte Trails freehold townhomes community in Oakville, Ontario"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div
        className="absolute inset-0 bg-gradient-to-br from-ink/80 via-ink/50 to-brand/30"
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-content px-5 py-28 lg:px-8 lg:py-32">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="chip mb-6 border border-white/20 bg-white/10 text-white">
              <span className="h-2 w-2 rounded-full bg-accent-gold" aria-hidden="true" />
              VIP Registration Open — Coming Soon
            </span>

            <h1 className="font-display text-[2.25rem] leading-[1.08] text-white md:text-5xl lg:text-[3.25rem]">
              Bronte Trails Townhomes in Oakville
            </h1>
            <p className="mt-5 font-body text-lg text-white/85 md:text-xl">
              Pre-construction freehold townhomes by Caivan Communities — no condo
              fees, park-side living, minutes to Bronte GO.
            </p>
            <p className="mt-4 max-w-lg font-body text-base leading-relaxed text-white/75">
              Coming soon to Bronte Road &amp; Upper Middle Road West. Register for
              VIP pricing, floor plans, and first access before the public launch.
            </p>

            <ul className="mt-8 flex flex-wrap gap-2">
              {heroBadges.map((badge) => (
                <li key={badge.text} className="chip text-white/90">
                  <SectionIcon
                    name={badge.icon as IconName}
                    className="h-3.5 w-3.5 text-accent-gold"
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
            className="surface overflow-hidden shadow-float"
          >
            <div className="bg-brand px-6 py-5 text-white">
              <p className="font-body text-[11px] font-semibold uppercase tracking-[0.14em] text-white/80">
                VIP Registration
              </p>
              <h2 className="mt-1 font-display text-xl leading-snug md:text-2xl">
                Get Priority Floor Plans &amp; Pricing
              </h2>
            </div>
            <div className="p-6 md:p-8">
              <RegisterForm formType="hero" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
