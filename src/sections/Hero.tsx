import { MessageCircle } from "lucide-react";
import { hero, photos } from "../data/content";
import { site } from "../data/site";
import { ButtonLink } from "../components/Button";

/** Plain hero: left-aligned headline, then the cut-out pile of stock along the bottom edge. */
export function Hero() {
  return (
    <section id="home" className="flex flex-col overflow-hidden bg-paper pt-16 lg:min-h-svh lg:pt-24">
      <div className="container-page pt-12 sm:pt-16 lg:pt-20">
        <div className="max-w-3xl">
          <p className="animate-fade-in font-semibold text-moss-700">{hero.eyebrow}</p>
          <h1 className="mt-4 animate-row-in text-[2.5rem] leading-[1.05] font-extrabold [animation-delay:100ms] sm:text-6xl lg:text-7xl">
            {hero.title}
          </h1>
          <p className="mt-6 max-w-xl animate-row-in text-lg leading-relaxed text-steel-600 [animation-delay:200ms]">
            {hero.intro}
          </p>
          <div className="mt-8 flex animate-row-in flex-col gap-3 [animation-delay:300ms] sm:flex-row">
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

      {/* Pile of stock: lined up with the text column from tablet up, wider than the screen on phones */}
      <div aria-hidden="true" className="container-page mt-auto -mb-px pt-12 max-sm:px-0">
        <img
          src={photos.heroPile.src}
          srcSet={`${photos.heroPile.srcSmall} 1200w, ${photos.heroPile.src} 2400w`}
          sizes="(max-width: 640px) 180vw, 1280px"
          alt=""
          width={2400}
          height={636}
          fetchPriority="high"
          className="relative left-1/2 w-[180%] max-w-none -translate-x-1/2 animate-fade-in [animation-delay:300ms] sm:static sm:w-full sm:translate-x-0"
        />
      </div>
    </section>
  );
}
