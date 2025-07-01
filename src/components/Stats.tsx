import React from 'react';
import { Building, Users, Award, Calendar } from 'lucide-react';

const Stats: React.FC = () => {
  const stats = [
    {
      icon: <Building className="h-8 w-8 text-white" />,
      number: "50+",
      label: "Projects Completed"
    },
    {
      icon: <Users className="h-8 w-8 text-white" />,
      number: "200+",
      label: "Happy Clients"
    },
    {
      icon: <Award className="h-8 w-8 text-white" />,
      number: "25+",
      label: "Awards Won"
    },
    {
      icon: <Calendar className="h-8 w-8 text-white" />,
      number: "15+",
      label: "Years Experience"
    }
  ];

  return (
    <section className="py-16 bg-orange-400">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center text-white">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-white/10 rounded-full">
                  {stat.icon}
                </div>
              </div>
              <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
              <div className="text-sm md:text-base opacity-90">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;