import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Building2, Users, Award, Target, ArrowRight, CheckCircle } from 'lucide-react';

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
  const achievements = [
    { icon: Building2, num: '50+', label: 'Projects Completed', description: 'Successfully delivered across Kenya' },
    { icon: Users, num: '6+', label: 'Years Experience', description: 'Building excellence since 2019' },
    { icon: Award, num: '100%', label: 'Client Satisfaction', description: 'Committed to exceeding expectations' },
    { icon: Target, num: '24/7', label: 'Support Available', description: 'Always here when you need us' }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-orange-50/30 via-white to-orange-50/20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-orange-100/20 via-transparent to-transparent"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-orange-200/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-orange-300/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 bg-clip-text text-transparent mb-6">
            About EKON Build Solutions
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Building Kenya's future with excellence, integrity, and innovation since our founding. 
            We are your trusted construction partner.
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            variants={imageVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="/projects/IMG-20250707-WA0002.jpg"
                alt="EKON Build Solutions"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-orange-600/20 to-transparent"></div>
              
              {/* Floating badge */}
              <div className="absolute top-6 left-6">
                <Badge className="bg-orange-500 text-white shadow-lg backdrop-blur-sm">
                  <Building2 className="w-4 h-4 mr-2" />
                  Since 2019
                </Badge>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            variants={contentVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-8"
          >
            <div className="bg-white/60 backdrop-blur-xl border border-orange-100/60 shadow-xl rounded-2xl p-8">
              <h3 className="text-3xl font-bold text-slate-800 mb-6 flex items-center">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                  <Building2 className="w-6 h-6 text-orange-600" />
                </div>
                Our Story
              </h3>
              <p className="text-slate-600 leading-relaxed mb-6 text-lg">
                EKON Build Solutions has been at the forefront of Kenya's construction industry, delivering exceptional
                projects that stand the test of time. Founded in 2019, we have been a trusted partner for clients across
                the region.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                Our certified team is dedicated to excellence, quality, and innovation. We combine traditional craftsmanship
                with modern technology to create structures that not only meet but exceed our clients' expectations.
              </p>
              
              {/* Key Points */}
              <div className="space-y-4">
                {[
                  'ISO certified construction processes',
                  'Sustainable building practices',
                  'Expert project management',
                  'Quality materials and workmanship'
                ].map((point, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-orange-500 mr-3 flex-shrink-0" />
                    <span className="text-slate-600">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Achievements Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <motion.div
                key={achievement.label}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group"
              >
                <Card className="bg-white/60 backdrop-blur-xl border border-orange-100/60 shadow-xl hover:shadow-2xl transition-all duration-300 h-full">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors duration-300">
                      <IconComponent className="w-8 h-8 text-orange-600" />
                    </div>
                    <h4 className="text-3xl font-bold text-orange-600 mb-2">{achievement.num}</h4>
                    <p className="font-semibold text-slate-800 mb-2">{achievement.label}</p>
                    <p className="text-sm text-slate-600">{achievement.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Mission & Vision */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="grid md:grid-cols-2 gap-8"
        >
          <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 text-white shadow-2xl">
            <h3 className="text-2xl font-bold mb-4 flex items-center">
              <Target className="w-6 h-6 mr-3" />
              Our Mission
            </h3>
            <p className="text-orange-100 leading-relaxed">
              To deliver exceptional construction services that exceed client expectations while contributing 
              to Kenya's infrastructure development through innovation, quality, and sustainable practices.
            </p>
          </div>
          
          <div className="bg-white/60 backdrop-blur-xl border border-orange-100/60 shadow-xl rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center">
              <Award className="w-6 h-6 mr-3 text-orange-600" />
              Our Vision
            </h3>
            <p className="text-slate-600 leading-relaxed">
              To be East Africa's leading construction company, recognized for our commitment to excellence, 
              innovation, and sustainable building practices that shape communities for generations.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;