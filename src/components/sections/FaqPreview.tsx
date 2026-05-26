import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeading } from "@/components/ui-custom/SectionHeading";
import { Reveal } from "@/components/ui-custom/Reveal";
import { faqs } from "@/data/faqs";

export function FaqPreview() {
  const list = faqs.slice(0, 6);
  return (
    <section className="py-24 lg:py-32 px-6 lg:px-10 bg-background">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="FAQ" center title="Answers to common questions." />
        <Reveal className="mt-14">
          <Accordion type="single" collapsible className="w-full">
            {list.map((f, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border-b border-[var(--border)]"
              >
                <AccordionTrigger className="text-left text-base font-medium py-5 hover:text-[var(--gold)] hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
        <div className="mt-10 text-center">
          <Link
            href="/faq"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--navy-deep)] hover:text-[var(--gold)] transition"
          >
            See all FAQs <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
