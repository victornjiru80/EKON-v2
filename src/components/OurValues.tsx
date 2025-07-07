import React from 'react';
import { Shield, Award, Users, Clock, Heart, Zap, Lightbulb } from 'lucide-react';
import { motion } from 'framer-motion';

const OurValues: React.FC = () => {
  const values = [
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Safety First",
      description: "We prioritize the safety of our workers, clients, and the community in every project we undertake."
    },
    {
      icon: <Award className="w-8 h-8 text-primary" />,
      title: "Quality Excellence",
      description: "We maintain the highest standards of quality in materials, workmanship, and project delivery."
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Team Collaboration",
      description: "Our skilled team works together seamlessly to deliver exceptional results on every project."
    },
    {
      icon: <Clock className="w-8 h-8 text-primary" />,
      title: "Timely Delivery",
      description: "We respect deadlines and ensure projects are completed on time without compromising quality."
    },
    {
      icon: <Heart className="w-8 h-8 text-primary" />,
      title: "Client Focus",
      description: "We build lasting relationships with our clients through transparency, communication, and trust."
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-primary" />,
      title: "Innovation",
      description: "We embrace modern construction techniques and sustainable practices for better outcomes."
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
          <h2 className="text-4xl font-bold text-muted-foreground mb-4">Our Core Values</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            These fundamental principles guide everything we do and define who we are as a construction company.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.7 }}
              whileHover={{ y: -5 }}
              className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-md border-0 hover:shadow-lg transition-all duration-300"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-muted-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="mt-16 text-center"
        >
          <div className="bg-white rounded-2xl p-8 border border-primary/10">
            <h3 className="text-2xl font-bold text-muted-foreground mb-4">Building with Purpose</h3>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              At Tekon Builders, we don't just build structures – we build dreams, communities, and a better future for Kenya. 
              Our values are the foundation of every project we undertake.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurValues; 