import { MapPin } from "lucide-react";
import { about, photos } from "../data/content";
import { Reveal } from "../components/Reveal";

export function About() {
  return (
    <section id="about" aria-label="About us" className="section bg-white">
      <div className="container-page grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="reveal-wipe lg:col-span-6">
          <img
            src={photos.warehouse.src}
            alt={photos.warehouse.alt}
            width={1400}
            height={1859}
            loading="lazy"
            decoding="async"
            className="photo aspect-[4/3] w-full rounded-3xl lg:aspect-[5/6]"
          />
        </Reveal>
        <Reveal delay={100} className="lg:col-span-6">
          <p className="label text-moss-700">{about.eyebrow}</p>
          <h2 className="mt-4 text-4xl leading-[1.08] font-bold tracking-[-0.015em] sm:text-5xl">{about.title}</h2>
          {about.paragraphs.map((p, i) => (
            <p key={i} className="mt-5 text-lg leading-relaxed text-steel-600">
              {p}
            </p>
          ))}
          <ul className="mt-6 flex flex-wrap gap-2.5">
            {about.markets.map((m) => (
              <li
                key={m}
                className="inline-flex items-center gap-1.5 rounded-full border border-steel-200 bg-white px-4 py-2 text-sm font-medium text-forest-900 transition-colors hover:border-moss-400 hover:bg-forest-50"
              >
                <MapPin aria-hidden="true" className="size-3.5 text-moss-600" />
                {m}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
