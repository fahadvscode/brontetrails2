"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faqs } from "@/lib/content";
import SectionHeader from "./SectionHeader";

export default function FAQ() {
  const [openIndices, setOpenIndices] = useState<Set<number>>(new Set([0]));

  const toggle = (i: number) => {
    setOpenIndices((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  };

  return (
    <section id="faq" className="py-20 lg:py-28">
      <div className="mx-auto max-w-content px-5 lg:px-8">
        <SectionHeader
          number="07"
          tag="FAQ"
          title="Bronte Trails Townhomes — Questions Answered"
        />

        <div className="grid gap-4 md:grid-cols-2">
          {faqs.map((faq, i) => {
            const isOpen = openIndices.has(i);
            const panelId = `faq-panel-${i}`;
            const buttonId = `faq-button-${i}`;

            return (
              <div
                key={faq.q}
                className={`surface transition-shadow ${isOpen ? "shadow-float ring-2 ring-brand/20" : ""}`}
              >
                <button
                  id={buttonId}
                  type="button"
                  className="flex w-full items-start justify-between gap-4 p-5 text-left"
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                >
                  <span className="font-body text-sm font-semibold leading-snug text-ink">
                    {faq.q}
                  </span>
                  <span
                    className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-sm font-bold transition-colors ${
                      isOpen ? "bg-brand text-white" : "bg-linen text-brand"
                    }`}
                    aria-hidden="true"
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <p className="border-t border-ink/5 px-5 pb-5 pt-4 font-body text-sm leading-relaxed text-text-muted">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
