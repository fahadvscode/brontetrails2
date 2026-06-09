"use client";

import { motion } from "framer-motion";
import { caivanCopy } from "@/lib/content";
import SectionHeader from "./SectionHeader";

export default function Caivan() {
  return (
    <section id="builder" className="py-20 lg:py-28">
      <div className="mx-auto max-w-content px-5 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <SectionHeader
              number="05"
              tag="Builder"
              title="About Caivan Communities"
            />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-5 lg:col-span-8"
          >
            <p className="prose-body text-lg font-medium text-ink">{caivanCopy.lead}</p>
            {caivanCopy.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className="prose-body">
                {paragraph}
              </p>
            ))}
            <a href="#register" className="btn-secondary mt-2">
              Register for VIP Access
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
