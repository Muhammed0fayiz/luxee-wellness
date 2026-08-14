import type { Metadata } from "next";
import Image from "next/image";
import ServiceMenu from "@/components/ServiceMenu";
import { siteConfig } from "@/lib/site-config";
import { photos } from "@/lib/photos";

export const metadata: Metadata = {
  title: "Services & Price Menu",
  description:
    "Full service menu at Luxee Wellness Family Salon — haircuts, hair spa, Brazilian Botox, Nanoplastia, Kerasmooth, hydra facials, cleanup, D-tan, manicure and pedicure for gents and ladies.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="px-6 pb-10 pt-16 md:pt-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-5 font-body text-xs font-semibold uppercase tracking-wideish text-gold">
            The Menu
          </p>
          <h1 className="font-display text-4xl leading-tight text-ink md:text-5xl">
            Services for{" "}
            <span className="italic text-berry">gents & ladies.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl font-body text-base leading-relaxed text-ink/70">
            Call {siteConfig.phoneDisplay} for current pricing and to check
            appointment availability — treatment times vary, so we&apos;ll
            walk you through it on the phone.
          </p>
        </div>
      </section>

      <section className="px-6 pb-4">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-4 md:grid-cols-4">
          {[photos.facial, photos.manicure, photos.gents, photos.ladiesHair].map(
            (p) => (
              <div key={p.src} className="relative h-32 overflow-hidden md:h-44">
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  sizes="(min-width: 768px) 25vw, 50vw"
                  className="object-cover"
                />
              </div>
            )
          )}
        </div>
      </section>

      <section className="border-t border-ink/10 px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <ServiceMenu />
        </div>
      </section>

      <section className="border-t border-ink/10 bg-wine px-6 py-16 text-cream">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-2xl italic md:text-3xl">
            Not sure what you need?
          </h2>
          <p className="mt-3 font-body text-sm leading-relaxed text-cream/70">
            Tell us what your hair or skin has been doing lately and
            we&apos;ll suggest the right service — no pressure to book
            anything extra.
          </p>
          <a
            href={`tel:${siteConfig.phone}`}
            className="mt-6 inline-block border border-cream/40 px-8 py-3 font-body text-sm font-semibold transition-colors hover:border-gold-light hover:text-gold-light"
          >
            Call {siteConfig.phoneDisplay}
          </a>
        </div>
      </section>
    </>
  );
}
