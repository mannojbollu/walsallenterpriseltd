import { useEffect } from "react";
import { site } from "../data/site";

type Props = { title: string; description: string; path: string; noindex?: boolean };

function setMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

/**
 * Updates the document title, description, canonical URL and Open Graph tags
 * for the current page. Values come from `seo` in src/data/site.ts.
 */
export function Seo({ title, description, path, noindex = false }: Props) {
  useEffect(() => {
    const url = `${site.url}${path}`;
    document.title = title;
    setMeta("name", "description", description);
    setMeta("name", "robots", noindex ? "noindex, follow" : "index, follow");
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", url);
    setMeta("property", "og:image", `${site.url}${site.ogImage}`);
    setMeta("property", "og:locale", site.locale);

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = url;
  }, [title, description, path, noindex]);

  return null;
}
