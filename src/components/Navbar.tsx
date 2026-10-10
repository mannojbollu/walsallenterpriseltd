import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Mail, Menu, Phone, X } from "lucide-react";
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
    <header className="fixed inset-x-0 top-0 z-50 bg-forest-900 text-white">
      <nav aria-label="Main" className="container-page flex h-16 items-center justify-between lg:h-24">
        <SmartLink href="/" aria-label={`${site.name} home`} className="shrink-0">
          <Logo tone="light" className="lg:[&>svg]:h-12" />
        </SmartLink>

        {/* Desktop: big contact line on top, menu and CTA underneath */}
        <div className="hidden flex-col items-end gap-2 lg:flex">
          <div className="flex items-center gap-6 text-[0.95rem] font-medium text-forest-100">
            <a href={`tel:${site.contact.phoneHref}`} className="inline-flex items-center gap-2 hover:text-[#C8E6A0]">
              <Phone aria-hidden="true" className="size-5" />
              {site.contact.phone}
            </a>
            <a href={`mailto:${site.contact.email}`} className="inline-flex items-center gap-2 hover:text-[#C8E6A0]">
              <Mail aria-hidden="true" className="size-5" />
              {site.contact.email}
            </a>
          </div>
          <div className="flex items-center gap-2">
            <ul className="flex items-center">
              {site.nav.map((item) => {
                const active = isActive(item.href);
                return (
                  <li key={item.href}>
                    <SmartLink
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={`px-3 py-2 text-[0.95rem] font-medium transition-colors xl:px-4 ${
                        active ? "text-[#C8E6A0]" : "text-white hover:text-[#C8E6A0]"
                      }`}
                    >
                      {item.label}
                    </SmartLink>
                  </li>
                );
              })}
            </ul>
            <ButtonLink href={site.headerCta.href} variant="light" arrow>
              {site.headerCta.label}
            </ButtonLink>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="inline-flex size-11 items-center justify-center text-white transition-colors hover:bg-white/10 lg:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

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
