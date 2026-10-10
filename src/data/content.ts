/**
 * Page copy and product data for the home page sections.
 *
 * Every trade fact here (minimum order, 15 days to collection, 50% deposit,
 * Incoterms, export regions) was confirmed by the client in October 2026.
 *
 * Photos are from Unsplash (Unsplash Licence, free for commercial use).
 * Swap them for the client's own warehouse and stock photos when available:
 * real photos of real stock are the strongest trust signal on the page.
 */

import warehouseImg from "../assets/photos/warehouse-pallets.webp";
import boxesImg from "../assets/photos/boxes-open.webp";
import bricImg from "../assets/photos/bric-a-brac.webp";
import hardToysImg from "../assets/photos/hard-toys.webp";
import softToysImg from "../assets/photos/soft-toys.webp";
import beddingImg from "../assets/photos/bedding.webp";
import booksImg from "../assets/photos/books.webp";
import mixedImg from "../assets/photos/mixed-load.webp";
import heroPileImg from "../assets/photos/hero-pile.webp";
import heroPileSmallImg from "../assets/photos/hero-pile-1200.webp";

export const photos = {
  /** Generated cut-out (transparent background) of toys, books, bedding and crockery for the hero. */
  heroPile: { src: heroPileImg, srcSmall: heroPileSmallImg },
  warehouse: { src: warehouseImg, alt: "Warehouse aisle with racked stock and a reach truck" },
  boxes: { src: boxesImg, alt: "Open cardboard cartons ready for packing" },
};

export const hero = {
  eyebrow: "We sell second-hand goods wholesale",
  title: "Supplier of toys, bric-a-brac, bedding and books.",
  primaryCta: { label: "View our products", href: "/#products" },
};

export type Product = {
  title: string;
  image: { src: string; alt: string };
  description: string;
  packing: string;
};

export const productsIntro = {
  eyebrow: "Our products",
  title: "What we sell",
  intro: "Buy a single line or mix them in one container to the ratio you want. Everything is priced per kilogram.",
};

export const products: Product[] = [
  {
    title: "Bric-a-brac",
    image: { src: bricImg, alt: "Second-hand crockery, glassware and ornaments" },
    description: "Kitchenware, crockery, glassware, ornaments, collectibles and small homeware.",
    packing: "Packed in cartons",
  },
  {
    title: "Hard toys",
    image: { src: hardToysImg, alt: "Second-hand toy cars, robots and figures" },
    description: "Plastic toys, figures, games and play sets, including licensed characters.",
    packing: "Packed in cartons",
  },
  {
    title: "Soft toys",
    image: { src: softToysImg, alt: "Second-hand plush toys" },
    description: "Plush toys of all sizes.",
    packing: "Packed in sacks or bulk bags",
  },
  {
    title: "Bedding & linen",
    image: { src: beddingImg, alt: "Stack of folded towels" },
    description: "Bedsheets, duvet covers, curtains, towels and tablecloths.",
    packing: "Packed in compressed bales",
  },
  {
    title: "Books",
    image: { src: booksImg, alt: "Second-hand books stacked by category" },
    description: "Fiction, non-fiction and children's titles, sorted by category or mixed.",
    packing: "Packed in cartons",
  },
  {
    title: "Mixed load",
    image: { src: mixedImg, alt: "Mixed second-hand household goods" },
    description: "Any combination of the lines above, built to your ratio.",
    packing: "Each line packed separately",
  },
];

export const howToBuy = {
  eyebrow: "Simple terms",
  title: "How to buy",
  steps: [
    { title: "Send an enquiry", body: "Tell us the product lines you want. We reply within one business day with per-kg prices." },
    { title: "Pay a 50% deposit", body: "We send a pro-forma invoice. Your order starts when the deposit arrives." },
    { title: "Ready in 15 days", body: "Your container is packed in Walsall and ready for collection 15 days after the deposit." },
    { title: "Pay the balance and collect", body: "The remaining 50% is due before the container is collected." },
  ],
  terms: [
    { label: "Minimum order", value: "One full 40' high-cube container" },
    { label: "Pricing", value: "Per kg, by product line" },
    { label: "Trade terms", value: "EXW · FOB · CFR" },
  ],
};

export const about = {
  eyebrow: "Who we are",
  title: "About us",
  paragraphs: [
    "Walsall Enterprise Ltd collects household goods the UK no longer wants, sorts and checks them by hand at our warehouse in Walsall, and sells them on to buyers overseas. Every item resold is one that stays out of landfill.",
    "We have been trading for three years and have shipped containers to importers in these regions:",
  ],
  markets: ["Philippines", "Thailand", "Pakistan", "Europe", "West Africa", "East Africa"],
};

export const ctaBand = {
  title: "Ask for our latest price list.",
  intro: "Tell us which products you need. We reply within one business day with per-kg prices.",
  primaryCta: { label: "Send an enquiry", href: "/contact" },
  secondaryCta: { label: "Call", href: "tel" }, // "tel" resolves to the phone number in site.ts
};
