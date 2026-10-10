import { MessageCircle } from "lucide-react";
import { hero, photos } from "../data/content";
import { site } from "../data/site";
import { ButtonLink } from "../components/Button";

/**
 * Hero on a plain cream background: tagline, headline and buttons, then the
 * cut-out pile of stock below them with clear space in between.
 */
export function Hero() {
  return (
    <section id="home" className="flex flex-col overflow-hidden bg-paper pt-16 lg:min-h-svh lg:pt-28">
      <div className="container-page pt-12 sm:pt-16 lg:pt-20">
        <div className="max-w-4xl">
          <p className="flex animate-fade-in items-center gap-4 font-semibold text-moss-700">
            <span aria-hidden="true" className="h-0.5 w-10 bg-moss-600" />
            {hero.eyebrow}
          </p>
          <h1 className="mt-5 animate-row-in text-[2.6rem] leading-[1.04] font-extrabold [animation-delay:100ms] sm:text-6xl lg:text-7xl xl:text-[5.5rem]">
            {hero.title}
          </h1>
          <div className="mt-9 flex animate-row-in flex-col gap-3 [animation-delay:250ms] sm:flex-row">
            <ButtonLink href={hero.primaryCta.href} variant="secondary" size="lg" arrow>
              {hero.primaryCta.label}
            </ButtonLink>
            <ButtonLink href={site.contact.whatsappHref} variant="outline" size="lg">
              <MessageCircle aria-hidden="true" className="size-4" />
              WhatsApp us
            </ButtonLink>
          </div>
        </div>
      </div>

      {/* Wall of stock across the full width; wider than the screen on phones */}
      <div aria-hidden="true" className="relative mt-auto -mb-px pt-12 lg:pt-16">
        <img
          src={photos.heroPile.src}
          srcSet={`${photos.heroPile.srcSmall} 1200w, ${photos.heroPile.src} 2400w`}
          sizes="(max-width: 640px) 180vw, 100vw"
          alt=""
          width={2400}
          height={636}
          fetchPriority="high"
          className="relative left-1/2 w-[180%] max-w-none -translate-x-1/2 animate-fade-in [animation-delay:200ms] sm:w-full"
        />
      </div>
    </section>
  );
}
