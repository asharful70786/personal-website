import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Smooth scroll handler with navigation fallback
  const scrollToSection = (id) => {
    navigate('/');
    setTimeout(() => {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  return (
    <motion.div 
      className="navbar bg-base-300 fixed top-0 left-0 w-full z-50 shadow-md"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Logo / Name */}
      <div className="navbar-start">
        <button 
          onClick={() => scrollToSection('home')}
          className="text-xl font-bold cursor-pointer"
        >
          <img src="/logo.webp" alt="logo" className="h-8 w-8" />
        </button>
      </div>

      {/* Desktop Navigation */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><button onClick={() => scrollToSection('home')}>Home</button></li>
          <li><button onClick={() => scrollToSection('skills')}>Skills</button></li>
          <li><button onClick={() => scrollToSection('about')}>About</button></li>
          <li><button onClick={() => scrollToSection('clients')}>Clients</button></li>
          <li><button onClick={() => scrollToSection('contact')}>Contact</button></li>
        </ul>
      </div>

      {/* Mobile Navigation */}
      <div className="navbar-end lg:hidden">
        <button 
          className="btn btn-ghost lg:hidden" 
          onClick={toggleMenu}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <motion.div 
          className="absolute top-16 right-4 bg-base-200 rounded-md shadow-lg z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <ul className="menu menu-vertical p-4">
            <li><button onClick={() => { toggleMenu(); scrollToSection('home'); }}>Home</button></li>
            <hr className="my-2" />
            <li><button onClick={() => { toggleMenu(); scrollToSection('skills'); }}>Skills</button></li>
            <hr className="my-2" />
            <li><button onClick={() => { toggleMenu(); scrollToSection('about'); }}>About</button></li>
            <hr className="my-2" />
            <li><button onClick={() => { toggleMenu(); scrollToSection('clients'); }}>Clients</button></li>
            <hr className="my-2" />
            <li><button onClick={() => { toggleMenu(); scrollToSection('contact'); }}>Contact</button></li>
          </ul>
        </motion.div>
      )}

      {/* Desktop Links */}
      <div className="navbar-end hidden lg:flex">
        <Link to="/terms" className="btn btn-sm btn-ghost">Terms</Link>
        <Link to="/privacy" className="btn btn-sm btn-ghost">Privacy</Link>
      </div>
    </motion.div>
  );
};

export default Navbar;
