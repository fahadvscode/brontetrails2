export default function RegisterCTA() {
  return (
    <section
      className="bg-gradient-to-r from-brand to-brand-dark py-16 lg:py-20"
      aria-labelledby="register-cta-heading"
    >
      <div className="mx-auto max-w-content px-5 text-center lg:px-8">
        <h2
          id="register-cta-heading"
          className="font-display text-2xl text-white md:text-3xl"
        >
          Ready for VIP Access to Bronte Trails?
        </h2>
        <p className="mx-auto mt-3 max-w-xl font-body text-sm text-white/80 md:text-base">
          Register at the top of this page for floor plans, pricing, and launch
          incentives before the general public.
        </p>
        <a href="#register" className="btn-primary mt-8 bg-white text-brand hover:bg-linen hover:text-brand-dark">
          Register Now
        </a>
      </div>
    </section>
  );
}
