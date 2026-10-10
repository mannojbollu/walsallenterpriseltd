/**
 * Page copy and trade data for the home page sections.
 *
 * Anything marked `TODO(client)` is a placeholder or an industry-typical
 * figure that must be confirmed with Walsall Enterprise before go-live.
 *
 * Photos are from Unsplash (Unsplash Licence, free for commercial use).
 * Swap them for the client's own warehouse and loading photos when available:
 * real photos of real stock are the strongest trust signal on the page.
 */

import heroImg from "../assets/photos/hero-containers.webp";
import heroSmallImg from "../assets/photos/hero-containers-1000.webp";
import warehouseImg from "../assets/photos/warehouse-pallets.webp";
import boxesImg from "../assets/photos/boxes-open.webp";
import craneImg from "../assets/photos/crane-truck.webp";
import portImg from "../assets/photos/port-ships.webp";
import harborImg from "../assets/photos/harbor-cranes.webp";
import bricImg from "../assets/photos/bric-a-brac.webp";
import hardToysImg from "../assets/photos/hard-toys.webp";
import softToysImg from "../assets/photos/soft-toys.webp";
import beddingImg from "../assets/photos/bedding.webp";
import booksImg from "../assets/photos/books.webp";
import mixedImg from "../assets/photos/mixed-load.webp";

export const photos = {
  hero: {
    src: heroImg,
    srcSmall: heroSmallImg,
    alt: "Stacked shipping containers and gantry cranes at a container terminal",
  },
  warehouse: { src: warehouseImg, alt: "Warehouse aisle with racked stock and a reach truck" },
  boxes: { src: boxesImg, alt: "Open cardboard cartons ready for packing" },
  crane: { src: craneImg, alt: "Gantry crane lifting a container onto a stack at the quay" },
  port: { src: portImg, alt: "Loaded container ship alongside ship-to-shore cranes" },
  harbor: { src: harborImg, alt: "Row of container cranes along a quay at dusk" },
};

export const hero = {
  eyebrow: "Reuse & export · Walsall, UK",
  title: "Second-hand goods, sorted in Walsall and shipped by the container.",
  intro:
    "We collect, sort and grade bric-a-brac, toys, bedding and books that still have years of use in them, then load them for importers in the Philippines, Thailand, Pakistan, Europe and Africa. Sold per kilo, documented line by line.",
  primaryCta: { label: "Request price list", href: "/contact" },
  facts: [
    { label: "Minimum order", value: "1 × 40' HC (FCL)" },
    { label: "Terms", value: "EXW · FOB · CFR" },
    { label: "Pricing", value: "Per kg, by line" },
  ],
};

/** Lanes shown on the scrolling board under the hero. Destinations the client has shipped to, not a live schedule. */
export const lanes = [
  { from: "WALSALL", to: "PAKISTAN", eq: "40' HC", cargo: "Mixed load" },
  { from: "WALSALL", to: "PHILIPPINES", eq: "40' HC", cargo: "Hard toys / Books" },
  { from: "WALSALL", to: "THAILAND", eq: "40' HC", cargo: "Bric-a-brac" },
  { from: "WALSALL", to: "WEST AFRICA", eq: "40' HC", cargo: "Bedding & linen" },
  { from: "WALSALL", to: "EUROPE", eq: "40' HC", cargo: "Books" },
  { from: "WALSALL", to: "EAST AFRICA", eq: "40' HC", cargo: "Soft toys / Bric-a-brac" },
  { from: "WALSALL", to: "PHILIPPINES", eq: "40' HC", cargo: "Mixed load" },
  { from: "WALSALL", to: "PAKISTAN", eq: "40' HC", cargo: "Bedding & linen" },
];

export const operations = {
  eyebrow: "01 / Operations",
  title: "Every load is sorted by hand before it goes in the box.",
  paragraphs: [
    "Stock arrives from UK collection partners, is sorted by commodity and graded for resale, then packed into cartons, sacks or bales and weighed before loading. Every container is stuffed at our bay in Walsall, so we control what goes in and can document it line by line.",
    "We sell by the full 40' high-cube only, which keeps freight per kilo low for the buyer. Mixed loads are built to the ratio you specify, and the packing list shows commodity, packing type, package count and net weight for each line.",
  ],
  spec: [
    { label: "Facility", value: "Unit 2, Smith Road, Walsall WS10 0PD. Loading bays 1–3." },
    { label: "Equipment", value: "40' high-cube (40' HC)" },
    { label: "Minimum order", value: "One full container load (FCL). No part loads." },
    { label: "Packing", value: "Cartons, sacks, compressed bales, bulk bags" },
    { label: "Pricing basis", value: "Per kg net weight, by commodity line" },
    { label: "Terms of sale", value: "EXW Walsall · FOB UK port · CFR destination port on request" },
    { label: "Deposit to collection", value: "Container ready for collection 15 days after deposit" },
    { label: "Payment", value: "50% deposit against pro-forma; balance before collection" },
  ],
  stamp: ["Sorted & graded", "Walsall", "WS10 0PD"],
  marketsLabel: "Current export destinations",
  markets: ["Philippines", "Thailand", "Pakistan", "Europe", "Africa"],
  cta: { label: "Request a load specification", href: "/contact" },
};

