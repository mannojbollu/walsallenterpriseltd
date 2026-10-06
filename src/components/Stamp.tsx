import { useId } from "react";

type Props = { lines: readonly string[]; className?: string };

/**
 * Circular rubber stamp drawn in SVG, with slightly broken ink so it reads as
 * hand-applied. Animates in when an ancestor `.reveal` becomes visible.
 */
export function Stamp({ lines, className = "" }: Props) {
  const id = useId().replace(/:/g, "");
  const [top, middle, bottom] = lines;
  return (
    <svg viewBox="0 0 200 200" className={`stamp text-moss-700 ${className}`} aria-hidden="true">
      <defs>
        <path id={`${id}-top`} d="M30 100a70 70 0 0 1 140 0" />
        <path id={`${id}-bot`} d="M20 100a80 80 0 0 0 160 0" />
        <filter id={`${id}-ink`}>
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed="4" result="noise" />
          <feColorMatrix in="noise" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 -2.4 2.2" result="mask" />
          <feComposite in="SourceGraphic" in2="mask" operator="in" />
        </filter>
      </defs>
      <g filter={`url(#${id}-ink)`} fill="currentColor" stroke="currentColor">
        <circle cx="100" cy="100" r="94" fill="none" strokeWidth="5" />
        <circle cx="100" cy="100" r="84" fill="none" strokeWidth="1.5" />
        <circle cx="100" cy="100" r="50" fill="none" strokeWidth="1.5" />
        <text fontFamily="IBM Plex Mono, monospace" fontSize="15" fontWeight="600" letterSpacing="3" stroke="none">
          <textPath href={`#${id}-top`} startOffset="50%" textAnchor="middle">
            {top?.toUpperCase()}
          </textPath>
        </text>
        <text fontFamily="IBM Plex Mono, monospace" fontSize="13" letterSpacing="3" stroke="none">
          <textPath href={`#${id}-bot`} startOffset="50%" textAnchor="middle">
            {bottom?.toUpperCase()}
          </textPath>
        </text>
        <text
          x="100"
          y="108"
          textAnchor="middle"
          fontFamily="Saira Stencil One, sans-serif"
          fontSize="24"
          stroke="none"
        >
          {middle?.toUpperCase()}
        </text>
        <path d="M60 128h80" strokeWidth="1.5" fill="none" />
      </g>
    </svg>
  );
}
