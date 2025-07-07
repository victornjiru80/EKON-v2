import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Navbar: React.FC<{ transparent?: boolean }> = ({ transparent = false }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={`${transparent ? 'absolute bg-transparent shadow-none' : 'fixed bg-white shadow-md'} w-full top-0 left-0 z-50`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link to="/">
              <h1 className={`text-2xl italic font-bold ${transparent ? 'text-white' : 'font-bold text-muted-foreground'}`}>TEKON</h1>
              <p className={`text-xs ${transparent ? 'text-white' : 'text-gray-700'}`}>Build Solutions</p>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink to="/" className={({isActive}) => `${transparent ? 'text-white text-xl' : 'text-gray-900 text-muted-foreground text-xl'} hover:text-primary px-3 py-2 font-medium${isActive ? ' font-bold' : ''} ${isActive ? 'text-primary' : ''}`}><p>Home</p></NavLink>
              <NavLink to="/about" className={({isActive}) => `${transparent ? 'text-white text-xl' : 'text-gray-900 text-muted-foreground text-xl'} hover:text-primary px-3 py-2 font-medium${isActive ? ' font-bold' : ''} ${isActive ? 'text-primary' : ''}`}><p>About </p></NavLink>
              <NavLink to="/projects" className={({isActive}) => `${transparent ? 'text-white text-xl' : 'text-gray-900 text-muted-foreground text-xl'} hover:text-primary px-3 py-2 font-medium${isActive ? ' font-bold' : ''} ${isActive ? 'text-primary' : ''}`}><p>Projects </p></NavLink>
              <NavLink to="/services" className={({isActive}) => `${transparent ? 'text-white text-xl' : 'text-gray-900 text-muted-foreground text-xl'} hover:text-primary px-3 py-2 font-medium${isActive ? ' font-bold' : ''} ${isActive ? 'text-primary' : ''}`}><p>Services </p></NavLink>
              <NavLink to="/contact" className={({isActive}) => `${transparent ? 'text-white text-xl' : 'text-gray-900 text-muted-foreground text-xl'} hover:text-primary px-3 py-2 font-medium${isActive ? ' font-bold' : ''} ${isActive ? 'text-primary' : ''}`}><p>Contact </p></NavLink>
            </div>
          </div>
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)}>
              <svg className={`h-6 w-6 ${transparent ? 'text-white' : 'text-gray-900'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Button>
          </div>
        </div>
        {isOpen && (
          <>
            {/* Overlay */}
            <div
              className="fixed inset-0 z-40 bg-black bg-opacity-10"
              onClick={() => setIsOpen(false)}
            />
            {/* Mobile menu */}
            <div className="md:hidden fixed top-16 left-0 w-full z-50">
              <div
                className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow rounded-b-lg"
                onClick={e => e.stopPropagation()}
              >
                <Link to="/" className="text-gray-900 hover:text-primary block px-3 py-2 text-base font-medium">Home</Link>
                <Link to="/about" className="text-gray-900 hover:text-primary block px-3 py-2 text-base font-medium">About</Link>
                <Link to="/projects" className="text-gray-900 hover:text-primary block px-3 py-2 text-base font-medium">Projects</Link>
                <Link to="/services" className="text-gray-900 hover:text-primary block px-3 py-2 text-base font-medium">Services</Link>
                <Link to="/contact" className="text-gray-900 hover:text-primary block px-3 py-2 text-base font-medium">Contact</Link>
              </div>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;