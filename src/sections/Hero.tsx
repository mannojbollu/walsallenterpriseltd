import { MessageCircle } from "lucide-react";
import { hero, photos } from "../data/content";
import { site } from "../data/site";
import { ButtonLink } from "../components/Button";

/**
 * Full-colour hero: headline on the logo green with a cut-out pile of stock
 * along the bottom edge (the image has a transparent background).
 */
export function Hero() {
  return (
    <section
      id="home"
      className="relative isolate flex flex-col overflow-hidden bg-forest-700 pt-16 text-white lg:min-h-svh lg:pt-28"
    >
      <div className="container-page relative z-10 pt-12 sm:pt-16 lg:pt-12 xl:pt-16">
        <p className="flex animate-fade-in items-center gap-4 font-semibold text-white">
          <span aria-hidden="true" className="h-0.5 w-10 bg-[#B9DD84]" />
          {hero.eyebrow}
        </p>
        <h1 className="mt-5 max-w-3xl animate-row-in text-[2.5rem] leading-[1.05] font-extrabold text-white [animation-delay:120ms] sm:text-6xl lg:text-[4.25rem]">
          {hero.title}
        </h1>
        <p className="mt-6 max-w-xl animate-row-in text-lg leading-relaxed text-forest-100 [animation-delay:240ms]">
          {hero.intro}
        </p>
        <div className="mt-8 flex animate-row-in flex-col gap-3 [animation-delay:360ms] sm:flex-row sm:items-center">
          <ButtonLink href={hero.primaryCta.href} variant="light" size="lg" arrow>
            {hero.primaryCta.label}
          </ButtonLink>
          <ButtonLink href={site.contact.whatsappHref} variant="outline-light" size="lg" className="bg-forest-700">
            <MessageCircle aria-hidden="true" className="size-4" />
            WhatsApp us
          </ButtonLink>
        </div>
      </div>

      {/* Pile of stock along the bottom edge, wider than the screen on phones. On short screens it
          runs off the bottom of the first view, as intended. */}
      <div
        aria-hidden="true"
        className="pointer-events-none relative mt-auto -mb-px pt-10"
      >
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
