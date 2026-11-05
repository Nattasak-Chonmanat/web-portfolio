import { navLinks } from '@/constants';
import { cn } from 'cn';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

const FloatingMenu = () => {
  const [active, setActive] = useState('#hero');
  const location = useLocation();

  return (
    <div
      className='fixed right-10 top-1/2 -translate-y-1/2
    bg-black border border-neutral-600 pt-4 rounded-full z-10 hidden lg:block'
    >
      {navLinks.map((link) => {
        const Icon = link.icon;
        return (
          <a
            href={location.pathname === '/' ? link.link : `/${link.link}`}
            key={link.label}
            onClick={() => setActive(link.link)}
            className={cn(
              'text-neutral-400 flex items-center gap-2 hover:text-primary transition-colors duration-200 mb-6 px-4',
              active === link.link && 'text-primary',
            )}
          >
            <Icon className='size-5'></Icon>
          </a>
        );
      })}
    </div>
  );
};

export default FloatingMenu;
