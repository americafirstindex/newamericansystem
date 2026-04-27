import { useEffect } from 'react';

/**
 * Attach an IntersectionObserver to all .rv elements inside a container ref.
 * When each element scrolls into view, the 'v' class is added, triggering
 * the CSS reveal transition defined in global.css.
 *
 * @param {React.RefObject} containerRef - ref to the root element to search within
 */
export function useReveal(containerRef) {
  useEffect(() => {
    const container = containerRef?.current ?? document;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('v');
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -20px 0px' }
    );

    const els = container.querySelectorAll('.rv');
    els.forEach((el) => obs.observe(el));

    return () => obs.disconnect();
  }, [containerRef]);
}

/**
 * Attach an IntersectionObserver to a single ref element.
 */
export function useRevealRef(ref) {
  useEffect(() => {
    if (!ref?.current) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) ref.current.classList.add('v');
      },
      { threshold: 0.08, rootMargin: '0px 0px -20px 0px' }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref]);
}
