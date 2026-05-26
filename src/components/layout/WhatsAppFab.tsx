import { MessageCircle } from "lucide-react";
import { site } from "@/data/site";

export function WhatsAppFab() {
  return (
    <a
      href={site.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-[var(--whatsapp)] text-white grid place-items-center shadow-lg animate-pulse-ring hover:scale-110 transition-transform hidden lg:grid"    >
      <MessageCircle className="w-6 h-6" fill="currentColor" />
    </a>
  );
}
