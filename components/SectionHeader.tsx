interface SectionHeaderProps {
  number: string;
  tag: string;
  title: string;
  lead?: string;
  className?: string;
  light?: boolean;
}

export default function SectionHeader({
  number,
  tag,
  title,
  lead,
  className = "",
  light = false,
}: SectionHeaderProps) {
  return (
    <header className={`mb-10 md:mb-14 ${className}`}>
      <div className="flex items-baseline gap-4">
        <span
          className={`font-display text-5xl leading-none md:text-6xl ${
            light ? "text-white/20" : "text-brand/15"
          }`}
          aria-hidden="true"
        >
          {number}
        </span>
        <span className={light ? "section-tag bg-white/15 text-white" : "section-tag"}>
          {tag}
        </span>
      </div>
      <h2
        className={`section-title mt-4 max-w-2xl ${light ? "text-white" : ""}`}
      >
        {title}
      </h2>
      {lead && (
        <p
          className={`prose-body mt-4 max-w-2xl ${light ? "text-white/75" : ""}`}
        >
          {lead}
        </p>
      )}
    </header>
  );
}
