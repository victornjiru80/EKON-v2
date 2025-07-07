import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Linkedin, Mail } from 'lucide-react';

const Team: React.FC = () => {
  const teamMembers = [
    {
      name: "Eric Kagiri",
      role: "CEO & Founder",
      image: "/placeholder.svg",
      description: "20+ years in construction industry with expertise in project management."
    },
    {
      name: "Victor Mwangi",
      role: "Lead Architect",
      image: "/placeholder.svg",
      description: "Award-winning architect specializing in sustainable building design."
    },
    {
      name: "Ephraim Muriuki",
      role: "Construction Manager",
      image: "/placeholder.svg",
      description: "Expert in large-scale construction projects and team coordination."
    },
    {
      name: "Murai Wambua",
      role: "Project Coordinator",
      image: "/placeholder.svg",
      description: "Ensures seamless project execution and client communication."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl text-muted-foreground md:text-4xl font-bold text-gray-900 mb-4">
            Meet Our Expert Team
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our experienced professionals are dedicated to bringing your construction dreams to life.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <Card key={index} className="text-center  hover:shadow-lg  transition-shadow bg-white">
              <CardContent className="p-6 ">
                <div className="mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm mb-4">{member.description}</p>
                <div className="flex justify-center space-x-3">
                  <Linkedin className="h-5 w-5 text-gray-400 hover:text-blue-600 cursor-pointer" />
                  <Mail className="h-5 w-5 text-gray-400 hover:text-blue-600 cursor-pointer" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;