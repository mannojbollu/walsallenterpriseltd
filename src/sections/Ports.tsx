import { photos, ports, portsIntro } from "../data/content";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";

export function Ports() {
  return (
    <section id="ports" aria-label="Export destinations" className="section grain bg-paper">
      <div className="container-page">
        <SectionHeading eyebrow={portsIntro.eyebrow} title={portsIntro.title} intro={portsIntro.intro} />

        <div className="mt-12 grid gap-8 lg:grid-cols-12 lg:gap-10">
          <Reveal className="lg:col-span-7">
            <ul className="grid grid-cols-2 border-t-2 border-navy-900 sm:grid-cols-3">
              {ports.map((region, i) => (
                <li key={region} className="border-b border-steel-300/70 py-6 pr-4">
                  <span className="font-mono text-xs text-moss-700">{String(i + 1).padStart(2, "0")}</span>
                  <p className="mt-2 text-lg font-semibold text-navy-900 sm:text-xl">{region}</p>
                </li>
              ))}
            </ul>
            <p className="mt-6 max-w-xl font-mono text-xs leading-relaxed text-steel-500">{portsIntro.footnote}</p>
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
      </div>
    </section>
  );
}
