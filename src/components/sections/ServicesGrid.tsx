import { SectionHeading } from "@/components/ui-custom/SectionHeading";
import { ServiceCard } from "@/components/ui-custom/ServiceCard";
import { Reveal } from "@/components/ui-custom/Reveal";
import { services } from "@/data/services";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function ServicesGrid({ limit }: { limit?: number }) {
  const list = limit ? services.slice(0, limit) : services;
  return (
    <section className="py-24 lg:py-32 px-6 lg:px-10 bg-background">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">
          <SectionHeading
            eyebrow="What we do"
            title="A full suite of finance services, under one roof."
            subtitle="Tax, compliance, investments and advisory — designed to give you clarity and confidence."
          />
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--navy-deep)] hover:text-[var(--gold)] transition"
          >
            View all services <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {list.map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.04}>
              <ServiceCard service={s} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
