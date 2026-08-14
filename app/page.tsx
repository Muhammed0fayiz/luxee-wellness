import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { serviceMenus } from "@/lib/services-data";
import { fullAddress, siteConfig } from "@/lib/site-config";
import { photos } from "@/lib/photos";

export const metadata: Metadata = {
  title: `${siteConfig.fullName} | Salon in Venjarammoodu, Nellanad`,
  description: siteConfig.description,
};

const highlights = [
  "Gents & ladies, under one roof",
  "Hydra facials, cleanup & D-tan",
  "Brazilian Botox, Nanoplastia & Kerasmooth",
];

export default function HomePage() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative h-[520px] w-full overflow-hidden md:h-[750px]">
        <Image
          src="/images/hero.jpg"
          alt="Luxee Wellness Salon"
          fill
          priority
          sizes="100vw"
          className="object-cover transition-transform duration-1000 hover:scale-105"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/35 transition-colors duration-500 hover:bg-black/30" />

        {/* Hero Content */}
        <div className="absolute inset-0 flex items-start">
          <div className="mx-auto w-full max-w-7xl px-6 pt-8 md:px-12 md:pt-10 lg:px-16 lg:pt-12">
            <div className="max-w-lg text-cream">
            
<h1 className="font-display text-4xl leading-[1.05] text-cream transition-all duration-500 hover:text-gold hover:tracking-wide md:text-5xl lg:text-6xl">
  The Beauty
  <br />
  You Deserve
