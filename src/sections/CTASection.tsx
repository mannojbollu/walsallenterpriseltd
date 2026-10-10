import { MessageCircle } from "lucide-react";
import { ctaBand } from "../data/content";
import { site } from "../data/site";
import { ButtonLink } from "../components/Button";
import { Reveal } from "../components/Reveal";

export function CTASection() {
  const secondaryHref = ctaBand.secondaryCta.href === "tel" ? `tel:${site.contact.phoneHref}` : ctaBand.secondaryCta.href;

  return (
    <section aria-labelledby="cta-title" className="bg-forest-900 py-16 text-white sm:py-20">
      <Reveal className="container-page flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-xl">
          <h2 id="cta-title" className="text-3xl font-extrabold text-white sm:text-5xl">
            {ctaBand.title}
          </h2>
          <p className="mt-3 text-lg leading-relaxed text-forest-100">{ctaBand.intro}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <ButtonLink href={ctaBand.primaryCta.href} variant="leaf" size="lg" arrow>
            {ctaBand.primaryCta.label}
          </ButtonLink>
          <ButtonLink href={site.contact.whatsappHref} variant="outline-light" size="lg">
            <MessageCircle aria-hidden="true" className="size-4" />
            WhatsApp us
          </ButtonLink>
          <a href={secondaryHref} className="text-forest-100 underline-offset-4 hover:text-white hover:underline sm:ml-2">
            or call {site.contact.phone}
          </a>
        </div>
      </Reveal>
    </section>
  );
}
