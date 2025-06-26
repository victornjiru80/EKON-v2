import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Award, Users, Clock } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  const reasons = [
    {
      icon: <CheckCircle className="h-8 w-8 text-blue-600" />,
      title: "Quality Assurance",
      description: "We ensure the highest quality standards in every project we undertake."
    },
    {
      icon: <Award className="h-8 w-8 text-blue-600" />,
      title: "Expert Team",
      description: "Our certified professionals bring years of experience to your project."
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "Customer Focus",
      description: "We prioritize client satisfaction and maintain clear communication."
    },
    {
      icon: <Clock className="h-8 w-8 text-blue-600" />,
      title: "Timely Delivery",
      description: "We complete projects on time without compromising on quality."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose EKON Construction?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We deliver exceptional construction services with unmatched quality and reliability.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  {reason.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;