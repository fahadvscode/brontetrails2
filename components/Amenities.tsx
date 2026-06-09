"use client";

import { motion } from "framer-motion";
import { amenityColumns, amenitiesCopy } from "@/lib/content";
import SectionHeader from "./SectionHeader";

export default function Amenities() {
  return (
    <section id="amenities" className="bg-linen py-20 lg:py-28">
      <div className="mx-auto max-w-content px-5 lg:px-8">
        <SectionHeader
          number="04"
          tag="Lifestyle"
          title="Amenities & Lifestyle Near Bronte Trails"
          lead={amenitiesCopy.lead}
        />

        <div className="mb-12 max-w-3xl space-y-4">
          {amenitiesCopy.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 40)} className="prose-body">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {amenityColumns.map((column, i) => (
            <motion.div
              key={column.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="surface flex flex-col p-6"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand/10 font-body text-sm font-bold text-brand" aria-hidden="true">
                {i + 1}
              </span>
              <h3 className="mt-3 font-display text-xl text-ink">{column.title}</h3>
              <ul className="mt-5 flex-1 space-y-2.5">
                {column.items.map((item) => (
                  <li
                    key={item}
                    className="flex gap-2.5 font-body text-sm leading-relaxed text-text-muted"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand" aria-hidden="true" />
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
