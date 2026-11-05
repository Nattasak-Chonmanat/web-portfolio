import { staggerContainer } from '@/lib/animations';
import { projectsData } from '@/constants';
import { motion } from 'motion/react';
import { SectionHeaders } from './SectionHeaders';
import { ProjectCard } from './ProjectCard';

export const Projects = () => {
  return (
    <motion.section
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer(0)}
      className='mt-30 scroll-mt-10'
      id='projects'
    >
      <SectionHeaders
        subtitle='Projects'
        title='My featured projects'
      />
      <motion.div
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer(0.5)}
        className='grid md:grid-cols-2 gap-10 mt-10'
      >
        {projectsData.map((p, i) => (
          <ProjectCard
            project={p}
            key={i}
          />
        ))}
      </motion.div>
    </motion.section>
  );
};
