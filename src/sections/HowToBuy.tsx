import { howToBuy } from "../data/content";
import { Reveal } from "../components/Reveal";

export function HowToBuy() {
  return (
    <section id="how-to-buy" aria-label="How to buy" className="section bg-paper">
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="label text-moss-700">{howToBuy.eyebrow}</p>
          <h2 className="mt-4 text-4xl leading-[1.08] font-bold tracking-[-0.015em] sm:text-5xl">{howToBuy.title}</h2>
        </Reveal>

        <Reveal className="relative mt-14">
          {/* Line joining the steps, drawn left to right once the row is in view (desktop) */}
          <span aria-hidden="true" className="grow-x absolute top-7 right-[12%] left-[12%] hidden h-px bg-moss-400 lg:block" />
          <ol className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {howToBuy.steps.map((s, i) => (
              <li key={s.title} className="flex flex-col items-center text-center">
                <span className="relative grid size-14 place-items-center rounded-full bg-forest-900 font-display text-xl font-bold text-[#C8E6A0] ring-8 ring-paper">
                  {i + 1}
                </span>
                <div className="mt-6 h-full w-full rounded-2xl border border-steel-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-forest-900/5">
                  <h3 className="text-lg font-bold">{s.title}</h3>
                  <p className="mt-2 leading-relaxed text-steel-600">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal delay={150}>
          <dl className="mx-auto mt-12 grid max-w-4xl gap-3 sm:grid-cols-3">
            {howToBuy.terms.map((t) => (
              <div key={t.label} className="rounded-2xl bg-forest-50 px-5 py-4 text-center">
                <dt className="label text-forest-700">{t.label}</dt>
                <dd className="mt-1.5 font-semibold text-forest-900">{t.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
