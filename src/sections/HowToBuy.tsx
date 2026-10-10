import { howToBuy } from "../data/content";
import { Reveal } from "../components/Reveal";
import { SectionTitle } from "../components/SectionTitle";

export function HowToBuy() {
  return (
    <section id="how-to-buy" aria-label="How to buy" className="section bg-forest-700 text-white">
      <div className="container-page">
        <SectionTitle eyebrow={howToBuy.eyebrow} title={howToBuy.title} tone="dark" />

        <Reveal as="ol" className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {howToBuy.steps.map((s, i) => (
            <li key={s.title}>
              <span className="font-stencil text-5xl text-[#B9DD84]">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-3 text-xl font-bold text-white">{s.title}</h3>
              <p className="mt-2 leading-relaxed text-forest-100">{s.body}</p>
            </li>
          ))}
        </Reveal>

        <Reveal as="dl" className="mt-14 grid gap-4 sm:grid-cols-3">
          {howToBuy.terms.map((t) => (
            <div key={t.label} className="rounded-xl bg-white/10 px-5 py-4">
              <dt className="text-sm text-forest-100">{t.label}</dt>
              <dd className="mt-1 text-lg font-semibold text-white">{t.value}</dd>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
