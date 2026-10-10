import { Reveal } from "./Reveal";

type Props = { eyebrow: string; title: string; intro?: string; tone?: "light" | "dark" };

/** Section heading in the hero's style: a short rule and tagline, then a large bold title. */
export function SectionTitle({ eyebrow, title, intro, tone = "light" }: Props) {
  const dark = tone === "dark";
  return (
    <Reveal className="max-w-3xl">
      <p className={`flex items-center gap-4 font-semibold ${dark ? "text-white" : "text-moss-700"}`}>
        <span aria-hidden="true" className={`h-0.5 w-10 ${dark ? "bg-[#B9DD84]" : "bg-moss-600"}`} />
        {eyebrow}
      </p>
      <h2 className={`mt-4 text-4xl leading-[1.08] font-extrabold sm:text-5xl ${dark ? "text-white" : ""}`}>{title}</h2>
      {intro && (
        <p className={`mt-4 text-lg leading-relaxed ${dark ? "text-forest-100" : "text-steel-600"}`}>{intro}</p>
      )}
    </Reveal>
  );
}
