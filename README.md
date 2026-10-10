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
| Home page copy: hero, products, how to buy, about (incl. export regions), CTA | `src/data/content.ts` |
| Colours (forest greens from the logo / moss green / kraft / steel) and fonts (Archivo, IBM Plex Sans + Mono, Saira Stencil) | `src/styles/index.css` (`@theme` block) |
| Font files (Google Fonts link)                                   | `index.html`                              |
| Logo (WEL container mark, from the client's logo-final design) | `src/components/Logo.tsx`, `public/favicon.svg`, `public/og-image.jpg` |
| Default meta tags / Open Graph                                   | `index.html`                              |
| Contact form backend                                             | `src/lib/contactService.ts` + `.env`      |
| Privacy / Terms text                                             | `src/pages/LegalPage.tsx`                 |
| Sitemap / robots                                                 | `public/sitemap.xml`, `public/robots.txt` |

### Design rules

The look is flat and structural: no border radius, no drop shadows or glows, 1px rules. The only gradients are dark scrims over photos so text stays legible. Section labels use the `.label` class (monospace, uppercase). Use `moss-600`/`moss-700` for green text or white-on-green so contrast passes WCAG AA.

### Photos and motion

Photos live in `src/assets/photos/` and are wired up in `src/data/content.ts` (`photos` and each product's `image`). They are Unsplash stock (Unsplash Licence, free for commercial use, no attribution required). Replace them with the client's own warehouse, stock and loading photos as soon as possible: real photos are the strongest trust signal on the page. Keep files under ~400 KB (WebP, about 1000–1600px wide).

Motion is deliberate and limited: slow push-in on hero photos, manifest rows printing in, the scrolling lanes board, door-wipe photo reveals, the rubber stamp, count-up figures, the process progress rail and chart bars. All of it switches off under the visitor's reduced-motion setting.

### Products and buying terms

Edit `products`, `howToBuy` and `about` in `src/data/content.ts`. The product cards, the contact form's product dropdown and the footer links update automatically.

### Contact form

The form validates input client-side and shows loading, success and error states. To connect a backend:

1. Get a Web3Forms access key at https://web3forms.com for walsallenterpriseltd@gmail.com.
2. Put it in `.env.production` as `VITE_WEB3FORMS_ACCESS_KEY=...` (the key is public by design, so this file is committed). Alternatively set `VITE_CONTACT_ENDPOINT` to any URL that accepts a JSON `POST`, such as a Formspree endpoint.

With neither set, the dev server simulates a successful send and production builds show an error asking visitors to email or WhatsApp instead. For any other provider, replace the body of `submitContact()` in `src/lib/contactService.ts`.

## Deployment

It's a static single-page app: deploy the `dist/` folder anywhere. Clean URLs such as `/contact` need a fallback to `index.html`. `wrangler.jsonc` (Cloudflare Workers, `not_found_handling: single-page-application`) and `vercel.json` (Vercel) already handle this. Do not add a Netlify-style `_redirects` catch-all: Cloudflare rejects it as an infinite loop.

## Before handing over to the client

Already set: company name, phone, WhatsApp, email, address, hours (Mon–Fri 09:00–18:00), company no. 15317895, 3 years trading, minimum order of one full 40' HC, export markets, navy and reuse-green theme. The client has no social media accounts, so none are linked.

Still placeholder:

- [x] Commercial terms confirmed: Incoterms confirmed as EXW, FOB, CFR; loading port removed until confirmed; 15 days from deposit to collection; 50% deposit, balance before collection.
- [ ] Custom domain, if one is connected: replace the workers.dev URL in `src/data/site.ts`, `index.html` (meta tags and the business JSON-LD), `public/sitemap.xml`, `public/robots.txt`
- [ ] Client to review the privacy policy and terms (`src/pages/LegalPage.tsx`)
- [ ] Web3Forms access key in `.env.production`
