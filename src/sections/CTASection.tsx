import { MessageCircle } from "lucide-react";
import { ctaBand } from "../data/content";
import { site } from "../data/site";
import { ButtonLink } from "../components/Button";
import { Reveal } from "../components/Reveal";

export function CTASection() {
  const secondaryHref = ctaBand.secondaryCta.href === "tel" ? `tel:${site.contact.phoneHref}` : ctaBand.secondaryCta.href;

  return (
    <section aria-labelledby="cta-title" className="bg-white pb-16 sm:pb-20 lg:pb-28">
      <div className="container-page">
        <Reveal className="relative isolate overflow-hidden rounded-3xl bg-forest-900 px-6 py-14 text-center sm:px-12 sm:py-20">
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-[radial-gradient(40rem_18rem_at_50%_0%,rgb(185_221_132/0.22),transparent_70%),radial-gradient(30rem_16rem_at_100%_100%,rgb(79_140_61/0.35),transparent_70%)]"
          />
          <h2 id="cta-title" className="mx-auto max-w-2xl text-3xl leading-tight font-bold text-white sm:text-5xl">
            {ctaBand.title}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-forest-100 sm:text-lg">{ctaBand.intro}</p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <ButtonLink href={ctaBand.primaryCta.href} variant="light" size="lg" arrow>
              {ctaBand.primaryCta.label}
            </ButtonLink>
            <ButtonLink href={site.contact.whatsappHref} variant="outline-light" size="lg">
              <MessageCircle aria-hidden="true" className="size-4" />
              WhatsApp us
            </ButtonLink>
          </div>
          <a href={secondaryHref} className="mt-6 inline-block text-sm text-forest-200 underline-offset-4 hover:text-white hover:underline">
            or call {site.contact.phone}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
