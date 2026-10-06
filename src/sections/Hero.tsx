import { MessageCircle } from "lucide-react";
import { hero, photos } from "../data/content";
import { site } from "../data/site";
import { ButtonLink } from "../components/Button";
import { LaneBoard } from "../components/LaneBoard";

export function Hero() {
  return (
    <>
      <section
        id="home"
        className="relative isolate flex min-h-[88svh] items-end overflow-hidden bg-navy-950 pt-36 pb-16 text-white sm:pb-20 lg:pt-48 lg:pb-24"
      >
        {/* Photo with a slow push-in, darkened towards the text for legibility */}
        <img
          src={photos.hero.src}
          srcSet={`${photos.hero.srcSmall} 1000w, ${photos.hero.src} 2000w`}
          sizes="100vw"
          alt=""
          aria-hidden="true"
          fetchPriority="high"
          className="photo absolute inset-0 -z-20 size-full animate-kenburns"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[linear-gradient(0deg,var(--color-navy-950)_0%,rgb(7_20_34/0.85)_45%,rgb(7_20_34/0.45)_100%)] lg:bg-[linear-gradient(90deg,var(--color-navy-950)_0%,rgb(7_20_34/0.88)_40%,rgb(7_20_34/0.35)_80%,rgb(7_20_34/0.2)_100%)]"
        />

        <div className="container-page">
          <div className="max-w-4xl">
            <p className="label animate-fade-in text-moss-300">{hero.eyebrow}</p>

            <h1 className="mt-6 animate-row-in text-[2.6rem] leading-[1] font-bold text-white [animation-delay:120ms] sm:text-6xl lg:text-[5.25rem]">
              {hero.title}
            </h1>

            <p className="mt-7 max-w-xl animate-row-in text-lg leading-relaxed text-steel-200 [animation-delay:240ms] sm:text-xl">
              {hero.intro}
            </p>

            <div className="mt-10 flex animate-row-in flex-col gap-3 [animation-delay:360ms] sm:flex-row sm:items-center">
              <ButtonLink href={hero.primaryCta.href} size="lg" arrow>
                {hero.primaryCta.label}
              </ButtonLink>
              <ButtonLink href={site.contact.whatsappHref} variant="outline-light" size="lg">
                <MessageCircle aria-hidden="true" className="size-4" />
                WhatsApp us
              </ButtonLink>
            </div>
          </div>

          <dl className="mt-14 grid max-w-3xl animate-fade-in grid-cols-1 gap-y-5 border-t border-white/20 pt-6 [animation-delay:500ms] sm:grid-cols-3 sm:gap-x-10">
            {hero.facts.map((f) => (
              <div key={f.label}>
                <dt className="label text-steel-400">{f.label}</dt>
                <dd className="mt-1.5 font-mono text-base text-white">{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
      <LaneBoard />
    </>
  );
}
