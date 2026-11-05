import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { Route, Routes } from 'react-router-dom';
import { Toaster } from 'sonner';

import { Hero } from '@/components/Hero';
import { Projects } from '@/components/Projects';
import { About } from '@/components/About';
import { Resume } from '@/components/Resume';
import { Contact } from '@/components/Contact';
import { Activities } from '@/components/Activities';
import { ProjectDetail } from '@/components/ProjectDetail';
import { ScrollToTop } from './components/ScrollToTop';

const HomePage = () => (
  <>
    <Hero />
    <About />
    <Projects />
    <Activities />
    <Resume />
    <Contact />
  </>
);

const App = () => {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis();
    lenisRef.current = lenis;

    let rafId = 0;

    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return (
    <>
      <Toaster position='top-right' />

      <ScrollToTop lenisRef={lenisRef} />

      <main className='flex flex-col container mx-auto p-10 max-w-4xl lg:pr-10 lg:pl-10 lg:max-w-6xl'>
        <Routes>
          <Route
            path='/'
            element={<HomePage />}
          />
          <Route
            path='/projects/:slug'
            element={<ProjectDetail />}
          />
          <Route
            path='*'
            element={<ProjectDetail />}
          />
        </Routes>
      </main>
    </>
  );
};

export default App;
