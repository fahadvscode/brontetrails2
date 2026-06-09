import { quickFacts } from "@/lib/content";

export default function QuickFacts() {
  return (
    <section
      aria-label="Bronte Trails at a glance"
      className="border-y border-stone-200 bg-white"
    >
      <div className="mx-auto max-w-content px-5 py-8 lg:px-8">
        <dl className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-10 lg:gap-y-5">
          {quickFacts.map((fact) => (
            <div key={fact.label} className="flex flex-col gap-1">
              <dt className="font-body text-xs font-semibold uppercase tracking-wide text-brand">
                {fact.label}
              </dt>
              <dd className="font-body text-sm font-medium text-brand-deep">
                {fact.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