</h1>

              {/* Decorative Line */}
              <div className="my-5 flex items-center gap-3">
                <span className="h-px w-16 bg-gold-light transition-all duration-500 hover:w-24 md:w-24" />
                <span className="text-sm text-gold-light transition-transform duration-500 hover:rotate-180">
                  ✦
                </span>
                <span className="h-px w-16 bg-gold-light transition-all duration-500 hover:w-24 md:w-24" />
              </div>

              <p className="max-w-md font-body text-xs leading-6 text-cream/90 md:text-sm md:leading-7">
                At {siteConfig.fullName}, we believe beauty is more than just
                a look — it&apos;s a feeling. Our expert team is dedicated to
                bringing out your best with personalized care, premium
                services, and a relaxing experience.
              </p>

              {/* Hero Buttons */}
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="inline-flex items-center justify-center gap-2 bg-berry px-7 py-3 font-body text-xs font-semibold text-cream shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-berry-deep hover:shadow-xl"
                >
                  <span className="text-base transition-transform duration-300 group-hover:rotate-12">
                    ▣
                  </span>
                  Book Now
                </a>

                <Link
                  href="/services"
                  className="inline-flex items-center justify-center border border-cream/70 px-7 py-3 font-body text-xs font-semibold text-cream transition-all duration-300 hover:-translate-y-1 hover:border-gold-light hover:bg-white/10 hover:text-gold-light hover:shadow-lg"
                >
                  View Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= INTRO SECTION ================= */}
      <section className="grid gap-0 md:grid-cols-2">
        {/* Text */}
        <div className="flex flex-col justify-center px-6 py-16 md:px-14 md:py-24">
          <p className="mb-5 font-body text-xs font-semibold uppercase tracking-wideish text-gold transition-all duration-300 hover:tracking-[0.2em]">
            Venjarammoodu &middot; Nellanad &middot; Kerala
          </p>

          <h2 className="font-display text-5xl leading-[1.1] text-ink transition-all duration-500 hover:tracking-wide md:text-6xl">
            Your beauty,
            <br />
            <span className="italic text-berry transition-colors duration-300 hover:text-gold">
              your way.
            </span>
          </h2>

          <p className="mt-6 max-w-md font-body text-base leading-relaxed text-ink/70">
            From a simple haircut to a complete beauty transformation —
            {siteConfig.fullName} brings quality hair and beauty care for
            gents, ladies and families, just a short walk from Alanthara Bus
            Stop.
          </p>

          {/* Buttons */}
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href={`tel:${siteConfig.phone}`}
              className="bg-berry px-8 py-3 text-center font-body text-sm font-semibold text-cream transition-all duration-300 hover:-translate-y-1 hover:bg-berry-deep hover:shadow-xl"
            >
              Book Now
            </a>

            <Link
              href="/services"
              className="border border-ink px-8 py-3 text-center font-body text-sm font-semibold text-ink transition-all duration-300 hover:-translate-y-1 hover:border-berry hover:bg-berry hover:text-cream hover:shadow-lg"
            >
              View the full menu
            </Link>
          </div>

          {/* Highlights */}
          <ul className="mt-14 flex flex-col gap-3 font-body text-sm text-ink/70">
            {highlights.map((h) => (
              <li
                key={h}
                className="group flex items-center gap-3 transition-all duration-300 hover:translate-x-2 hover:text-berry"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-gold transition-all duration-300 group-hover:scale-150 group-hover:bg-berry" />
                {h}
              </li>
            ))}
          </ul>
        </div>

        {/* Side Image */}
        <div className="group relative h-[420px] overflow-hidden md:h-full md:min-h-[650px]">
          <Image
            src="/images/sideimage.jpg"
            alt="Luxee Wellness Salon"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover transition-transform duration-1000 group-hover:scale-105"
          />

          {/* Image Overlay */}
          <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10" />
        </div>
      </section>

      {/* ================= CATEGORY PREVIEW ================= */}
      <section className="border-t border-ink/10 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          {/* Section Heading */}
          <div className="mb-14 text-center">
            <p className="mb-3 font-body text-xs font-semibold uppercase tracking-wideish text-gold transition-all duration-300 hover:tracking-[0.2em]">
              The Menu
            </p>

            <h2 className="font-display text-3xl italic text-ink transition-all duration-500 hover:text-berry md:text-4xl">
              Two menus, one salon
            </h2>
          </div>

          {/* Menu Cards */}
          <div className="grid gap-8 md:grid-cols-2">
            {serviceMenus.map((menu, i) => (
              <div
                key={menu.id}
                className="group cursor-pointer transition-all duration-500 hover:-translate-y-2"
              >
                {/* Menu Image */}
                <div className="duotone relative mb-6 h-56 overflow-hidden shadow-sm transition-all duration-500 group-hover:shadow-2xl">
                  <Image
                    src={
                      (i === 0 ? photos.gents : photos.ladiesHair).src
                    }
                    alt={
                      (i === 0 ? photos.gents : photos.ladiesHair).alt
                    }
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/20" />

                  {/* Menu Name */}
                  <span className="absolute bottom-4 left-4 z-10 font-display text-2xl italic text-cream drop-shadow-md transition-all duration-500 group-hover:translate-x-2 group-hover:text-gold-light">
                    {menu.label}
                  </span>
                </div>

                {/* Intro */}
                <p className="font-body text-sm text-ink/70 transition-colors duration-300 group-hover:text-ink">
                  {menu.intro}
                </p>

                {/* Services */}
                <ul className="mt-5 space-y-2 font-body text-sm text-ink/85">
                  {menu.groups.slice(0, 3).map((g) => (
                    <li
                      key={g.id}
                      className="flex justify-between gap-4 border-b border-ink/10 pb-2 transition-all duration-300 hover:border-berry hover:pl-2 hover:text-berry"
                    >
                      <span>{g.title}</span>

                      <span className="text-ink/40 transition-colors duration-300 hover:text-berry">
                        {g.items.length} service
                        {g.items.length > 1 ? "s" : ""}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Menu Link */}
                <Link
                  href="/services"
                  className="mt-5 inline-block font-body text-sm font-semibold text-berry transition-all duration-300 hover:translate-x-2 hover:text-berry-deep hover:underline"
                >
                  See the {menu.label.toLowerCase()} menu &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= LOCATION / CTA ================= */}
      <section className="bg-wine px-6 py-20 text-cream transition-colors duration-500 hover:bg-wine/95">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-8 text-center">
          {/* Small Heading */}
          <p className="font-body text-xs font-semibold uppercase tracking-wideish text-gold-light transition-all duration-300 hover:tracking-[0.2em]">
            Drop in, or call ahead
          </p>

          {/* Address */}
          <h2 className="font-display text-3xl italic transition-all duration-500 hover:text-gold-light md:text-4xl">
            {fullAddress}
          </h2>

          {/* Call Button */}
          <a
            href={`tel:${siteConfig.phone}`}
            className="border border-cream/40 px-8 py-3 font-body text-sm font-semibold transition-all duration-300 hover:-translate-y-1 hover:border-gold-light hover:bg-gold-light/10 hover:text-gold-light hover:shadow-xl"
          >
            Call {siteConfig.phoneDisplay}
          </a>
        </div>
      </section>
    </>
  );
}