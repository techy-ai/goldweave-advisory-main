import { Phone, MessageCircle } from "lucide-react";
import { site } from "@/data/site";
import { Reveal } from "./Reveal";

export function CTABand() {
  return (
    <section className="py-24 px-6 lg:px-10">
      <Reveal className="mx-auto max-w-6xl rounded-[2.5rem] overflow-hidden gradient-navy shadow-navy-glow relative">
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-[var(--gold)]/20 blur-3xl" />
        <div className="absolute -bottom-32 -left-20 w-96 h-96 rounded-full bg-[var(--gold)]/10 blur-3xl" />
        <div className="relative px-8 sm:px-14 py-16 lg:py-20 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[var(--gold-soft)] mb-4">
              <span className="w-6 h-px bg-current" /> Let's talk
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-[1.1]">
              Ready to <span className="gradient-gold-text">simplify your finances</span>?
            </h2>
            <p className="mt-5 text-white/65 max-w-md">
              Book a free 20-minute consultation. We'll review your current tax & investment setup
              and share a clear action plan.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 lg:justify-end">
            <a
              href={site.phoneHref}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[var(--gold)] to-[var(--gold-soft)] text-[var(--navy-deep)] font-semibold hover:shadow-gold-glow transition-shadow"
            >
              <Phone className="w-4 h-4" /> Call Now
            </a>
            <a
              href={site.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white/10 border border-white/15 text-white font-semibold hover:bg-white/15 transition"
            >
              <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
