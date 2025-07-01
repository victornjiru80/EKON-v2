import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';

const headingVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, type: "spring" as const, stiffness: 60 } }
};

const containerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { type: "spring" as "spring", stiffness: 70, damping: 15 }
  },
};

const iconVariant = {
  animate: {
    y: [0, -8, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "loop" as "loop",
      ease: "easeInOut" // use a supported string value
    }
  }
};

const Services: React.FC = () => {
  const services = [
    {
      title: 'Commercial Construction',
      description: 'Office buildings, retail spaces, and commercial complexes built to the highest standards.',
      icon: 'https://img.icons8.com/?size=100&id=YFY0zG9WOavq&format=png&color=000000'
    },
    {
      title: 'Residential Construction',
      description: 'Custom homes, apartments, and residential developments designed for modern living.',
      icon: 'https://img.icons8.com/?size=100&id=iJzm3AFQCS4W&format=png&color=000000'
    },
    {
      title: 'Healthcare Facilities',
      description: 'Hospitals, clinics, and medical centers with specialized construction requirements.',
      icon: 'https://img.icons8.com/?size=100&id=rBh1fuOC6Bjx&format=png&color=000000'
    },
    {
      title: 'Infrastructure Projects',
      description: 'Roads, bridges, and public infrastructure that connects communities.',
      icon: 'https://img.icons8.com/?size=100&id=DKG5EanykiIZ&format=png&color=000000'
    },
    {
      title: 'Renovation & Remodeling',
      description: 'Transform existing spaces with our expert renovation and remodeling services.',
      icon: 'https://img.icons8.com/?size=100&id=O1cboYBdJsgF&format=png&color=000000'
    },
    {
      title: 'Project Management',
      description: 'Complete project oversight from planning to completion with experienced management.',
      icon: 'https://img.icons8.com/?size=100&id=67345&format=png&color=000000'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={headingVariant}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-muted-foreground text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive construction services tailored to meet your specific needs and requirements.
          </p>
        </motion.div>
        
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariant}
              whileHover={{
                scale: 1.045,
                boxShadow: "0 8px 32px 0 rgba(249,115,22,0.13)",
                transition: { type: "spring", stiffness: 300, damping: 18 }
              }}
              whileTap={{ scale: 0.98 }}
              className="rounded-xl bg-white shadow-md hover:shadow-xl transition-all duration-300"
            >
              <CardHeader className="text-center">
                <motion.div
                  
                  animate="animate"
                  className="text-4xl mb-4 flex justify-center"
                >
                  <img src={service.icon} alt={service.title + " icon"} className="w-16 h-16" />
                </motion.div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">{service.description}</p>
              </CardContent>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;