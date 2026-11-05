import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@/index.css'
import  App   from '@/App.tsx'
import { Sidebar }  from '@/components/Sidebar';
import { Profile } from '@/components/Profile';
import FloatingMenu from '@/components/FloatingMenu';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <div className='min-h-screen lg:flex lg:justify-center lg:items-start lg:gap-10'>
        <Sidebar />
        <FloatingMenu />
        <Profile />
        <App />
      </div>
    </BrowserRouter>
  </StrictMode>,
);
