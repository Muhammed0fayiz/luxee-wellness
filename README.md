# Luxee Wellness Family Salon — Website

A 3-page marketing site (Home, About, Services) built with Next.js 14 (App
Router), TypeScript and Tailwind CSS, with SEO metadata, a sitemap, robots.txt
and local-business structured data baked in.

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Before you launch

1. **Domain** — update `url` in `lib/site-config.ts` to your real domain
   (used for SEO tags, sitemap and structured data).
2. **Phone / address / hours** — all live in `lib/site-config.ts`, in one
   place, so you only edit them once.
3. **Services** — edit `lib/services-data.ts` to add, remove or re-order
   services. Both the homepage preview and the full menu on `/services`
   read from this file automatically.
4. **Logo** — `public/logo.png` is a placeholder copied from your screenshot.
   Swap in your real logo file (transparent PNG or SVG recommended) at the
   same path, or update the reference in `components/JsonLd.tsx`.
5. **Photos** — every photo on the site is a free-to-use Unsplash image,
   wired in through `lib/photos.ts`. Swap in real photos of your own salon,
   staff and space whenever you have them — replace the `src` value for each
   entry (`hero`, `interior`, `gents`, `ladiesHair`, `facial`, `manicure`)
   and every page that uses it updates automatically. Real photos of your
   actual space will always look better and build more trust than stock
   images.
6. **Prices** — no prices were provided, so the menu currently just lists
   services with a "Book" tag. Add a `price` field to `ServiceItem` in
   `lib/services-data.ts` if you'd like prices shown.

## Deploy

The fastest path is [Vercel](https://vercel.com): push this folder to a
GitHub repo, import it in Vercel, and it deploys automatically. Any host
that supports Next.js (Netlify, Render, your own Node server) also works
via `npm run build && npm run start`.

## Project structure

```
app/
  layout.tsx        — fonts, global <head> SEO metadata, JSON-LD
  page.tsx           — Home
  about/page.tsx      — About
  services/page.tsx   — Services (full menu)
  sitemap.ts, robots.ts
components/
  Navbar.tsx, Footer.tsx, ServiceMenu.tsx, JsonLd.tsx
lib/
  site-config.ts     — business name, address, phone, hours
  services-data.ts   — the service menu content
  photos.ts          — photo library (swap in your own photos here)
```
