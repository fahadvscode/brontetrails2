"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { galleryImages, overviewCopy, overviewStats } from "@/lib/content";
import SectionHeader from "./SectionHeader";

export default function Overview() {
  return (
    <section id="overview" className="py-20 lg:py-28">
      <div className="px-5 lg:px-8">
        <div className="mx-auto max-w-content">
          <SectionHeader
            number="01"
            tag="Overview"
            title="What Are Bronte Trails Townhomes?"
            lead={overviewCopy.definition}
          />

          <div className="grid gap-10 lg:grid-cols-5 lg:gap-12">
            <div className="space-y-5 lg:col-span-3">
              {overviewCopy.paragraphs.map((paragraph) => (
                <motion.p
                  key={paragraph.slice(0, 40)}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="prose-body"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-1">
              {overviewStats.map((stat, i) => (
                <motion.div
                  key={stat.value}
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="surface-linen p-5"
                >
                  <p className="font-display text-2xl text-brand">{stat.value}</p>
                  <p className="mt-1 font-body text-sm text-text-muted">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <blockquote className="mt-14 rounded-2xl bg-brand p-8 text-white md:p-10">
            <p className="font-display text-xl italic leading-relaxed md:text-2xl">
              &ldquo;{overviewCopy.pullQuote}&rdquo;
            </p>
          </blockquote>
        </div>

        {/* Horizontal scroll gallery */}
        <div className="mt-14">
          <p className="mb-5 px-5 font-body text-xs font-semibold uppercase tracking-[0.14em] text-brand lg:px-8">
            Community Renderings
          </p>
          <div className="flex gap-4 overflow-x-auto px-5 pb-4 lg:px-8 [scrollbar-width:thin]">
            {galleryImages.map((image, i) => (
              <motion.figure
                key={image.src}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="w-[min(85vw,420px)] shrink-0"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-float">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    sizes="420px"
                  />
                </div>
                <figcaption className="mt-3 font-body text-sm font-medium text-ink">
                  {image.caption}
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
