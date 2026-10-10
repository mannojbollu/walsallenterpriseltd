import { stats } from "../data/content";
import { CountUp } from "../components/CountUp";
import { Reveal } from "../components/Reveal";

export function Stats() {
  return (
    <section aria-label="Key figures" className="relative isolate overflow-hidden bg-forest-900 py-16 text-white sm:py-20">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(50rem_20rem_at_50%_0%,rgb(185_221_132/0.14),transparent_70%)]"
      />
      <dl className="container-page grid grid-cols-2 gap-y-10 lg:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 100} className="flex flex-col-reverse items-center text-center lg:border-l lg:border-white/10 lg:first:border-l-0">
            <dt className="mt-2 text-sm text-forest-200">{s.label}</dt>
            <dd className="font-display text-5xl font-extrabold text-[#C8E6A0] sm:text-6xl">
              <CountUp to={s.value} suffix={s.suffix} />
            </dd>
          </Reveal>
        ))}
      </dl>
    </section>
  );
}
