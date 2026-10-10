import { howToBuy } from "../data/content";
import { SectionHeading } from "../components/SectionHeading";
import { Reveal } from "../components/Reveal";

export function HowToBuy() {
  return (
    <section id="how-to-buy" aria-label="How to buy" className="section grain bg-paper">
      <div className="container-page">
        <SectionHeading eyebrow={howToBuy.eyebrow} title={howToBuy.title} />

        <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {howToBuy.steps.map((s, i) => (
            <Reveal as="li" key={s.title} delay={i * 100} className="border-t-4 border-moss-600 pt-5">
              <span className="font-stencil text-3xl text-forest-700">{i + 1}</span>
              <h3 className="mt-2 text-lg font-bold">{s.title}</h3>
              <p className="mt-2 leading-relaxed text-steel-600">{s.body}</p>
            </Reveal>
          ))}
        </ol>

        <Reveal>
          <dl className="mt-14 grid gap-6 border-y border-steel-300 py-6 sm:grid-cols-3">
            {howToBuy.terms.map((t) => (
              <div key={t.label}>
                <dt className="label text-steel-500">{t.label}</dt>
                <dd className="mt-1.5 font-semibold text-forest-900">{t.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
