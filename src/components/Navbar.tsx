import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { site } from "../data/site";
import { Logo } from "./Logo";
import { SmartLink } from "./SmartLink";
import { ButtonLink } from "./Button";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Close the mobile menu on navigation and lock page scroll while it's open.
  useEffect(() => setOpen(false), [location.pathname, location.hash]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  // Only route links get an active state; section anchors share the "/" route.
  const isActive = (href: string) => !href.includes("#") && location.pathname === href;

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Utility bar: desktop only */}
      <div className="hidden bg-forest-950 text-steel-300 lg:block">
        <div className="container-page flex h-9 items-center justify-between font-mono text-[0.75rem]">
          <p className="truncate uppercase tracking-[0.08em]">{site.tagline}</p>
          <div className="flex items-center divide-x divide-white/15">
            <a href={`tel:${site.contact.phoneHref}`} className="pr-5 transition-colors hover:text-white">
              T {site.contact.phone}
            </a>
            <a
              href={site.contact.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 text-moss-300 transition-colors hover:text-white"
            >
              WhatsApp
            </a>
            <a href={`mailto:${site.contact.email}`} className="pl-5 transition-colors hover:text-white">
              E {site.contact.email}
            </a>
          </div>
        </div>
      </div>

      <div className="border-b border-steel-200 bg-white">
        <nav aria-label="Main" className="container-page flex h-16 items-center justify-between">
          <SmartLink href="/" aria-label={`${site.name} home`} className="shrink-0">
            <Logo />
          </SmartLink>

          <ul className="hidden h-full items-stretch lg:flex">
            {site.nav.map((item) => {
              const active = isActive(item.href);
              return (
                <li key={item.href}>
                  <SmartLink
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`flex h-full items-center border-b-2 px-2.5 text-[0.88rem] xl:px-4 font-medium transition-colors ${
                      active
                        ? "border-moss-600 text-forest-900"
                        : "border-transparent text-steel-600 hover:border-steel-300 hover:text-forest-900"
                    }`}
                  >
                    {item.label}
                  </SmartLink>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-3">
            <div className="hidden sm:block">
              <ButtonLink href={site.headerCta.href} arrow>
                {site.headerCta.label}
              </ButtonLink>
            </div>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className="inline-flex size-11 items-center justify-center text-forest-900 transition-colors hover:bg-steel-100 lg:hidden"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`fixed inset-x-0 top-16 bottom-0 overflow-y-auto bg-white lg:hidden ${open ? "block" : "hidden"}`}
      >
        <div className="container-page flex min-h-full flex-col pt-6 pb-10">
          <ul className="divide-y divide-steel-200 border-y border-steel-200">
            {site.nav.map((item, i) => (
              <li key={item.href}>
                <SmartLink
                  href={item.href}
                  onClick={() => setOpen(false)}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={`flex items-center gap-4 py-4 text-lg font-semibold ${
                    isActive(item.href) ? "text-moss-700" : "text-forest-900"
                  }`}
                >
                  <span className="font-mono text-xs font-medium text-steel-400">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {item.label}
                </SmartLink>
              </li>
            ))}
          </ul>

          <ButtonLink
            href={site.headerCta.href}
            size="lg"
            className="mt-8 w-full"
            arrow
            onClick={() => setOpen(false)}
          >
            {site.headerCta.label}
          </ButtonLink>

          <dl className="mt-auto space-y-2 pt-10 font-mono text-sm text-steel-600">
            <div className="flex gap-3">
              <dt className="text-steel-400">T</dt>
              <dd>
                <a href={`tel:${site.contact.phoneHref}`}>{site.contact.phone}</a>
              </dd>
            </div>
            <div className="flex gap-3">
              <dt className="text-steel-400">W</dt>
              <dd>
                <a href={site.contact.whatsappHref} target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
              </dd>
            </div>
            <div className="flex gap-3">
              <dt className="text-steel-400">E</dt>
              <dd className="[overflow-wrap:anywhere]">
                <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </header>
  );
}
