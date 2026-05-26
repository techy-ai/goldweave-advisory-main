import { Phone, MessageCircle, ShieldCheck, TrendingUp, Sparkles } from "lucide-react";
import { site } from "@/data/site";
import { HeroImageMotion } from "@/components/sections/HeroImageMotion";

export function Hero() {
  return (
    <section className="relative gradient-navy overflow-hidden pt-35">
      <div className="absolute top-16 -right-40 w-[40rem] h-[40rem] rounded-full bg-[var(--gold)]/15 blur-3xl" />
      <div className="absolute -bottom-40 -left-32 w-[42rem] h-[42rem] rounded-full bg-[var(--navy-2)]/70 blur-3xl" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.05),transparent_50%)]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 pb-20 lg:pb-24 grid lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card text-xs text-white/85">
            <Sparkles className="w-3.5 h-3.5 text-[var(--gold)]" />
            Trusted by 1,200+ clients across Ahmedabad & Gujarat
          </div>

          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-7xl font-semibold text-white leading-[1.02] tracking-tight">
            Your trusted partner for <span className="gradient-gold-text">tax, compliance</span> &
            financial growth.
          </h1>

          <p className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed">
            From GST & income tax filing to mutual funds, insurance and virtual CFO advisory — one
            expert team, end-to-end.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href={site.phoneHref}
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-gradient-to-r from-[var(--gold)] to-[var(--gold-soft)] text-[var(--navy-deep)] font-semibold hover:shadow-gold-glow transition-shadow"
            >
              <Phone className="w-4 h-4" /> Call Now
            </a>
            <a
              href={site.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white/10 border border-white/15 text-white font-semibold hover:bg-white/15 transition"
            >
              <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
            </a>
          </div>

          <div className="mt-12 flex items-center gap-8 text-white/55 text-xs">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[var(--gold)]" /> 12+ years experience
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-[var(--gold)]" /> 4.9★ client rating
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 relative">
          <HeroImageMotion />

          <div className="absolute -left-4 lg:-left-10 top-10 glass-card rounded-2xl p-4 w-56 shadow-2xl">
            <div className="text-xs text-white/55 mb-1">Tax saved this year</div>
            <div className="text-2xl font-display font-semibold text-white">₹ 1,84,500</div>
            <div className="text-[11px] text-[var(--whatsapp)] mt-1">↑ 28% vs last year</div>
          </div>

          <div className="absolute -right-2 lg:-right-6 bottom-10 glass-card rounded-2xl p-4 w-60 shadow-2xl">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[var(--gold)] grid place-items-center text-[var(--navy-deep)]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-semibold text-white">100% Compliant</div>
                <div className="text-[11px] text-white/55">GST · ITR · TDS filed on time</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
