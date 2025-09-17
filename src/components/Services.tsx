import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, Home, Wrench, PenTool, Hammer, Users, ArrowRight, CheckCircle, LucideIcon, X, Clock, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface ServiceItem {
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
  features: string[];
  category: string;
  duration: string;
  fullDescription: string;
  benefits: string[];
  process: string[];
  pricing: string;
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
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const services: ServiceItem[] = [
    {
      title: 'Commercial Construction',
      description: 'Office buildings, retail spaces, and commercial complexes built to the highest standards.',
      icon: Building2,
      image: '/projects/IMG-20250707-WA0004.jpg',
      features: ['Office Buildings', 'Retail Spaces', 'Shopping Centers', 'Industrial Facilities'],
      category: 'Construction',
      duration: '6-18 months',
      fullDescription: 'Our commercial construction services encompass the complete development of office buildings, retail spaces, shopping centers, and industrial facilities. We specialize in creating modern, functional commercial spaces that meet the highest standards of quality, safety, and sustainability. From initial planning and design to final completion, our experienced team ensures every project is delivered on time and within budget.',
      benefits: ['Energy-efficient designs', 'Sustainable materials', 'Modern amenities', 'Flexible layouts', 'High-quality finishes', 'Cost-effective solutions'],
      process: ['Initial consultation and planning', 'Architectural design and engineering', 'Permit acquisition and approvals', 'Construction and project management', 'Quality control and inspections', 'Final handover and occupancy'],
      pricing: 'Contact us for customized quotes based on project requirements'
    },
    {
      title: 'Residential Construction',
      description: 'Custom homes, apartments, and residential developments designed for modern living.',
      icon: Home,
      image: '/projects/IMG-20250707-WA0005.jpg',
      features: ['Custom Homes', 'Apartment Buildings', 'Townhouses', 'Luxury Villas'],
      category: 'Construction',
      duration: '4-12 months',
      fullDescription: 'Our residential construction services focus on creating beautiful, functional homes and residential communities that enhance modern living. From custom single-family homes to multi-unit apartment complexes, we deliver high-quality residential projects that combine comfort, style, and sustainability. Our team works closely with homeowners and developers to bring their vision to life.',
      benefits: ['Customizable designs', 'Energy-efficient homes', 'Quality craftsmanship', 'Modern amenities', 'Sustainable building practices', 'Timely completion'],
      process: ['Client consultation and vision planning', 'Design and architectural planning', 'Permit and regulatory approvals', 'Construction phase with regular updates', 'Quality inspections and final walkthrough', 'Move-in ready handover'],
      pricing: 'Starting from $150,000 for custom homes - contact for detailed quotes'
    },
    {
      title: 'Building Machinery & Tools',
      description: 'We provide equipment such as Trappers, Concrete Mixers, and other construction tools.',
      icon: Wrench,
      image: '/projects/IMG-20250707-WA0002.jpg',
      features: ['Concrete Mixers', 'Excavators', 'Cranes', 'Power Tools'],
      category: 'Equipment',
      duration: 'Rental/Purchase',
      fullDescription: 'Our comprehensive equipment rental and sales service provides access to high-quality construction machinery and tools. From concrete mixers and excavators to power tools and safety equipment, we offer reliable, well-maintained machinery to support your construction projects. Our experienced team ensures all equipment is properly maintained and ready for use.',
      benefits: ['Well-maintained equipment', 'Competitive rental rates', 'Expert technical support', 'Flexible rental terms', 'Safety training included', 'Delivery and pickup services'],
      process: ['Equipment consultation and selection', 'Rental agreement and paperwork', 'Equipment delivery and setup', 'On-site support and training', 'Regular maintenance checks', 'Equipment return and inspection'],
      pricing: 'Daily/Weekly/Monthly rental rates available - contact for pricing'
    },
    {
      title: 'Architectural Design Plans',
      description: 'Architectural designs, Structural designs, and Interior design services for your project.',
      icon: PenTool,
      image: '/projects/IMG-20250707-WA0004.jpg',
      features: ['3D Modeling', 'Structural Plans', 'Interior Design', 'Permit Processing'],
      category: 'Design',
      duration: '2-6 months',
      fullDescription: 'Our architectural design services cover the complete design process from concept to construction documents. We create detailed architectural plans, structural designs, and interior layouts that meet building codes and client requirements. Using advanced 3D modeling software, we provide realistic visualizations and ensure seamless coordination between design and construction.',
      benefits: ['3D visualization and modeling', 'Code-compliant designs', 'Permit assistance', 'Interior design coordination', 'Construction document sets', 'Design-build coordination'],
      process: ['Initial design consultation', 'Site analysis and programming', 'Conceptual design development', 'Detailed design and documentation', 'Permit application assistance', 'Construction administration support'],
      pricing: 'Starting from $2,500 for basic plans - contact for detailed quotes'
    },
    {
      title: 'Renovation & Remodeling',
      description: 'Transform existing spaces with our expert renovation and remodeling services.',
      icon: Hammer,
      image: '/projects/IMG-20250707-WA0005.jpg',
      features: ['Kitchen Remodeling', 'Bathroom Renovation', 'Office Upgrades', 'Home Extensions'],
      category: 'Renovation',
      duration: '2-8 months',
      fullDescription: 'Our renovation and remodeling services transform existing spaces into modern, functional environments. Whether you need a complete kitchen renovation, bathroom upgrade, or office modernization, our experienced team delivers high-quality results that exceed expectations. We work efficiently to minimize disruption while maintaining the highest standards of craftsmanship.',
      benefits: ['Minimized disruption', 'Quality craftsmanship', 'Modern design solutions', 'Cost-effective upgrades', 'Energy-efficient improvements', 'Warranty on workmanship'],
      process: ['Initial assessment and planning', 'Design development and approval', 'Permits and preparations', 'Construction and renovation work', 'Quality inspections', 'Final cleanup and handover'],
      pricing: 'Starting from $10,000 for basic renovations - contact for detailed quotes'
    },
    {
      title: 'Project Management',
      description: 'Complete project oversight from planning to completion with experienced management.',
      icon: Users,
      image: '/projects/IMG-20250707-WA0002.jpg',
      features: ['Timeline Management', 'Quality Control', 'Budget Oversight', 'Team Coordination'],
      category: 'Management',
      duration: 'Project Duration',
      fullDescription: 'Our professional project management services ensure your construction project runs smoothly from start to finish. Our certified project managers provide comprehensive oversight, coordinating all aspects of the project including timelines, budgets, quality control, and team coordination. We keep you informed throughout the process and ensure successful project delivery.',
      benefits: ['Certified project managers', 'Comprehensive project oversight', 'Regular progress updates', 'Budget management and control', 'Quality assurance processes', 'Risk management and mitigation'],
      process: ['Project initiation and planning', 'Resource allocation and scheduling', 'Regular progress monitoring', 'Quality control and inspections', 'Budget tracking and reporting', 'Project closure and handover'],
      pricing: '5-10% of total project cost depending on project size and complexity'
    }
  ];

  const openModal = (service: ServiceItem) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  const handleGetQuote = () => {
    closeModal();
    navigate('/contact');
  };

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
                  <Button 
                    onClick={() => openModal(service)}
                    className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 group/btn"
                  >
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

      {/* Service Modal */}
      <AnimatePresence>
        {isModalOpen && selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/60 backdrop-blur-sm pt-20 lg:pt-24 xl:pt-28"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative w-full max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-4xl max-h-[95vh] sm:max-h-[90vh] overflow-y-auto bg-white rounded-2xl sm:rounded-3xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-3 right-3 sm:top-6 sm:right-6 z-10 w-7 h-7 sm:w-8 sm:h-8 bg-orange-500 hover:bg-orange-600 rounded-full flex items-center justify-center text-white transition-colors duration-200"
              >
                <X className="w-3 h-3 sm:w-4 sm:h-4" />
              </button>

              {/* Modal Content */}
              <div className="p-4 sm:p-6 md:p-8">
                {/* Header */}
                <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 mb-4 sm:mb-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0">
                    <selectedService.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-2">
                      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-800 leading-tight">{selectedService.title}</h2>
                      <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-200 self-start">
                        {selectedService.category}
                      </Badge>
                    </div>
                    <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed">{selectedService.description}</p>
                  </div>
                </div>

                {/* Image */}
                <div className="relative overflow-hidden rounded-xl sm:rounded-2xl mb-6 sm:mb-8">
                  <img
                    src={selectedService.image}
                    alt={selectedService.title}
                    className="w-full h-48 sm:h-56 md:h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>

                {/* Detailed Description */}
                <div className="mb-6 sm:mb-8">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-800 mb-3 sm:mb-4">About This Service</h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">{selectedService.fullDescription}</p>
                </div>

                {/* Key Features */}
                <div className="mb-6 sm:mb-8">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-800 mb-3 sm:mb-4">Key Features</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                    {selectedService.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 bg-orange-50 rounded-lg">
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500 flex-shrink-0" />
                        <span className="text-sm sm:text-base text-slate-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Benefits */}
                <div className="mb-6 sm:mb-8">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-800 mb-3 sm:mb-4">Benefits</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                    {selectedService.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 bg-green-50 rounded-lg">
                        <Star className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0" />
                        <span className="text-sm sm:text-base text-slate-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Process */}
                <div className="mb-6 sm:mb-8">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-800 mb-3 sm:mb-4">Our Process</h3>
                  <div className="space-y-2 sm:space-y-3">
                    {selectedService.process.map((step, idx) => (
                      <div key={idx} className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-slate-50 rounded-lg">
                        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm flex-shrink-0">
                          {idx + 1}
                        </div>
                        <span className="text-sm sm:text-base text-slate-700 leading-relaxed">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Duration & Pricing */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
                  <div className="p-4 sm:p-6 bg-blue-50 rounded-xl">
                    <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                      <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                      <h4 className="text-lg sm:text-xl font-semibold text-slate-800">Duration</h4>
                    </div>
                    <p className="text-sm sm:text-base text-slate-600">{selectedService.duration}</p>
                  </div>
                  <div className="p-4 sm:p-6 bg-purple-50 rounded-xl">
                    <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-xs sm:text-sm">$</span>
                      </div>
                      <h4 className="text-lg sm:text-xl font-semibold text-slate-800">Pricing</h4>
                    </div>
                    <p className="text-sm sm:text-base text-slate-600">{selectedService.pricing}</p>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <Button 
                    onClick={handleGetQuote}
                    className="flex-1 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-2 sm:py-3 px-6 sm:px-8 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base"
                  >
                    Get Free Quote
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                  </Button>
                  <Button
                    variant="outline"
                    onClick={closeModal}
                    className="flex-1 border-2 border-slate-300 hover:border-slate-400 text-slate-700 hover:text-slate-800 py-2 sm:py-3 px-6 sm:px-8 rounded-xl font-semibold transition-all duration-300 text-sm sm:text-base"
                  >
                    Close
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Services;