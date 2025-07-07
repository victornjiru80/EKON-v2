import React from 'react';
import { motion } from 'framer-motion';

const Process: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Consultation & Planning',
      description: 'We meet with you to understand your vision, requirements, and budget. Our team creates detailed plans and timelines.'
    },
    {
      number: '02',
      title: 'Design & Engineering',
      description: 'Our architects and engineers develop comprehensive designs that meet all safety standards and your specifications.'
    },
    {
      number: '03',
      title: 'Construction & Execution',
      description: 'With experienced teams and quality materials, we bring your project to life with precision.'
    },
    {
      number: '04',
      title: 'Quality Assurance & Delivery',
      description: 'We conduct thorough inspections and quality checks before handing over your completed project.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-muted-foreground mb-4">Our Process</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We follow a proven four-step process to ensure your construction project is completed on time, within budget, and to the highest quality standards.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.7 }}
              className="relative"
            >
              <div className="bg-white p-6 rounded-lg shadow-md relative">
                <div className="absolute -top-4 left-4 bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-muted-foreground mb-4 mt-4">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;