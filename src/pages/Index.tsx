import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import WhyChooseUs from '@/components/WhyChooseUs';
import Stats from '@/components/Stats';
import Process from '@/components/Process';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <WhyChooseUs />
        <Stats />
        <Process />
      </main>
      <Footer />
    </div>
  );
};

export default Index;