"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs, faqCategories } from "@/data/faqs";
import { Reveal } from "@/components/ui-custom/Reveal";

export function FaqList() {
  const [active, setActive] = useState<string>("All");
  const [q, setQ] = useState("");

  const list = useMemo(
    () =>
      faqs.filter((faq) => {
        const categoryMatch = active === "All" || faq.category === active;
        const query = q.trim().toLowerCase();
        const textMatch =
          query === "" ||
          faq.q.toLowerCase().includes(query) ||
          faq.a.toLowerCase().includes(query);
        return categoryMatch && textMatch;
      }),
    [active, q],
  );

  return (
    <section className="py-20 lg:py-28 px-6 lg:px-10">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-12 gap-10">
        <aside className="lg:col-span-3">
          <div className="lg:sticky lg:top-28 space-y-6">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                value={q}
                onChange={(event) => setQ(event.target.value)}
                placeholder="Search FAQs"
                className="w-full h-12 pl-11 pr-4 rounded-full bg-white border border-[var(--border)] text-sm outline-none focus:border-[var(--gold)]/60"
              />
            </div>
            <div className="space-y-1">
              {(["All", ...faqCategories] as const).map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActive(category)}
                  className={`w-full text-left px-4 py-3 rounded-xl text-sm transition ${
                    active === category
                      ? "bg-[var(--navy-deep)] text-[var(--gold)]"
                      : "hover:bg-secondary text-foreground"
                  }`}
                >
                  {category}
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
                {list.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`f-${index}`}
                    className="rounded-2xl border border-[var(--border)] bg-white px-6 data-[state=open]:border-[var(--gold)]/40"
                  >
                    <AccordionTrigger className="text-left font-medium py-5 hover:text-[var(--gold)] hover:no-underline">
                      <div>
                        <div className="text-xs uppercase tracking-wider text-[var(--gold)] mb-1">
                          {faq.category}
                        </div>
                        {faq.q}
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
