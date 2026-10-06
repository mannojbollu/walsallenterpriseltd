import { useEffect, useRef, useState } from "react";
import { Plus } from "lucide-react";
import { documents, photos, processIntro, processSteps } from "../data/content";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";

/** Index of the furthest step that has crossed the middle of the viewport. */
function useStepProgress(count: number) {
  const refs = useRef<(HTMLLIElement | null)[]>([]);
  const [reached, setReached] = useState(-1);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
      setReached(count - 1);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          const i = refs.current.indexOf(e.target as HTMLLIElement);
          setReached((r) => Math.max(r, i));
        }
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );
    refs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [count]);

  return { refs, reached };
}

export function Process() {
  const { refs, reached } = useStepProgress(processSteps.length);
  const progress = ((reached + 1) / processSteps.length) * 100;

  return (
    <section id="process" aria-label="Process and documents" className="section bg-navy-900">
      <div className="container-page">
        <SectionHeading tone="dark" eyebrow={processIntro.eyebrow} title={processIntro.title} intro={processIntro.intro} />

        <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:gap-12">
          {/* Sticky photo */}
          <div className="hidden lg:col-span-4 lg:block">
            <Reveal className="reveal-wipe sticky top-32">
              <figure className="relative">
                <img
                  src={photos.crane.src}
                  alt={photos.crane.alt}
                  width={1400}
                  height={1867}
                  loading="lazy"
                  decoding="async"
                  className="photo aspect-[3/4] w-full"
                />
                <figcaption className="absolute top-0 left-0 bg-navy-950/85 px-3 py-2 font-mono text-[0.7rem] text-steel-300">
                  STEP {String(Math.max(reached, 0) + 1).padStart(2, "0")} / {String(processSteps.length).padStart(2, "0")}
                </figcaption>
              </figure>
            </Reveal>
          </div>

          <div className="lg:col-span-8">
            {/* Step log with progress rail */}
            <ol className="relative">
              <span aria-hidden="true" className="absolute top-0 bottom-0 left-[0.9rem] w-px bg-white/15" />
              <span
                aria-hidden="true"
                className="absolute top-0 left-[0.9rem] w-px bg-moss-400 transition-[height] duration-700 ease-out"
                style={{ height: `${progress}%` }}
              />
              {processSteps.map((s, i) => {
                const done = i <= reached;
                return (
                  <li
                    key={s.title}
                    ref={(el) => {
                      refs.current[i] = el;
                    }}
                    className="relative grid grid-cols-[2.75rem_1fr] gap-x-3 py-5"
                  >
                    <span
                      aria-hidden="true"
                      className={`relative z-10 mt-2 ml-[calc(0.9rem-4.5px)] size-2.5 transition-colors duration-500 ${
                        done ? "bg-moss-400" : "bg-navy-900 ring-1 ring-steel-400"
                      }`}
                    />
                    <div className={`transition-opacity duration-500 ${done ? "opacity-100" : "opacity-55"}`}>
                      <h3 className="text-lg font-bold text-white">
                        <span className="mr-3 font-mono text-sm font-normal text-moss-300">{String(i + 1).padStart(2, "0")}</span>
                        {s.title}
                      </h3>
                      <p className="mt-1 text-[0.95rem] leading-relaxed text-steel-300">{s.description}</p>
                      <p className="mt-2 font-mono text-xs text-steel-400">
                        <span className="text-moss-300">Output →</span> {s.output}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ol>

            {/* Document pack */}
            <Reveal className="mt-12">
              <div>
                <h3 className="label text-white">Export document pack</h3>
                <div className="mt-3 grid gap-x-10 border-t border-white/30 md:grid-cols-2">
                  {[documents.slice(0, 3), documents.slice(3)].map((col, c) => (
                    <div key={c} className="divide-y divide-white/15 border-b border-white/15">
                      {col.map((d) => (
                        <details key={d.title} className="group">
                          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-[0.95rem] font-medium text-white transition-colors hover:text-moss-300 [&::-webkit-details-marker]:hidden">
                            {d.title}
                            <Plus aria-hidden="true" className="size-4 shrink-0 text-moss-400 transition-transform group-open:rotate-45" />
                          </summary>
                          <p className="pb-5 text-sm leading-relaxed text-steel-300">{d.body}</p>
                        </details>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
              <p className="mt-4 font-mono text-xs leading-relaxed text-steel-400">
                Copies are sent by email as each document is issued. Originals by courier where required.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
