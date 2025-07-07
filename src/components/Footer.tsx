import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-primary mb-4">TEKON</h3>
            <p className="text-muted-foreground mb-4">Build Solutions</p>
            <p className="text-muted-foreground text-sm">
              Building excellence since 2019. We specialize in commercial, residential, and infrastructure projects across Kenya.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li><a href="/" className="hover:text-primary">Home</a></li>
              <li><a href="/about" className="hover:text-primary">About</a></li>
              <li><a href="/projects" className="hover:text-primary">Projects</a></li>
              <li><a href="/contact" className="hover:text-primary">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <div className="space-y-2 text-muted-foreground text-sm">
              <p>Commercial Construction</p>
              <p>Residential Projects</p>
              <p>Infrastructure Development</p>
              <p>Project Management</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-muted mt-4 pt-4 mb-2">
          <p className="text-muted-foreground text-sm text-center">
            © {new Date().getFullYear()} Tekon Build Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;