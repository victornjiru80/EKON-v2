import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import About from '@/components/About';
import Team from '@/components/Team';
import Process from '@/components/Process';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        <About />
        <Team />
        <Process />
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;