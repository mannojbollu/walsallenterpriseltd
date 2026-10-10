import { howToBuy } from "../data/content";
import { Reveal } from "../components/Reveal";

export function HowToBuy() {
  return (
    <section id="how-to-buy" aria-label="How to buy" className="section bg-paper">
      <div className="container-page">
        <Reveal>
          <h2 className="text-4xl font-bold sm:text-5xl">{howToBuy.title}</h2>
        </Reveal>

        <Reveal as="ol" className="mt-10 grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
          {howToBuy.steps.map((s, i) => (
            <li key={s.title} className="border-t-2 border-forest-900 pt-4">
              <h3 className="text-lg font-bold">
                {i + 1}. {s.title}
              </h3>
              <p className="mt-2 leading-relaxed text-steel-600">{s.body}</p>
            </li>
          ))}
        </Reveal>

        <Reveal as="dl" className="mt-12 grid gap-x-8 gap-y-4 border-t border-steel-300 pt-6 sm:grid-cols-3">
          {howToBuy.terms.map((t) => (
            <div key={t.label}>
              <dt className="text-sm text-steel-500">{t.label}</dt>
              <dd className="mt-1 font-semibold text-forest-900">{t.value}</dd>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
