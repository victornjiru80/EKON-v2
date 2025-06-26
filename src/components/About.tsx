import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About EKON Construction</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Building Kenya's future with excellence, integrity, and innovation since our founding.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://d64gsuwffb70l.cloudfront.net/6851251359aa97b9f0f5fcb1_1750782234922_e00bfd61.png"
              alt="EKON Construction"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Story</h3>
            <p className="text-gray-600 mb-6">
              EKON Construction Company has been at the forefront of Kenya's construction industry, 
              delivering exceptional projects that stand the test of time. Our commitment to quality 
              and innovation has made us a trusted partner for clients across the region.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <h4 className="text-3xl font-bold text-orange-600 mb-2">50+</h4>
                  <p className="text-gray-600">Projects Completed</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <h4 className="text-3xl font-bold text-orange-600 mb-2">25+</h4>
                  <p className="text-gray-600">Years Experience</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;