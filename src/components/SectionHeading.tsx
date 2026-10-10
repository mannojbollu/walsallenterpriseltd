import { Reveal } from "./Reveal";

type Props = {
  eyebrow: string;
  title: string;
  intro?: string;
  tone?: "light" | "dark";
  className?: string;
};

/** Ledger-style heading: index label on the left, title and intro on the right, ruled above. */
export function SectionHeading({ eyebrow, title, intro, tone = "light", className = "" }: Props) {
  const dark = tone === "dark";
  return (
    <Reveal
      className={`grid gap-4 border-t pt-6 lg:grid-cols-12 lg:gap-10 ${
        dark ? "border-white/20" : "border-forest-900"
      } ${className}`}
    >
      <p className={`label lg:col-span-3 ${dark ? "text-moss-400" : "text-moss-700"}`}>{eyebrow}</p>
      <div className="max-w-3xl lg:col-span-9">
        <h2 className={`text-3xl leading-[1.12] font-semibold sm:text-4xl ${dark ? "text-white" : ""}`}>{title}</h2>
        {intro && (
          <p className={`mt-4 text-base leading-relaxed sm:text-lg ${dark ? "text-steel-300" : "text-steel-600"}`}>
            {intro}
          </p>
        )}
      </div>
    </Reveal>
  );
}
