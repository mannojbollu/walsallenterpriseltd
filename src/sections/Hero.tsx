import { MessageCircle } from "lucide-react";
import { hero, photos } from "../data/content";
import { site } from "../data/site";
import { ButtonLink } from "../components/Button";

/**
 * Ivory hero: headline, then a cut-out pile of stock (transparent background)
 * resting on a soft floor shadow along the bottom edge.
 */
export function Hero() {
  return (
    <section
      id="home"
      className="relative isolate flex flex-col overflow-hidden bg-paper pt-16 lg:min-h-svh lg:pt-24"
    >
      {/* Soft light behind the headline and a faint green glow behind the pile */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(60rem_32rem_at_15%_10%,#fff_0%,transparent_70%),radial-gradient(70rem_26rem_at_50%_100%,rgb(185_221_132/0.35)_0%,transparent_70%)]"
      />

      <div className="container-page pt-12 text-center sm:pt-16 lg:pt-20">
        <p className="inline-flex animate-fade-in items-center gap-2.5 rounded-full border border-forest-900/15 bg-white/70 px-4 py-1.5 text-sm font-medium text-forest-800 shadow-sm backdrop-blur">
          <span aria-hidden="true" className="size-1.5 rounded-full bg-moss-500" />
          {hero.eyebrow}
        </p>
        <h1 className="mx-auto mt-6 max-w-4xl animate-row-in text-[2.5rem] leading-[1.02] font-extrabold tracking-[-0.02em] [animation-delay:120ms] sm:text-6xl lg:text-[4.75rem]">
          {hero.title} <span className="text-moss-600">{hero.titleAccent}</span>
        </h1>
        <p className="mx-auto mt-6 max-w-xl animate-row-in text-lg leading-relaxed text-steel-600 [animation-delay:240ms]">
          {hero.intro}
        </p>
        <div className="mt-9 flex animate-row-in flex-col justify-center gap-3 [animation-delay:360ms] sm:flex-row sm:items-center">
          <ButtonLink href={hero.primaryCta.href} variant="secondary" size="lg" arrow className="shadow-lg shadow-forest-900/20">
            {hero.primaryCta.label}
          </ButtonLink>
          <ButtonLink href={site.contact.whatsappHref} variant="outline" size="lg" className="bg-white/60">
            <MessageCircle aria-hidden="true" className="size-4" />
            WhatsApp us
          </ButtonLink>
        </div>
      </div>

      {/* Pile of stock, wider than the screen on phones; rises into place on load */}
      <div aria-hidden="true" className="pointer-events-none relative mt-auto -mb-px pt-12">
        <div className="absolute inset-x-[8%] bottom-0 h-1/3 rounded-[50%] bg-forest-900/25 blur-3xl" />
        <img
          src={photos.heroPile.src}
          srcSet={`${photos.heroPile.srcSmall} 1200w, ${photos.heroPile.src} 2400w`}
          sizes="(max-width: 640px) 180vw, 100vw"
          alt=""
          width={2400}
          height={636}
          fetchPriority="high"
          className="relative left-1/2 mx-auto w-[180%] max-w-none -translate-x-1/2 animate-rise [animation-delay:450ms] sm:w-full lg:max-w-[110rem]"
        />
      </div>
    </section>
  );
}
