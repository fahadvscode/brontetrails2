"use client";

import RegisterForm from "./RegisterForm";

export default function StickyRegisterSidebar() {
  return (
    <aside
      className="hidden w-[360px] shrink-0 lg:block xl:w-[380px]"
      aria-label="VIP registration"
    >
      <div className="sticky top-24 px-4 pb-8 pt-24 xl:px-6">
        <div className="surface overflow-hidden shadow-float">
          <div className="bg-brand px-6 py-5 text-white">
            <p className="font-body text-[11px] font-semibold uppercase tracking-[0.14em] text-white/80">
              VIP Registration
            </p>
            <h2 className="mt-1 font-display text-xl leading-snug">
              Priority Floor Plans &amp; Pricing
            </h2>
          </div>
          <div className="p-6">
            <RegisterForm formType="sticky" />
          </div>
        </div>
        <p className="mt-4 text-center font-body text-[11px] leading-relaxed text-text-muted">
          Freehold townhomes · No condo fees · Oakville
        </p>
      </div>
    </aside>
  );
}
