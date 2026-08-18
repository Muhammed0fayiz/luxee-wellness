import Link from "next/link";
import { fullAddress, siteConfig } from "@/lib/site-config";

export default function Footer() {
  const mapUrl =
    "https://www.google.com/maps/place/Luxee+Wellness+Family+Salon/@8.6899782,76.9036038,520m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3b05c10009bc258f:0x348b2664350eb97e!8m2!3d8.6899782!4d76.9061787!16s%2Fg%2F11w93z7pf_?entry=ttu";

  return (
    <footer className="bg-wine text-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-3">
        <div>
          <span className="font-display text-2xl italic text-gold-light">
            Luxee
          </span>

          <p className="mt-3 max-w-xs font-body text-sm leading-relaxed text-cream/60">
            {siteConfig.tagline}, on the first floor near Alanthara Bus Stop in
            Venjaramoodu.
          </p>
        </div>

        <div className="font-body text-sm text-cream/60">
          <p className="mb-3 font-semibold text-cream">Visit us</p>

          <p className="leading-relaxed">{fullAddress}</p>

          {/* Google Maps Location */}
          <a
            href={mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-2 text-gold-light transition-colors hover:text-cream"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="17"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
              <circle cx="12" cy="10" r="3" />
            </svg>

            <span>View on Google Maps</span>
          </a>

        <a
  href={`tel:${siteConfig.phone}`}
  className="mt-3 block hover:text-gold-light"
>
  {siteConfig.phoneDisplay}
</a>

<a
  href="mailto:info@luxeewellness.in"
  className="mt-2 block hover:text-gold-light"
>
  info@luxeewellness.in
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="19"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
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