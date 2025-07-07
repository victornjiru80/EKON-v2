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
      icon: '/projects/commercial.jpg'
    },
    {
      title: 'Residential Construction',
      description: 'Custom homes, apartments, and residential developments designed for modern living.',
      icon: '/projects/residential.jpg'
    },
    {
      title: 'Building Machinery & Tools',
      description: 'We provide equipment such as Trappers, Concrete Mixers, and other construction tools.',
      icon: '/projects/trappers.jpg'
    },
    {
      title: 'Architectural Design Plans',
      description: 'Architectural designs, Structural designs, and Interior design services for your project.',
      icon: '/projects/plans.jpg'
    },
    {
      title: 'Renovation & Remodeling',
      description: 'Transform existing spaces with our expert renovation and remodeling services.',
      icon: '/projects/renovation.jpg'
    },
    {
      title: 'Project Management',
      description: 'Complete project oversight from planning to completion with experienced management.',
      icon: '/projects/management.jpg'
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
              className="rounded-xl bg-white shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <img
                src={service.icon}
                alt={service.title + " icon"}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-muted-foreground mb-2 text-center">{service.title}</h3>
                <p className="text-gray-600 text-center">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;