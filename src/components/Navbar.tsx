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
            ? 'bg-black/95 backdrop-blur-md shadow-lg border border-[#C8A96B]/30 rounded-full' 
            : 'bg-black/80 backdrop-blur-md border border-white/10 rounded-full shadow-md'
        }`}
      >
        {/* Left: Brand Logo */}
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center cursor-pointer h-full group py-0"
        >
          <img 
            src="/logo (3).png" 
            alt="Amazink Tattoos" 
            className="h-14 md:h-[60px] w-auto object-contain transition-transform duration-300 group-hover:scale-105 no-grayscale"
          />
        </button>

        {/* Center: Desktop Links */}
        <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
          {[
            { name: 'Home', id: 'hero' },
            { name: 'About', id: 'about' },
            { name: 'Artists', id: 'artists' },
            { name: 'Gallery', id: 'gallery' },
            { name: 'Contact', id: 'contact' },
          ].map((item) => (
            <button
              key={item.name}
              onClick={() => handleScrollTo(item.id)}
              className="text-[10px] uppercase tracking-[0.22em] text-white/70 hover:text-gold transition-colors duration-300 font-semibold cursor-pointer"
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* Right: Round Solid Golden Button */}
        <div className="hidden lg:block">
          <a
            href="https://wa.me/919946111181?text=Hello%20Amazink%20Tattoo%20Studio%2C%20I%20would%20like%20to%20book%20a%20consultation%20appointment."
            target="_blank"
            rel="noopener noreferrer"
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
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none cursor-pointer"
          aria-label="Toggle Navigation Menu"
        >
          <span
            className={`w-5 h-[1.5px] bg-white transition-all duration-300 ${
              isMobileMenuOpen ? 'transform rotate-45 translate-y-[6px]' : ''
            }`}
          />
          <span
            className={`w-5 h-[1.5px] bg-white transition-all duration-300 ${
              isMobileMenuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`w-5 h-[1.5px] bg-white transition-all duration-300 ${
              isMobileMenuOpen ? 'transform -rotate-45 -translate-y-[6px]' : ''
            }`}
          />
        </button>
      </nav>

      {/* Mobile Drawer Dropdown directly below floating Navbar */}
      <div
        className={`w-full max-w-[1300px] mx-auto mt-2 bg-black/95 backdrop-blur-md border border-[#C8A96B]/25 rounded-3xl lg:hidden transition-all duration-500 ease-in-out overflow-hidden z-40 shadow-xl ${
          isMobileMenuOpen ? 'max-h-[420px] opacity-100 py-6 px-8' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col space-y-4">
          {[
            { name: 'Home', id: 'hero' },
            { name: 'About', id: 'about' },
            { name: 'Artists', id: 'artists' },
            { name: 'Gallery', id: 'gallery' },
            { name: 'Contact', id: 'contact' },
          ].map((item) => (
            <button
              key={item.name}
              onClick={() => handleScrollTo(item.id)}
              className="text-xs uppercase tracking-[0.2em] text-white/85 hover:text-gold text-left font-semibold transition-colors duration-300 cursor-pointer"
            >
              {item.name}
            </button>
          ))}

          <a
            href="https://wa.me/919946111181?text=Hello%20Amazink%20Tattoo%20Studio%2C%20I%20would%20like%20to%20book%20a%20consultation%20appointment."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full text-center block bg-gold hover:bg-[#B39457] text-white py-3.5 rounded-full text-xs tracking-[0.22em] uppercase font-bold transition-all duration-300 cursor-pointer shadow-md shadow-gold/10"
          >
            BOOK APPOINTMENT
          </a>
        </div>
      </div>
    </div>
  );
}
