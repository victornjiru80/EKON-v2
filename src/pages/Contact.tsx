import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';


const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-10">
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;