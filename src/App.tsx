import { Hero } from '@/components/Hero';
import { Projects } from '@/components/Projects';
import { About } from '@/components/About';
import { Resume } from '@/components/Resume';
import { Contact } from '@/components/Contact';
import Lenis from 'lenis';
import { useEffect } from 'react';
import { Activities } from '@/components/Activities';

const App = () => {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);

      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <main className='flex flex-col container mx-auto p-10 max-w-4xl lg:pr-10 lg:pl-10 lg:max-w-6xl'>
      <Hero />
      <About />
      <Projects />
      <Activities />
      <Resume />
      <Contact />
    </main>
  );
};

export default App;
