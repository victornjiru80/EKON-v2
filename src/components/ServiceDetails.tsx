import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Building2, Home, Factory, Wrench, PaintBucket, Zap } from 'lucide-react';

const ServiceDetails: React.FC = () => {
  const services = [
    {
      icon: <Building2 className="h-12 w-12 text-blue-600" />,
      title: "Commercial Construction",
      description: "Complete commercial building solutions from offices to retail spaces.",
      features: ["Office Buildings", "Retail Spaces", "Warehouses", "Industrial Facilities"]
    },
    {
      icon: <Home className="h-12 w-12 text-blue-600" />,
      title: "Residential Construction",
      description: "Custom homes and residential projects tailored to your lifestyle.",
      features: ["Custom Homes", "Renovations", "Extensions", "Multi-family Units"]
    },
    {
      icon: <Factory className="h-12 w-12 text-blue-600" />,
      title: "Industrial Projects",
      description: "Specialized industrial construction for manufacturing and logistics.",
      features: ["Manufacturing Plants", "Distribution Centers", "Processing Facilities", "Storage Solutions"]
    },
    {
      icon: <Wrench className="h-12 w-12 text-blue-600" />,
      title: "Renovation & Remodeling",
      description: "Transform existing spaces with our expert renovation services.",
      features: ["Kitchen Remodeling", "Bathroom Renovation", "Basement Finishing", "Whole House Renovation"]
    },
    {
      icon: <PaintBucket className="h-12 w-12 text-blue-600" />,
      title: "Interior Finishing",
      description: "Complete interior finishing services for all types of buildings.",
      features: ["Flooring Installation", "Painting & Decorating", "Ceiling Work", "Custom Millwork"]
    },
    {
      icon: <Zap className="h-12 w-12 text-blue-600" />,
      title: "Electrical & Plumbing",
      description: "Professional electrical and plumbing services for all projects.",
      features: ["Electrical Installation", "Plumbing Systems", "HVAC Integration", "Smart Home Solutions"]
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Construction Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive construction solutions for residential, commercial, and industrial projects.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow h-full">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">{service.title}</h3>
                <p className="text-gray-600 mb-4 text-center">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceDetails;