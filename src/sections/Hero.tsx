import { MessageCircle } from "lucide-react";
import { hero } from "../data/content";
import { site } from "../data/site";
import { ButtonLink } from "../components/Button";

/** Headline on the left, a grid of stock photos on the right (stacked on phones). */
export function Hero() {
  return (
    <section id="home" className="bg-paper pt-16 lg:pt-24">
      <div className="container-page grid items-center gap-10 py-12 sm:py-16 lg:grid-cols-2 lg:gap-14 lg:py-20">
        <div>
          <p className="animate-fade-in font-semibold text-moss-700">{hero.eyebrow}</p>
          <h1 className="mt-4 animate-row-in text-[2.4rem] leading-[1.05] font-extrabold [animation-delay:100ms] sm:text-6xl xl:text-7xl">
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

        <div className="grid animate-fade-in grid-cols-2 gap-3 [animation-delay:250ms] sm:gap-4">
          {hero.photos.map((p, i) => (
            <img
              key={p.alt}
              src={p.src}
              alt={p.alt}
              fetchPriority={i < 2 ? "high" : undefined}
              className="photo aspect-[4/3] w-full rounded"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
