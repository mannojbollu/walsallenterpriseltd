import { reuse } from "../data/content";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";

const R = 120; // loop radius in the 320×320 viewBox

/** The reuse loop: six stages on a circle joined by a slowly flowing dashed track. */
function ReuseLoop() {
  const n = reuse.loop.length;
  const points = reuse.loop.map((label, i) => {
    const a = (i / n) * Math.PI * 2 - Math.PI / 2;
    return { label, x: 160 + R * Math.cos(a), y: 160 + R * Math.sin(a), right: Math.cos(a) > 0.1, left: Math.cos(a) < -0.1 };
  });

  return (
    <figure className="relative mx-auto w-full max-w-md">
      <svg viewBox="-40 0 400 320" className="w-full overflow-visible" role="img" aria-labelledby="reuse-loop-title">
        <title id="reuse-loop-title">{`Reuse loop: ${reuse.loop.join(", then ")}, then back to collection.`}</title>
        {/* Track */}
        <circle cx="160" cy="160" r={R} fill="none" stroke="rgb(255 255 255 / 0.12)" strokeWidth="10" />
        <circle
          cx="160"
          cy="160"
          r={R}
          fill="none"
          strokeWidth="2"
          strokeDasharray="6 6"
          className="animate-flow stroke-moss-300"
        />
        {/* Direction ticks between stages */}
        <g>
          {points.map((_, i) => {
            const a = ((i + 0.5) / n) * 360 - 90;
            return (
              <path
                key={i}
                d="M-5 -5 L3 0 L-5 5"
                transform={`rotate(${a} 160 160) translate(${160 + R} 160) rotate(90)`}
                fill="none"
                strokeWidth="2"
                className="stroke-moss-300"
              />
            );
          })}
        </g>
        {/* Stages */}
        {points.map((p, i) => (
          <g key={p.label}>
            <rect x={p.x - 7} y={p.y - 7} width="14" height="14" className="fill-moss-400 stroke-moss-950" strokeWidth="3" />
            <text
              x={p.x + (p.right ? 16 : p.left ? -16 : 0)}
              y={p.y + (p.right || p.left ? 4 : i === 0 ? -16 : 24)}
              textAnchor={p.right ? "start" : p.left ? "end" : "middle"}
              className="fill-white font-mono text-[11px] tracking-[0.12em] uppercase"
            >
              {p.label}
            </text>
          </g>
        ))}
        {/* Centre */}
        <text x="160" y="152" textAnchor="middle" className="fill-moss-300 font-stencil text-[30px]">
          2nd
        </text>
        <text x="160" y="180" textAnchor="middle" className="fill-white font-stencil text-[30px]">
          LIFE
        </text>
      </svg>
    </figure>
  );
}

export function Reuse() {
  return (
    <section id="reuse" aria-label="Reuse" className="section corrugated relative overflow-hidden bg-moss-950">
      <div className="container-page">
        <SectionHeading tone="dark" eyebrow={reuse.eyebrow} title={reuse.title} />

        <div className="mt-12 grid items-center gap-14 lg:grid-cols-12 lg:gap-12">
          <Reveal className="lg:col-span-5">
            <ReuseLoop />
          </Reveal>

          <Reveal delay={120} className="lg:col-span-7">
            {reuse.paragraphs.map((p, i) => (
              <p key={i} className={`text-base leading-relaxed text-moss-100/85 sm:text-[1.08rem] ${i ? "mt-5" : ""}`}>
                {p}
              </p>
            ))}

            {/* Waste hierarchy: inverted pyramid, our step highlighted */}
            <figure className="mt-10">
              <figcaption className="label text-moss-300">UK waste hierarchy · most to least preferred</figcaption>
              <ol className="mt-4 space-y-1.5">
                {reuse.hierarchy.map((h, i) => (
                  <li key={h.step} className="flex items-center gap-4">
                    <span className="w-6 font-mono text-xs text-moss-300/70">{i + 1}</span>
                    <div className="relative h-9 flex-1">
                      <div
                        className={`grow-x flex h-full items-center px-3 text-sm ${
                          h.here ? "bg-moss-400 font-semibold text-moss-950" : "bg-white/8 text-moss-100/80"
                        }`}
                        style={{ width: `${100 - i * 14}%`, ["--grow-delay" as string]: `${200 + i * 120}ms` }}
                      >
                        {h.step}
                      </div>
                    </div>
                    <span className={`w-20 font-mono text-[0.68rem] tracking-wider uppercase ${h.here ? "text-moss-300" : "text-transparent"}`}>
                      {h.here ? "← Our work" : ""}
                    </span>
                  </li>
                ))}
              </ol>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
