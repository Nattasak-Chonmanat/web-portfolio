import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import type Lenis from 'lenis';

type ScrollToTopProps = {
  lenisRef: React.RefObject<Lenis | null>;
};

export const ScrollToTop = ({ lenisRef }: ScrollToTopProps) => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const lenis = lenisRef.current;

    if (hash) {
      const target = document.querySelector(hash);

      if (target) {
        lenis?.scrollTo(target as HTMLElement, {
          immediate: false,
        });
      }
    } else {
      lenis?.scrollTo(0, {
        immediate: true,
      });
    }
  }, [pathname, hash, lenisRef]);

  return null;
};
