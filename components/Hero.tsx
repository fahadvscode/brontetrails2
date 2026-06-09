"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { IMAGES } from "@/lib/constants";
import { heroBadges } from "@/lib/content";
import { SectionIcon, type IconName } from "./Icons";
import RegisterForm from "./RegisterForm";

export default function Hero() {
  return (
    <section id="register" className="relative min-h-[92vh] overflow-hidden">
      <Image
        src={IMAGES.aerial}
        alt="Aerial view of Bronte Trails freehold townhomes community in Oakville, Ontario"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/40 to-ink/20"
        aria-hidden="true"
      />

      <div className="relative flex min-h-[92vh] flex-col justify-end px-5 pb-12 pt-28 lg:px-8 lg:pb-16">
        <div className="mx-auto w-full max-w-content">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <span className="chip mb-6 border border-white/20 bg-white/10 text-white">
              <span className="h-2 w-2 rounded-full bg-accent-gold" aria-hidden="true" />
              VIP Registration Open — Coming Soon
            </span>

            <h1 className="font-display text-[2.5rem] leading-[1.08] text-white md:text-5xl lg:text-[3.75rem]">
              Bronte Trails Townhomes in Oakville
            </h1>
            <p className="mt-5 max-w-xl font-body text-lg text-white/85 md:text-xl">
              Pre-construction freehold townhomes by Caivan Communities — no condo
              fees, park-side living, minutes to Bronte GO.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#register" className="btn-primary lg:hidden">
                Register for VIP Access
              </a>
              <a href="#overview" className="btn-secondary border-white/30 bg-white/10 text-white hover:border-white hover:bg-white hover:text-ink">
                Explore the Community
              </a>
            </div>

            <ul className="mt-10 flex flex-wrap gap-2">
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

          {/* Mobile-only inline form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="surface mt-10 p-6 lg:hidden"
          >
            <h2 className="mb-4 font-display text-xl text-ink">
              Get Priority Floor Plans &amp; Pricing
            </h2>
            <RegisterForm formType="hero" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
