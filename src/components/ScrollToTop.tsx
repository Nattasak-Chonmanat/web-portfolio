import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import type Lenis from 'lenis';

type ScrollToTopProps = {
  lenisRef: React.RefObject<Lenis | null>;
};

export const ScrollToTop = ({ lenisRef }: ScrollToTopProps) => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const rafId = requestAnimationFrame(() => {
      const lenis = lenisRef.current;

      if (hash) {
        const target = document.getElementById(
          decodeURIComponent(hash.slice(1)),
        );

        if (target) {
          lenis?.scrollTo(target, {
            immediate: pathname.includes('/projects'),
            offset: -40
          });
        }
      } else {
        lenis?.scrollTo(0, {
          immediate: true,
        });
      }
    });

    return () => cancelAnimationFrame(rafId);
  }, [pathname, hash, lenisRef]);

  return null;
};
