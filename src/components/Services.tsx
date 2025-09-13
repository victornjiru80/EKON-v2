import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Building2, Home, Wrench, PenTool, Hammer, Users, ArrowRight, CheckCircle, LucideIcon } from 'lucide-react';

interface ServiceItem {
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
  features: string[];
  category: string;
  duration: string;
}

const headingVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, type: "spring" as const, stiffness: 60 } }
};

const containerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { type: "spring" as "spring", stiffness: 70, damping: 15 }
  },
};

const iconVariant = {
  animate: {
    y: [0, -8, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "loop" as "loop",
      ease: "easeInOut" // use a supported string value
    }
  }
};

const Services: React.FC = () => {
  const services: ServiceItem[] = [
    {
      title: 'Commercial Construction',
      description: 'Office buildings, retail spaces, and commercial complexes built to the highest standards.',
      icon: Building2,
      image: '/projects/IMG-20250707-WA0004.jpg',
      features: ['Office Buildings', 'Retail Spaces', 'Shopping Centers', 'Industrial Facilities'],
      category: 'Construction',
      duration: '6-18 months'
    },
    {
      title: 'Residential Construction',
      description: 'Custom homes, apartments, and residential developments designed for modern living.',
      icon: Home,
      image: '/projects/IMG-20250707-WA0005.jpg',
      features: ['Custom Homes', 'Apartment Buildings', 'Townhouses', 'Luxury Villas'],
      category: 'Construction',
      duration: '4-12 months'
    },
    {
      title: 'Building Machinery & Tools',
      description: 'We provide equipment such as Trappers, Concrete Mixers, and other construction tools.',
      icon: Wrench,
      image: '/projects/IMG-20250707-WA0002.jpg',
      features: ['Concrete Mixers', 'Excavators', 'Cranes', 'Power Tools'],
      category: 'Equipment',
      duration: 'Rental/Purchase'
    },
    {
      title: 'Architectural Design Plans',
      description: 'Architectural designs, Structural designs, and Interior design services for your project.',
      icon: PenTool,
      image: '/projects/IMG-20250707-WA0004.jpg',
      features: ['3D Modeling', 'Structural Plans', 'Interior Design', 'Permit Processing'],
      category: 'Design',
      duration: '2-6 months'
    },
    {
      title: 'Renovation & Remodeling',
      description: 'Transform existing spaces with our expert renovation and remodeling services.',
      icon: Hammer,
      image: '/projects/IMG-20250707-WA0005.jpg',
      features: ['Kitchen Remodeling', 'Bathroom Renovation', 'Office Upgrades', 'Home Extensions'],
      category: 'Renovation',
      duration: '2-8 months'
    },
    {
      title: 'Project Management',
      description: 'Complete project oversight from planning to completion with experienced management.',
      icon: Users,
      image: '/projects/IMG-20250707-WA0002.jpg',
      features: ['Timeline Management', 'Quality Control', 'Budget Oversight', 'Team Coordination'],
      category: 'Management',
      duration: 'Project Duration'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-orange-50/30 via-white to-orange-50/20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-orange-100/20 via-transparent to-transparent"></div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-orange-200/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-orange-300/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={headingVariant}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 bg-clip-text text-transparent mb-6">
            Our Services
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive construction services tailored to meet your specific needs and requirements, 
            delivered with excellence and innovation.
          </p>
        </motion.div>
        
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariant}
                whileHover={{
                  scale: 1.035,
                  boxShadow: "0 20px 40px 0 rgba(249,115,22,0.15)",
                  transition: { type: "spring", stiffness: 300, damping: 18 }
                }}
                whileTap={{ scale: 0.98 }}
                className="group rounded-2xl bg-white/60 backdrop-blur-xl border border-orange-100/60 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-50/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Image Section */}
                <div className="relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-orange-500 hover:bg-orange-600 text-white shadow-lg backdrop-blur-sm">
                      {service.category}
                    </Badge>
                  </div>

                  {/* Icon Overlay */}
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm">
                      <IconComponent className="w-6 h-6 text-orange-600" />
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 relative z-10">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-slate-800 group-hover:text-orange-600 transition-colors duration-300">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-slate-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Duration Info */}
                  <div className="flex items-center text-sm text-slate-500 mb-4">
                    <CheckCircle className="w-4 h-4 mr-2 text-orange-500" />
                    Duration: {service.duration}
                  </div>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    <h4 className="text-sm font-semibold text-slate-700">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-1">
                      {service.features.slice(0, 4).map((feature, idx) => (
                        <div key={idx} className="flex items-center text-xs text-slate-600">
                          <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mr-2"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 group/btn">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Call to Action Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 text-white shadow-2xl">
            <h3 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h3>
            <p className="text-lg mb-6 text-orange-100">
              Get in touch with our expert team for a free consultation and quote.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-orange-600 hover:bg-orange-50 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Get Free Quote
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;