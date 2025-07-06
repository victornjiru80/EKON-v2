import React from 'react';
import { CheckCircle, Award, Users, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const WhyChooseUs: React.FC = () => {
  const reasons = [
    {
      icon: <CheckCircle className="h-8 w-8 text-primary" />,
      title: "Quality Assurance",
      description: "We ensure the highest quality standards in every project we undertake."
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "Expert Team",
      description: "Our certified professionals bring years of experience to your project."
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Customer Focus",
      description: "We prioritize client satisfaction and maintain clear communication."
    },
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: "Timely Delivery",
      description: "We complete projects on time without compromising on quality."
    }
  ];

  return (
    <section className="py-16 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose EKON Construction?
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
              transition={{ delay: index * 0.1, duration: 0.7 }}
              whileHover={{ y: -5 }}
              className="text-center bg-white/80 backdrop-blur-sm rounded-lg p-6 hover:shadow-lg transition-all duration-300 border-0"
            >
              <div className="flex justify-center mb-4">
                {reason.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">{reason.title}</h3>
              <p className="text-muted-foreground">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;