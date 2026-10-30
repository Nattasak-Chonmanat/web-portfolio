import { fadeUp, staggerContainer } from '@/lib/animations';
import { motion } from 'motion/react';
import { SectionHeaders } from './SectionHeaders';
import { education, experience, tools } from '@/constants';
import { ExpCard } from '@/components/ExpCard';
import { ToolsCard } from '@/components/ToolsCard';

export const Resume = () => {
  return (
    <motion.section
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer(0)}
      className='mt-30 scroll-mt-10'
      id='resume'
    >
      <SectionHeaders
        subtitle='Resume'
        title='Education and practical experience'
      />
      <motion.p
        variants={fadeUp}
        className='mt-4 text-neutral-300'
      >
        From academic studies to real-world experience, every opportunity has
        been a chance to learn and grow. I've gained knowledge in Computer
        Science while developing practical skills through projects and
        internship experience. I'm passionate about expanding my knowledge and
        applying what I learn to build meaningful software.
      </motion.p>
      <div className='grid gap-x-10 my-16 md:grid-cols-2'>
        <motion.div
          variants={fadeUp}
          className='mb-16 md:mb-0'
        >
          <h2 className='text-3xl font-semibold mb-8'>Education</h2>
          <div className='space-y-8 border-l border-neutral-700 pl-6'>
            {education.map((item, i) => {
              return (
                <ExpCard
                  item={item}
                  key={i}
                />
              );
            })}
          </div>
        </motion.div>
        <motion.div variants={fadeUp}>
          <h2 className='text-3xl font-semibold mb-8'>Work Experience</h2>
          <div className='space-y-8 border-l border-border pl-6'>
            {experience.map((item, i) => {
              return (
                <ExpCard
                  item={item}
                  key={i}
                />
              );
            })}
          </div>
        </motion.div>
      </div>

      <div className='my-16'>
        <motion.h2
          variants={fadeUp}
          className='text-3xl font-semibold mb-8 capitalize'
        >
          My favorite tools
        </motion.h2>
        <motion.div
          variants={staggerContainer(0.5)}
          initial='hidden'
          viewport={{ once: true, amount: 0.3 }}
          whileInView='visible'
          className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5 '
        >
          {tools.map((tool, i) => {
            return (<ToolsCard tool={tool} key={i}/>)
          })}
        </motion.div>
      </div>
    </motion.section>
  );
};
