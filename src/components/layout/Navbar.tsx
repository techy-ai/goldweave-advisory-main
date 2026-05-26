"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, ChevronDown, MessageCircle } from "lucide-react";
import logo from "@/assets/logo.png";
import { site } from "@/data/site";
import { services } from "@/data/services";
import { CallNowButton } from "./CallNowButton";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  const onDark = scrolled || open;

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname?.startsWith(href));

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${onDark
          ? "bg-[var(--navy-deep)]/85 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent"
        }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <Image src={logo} alt="Dhiren S Patel" width={44} height={44} className="rounded-lg" />
          <div className="hidden sm:block leading-tight">
            <div className="font-display text-base font-semibold text-white tracking-tight">
              {site.brand}
            </div>
            <div className="text-[11px] text-white/60">{site.tagline}</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => {
            const isServices = l.to === "/services";
            return (
              <div
                key={l.to}
                className="relative"
                onMouseEnter={() => isServices && setServicesOpen(true)}
                onMouseLeave={() => isServices && setServicesOpen(false)}
              >
                <Link
                  href={l.to}
                  className={`relative px-4 py-2 text-[15px] ${isActive(l.to) ? "text-[var(--gold)]" : "text-white/80"
                    } hover:text-[var(--gold-soft)] transition-colors group inline-flex items-center gap-1`}
                >
                  {l.label}
                  {isServices && <ChevronDown className="w-3.5 h-3.5 opacity-70" />}
                  <span className="absolute left-4 right-4 -bottom-0.5 h-px bg-[var(--gold)] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </Link>
                <AnimatePresence>
                  {isServices && servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.18 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[640px] grid grid-cols-2 gap-1 p-3 rounded-2xl bg-[var(--navy-2)]/95 backdrop-blur-xl border border-white/10 shadow-2xl"
                    >
                      {services.map((s) => (
                        <Link
                          key={s.slug}
                          href={`/services/${s.slug}`}
                          className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group"
                        >
                          <span className="mt-0.5 w-8 h-8 rounded-lg grid place-items-center bg-[var(--gold)]/10 text-[var(--gold)]">
                            <s.icon className="w-4 h-4" />
                          </span>
                          <span>
                            <span className="block text-sm text-white group-hover:text-[var(--gold-soft)] transition-colors">
                              {s.name}
                            </span>
                            <span className="block text-xs text-white/55 line-clamp-1">
                              {s.short}
                            </span>
                          </span>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <CallNowButton href={site.phoneHref}>
            <Phone className="w-4 h-4" /> Call Now
          </CallNowButton>
          <Link
            href={site.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center gap-2 px-5 h-11 rounded-full bg-[#25D366] text-white font-semibold text-sm hover:bg-[#20BA5A] transition-colors"
            aria-label="Chat on WhatsApp"
          >
            <MessageCircle className="w-4 h-4" /> WhatsApp
          </Link>
        </div>

        <button
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden w-11 h-11 grid place-items-center rounded-xl bg-white/10 text-white"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="lg:hidden border-t border-white/10 bg-[var(--navy-deep)]"
          >
            <div className="px-6 py-6 flex flex-col gap-1">
              {links.map((l) => (
                <Link
                  key={l.to}
                  href={l.to}
                  className={`py-3 text-base border-b border-white/5 ${isActive(l.to) ? "text-[var(--gold)]" : "text-white/90"}`}
                >
                  {l.label}
                </Link>
              ))}
              <a
                href={site.phoneHref}
                className="mt-4 inline-flex items-center justify-center gap-2 h-12 rounded-full bg-gradient-to-r from-[var(--gold)] to-[var(--gold-soft)] text-[var(--navy-deep)] font-semibold"
              >
                <Phone className="w-4 h-4" /> Call {site.phone}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
