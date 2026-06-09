import { quickFacts } from "@/lib/content";

export default function QuickFacts() {
  return (
    <section
      aria-label="Bronte Trails at a glance"
      className="relative z-10 -mt-8 px-5 lg:px-8"
    >
      <div className="mx-auto max-w-content">
        <div className="surface grid gap-px overflow-hidden rounded-2xl bg-ink/5 shadow-float md:grid-cols-3 lg:grid-cols-6">
          {quickFacts.map((fact) => (
            <div
              key={fact.label}
              className="flex flex-col justify-center bg-white px-4 py-5 text-center md:py-6"
            >
              <dt className="font-body text-[10px] font-bold uppercase tracking-[0.12em] text-brand">
                {fact.label}
              </dt>
              <dd className="mt-1.5 font-body text-sm font-semibold leading-snug text-ink">
                {fact.value}
              </dd>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
