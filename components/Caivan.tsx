"use client";

import { motion } from "framer-motion";
import { caivanCopy } from "@/lib/content";

export default function Caivan() {
  return (
    <section id="builder" className="bg-stone-100 py-20 lg:py-28">
      <div className="mx-auto max-w-content px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[280px_1fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="section-eyebrow">Builder</p>
            <div className="accent-line my-4" />
            <h2 className="section-title">
              About Caivan Communities
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            <p className="prose-body font-medium text-brand-deep">{caivanCopy.lead}</p>
            {caivanCopy.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className="prose-body">
                {paragraph}
              </p>
            ))}
            <a
              href="#register"
              className="inline-flex items-center gap-1 font-body text-sm font-semibold text-brand hover:underline"
            >
              Register for Bronte Trails VIP access
              <span aria-hidden="true">→</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
