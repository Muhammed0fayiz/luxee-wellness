import Image from "next/image";
import type { Metadata } from "next";
import { fullAddress, siteConfig } from "@/lib/site-config";
import { photos } from "@/lib/photos";

export const metadata: Metadata = {
  title: "About Us",
  description: `Get to know ${siteConfig.fullName}, a gents and ladies salon in Venjarammoodu, Nellanad offering hair, skin and wellness services for the whole family.`,
};

const rows = [
{
  photo: photos.interior,
  title: "A place for everyone",
  body: "From everyday haircuts to special occasions, we welcome gents, ladies and families with comfortable, personal salon care under one roof.",
},
  {
    photo: photos.ladiesHair,
    title: "Trained for the tricky stuff",
    body: "Our stylists keep up with newer chemical services — Brazilian Botox, Nanoplastia, Kerasmooth, Taninoplastia — alongside the everyday cut and spa.",
  },
  {
    photo: photos.facial,
    title: "Honest about your skin and hair",
    body: "We'll tell you what a treatment can and can't do before you sit in the chair, not after.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="px-6 pb-16 pt-16 md:pt-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-5 font-body text-xs font-semibold uppercase tracking-wideish text-gold">
            About Luxee Wellness
          </p>
          <h1 className="font-display text-4xl leading-tight text-ink md:text-5xl">
            A neighbourhood salon that{" "}
            <span className="italic text-berry">grew up.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl font-body text-base leading-relaxed text-ink/70">
            Luxee Wellness Family Salon started as a simple idea: Venjarammoodu
            didn&apos;t need another salon that only did half the job. So we
            built one place, near Alanthara Bus Stop, where a father can get a
            beard trim while his daughter is in for a hydra facial, and both
            leave happy.
          </p>
        </div>
      </section>

      {rows.map((row, i) => (
        <section
          key={row.title}
          className={`grid items-center gap-0 border-t border-ink/10 md:grid-cols-2 ${
            i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
          }`}
        >
          <div className="relative h-72 md:h-[420px]">
            <Image
              src={row.photo.src}
              alt={row.photo.alt}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="px-6 py-14 md:px-16">
            <h2 className="font-display text-3xl italic text-ink">
              {row.title}
            </h2>
            <div className="my-5 h-px w-12 bg-gold" />
            <p className="max-w-md font-body text-base leading-relaxed text-ink/70">
              {row.body}
            </p>
          </div>
        </section>
      ))}

      <section className="border-t border-ink/10 bg-wine px-6 py-16 text-cream">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-2xl italic md:text-3xl">
            Find us on the first floor
          </h2>
          <p className="mt-4 font-body text-sm leading-relaxed text-cream/70">
            {fullAddress}
          </p>
        </div>
      </section>
    </>
  );
}
