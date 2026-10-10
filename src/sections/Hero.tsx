import { MessageCircle } from "lucide-react";
import { hero, photos } from "../data/content";
import { site } from "../data/site";
import { ButtonLink } from "../components/Button";

export function Hero() {
  return (
    <section id="home" className="bg-forest-700 pt-16 text-white lg:pt-[6.25rem]">
      <div className="container-page grid items-center gap-10 py-14 sm:py-16 lg:grid-cols-12 lg:gap-12 lg:py-20">
        <div className="lg:col-span-7">
          <p className="label animate-fade-in text-[#C8E6A0]">{hero.eyebrow}</p>
          <h1 className="mt-5 animate-row-in text-[2.4rem] leading-[1.05] font-bold text-white [animation-delay:120ms] sm:text-5xl lg:text-6xl">
            {hero.title}
          </h1>
          <p className="mt-6 max-w-xl animate-row-in text-lg leading-relaxed text-forest-100 [animation-delay:240ms]">
            {hero.intro}
          </p>
          <div className="mt-9 flex animate-row-in flex-col gap-3 [animation-delay:360ms] sm:flex-row sm:items-center">
            <ButtonLink href={hero.primaryCta.href} variant="light" size="lg" arrow>
              {hero.primaryCta.label}
            </ButtonLink>
            <ButtonLink href={site.contact.whatsappHref} variant="outline-light" size="lg">
              <MessageCircle aria-hidden="true" className="size-4" />
              WhatsApp us
            </ButtonLink>
          </div>
        </div>
        <div className="animate-fade-in [animation-delay:200ms] lg:col-span-5">
          <img
            src={photos.hero.src}
            alt={photos.hero.alt}
            width={800}
            height={1207}
            fetchPriority="high"
            className="photo aspect-[4/3] w-full border-[6px] border-[#B9DD84] lg:aspect-[4/5]"
          />
        </div>
      </div>
    </section>
  );
}
