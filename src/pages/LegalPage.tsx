import { seo, site } from "../data/site";
import { Seo } from "../components/Seo";
import { PageHero } from "../components/PageHero";
import { SmartLink } from "../components/SmartLink";

type Kind = "privacy" | "terms";

const copy: Record<Kind, { title: string; crumb: string; sections: { heading: string; body: string }[] }> = {
  privacy: {
    title: "Privacy Policy",
    crumb: "Privacy Policy",
    sections: [
      {
        heading: "Placeholder policy",
        body: "This page is a placeholder. Replace it with the client's privacy policy, prepared or reviewed by a qualified professional, before the site goes live.",
      },
      {
        heading: "Information we collect",
        body: "Describe the personal data collected (for example, details submitted through the contact form) and the lawful basis for processing it.",
      },
      {
        heading: "How we use your information",
        body: "Explain how the information is used, how long it is kept, who it is shared with and how visitors can exercise their data protection rights.",
      },
    ],
  },
  terms: {
    title: "Terms of Use",
    crumb: "Terms of Use",
    sections: [
      {
        heading: "Placeholder terms",
        body: "This page is a placeholder. Replace it with the client's website terms of use, prepared or reviewed by a qualified professional, before the site goes live.",
      },
      {
        heading: "Orders and pricing",
        body: "Product descriptions and prices on this website are for guidance only. All orders are subject to a written quotation and the client's terms of sale.",
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
          <div className="space-y-10">
            {page.sections.map((s, i) => (
              <div key={s.heading} className="border-t border-steel-300 pt-6">
                <h2 className="text-xl font-semibold">
                  <span className="mr-3 font-mono text-base text-steel-400">{i + 1}.</span>
                  {s.heading}
                </h2>
                <p className="mt-3 leading-relaxed text-steel-600">{s.body}</p>
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
