import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { Shield, Users, Award, Clock } from 'lucide-react';

const OurValues: React.FC = () => {
  const values = [
    {
      icon: Shield,
      title: "Safety First",
      description: "We prioritize the safety of our workers and clients in every project.",
      color: "from-red-500 to-red-600"
    },
    {
      icon: Award,
      title: "Quality Excellence",
      description: "We deliver exceptional quality that exceeds industry standards.",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Our success is built on strong teamwork and communication.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      description: "We respect deadlines and deliver projects on time, every time.",
      color: "from-green-500 to-green-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-orange-50/20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-100/10 via-transparent to-transparent"></div>
      <div className="absolute top-10 right-10 w-64 h-64 bg-orange-200/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-orange-300/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 bg-clip-text text-transparent mb-6">
            Our Core Values
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            These fundamental principles guide everything we do and define who we are as a company. 
            They shape our culture, drive our decisions, and ensure we deliver excellence in every project.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group"
              >
                <Card className="text-center bg-white/70 backdrop-blur-xl border border-white/60 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden h-full">
                  <CardContent className="p-0">
                    {/* Header with dynamic gradient */}
                    <div className={`bg-gradient-to-br ${value.color} p-6 relative`}>
                      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                      <div className="relative">
                        <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                          <IconComponent className="h-10 w-10 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
                        <Badge className="bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm border-white/30">
                          Core Value
                        </Badge>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <p className="text-slate-600 leading-relaxed text-sm">
                        {value.description}
                      </p>
                      
                      {/* Decorative element */}
                      <div className="mt-6 flex justify-center">
                        <div className="w-12 h-1 bg-orange-100 rounded-full"></div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Values Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-transparent"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">Building with Purpose</h3>
              <p className="text-xl text-orange-100 max-w-3xl mx-auto leading-relaxed">
                At EKON Builders, we don't just build structures – we build dreams, communities, and a better future. 
                Our values are the foundation of every project we undertake.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurValues; 