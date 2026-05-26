import { PageShell } from "@/components/layout/PageShell";
import { PageHero } from "@/components/layout/PageHero";
import { CTABand } from "@/components/ui-custom/CTABand";
import { FaqList } from "@/components/faq/FaqList";

export const metadata = {
  title: "FAQ — Tax, GST, Investments & More | Dhiren S Patel",
  description:
    "Frequently asked questions about GST, income tax, mutual funds, insurance and business advisory — answered by Dhiren S Patel.",
  openGraph: {
    title: "FAQ — Dhiren S Patel",
    description: "Honest, plain-language answers on tax, compliance and investments.",
    url: "/faq",
  },
  alternates: {
    canonical: "/faq",
  },
};

export default function FaqPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Knowledge"
        title={
          <>
            Questions, <span className="gradient-gold-text">clearly answered</span>.
          </>
        }
        subtitle="Browse by category or search the topic you need help with."
        crumbs={[{ label: "Home", to: "/" }, { label: "FAQ" }]}
      />
      <FaqList />
      <CTABand />
    </PageShell>
  );
}
