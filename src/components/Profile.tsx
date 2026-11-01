import { socialLinks } from '@/constants';
import { Button } from './ui/button';

export const Profile = () => {
  return (
    <aside
      className='max-w-3xl border m-6 border-neutral-600 bg-neutral-900 text-white p-6 rounded-lg lg:sticky
    lg:left-0 lg:top-6 lg:w-96'
    >
      <div className='flex flex-col gap-4'>
        <div className='flex items-center justify-between gap-x-10'>
          <h1 className='text-3xl font-bold'>Best</h1>
          <p className='text-md md:text-[12px]'>Full-Stack Developer</p>
        </div>
        <img
          src='/avatar.jpg'
          alt="Nattasak's profile"
          className='lg:w-96 rounded-2xl object-cover'
        />
        <div className='mt-6'>
          <p className='text-sm text-neutral-300 capitalize'>Specialization:</p>
          <p>Web Development & Cloud</p>
        </div>
        <div>
          <p className='text-sm text-neutral-300 capitalize'>Based in:</p>
          <p>Pathum Thani, Thailand</p>
        </div>
        <div className='flex gap-3 pt-2 text-neutral-500'>
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                href={link.link}
                key={link.link}
                target='_blank'
                className='hover:text-primary transition duration-200 border-2 p-2 hover:border-primary rounded-full'
              >
                <Icon className='size-6' />
              </a>
            );
          })}
        </div>
        <Button
          className='mt-2'
          size='lg'
          render={<a href='#contact'></a>}
        >
          Let's Work!
        </Button>
      </div>
    </aside>
  );
};
