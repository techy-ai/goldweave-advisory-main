import { Phone, MessageCircle } from "lucide-react";
import { site } from "@/data/site";

export function MobileStickyCTA() {
  return (
    <div className="lg:hidden fixed bottom-0 inset-x-0 z-30 p-3 bg-[var(--navy-deep)]/95 backdrop-blur border-t border-white/10 flex gap-2">
      <a
        href={site.phoneHref}
        className="flex-1 inline-flex items-center justify-center gap-2 h-12 rounded-full bg-gradient-to-r from-[var(--gold)] to-[var(--gold-soft)] text-[var(--navy-deep)] font-semibold text-sm"
      >
        <Phone className="w-4 h-4" /> Call Now
      </a>
      <a
        href={site.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 inline-flex items-center justify-center gap-2 h-12 rounded-full bg-[var(--whatsapp)] text-white font-semibold text-sm"
      >
        <MessageCircle className="w-4 h-4" /> WhatsApp
      </a>
    </div>
  );
}
