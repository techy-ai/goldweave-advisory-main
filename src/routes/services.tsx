import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/layout/PageShell";
import { PageHero } from "@/components/layout/PageHero";
import { ServiceCard } from "@/components/ui-custom/ServiceCard";
import { Reveal } from "@/components/ui-custom/Reveal";
import { CTABand } from "@/components/ui-custom/CTABand";
import { services } from "@/data/services";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: "Services — GST, ITR, Mutual Funds & Advisory | Dhiren S Patel" },
      {
        name: "description",
        content:
          "End-to-end tax, compliance, investment and business advisory services in Ahmedabad. 12 specialised services for individuals, SMEs and startups.",
      },
      { property: "og:title", content: "Our Services — Dhiren S Patel" },
      {
        property: "og:description",
        content:
          "GST, ITR, TDS, Mutual Funds, Insurance, Business Registration, Bookkeeping and Virtual CFO advisory.",
      },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
});

function ServicesPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Services"
        title={
          <>
            Specialist services that <span className="gradient-gold-text">cover every need</span>.
          </>
        }
        subtitle="From your first GST registration to your virtual CFO setup — one team, twelve specialised practices."
        crumbs={[{ label: "Home", to: "/" }, { label: "Services" }]}
      />
      <section className="py-24 lg:py-32 px-6 lg:px-10">
        <div className="mx-auto max-w-7xl grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.03}>
              <ServiceCard service={s} />
            </Reveal>
          ))}
        </div>
      </section>
      <CTABand />
    </PageShell>
  );
}
