import { site } from "../data/site";

type Props = { tone?: "light" | "dark"; className?: string };

/** Colours from the client's final logo (Desktop/Walsall Enterprise Logo/logo-final.html). */
const C = { box: "#B9DD84", ribs: "#94C25E", ink: "#123A21", arrow: "#E4F2C8" };

const ribs = Array.from({ length: 23 }, (_, i) => (i + 1) * 21.25);
const corners: [number, number][] = [[0, 0], [484, 0], [0, 258], [484, 258]];

/**
 * The WEL container mark: a light-green container stencilled "WEL" with a reuse arrow
 * sweeping back underneath. Drawn in the logo's own 510 × 380 units. On light
 * backgrounds the pale arrow switches to dark green so it stays visible.
 */
export function LogoMark({ tone = "dark", className = "" }: Props) {
  return (
    <svg viewBox="0 0 510 380" className={className} aria-hidden="true">
      <rect width="510" height="280" fill={C.box} />
      <g stroke={C.ribs} strokeWidth="3">
        {ribs.map((x) => (
          <path key={x} d={`M${x} 14v16M${x} 250v16`} />
        ))}
      </g>
      <g fill={C.ink}>
        {corners.map(([x, y]) => (
          <rect key={`${x}-${y}`} x={x} y={y} width="26" height="22" />
        ))}
      </g>
      <text
        x="255"
        y="206"
        textAnchor="middle"
        textLength="428"
        lengthAdjust="spacing"
        fontFamily="'Saira Stencil One', sans-serif"
        fontSize="196"
        fill={C.ink}
      >
        WEL
      </text>
      <g className={tone === "light" ? "" : "text-forest-700"} fill={tone === "light" ? C.arrow : "currentColor"}>
        <path
          d="M466.4 320.65A225 75 0 0 1 43.6 320.65"
          fill="none"
          stroke={tone === "light" ? C.arrow : "currentColor"}
          strokeWidth="12"
        />
        <path d="M58.46 304.43 18.53 297.69 28.74 336.87Z" />
      </g>
    </svg>
  );
}

/** Full lockup: WEL mark plus WALSALL / ENTERPRISE LTD, set in the site's fonts. */
export function Logo({ tone = "dark", className = "" }: Props) {
  const light = tone === "light";
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <LogoMark tone={tone} className="h-10 w-auto shrink-0" />
      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-[1.2rem] font-extrabold tracking-[0.02em] uppercase [font-stretch:87.5%] ${
            light ? "text-white" : "text-forest-900"
          }`}
        >
          {site.shortName}
        </span>
        <span
          className={`mt-1 font-stencil text-[0.62rem] tracking-[0.18em] uppercase ${
            light ? "text-[#C8E6A0]" : "text-forest-700"
          }`}
        >
          {site.logoSuffix}
        </span>
      </span>
    </span>
  );
}
