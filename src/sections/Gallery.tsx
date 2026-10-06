import { gallery, galleryIntro } from "../data/content";
import { Reveal } from "../components/Reveal";

/** Photo strip: one large frame and four smaller ones on desktop, a swipeable row on phones. */
export function Gallery() {
  return (
    <section aria-label="Photos" className="bg-white pb-16 sm:pb-20 lg:pb-28">
      <div className="container-page">
        <div className="flex items-baseline justify-between gap-6 border-t border-navy-900 pt-6">
          <p className="label text-moss-700">{galleryIntro.eyebrow}</p>
          <h2 className="text-right text-xl font-bold sm:text-2xl">{galleryIntro.title}</h2>
        </div>

        <ul
          className="-mx-5 mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 sm:-mx-8 sm:px-8 lg:mx-0 lg:grid lg:grid-cols-4 lg:grid-rows-[17rem_17rem] lg:gap-5 lg:overflow-visible lg:px-0 lg:pb-0"
          aria-label="Photo gallery"
        >
          {gallery.map((g, i) => (
            <li
              key={g.caption}
              className={`w-[78%] shrink-0 snap-start sm:w-[45%] lg:w-auto ${i === 0 ? "lg:col-span-2 lg:row-span-2" : ""}`}
            >
              <Reveal delay={i * 120} className="reveal-wipe lg:h-full">
                <figure className="group lg:flex lg:h-full lg:flex-col">
                  <div className="aspect-[4/3] overflow-hidden lg:aspect-auto lg:min-h-0 lg:flex-1">
                    <img
                      src={g.image.src}
                      alt={g.image.alt}
                      loading="lazy"
                      decoding="async"
                      className="photo size-full transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    />
                  </div>
                  <figcaption className="mt-2.5 flex gap-2 font-mono text-xs text-steel-600">
                    <span className="text-steel-400">{String(i + 1).padStart(2, "0")}</span>
                    {g.caption}
                  </figcaption>
                </figure>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
