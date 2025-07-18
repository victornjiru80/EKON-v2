import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';

const imageVariant = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, type: "spring" as "spring", stiffness: 60 }
  }
};

const contentVariant = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, type: "spring" as "spring", stiffness: 60 }
  }
};

const statCardVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.5, duration: 1, type: 'spring' as const, stiffness: 60 }
  })
};

const About: React.FC = () => {
  return (
      <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-muted-foreground text-gray-900 mb-4">About Tekon Build Solutions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Building Kenya's future with excellence, integrity, and innovation since our founding.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={imageVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <img
              src="https://d64gsuwffb70l.cloudfront.net/6851251359aa97b9f0f5fcb1_1750782234922_e00bfd61.png"
              alt="Tekon Build Solutions"
              className="rounded-lg shadow-lg w-full"
            />
          </motion.div>
          
          <motion.div
            variants={contentVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3 className="text-2xl font-bold text-muted-foreground text-gray-700 text-center mb-6">Our Story</h3>
            <p className="text-gray-600 mb-6">
              Tekon Build Solutions has been at the forefront of Kenya's construction industry, 
              delivering exceptional projects that stand the test of time. The company was founded in 2019 and has since then been a trusted partner for clients across the region. We are a team of experienced professionals who are dedicated to delivering exceptional projects that stand the test of time. Our commitment to quality 
              and innovation has made us a trusted partner for clients across the region. 
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {[{num: '50+', label: 'Projects Completed'}, {num: '6+', label: 'Years Experience'}].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  custom={i}
                  variants={statCardVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <Card className='bg-white'>
                    <CardContent className="p-6 text-center">
                      <h4 className="text-2xl font-medium text-primary mb-2">{stat.num}</h4>
                      <p className="text-gray-600">{stat.label}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;