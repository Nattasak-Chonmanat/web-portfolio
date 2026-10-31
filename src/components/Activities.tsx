import { staggerContainer } from "@/lib/animations";
import { motion } from "motion/react"
import { SectionHeaders } from "@/components/SectionHeaders";
import { activitiesData } from "@/constants";
import { ActivityCard } from "@/components/ActivityCard";

export const Activities = () => {
  return (
    <motion.section
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer(0)}
      className='mt-30 scroll-mt-10'
      id='activities'
    >
      <SectionHeaders
        subtitle='Activities'
        title='Learning Beyond the Classroom'
      />
      <motion.div
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer(0.5)}
        className='grid md:grid-cols-2 gap-10 mt-10'
      >
        {activitiesData.map((act, i) => (
          <ActivityCard
            imgSrc={act.imgSrc}
            title={act.title}
            organization={act.organization}
            date={act.date}
            description={act.description}
            tags={act.tags}
            key={i}
          />
        ))}
      </motion.div>
    </motion.section>
  );
}
