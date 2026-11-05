import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import type Lenis from 'lenis';

type ScrollToTopProps = {
  lenisRef: React.RefObject<Lenis | null>;
};

export const ScrollToTop = ({ lenisRef }: ScrollToTopProps) => {
  const { pathname } = useLocation();

  useEffect(() => {
    lenisRef.current?.scrollTo(0, {
      immediate: true,
    });
  }, [pathname, lenisRef]);

  return null;
};
