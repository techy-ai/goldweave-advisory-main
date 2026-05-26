import { createFileRoute, notFound, Link } from "@tanstack/react-router";
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

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => {
    const s = loaderData?.service;
    if (!s) return {};
    return {
      meta: [
        { title: `${s.name} — Dhiren S Patel` },
        { name: "description", content: s.short },
        { property: "og:title", content: `${s.name} — Dhiren S Patel` },
        { property: "og:description", content: s.short },
        { property: "og:url", content: `/services/${s.slug}` },
        { property: "og:type", content: "article" },
      ],
      links: [{ rel: "canonical", href: `/services/${s.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: s.name,
            description: s.overview,
            provider: { "@type": "Organization", name: "Dhiren S Patel" },
          }),
        },
      ],
    };
  },
  component: ServiceDetail,
  notFoundComponent: () => (
    <PageShell>
      <div className="min-h-[60vh] flex items-center justify-center text-center px-6 pt-32">
        <div>
          <h1 className="text-3xl font-semibold mb-3">Service not found</h1>
          <Link to="/services" className="text-[var(--gold)]">
            Back to services
          </Link>
        </div>
      </div>
    </PageShell>
  ),
});

function ServiceDetail() {
  const { service } = Route.useLoaderData() as { service: Service };
  const Icon = service.icon;
  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3);

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
                {service.benefits.map((b) => (
                  <div
                    key={b}
                    className="flex items-start gap-3 p-5 rounded-2xl bg-secondary/50 border border-[var(--border)]"
                  >
                    <span className="w-6 h-6 rounded-full bg-[var(--gold)] text-[var(--navy-deep)] grid place-items-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </span>
                    <span className="text-foreground">{b}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal>
              <h2 className="text-2xl lg:text-3xl font-semibold mb-6">Our process</h2>
              <div className="space-y-3">
                {service.process.map((p, i) => (
                  <div
                    key={p.title}
                    className="flex gap-5 p-6 rounded-2xl bg-white border border-[var(--border)]"
                  >
                    <div className="w-10 h-10 rounded-full bg-[var(--navy-deep)] text-[var(--gold)] font-display font-semibold grid place-items-center shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{p.title}</h3>
                      <p className="text-sm text-muted-foreground">{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal>
              <h2 className="text-2xl lg:text-3xl font-semibold mb-6">Documents required</h2>
              <ul className="grid sm:grid-cols-2 gap-3">
                {service.documents.map((d) => (
                  <li key={d} className="flex items-center gap-3 text-foreground">
                    <FileText className="w-4 h-4 text-[var(--gold)]" /> {d}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal>
              <h2 className="text-2xl lg:text-3xl font-semibold mb-6">FAQs</h2>
              <Accordion type="single" collapsible>
                {service.faqs.map((f, i) => (
                  <AccordionItem
                    key={i}
                    value={`f-${i}`}
                    className="border-b border-[var(--border)]"
                  >
                    <AccordionTrigger className="text-left font-medium py-5 hover:text-[var(--gold)] hover:no-underline">
                      {f.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-5">
                      {f.a}
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
                    {related.map((r) => (
                      <li key={r.slug}>
                        <Link
                          to="/services/$slug"
                          params={{ slug: r.slug }}
                          className="flex items-center justify-between gap-3 text-sm group"
                        >
                          <span className="text-foreground group-hover:text-[var(--gold)] transition">
                            {r.name}
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
    </PageShell>
  );
}
