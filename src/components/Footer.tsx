import { site } from "../data/site";
import { commodities } from "../data/content";
import { Logo } from "./Logo";
import { SmartLink } from "./SmartLink";
import { MessageCircle } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t-4 border-moss-600 bg-navy-950 text-steel-300">
      <div className="container-page pt-16 pb-10">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SmartLink href="/" aria-label={`${site.name} home`}>
              <Logo tone="light" />
            </SmartLink>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-steel-400">{site.description}</p>
            <a
              href={site.contact.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-moss-300 hover:text-white"
            >
              <MessageCircle aria-hidden="true" className="size-4" />
              WhatsApp {site.contact.phone}
            </a>
          </div>

          <nav aria-label="Footer" className="grid gap-10 sm:grid-cols-[1fr_1.2fr_1.6fr] lg:col-span-8">
            <div>
              <h2 className="label text-white">Site</h2>
              <ul className="mt-5 space-y-3 text-sm">
                {site.nav.map((item) => (
                  <li key={item.href}>
                    <SmartLink href={item.href} className="transition-colors hover:text-white">
                      {item.label}
                    </SmartLink>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="label text-white">Commodities</h2>
              <ul className="mt-5 space-y-3 text-sm">
                {commodities.map((c) => (
                  <li key={c.title}>
                    <SmartLink href="/#commodities" className="transition-colors hover:text-white">
                      {c.title}
                    </SmartLink>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="label text-white">Warehouse & office</h2>
              <dl className="mt-5 space-y-4 text-sm">
                <div>
                  <dt className="font-mono text-xs text-steel-500">Tel.</dt>
                  <dd>
                    <a href={`tel:${site.contact.phoneHref}`} className="transition-colors hover:text-white">
                      {site.contact.phone}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-mono text-xs text-steel-500">Email</dt>
                  <dd className="[overflow-wrap:anywhere]">
                    <a href={`mailto:${site.contact.email}`} className="transition-colors hover:text-white">
                      {site.contact.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-mono text-xs text-steel-500">Hours</dt>
                  <dd>
                    {site.contact.hours.map((h) => (
                      <span key={h.days} className="block">
                        {h.days}: {h.time}
                      </span>
                    ))}
                  </dd>
                </div>
                <div>
                  <dt className="font-mono text-xs text-steel-500">Address</dt>
                  <dd>
                    <address className="not-italic">
                      {site.contact.address.map((line) => (
                        <span key={line} className="block">
                          {line}
                        </span>
                      ))}
                    </address>
                  </dd>
                </div>
              </dl>
            </div>
          </nav>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 font-mono text-xs text-steel-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name}. {site.legal.companyNumber}.
          </p>
          <ul className="flex gap-6">
            <li>
              <SmartLink href="/privacy" className="transition-colors hover:text-white">
                Privacy Policy
              </SmartLink>
            </li>
            <li>
              <SmartLink href="/terms" className="transition-colors hover:text-white">
                Terms of Use
              </SmartLink>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
