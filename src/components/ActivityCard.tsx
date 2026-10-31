import { fadeUp } from '@/lib/animations';
import type { ActivityType } from '@/types';
import { motion } from 'motion/react';
import { CalendarDays, Building2 } from 'lucide-react';

export const ActivityCard = ({
  imgSrc,
  title,
  organization,
  date,
  description,
  tags,
}: ActivityType) => {
  return (
    <motion.article
      variants={fadeUp}
      className='group flex flex-col gap-4'
    >
      {/* Activity Image */}
      <figure className='overflow-hidden rounded-lg aspect-[16/9]'>
        <img
          src={imgSrc}
          alt={title}
          className='w-full h-full object-cover transition duration-500 group-hover:scale-105'
        />
      </figure>

      {/* Activity Information */}
      <div className='flex flex-col gap-3'>
        {/* Date & Organization */}
        <div className='flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-neutral-400'>
          <span className='flex items-center gap-2'>
            <CalendarDays size={15} />
            {date}
          </span>

          <span className='flex items-center gap-2'>
            <Building2 size={15} />
            {organization}
          </span>
        </div>

        {/* Title */}
        <h3 className='text-xl md:text-2xl font-semibold'>{title}</h3>

        {/* Description */}
        <p className='text-sm leading-relaxed text-neutral-400'>
          {description}
        </p>

        {/* Tags */}
        <div className='flex flex-wrap gap-2 mt-1'>
          {tags.map((tag) => (
            <span
              key={tag}
              className='border border-neutral-700 rounded-sm px-3 py-1 text-xs text-neutral-300 transition hover:border-primary hover:text-primary'
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
};
