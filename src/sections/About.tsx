import { facts, operations, photos } from "../data/content";
import { Reveal } from "../components/Reveal";
import { ButtonLink } from "../components/Button";
import { SectionHeading } from "../components/SectionHeading";
import { Stamp } from "../components/Stamp";
import { CountUp } from "../components/CountUp";

export function About() {
  return (
    <section id="operations" aria-label="Operations" className="section grain bg-paper">
      <div className="container-page">
        <SectionHeading eyebrow={operations.eyebrow} title={operations.title} />

        <div className="mt-12 grid gap-14 lg:grid-cols-12 lg:gap-12">
          {/* Photo collage: tall warehouse shot, cartons overlapping, stamp on top */}
          <div className="relative self-start pb-10 lg:col-span-5">
            <Reveal className="reveal-wipe">
              <img
                src={photos.warehouse.src}
                alt={photos.warehouse.alt}
                width={1400}
                height={1859}
                loading="lazy"
                decoding="async"
                className="photo aspect-[4/5] w-[82%]"
              />
            </Reveal>
            <Reveal delay={350} className="reveal-wipe absolute right-0 bottom-[-2.5rem] w-[52%]">
              <img
                src={photos.boxes.src}
                alt={photos.boxes.alt}
                width={1200}
                height={800}
                loading="lazy"
                decoding="async"
                className="photo aspect-[4/3] w-full border-[6px] border-paper"
              />
            </Reveal>
            <Reveal className="absolute top-[38%] right-[4%] w-32 sm:w-40">
              <Stamp lines={operations.stamp} />
            </Reveal>
          </div>

          {/* Copy */}
          <Reveal delay={100} className="lg:col-span-7 lg:pl-4">
            {operations.paragraphs.map((p, i) => (
              <p key={i} className={`text-base leading-relaxed text-steel-600 sm:text-[1.08rem] ${i ? "mt-5" : ""}`}>
                {p}
              </p>
            ))}

            <div className="mt-8 border-t border-steel-300 pt-5">
              <p className="label text-steel-500">{operations.marketsLabel}</p>
              <ul className="mt-2 flex flex-wrap font-mono text-sm text-navy-900">
                {operations.markets.map((m, i) => (
                  <li key={m}>
                    {i > 0 && (
                      <span aria-hidden="true" className="px-2 text-steel-300">
                        /
                      </span>
                    )}
                    {m}
                  </li>
                ))}
              </ul>
            </div>

            {/* Spec list */}
            <div className="mt-10">
              <h3 className="label text-navy-900">Operating specification</h3>
              <dl className="mt-3 divide-y divide-steel-300/70 border-t border-navy-900">
                {operations.spec.map((row) => (
                  <div key={row.label} className="grid gap-1 py-3 sm:grid-cols-[10.5rem_1fr] sm:gap-6">
                    <dt className="label pt-0.5 text-steel-500">{row.label}</dt>
                    <dd className="text-[0.95rem] text-navy-900">{row.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <ButtonLink href={operations.cta.href} variant="secondary" size="lg" arrow className="mt-9">
              {operations.cta.label}
            </ButtonLink>
          </Reveal>
        </div>

        {/* Key figures */}
        <Reveal className="mt-20 lg:mt-24">
          <dl className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
            {facts.map((s) => (
              <div key={s.label} className="flex flex-col-reverse justify-end">
                <dt className="mt-2 text-sm text-steel-600">{s.label}</dt>
                <dd className="font-stencil text-4xl text-navy-900 sm:text-5xl">
                  {typeof s.value === "number" ? <CountUp to={s.value} suffix={s.suffix} /> : s.value}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
