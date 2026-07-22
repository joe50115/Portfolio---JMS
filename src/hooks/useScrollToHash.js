import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Scrolls the element matching the current URL hash into view. React Router
// doesn't do this automatically, so links like `/archive/:slug#development-log`
// (used by the project card's "Development Log" button) need this to land
// on the right section instead of just the top of the page.
export function useScrollToHash(deps = []) {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const el = document.getElementById(hash.slice(1));
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hash, ...deps]);
}
