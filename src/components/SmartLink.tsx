import type { AnchorHTMLAttributes, MouseEvent, ReactNode } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

type Props = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  href: string;
  children: ReactNode;
};

const isExternal = (href: string) => /^(https?:|mailto:|tel:)/.test(href);

/** Smoothly scrolls to a section on the current page, offset for the header. */
export function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return false;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
  return true;
}

/**
 * One link component for every kind of href:
 * - "/#section" smooth-scrolls on the home page, or navigates home then scrolls
 * - "/path" is a client-side route
 * - "https:", "mailto:", "tel:" are plain anchors (external ones open in a new tab)
 */
export function SmartLink({ href, children, onClick, ...rest }: Props) {
  const location = useLocation();
  const navigate = useNavigate();

  if (isExternal(href)) {
    const newTab = href.startsWith("http");
    return (
      <a
        href={href}
        onClick={onClick}
        {...(newTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...rest}
      >
        {children}
      </a>
    );
  }

  const [path, hash] = href.split("#");
  const targetPath = path || "/";

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(e);
    if (e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;

    if (location.pathname === targetPath) {
      e.preventDefault();
      if (hash) {
        scrollToId(hash);
        window.history.replaceState(null, "", `${targetPath}#${hash}`);
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
        if (location.hash) window.history.replaceState(null, "", targetPath);
      }
    } else if (hash) {
      e.preventDefault();
      navigate(`${targetPath}#${hash}`);
    }
  };

  return (
    <Link to={href} onClick={handleClick} {...rest}>
      {children}
    </Link>
  );
}
