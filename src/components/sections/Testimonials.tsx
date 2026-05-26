import { Quote, Star } from "lucide-react";
import { SectionHeading } from "@/components/ui-custom/SectionHeading";
import { Reveal } from "@/components/ui-custom/Reveal";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  return (
    <section className="py-24 lg:py-32 px-6 lg:px-10 bg-secondary/50">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Client stories"
          center
          title="Trusted by founders, professionals & families."
        />
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.slice(0, 6).map((t, i) => (
            <Reveal key={t.name} delay={i * 0.05}>
              <div className="h-full p-7 rounded-3xl bg-white border border-[var(--border)] shadow-sm relative">
                <Quote className="absolute top-6 right-6 w-8 h-8 text-[var(--gold)]/20" />
                <div className="flex gap-0.5 mb-4 text-[var(--gold)]">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="w-4 h-4" fill="currentColor" />
                  ))}
                </div>
                <p className="text-foreground/90 leading-relaxed mb-6">"{t.quote}"</p>
                <div>
                  <div className="font-semibold text-foreground">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
