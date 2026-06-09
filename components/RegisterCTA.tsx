"use client";

import RegisterForm from "./RegisterForm";

export default function RegisterCTA() {
  return (
    <section
      id="register-bottom"
      className="border-t border-ink/5 bg-white py-16 lg:hidden"
      aria-labelledby="register-cta-heading"
    >
      <div className="mx-auto max-w-content px-5">
        <div className="surface overflow-hidden shadow-float">
          <div className="bg-gradient-to-r from-brand to-brand-dark px-6 py-8 text-white">
            <h2 id="register-cta-heading" className="font-display text-2xl">
              Register for Bronte Trails VIP Access
            </h2>
            <p className="mt-2 font-body text-sm text-white/80">
              Floor plans, pricing, and launch incentives — before the public.
            </p>
          </div>
          <div className="p-6">
            <RegisterForm formType="bottom-cta" />
          </div>
        </div>
      </div>
    </section>
  );
}
