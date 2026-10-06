import { site } from "../data/site";

type Props = { tone?: "light" | "dark"; className?: string };

/**
 * Placeholder logo: a container-door mark plus the company name from site.ts.
 * To use a real logo, replace the <svg> (or the whole component) with
 * <img src={logoUrl} alt={site.name} />. Keep public/favicon.svg in step.
 */
export function Logo({ tone = "dark", className = "" }: Props) {
  const light = tone === "light";
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <svg viewBox="0 0 32 32" className="size-9 shrink-0" aria-hidden="true">
        <rect width="32" height="32" className={light ? "fill-white" : "fill-navy-900"} />
        <g fill="none" strokeWidth="1.75" className={light ? "stroke-navy-900" : "stroke-white"}>
          <rect x="7" y="7" width="18" height="15" />
          <path d="M11.5 7v15M16 7v15M20.5 7v15" />
        </g>
        <rect x="7" y="24" width="18" height="2.5" className="fill-moss-500" />
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
