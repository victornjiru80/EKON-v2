import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link to="/">
              <h1 className="text-2xl font-bold text-primary">EKON</h1>
              <p className="text-xs text-muted-foreground">Construction Company</p>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink to="/" className="text-muted-foreground hover:text-primary px-3 py-2 text-sm font-medium"><p>HOME</p></NavLink>
              <NavLink to="/about" className="text-muted-foreground hover:text-primary px-3 py-2 text-sm font-medium"><p>ABOUT </p></NavLink>
              <NavLink to="/projects" className="text-muted-foreground hover:text-primary px-3 py-2 text-sm font-medium"><p>PROJECTS </p></NavLink>
              <NavLink to="/services" className="text-muted-foreground hover:text-primary px-3 py-2 text-sm font-medium"><p>SERVICES </p></NavLink>
              <NavLink to="/contact" className="text-muted-foreground hover:text-primary px-3 py-2 text-sm font-medium"><p>CONTACT </p></NavLink>
            </div>
          </div>
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)}>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link to="/" className="text-foreground hover:text-primary block px-3 py-2 text-base font-medium">HOME</Link>
              <Link to="/about" className="text-foreground hover:text-primary block px-3 py-2 text-base font-medium">ABOUT</Link>
              <Link to="/projects" className="text-foreground hover:text-primary block px-3 py-2 text-base font-medium">PROJECTS</Link>
              <Link to="/services" className="text-foreground hover:text-primary block px-3 py-2 text-base font-medium">SERVICES</Link>
              <Link to="/contact" className="text-foreground hover:text-primary block px-3 py-2 text-base font-medium">CONTACT</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;