import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Play, Award, Users, Building } from 'lucide-react';

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      image: '/projects/bg1.jpg',
      title: 'Building Excellence Since 2019',
      subtitle: 'Professional Construction Services',
      description: 'Transforming visions into reality with precision, quality, and innovation.',
      stats: { projects: '150+', clients: '200+', years: '6+' }
    },
    {
      image: '/projects/bg2.jpg',
      title: 'Quality Construction',
      subtitle: 'Trusted by Communities',
      description: 'Delivering sustainable and durable construction solutions that stand the test of time.',
      stats: { projects: '150+', clients: '200+', years: '6+' }
    },
    {
      image: '/bg2.png',
      title: 'Modern Infrastructure',
      subtitle: 'Building Tomorrow Today',
      description: 'Leading the future of construction with cutting-edge technology and innovative designs.',
      stats: { projects: '150+', clients: '200+', years: '6+' }
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-screen overflow-hidden bg-gray-900">
      {/* Static Background Fallback */}
      <div className="absolute inset-0 z-0">
        <img
          src={slides[0].image}
          alt="Background"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
      </div>

      {/* Background Images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          className="absolute inset-0 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <motion.img
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            className="w-full h-full object-cover"
            initial={{ scale: 1.05 }}
            animate={{ scale: 1 }}
            transition={{ duration: 8, ease: "easeOut" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="absolute inset-0 z-20 flex items-center pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div 
              className="text-white space-y-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="space-y-4">
                <motion.div
                  className="inline-flex items-center px-4 py-2 bg-orange-500/20 backdrop-blur-sm rounded-full border border-orange-500/30"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                </motion.div>

                <AnimatePresence mode="wait">
                  <motion.h1
                    key={currentSlide}
                    className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ duration: 0.8 }}
                  >
                    {slides[currentSlide].title}
                  </motion.h1>
                </AnimatePresence>

                <AnimatePresence mode="wait">
                  <motion.p
                    key={`subtitle-${currentSlide}`}
                    className="text-xl md:text-2xl text-orange-200 font-medium"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    {slides[currentSlide].subtitle}
                  </motion.p>
                </AnimatePresence>

                <AnimatePresence mode="wait">
                  <motion.p
                    key={`desc-${currentSlide}`}
                    className="text-lg text-gray-300 max-w-2xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    {slides[currentSlide].description}
                  </motion.p>
                </AnimatePresence>
              </div>

              {/* Action Buttons */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Link to="/projects">
                  <Button 
                    size="lg" 
                    className="group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                  >
                    <span className="mr-2">View Our Projects</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="group border-2 border-white/30 bg-white/10 backdrop-blur-sm hover:bg-white hover:text-gray-900 text-white px-8 py-4 rounded-full transition-all duration-300"
                  >
                    <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-200" />
                    <span>Get Started</span>
                  </Button>
                </Link>
              </motion.div>

              {/* Stats */}
              <motion.div 
                className="grid grid-cols-3 gap-8 pt-8 border-t border-white/20"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Building className="w-6 h-6 text-orange-400 mr-2" />
                    <span className="text-2xl md:text-3xl font-bold text-orange-400">
                      {slides[currentSlide].stats.projects}
                    </span>
                  </div>
                  <p className="text-sm text-gray-300">Projects Completed</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Users className="w-6 h-6 text-orange-400 mr-2" />
                    <span className="text-2xl md:text-3xl font-bold text-orange-400">
                      {slides[currentSlide].stats.clients}
                    </span>
                  </div>
                  <p className="text-sm text-gray-300">Happy Clients</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Award className="w-6 h-6 text-orange-400 mr-2" />
                    <span className="text-2xl md:text-3xl font-bold text-orange-400">
                      {slides[currentSlide].stats.years}
                    </span>
                  </div>
                  <p className="text-sm text-gray-300">Years Experience</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Content - Video/Image Placeholder */}
            <motion.div 
              className="hidden lg:block"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
                 <div className="relative">
                  <div className="aspect-video bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 shadow-2xl overflow-hidden">
                    <img
                      src="/projects/expert.jpg"
                      alt="image"
                      className="absolute inset-0 w-full h-full object-cover"
                    />

                     {/* Dark overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/20 pointer-events-none" />
                  </div>
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full opacity-20 blur-xl"></div>
                  <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-orange-500 to-orange-700 rounded-full opacity-10 blur-2xl"></div>
                </div>
            </motion.div>
          </div>
        </div>
      </div>

     

     
    </section>
  );
};

export default Hero;