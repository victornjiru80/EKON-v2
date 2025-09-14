import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, ArrowRight, Award, Shield, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  const quickLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/projects', label: 'Projects' },
    { to: '/services', label: 'Services' },
    { to: '/contact', label: 'Contact' },
  ];

  const services = [
    'Commercial Construction',
    'Residential Projects',
    'Infrastructure Development',
    'Project Management',
    'Renovation & Remodeling',
  ];

  const companyInfo = [
    { icon: Award, text: "ISO Certified Company" },
    { icon: Shield, text: "Licensed & Insured" },
    { icon: Clock, text: "24/7 Support Available" }
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Enhanced background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-orange-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-orange-600/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-400/5 rounded-full blur-3xl"></div>
        
        {/* Animated particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-orange-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Top section with company info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-2xl">
              <Building2 className="w-9 h-9 text-white" />
            </div>
            <div>
              <h3 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">TEKON</h3>
              <p className="text-orange-400 font-semibold text-lg">Build Solutions</p>
            </div>
          </div>
          
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
            Building excellence since 2019. We specialize in commercial, residential, and infrastructure 
            projects that transform communities across Kenya with innovation and quality.
          </p>

          {/* Company credentials */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {companyInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex items-center space-x-2 bg-slate-800/50 backdrop-blur-sm px-4 py-2 rounded-full border border-orange-500/20"
                >
                  <IconComponent className="w-4 h-4 text-orange-400" />
                  <span className="text-slate-300 text-sm">{info.text}</span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <h4 className="text-2xl font-bold mb-6 text-white">Get In Touch</h4>
            
            {/* Contact Info */}
            <div className="space-y-4 mb-8">
              <motion.div 
                className="flex items-center space-x-4 p-4 bg-slate-800/30 backdrop-blur-sm rounded-xl border border-slate-700/50 hover:border-orange-500/30 transition-colors duration-300"
                whileHover={{ x: 5 }}
              >
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-slate-400 text-sm">Location</p>
                  <p className="text-white font-medium">Nairobi, Kenya</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-center space-x-4 p-4 bg-slate-800/30 backdrop-blur-sm rounded-xl border border-slate-700/50 hover:border-orange-500/30 transition-colors duration-300"
                whileHover={{ x: 5 }}
              >
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-slate-400 text-sm">Phone</p>
                  <p className="text-white font-medium">+254  798 560 723</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-center space-x-4 p-4 bg-slate-800/30 backdrop-blur-sm rounded-xl border border-slate-700/50 hover:border-orange-500/30 transition-colors duration-300"
                whileHover={{ x: 5 }}
              >
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-slate-400 text-sm">Email</p>
                  <p className="text-white font-medium">kagznjoro@gmail.com</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-2xl font-bold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <motion.li 
                  key={link.to}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Link 
                    to={link.to} 
                    className="text-slate-300 hover:text-orange-400 transition-all duration-300 flex items-center group p-2 rounded-lg hover:bg-slate-800/30"
                  >
                    <ArrowRight className="w-4 h-4 text-orange-500 mr-3 group-hover:translate-x-1 transition-transform duration-200" />
                    <span className="font-medium">{link.label}</span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-2xl font-bold mb-6 text-white">Our Services</h4>
            <div className="space-y-4">
              {services.map((service, index) => (
                <motion.div
                  key={service}
                  className="text-slate-300 hover:text-orange-400 transition-all duration-300 cursor-pointer p-2 rounded-lg hover:bg-slate-800/30 flex items-center group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 group-hover:scale-125 transition-transform duration-200"></div>
                  <span className="font-medium">{service}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
        
        {/* Social Links & Copyright */}
        <motion.div 
          className="border-t border-slate-700/50 mt-16 pt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
            {/* Social Links */}
            <div className="flex flex-col items-center md:items-start">
              <h5 className="text-lg font-semibold text-white mb-4">Follow Us</h5>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      className="w-12 h-12 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover:bg-gradient-to-br hover:from-orange-500 hover:to-orange-600 hover:border-orange-500/50 rounded-xl flex items-center justify-center text-slate-400 hover:text-white transition-all duration-300 shadow-lg hover:shadow-orange-500/25"
                      whileHover={{ scale: 1.1, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <IconComponent className="w-5 h-5" />
                    </motion.a>
                  );
                })}
              </div>
            </div>
            
            {/* Copyright & Additional Info */}
            <div className="text-center md:text-right">
              <p className="text-slate-400 text-sm mb-2">
                © {new Date().getFullYear()} TEKON Build Solutions. All rights reserved.
              </p>
              <p className="text-slate-500 text-xs">
                Transforming Kenya through quality construction since 2019
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;