/**
 * Key figures strip. Keep to verifiable facts. Numeric values count up on scroll.
 * Weight range (18–22 t) confirmed by the client.
 */
export const facts: { value: string | number; suffix?: string; label: string }[] = [
  { value: 68, suffix: " m³", label: "Internal volume of a 40' high-cube" },
  { value: "18–22 t", label: "Typical gross weight, mixed load" },
  { value: 5, label: "Commodity lines, packed separately" },
  { value: 3, suffix: " yrs", label: "Trading from Walsall" },
];

export const reuse = {
  eyebrow: "02 / Reuse",
  title: "The greenest kilo is the one that never reaches landfill.",
  paragraphs: [
    "Preparing goods for re-use sits second only to prevention in the UK waste hierarchy, above recycling and well above disposal. A mug, a toy or a paperback sold again overseas does its job without being melted, pulped or buried.",
    "That is the whole business: take household goods the UK no longer wants, check they still work, and get them in front of buyers who will sell them on.",
  ],
  loop: ["Collected", "Sorted", "Graded", "Packed", "Shipped", "Resold"],
  // Waste hierarchy as set out in the Waste (England and Wales) Regulations 2011.
  hierarchy: [
    { step: "Prevention", here: false },
    { step: "Preparing for re-use", here: true },
    { step: "Recycling", here: false },
    { step: "Other recovery", here: false },
    { step: "Disposal", here: false },
  ],
};

export type Commodity = {
  title: string;
  image: { src: string; alt: string };
  contents: string;
  packing: string;
  /** Indicative HS heading or chapter. Final classification goes on the commercial invoice. */
  hs: string;
};

export const commoditiesIntro = {
  eyebrow: "03 / Commodity schedule",
  title: "Five commodity lines, sold per kilogram.",
  intro:
    "Order a single line or build a mixed load to your ratio. Each line is packed and weighed separately and itemised on the packing list.",
  footnote:
    "HS codes are indicative. The final classification appears on the commercial invoice; importers should confirm the duty treatment with their customs broker.",
};

export const commodities: Commodity[] = [
  {
    title: "Bric-a-brac",
    image: { src: bricImg, alt: "Market table of second-hand crockery, glassware and ornaments" },
    contents: "Kitchenware, crockery, glassware, ornaments, collectibles, small homeware",
    packing: "Cartons",
    hs: "Ch. 39 / 69 / 70 / 73",
  },
  {
    title: "Hard toys",
    image: { src: hardToysImg, alt: "Second-hand toy cars, robots and figures laid out for sale" },
    contents: "Plastic toys, figures, games and play sets, incl. licensed characters",
    packing: "Cartons",
    hs: "9503",
  },
  {
    title: "Soft toys",
    image: { src: softToysImg, alt: "Second-hand plush toys lined up on a market stall" },
    contents: "Plush toys, all sizes",
    packing: "Sacks or bulk bags",
    hs: "9503",
  },
  {
    title: "Bedding & linen",
    image: { src: beddingImg, alt: "Stack of folded striped towels" },
    contents: "Bedsheets, duvet covers, curtains, towels, tablecloths",
    packing: "Compressed bales",
    hs: "6309",
  },
  {
    title: "Books",
    image: { src: booksImg, alt: "Second-hand books stacked on a stall" },
    contents: "Fiction, non-fiction and children's titles; sorted by category or mixed",
    packing: "Cartons",
    hs: "4901",
  },
  {
    title: "Mixed load",
    image: { src: mixedImg, alt: "Mixed second-hand household goods and cases on the floor" },
    contents: "Any combination of the above, built to your ratio",
    packing: "Per line",
    hs: "Per line",
  },
];

export const processIntro = {
  eyebrow: "04 / Process & documents",
  title: "From enquiry to bill of lading in seven steps.",
  intro: "Each step produces a document or record you can check before the next one starts.",
};

