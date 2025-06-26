import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Services: React.FC = () => {
  const services = [
    {
      title: 'Commercial Construction',
      description: 'Office buildings, retail spaces, and commercial complexes built to the highest standards.',
      icon: '🏢'
    },
    {
      title: 'Residential Construction',
      description: 'Custom homes, apartments, and residential developments designed for modern living.',
      icon: '🏠'
    },
    {
      title: 'Healthcare Facilities',
      description: 'Hospitals, clinics, and medical centers with specialized construction requirements.',
      icon: '🏥'
    },
    {
      title: 'Infrastructure Projects',
      description: 'Roads, bridges, and public infrastructure that connects communities.',
      icon: '🌉'
    },
    {
      title: 'Renovation & Remodeling',
      description: 'Transform existing spaces with our expert renovation and remodeling services.',
      icon: '🔨'
    },
    {
      title: 'Project Management',
      description: 'Complete project oversight from planning to completion with experienced management.',
      icon: '📋'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive construction services tailored to meet your specific needs and requirements.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="text-4xl mb-4">{service.icon}</div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;