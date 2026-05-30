'use client';

import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 90; // Height of navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full h-[90px] z-50 transition-all duration-500 flex items-center ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-[#C8A96B]/15' 
          : 'bg-white/80 backdrop-blur-sm border-b border-border-dark'
      }`}
    >
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Left: Brand Logo */}
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex flex-col text-left group cursor-pointer"
        >
          <span className="font-serif text-2xl md:text-3xl tracking-[0.25em] text-text-dark font-light transition-colors duration-300 group-hover:text-gold">
            AMAZINK
          </span>
          <span className="text-[8px] tracking-[0.45em] text-text-dark/50 uppercase -mt-0.5 pl-0.5 group-hover:text-gold/80 transition-colors duration-300">
            TATTOO STUDIO
          </span>
        </button>

        {/* Center: Desktop Navigation Links */}
        <div className="hidden lg:flex items-center space-x-8 xl:space-x-10">
          {[
            { name: 'Home', id: 'hero' },
            { name: 'About', id: 'about' },
            { name: 'Artists', id: 'artists' },
            { name: 'Gallery', id: 'gallery' },
            { name: 'Services', id: 'services' },
            { name: 'Journal', id: 'journal' },
            { name: 'Contact', id: 'booking' },
          ].map((item) => (
            <button
              key={item.name}
              onClick={() => handleScrollTo(item.id)}
              className="text-xs uppercase tracking-[0.25em] text-text-dark/70 hover:text-gold transition-colors duration-300 font-medium cursor-pointer"
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* Right: Book Consultation Button */}
        <div className="hidden lg:block">
          <button
            onClick={() => handleScrollTo('booking')}
            className="border border-gold text-gold hover:text-white hover:bg-gold px-6 py-3 text-[10px] tracking-[0.3em] uppercase font-medium transition-all duration-500 flex items-center space-x-2 group cursor-pointer"
          >
            <span>BOOK APPOINTMENT</span>
            <svg
              className="w-3 h-3 transform translate-y-[-0.5px] transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none cursor-pointer"
          aria-label="Toggle Navigation Menu"
        >
          <span
            className={`w-6 h-[1px] bg-text-dark transition-all duration-300 ${
              isMobileMenuOpen ? 'transform rotate-45 translate-y-[7px]' : ''
            }`}
          />
          <span
            className={`w-6 h-[1px] bg-text-dark transition-all duration-300 ${
              isMobileMenuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`w-6 h-[1px] bg-text-dark transition-all duration-300 ${
              isMobileMenuOpen ? 'transform -rotate-45 -translate-y-[7px]' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      <div
        className={`fixed top-[90px] left-0 w-full bg-white border-b border-border-dark lg:hidden transition-all duration-500 ease-in-out overflow-hidden z-40 ${
          isMobileMenuOpen ? 'max-h-[450px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="px-6 py-8 flex flex-col space-y-6">
          {[
            { name: 'Home', id: 'hero' },
            { name: 'About', id: 'about' },
            { name: 'Artists', id: 'artists' },
            { name: 'Gallery', id: 'gallery' },
            { name: 'Services', id: 'services' },
            { name: 'Journal', id: 'journal' },
            { name: 'Contact', id: 'booking' },
          ].map((item) => (
            <button
              key={item.name}
              onClick={() => handleScrollTo(item.id)}
              className="text-sm uppercase tracking-[0.2em] text-text-dark/80 hover:text-gold text-left font-medium transition-colors duration-300 cursor-pointer"
            >
              {item.name}
            </button>
          ))}
          <button
            onClick={() => handleScrollTo('booking')}
            className="w-full text-center border border-gold text-gold hover:text-white hover:bg-gold py-4 text-xs tracking-[0.25em] uppercase font-semibold transition-all duration-500 cursor-pointer"
          >
            BOOK APPOINTMENT
          </button>
        </div>
      </div>
    </nav>
  );
}
