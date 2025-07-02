
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 py-4 px-6",
        scrolled ? "bg-background/80 backdrop-blur-md shadow-md" : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex justify-between items-center">
        <a href="#home" className="text-xl font-bold text-gradient">
          Tushar.dev
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#home" className="nav-link">Home</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#skills" className="nav-link">Skills</a>
          <a href="#projects" className="nav-link">Work & Projects</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>

        {/* Mobile Navigation Toggle */}
        <button 
          className="md:hidden text-foreground focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={cn(
        "fixed inset-0 bg-background/95 backdrop-blur-md md:hidden flex flex-col items-center justify-center space-y-8 transition-all duration-300",
        isOpen ? "opacity-100 z-40" : "opacity-0 -z-10"
      )}>
        <a href="#home" className="text-xl" onClick={toggleMenu}>Home</a>
        <a href="#about" className="text-xl" onClick={toggleMenu}>About</a>
        <a href="#skills" className="text-xl" onClick={toggleMenu}>Skills</a>
        <a href="#projects" className="text-xl" onClick={toggleMenu}>Work & Projects</a>
        <a href="#contact" className="text-xl" onClick={toggleMenu}>Contact</a>
      </div>
    </header>
  );
};

export default Navbar;
