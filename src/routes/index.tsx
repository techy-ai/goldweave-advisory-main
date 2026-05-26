import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/layout/PageShell";
import { Hero } from "@/components/sections/Hero";
import { TrustMetrics } from "@/components/sections/TrustMetrics";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { Testimonials } from "@/components/sections/Testimonials";
import { FaqPreview } from "@/components/sections/FaqPreview";
import { CTABand } from "@/components/ui-custom/CTABand";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Dhiren S Patel — Tax Consultant & Finance Advisor, Ahmedabad" },
      {
        name: "description",
        content:
          "Trusted Ahmedabad-based tax & finance advisor. GST, ITR, mutual funds, insurance and business advisory for individuals, SMEs and startups.",
      },
      { property: "og:title", content: "Dhiren S Patel — Tax & Finance Advisor" },
      {
        property: "og:description",
        content:
          "GST, Income Tax, Investments, Insurance and CFO advisory. 1,200+ clients in Gujarat.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function Index() {
  return (
    <PageShell>
      <Hero />
      <TrustMetrics />
      <ServicesGrid limit={6} />
      <WhyChooseUs />
      <ProcessTimeline />
      <Testimonials />
      <FaqPreview />
      <CTABand />
    </PageShell>
  );
}
