import { PageShell } from "@/components/layout/PageShell";
import { PageHero } from "@/components/layout/PageHero";
import { Reveal } from "@/components/ui-custom/Reveal";
import { site } from "@/data/site";
import { services } from "@/data/services";
import { Phone, MessageCircle, Mail, MapPin, Clock } from "lucide-react";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata = {
  title: "Contact — Dhiren S Patel, Ahmedabad",
  description:
    "Talk to Dhiren S Patel — tax & finance advisor in Ahmedabad. Free 20-minute consultation. Call, WhatsApp or send a message.",
  openGraph: {
    title: "Contact — Dhiren S Patel",
    description: "Reach our Ahmedabad office. Free consultation, no commitment.",
    url: "/contact",
  },
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Let's connect for your <span className="gradient-gold-text">financial success</span>.
          </>
        }
        subtitle="Call, WhatsApp or write to us. We respond to every enquiry within one business day."
        crumbs={[{ label: "Home", to: "/" }, { label: "Contact" }]}
      />

      <section className="py-16 px-6 lg:px-10">
        <div className="mx-auto max-w-7xl grid sm:grid-cols-3 gap-5">
          {[
            { icon: Phone, label: "Call us", value: site.phone, href: site.phoneHref },
            { icon: MessageCircle, label: "WhatsApp", value: site.phone, href: site.whatsappHref },
            { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
          ].map((card, index) => (
            <Reveal key={card.label} delay={index * 0.05}>
              <a
                href={card.href}
                target={card.label === "WhatsApp" ? "_blank" : undefined}
                rel={card.label === "WhatsApp" ? "noopener noreferrer" : undefined}
                className="block p-7 rounded-3xl bg-white border border-[var(--border)] hover:border-[var(--gold)]/40 hover:-translate-y-1 transition-all duration-500"
              >
                <span className="w-12 h-12 rounded-2xl grid place-items-center bg-[var(--gold)]/10 text-[var(--gold)] mb-5">
                  <card.icon className="w-5 h-5" />
                </span>
                <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
                  {card.label}
                </div>
                <div className="font-semibold text-foreground">{card.value}</div>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-16 lg:py-24 px-6 lg:px-10">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-10">
          <Reveal>
            <div className="p-8 lg:p-10 rounded-3xl bg-white border border-[var(--border)]">
              <h2 className="text-2xl lg:text-3xl font-semibold mb-2">Send us a message</h2>
              <p className="text-muted-foreground mb-8">
                Fill in your details and we'll get back within 24 hours.
              </p>
              <ContactForm services={services.map(({ slug, name }) => ({ slug, name }))} />
            </div>
          </Reveal>

          <Reveal delay={0.1} className="space-y-5">
            <div className="rounded-3xl overflow-hidden border border-[var(--border)] shadow-sm h-80">
              <iframe
                title="Office location"
                src="https://www.google.com/maps?q=Ahmedabad,Gujarat,India&output=embed"
                className="w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="p-7 rounded-3xl bg-white border border-[var(--border)]">
              <div className="flex items-start gap-4">
                <span className="w-12 h-12 rounded-2xl grid place-items-center bg-[var(--navy-deep)] text-[var(--gold)] shrink-0">
                  <MapPin className="w-5 h-5" />
                </span>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
                    Office
                  </div>
                  <div className="font-semibold text-foreground">{site.address}</div>
                </div>
              </div>
            </div>
            <div className="p-7 rounded-3xl gradient-navy text-white shadow-navy-glow">
              <div className="flex items-start gap-4">
                <span className="w-12 h-12 rounded-2xl grid place-items-center bg-[var(--gold)] text-[var(--navy-deep)] shrink-0">
                  <Clock className="w-5 h-5" />
                </span>
                <div>
                  <div className="text-xs uppercase tracking-wider text-[var(--gold-soft)] mb-1">
                    Business hours
                  </div>
                  <div className="font-semibold">{site.hours}</div>
                  <div className="text-white/55 text-sm mt-1">Sunday — by appointment</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Dhiren S Patel — Tax Consultant & Finance Advisor",
            telephone: "+91-9876543210",
            email: "contact@dhirenspatel.in",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Abode Atharav",
              addressLocality: "Ahmedabad",
              addressRegion: "Gujarat",
              addressCountry: "IN",
            },
            openingHours: "Mo-Sa 10:00-19:00",
          }),
        }}
      />
    </PageShell>
  );
}
