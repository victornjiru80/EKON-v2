import React, { useState, useEffect, useRef } from 'react';
import { Building, Users, Award, Calendar } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

const Stats: React.FC = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const stats = [
    {
      icon: Building,
      number: 150,
      suffix: "+",
      label: "Projects Completed",
      description: "Successfully delivered across Kenya",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Users,
      number: 200,
      suffix: "+",
      label: "Happy Clients",
      description: "Satisfied customers nationwide",
      color: "from-orange-400 to-orange-500"
    },
    {
      icon: Award,
      number: 15,
      suffix: "+",
      label: "Awards Won",
      description: "Industry recognition & excellence",
      color: "from-orange-600 to-red-500"
    },
    {
      icon: Calendar,
      number: 6,
      suffix: "+",
      label: "Years Experience",
      description: "Building excellence since 2018",
      color: "from-orange-500 to-yellow-500"
    }
  ];

  const useCountUp = (end: number, start = 0, duration = 1000) => {
    const [count, setCount] = useState(start);
    const frameRate = 1000 / 60;
    const totalFrames = Math.round(duration / frameRate);

    useEffect(() => {
      if (!isInView || hasAnimated) return;
      
      let currentFrame = 0;
      const timer = setInterval(() => {
        currentFrame++;
        const progress = currentFrame / totalFrames;
        const currentCount = Math.round(end * progress);
        
        setCount(currentCount);
        
        if (currentFrame === totalFrames) {
          clearInterval(timer);
          setHasAnimated(true);
        }
      }, frameRate);

      return () => clearInterval(timer);
    }, [isInView, hasAnimated, end, totalFrames, frameRate]);

    return count;
  };

  return (
    <section 
      ref={ref}
      className="relative py-12 sm:py-16 md:py-20 overflow-hidden"
      style={{
        background: `
          radial-gradient(circle at 20% 80%, rgba(249, 115, 22, 0.3) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(249, 115, 22, 0.2) 0%, transparent 50%),
          radial-gradient(circle at 40% 40%, rgba(251, 146, 60, 0.2) 0%, transparent 50%),
          linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)
        `
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-10 left-10 w-16 h-16 border-2 border-orange-400/30 rounded-lg"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute top-32 right-20 w-12 h-12 border-2 border-blue-400/30 rounded-full"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 left-1/4 w-8 h-8 bg-purple-400/20 rounded-lg"
          animate={{ y: [-10, 10, -10], rotate: [0, 90, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
      </div>

      <div className="relative container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">
            Our <span className="bg-gradient-to-r from-orange-400 to-blue-400 bg-clip-text text-transparent">Achievements</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            Numbers that speak volumes about our commitment to excellence and client satisfaction
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {stats.map((stat, index) => {
            const count = useCountUp(stat.number);
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
                className="relative"
              >
                <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 sm:p-6 md:p-8 text-center shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 group">
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`} />
                  
                  {/* Animated border */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                       style={{ 
                         background: `linear-gradient(90deg, transparent, ${stat.color.split(' ')[1]}, transparent)`,
                         backgroundSize: '200% 100%',
                         animation: 'shimmer 2s infinite'
                       }} />
                  
                  {/* Icon container */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      delay: index * 0.2 + 0.3,
                      type: "spring",
                      stiffness: 200
                    }}
                    className="flex justify-center mb-3 sm:mb-4 md:mb-6"
                  >
                    <div className={`p-3 sm:p-4 bg-gradient-to-br ${stat.color} rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                      <stat.icon className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
                    </div>
                  </motion.div>

                  {/* Animated number */}
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      delay: index * 0.2 + 0.5,
                      type: "spring",
                      stiffness: 200
                    }}
                    className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 sm:mb-3 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent"
                  >
                    {count}{stat.suffix}
                  </motion.div>

                  {/* Label */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.7 }}
                    className="text-base sm:text-lg text-gray-200 font-medium mb-1 sm:mb-2"
                  >
                    {stat.label}
                  </motion.div>

                  {/* Description */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.9 }}
                    className="text-xs sm:text-sm text-gray-400"
                  >
                    {stat.description}
                  </motion.div>

                  {/* Progress bar */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ 
                      delay: index * 0.2 + 1,
                      duration: 1.5,
                      ease: "easeOut"
                    }}
                    className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${stat.color} rounded-b-2xl`}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes shimmer {
            0% { background-position: -200% 0; }
            100% { background-position: 200% 0; }
          }
        `
      }} />
    </section>
  );
};

export default Stats;