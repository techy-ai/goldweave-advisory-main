import { PageShell } from "@/components/layout/PageShell";
import { Hero } from "@/components/sections/Hero";
import { TrustMetrics } from "@/components/sections/TrustMetrics";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { Testimonials } from "@/components/sections/Testimonials";
import { FaqPreview } from "@/components/sections/FaqPreview";
import { CTABand } from "@/components/ui-custom/CTABand";

export const metadata = {
  title: "Dhiren S Patel — Tax Consultant & Finance Advisor, Ahmedabad",
  description:
    "Trusted Ahmedabad-based tax & finance advisor. GST, ITR, mutual funds, insurance and business advisory for individuals, SMEs and startups.",
  openGraph: {
    title: "Dhiren S Patel — Tax Consultant & Finance Advisor",
    description:
      "GST, Income Tax, Investments, Insurance and CFO advisory. 1,200+ clients in Gujarat.",
    url: "/",
  },
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
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
