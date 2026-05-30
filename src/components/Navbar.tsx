'use client';

import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
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
      const offset = 100; // Adjusted offset for floating navbar + margin
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
    <div className="fixed top-6 left-0 w-full z-50 px-4 md:px-8">
      {/* Floating Glassmorphic Pill */}
      <nav
        className={`w-full max-w-[1300px] mx-auto h-[76px] transition-all duration-500 flex items-center px-6 md:px-10 justify-between ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg border border-[#C8A96B]/30 rounded-full' 
            : 'bg-white/80 backdrop-blur-md border border-border-dark/60 rounded-full shadow-md'
        }`}
      >
        {/* Left: Brand Logo */}
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex flex-col text-left group cursor-pointer"
        >
          <div className="flex items-start">
            <span className="font-serif text-xl md:text-2xl tracking-[0.25em] text-text-dark font-light transition-colors duration-300 group-hover:text-gold">
              AMAZIN<span className="text-gold transition-colors duration-500 group-hover:text-text-dark font-medium">K</span>
            </span>
            <span className="text-[8px] text-gold/80 ml-0.5 font-light relative -top-1 group-hover:rotate-12 transition-transform duration-500 block">
              ®
            </span>
          </div>
          <span className="text-[7px] tracking-[0.45em] text-text-dark/50 uppercase -mt-0.5 pl-0.5 group-hover:text-gold/80 transition-colors duration-300 font-bold">
            COUTURE ATELIER
          </span>
        </button>

        {/* Center: Desktop Links */}
        <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
          {[
            { name: 'Home', id: 'hero' },
            { name: 'About', id: 'about' },
            { name: 'Artists', id: 'artists' },
            { name: 'Gallery', id: 'gallery' },
            { name: 'Journal', id: 'journal' },
            { name: 'Contact', id: 'booking' },
          ].map((item) => (
            <button
              key={item.name}
              onClick={() => handleScrollTo(item.id)}
              className="text-[10px] uppercase tracking-[0.22em] text-text-dark/70 hover:text-gold transition-colors duration-300 font-semibold cursor-pointer"
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* Right: Round Solid Golden Button */}
        <div className="hidden lg:block">
          <button
            onClick={() => handleScrollTo('booking')}
            className="bg-gold hover:bg-[#B39457] text-white px-7 py-3 rounded-full text-[10px] tracking-[0.25em] uppercase font-bold transition-all duration-300 flex items-center space-x-2 group cursor-pointer shadow-md shadow-gold/10 hover:shadow-lg hover:shadow-gold/20"
          >
            <span>BOOK APPOINTMENT</span>
            <svg
              className="w-3.5 h-3.5 transform translate-y-[-0.5px] transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none cursor-pointer"
          aria-label="Toggle Navigation Menu"
        >
          <span
            className={`w-5 h-[1.5px] bg-text-dark transition-all duration-300 ${
              isMobileMenuOpen ? 'transform rotate-45 translate-y-[6px]' : ''
            }`}
          />
          <span
            className={`w-5 h-[1.5px] bg-text-dark transition-all duration-300 ${
              isMobileMenuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`w-5 h-[1.5px] bg-text-dark transition-all duration-300 ${
              isMobileMenuOpen ? 'transform -rotate-45 -translate-y-[6px]' : ''
            }`}
          />
        </button>
      </nav>

      {/* Mobile Drawer Dropdown directly below floating Navbar */}
      <div
        className={`w-full max-w-[1300px] mx-auto mt-2 bg-white/95 backdrop-blur-md border border-[#C8A96B]/25 rounded-3xl lg:hidden transition-all duration-500 ease-in-out overflow-hidden z-40 shadow-xl ${
          isMobileMenuOpen ? 'max-h-[420px] opacity-100 py-6 px-8' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col space-y-4">
          {[
            { name: 'Home', id: 'hero' },
            { name: 'About', id: 'about' },
            { name: 'Artists', id: 'artists' },
            { name: 'Gallery', id: 'gallery' },
            { name: 'Journal', id: 'journal' },
            { name: 'Contact', id: 'booking' },
          ].map((item) => (
            <button
              key={item.name}
              onClick={() => handleScrollTo(item.id)}
              className="text-xs uppercase tracking-[0.2em] text-text-dark/85 hover:text-gold text-left font-semibold transition-colors duration-300 cursor-pointer"
            >
              {item.name}
            </button>
          ))}

          <button
            onClick={() => handleScrollTo('booking')}
            className="w-full text-center bg-gold hover:bg-[#B39457] text-white py-3.5 rounded-full text-xs tracking-[0.22em] uppercase font-bold transition-all duration-300 cursor-pointer shadow-md shadow-gold/10"
          >
            BOOK APPOINTMENT
          </button>
        </div>
      </div>
    </div>
  );
}
