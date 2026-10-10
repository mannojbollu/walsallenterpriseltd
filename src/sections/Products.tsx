import { products, productsIntro } from "../data/content";
import { SmartLink } from "../components/SmartLink";
import { Reveal } from "../components/Reveal";

export function Products() {
  return (
    <section id="products" aria-label="What we sell" className="section bg-white">
      <div className="container-page">
        <Reveal className="max-w-2xl">
          <h2 className="text-4xl font-bold sm:text-5xl">{productsIntro.title}</h2>
          <p className="mt-4 text-lg leading-relaxed text-steel-600">{productsIntro.intro}</p>
        </Reveal>

        <ul className="mt-12 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p, i) => (
            <Reveal as="li" key={p.title} delay={(i % 3) * 80}>
              <img
                src={p.image.src}
                alt={p.image.alt}
                loading="lazy"
                decoding="async"
                className="photo aspect-[4/3] w-full rounded"
              />
              <h3 className="mt-5 text-xl font-bold">{p.title}</h3>
              <p className="mt-2 leading-relaxed text-steel-600">{p.description}</p>
              <p className="mt-1 text-sm text-steel-500">{p.packing}</p>
              <SmartLink href="/contact" className="mt-3 inline-block font-semibold text-moss-700 underline-offset-4 hover:underline">
                Ask for a price →<span className="sr-only"> for {p.title}</span>
              </SmartLink>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
