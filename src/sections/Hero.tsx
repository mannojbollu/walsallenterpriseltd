import { MessageCircle } from "lucide-react";
import { hero, photos } from "../data/content";
import { site } from "../data/site";
import { ButtonLink } from "../components/Button";

/**
 * Hero: tagline, big white headline and pill buttons over a softly blurred
 * warehouse photo, with the cut-out pile of stock standing on the aisle floor.
 */
export function Hero() {
  return (
    <section id="home" className="relative isolate flex flex-col overflow-hidden bg-forest-900 pt-16 text-white lg:min-h-svh lg:pt-28">
      {/* Real backdrop: the warehouse aisle, softly out of focus like a product shot */}
      <img
        src={photos.warehouse.src}
        alt=""
        aria-hidden="true"
        fetchPriority="high"
        className="absolute inset-0 -z-20 size-full scale-110 object-cover object-[50%_60%] blur-[3px]"
      />
      {/* Dark green shade at the top and left for the headline; clear towards the bottom so the toys sit in daylight */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgb(18_58_33/0.92)_0%,rgb(18_58_33/0.7)_40%,rgb(18_58_33/0.15)_75%,rgb(18_58_33/0)_100%)] lg:bg-[linear-gradient(100deg,rgb(18_58_33/0.94)_0%,rgb(18_58_33/0.78)_38%,rgb(18_58_33/0.25)_70%,rgb(18_58_33/0.1)_100%)]"
      />

      <div className="container-page pt-12 sm:pt-16 lg:pt-20">
        <div className="max-w-4xl">
          <p className="flex animate-fade-in items-center gap-4 font-semibold">
            <span aria-hidden="true" className="h-0.5 w-10 bg-[#B9DD84]" />
            {hero.eyebrow}
          </p>
          <h1 className="mt-5 animate-row-in text-[2.6rem] leading-[1.04] font-extrabold text-white [animation-delay:100ms] sm:text-6xl lg:text-7xl xl:text-[5.5rem]">
            {hero.title}
          </h1>
          <div className="mt-9 flex animate-row-in flex-col gap-3 [animation-delay:250ms] sm:flex-row">
            <ButtonLink href={hero.primaryCta.href} variant="leaf" size="lg" arrow>
              {hero.primaryCta.label}
            </ButtonLink>
            <ButtonLink href={site.contact.whatsappHref} variant="outline-light" size="lg">
              <MessageCircle aria-hidden="true" className="size-4" />
              WhatsApp us
            </ButtonLink>
          </div>
        </div>
      </div>

      {/* Wall of stock across the full width; wider than the screen on phones */}
      <div aria-hidden="true" className="relative mt-auto -mb-px pt-10 lg:-mt-6">
        <div className="absolute inset-x-[4%] bottom-[2%] h-1/4 rounded-[50%] bg-black/45 blur-2xl" />
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
