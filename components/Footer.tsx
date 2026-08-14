import Link from "next/link";
import { Instagram } from "lucide-react";
import { fullAddress, siteConfig } from "@/lib/site-config";

export default function Footer() {
  return (
    <footer className="bg-wine text-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-3">
        <div>
          <span className="font-display text-2xl italic text-gold-light">
            Luxee
          </span>

          <p className="mt-3 max-w-xs font-body text-sm leading-relaxed text-cream/60">
            {siteConfig.tagline}, on the first floor near Alanthara Bus Stop in
            Venjarammoodu.
          </p>
        </div>

        <div className="font-body text-sm text-cream/60">
          <p className="mb-3 font-semibold text-cream">Visit us</p>

          <p className="leading-relaxed">{fullAddress}</p>

          <a
            href={`tel:${siteConfig.phone}`}
            className="mt-3 inline-block hover:text-gold-light"
          >
            {siteConfig.phoneDisplay}
          </a>
        </div>

        <div className="font-body text-sm text-cream/60">
          <p className="mb-3 font-semibold text-cream">Hours</p>

          <ul className="space-y-1">
            {siteConfig.hours.map((h) => (
              <li key={h.day} className="flex justify-between gap-6">
                <span>{h.day}</span>
                <span>{h.time}</span>
              </li>
            ))}
          </ul>

          <nav className="mt-5 flex items-center gap-5">
            <Link href="/" className="hover:text-gold-light">
              Home
            </Link>

            <Link href="/about" className="hover:text-gold-light">
              About
            </Link>

            <Link href="/services" className="hover:text-gold-light">
              Services
            </Link>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/luxee_wellness_family_salon?igsh=ZGl4amVkbWFyaWxl&igsi=ZGl4amVkbWFyaWxl"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow Luxee on Instagram"
              className="transition-colors hover:text-gold-light"
            >
              <Instagram size={19} strokeWidth={1.8} />
            </a>
          </nav>
        </div>
      </div>

      <div className="border-t border-cream/10 px-6 py-5 text-center font-body text-xs text-cream/40">
        &copy; {new Date().getFullYear()} {siteConfig.fullName}. All rights
        reserved.
      </div>
    </footer>
  );
}