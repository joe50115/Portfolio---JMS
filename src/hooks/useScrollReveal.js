import { useEffect, useRef } from "react";

// Adds an "in-view" class to the returned ref's element once it scrolls
// into the viewport, powering the site's fade/slide-up scroll animations
// (see .reveal / .reveal.in-view in index.css). Reveals once and stops
// observing — sections don't re-hide when scrolled past.
export function useScrollReveal() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("in-view");
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}
