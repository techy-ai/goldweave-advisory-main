import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";
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
import { faqs, faqCategories } from "@/data/faqs";

export const Route = createFileRoute("/faq")({
  component: FaqPage,
  head: () => ({
    meta: [
      { title: "FAQ — Tax, GST, Investments & More | Dhiren S Patel" },
      {
        name: "description",
        content:
          "Frequently asked questions about GST, income tax, mutual funds, insurance and business advisory — answered by Dhiren S Patel.",
      },
      { property: "og:title", content: "FAQ — Dhiren S Patel" },
      {
        property: "og:description",
        content: "Honest, plain-language answers on tax, compliance and investments.",
      },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
});

function FaqPage() {
  const [active, setActive] = useState<string>("All");
  const [q, setQ] = useState("");

  const list = useMemo(() => {
    return faqs.filter((f) => {
      const matchCat = active === "All" || f.category === active;
      const matchQ =
        q.trim() === "" ||
        f.q.toLowerCase().includes(q.toLowerCase()) ||
        f.a.toLowerCase().includes(q.toLowerCase());
      return matchCat && matchQ;
    });
  }, [active, q]);

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

      <section className="py-20 lg:py-28 px-6 lg:px-10">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-12 gap-10">
          <aside className="lg:col-span-3">
            <div className="lg:sticky lg:top-28 space-y-6">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  placeholder="Search FAQs"
                  className="w-full h-12 pl-11 pr-4 rounded-full bg-white border border-[var(--border)] text-sm outline-none focus:border-[var(--gold)]/60"
                />
              </div>
              <div className="space-y-1">
                {(["All", ...faqCategories] as const).map((c) => (
                  <button
                    key={c}
                    onClick={() => setActive(c)}
                    className={`w-full text-left px-4 py-3 rounded-xl text-sm transition ${
                      active === c
                        ? "bg-[var(--navy-deep)] text-[var(--gold)]"
                        : "hover:bg-secondary text-foreground"
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          <div className="lg:col-span-9">
            <Reveal>
              {list.length === 0 ? (
                <div className="p-12 text-center text-muted-foreground rounded-3xl border border-[var(--border)]">
                  No matching questions. Try a different keyword.
                </div>
              ) : (
                <Accordion type="single" collapsible className="space-y-3">
                  {list.map((f, i) => (
                    <AccordionItem
                      key={i}
                      value={`f-${i}`}
                      className="rounded-2xl border border-[var(--border)] bg-white px-6 data-[state=open]:border-[var(--gold)]/40"
                    >
                      <AccordionTrigger className="text-left font-medium py-5 hover:text-[var(--gold)] hover:no-underline">
                        <div>
                          <div className="text-xs uppercase tracking-wider text-[var(--gold)] mb-1">
                            {f.category}
                          </div>
                          {f.q}
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                        {f.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              )}
            </Reveal>
          </div>
        </div>
      </section>

      <CTABand />
    </PageShell>
  );
}
