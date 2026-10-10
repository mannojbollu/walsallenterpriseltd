import { about, photos } from "../data/content";
import { Reveal } from "../components/Reveal";

export function About() {
  return (
    <section id="about" aria-label="About us" className="section bg-white">
      <div className="container-page grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <img
            src={photos.warehouse.src}
            alt={photos.warehouse.alt}
            width={1400}
            height={1859}
            loading="lazy"
            decoding="async"
            className="photo aspect-[4/3] w-full rounded"
          />
        </Reveal>
        <Reveal delay={100}>
          <h2 className="text-4xl font-bold sm:text-5xl">{about.title}</h2>
          {about.paragraphs.map((p, i) => (
            <p key={i} className="mt-5 text-lg leading-relaxed text-steel-600">
              {p}
            </p>
          ))}
          <ul className="mt-4 grid grid-cols-2 gap-x-8 gap-y-2 font-semibold text-forest-900 sm:grid-cols-3">
            {about.markets.map((m) => (
              <li key={m}>{m}</li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
