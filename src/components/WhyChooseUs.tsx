import React from 'react';
import { CheckCircle, Award, Users, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const WhyChooseUs: React.FC = () => {
  const reasons = [
    {
      icon: '/projects/quality.jpg',
      title: "Quality Assurance",
      description: "We ensure the highest quality standards in every project we undertake."
    },
    {
      icon: '/projects/expert.jpg',
      title: "Expert Team",
      description: "Our certified professionals bring years of experience to your project."
    },
    {
      icon: '/projects/customer.jpg',
      title: "Customer Focus",
      description: "We prioritize client satisfaction and maintain clear communication."
    },
    {
      icon: '/projects/delivery.jpg',
      title: "Timely Delivery",
      description: "We complete projects on time without compromising on quality."
    }
  ];

  return (
    <section className="pt-16 pb-6 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-muted-foreground mb-4">
            Why Choose Tekon Builders?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We deliver exceptional construction services with unmatched quality and reliability.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.7 }}
              whileHover="hovered"
              className="relative h-64 rounded-lg overflow-hidden shadow-lg group cursor-pointer"
            >
              <motion.div
                className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-500"
                style={{ backgroundImage: `url(${reason.icon})` }}
                variants={{
                  hovered: { scale: 1.15 },
                  initial: { scale: 1 }
                }}
                initial="initial"
                animate="initial"
              />
              <motion.div
                className="absolute inset-0 bg-black bg-opacity-70 group-hover:bg-opacity-0 transition-all duration-500"
                variants={{
                  hovered: { opacity: 0 },
                  initial: { opacity: 1 }
                }}
                initial="initial"
                animate="initial"
              />
              <motion.div
                className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4"
                variants={{
                  hovered: { opacity: 0 },
                  initial: { opacity: 1 }
                }}
                initial="initial"
                animate="initial"
              >
                <h3 className="text-xl font-semibold mb-3">{reason.title}</h3>
                <p className="text-base">{reason.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;