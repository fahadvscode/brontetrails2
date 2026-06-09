"use client";

import { motion } from "framer-motion";
import { schools, schoolsCopy } from "@/lib/content";

export default function Schools() {
  return (
    <section id="schools" className="bg-stone-50 py-20 lg:py-28">
      <div className="mx-auto max-w-content px-5 lg:px-8">
        <div className="mx-auto max-w-prose text-center">
          <p className="section-eyebrow">Education</p>
          <div className="accent-line mx-auto my-4" />
          <h2 className="section-title">
            Schools Near Bronte Trails Oakville
          </h2>
          <p className="prose-body mt-6 font-medium text-brand-deep">
            {schoolsCopy.lead}
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-3xl space-y-5">
          {schoolsCopy.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 40)} className="prose-body">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {schools.map((school, i) => (
            <motion.article
              key={school.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="card-surface p-6"
            >
              <h3 className="font-display text-xl text-brand-deep">{school.name}</h3>
              <p className="mt-1 font-body text-xs font-medium uppercase tracking-wide text-brand">
                {school.type}
              </p>
              {school.grades && (
                <p className="mt-2 font-body text-sm text-text-muted">{school.grades}</p>
              )}
              {"rating" in school && school.rating && (
                <p className="mt-1 font-body text-sm font-semibold text-brand">
                  {school.rating}
                </p>
              )}
              {"programs" in school && school.programs && (
                <p className="mt-1 font-body text-sm text-text-muted">{school.programs}</p>
              )}
              <p className="mt-2 font-body text-sm text-text-muted">{school.location}</p>
              <p className="mt-1 font-body text-xs font-medium text-brand">{school.distance}</p>
              {"note" in school && school.note && (
                <p className="mt-3 border-t border-stone-200 pt-3 font-body text-sm italic text-text-muted">
                  {school.note}
                </p>
              )}
            </motion.article>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-3xl text-center font-body text-xs leading-relaxed text-text-muted">
          {schoolsCopy.disclaimer}
        </p>
      </div>
    </section>
  );
}
