import { lanes } from "../data/content";

/** Departures-board strip of typical lanes. Scrolls continuously; pauses on hover. */
export function LaneBoard() {
  const row = (hidden: boolean) => (
    <ul className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {lanes.map((l, i) => (
        <li key={i} className="flex items-center gap-3 border-r border-white/10 px-6 py-3 whitespace-nowrap">
          <span className="text-white">{l.from}</span>
          <svg viewBox="0 0 24 8" className="h-2 w-6 text-moss-400" aria-hidden="true">
            <path d="M0 4h21M18 1l3 3-3 3" fill="none" stroke="currentColor" strokeWidth="1.5" />
          </svg>
          <span className="text-white">{l.to}</span>
          <span className="text-steel-400">{l.eq}</span>
          <span className="text-kraft-300">{l.cargo}</span>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="corrugated relative border-b border-white/10 bg-navy-950 font-mono text-[0.78rem]">
      <div className="container-page flex items-stretch">
        <p className="label relative z-10 flex shrink-0 items-center gap-2 border-r border-white/15 bg-navy-950 py-3 pr-5 text-moss-400">
          <span className="size-1.5 animate-blink bg-moss-400" aria-hidden="true" />
          Typical lanes
        </p>
        <div className="marquee relative flex min-w-0 flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_4%,black_96%,transparent)]">
          <div className="flex animate-marquee">
            {row(false)}
            {row(true)}
          </div>
        </div>
      </div>
    </div>
  );
}
