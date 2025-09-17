import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, PencilRuler, Hammer, CheckCircle, ArrowRight, Clock, Users, Award } from 'lucide-react';

const Process: React.FC = () => {
  const steps = [
    {
      number: '01',
      icon: MessageCircle,
      title: 'Consultation & Planning',
      description: 'We meet with you to understand your vision, requirements, and budget. Our team creates detailed plans and timelines.',
      color: 'from-orange-500 to-red-500',
      features: ['Site Analysis', 'Budget Planning', 'Timeline Creation']
    },
    {
      number: '02',
      icon: PencilRuler,
      title: 'Design & Engineering',
      description: 'Our architects and engineers develop comprehensive designs that meet all safety standards and your specifications.',
      color: 'from-orange-500 to-yellow-500',
      features: ['3D Modeling', 'Technical Drawings', 'Permit Processing']
    },
    {
      number: '03',
      icon: Hammer,
      title: 'Construction & Execution',
      description: 'With experienced teams and quality materials, we bring your project to life with precision and expertise.',
      color: 'from-orange-500 to-blue-500',
      features: ['Quality Materials', 'Skilled Workers', 'Progress Updates']
    },
    {
      number: '04',
      icon: CheckCircle,
      title: 'Quality Assurance & Delivery',
      description: 'We conduct thorough inspections and quality checks before handing over your completed project.',
      color: 'from-orange-500 to-green-500',
      features: ['Final Inspection', 'Quality Testing', 'Handover Process']
    }
  ];

  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-br from-orange-50/30 via-white to-orange-50/20 relative overflow-visible sm:overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-100/10 via-transparent to-transparent"></div>
      <div className="absolute top-10 sm:top-20 left-4 sm:left-20 w-40 sm:w-64 h-40 sm:h-64 bg-orange-200/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 sm:bottom-20 right-4 sm:right-20 w-48 sm:w-80 h-48 sm:h-80 bg-orange-300/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="text-center mb-8 sm:mb-10 md:mb-16 px-2 sm:px-0">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 bg-clip-text text-transparent mb-3 sm:mb-4 md:mb-6">
              Our Process
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              We follow a proven four-step process to ensure your construction project is completed on time, 
              within budget, and to the highest quality standards.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 relative">
          {/* Connection lines for desktop */}
          <div className="hidden lg:block absolute top-16 sm:top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-orange-300 to-transparent"></div>
          
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.7 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="relative group"
              >
                {/* Arrow connector for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-4 top-16 sm:top-20 z-10">
                    <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-orange-400" />
                  </div>
                )}
                
                <div className="bg-white/70 backdrop-blur-xl border border-orange-100/60 shadow-xl hover:shadow-2xl transition-all duration-500 rounded-3xl p-6 sm:p-8 relative overflow-hidden h-full">
                  {/* Background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-3xl`} />

                  {/* Step number badge */}
                  <div className={`absolute -top-3 left-6 sm:left-8 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center text-white font-bold text-base sm:text-lg shadow-lg z-10`}>
                    {step.number}
                  </div>

                  {/* Content Container */}
                  <div className="relative z-10 pt-6">
                    {/* Icon */}
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + 0.3, type: "spring", stiffness: 200 }}
                      className="flex justify-center mb-4 sm:mb-6"
                    >
                      <div className={`w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                        <IconComponent className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                      </div>
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-3 sm:mb-4 group-hover:text-orange-600 transition-colors duration-300 text-center">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-600 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base text-center">
                      {step.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-slate-700 mb-3 text-center">Key Features:</h4>
                      <div className="space-y-2">
                        {step.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center justify-center text-sm text-slate-600">
                            <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mr-2 flex-shrink-0"></div>
                            <span className="text-center">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
                  <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-orange-200 to-orange-300 rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Process Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-transparent"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">Seamless Project Execution</h3>
              <p className="text-xl text-orange-100 max-w-3xl mx-auto leading-relaxed mb-8">
                From initial consultation to final delivery, our structured approach ensures every project 
                meets the highest standards of quality, safety, and client satisfaction.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { icon: Clock, label: "On-Time Delivery" },
                  { icon: Users, label: "Expert Team" },
                  { icon: Award, label: "Quality Assured" },
                  { icon: CheckCircle, label: "Client Approved" }
                ].map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      className="text-center"
                    >
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <p className="text-orange-200 text-sm">{item.label}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;