"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function CallNowButton({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="relative inline-flex items-center gap-2 px-5 h-11 rounded-full bg-gradient-to-r from-[var(--gold)] to-[var(--gold-soft)] text-[var(--navy-deep)] font-semibold text-sm hover:shadow-gold-glow transition-shadow overflow-hidden"
      aria-label="Call Now"
    >
      {/* subtle pulse animation behind the button content */}
      <motion.span
        aria-hidden
        initial={{ scale: 1, opacity: 0 }}
        animate={{ scale: [1, 1.8], opacity: [0.18, 0] }}
        transition={{ repeat: Infinity, repeatDelay: 5, duration: 1.2, ease: "easeOut" }}
        className="absolute inset-0 rounded-full bg-[var(--gold)]/20 pointer-events-none"
        style={{ transformOrigin: "center" }}
      />

      <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
    </Link>
  );
}
