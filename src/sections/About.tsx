import { about, photos } from "../data/content";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";

export function About() {
  return (
    <section id="about" aria-label="About us" className="section bg-white">
      <div className="container-page">
        <SectionHeading eyebrow={about.eyebrow} title={about.title} />

        <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-12">
          <Reveal className="reveal-wipe lg:col-span-5">
            <img
              src={photos.warehouse.src}
              alt={photos.warehouse.alt}
              width={1400}
              height={1859}
              loading="lazy"
              decoding="async"
              className="photo aspect-[4/3] w-full lg:aspect-[4/5]"
            />
          </Reveal>
          <Reveal delay={100} className="lg:col-span-7">
            {about.paragraphs.map((p, i) => (
              <p key={i} className={`text-base leading-relaxed text-steel-600 sm:text-[1.08rem] ${i ? "mt-5" : ""}`}>
                {p}
              </p>
            ))}
            <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {about.markets.map((m) => (
                <li key={m} className="border-l-4 border-moss-600 bg-forest-50 px-4 py-3 font-semibold text-forest-900">
                  {m}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
