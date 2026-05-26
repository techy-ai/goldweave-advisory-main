import { Counter } from "@/components/ui-custom/Counter";
import { Reveal } from "@/components/ui-custom/Reveal";

const metrics = [
  { value: 1200, suffix: "+", label: "Happy clients" },
  { value: 12, suffix: "+", label: "Years of expertise" },
  { value: 8500, suffix: "+", label: "Returns filed" },
  { value: 50, suffix: " Cr+", label: "Investments advised" },
];

export function TrustMetrics() {
  return (
    <section className="-mt-16 relative z-10 px-6 lg:px-10">
      <Reveal className="mx-auto max-w-6xl rounded-3xl bg-white shadow-[0_30px_80px_-30px_rgba(7,27,59,0.25)] border border-[var(--border)] grid grid-cols-2 lg:grid-cols-4 divide-x divide-[var(--border)]">
        {metrics.map((m) => (
          <div key={m.label} className="p-8 lg:p-10 text-center">
            <div className="text-3xl lg:text-5xl font-display font-semibold text-[var(--navy-deep)]">
              <Counter to={m.value} suffix={m.suffix} />
            </div>
            <div className="mt-2 text-xs lg:text-sm text-muted-foreground uppercase tracking-wider">
              {m.label}
            </div>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
