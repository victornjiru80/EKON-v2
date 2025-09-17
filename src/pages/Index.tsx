import React, { useEffect, useState, useRef } from 'react';
import Hero from '@/components/Hero';
import WhyChooseUs from '@/components/WhyChooseUs';
import Stats from '@/components/Stats';
import Process from '@/components/Process';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';

const sectionVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.5,
      type: "spring" as const,
      stiffness: 60,
    },
  }),
};

const Index: React.FC = () => {
  const [isSticky, setIsSticky] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const heroBottom = heroRef.current.getBoundingClientRect().bottom;
        setIsSticky(heroBottom <= 0);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <main className="pt-0">
        <Navbar transparent={!isSticky} />
        <div ref={heroRef}>
          <Hero />
        </div>
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
        <div className="h-8 sm:h-12 md:h-16"></div>
        <motion.section
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05, margin: "-200px 0px -200px 0px" }}
          custom={2}
          className="relative z-10"
        >
          <Process />
        </motion.section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;