export const processSteps = [
  {
    title: "Enquiry and load specification",
    description: "You give commodities, ratio, container size and port of discharge.",
    output: "Per-kg price list, load spec",
  },
  {
    title: "Pro-forma invoice",
    description: "Lines, prices, Incoterm, estimated net weight and payment terms.",
    output: "Pro-forma invoice",
  },
  {
    title: "Sort, grade and pack",
    description: "Stock is graded, packed and weighed against your ratio.",
    output: "Photos of packed stock on request",
  },
  {
    title: "Container stuffing and seal",
    description: "Loaded at our Walsall bay. Seal number recorded at closing.",
    output: "Packing list, loading photos, seal no.",
  },
  {
    title: "Export clearance",
    description: "Export declaration lodged via CDS by our forwarder; container hauled to port.",
    output: "Export MRN",
  },
  {
    title: "Bill of lading",
    description: "Issued by the carrier after the vessel sails; released once the balance is paid.",
    output: "Original B/L, sea waybill or telex release",
  },
  {
    title: "Arrival and import clearance",
    description: "Your customs broker clears the container at the port of discharge.",
    output: "Full document set for import entry",
  },
];

export const documents = [
  {
    title: "Commercial invoice",
    body: "Seller and buyer, Incoterm, commodity description, HS heading, net and gross weight, and invoice value.",
  },
  {
    title: "Packing list",
    body: "One line per commodity: packing type, number of packages, net and gross weight.",
  },
  {
    title: "Bill of lading",
    body: "Issued by the shipping line or forwarder. Original, sea waybill or telex release, as agreed on the pro-forma.",
  },
  {
    title: "Certificate of origin",
    body: "Issued through a UK chamber of commerce where the destination or the buyer's bank requires one.",
  },
  {
    title: "ISPM 15 / fumigation",
    body: "Wooden pallets and dunnage are ISPM 15 heat-treated and stamped. A fumigation certificate is arranged where the importing country requires one.",
  },
  {
    title: "Pre-shipment inspection",
    body: "Arranged with the nominated inspection company where the destination or a letter of credit requires it.",
  },
];

export const portsIntro = {
  eyebrow: "05 / Destinations",
  title: "Where our containers have gone.",
  intro: "We have already shipped full container loads from Walsall to importers in these regions.",
  footnote:
    "Import rules change and vary by commodity. Confirm requirements with your customs broker before we load. We will not ship a line your market does not admit.",
};

/** Regions the client has exported to (confirmed by the client). */
export const ports = ["Philippines", "Thailand", "Pakistan", "Europe", "West Africa", "East Africa"];

export const galleryIntro = {
  eyebrow: "From the floor",
  title: "Sorted, packed, lifted, shipped.",
};

/** Photo strip between the commodity schedule and the process. First item is shown large. */
export const gallery = [
  { image: photos.boxes, caption: "Cartons made up for packing" },
  { image: { src: bricImg, alt: "Second-hand crockery and ornaments" }, caption: "Bric-a-brac, sorted by type" },
  { image: photos.warehouse, caption: "Racked stock awaiting loading" },
  { image: { src: booksImg, alt: "Second-hand books stacked by category" }, caption: "Books, graded by category" },
  { image: photos.crane, caption: "40' high-cube on the quay" },
];

export const faqIntro = {
  eyebrow: "06 / Buyer questions",
  title: "What importers ask before the first container.",
  intro: "Anything not covered here, ask on WhatsApp or through the enquiry form.",
};

export const faqs = [
  {
    q: "What is the minimum order?",
    a: "One full 40' high-cube container (FCL). We do not ship part loads or 20' containers.",
  },
  {
    q: "How is the stock priced?",
    a: "Per kilogram of net weight, by commodity line. Send us the lines you want and we reply with a current price list.",
  },
  {
    q: "Can I mix commodities in one container?",
    a: "Yes. Tell us the ratio, for example 40% bric-a-brac, 30% toys, 30% books. Each line is packed and weighed separately and itemised on the packing list.",
  },
  {
    q: "Can I see the goods before they ship?",
    a: "Photos of packed stock are available on request before loading. After stuffing you receive loading photos and the container seal number.",
  },
  {
    q: "How do I pay?",
    a: "A 50% deposit against our pro-forma invoice. The remaining 50% is due before the container is collected from Walsall.",
  },
  {
    q: "How long from order to collection?",
    a: "Your container is ready for collection in Walsall 15 days after we receive your deposit.",
  },
  {
    q: "Which documents will I receive?",
    a: "Commercial invoice, packing list and bill of lading as standard. Certificate of origin, ISPM 15 / fumigation certificate and pre-shipment inspection are arranged where your country or bank requires them.",
  },
  {
    q: "Who handles customs at my end?",
    a: "Your own customs broker clears the container at the port of discharge. Check your country's rules on used goods with them before ordering; we will not load a line your market does not admit.",
  },
];

export const ctaBand = {
  title: "Request a price list and load specification.",
  intro:
    "Send the commodities, approximate quantity and port of discharge. We reply within one business day with per-kg pricing and a container plan.",
  primaryCta: { label: "Send an enquiry", href: "/contact" },
  secondaryCta: { label: "Call", href: "tel" }, // "tel" resolves to the phone number in site.ts
};
