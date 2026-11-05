import { fadeUp } from '@/lib/animations';
import type { ProjectType } from '@/types';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export const ProjectCard = ({ project }: { project: ProjectType }) => {
  const { imgSrc, tags, title, slug } = project;

  return (
    <Link
      to={`/projects/${slug}#${slug}`}
      className='block cursor-pointer'
    >
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

        <div className='absolute bottom-0 left-0 flex flex-wrap gap-2 p-2'>
          {tags.map((tag) => (
            <span
              key={tag}
              className='whitespace-nowrap bg-background hover:bg-primary hover:text-black py-1 px-2 text-xs md:text-sm rounded-sm transition duration-200'
            >
              {tag}
            </span>
          ))}
        </div>
      </motion.div>
    </Link>
  );
};
