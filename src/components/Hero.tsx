import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';


const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      image: '/bg1.png',
      title: 'Building Excellence Since 2011',
      subtitle: 'Professional Construction Services'
    },
    {
      image: '/bg2.png',
      title: 'Quality Construction',
      subtitle: 'Trusted by Communities'
    },
    {
      image: '/bg3.png',
      title: 'Modern Infrastructure',
      subtitle: 'Building Tomorrow Today'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative h-screen sm:h-[100svh] overflow-hidden">
      
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
        
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>
      ))}
      
      <div className="absolute inset-0 flex items-center justify-center text-center text-white">
        
        <div className="max-w-4xl px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            {slides[currentSlide].title}
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            {slides[currentSlide].subtitle}
          </p>
          <div className="space-x-4">
            <Link to="/projects">
              <Button size="lg" className="bg-orange-500 hover:bg-gray-800 text-white">
                View Projects
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg"  className=" border-white bg-blue-700 hover:bg-orange-800 ">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? 'bg-orange-600' : 'bg-white bg-opacity-50'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;