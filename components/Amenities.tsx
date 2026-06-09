"use client";

import { motion } from "framer-motion";
import { amenityColumns, amenitiesCopy } from "@/lib/content";

export default function Amenities() {
  return (
    <section id="amenities" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-content px-5 lg:px-8">
        <div className="mx-auto max-w-prose text-center">
          <p className="section-eyebrow">Lifestyle</p>
          <div className="accent-line mx-auto my-4" />
          <h2 className="section-title">
            Amenities &amp; Lifestyle Near Bronte Trails
          </h2>
          <p className="prose-body mt-6 font-medium text-brand-deep">
            {amenitiesCopy.lead}
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-3xl space-y-5">
          {amenitiesCopy.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 40)} className="prose-body">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {amenityColumns.map((column, i) => (
            <motion.div
              key={column.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card-surface p-6"
            >
              <h3 className="font-display text-xl text-brand-deep">{column.title}</h3>
              <div className="accent-line my-4" />
              <ul className="space-y-3">
                {column.items.map((item) => (
                  <li
                    key={item}
                    className="flex gap-2 font-body text-sm leading-relaxed text-text-muted"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
