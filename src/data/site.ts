/**
 * Site-wide configuration.
 *
 * Brand name, contact details, navigation, CTA text and SEO
 * defaults all live here. Change a value once and it updates everywhere.
 * Colours and fonts live in src/styles/index.css (the @theme block).
 */

export const site = {
  name: "Walsall Enterprise Ltd",
  /** Short form, used in the logo lockup. */
  shortName: "Walsall",
  /** Second line of the logo lockup. */
  logoSuffix: "Enterprise Ltd",
  tagline: "Wholesale second-hand goods, sold by the kilo",
  description:
    "Walsall Enterprise Ltd sells sorted second-hand bric-a-brac, hard and soft toys, bedding and books wholesale, by the kilo, from our warehouse in Walsall, UK.",

  /** Public URL of the deployed site, used for canonical and Open Graph URLs. */
  url: "https://walsallenterpriseltd.walsall-enterprise-ltd.workers.dev",
  /** Social share image. 1200x630 image in /public. */
  ogImage: "/og-image.jpg",
  locale: "en_GB",

  contact: {
    email: "walsallenterpriseltd@gmail.com",
    phone: "07922 247247",
    /** Digits only, used for tel: links. */
    phoneHref: "+447922247247",
    /** WhatsApp click-to-chat link for the same number. */
    whatsappHref: "https://wa.me/447922247247",
    address: [
      "Unit 2, Smith Road",
      "CLA Fabrication Building, Bay\u00a01–3",
      "Walsall WS10 0PD",
      "West Midlands, England",
    ],
    hours: [
      { days: "Mon – Fri", time: "09:00 – 18:00" },
      { days: "Sat – Sun", time: "Closed" },
    ],
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Unit+2+Smith+Road+Walsall+WS10+0PD",
    /** Keyless Google Maps embed for the Contact page. */
    mapEmbedUrl: "https://www.google.com/maps?q=Unit+2+Smith+Road,+Walsall+WS10+0PD&output=embed",
  },

  /**
   * Main navigation. `href` values starting with "/#" scroll to a section on
   * the home page; everything else is a normal route.
   */
  nav: [
    { label: "Products", href: "/#products" },
    { label: "How to buy", href: "/#how-to-buy" },
    { label: "About", href: "/#about" },
    { label: "Contact", href: "/contact" },
  ],

  headerCta: { label: "Request price list", href: "/contact" },

  legal: {
    companyNumber: "Registered in England & Wales No. 15317895",
    yearsTrading: 3,
  },
} as const;

export type NavItem = (typeof site.nav)[number];

/** Per-page SEO. Titles are combined with the site name automatically. */
export const seo = {
  home: {
    title: `${site.name} | ${site.tagline}`,
    description: site.description,
    path: "/",
  },
  contact: {
    title: `Contact Us | ${site.name}`,
    description: `Request per-kg pricing, a load specification or a container quote from ${site.name}. We reply within one business day.`,
    path: "/contact",
  },
  privacy: {
    title: `Privacy Policy | ${site.name}`,
    description: `How ${site.name} collects, uses and protects your personal information.`,
    path: "/privacy",
  },
  terms: {
    title: `Terms of Use | ${site.name}`,
    description: `The terms that govern your use of the ${site.name} website.`,
    path: "/terms",
  },
  notFound: {
    title: `Page not found | ${site.name}`,
    description: "The page you were looking for could not be found.",
    path: "/404",
  },
} as const;
