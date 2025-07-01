import React from 'react';
import Hero from '@/components/Hero';
import WhyChooseUs from '@/components/WhyChooseUs';
import Stats from '@/components/Stats';
import Process from '@/components/Process';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

const sectionVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.5,
      duration: 0.8,
      type: "spring" as const,
      stiffness: 60,
    },
  }),
};

const Index: React.FC = () => {
  return (
    <div className="min-h-screen">
      <main className="pt-16">
        <Hero />
        <motion.section
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          custom={0}
        >
          <WhyChooseUs />
        </motion.section>
        <motion.section
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          custom={1}
        >
          <Stats />
        </motion.section>
        <motion.section
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          custom={2}
        >
          <Process />
        </motion.section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;