import { MessageCircle } from "lucide-react";
import type { ReactNode } from "react";
import { seo, site } from "../data/site";
import { photos } from "../data/content";
import { Seo } from "../components/Seo";
import { PageHero } from "../components/PageHero";
import { ContactForm } from "../components/ContactForm";
import { ButtonLink } from "../components/Button";

function Detail({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="py-4">
      <dt className="label text-steel-500">{label}</dt>
      <dd className="mt-1.5 text-[0.95rem] text-navy-900">{children}</dd>
    </div>
  );
}

export default function ContactPage() {
  const { contact } = site;

  return (
    <>
      <Seo {...seo.contact} />
      <PageHero
        crumb="Contact"
        image={photos.crane.src}
        eyebrow="Enquiries"
        title="Request a price list or container quote."
        intro="Tell us the commodity lines, how many 40' containers and your port of discharge. We reply within one business day with per-kg pricing and a proposed load plan."
      />

      <section className="grain bg-paper py-14 sm:py-16 lg:py-24">
        <div className="container-page">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
            {/* Contact details */}
            <aside aria-label="Contact information" className="lg:col-span-4">
              <h2 className="text-2xl font-bold">Talk to us directly</h2>
              <p className="mt-2 text-steel-600">Most buyers message us on WhatsApp first. Photos of current stock on request.</p>

              <ButtonLink href={contact.whatsappHref} size="lg" className="mt-6 w-full sm:w-auto">
                <MessageCircle aria-hidden="true" className="size-4" />
                WhatsApp {contact.phone}
              </ButtonLink>

              <dl className="mt-8 divide-y divide-steel-300/70 border-t border-navy-900">
                <Detail label="Phone">
                  <a href={`tel:${contact.phoneHref}`} className="font-mono underline-offset-2 hover:underline">
                    {contact.phone}
                  </a>
                </Detail>
                <Detail label="Email">
                  <a href={`mailto:${contact.email}`} className="[overflow-wrap:anywhere] underline-offset-2 hover:underline">
                    {contact.email}
                  </a>
                </Detail>
                <Detail label="Hours (UK time)">
                  {contact.hours.map((h) => (
                    <span key={h.days} className="flex justify-between gap-4">
                      <span className="text-steel-600">{h.days}</span>
                      <span className="font-mono">{h.time}</span>
                    </span>
                  ))}
                </Detail>
                <Detail label="Warehouse & loading">
                  <address className="text-steel-700 not-italic">
                    {contact.address.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </address>
                  <a
                    href={contact.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block text-sm font-semibold text-moss-700 hover:text-navy-900"
                  >
                    Directions →
                  </a>
                  <iframe
                    src={contact.mapEmbedUrl}
                    title={`Map showing ${contact.address[0]}, ${contact.address[2]}`}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="mt-4 aspect-[4/3] w-full sm:aspect-video lg:aspect-[4/3] border border-steel-300 bg-steel-100"
                  />
                </Detail>
              </dl>
            </aside>

            {/* Form */}
            <div className="lg:col-span-8">
              <div className="flex items-baseline justify-between gap-4">
                <h2 className="text-2xl font-bold">Enquiry sheet</h2>
                <p className="font-mono text-xs text-steel-500">
                  <span className="text-moss-700">*</span> required
                </p>
              </div>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
