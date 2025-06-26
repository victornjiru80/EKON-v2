import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Footer from './Footer';


const AppLayout: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        <Hero />
        
      </main>
      <Footer />
    </div>
  );
};

export default AppLayout;