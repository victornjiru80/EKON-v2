import React from 'react';
import { CheckCircle, Award, Users, Clock, Shield, Target, Zap, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const WhyChooseUs: React.FC = () => {
  const reasons = [
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "We ensure the highest quality standards in every project we undertake with rigorous quality control processes.",
      color: "from-orange-500 to-red-500",
      features: ["ISO Certified", "Quality Control", "Premium Materials"]
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Our certified professionals bring years of experience and expertise to deliver exceptional results.",
      color: "from-orange-500 to-yellow-500",
      features: ["Certified Professionals", "20+ Years Experience", "Skilled Workforce"]
    },
    {
      icon: Heart,
      title: "Customer Focus",
      description: "We prioritize client satisfaction with transparent communication and personalized service.",
      color: "from-orange-500 to-pink-500",
      features: ["24/7 Support", "Clear Communication", "Client Satisfaction"]
    },
    {
      icon: Zap,
      title: "Timely Delivery",
      description: "We complete projects on schedule without compromising on quality through efficient project management.",
      color: "from-orange-500 to-blue-500",
      features: ["On-Time Delivery", "Efficient Planning", "Project Management"]
    }
  ];

  const [currentIndex, setCurrentIndex] = React.useState(0);

  const handleSwipe = (offsetX: number) => {
    const threshold = 100;
    if (offsetX < -threshold) {
      setCurrentIndex((prev) => (prev + 1) % reasons.length);
    }
    if (offsetX > threshold) {
      setCurrentIndex((prev) => (prev - 1 + reasons.length) % reasons.length);
    }
  };

  const getCardByOffset = (offset: number) => {
    const idx = (currentIndex + offset + reasons.length) % reasons.length;
    return { ...reasons[idx], idx };
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center px-4 py-2 bg-orange-100 rounded-full mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Award className="w-5 h-5 text-orange-600 mr-2" />
            <span className="text-orange-800 font-medium">Why Choose Us</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Building Excellence with
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600"> Purpose</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We deliver exceptional construction services with unmatched quality, innovation, and reliability that transforms your vision into reality.
          </p>
        </motion.div>
        {/* Small screens: stacked, swipeable cards */}
        <div className="block md:hidden">
          <div className="relative h-80 max-w-sm mx-auto">
            <AnimatePresence initial={false}>
              {[0, 1, 2].map((offset) => {
                const item = getCardByOffset(offset);
                const isTop = offset === 0;
                const zIndex = 30 - offset;
                const scale = 1 - offset * 0.06;
                const translateY = offset * 12;
                return (
                  <motion.div
                    key={`${item.idx}-${offset}`}
                    className="absolute inset-0 rounded-2xl overflow-hidden shadow-xl cursor-grab active:cursor-grabbing"
                    style={{ zIndex }}
                    initial={{ opacity: 0, y: 40, scale: 0.95 }}
                    animate={{ opacity: 1, y: translateY, scale }}
                    exit={{ opacity: 0, y: -40, scale: 0.95 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 22 }}
                    drag={isTop ? 'x' : false}
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.2}
                    onDragEnd={(_, info) => isTop && handleSwipe(info.offset.x)}
                    whileHover="hovered"
                  >
                    <div className="absolute inset-0 bg-white">
                      <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-10`} />
                      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
                        <motion.div
                          className={`w-20 h-20 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mb-6`}
                          whileHover={{ scale: 1.1, rotate: 5 }}
                        >
                          <item.icon className="w-10 h-10 text-white" />
                        </motion.div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                        <p className="text-base text-gray-600 leading-relaxed mb-4">{item.description}</p>
                        
                        {/* Features */}
                        <div className="flex flex-wrap gap-2 justify-center mb-4">
                          {item.features.map((feature, idx) => (
                            <span key={idx} className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded-full">
                              {feature}
                            </span>
                          ))}
                        </div>
                        
                        {isTop && (
                          <span className="text-xs uppercase tracking-wide text-orange-600 bg-orange-100 px-3 py-1 rounded-full">
                            Swipe left or right
                          </span>
                        )}
                      </div>
                      <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full opacity-30" />
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
          <div className="mt-6 flex items-center justify-center gap-2">
            {reasons.map((_, i) => {
              const active = i === currentIndex;
              return (
                <span
                  key={i}
                  className={`${active ? 'w-8 bg-orange-500' : 'w-2 bg-gray-300'} h-2 rounded-full transition-all duration-300`}
                />
              );
            })}
          </div>
        </div>

        {/* md+ screens: modern card grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.7 }}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
              >
                <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden">
                  {/* Background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${reason.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                  
                  {/* Icon */}
                  <motion.div
                    className={`w-16 h-16 bg-gradient-to-br ${reason.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                    whileHover={{ rotate: 5 }}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors duration-300">
                    {reason.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300 mb-6">
                    {reason.description}
                  </p>
                  
                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {reason.features.map((feature, idx) => (
                      <span key={idx} className="text-xs bg-orange-50 text-orange-700 px-3 py-1 rounded-full border border-orange-200 group-hover:bg-orange-100 transition-colors duration-300">
                        {feature}
                      </span>
                    ))}
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
                  <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-br from-orange-200 to-orange-300 rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;