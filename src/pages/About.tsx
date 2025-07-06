import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import About from '@/components/About';
import Team from '@/components/Team';
import OurValues from '@/components/OurValues';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-10">
        <About />
        <Team />
        <OurValues />
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;