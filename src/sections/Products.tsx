import { ArrowUpRight } from "lucide-react";
import { products, productsIntro } from "../data/content";
import { SmartLink } from "../components/SmartLink";
import { Reveal } from "../components/Reveal";

export function Products() {
  return (
    <section id="products" aria-label="Our products" className="section bg-white">
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="label text-moss-700">{productsIntro.eyebrow}</p>
          <h2 className="mt-4 text-4xl leading-[1.08] font-bold tracking-[-0.015em] sm:text-5xl">{productsIntro.title}</h2>
          <p className="mt-5 text-lg leading-relaxed text-steel-600">{productsIntro.intro}</p>
        </Reveal>

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p, i) => (
            <Reveal as="li" key={p.title} delay={(i % 3) * 120}>
              <SmartLink
                href="/contact"
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-steel-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-moss-300 hover:shadow-xl hover:shadow-forest-900/10"
              >
                <div className="relative overflow-hidden bg-steel-100">
                  <img
                    src={p.image.src}
                    alt={p.image.alt}
                    loading="lazy"
                    decoding="async"
                    className="photo aspect-[4/3] w-full transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <span className="absolute top-4 left-4 rounded-full bg-white/90 px-3 py-1 font-mono text-xs text-forest-800 backdrop-blur">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-xl font-bold">{p.title}</h3>
                    <span className="grid size-9 shrink-0 place-items-center rounded-full border border-steel-200 text-forest-900 transition duration-300 group-hover:rotate-45 group-hover:border-forest-900 group-hover:bg-forest-900 group-hover:text-white">
                      <ArrowUpRight aria-hidden="true" className="size-4" />
                      <span className="sr-only">Ask for a price for {p.title}</span>
                    </span>
                  </div>
                  <p className="mt-2 leading-relaxed text-steel-600">{p.description}</p>
                  <p className="mt-auto pt-5">
                    <span className="inline-block rounded-full bg-forest-50 px-3 py-1 text-sm font-medium text-forest-800">
                      {p.packing}
                    </span>
                  </p>
                </div>
              </SmartLink>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
