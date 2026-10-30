import { fadeUp } from '@/lib/animations';
import type { ProjectType } from '@/types';
import { motion } from 'motion/react';

export const ProjectCard = ({
  imgSrc,
  projectLink,
  tags,
  title,
}: ProjectType) => {
  return (
    <motion.div
      variants={fadeUp}
      className='relative'
    >
      <figure className='overflow-hidden rounded-md aspect-[16/9]'>
        <img
          src={imgSrc}
          alt={title}
          className='w-full h-full object-cover rounded-md transition duration-500 hover:scale-110'
        />
      </figure>

      <div className='absolute bottom-0 p-2 flex gap-2'>
        {tags.map((tag) => (
          <span
            key={tag}
            className='bg-background hover:bg-primary hover:text-black py-1 px-2 text-sm cursor-pointer rounded-sm'
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
};
