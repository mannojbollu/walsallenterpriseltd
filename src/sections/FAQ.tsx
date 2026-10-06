import { Plus } from "lucide-react";
import { faqIntro, faqs } from "../data/content";
import { site } from "../data/site";
import { Reveal } from "../components/Reveal";
import { SmartLink } from "../components/SmartLink";

/** FAQPage structured data so search engines can show these answers directly. */
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export function FAQ() {
  return (
    <section id="faq" aria-label="Buyer questions" className="section bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="container-page grid gap-10 border-t border-navy-900 pt-6 lg:grid-cols-12 lg:gap-10">
        <Reveal className="lg:col-span-4">
          <div className="lg:sticky lg:top-32">
            <p className="label text-moss-700">{faqIntro.eyebrow}</p>
            <h2 className="mt-4 text-3xl leading-[1.12] font-semibold sm:text-4xl">{faqIntro.title}</h2>
            <p className="mt-4 text-steel-600">{faqIntro.intro}</p>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold">
              <a href={site.contact.whatsappHref} target="_blank" rel="noopener noreferrer" className="text-moss-700 hover:text-navy-900">
                WhatsApp →
              </a>
              <SmartLink href="/contact" className="text-moss-700 hover:text-navy-900">
                Enquiry form →
              </SmartLink>
            </div>
          </div>
        </Reveal>

        <Reveal delay={100} className="lg:col-span-8">
          <div className="divide-y divide-steel-300/70 border-y border-steel-300/70">
            {faqs.map((f, i) => (
              <details key={f.q} className="group" open={i === 0}>
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-5 [&::-webkit-details-marker]:hidden">
                  <span className="flex gap-4 text-lg font-semibold text-navy-900 transition-colors group-hover:text-moss-700">
                    <span className="pt-1 font-mono text-sm font-normal text-steel-400">{String(i + 1).padStart(2, "0")}</span>
                    {f.q}
                  </span>
                  <Plus
                    aria-hidden="true"
                    className="mt-1.5 size-5 shrink-0 text-moss-600 transition-transform duration-300 group-open:rotate-45"
                  />
                </summary>
                <p className="max-w-2xl pb-6 pl-10 leading-relaxed text-steel-600">{f.a}</p>
              </details>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
