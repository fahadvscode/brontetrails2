"use client";

import { motion } from "framer-motion";
import { schools, schoolsCopy } from "@/lib/content";
import SectionHeader from "./SectionHeader";

export default function Schools() {
  return (
    <section id="schools" className="py-20 lg:py-28">
      <div className="mx-auto max-w-content px-5 lg:px-8">
        <SectionHeader
          number="03"
          tag="Education"
          title="Schools Near Bronte Trails Oakville"
          lead={schoolsCopy.lead}
        />

        <div className="mb-12 max-w-3xl space-y-4">
          {schoolsCopy.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 40)} className="prose-body">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {schools.map((school, i) => (
            <motion.article
              key={school.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="group surface p-6 transition-shadow hover:shadow-float"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-display text-lg text-ink">{school.name}</h3>
                <span className="shrink-0 rounded-full bg-brand/10 px-2.5 py-1 font-body text-[10px] font-bold uppercase tracking-wide text-brand">
                  {school.distance}
                </span>
              </div>
              <p className="mt-2 font-body text-xs text-text-muted">{school.type}</p>
              {school.grades && (
                <p className="mt-1 font-body text-sm text-text-muted">{school.grades}</p>
              )}
              {"rating" in school && school.rating && (
                <p className="mt-2 inline-block rounded-full bg-accent-gold/15 px-2.5 py-0.5 font-body text-xs font-semibold text-brand-dark">
                  {school.rating}
                </p>
              )}
              {"programs" in school && school.programs && (
                <p className="mt-1 font-body text-sm text-text-muted">{school.programs}</p>
              )}
              <p className="mt-2 font-body text-xs text-text-muted">{school.location}</p>
              {"note" in school && school.note && (
                <p className="mt-3 border-t border-ink/5 pt-3 font-body text-sm italic text-text-muted">
                  {school.note}
                </p>
              )}
            </motion.article>
          ))}
        </div>

        <p className="mt-10 max-w-3xl font-body text-xs leading-relaxed text-text-muted">
          {schoolsCopy.disclaimer}
        </p>
      </div>
    </section>
  );
}
