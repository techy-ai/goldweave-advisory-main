"use client";

import { useState } from "react";
import { toast } from "sonner";
import type { Service } from "@/data/services";
import { site } from "@/data/site";

type ContactService = Pick<Service, "slug" | "name">;

export function ContactForm({ services }: { services: ContactService[] }) {
  const [sending, setSending] = useState(false);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSending(true);
    const form = event.currentTarget;

    const formData = new FormData(form);
    const name = formData.get("name");
    const phone = formData.get("phone");
    const email = formData.get("email");
    const service = formData.get("service");
    const message = formData.get("message");

    // Create WhatsApp message
    const whatsappMessage = `*New Contact Form Submission*%0A%0AName: ${name}%0APhone: ${phone}%0AEmail: ${email}%0AService: ${service || "Not specified"}%0AMessage: ${message}`;
    const whatsappUrl = `https://wa.me/${site.whatsappHref.split("/").pop()}?text=${whatsappMessage}`;

    window.setTimeout(() => {
      setSending(false);
      form.reset();
      // Redirect to WhatsApp with the form data
      window.open(whatsappUrl, "_blank");
      toast.success("Opening WhatsApp to send your message...");
    }, 700);
  };

  return (
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
          {services.map((service) => (
            <option key={service.slug} value={service.slug}>
              {service.name}
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
        type="submit"
        disabled={sending}
        className="mt-2 inline-flex items-center justify-center gap-2 h-13 py-4 rounded-full bg-gradient-to-r from-[var(--gold)] to-[var(--gold-soft)] text-[var(--navy-deep)] font-semibold hover:shadow-gold-glow transition disabled:opacity-60"
      >
        {sending ? "Sending..." : "Send message"}
      </button>
    </form>
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
