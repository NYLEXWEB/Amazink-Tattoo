import React from 'react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-[#fdfbf7f2] to-transparent">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 py-7 flex items-center justify-between w-full">
        <a href="#" className="font-bebas text-3xl tracking-[0.15em] text-bone no-underline">
        AMAZ<span className="text-rust">INK</span>
      </a>
      <div className="hidden md:flex gap-10 items-center">
        <a href="#about" className="font-dm-mono text-[0.7rem] tracking-[0.2em] uppercase text-fog no-underline transition-colors duration-300 hover:text-bone">
          Studio
        </a>
        <a href="#gallery" className="font-dm-mono text-[0.7rem] tracking-[0.2em] uppercase text-fog no-underline transition-colors duration-300 hover:text-bone">
          Work
        </a>
        <a href="#artists" className="font-dm-mono text-[0.7rem] tracking-[0.2em] uppercase text-fog no-underline transition-colors duration-300 hover:text-bone">
          Artists
        </a>
        <a href="#services" className="font-dm-mono text-[0.7rem] tracking-[0.2em] uppercase text-fog no-underline transition-colors duration-300 hover:text-bone">
          Services
        </a>
        <a href="#booking" className="font-dm-mono text-[0.7rem] tracking-[0.2em] uppercase text-white bg-rust px-6 py-2.5 no-underline transition-colors duration-300 hover:bg-gold hover:text-white">
          Book Now
        </a>
      </div>
    </nav>
  );
}
