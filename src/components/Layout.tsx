import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { WhatsAppButton } from "./WhatsAppButton";
import { scrollToId } from "./SmartLink";

/** Handles scroll position on navigation: top of page, or the #section in the URL. */
function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Wait a frame so the new page has rendered before scrolling to the section.
      const id = decodeURIComponent(hash.slice(1));
      const raf = requestAnimationFrame(() => {
        if (!scrollToId(id)) window.scrollTo(0, 0);
      });
      return () => cancelAnimationFrame(raf);
    }
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname, hash]);

  return null;
}

export function Layout() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:border focus:border-forest-900 focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-forest-900"
      >
        Skip to content
      </a>
      <ScrollManager />
      <Navbar />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
