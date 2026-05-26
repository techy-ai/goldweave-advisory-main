import { Award, Clock, Users, Lock } from "lucide-react";
import { SectionHeading } from "@/components/ui-custom/SectionHeading";
import { Reveal } from "@/components/ui-custom/Reveal";

const items = [
  {
    icon: Award,
    title: "Expert credentials",
    desc: "12+ years of practice across tax, audit and wealth advisory.",
  },
  {
    icon: Clock,
    title: "Always on time",
    desc: "Zero missed deadlines. Proactive reminders before due dates.",
  },
  {
    icon: Users,
    title: "Personal attention",
    desc: "Direct access to your advisor — not a call centre.",
  },
  {
    icon: Lock,
    title: "Bank-grade privacy",
    desc: "Your data is encrypted and never shared with third parties.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-24 lg:py-32 px-6 lg:px-10 bg-[var(--navy-deep)] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[36rem] h-[36rem] rounded-full bg-[var(--gold)]/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Why us"
          light
          center
          title="Built on trust. Run with precision."
          subtitle="We're more than your accountant — we're a long-term financial partner committed to your peace of mind."
        />
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 0.06}>
              <div className="glass-card rounded-3xl p-7 h-full">
                <span className="w-12 h-12 rounded-2xl grid place-items-center bg-[var(--gold)] text-[var(--navy-deep)] mb-5">
                  <it.icon className="w-5 h-5" />
                </span>
                <h3 className="text-lg font-semibold text-white mb-2">{it.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{it.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
