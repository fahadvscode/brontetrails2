"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { distances, locationCopy } from "@/lib/content";
import { IMAGES } from "@/lib/constants";
import { SectionIcon, type IconName } from "./Icons";
import SectionHeader from "./SectionHeader";

export default function Location() {
  return (
    <section id="location" className="bg-linen py-20 lg:py-28">
      <div className="mx-auto max-w-content px-5 lg:px-8">
        <SectionHeader
          number="02"
          tag="Location"
          title="Bronte Trails Location & Connectivity"
          lead={locationCopy.lead}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-3xl shadow-float"
        >
          <div className="relative aspect-[16/9] w-full">
            <Image
              src={IMAGES.sitePlan}
              alt="Bronte Trails Oakville community site plan illustration showing townhome layout near Bronte Creek Provincial Park"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1200px) 100vw, 1120px"
            />
          </div>
          <p className="bg-white px-5 py-3 text-center font-body text-xs text-text-muted">
            Bronte Trails — Community Site Plan Illustration by Caivan Communities
          </p>
        </motion.div>

        <div className="mt-10 grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-4">
            {locationCopy.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className="prose-body">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="surface overflow-hidden">
            <div className="relative aspect-[4/3]">
              <iframe
                title="Bronte Trails Oakville location map — Bronte Road and Upper Middle Road West"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2897.5!2d-79.745!3d43.435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDI2JzA2LjAiTiA3OcKwNDQnNDIuMCJX!5e0!3m2!1sen!2sca!4v1"
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="border-t border-ink/5 bg-brand/5 px-5 py-4">
              <p className="font-body text-sm font-semibold text-ink">
                Bronte Road &amp; Upper Middle Road West, Oakville
              </p>
              <p className="mt-1 font-body text-xs text-text-muted">
                QEW · Bronte GO · Bronte Creek Provincial Park · Sheridan College
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {distances.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
              className="flex items-start gap-3 rounded-xl bg-white p-4 shadow-soft"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand/10">
                <SectionIcon
                  name={item.icon as IconName}
                  className="h-4 w-4 text-brand"
                />
              </div>
              <div>
                <p className="font-body text-sm font-medium text-ink">{item.label}</p>
                <p className="font-body text-xs font-semibold text-brand">{item.time}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
