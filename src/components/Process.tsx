import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { FileText, Users, Hammer, CheckCircle } from 'lucide-react';

const Process: React.FC = () => {
  const steps = [
    {
      icon: <FileText className="h-8 w-8 text-blue-600" />,
      title: "Planning & Design",
      description: "We work with you to understand your vision and create detailed plans.",
      step: "01"
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "Team Assembly",
      description: "Our expert team is assembled based on your project requirements.",
      step: "02"
    },
    {
      icon: <Hammer className="h-8 w-8 text-blue-600" />,
      title: "Construction",
      description: "Quality construction work begins with regular progress updates.",
      step: "03"
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-blue-600" />,
      title: "Completion",
      description: "Final inspection and handover of your completed project.",
      step: "04"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Construction Process
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From initial planning to final completion, we follow a proven process to ensure success.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <Card key={index} className="relative hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="absolute -top-4 left-4 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                  {step.step}
                </div>
                <div className="flex justify-center mb-4 mt-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;