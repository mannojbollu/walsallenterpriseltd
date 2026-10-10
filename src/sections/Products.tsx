import { products, productsIntro } from "../data/content";
import { SmartLink } from "../components/SmartLink";
import { Reveal } from "../components/Reveal";
import { SectionTitle } from "../components/SectionTitle";

export function Products() {
  return (
    <section id="products" aria-label="What we sell" className="section bg-white">
      <div className="container-page">
        <SectionTitle eyebrow={productsIntro.eyebrow} title={productsIntro.title} intro={productsIntro.intro} />

        <ul className="mt-12 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p, i) => (
            <Reveal as="li" key={p.title} delay={(i % 3) * 80} className="group">
              <div className="overflow-hidden rounded-xl">
                <img
                  src={p.image.src}
                  alt={p.image.alt}
                  loading="lazy"
                  decoding="async"
                  className="photo aspect-[4/3] w-full transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="mt-5 text-2xl font-extrabold">{p.title}</h3>
              <p className="mt-2 leading-relaxed text-steel-600">{p.description}</p>
              <p className="mt-1 text-sm font-medium text-moss-700">{p.packing}</p>
              <SmartLink
                href="/contact"
                className="mt-4 inline-flex items-center rounded-full border-2 border-forest-700 px-5 py-2 text-sm font-semibold text-forest-700 transition-colors hover:bg-forest-700 hover:text-white"
              >
                Ask for a price<span className="sr-only"> for {p.title}</span>
              </SmartLink>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
