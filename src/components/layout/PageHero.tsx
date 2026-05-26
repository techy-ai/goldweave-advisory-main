import type { ReactNode } from "react";
import { Reveal } from "@/components/ui-custom/Reveal";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  crumbs?: { label: string; to?: string }[];
  children?: ReactNode;
}) {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 gradient-navy overflow-hidden">
      <div className="absolute -top-32 right-0 w-[40rem] h-[40rem] rounded-full bg-[var(--gold)]/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-20 w-[30rem] h-[30rem] rounded-full bg-[var(--navy-2)]/60 blur-3xl pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          {eyebrow && (
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[var(--gold-soft)] mb-4">
              <span className="w-6 h-px bg-current" /> {eyebrow}
            </div>
          )}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-[1.05] max-w-4xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-6 text-lg text-white/65 max-w-2xl leading-relaxed">{subtitle}</p>
          )}
          {children && <div className="mt-8">{children}</div>}
        </Reveal>
      </div>
    </section>
  );
}
