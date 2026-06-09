"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { galleryImages, overviewCopy, overviewStats } from "@/lib/content";

export default function Overview() {
  return (
    <section id="overview" className="bg-stone-50 py-20 lg:py-28">
      <div className="mx-auto max-w-content px-5 lg:px-8">
        <div className="mx-auto max-w-prose text-center">
          <p className="section-eyebrow">Overview</p>
          <div className="accent-line mx-auto my-4" />
          <h2 className="section-title">
            What Are Bronte Trails Townhomes?
          </h2>
          <p className="prose-body mt-6 font-medium text-brand-deep">
            {overviewCopy.definition}
          </p>
        </div>

        <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_380px] lg:gap-16">
          <div className="space-y-5">
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
            <a
              href="#register"
              className="inline-flex items-center gap-1 font-body text-sm font-semibold text-brand hover:underline"
            >
              Register for priority updates
              <span aria-hidden="true">→</span>
            </a>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {overviewStats.map((stat, i) => (
              <motion.div
                key={stat.value}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="card-surface border-l-4 border-l-brand p-5"
              >
                <p className="font-display text-2xl text-brand">{stat.value}</p>
                <p className="mt-1 font-body text-sm text-text-muted">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <blockquote className="mx-auto mt-16 max-w-3xl border-l-4 border-accent-gold bg-white px-8 py-6 shadow-card">
          <p className="font-display text-xl italic leading-relaxed text-brand-deep md:text-2xl">
            &ldquo;{overviewCopy.pullQuote}&rdquo;
          </p>
        </blockquote>

        <div className="mt-16 grid gap-5 lg:grid-cols-3 lg:grid-rows-2">
          {galleryImages.map((image, i) => (
            <motion.figure
              key={image.src}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`card-surface overflow-hidden ${image.span}`}
            >
              <div className={`relative ${image.aspect} min-h-[200px]`}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
              </div>
              <figcaption className="px-4 py-3 font-body text-xs font-semibold uppercase tracking-wide text-brand">
                {image.caption}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
