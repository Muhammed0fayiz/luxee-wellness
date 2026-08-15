"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { siteConfig } from "@/lib/site-config";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#efd8cd] backdrop-blur">
      {/* Main Navbar */}
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-1">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center leading-none"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/images/logo2.png"
            alt="Luxee Wellness & Family Salon"
            width={160}
            height={80}
            priority
            className="h-auto w-40 object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 font-body text-sm md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative text-berry transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Phone Button */}
        <a
          href={`tel:${siteConfig.phone}`}
          className="
            hidden
            border border-berry
            bg-berry
            px-5 py-2
            font-body text-sm font-semibold
            text-white
            transition-colors
            hover:border-berry
            hover:bg-berry
            hover:text-white
            md:inline-block
            rounded-full
          "
        >
          {siteConfig.phoneDisplay}
        </a>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex flex-col gap-1.5 md:hidden"
        >
          {/* Top line */}
          <span
            className={`h-px w-6 bg-white transition-transform duration-200 ${
              open ? "translate-y-[7px] rotate-45" : ""
            }`}
          />

          {/* Middle line */}
          <span
            className={`h-px w-6 bg-white transition-opacity duration-200 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />

          {/* Bottom line */}
          <span
            className={`h-px w-6 bg-white transition-transform duration-200 ${
              open ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Navigation */}
      {open && (
        <div className="border-t border-white/10 bg-[#211A17] px-6 pb-5 md:hidden">
          <nav className="flex flex-col gap-4 pt-4 font-body text-sm">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-berry transition-colors"
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile Phone Button */}
            <a
              href={`tel:${siteConfig.phone}`}
              className="
                mt-1
                inline-block
                w-fit
                border border-berry
                bg-berry
                px-5 py-2
                font-semibold
                text-white
                transition-colors
                hover:border-berry
                hover:bg-berry
                hover:text-white
                rounded-full
              "
            >
              {siteConfig.phoneDisplay}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}