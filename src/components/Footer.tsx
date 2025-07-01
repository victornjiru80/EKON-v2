import {  MailOpen, MapPin, Phone } from 'lucide-react';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-orange-600 mb-4">EKON</h3>
            <p className="text-gray-300 mb-4">Construction Company</p>
            <p className="text-gray-400 text-sm">
              Building Kenya's future with excellence, integrity, and innovation since 2011.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Commercial Construction</li>
              <li>Residential Construction</li>
              <li>Healthcare Facilities</li>
              <li>Infrastructure Projects</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#home" className="hover:text-orange-600">Home</a></li>
              <li><a href="#about" className="hover:text-orange-600">About</a></li>
              <li><a href="#projects" className="hover:text-orange-600">Projects</a></li>
              <li><a href="#contact" className="hover:text-orange-600">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-400 text-sm">
              <p className='flex items-center gap-2'><MapPin/> Nairobi, Kenya</p>
              <p className='flex items-center gap-2'> <Phone/> +254 700 000 000</p>
              <p className='flex items-center gap-2'><MailOpen/> info@ekonconstruction.co.ke</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} EKON Construction Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;