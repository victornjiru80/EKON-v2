import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Services from '@/components/Services';

const ServicesPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-10">
        <Services />
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;