import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  light,
  center,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  light?: boolean;
  center?: boolean;
}) {
  return (
    <Reveal className={`max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <div
          className={`inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] mb-4 ${light ? "text-[var(--gold-soft)]" : "text-[var(--gold)]"}`}
        >
          <span className="w-6 h-px bg-current" /> {eyebrow}
        </div>
      )}
      <h2
        className={`text-3xl sm:text-4xl lg:text-5xl font-semibold leading-[1.05] ${light ? "text-white" : "text-foreground"}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-5 text-base sm:text-lg leading-relaxed ${light ? "text-white/65" : "text-muted-foreground"}`}
        >
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
