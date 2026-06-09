"use client";

import { motion } from "framer-motion";
import RegisterForm from "./RegisterForm";

export default function RegisterCTA() {
  return (
    <section
      id="register-bottom"
      className="bg-brand-deep py-20 lg:py-28"
      aria-labelledby="register-cta-heading"
    >
      <div className="mx-auto max-w-content px-5 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="section-eyebrow-light">Final Step</p>
            <div className="accent-line-light my-4" />
            <h2 id="register-cta-heading" className="section-title-light">
              Register for Bronte Trails VIP Access
            </h2>
            <p className="mt-6 font-body text-base leading-relaxed text-white/80">
              Secure your place on the priority list for Bronte Trails townhomes
              in Oakville. VIP registrants receive first access to pricing, floor
              plans, lot selection, and launch incentives — before the general
              public.
            </p>
            <ul className="mt-8 space-y-3">
              {[
                "Early access to floor plans and price lists",
                "Priority notification of launch events",
                "No obligation — registration is free",
                "Broker registration available",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2.5 font-body text-sm text-white/75"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent-gold" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="card-surface p-6 shadow-elevated md:p-8"
          >
            <RegisterForm formType="bottom-cta" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
