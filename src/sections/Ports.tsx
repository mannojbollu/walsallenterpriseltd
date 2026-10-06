import { photos, ports, portsIntro } from "../data/content";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";

const MAX_DAYS = 50;
const ticks = [0, 10, 20, 30, 40, 50];
const pct = (d: number) => `${(d / MAX_DAYS) * 100}%`;

/** Range bars: indicative port-to-port days from a UK East Coast port. Single series, direct-labelled. */
function TransitChart() {
  return (
    <figure>
      <figcaption className="flex items-baseline justify-between gap-4 border-b border-navy-900 pb-3">
        <span className="label text-navy-900">Transit time from UK port</span>
        <span className="font-mono text-[0.7rem] text-steel-500">days, port to port</span>
      </figcaption>

      <div className="mt-6 grid grid-cols-[6.5rem_1fr] gap-x-4 sm:grid-cols-[8rem_1fr]">
        {/* Rows */}
        {ports.map((p, i) => (
          <div key={p.region} className="group col-span-2 grid grid-cols-subgrid items-center py-1.5">
            <span className="truncate text-sm font-medium text-navy-900">{p.region}</span>
            <div className="relative mr-12 h-7">
              {/* gridlines */}
              {ticks.map((t) => (
                <span key={t} aria-hidden="true" className="absolute top-0 bottom-0 w-px bg-steel-300/40" style={{ left: pct(t) }} />
              ))}
              <div
                className="absolute top-1.5 bottom-1.5 flex items-center"
                style={{ left: pct(p.days[0]), width: pct(p.days[1] - p.days[0]) }}
                title={`${p.region}: ${p.transit}`}
              >
                <span
                  className="grow-x h-full w-full bg-moss-600 transition-colors group-hover:bg-navy-800"
                  style={{ ["--grow-delay" as string]: `${300 + i * 110}ms` }}
                />
                <span className="absolute left-full ml-2 font-mono text-xs whitespace-nowrap text-steel-700">
                  {p.days[0]}–{p.days[1]}
                </span>
              </div>
            </div>
          </div>
        ))}

        {/* Axis */}
        <span aria-hidden="true" />
        <div aria-hidden="true" className="relative mt-1 mr-12 h-5 border-t border-steel-300">
          {ticks.map((t) => (
            <span
              key={t}
              className="absolute top-1 -translate-x-1/2 font-mono text-[0.68rem] text-steel-500"
              style={{ left: pct(t) }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </figure>
  );
}

export function Ports() {
  return (
    <section id="ports" aria-label="Port-of-entry matrix" className="section grain bg-paper">
      <div className="container-page">
        <SectionHeading eyebrow={portsIntro.eyebrow} title={portsIntro.title} intro={portsIntro.intro} />

        <div className="mt-12 grid gap-8 lg:grid-cols-12 lg:gap-10">
          <Reveal className="lg:col-span-7">
            <TransitChart />
          </Reveal>
          <Reveal delay={150} className="reveal-wipe lg:col-span-5">
            <figure className="relative h-full min-h-64">
              <img
                src={photos.port.src}
                alt={photos.port.alt}
                width={1800}
                height={1200}
                loading="lazy"
                decoding="async"
                className="photo absolute inset-0 size-full"
              />
              <figcaption className="absolute bottom-0 left-0 bg-navy-950/85 px-3 py-2 font-mono text-[0.7rem] text-steel-200">
                Ship-to-shore cranes, container terminal
              </figcaption>
            </figure>
          </Reveal>
        </div>

        <Reveal className="mt-10">
          {/* Desktop: matrix */}
          <table className="hidden w-full text-left md:table">
            <thead>
              <tr className="label border-b-2 border-navy-900 text-steel-500">
                <th scope="col" className="w-40 py-3 pr-5 font-medium">Destination</th>
                <th scope="col" className="w-64 px-5 py-3 font-medium">Port of discharge</th>
                <th scope="col" className="w-36 px-5 py-3 font-medium">Transit (approx.)</th>
                <th scope="col" className="px-5 py-3 font-medium">Check before loading</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-steel-300/70 border-b border-steel-300/70">
              {ports.map((p) => (
                <tr key={p.region} className="align-top">
                  <th scope="row" className="py-4 pr-5 font-semibold text-navy-900">{p.region}</th>
                  <td className="px-5 py-4">
                    <ul className="space-y-1 text-[0.95rem]">
                      {p.ports.map((port) => (
                        <li key={port.code} className="flex justify-between gap-3">
                          <span className="text-steel-800">{port.name}</span>
                          <span className="font-mono text-xs text-steel-500">{port.code}</span>
                        </li>
                      ))}
                    </ul>
                  </td>
                  <td className="px-5 py-4 font-mono text-sm text-navy-900 tabular-nums">{p.transit}</td>
                  <td className="px-5 py-4 text-[0.95rem] text-steel-600">{p.check}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Mobile: one block per destination */}
          <ul className="divide-y divide-steel-300/70 border-y-2 border-t-navy-900 border-b-steel-300/70 md:hidden">
            {ports.map((p) => (
              <li key={p.region} className="py-5">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="text-lg font-semibold">{p.region}</h3>
                  <span className="font-mono text-sm text-navy-900">{p.transit}</span>
                </div>
                <p className="mt-1 font-mono text-xs text-steel-500">
                  {p.ports.map((port) => `${port.name} ${port.code}`).join(" · ")}
                </p>
                <p className="mt-3 text-[0.95rem] text-steel-600">{p.check}</p>
              </li>
            ))}
          </ul>

          <p className="mt-4 max-w-3xl font-mono text-xs leading-relaxed text-steel-500">{portsIntro.footnote}</p>
        </Reveal>
      </div>
    </section>
  );
}
