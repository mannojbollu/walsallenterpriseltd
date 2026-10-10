import { MessageCircle } from "lucide-react";
import { ctaBand, photos } from "../data/content";
import { site } from "../data/site";
import { ButtonLink } from "../components/Button";
import { Reveal } from "../components/Reveal";

export function CTASection() {
  const secondaryHref = ctaBand.secondaryCta.href === "tel" ? `tel:${site.contact.phoneHref}` : ctaBand.secondaryCta.href;

  return (
    <section aria-labelledby="cta-title" className="relative isolate overflow-hidden bg-forest-950 py-20 sm:py-24 lg:py-28">
      <img
        src={photos.boxes.src}
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="photo absolute inset-0 -z-20 size-full opacity-60"
      />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgb(11_39_21/0.95)_30%,rgb(11_39_21/0.55))]" />

      <div className="container-page">
        <Reveal className="grid gap-10 border-l-8 border-moss-500 pl-6 sm:pl-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="label text-moss-300">Enquiries</p>
            <h2 id="cta-title" className="mt-4 text-3xl leading-tight font-bold text-white sm:text-5xl">
              {ctaBand.title}
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-steel-200 sm:text-lg">{ctaBand.intro}</p>
          </div>
          <div className="flex flex-col gap-3 lg:col-span-5 lg:items-end">
            <ButtonLink href={ctaBand.primaryCta.href} size="lg" arrow className="w-full sm:w-auto">
              {ctaBand.primaryCta.label}
            </ButtonLink>
            <ButtonLink href={site.contact.whatsappHref} variant="outline-light" size="lg" className="w-full sm:w-auto">
              <MessageCircle aria-hidden="true" className="size-4" />
              WhatsApp us
            </ButtonLink>
            <a href={secondaryHref} className="font-mono text-sm text-steel-300 underline-offset-4 hover:text-white hover:underline">
              or call {site.contact.phone}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
