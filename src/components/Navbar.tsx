import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC<{ transparent?: boolean }> = ({ transparent = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/projects', label: 'Projects' },
    { to: '/services', label: 'Services' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <motion.nav 
      className={`${
        transparent && !scrolled 
          ? 'absolute bg-transparent shadow-none' 
          : 'fixed bg-white/95 backdrop-blur-md shadow-lg border-b border-orange-100'
      } w-full top-0 left-0 z-[100] transition-all duration-300`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div 
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Link to="/" className="group">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">T</span>
                </div>
                <div>
                  <h1 className={`text-2xl font-bold tracking-tight ${
                    transparent && !scrolled ? 'text-white' : 'text-gray-900'
                  } group-hover:text-orange-500 transition-colors duration-200`}>
                    TEKON
                  </h1>
                  <p className={`text-sm font-medium ${
                    transparent && !scrolled ? 'text-orange-200' : 'text-orange-600'
                  }`}>
                    Build Solutions Limited
                  </p>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-1">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.to}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <NavLink 
                    to={item.to} 
                    className={({ isActive }) => `
                      relative px-4 py-2 rounded-lg font-medium transition-all duration-200
                      ${transparent && !scrolled 
                        ? 'text-white hover:text-orange-200' 
                        : 'text-gray-700 hover:text-orange-600'
                      }
                      ${isActive ? 'text-orange-500' : ''}
                    `}
                  >
                    {({ isActive }) => (
                      <>
                        <span className="relative z-10">{item.label}</span>
                        {isActive && (
                          <motion.div
                            className="absolute inset-0 bg-orange-500/10 rounded-lg"
                            layoutId="activeTab"
                            transition={{ duration: 0.3 }}
                          />
                        )}
                      </>
                    )}
                  </NavLink>
                </motion.div>
              ))}
              
              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="ml-6"
              >
                <Link to="/contact">
                  <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105">
                    Get Quote
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setIsOpen(!isOpen)}
              className="relative z-[110]"
            >
              <motion.div
                animate={isOpen ? "open" : "closed"}
                className="w-6 h-6 flex flex-col justify-center items-center"
              >
                <motion.span
                  className={`block h-0.5 w-6 rounded-sm ${
                    transparent && !scrolled ? 'bg-white' : 'bg-gray-900'
                  }`}
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: 45, y: 6 }
                  }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className={`block h-0.5 w-6 rounded-sm mt-1.5 ${
                    transparent && !scrolled ? 'bg-white' : 'bg-gray-900'
                  }`}
                  variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 }
                  }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className={`block h-0.5 w-6 rounded-sm mt-1.5 ${
                    transparent && !scrolled ? 'bg-white' : 'bg-gray-900'
                  }`}
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: -45, y: -6 }
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Overlay */}
              <motion.div
                className="fixed inset-0 z-[90] bg-black/20 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen(false)}
              />
              
              {/* Mobile menu panel */}
              <motion.div
                className="md:hidden fixed top-20 left-4 right-4 z-[105]"
                initial={{ opacity: 0, y: -20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-orange-100 overflow-hidden">
                  <div className="px-6 py-4 space-y-2">
                    {navItems.map((item, index) => (
                      <motion.div
                        key={item.to}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        <Link 
                          to={item.to} 
                          className="block px-4 py-3 text-gray-900 hover:text-orange-600 hover:bg-orange-50 rounded-xl font-medium transition-all duration-200"
                          onClick={() => setIsOpen(false)}
                        >
                          {item.label}
                        </Link>
                      </motion.div>
                    ))}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: navItems.length * 0.1 }}
                      className="pt-4 border-t border-orange-100"
                    >
                      <Link to="/contact" onClick={() => setIsOpen(false)}>
                        <Button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-xl shadow-lg">
                          Get Quote
                        </Button>
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;