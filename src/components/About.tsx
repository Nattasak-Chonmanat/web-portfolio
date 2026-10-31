import { fadeUp, staggerContainer } from '@/lib/animations';
import { motion } from 'motion/react';
import { SectionHeaders } from './SectionHeaders';
import { Button } from './ui/button';

export const About = () => {
  return (
    <motion.section
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer(0)}
      className='mt-30 scroll-mt-10'
      id='about'
    >
      <SectionHeaders
        title='Growing Through Every Challenge'
        subtitle='About Me'
      />
      <motion.p
        variants={fadeUp}
        className='mt-4 text-neutral-300'
      >
        I'm a fourth-year Computer Science student at Thammasat University with
        a passion for software development and problem-solving. I'm particularly
        interested in full-stack and backend development, and enjoy building web
        applications while exploring new technologies to expand my technical
        skills.
      </motion.p>

      <motion.p
        variants={fadeUp}
        className='mt-4 text-neutral-300'
      >
        Through academic projects and internship experience, I've gained
        hands-on experience in software development, database design, and
        working with different technologies. I'm always eager to learn, take on
        new challenges, and grow as a Developer by building reliable and
        meaningful software.
      </motion.p>

      <motion.div
        variants={fadeUp}
        transition={{ delay: 0.2 }}
      >
        <Button className='mt-5 cursor-pointer' render={
          <a href='#contact'></a>
        }>Contact Me</Button>
      </motion.div>
    </motion.section>
  );
};
