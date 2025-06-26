import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to start your construction project? Get in touch with our team today.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Send us a Message</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Input placeholder="First Name" />
                  <Input placeholder="Last Name" />
                </div>
                <Input placeholder="Email Address" type="email" />
                <Input placeholder="Phone Number" type="tel" />
                <Textarea placeholder="Tell us about your project..." rows={5} />
                <Button className="w-full bg-orange-600 hover:bg-orange-700">
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4"><MapPin /> Our Location</h3>
                <p className="text-gray-600">
                  Nairobi, Kenya<br />
                  Building Kenya Since 2005
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4"><Phone /> Contact Information</h3>
                <div className="space-y-2 text-gray-600">
                  <p>Phone: +254 700 000 000</p>
                  <p>Email: info@ekonconstruction.co.ke</p>
                  <p>Office Hours: Mon-Fri 8:00 AM - 6:00 PM</p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">🚀 Why Choose EKON?</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• 25+ Years of Experience</li>
                  <li>• Licensed & Insured</li>
                  <li>• Quality Guaranteed</li>
                  <li>• On-Time Delivery</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;