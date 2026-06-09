"use client";

import { motion } from "framer-motion";
import { investmentCopy, investmentPoints } from "@/lib/content";
import SectionHeader from "./SectionHeader";

export default function Investment() {
  return (
    <section id="investment" className="bg-linen py-20 lg:py-28">
      <div className="mx-auto max-w-content px-5 lg:px-8">
        <SectionHeader
          number="06"
          tag="Investment"
          title="Why Buy Bronte Trails Townhomes?"
          lead={investmentCopy.lead}
        />

        <div className="mb-12 max-w-3xl space-y-4">
          {investmentCopy.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 40)} className="prose-body">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {investmentPoints.map((point, i) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="surface p-6 md:p-7"
            >
              <span className="font-display text-3xl text-brand/20" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 font-display text-xl text-ink">{point.title}</h3>
              <p className="prose-body mt-3">{point.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
