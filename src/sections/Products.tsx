import { ArrowRight } from "lucide-react";
import { products, productsIntro } from "../data/content";
import { SectionHeading } from "../components/SectionHeading";
import { SmartLink } from "../components/SmartLink";
import { Reveal } from "../components/Reveal";

export function Products() {
  return (
    <section id="products" aria-label="Our products" className="section bg-white">
      <div className="container-page">
        <SectionHeading eyebrow={productsIntro.eyebrow} title={productsIntro.title} intro={productsIntro.intro} />

        <ul className="mt-12 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p, i) => (
            <Reveal as="li" key={p.title} delay={(i % 3) * 100} className="group flex flex-col">
              <div className="overflow-hidden bg-steel-100">
                <img
                  src={p.image.src}
                  alt={p.image.alt}
                  loading="lazy"
                  decoding="async"
                  className="photo aspect-[4/3] w-full transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <h3 className="mt-5 text-xl font-bold">{p.title}</h3>
              <p className="mt-2 leading-relaxed text-steel-600">{p.description}</p>
              <p className="mt-2 text-sm text-moss-700">{p.packing}</p>
              <SmartLink
                href="/contact"
                className="mt-4 inline-flex items-center gap-1 self-start text-sm font-semibold text-forest-900 hover:text-moss-700"
              >
                Ask for a price
                <span className="sr-only"> for {p.title}</span>
                <ArrowRight aria-hidden="true" className="size-3.5 transition-transform group-hover:translate-x-0.5" />
              </SmartLink>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
