import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { CheckCircle, MapPin, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

import type { Variants } from "framer-motion";

const cardVariants: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: (i: number = 0) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.7,
      duration: 1,
      type: "spring",
      stiffness: 60,
    },
  }),
};

const formVariant = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      type: "spring" as const,
      stiffness: 60,
    },
  },
};

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-muted-foreground">Contact Us</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to start your construction project? Get in touch with our team today.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Animate the form card from the left */}
          <motion.div
            variants={formVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <Card className='bg-white'>
              <CardHeader>
                <CardTitle className='text-muted-foreground'>Send us a Message</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Input 
                    placeholder="First Name" 
                    className="!focus-visible:ring-0 bg-white !focus-visible:ring-offset-0 !border-gray-300 focus:!border-primary"
                  />
                  <Input 
                    placeholder="Last Name" 
                    className="!focus-visible:ring-0 bg-white !focus-visible:ring-offset-0 !border-gray-300 focus:!border-primary"
                  />
                </div>
                <Input 
                  placeholder="Email Address" 
                  type="email" 
                  className="!focus-visible:ring-0 bg-white !focus-visible:ring-offset-0 !border-gray-300 focus:!border-primary"
                />
                <Input 
                  placeholder="Phone Number" 
                  type="tel" 
                  className="!focus-visible:ring-0 bg-white !focus-visible:ring-offset-0 !border-gray-300 focus:!border-primary"
                />
                <Textarea 
                  placeholder="Tell us about your project..." 
                  rows={5} 
                  className="!focus-visible:ring-0 bg-white !focus-visible:ring-offset-0 !border-gray-300 focus:!border-primary resize-none"
                />
                <Button className="w-full bg-primary hover:bg-primary/90">
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </motion.div>
          
          {/* Animate the info cards from the right, staggered */}
          <div className="space-y-8 bg-white">
            {[
              {
                icon: <MapPin className="mr-2" />,
                title: "Our Location",
                content: (
                  <p className="text-gray-600">
                    Nairobi, Kenya<br />
                    Building Kenya Since 2019
                  </p>
                ),
              },
              {
                icon: <Phone className="mr-2" />,
                title: "Contact Information",
                content: (
                  <div className="space-y-2 text-gray-600">
                    <p>Phone: +254 798 560 723</p>
                    <p>Email: kagznjoro@gmail.com</p>
                    <p>Office Hours: Mon-Fri 8:00 AM - 6:00 PM</p>
                  </div>
                ),
              },
              {
                icon: <CheckCircle className="mr-2" />,
                title: "Why Choose Tekon Build Solutions?",
                content: (
                  <ul className="space-y-2 text-gray-600">
                    <li>• 6+ Years of Experience</li>
                    <li>• Licensed & Insured</li>
                    <li>• Quality Guaranteed</li>
                    <li>• On-Time Delivery</li>
                  </ul>
                ),
              },
            ].map((card, i) => (
              <motion.div
                key={card.title}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <Card className='bg-white'>
                  <CardContent className="p-6">
                    <h3 className="text-xl text-muted-foreground font-bold mb-4 flex items-center">
                      {card.icon} {card.title}
                    </h3>
                    {card.content}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;