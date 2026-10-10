import { seo, site } from "../data/site";
import { Seo } from "../components/Seo";
import { PageHero } from "../components/PageHero";
import { SmartLink } from "../components/SmartLink";

type Kind = "privacy" | "terms";

type Section = { heading: string; body: string[]; list?: string[] };

const { contact } = site;
const companyNo = "15317895";
const address = contact.address.join(", ");

/**
 * TODO(client): the client should review both documents (ideally with a legal
 * adviser) and confirm the retention approach and services
 * listed. Update `updated` whenever the text changes.
 */
const updated = "7 October 2026";

const copy: Record<Kind, { title: string; crumb: string; sections: Section[] }> = {
  privacy: {
    title: "Privacy Policy",
    crumb: "Privacy Policy",
    sections: [
      {
        heading: "Who we are",
        body: [
          `${site.name} ("we", "us") is a company registered in England and Wales under company number ${companyNo}. Our registered office and warehouse is at ${address}.`,
          `We are the controller of the personal data described in this policy. For any privacy question or request, email ${contact.email} or call ${contact.phone}.`,
        ],
      },
      {
        heading: "Information we collect",
        body: ["We only collect the personal data you choose to give us, or that is needed to run this website:"],
        list: [
          "Enquiry form: your name, email address, and optionally your company and phone number, plus the commodity, destination port, trade terms and message you send.",
          "Email, phone and WhatsApp: your contact details and whatever you include in your message.",
          "Technical data: when you visit, our hosting provider processes your IP address and basic browser information to deliver the site and protect it from abuse. We do not use analytics or advertising cookies.",
        ],
      },
      {
        heading: "How and why we use it",
        body: [
          "We use your information to reply to your enquiry, prepare quotations, and arrange and document any order that follows. Our lawful bases under UK GDPR are:",
        ],
        list: [
          "Legitimate interests: answering business enquiries and running our trade with importers.",
          "Contract: taking steps you ask for before entering a contract, and performing it.",
          "Legal obligation: keeping business, tax and export records we are required to keep.",
        ],
      },
      {
        heading: "Who we share it with",
        body: [
          "We do not sell your personal data. We share it only with service providers who help us run the website and our business, and only as far as they need it:",
        ],
        list: [
          "Cloudflare, which hosts this website.",
          "Web3Forms, which delivers enquiry form submissions to our email inbox.",
          "Google, which provides our email (Gmail), the map on our Contact page and the fonts used on this site.",
          "WhatsApp (Meta), if you choose to message us there.",
          "Freight forwarders, carriers, inspection agencies and customs authorities, where needed to ship an order you place.",
        ],
      },
      {
        heading: "International transfers",
        body: [
          "Some of these providers process data outside the UK, including in the United States. Where they do, we rely on the safeguards UK data protection law allows, such as the UK Extension to the EU–US Data Privacy Framework or the ICO's International Data Transfer Agreement and Addendum.",
        ],
      },
      {
        heading: "Cookies and embedded content",
        body: [
          "This website does not set its own cookies. The Google Map on our Contact page is embedded from Google and Google may set cookies when it loads; see Google's privacy policy for details. You can block or delete cookies in your browser settings.",
        ],
      },
      {
        heading: "How long we keep it",
        body: [
          "We keep enquiry correspondence for as long as needed to deal with it and any business that follows. Records relating to orders are kept for as long as UK tax and company law requires. After that, we delete them securely.",
        ],
      },
      {
        heading: "Your rights",
        body: [
          "Under UK GDPR you have the right to access the personal data we hold about you, and to ask us to correct it, delete it, restrict or object to its use, or transfer it to you or another organisation. To make a request, contact us using the details above. We will respond within one month.",
          "If you are unhappy with how we handle your data, please contact us first. You also have the right to complain to the Information Commissioner's Office (ICO) at ico.org.uk or on 0303 123 1113.",
        ],
      },
      {
        heading: "Changes to this policy",
        body: ["We may update this policy from time to time. The date at the top shows when it last changed."],
      },
    ],
  },
  terms: {
    title: "Terms of Use",
    crumb: "Terms of Use",
    sections: [
      {
        heading: "About these terms",
        body: [
          `This website is operated by ${site.name}, a company registered in England and Wales under company number ${companyNo}, of ${address}. By using the site you accept these terms. If you do not agree with them, please do not use the site.`,
        ],
      },
      {
        heading: "Information on this website",
        body: [
          "The content on this site is general information about our business and the goods we supply. Descriptions, photographs, weights, lead times and transit times are indicative only and may change without notice. While we try to keep it accurate and up to date, we do not guarantee that it is complete or current.",
          "Nothing on this site is an offer to sell. Prices and availability are confirmed only in a written quotation.",
        ],
      },
      {
        heading: "Orders and pricing",
        body: [
          "All orders are subject to a written quotation or pro-forma invoice and our terms of sale, which are agreed separately with each buyer. Those terms, not this page, govern any sale.",
          "Buyers are responsible for confirming that the goods may legally be imported into their country, and for import clearance, duties and taxes at the port of discharge.",
        ],
      },
      {
        heading: "Using this website",
        body: ["You must not:"],
        list: [
          "use the site for any unlawful or fraudulent purpose;",
          "send spam or misleading information through the enquiry form;",
          "try to gain unauthorised access to the site, or interfere with how it works;",
          "copy or reuse our content or photographs for commercial purposes without our written permission.",
        ],
      },
      {
        heading: "Intellectual property",
        body: [
          `The text, design, logo and photographs on this site belong to ${site.name} or are used under licence. All rights are reserved.`,
        ],
      },
      {
        heading: "Links to other sites",
        body: [
          "Links to other websites, such as Google Maps or WhatsApp, are provided for convenience. We are not responsible for their content or their privacy practices.",
        ],
      },
      {
        heading: "Our liability",
        body: [
          "We provide this website free of charge and on an \"as is\" basis. To the extent the law allows, we are not liable for any loss or damage arising from your use of it or reliance on its content. Nothing in these terms limits liability that cannot be limited under English law, including for death or personal injury caused by negligence, or for fraud.",
        ],
      },
      {
        heading: "Privacy",
        body: ["How we handle personal data is explained in our Privacy Policy."],
      },
      {
        heading: "Governing law",
        body: [
          "These terms are governed by the law of England and Wales, and the courts of England and Wales have exclusive jurisdiction over any dispute arising from them.",
        ],
      },
    ],
  },
};

export default function LegalPage({ kind }: { kind: Kind }) {
  const page = copy[kind];
  return (
    <>
      <Seo {...seo[kind]} />
      <PageHero crumb={page.crumb} eyebrow={site.name} title={page.title} />
      <section className="section bg-white">
        <div className="container-page max-w-3xl">
          <p className="font-mono text-sm text-steel-500">Last updated: {updated}</p>
          <div className="mt-8 space-y-10">
            {page.sections.map((s, i) => (
              <div key={s.heading} className="border-t border-steel-300 pt-6">
                <h2 className="text-xl font-semibold">
                  <span className="mr-3 font-mono text-base text-steel-400">{i + 1}.</span>
                  {s.heading}
                </h2>
                {s.body.map((p) => (
                  <p key={p} className="mt-3 leading-relaxed text-steel-600">
                    {p}
                  </p>
                ))}
                {s.list && (
                  <ul className="mt-3 list-disc space-y-2 pl-5 leading-relaxed text-steel-600 marker:text-moss-600">
                    {s.list.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
            <p className="text-steel-600">
              Questions? <SmartLink href="/contact" className="font-semibold text-moss-700 hover:text-navy-900">Contact us</SmartLink>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
