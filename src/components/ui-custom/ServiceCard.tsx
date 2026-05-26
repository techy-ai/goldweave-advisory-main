import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Service } from "@/data/services";

export function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group relative block p-7 rounded-3xl bg-white border border-[var(--border)] hover:border-[var(--gold)]/40 hover:-translate-y-1 transition-all duration-500 shadow-sm hover:shadow-[0_30px_60px_-30px_rgba(7,27,59,0.25)]"
    >
      <div className="flex items-start justify-between mb-6">
        <span className="w-14 h-14 rounded-2xl grid place-items-center bg-gradient-to-br from-[var(--gold)]/15 to-[var(--gold)]/5 text-[var(--gold)] group-hover:bg-[var(--gold)] group-hover:text-[var(--navy-deep)] transition-colors">
          <Icon className="w-6 h-6" />
        </span>
        <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-[var(--gold)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
      </div>
      <h3 className="text-xl font-semibold text-foreground mb-2">{service.name}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{service.short}</p>
    </Link>
  );
}
