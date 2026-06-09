"use client";

import { motion } from "framer-motion";
import { investmentCopy, investmentPoints } from "@/lib/content";

export default function Investment() {
  return (
    <section id="investment" className="bg-stone-50 py-20 lg:py-28">
      <div className="mx-auto max-w-content px-5 lg:px-8">
        <div className="mx-auto max-w-prose text-center">
          <p className="section-eyebrow">Investment</p>
          <div className="accent-line mx-auto my-4" />
          <h2 className="section-title">
            Why Buy Bronte Trails Townhomes?
          </h2>
          <p className="prose-body mt-6 font-medium text-brand-deep">
            {investmentCopy.lead}
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-3xl space-y-5">
          {investmentCopy.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 40)} className="prose-body">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {investmentPoints.map((point, i) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="card-surface p-6"
            >
              <h3 className="font-display text-xl text-brand-deep">{point.title}</h3>
              <p className="prose-body mt-3">{point.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
