import { SectionHeading } from "@/components/ui-custom/SectionHeading";
import { Reveal } from "@/components/ui-custom/Reveal";

const steps = [
  {
    n: "01",
    title: "Free consultation",
    desc: "We listen first. Understand your goals, business and current setup.",
  },
  {
    n: "02",
    title: "Tailored proposal",
    desc: "Clear scope, timelines and fixed fees — no surprises.",
  },
  {
    n: "03",
    title: "Onboarding & access",
    desc: "Secure document collection and dedicated point of contact.",
  },
  {
    n: "04",
    title: "Execution",
    desc: "Filings, planning and investments — handled with precision.",
  },
  {
    n: "05",
    title: "Ongoing partnership",
    desc: "Quarterly reviews and proactive recommendations.",
  },
];

export function ProcessTimeline() {
  return (
    <section className="py-24 lg:py-32 px-6 lg:px-10 bg-background">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Our process"
          center
          title="A simple 5-step journey to financial clarity."
        />
        <div className="mt-16 grid lg:grid-cols-5 gap-5 relative">
          <div className="hidden lg:block absolute top-7 left-12 right-12 h-px bg-gradient-to-r from-transparent via-[var(--gold)]/40 to-transparent" />
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.08} className="relative">
              <div className="w-14 h-14 rounded-full bg-white border border-[var(--gold)]/40 text-[var(--gold)] font-display font-semibold grid place-items-center mb-5 relative z-10 shadow-sm">
                {s.n}
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
