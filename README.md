# Client Trading Website

Website for Walsall Enterprise Ltd, a UK wholesale exporter of used goods. Built with React, Vite, TypeScript and Tailwind CSS v4.

## Run it

```bash
npm install
npm run dev        # http://localhost:5180
npm run build      # type-check + production build into dist/
npm run preview    # serve the production build locally
```

## Pages

| Route      | File                         |
| ---------- | ---------------------------- |
| `/`        | `src/pages/HomePage.tsx`     |
| `/contact` | `src/pages/ContactPage.tsx`  |
| `/privacy` | `src/pages/LegalPage.tsx`    |
| `/terms`   | `src/pages/LegalPage.tsx`    |
| anything else | `src/pages/NotFoundPage.tsx` |

## Customising for the client

Almost everything is centralised. Edit these files instead of hunting through components:

| What                                                             | Where                                     |
| ---------------------------------------------------------------- | ----------------------------------------- |
| Company name, contact details, WhatsApp, hours, nav, header CTA, SEO | `src/data/site.ts`                        |
| Hero, sample manifest, operations spec, commodity schedule, process steps, document pack, port matrix, CTA | `src/data/content.ts` |
| Colours (navy / reuse green / kraft / steel) and fonts (Archivo, IBM Plex Sans + Mono, Saira Stencil) | `src/styles/index.css` (`@theme` block) |
| Font files (Google Fonts link)                                   | `index.html`                              |
| Logo                                                             | `src/components/Logo.tsx`, `public/favicon.svg` |
| Default meta tags / Open Graph                                   | `index.html`                              |
| Contact form backend                                             | `src/lib/contactService.ts` + `.env`      |
| Privacy / Terms text                                             | `src/pages/LegalPage.tsx`                 |
| Sitemap / robots                                                 | `public/sitemap.xml`, `public/robots.txt` |

### Design rules

The look is flat and structural: no border radius, no drop shadows or glows, 1px rules. The only gradients are dark scrims over photos so text stays legible. Section labels use the `.label` class (monospace, uppercase). Use `moss-600`/`moss-700` for green text or white-on-green so contrast passes WCAG AA.

### Photos and motion

Photos live in `src/assets/photos/` and are wired up in `src/data/content.ts` (`photos` and each commodity's `image`). They are Unsplash stock (Unsplash Licence, free for commercial use, no attribution required). Replace them with the client's own warehouse, stock and loading photos as soon as possible: real photos are the strongest trust signal on the page. Keep files under ~400 KB (WebP, about 1000–1600px wide).

Motion is deliberate and limited: slow push-in on hero photos, manifest rows printing in, the scrolling lanes board, door-wipe photo reveals, the rubber stamp, count-up figures, the process progress rail and chart bars. All of it switches off under the visitor's reduced-motion setting.

### Commodities, process, ports

Edit the `commodities`, `processSteps`, `documents` and `ports` arrays in `src/data/content.ts`. Tables, line numbers, the contact form's commodity dropdown and footer links update automatically. Search the file for `TODO(client)` to find figures that still need confirming.

### Contact form

The form validates input client-side and shows loading, success and error states. To connect a backend:

1. Copy `.env.example` to `.env`.
2. Set `VITE_CONTACT_ENDPOINT` to a URL that accepts a JSON `POST` (e.g. a Formspree form endpoint or your own API).

Without an endpoint the form runs in demo mode and simulates a successful send. For any other provider, replace the body of `submitContact()` in `src/lib/contactService.ts`.

## Deployment

It's a static single-page app: deploy the `dist/` folder anywhere. Clean URLs such as `/contact` need a fallback to `index.html`. `public/_redirects` (Netlify) and `vercel.json` (Vercel) already handle this.

## Before handing over to the client

Already set: company name, phone, WhatsApp, email, address, hours (Mon–Fri 09:00–18:00), company no. 15317895, 3 years trading, minimum order of one full 40' HC, export markets, navy and reuse-green theme. The client has no social media accounts, so none are linked.

Still placeholder:

- [ ] Incoterms offered, UK loading port(s), order-to-loading lead time, payment terms (`TODO(client)` in `src/data/content.ts`, plus the Incoterm list in `src/components/ContactForm.tsx`)
- [ ] Typical gross weight per mixed 40' HC (`facts` in `src/data/content.ts`)
- [ ] Port matrix transit times and import notes: check with the client's forwarder (`ports` in `src/data/content.ts`)
- [ ] Real logo, if the client has one (`src/components/Logo.tsx`, `public/favicon.svg`)
- [ ] Domain: replace `www.example.com` in `src/data/site.ts`, `index.html` (meta tags and the business JSON-LD), `public/sitemap.xml`, `public/robots.txt`
- [ ] Privacy policy and terms (`src/pages/LegalPage.tsx`)
- [ ] Connect the contact form (`VITE_CONTACT_ENDPOINT` in `.env`)
