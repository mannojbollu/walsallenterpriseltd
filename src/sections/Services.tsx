import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { commodities, commoditiesIntro } from "../data/content";
import { SectionHeading } from "../components/SectionHeading";
import { SmartLink } from "../components/SmartLink";
import { Reveal } from "../components/Reveal";

const no = (i: number) => String(i + 1).padStart(2, "0");

export function Services() {
  const [active, setActive] = useState(0);
  const current = commodities[active];

  return (
    <section id="commodities" aria-label="Commodity schedule" className="section bg-white">
      <div className="container-page">
        <SectionHeading
          eyebrow={commoditiesIntro.eyebrow}
          title={commoditiesIntro.title}
          intro={commoditiesIntro.intro}
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Sticky photo panel (desktop): follows the hovered or focused line */}
          <Reveal className="reveal-wipe hidden lg:col-span-5 lg:block">
            <div className="sticky top-32">
              <figure className="relative aspect-[4/5] overflow-hidden bg-steel-100">
                {commodities.map((c, i) => (
                  <img
                    key={c.title}
                    src={c.image.src}
                    alt={i === active ? c.image.alt : ""}
                    aria-hidden={i !== active || undefined}
                    loading="lazy"
                    decoding="async"
                    className={`photo absolute inset-0 size-full transition-[opacity,transform] duration-700 ease-out ${
                      i === active ? "scale-100 opacity-100" : "scale-[1.04] opacity-0"
                    }`}
                  />
                ))}
                <figcaption className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-4 bg-navy-950/85 px-4 py-3 font-mono text-xs text-white">
                  <span>
                    <span className="text-moss-300">LINE {no(active)}</span> · {current.title.toUpperCase()}
                  </span>
                  <span className="text-steel-300">HS {current.hs}</span>
                </figcaption>
              </figure>
            </div>
          </Reveal>

          {/* Schedule */}
          <Reveal delay={120} className="lg:col-span-7">
            <div className="label hidden grid-cols-[3rem_1fr_9rem_7.5rem] gap-4 border-b-2 border-navy-900 pb-3 text-steel-500 md:grid">
              <span>No.</span>
              <span>Line &amp; contents</span>
              <span>Packing</span>
              <span>HS (indic.)</span>
            </div>
            <ul className="max-md:border-t-2 max-md:border-t-navy-900">
              {commodities.map((c, i) => (
                <li
                  key={c.title}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  className="group relative border-t border-steel-200 first:border-t-0"
                >
                  {/* Active marker */}
                  <span
                    aria-hidden="true"
                    className={`absolute top-0 bottom-0 left-0 hidden w-1 origin-top bg-moss-600 transition-transform duration-300 lg:block ${
                      i === active ? "scale-y-100" : "scale-y-0"
                    }`}
                  />
                  <div className="grid grid-cols-[5rem_1fr] gap-4 py-5 md:grid-cols-[3rem_1fr_9rem_7.5rem] md:pl-3">
                    {/* Mobile thumbnail / desktop line number */}
                    <img
                      src={c.image.src}
                      alt=""
                      loading="lazy"
                      decoding="async"
                      className="photo aspect-square w-20 md:hidden"
                    />
                    <span className="hidden pt-0.5 font-mono text-sm text-steel-400 md:block">{no(i)}</span>

                    <div>
                      <h3 className="text-lg font-bold">
                        <span className="mr-2 font-mono text-sm font-normal text-steel-400 md:hidden">{no(i)}</span>
                        {c.title}
                      </h3>
                      <p className="mt-1 text-[0.95rem] leading-relaxed text-steel-600">{c.contents}</p>
                      <dl className="mt-2 flex flex-wrap gap-x-5 gap-y-1 text-sm md:hidden">
                        <div className="flex gap-1.5">
                          <dt className="text-steel-500">Packing</dt>
                          <dd className="text-steel-800">{c.packing}</dd>
                        </div>
                        <div className="flex gap-1.5">
                          <dt className="text-steel-500">HS</dt>
                          <dd className="font-mono text-steel-800">{c.hs}</dd>
                        </div>
                      </dl>
                      <SmartLink
                        href="/contact"
                        className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-moss-700 hover:text-navy-900"
                      >
                        Enquire
                        <span className="sr-only"> about {c.title}</span>
                        <ArrowRight aria-hidden="true" className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                      </SmartLink>
                    </div>

                    <span className="hidden pt-1 text-[0.95rem] text-steel-700 md:block">{c.packing}</span>
                    <span className="hidden pt-1 font-mono text-sm text-steel-700 md:block">{c.hs}</span>
                  </div>
                </li>
              ))}
            </ul>
            <p className="mt-4 max-w-3xl font-mono text-xs leading-relaxed text-steel-500">{commoditiesIntro.footnote}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
