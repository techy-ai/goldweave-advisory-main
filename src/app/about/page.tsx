import { PageShell } from "@/components/layout/PageShell";
import { PageHero } from "@/components/layout/PageHero";
import { SectionHeading } from "@/components/ui-custom/SectionHeading";
import { Reveal } from "@/components/ui-custom/Reveal";
import { CTABand } from "@/components/ui-custom/CTABand";
import Image from "next/image";
import { Award, Target, Eye, Heart, ShieldCheck, BadgeCheck } from "lucide-react";
import { site } from "@/data/site";
import office from "@/assets/about-office.jpg";
import founder from "@/assets/founder.jpg";

export const metadata = {
  title: "About — Dhiren S Patel",
  description:
    "A decade of trusted tax and finance advisory in Ahmedabad. Meet the team, mission and values behind Dhiren S Patel.",
  openGraph: {
    title: "About — Dhiren S Patel",
    description: "Trusted advisor for 1,200+ clients across Gujarat.",
    url: "/about",
  },
  alternates: {
    canonical: "/about",
  },
};

const milestones = [
  { year: "2014", title: "Practice founded", desc: "Started independent advisory in Ahmedabad." },
  { year: "2017", title: "GST go-live", desc: "Onboarded 200+ SMEs into the new GST regime." },
  { year: "2020", title: "Cloud-first", desc: "Migrated to fully digital, paperless filings." },
  {
    year: "2023",
    title: "Wealth desk launch",
    desc: "Added mutual funds, insurance & SIP advisory.",
  },
  { year: "2026", title: "1,200+ clients", desc: "Trusted across Gujarat and pan-India NRIs." },
];

const values = [
  {
    icon: ShieldCheck,
    title: "Integrity first",
    desc: "We say no to short-cuts and mis-selling — always.",
  },
  {
    icon: BadgeCheck,
    title: "Specialist depth",
    desc: "Each domain handled by a domain expert, not generalists.",
  },
  {
    icon: Heart,
    title: "Client-obsessed",
    desc: "Reachable on call & WhatsApp, every working day.",
  },
];

export default function AboutPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="About"
        title={
          <>
            A decade of <span className="gradient-gold-text">trusted</span> tax & finance advisory.
          </>
        }
        subtitle="We help individuals, families and businesses in Ahmedabad navigate tax, compliance and wealth — with clarity and care."
        crumbs={[{ label: "Home", to: "/" }, { label: "About" }]}
      />

      <section className="py-24 lg:py-32 px-6 lg:px-10">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-14 items-center">
          <Reveal>
            <Image
              src={office}
              alt="Our office"
              width={1400}
              height={1000}
              className="w-full rounded-3xl shadow-navy-glow"
              priority
            />
          </Reveal>
          <Reveal delay={0.1}>
            <div className="text-xs uppercase tracking-[0.2em] text-[var(--gold)] mb-4 flex items-center gap-2">
              <span className="w-6 h-px bg-current" /> Our story
            </div>
            <h2 className="text-3xl lg:text-4xl font-semibold leading-[1.1] mb-6">
              Started in 2014. Built on relationships.
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              What began as a single-desk practice in Ahmedabad is today a multi-service finance
              advisory trusted by 1,200+ clients — from first-time taxpayers to growing SMEs.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We blend deep regulatory expertise with personal accessibility — so you always know
              who's handling your finances, and why.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-10 bg-secondary/50">
        <div className="mx-auto max-w-7xl grid md:grid-cols-2 gap-6">
          {[
            {
              icon: Target,
              title: "Mission",
              desc: "To make tax and finance simple, transparent and growth-oriented for every Indian household and business.",
            },
            {
              icon: Eye,
              title: "Vision",
              desc: "To be Gujarat's most trusted independent finance advisory by 2030 — known for ethics, expertise and care.",
            },
          ].map((v, i) => (
            <Reveal key={v.title} delay={i * 0.1}>
              <div className="p-10 rounded-3xl bg-white border border-[var(--border)] h-full">
                <span className="w-14 h-14 rounded-2xl grid place-items-center bg-[var(--navy-deep)] text-[var(--gold)] mb-6">
                  <v.icon className="w-6 h-6" />
                </span>
                <h3 className="text-2xl font-semibold mb-3">{v.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-24 lg:py-32 px-6 lg:px-10">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-12 gap-12 items-center">
          <Reveal className="lg:col-span-5">
            <Image
              src={founder}
              alt="Dhiren S Patel, Founder"
              width={900}
              height={1100}
              className="w-full rounded-3xl shadow-navy-glow"
            />
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-7">
            <div className="text-xs uppercase tracking-[0.2em] text-[var(--gold)] mb-4 flex items-center gap-2">
              <span className="w-6 h-px bg-current" /> Founder's message
            </div>
            <p className="text-2xl lg:text-3xl font-display leading-snug text-foreground mb-8">
              "Every client deserves an advisor who picks up the phone, explains in plain language,
              and treats their money as if it were their own. That's the standard we hold ourselves
              to — every single day."
            </p>
            <div>
              <div className="font-semibold text-lg">{site.brand}</div>
              <div className="text-sm text-muted-foreground">
                Founder · Tax Consultant & Finance Advisor
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-24 lg:py-32 px-6 lg:px-10 bg-[var(--navy-deep)] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[36rem] h-[36rem] rounded-full bg-[var(--gold)]/10 blur-3xl" />
        <div className="relative mx-auto max-w-7xl">
          <SectionHeading eyebrow="Journey" light center title="Milestones along the way." />
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-5 gap-5">
            {milestones.map((m, i) => (
              <Reveal key={m.year} delay={i * 0.06}>
                <div className="glass-card rounded-3xl p-6 h-full">
                  <div className="text-[var(--gold)] font-display text-2xl font-semibold mb-2">
                    {m.year}
                  </div>
                  <div className="text-white font-semibold mb-1">{m.title}</div>
                  <div className="text-sm text-white/55">{m.desc}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 px-6 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Values" center title="What our clients trust us for." />
          <div className="mt-14 grid md:grid-cols-3 gap-5">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08}>
                <div className="p-8 rounded-3xl bg-white border border-[var(--border)] h-full">
                  <span className="w-12 h-12 rounded-2xl grid place-items-center bg-[var(--gold)]/10 text-[var(--gold)] mb-5">
                    <v.icon className="w-5 h-5" />
                  </span>
                  <h3 className="text-lg font-semibold mb-2">{v.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 lg:px-10 border-t border-[var(--border)]">
        <div className="mx-auto max-w-7xl flex flex-wrap items-center justify-center gap-x-12 gap-y-6 text-muted-foreground">
          {[
            "GST Practitioner",
            "AMFI Registered",
            "IRDA Certified",
            "Income Tax Bar Member",
            "ICAI Affiliate",
          ].map((c) => (
            <div key={c} className="flex items-center gap-2 text-sm font-medium">
              <Award className="w-4 h-4 text-[var(--gold)]" /> {c}
            </div>
          ))}
        </div>
      </section>

      <CTABand />
    </PageShell>
  );
}
