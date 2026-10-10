import { MessageCircle } from "lucide-react";
import { hero, photos } from "../data/content";
import { site } from "../data/site";
import { ButtonLink } from "../components/Button";

/**
 * Logo-green hero: tagline, big white headline and pill buttons on the left,
 * a faint reuse arrow behind, and the cut-out pile of stock across the bottom.
 */
export function Hero() {
  return (
    <section id="home" className="relative isolate flex flex-col overflow-hidden bg-forest-700 pt-16 text-white lg:min-h-svh lg:pt-28">
      {/* Soft light behind the pile so it doesn't sit on dead-flat colour */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 -z-10 h-2/3 bg-[radial-gradient(60%_70%_at_50%_100%,rgb(185_221_132/0.28),transparent_70%)]"
      />
      {/* Faint reuse arrow, echoing the one under the logo's container */}
      <svg
        aria-hidden="true"
        viewBox="0 0 600 300"
        className="absolute top-[18%] right-[-6rem] -z-10 hidden w-[44rem] text-[#B9DD84] opacity-[0.13] lg:block"
      >
        <path d="M560 40A270 120 0 1 1 90 70" fill="none" stroke="currentColor" strokeWidth="14" strokeLinecap="round" />
        <path d="M60 30 110 92 34 104Z" fill="currentColor" />
      </svg>

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
