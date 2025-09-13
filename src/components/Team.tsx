import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Linkedin, Mail, Phone, MapPin, Award, Users } from 'lucide-react';

const Team: React.FC = () => {
  const teamMembers = [
    {
      name: "Eric Kagiri",
      role: "CEO & Founder",
      image: "/avatar.png",
      description: "20+ years in construction industry with expertise in project management.",
      experience: "20+ Years",
      specialization: "Project Management",
      achievements: ["ISO Certified", "50+ Projects"]
    },
    {
      name: "Victor Muriithi",
      role: "Lead Architect",
      image: "/avatar.png",
      description: "Award-winning architect specializing in sustainable building design.",
      experience: "15+ Years",
      specialization: "Sustainable Design",
      achievements: ["Green Building Expert", "Design Awards"]
    },
    {
      name: "Ephraim Muriuki",
      role: "Construction Manager",
      image: "/avatar.png",
      description: "Expert in large-scale construction projects and team coordination.",
      experience: "12+ Years",
      specialization: "Large-Scale Projects",
      achievements: ["Safety Excellence", "Team Leadership"]
    },
    {
      name: "Murai Wambua",
      role: "Project Coordinator",
      image: "/avatar.png",
      description: "Ensures seamless project execution and client communication.",
      experience: "8+ Years",
      specialization: "Client Relations",
      achievements: ["Client Satisfaction", "Process Optimization"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-orange-50/30 via-white to-orange-50/20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-100/20 via-transparent to-transparent"></div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-orange-200/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-orange-300/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 bg-clip-text text-transparent mb-6">
            Meet Our Expert Team
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Our experienced professionals are dedicated to bringing your construction dreams to life 
            with expertise, innovation, and unwavering commitment to excellence.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group"
            >
              <Card className="text-center bg-white/60 backdrop-blur-xl border border-orange-100/60 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden h-full">
                <CardContent className="p-0">
                  {/* Header with gradient */}
                  <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-6 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-transparent"></div>
                    <div className="relative">
                      <div className="w-24 h-24 mx-auto mb-4 relative">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full rounded-full object-cover border-4 border-white shadow-lg"
                        />
                        <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
                          <Award className="w-4 h-4 text-orange-600" />
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                      <Badge className="bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm">
                        {member.role}
                      </Badge>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <p className="text-slate-600 text-sm leading-relaxed">{member.description}</p>
                    
                    {/* Experience & Specialization */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-500">Experience:</span>
                        <span className="font-semibold text-orange-600">{member.experience}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-500">Specialization:</span>
                        <span className="font-semibold text-slate-700">{member.specialization}</span>
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-slate-700">Key Achievements:</h4>
                      <div className="flex flex-wrap gap-1">
                        {member.achievements.map((achievement, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs border-orange-200 text-orange-700 hover:bg-orange-50">
                            {achievement}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Contact Icons */}
                    <div className="flex justify-center space-x-4 pt-4 border-t border-orange-100">
                      <Button size="sm" variant="ghost" className="w-10 h-10 p-0 hover:bg-orange-100 hover:text-orange-600">
                        <Linkedin className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="ghost" className="w-10 h-10 p-0 hover:bg-orange-100 hover:text-orange-600">
                        <Mail className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="ghost" className="w-10 h-10 p-0 hover:bg-orange-100 hover:text-orange-600">
                        <Phone className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Team Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { number: "55+", label: "Combined Years", icon: Award },
            { number: "200+", label: "Projects Delivered", icon: Users },
            { number: "100%", label: "Client Satisfaction", icon: Award },
            { number: "24/7", label: "Team Support", icon: Users }
          ].map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <IconComponent className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold text-orange-600 mb-1">{stat.number}</h3>
                <p className="text-slate-600 text-sm">{stat.label}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Team;