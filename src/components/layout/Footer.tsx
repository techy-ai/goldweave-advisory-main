import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin, Linkedin, Instagram, Facebook } from "lucide-react";
import logo from "@/assets/logo.png";
import { site } from "@/data/site";
import { services } from "@/data/services";

export function Footer() {
  return (
    <footer className="bg-[var(--navy-deep)] text-white/80">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4 space-y-5">
          <div className="flex items-center gap-3">
            <Image src={logo} alt="" width={48} height={48} className="rounded-lg" />
            <div>
              <div className="font-display text-white font-semibold">{site.brand}</div>
              <div className="text-xs text-white/55">{site.tagline}</div>
            </div>
          </div>
          <p className="text-sm text-white/60 max-w-sm">
            Your trusted Ahmedabad-based partner for tax, compliance, investments and financial
            planning since 2014.
          </p>
          <form className="flex max-w-sm">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 h-12 px-4 rounded-l-full bg-white/5 border border-white/10 border-r-0 text-sm text-white placeholder:text-white/40 outline-none focus:border-[var(--gold)]/60"
            />
            <button
              type="button"
              className="h-12 px-5 rounded-r-full bg-[var(--gold)] text-[var(--navy-deep)] font-semibold text-sm"
            >
              Subscribe
            </button>
          </form>
        </div>

        <div className="lg:col-span-2">
          <h4 className="text-sm font-semibold text-white mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/about" className="hover:text-[var(--gold-soft)]">
                About
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-[var(--gold-soft)]">
                Services
              </Link>
            </li>
            <li>
              <Link href="/faq" className="hover:text-[var(--gold-soft)]">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-[var(--gold-soft)]">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h4 className="text-sm font-semibold text-white mb-4">Services</h4>
          <ul className="space-y-2 text-sm">
            {services.slice(0, 8).map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="hover:text-[var(--gold-soft)]">
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3 space-y-3 text-sm">
          <h4 className="text-sm font-semibold text-white mb-4">Contact</h4>
          <a href={site.phoneHref} className="flex items-start gap-3 hover:text-[var(--gold-soft)]">
            <Phone className="w-4 h-4 mt-0.5 text-[var(--gold)]" />
            {site.phone}
          </a>
          <a
            href={`mailto:${site.email}`}
            className="flex items-start gap-3 hover:text-[var(--gold-soft)]"
          >
            <Mail className="w-4 h-4 mt-0.5 text-[var(--gold)]" />
            {site.email}
          </a>
          <div className="flex items-start gap-3">
            <MapPin className="w-4 h-4 mt-0.5 text-[var(--gold)]" />
            <span>{site.address}</span>
          </div>
          <div className="flex gap-3 pt-3">
            {[Linkedin, Instagram, Facebook].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="social"
                className="w-9 h-9 grid place-items-center rounded-full bg-white/5 hover:bg-[var(--gold)] hover:text-[var(--navy-deep)] transition-colors"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <div>
            © {new Date().getFullYear()} {site.brand}. All rights reserved.
          </div>
          <div>Crafted for trust · Ahmedabad, India</div>
        </div>
      </div>
    </footer>
  );
}
