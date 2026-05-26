import { ChevronRight } from "lucide-react";

export function Breadcrumb({ items }: { items: { label: string; to?: string }[] }) {
  return (
    <nav className="flex items-center gap-2 text-xs text-white/55">
      {items.map((it, i) => (
        <div key={i} className="flex items-center gap-2">
          {it.to ? (
            <a href={it.to} className="hover:text-[var(--gold-soft)]">
              {it.label}
            </a>
          ) : (
            <span className="text-white/80">{it.label}</span>
          )}
          {i < items.length - 1 && <ChevronRight className="w-3 h-3" />}
        </div>
      ))}
    </nav>
  );
}
