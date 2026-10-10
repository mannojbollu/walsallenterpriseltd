import { site } from "../data/site";

type Props = { tone?: "light" | "dark"; className?: string };

/**
 * Logo: a recycle-arrows mark (three chasing arrows) plus the company name from site.ts.
 * Each arrow is one arc with its head, repeated at 120° turns. Keep public/favicon.svg in step.
 */
const ARROW = (
  <>
    <path d="M17.56 7.14A9 9 0 0 1 24.86 17.56" fill="none" strokeWidth="2.75" />
    <path d="M28.1 18.1 23.6 21.1 21.6 16.9Z" stroke="none" />
  </>
);

export function Logo({ tone = "dark", className = "" }: Props) {
  const light = tone === "light";
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <svg
        viewBox="0 0 32 32"
        className={`size-9 shrink-0 ${light ? "fill-moss-400 stroke-moss-400" : "fill-moss-600 stroke-moss-600"}`}
        aria-hidden="true"
      >
        <g>{ARROW}</g>
        <g transform="rotate(120 16 16)">{ARROW}</g>
        <g transform="rotate(240 16 16)">{ARROW}</g>
      </svg>
      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-[1.05rem] font-bold tracking-[0.04em] uppercase ${
            light ? "text-white" : "text-navy-900"
          }`}
        >
          {site.shortName}
        </span>
        <span
          className={`mt-1 font-mono text-[0.62rem] font-medium tracking-[0.24em] uppercase ${
            light ? "text-steel-300" : "text-steel-500"
          }`}
        >
          {site.logoSuffix}
        </span>
      </span>
    </span>
  );
}
