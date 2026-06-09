"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { distances, locationCopy } from "@/lib/content";
import { IMAGES } from "@/lib/constants";
import { SectionIcon, type IconName } from "./Icons";

export default function Location() {
  return (
    <section id="location" className="bg-brand-deep py-20 text-white lg:py-28">
      <div className="mx-auto max-w-content px-5 lg:px-8">
        <div className="mx-auto max-w-prose text-center">
          <p className="section-eyebrow-light">Location</p>
          <div className="accent-line-light mx-auto my-4" />
          <h2 className="section-title-light">
            Bronte Trails Location &amp; Connectivity
          </h2>
          <p className="mt-6 font-body text-base leading-relaxed text-white/80">
            {locationCopy.lead}
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 overflow-hidden rounded-sm border border-white/15"
        >
          <div className="relative aspect-[16/9] w-full">
            <Image
              src={IMAGES.sitePlan}
              alt="Bronte Trails Oakville community site plan illustration showing townhome layout near Bronte Creek Provincial Park"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1200px) 100vw, 1180px"
            />
          </div>
          <p className="bg-brand-mid/50 px-5 py-3 text-center font-body text-xs uppercase tracking-wide text-white/70">
            Bronte Trails — Community Site Plan Illustration by Caivan Communities
          </p>
        </motion.div>

        <div className="mt-10 space-y-5">
          {locationCopy.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 40)} className="prose-body text-white/80">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative aspect-[4/3] overflow-hidden rounded-sm border border-white/15"
          >
            <iframe
              title="Bronte Trails Oakville location map — Bronte Road and Upper Middle Road West"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2897.5!2d-79.745!3d43.435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDI2JzA2LjAiTiA3OcKwNDQnNDIuMCJX!5e0!3m2!1sen!2sca!4v1"
              className="h-full w-full border-0 grayscale-[20%]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-brand-deep/95 px-5 py-4">
              <p className="font-body text-sm font-semibold">
                Bronte Road &amp; Upper Middle Road West, Oakville, ON
              </p>
              <p className="mt-1 text-xs text-white/70">
                Near QEW · Bronte GO · Bronte Creek Provincial Park · Sheridan College
              </p>
            </div>
          </motion.div>

          <div className="grid gap-3 sm:grid-cols-2">
            {distances.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="flex gap-3 rounded-sm border border-white/15 bg-white/5 p-4"
              >
                <SectionIcon
                  name={item.icon as IconName}
                  className="h-5 w-5 shrink-0 text-accent-gold"
                />
                <div>
                  <p className="font-body text-sm font-medium">{item.label}</p>
                  <p className="text-xs text-white/70">{item.time}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
