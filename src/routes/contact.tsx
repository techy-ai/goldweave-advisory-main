import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from "lucide-react";
import { toast } from "sonner";
import { PageShell } from "@/components/layout/PageShell";
import { PageHero } from "@/components/layout/PageHero";
import { Reveal } from "@/components/ui-custom/Reveal";
import { site } from "@/data/site";
import { services } from "@/data/services";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact — Dhiren S Patel, Ahmedabad" },
      {
        name: "description",
        content:
          "Talk to Dhiren S Patel — tax & finance advisor in Ahmedabad. Free 20-minute consultation. Call, WhatsApp or send a message.",
      },
      { property: "og:title", content: "Contact — Dhiren S Patel" },
      {
        property: "og:description",
        content: "Reach our Ahmedabad office. Free consultation, no commitment.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
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
      },
    ],
  }),
});

function ContactPage() {
  const [sending, setSending] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Thanks! We'll be in touch within 24 hours.");
    }, 700);
  };

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
          ].map((c, i) => (
            <Reveal key={c.label} delay={i * 0.05}>
              <a
                href={c.href}
                target={c.label === "WhatsApp" ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="block p-7 rounded-3xl bg-white border border-[var(--border)] hover:border-[var(--gold)]/40 hover:-translate-y-1 transition-all duration-500"
              >
                <span className="w-12 h-12 rounded-2xl grid place-items-center bg-[var(--gold)]/10 text-[var(--gold)] mb-5">
                  <c.icon className="w-5 h-5" />
                </span>
                <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
                  {c.label}
                </div>
                <div className="font-semibold text-foreground">{c.value}</div>
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
              <form onSubmit={onSubmit} className="grid gap-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label="Your name" name="name" required />
                  <Field label="Phone" name="phone" type="tel" required />
                </div>
                <Field label="Email" name="email" type="email" required />
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                    Service interested in
                  </label>
                  <select
                    name="service"
                    className="w-full h-12 px-4 rounded-xl bg-secondary/50 border border-[var(--border)] text-sm outline-none focus:border-[var(--gold)]/60"
                  >
                    <option value="">Choose a service</option>
                    {services.map((s) => (
                      <option key={s.slug} value={s.slug}>
                        {s.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    className="w-full p-4 rounded-xl bg-secondary/50 border border-[var(--border)] text-sm outline-none focus:border-[var(--gold)]/60 resize-none"
                  />
                </div>
                <button
                  disabled={sending}
                  className="mt-2 inline-flex items-center justify-center gap-2 h-13 py-4 rounded-full bg-gradient-to-r from-[var(--gold)] to-[var(--gold-soft)] text-[var(--navy-deep)] font-semibold hover:shadow-gold-glow transition disabled:opacity-60"
                >
                  <Send className="w-4 h-4" /> {sending ? "Sending..." : "Send message"}
                </button>
              </form>
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
    </PageShell>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
        {label}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full h-12 px-4 rounded-xl bg-secondary/50 border border-[var(--border)] text-sm outline-none focus:border-[var(--gold)]/60"
      />
    </div>
  );
}
