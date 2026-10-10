import type { ReactNode } from "react";
import { SmartLink } from "./SmartLink";

type Props = { eyebrow: string; title: string; intro?: ReactNode; crumb: string; image?: string };

/** Compact dark green header used at the top of inner pages (Contact, legal pages). */
export function PageHero({ eyebrow, title, intro, crumb, image }: Props) {
  return (
    <section className="relative isolate overflow-hidden border-b-4 border-moss-600 bg-forest-900 pt-28 pb-14 text-white sm:pb-16 lg:pt-36">
      {image && (
        <>
          <img src={image} alt="" aria-hidden="true" className="photo absolute inset-0 -z-20 size-full animate-kenburns" />
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-forest-950/80" />
        </>
      )}
      <div className="container-page">
        <nav aria-label="Breadcrumb" className="font-mono text-xs text-steel-300">
          <ol className="flex items-center gap-2">
            <li>
              <SmartLink href="/" className="transition-colors hover:text-white">
                Home
              </SmartLink>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="text-white">
              {crumb}
            </li>
          </ol>
        </nav>
        <p className="label mt-8 text-moss-400">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl text-4xl leading-[1.08] font-semibold text-white sm:text-5xl">{title}</h1>
        {intro && <p className="mt-5 max-w-2xl text-lg leading-relaxed text-steel-200">{intro}</p>}
      </div>
    </section>
  );
}
