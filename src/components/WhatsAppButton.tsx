import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { site } from "../data/site";

/** Fixed WhatsApp shortcut for phones and tablets. Appears once the visitor scrolls past the hero. */
export function WhatsAppButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={site.contact.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`WhatsApp ${site.contact.phone}`}
      className={`fixed right-4 bottom-4 z-40 inline-flex h-12 items-center gap-2 bg-moss-600 px-4 text-sm font-semibold text-white ring-1 ring-moss-800 transition-[opacity,translate] duration-300 hover:bg-moss-700 lg:hidden ${
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <MessageCircle aria-hidden="true" className="size-5" />
      WhatsApp
    </a>
  );
}
