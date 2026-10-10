import { about, photos } from "../data/content";
import { site } from "../data/site";
import { Reveal } from "../components/Reveal";

export function About() {
  const { contact } = site;
  return (
    <section id="about" aria-label="About us" className="section bg-white">
      {/* Photo and text share one row height on desktop, so their tops and bottoms line up */}
      <div className="container-page grid gap-10 lg:grid-cols-12 lg:gap-16">
        <Reveal className="relative lg:col-span-5 lg:min-h-80">
          <img
            src={photos.warehouse.src}
            alt={photos.warehouse.alt}
            width={1400}
            height={1859}
            loading="lazy"
            decoding="async"
            className="photo aspect-[4/3] w-full rounded lg:absolute lg:inset-0 lg:aspect-auto lg:size-full"
          />
        </Reveal>
        <Reveal delay={100} className="lg:col-span-7">
          <h2 className="text-4xl font-bold sm:text-5xl">{about.title}</h2>
          {about.paragraphs.map((p, i) => (
            <p key={i} className="mt-5 max-w-3xl text-lg leading-relaxed text-steel-600">
              {p}
            </p>
          ))}
          <ul className="mt-4 grid max-w-xl grid-cols-2 gap-x-8 gap-y-2 font-semibold text-forest-900 sm:grid-cols-3">
            {about.markets.map((m) => (
              <li key={m}>{m}</li>
            ))}
          </ul>

          <dl className="mt-10 grid gap-6 border-t border-steel-300 pt-6 sm:grid-cols-3">
            <div>
              <dt className="text-sm text-steel-500">Warehouse</dt>
              <dd className="mt-1 text-forest-900">
                {contact.address[0]}
                <br />
                {contact.address[2]}
              </dd>
            </div>
            <div>
              <dt className="text-sm text-steel-500">Opening hours</dt>
              <dd className="mt-1 text-forest-900">
                {contact.hours.map((h) => (
                  <span key={h.days} className="block">
                    {h.days}: {h.time}
                  </span>
                ))}
              </dd>
            </div>
            <div>
              <dt className="text-sm text-steel-500">Company</dt>
              <dd className="mt-1 text-forest-900">{site.legal.companyNumber}</dd>
            </div>
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
