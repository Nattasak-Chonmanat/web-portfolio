import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';
import { projectsData } from '@/constants';

export const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projectsData.find((item) => item.slug === slug);

  if (!project) {
    return (
      <section className='mt-20 min-h-[50vh]'>
        <h1 className='text-3xl font-bold'>Project not found</h1>
        <p className='mt-3 text-neutral-400'>
          The project you are looking for does not exist.
        </p>
        <Link
          to='/#projects'
          className='mt-8 inline-flex items-center gap-2 text-primary hover:underline'
        >
          <ArrowLeft size={16} /> Back to projects
        </Link>
      </section>
    );
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      className='mt-10 scroll-mt-10 pb-20'
      id={project.slug}
    >
      <Link
        to='/#projects'
        className='inline-flex items-center gap-2 text-neutral-400 transition hover:text-primary'
      >
        <ArrowLeft size={16} /> Back to projects
      </Link>
      <div className='mt-8'>
        <div className='flex flex-wrap gap-2'>
          {project.tags.map((tag) => (
            <span
              key={tag}
              className='rounded-sm bg-neutral-800 px-2 py-1 text-sm text-primary'
            >
              {tag}
            </span>
          ))}
        </div>
        <h1 className='mt-5 text-3xl md:text-5xl font-bold tracking-tight'>
          {project.title}
        </h1>
        <div className='mt-8 max-w-4xl space-y-6'>
          {project.description.map((paragraph, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className='text-base md:text-lg leading-8 text-neutral-300'
            >
              {paragraph}
            </motion.p>
          ))}
        </div>
      </div>
      <div className='mt-16 grid gap-8 border-t border-neutral-700 pt-8 md:grid-cols-[1fr_auto]'>
        {project.images.map((image, index) => (
          <img
            key={image}
            src={image}
            alt={`${project.title} screenshot ${index + 1}`}
            className='w-full rounded-lg border border-neutral-700 object-cover'
          />
        ))}
      </div>
      <div className='mt-10 grid gap-8 border-t border-neutral-700 pt-8 md:grid-cols-[1fr_auto]'>
        <div>
          <h2 className='text-xl font-semibold'>Technologies</h2>
          <div className='mt-4 flex flex-wrap gap-2'>
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className='rounded-sm border border-neutral-700 px-3 py-1 text-sm text-neutral-300 transition hover:border-primary hover:text-primary'
              >
                {technology}
              </span>
            ))}
          </div>
        </div>
        <div className='flex flex-wrap items-start gap-3'>
          <a
            href={project.link}
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground transition hover:opacity-80'
          >
            GitHub <ExternalLink size={15} />
          </a>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center gap-2 rounded-md border border-neutral-600 px-4 py-2 text-sm transition hover:border-primary hover:text-primary'
            >
              Live Demo <ExternalLink size={15} />
            </a>
          )}
        </div>
      </div>
    </motion.section>
  );
};
