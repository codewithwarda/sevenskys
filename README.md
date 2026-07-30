# SevenSkys Group of Companies — Website

A custom-designed Next.js 15 marketing site for SevenSkys Group of Companies (UAE transportation & logistics, est. 2006), built from the company's own logo and printed catalogues rather than a generic template.

## Stack

- Next.js 15 (App Router) + React 19 + TypeScript
- Tailwind CSS (custom design tokens derived from the SevenSkys logo)
- Framer Motion for subtle, reduced-motion-aware micro-interactions
- Lucide icons

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

To produce a production build:

```bash
npm run build
npm run start
```

> **Note on this delivery:** this project was written in a sandboxed environment without outbound access to the npm registry, so `npm install` / `npm run build` could not be executed here to produce an automated pass/fail. The code was written and manually reviewed for structural and import correctness, but please run `npm install && npm run build` as your first step and report back anything that needs a fix.

## Structure

```
src/
  app/                 Route segments (App Router), one folder per page
    services/[slug]/   Dynamic, data-driven service detail pages
    api/                Contact & quote form endpoints (stubbed — see below)
  components/
    graphics/          Original brand SVG assets (mark, blueprint grid, route divider, skyline, contrail motion field)
    layout/            Header, Footer, PageHero
    sections/home/     Homepage sections
    ui/                Reusable primitives (Button, Container, Field, LedgerList, Reveal, etc.)
    forms/             Contact & quote forms with client-side validation and loading/success/error states
  lib/
    data/              Real business data extracted from the SevenSkys brochures (services, fleet, clients, industries, nav)
    seo.tsx            Metadata + JSON-LD builders (LocalBusiness, Service, Breadcrumb)
    utils.ts           Site constants (address, phone, founding year) and helpers
```

## Before launch

1. **Wire the forms to a real provider.** `src/app/api/contact/route.ts` and `src/app/api/quote/route.ts` currently log submissions to the server console. Connect them to an email/CRM provider (e.g. Resend, SendGrid, HubSpot) before go-live.
2. **Add an OG share image** at `public/og-cover.jpg` (1200×630) — metadata already references this path.
3. **Swap in real fleet & site photography** where the Gallery and Fleet sections currently use original abstract graphics in place of licensed photos.
4. **Confirm the domain** in `src/lib/utils.ts` (`SITE.domain`) matches the live production URL before deploying, so canonical URLs, sitemap and JSON-LD resolve correctly.
5. **Legal review** of `/privacy-policy` and `/terms`, which are drafted as a reasonable starting point, not certified legal text.
