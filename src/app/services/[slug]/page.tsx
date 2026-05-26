import { notFound } from "next/navigation";
import { PageShell } from "@/components/layout/PageShell";
import { PageHero } from "@/components/layout/PageHero";
import { Reveal } from "@/components/ui-custom/Reveal";
import { CTABand } from "@/components/ui-custom/CTABand";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { getService, services, type Service } from "@/data/services";
import { Check, FileText, ArrowRight } from "lucide-react";
import Link from "next/link";

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) {
    return {
      title: "Service not found | Dhiren S Patel",
      description: "Service not found.",
    };
  }

  return {
    title: `${service.name} — Dhiren S Patel`,
    description: service.short,
    openGraph: {
      title: `${service.name} — Dhiren S Patel`,
      description: service.short,
      url: `/services/${service.slug}`,
      type: "article",
    },
    alternates: {
      canonical: `/services/${service.slug}`,
    },
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) {
    notFound();
  }

  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3);
  const Icon = service.icon;

  return (
    <PageShell>
      <PageHero
        eyebrow="Service"
        title={service.name}
        subtitle={service.short}
        crumbs={[
          { label: "Home", to: "/" },
          { label: "Services", to: "/services" },
          { label: service.name },
        ]}
      >
        <div className="inline-flex items-center gap-3 mt-2 px-5 py-3 rounded-full glass-card">
          <Icon className="w-5 h-5 text-[var(--gold)]" />
          <span className="text-white/85 text-sm">Tailored for individuals, SMEs and startups</span>
        </div>
      </PageHero>

      <section className="py-24 lg:py-32 px-6 lg:px-10">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 space-y-16">
            <Reveal>
              <h2 className="text-2xl lg:text-3xl font-semibold mb-4">Overview</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">{service.overview}</p>
            </Reveal>

            <Reveal>
              <h2 className="text-2xl lg:text-3xl font-semibold mb-6">Key benefits</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {service.benefits.map((benefit) => (
                  <div
                    key={benefit}
                    className="flex items-start gap-3 p-5 rounded-2xl bg-secondary/50 border border-[var(--border)]"
                  >
                    <span className="w-6 h-6 rounded-full bg-[var(--gold)] text-[var(--navy-deep)] grid place-items-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </span>
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal>
              <h2 className="text-2xl lg:text-3xl font-semibold mb-6">Our process</h2>
              <div className="space-y-3">
                {service.process.map((item, index) => (
                  <div
                    key={item.title}
                    className="flex gap-5 p-6 rounded-2xl bg-white border border-[var(--border)]"
                  >
                    <div className="w-10 h-10 rounded-full bg-[var(--navy-deep)] text-[var(--gold)] font-display font-semibold grid place-items-center shrink-0">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal>
              <h2 className="text-2xl lg:text-3xl font-semibold mb-6">Documents required</h2>
              <ul className="grid sm:grid-cols-2 gap-3">
                {service.documents.map((document) => (
                  <li key={document} className="flex items-center gap-3 text-foreground">
                    <FileText className="w-4 h-4 text-[var(--gold)]" /> {document}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal>
              <h2 className="text-2xl lg:text-3xl font-semibold mb-6">FAQs</h2>
              <Accordion type="single" collapsible>
                {service.faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`f-${index}`}
                    className="border-b border-[var(--border)]"
                  >
                    <AccordionTrigger className="text-left font-medium py-5 hover:text-[var(--gold)] hover:no-underline">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-5">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Reveal>
          </div>

          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-28 space-y-5">
              <Reveal>
                <div className="p-7 rounded-3xl gradient-navy text-white shadow-navy-glow">
                  <h3 className="font-semibold text-xl mb-3">Get started today</h3>
                  <p className="text-white/65 text-sm mb-5">
                    Free 20-minute consultation. No commitment.
                  </p>
                  <a
                    href="/contact"
                    className="block w-full text-center py-3 rounded-full bg-gradient-to-r from-[var(--gold)] to-[var(--gold-soft)] text-[var(--navy-deep)] font-semibold"
                  >
                    Book consultation
                  </a>
                </div>
              </Reveal>
              <Reveal delay={0.08}>
                <div className="p-7 rounded-3xl bg-white border border-[var(--border)]">
                  <h3 className="font-semibold mb-4">Related services</h3>
                  <ul className="space-y-3">
                    {related.map((relatedService) => (
                      <li key={relatedService.slug}>
                        <Link
                          href={`/services/${relatedService.slug}`}
                          className="flex items-center justify-between gap-3 text-sm group"
                        >
                          <span className="text-foreground group-hover:text-[var(--gold)] transition">
                            {relatedService.name}
                          </span>
                          <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-[var(--gold)] transition" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </aside>
        </div>
      </section>

      <CTABand />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: service.name,
            description: service.overview,
            provider: { "@type": "Organization", name: "Dhiren S Patel" },
          }),
        }}
      />
    </PageShell>
  );
}
