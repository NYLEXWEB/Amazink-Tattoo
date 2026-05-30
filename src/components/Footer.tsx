import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#fdfbf7] pt-[60px] pb-8 border-t border-bone/10">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-12 mb-12">
          <div>
            <div className="font-bebas text-[2.5rem] tracking-[0.15em] text-bone mb-4">
              AMAZ<span className="text-rust">INK</span>
            </div>
            <p className="text-[0.95rem] font-normal text-fog leading-[1.7] max-w-[280px]">
              A premium custom tattoo studio in Los Angeles. Appointment only. Art always.
            </p>
          </div>
          <div>
            <p className="font-dm-mono text-[0.6rem] tracking-[0.3em] uppercase text-rust mb-5">Studio</p>
            <ul className="list-none">
              <li className="mb-3"><a href="#" className="text-[0.95rem] font-normal text-fog no-underline transition-colors duration-300 hover:text-bone">About Us</a></li>
              <li className="mb-3"><a href="#" className="text-[0.95rem] font-normal text-fog no-underline transition-colors duration-300 hover:text-bone">Our Artists</a></li>
              <li className="mb-3"><a href="#" className="text-[0.95rem] font-normal text-fog no-underline transition-colors duration-300 hover:text-bone">Portfolio</a></li>
              <li className="mb-3"><a href="#" className="text-[0.95rem] font-normal text-fog no-underline transition-colors duration-300 hover:text-bone">FAQ</a></li>
            </ul>
          </div>
          <div>
            <p className="font-dm-mono text-[0.6rem] tracking-[0.3em] uppercase text-rust mb-5">Services</p>
            <ul className="list-none">
              <li className="mb-3"><a href="#" className="text-[0.95rem] font-normal text-fog no-underline transition-colors duration-300 hover:text-bone">Custom Design</a></li>
              <li className="mb-3"><a href="#" className="text-[0.95rem] font-normal text-fog no-underline transition-colors duration-300 hover:text-bone">Cover-Up</a></li>
              <li className="mb-3"><a href="#" className="text-[0.95rem] font-normal text-fog no-underline transition-colors duration-300 hover:text-bone">Large Scale</a></li>
              <li className="mb-3"><a href="#" className="text-[0.95rem] font-normal text-fog no-underline transition-colors duration-300 hover:text-bone">Touch-Up</a></li>
            </ul>
          </div>
          <div>
            <p className="font-dm-mono text-[0.6rem] tracking-[0.3em] uppercase text-rust mb-5">Contact</p>
            <ul className="list-none">
              <li className="mb-3"><a href="#" className="text-[0.95rem] font-normal text-fog no-underline transition-colors duration-300 hover:text-bone">studio@amazink.co</a></li>
              <li className="mb-3"><a href="#" className="text-[0.95rem] font-normal text-fog no-underline transition-colors duration-300 hover:text-bone">+1 (323) 555-0192</a></li>
              <li className="mb-3"><a href="#" className="text-[0.95rem] font-normal text-fog no-underline transition-colors duration-300 hover:text-bone">4812 Sunset Blvd<br />Los Angeles, CA 90027</a></li>
              <li className="mb-3 mt-4"><a href="#" className="text-[0.95rem] font-normal text-fog no-underline transition-colors duration-300 hover:text-bone">Instagram</a></li>
              <li className="mb-3"><a href="#" className="text-[0.95rem] font-normal text-fog no-underline transition-colors duration-300 hover:text-bone">TikTok</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-7 border-t border-bone/10 flex justify-between items-center flex-col md:flex-row gap-4">
          <p className="font-dm-mono text-[0.6rem] tracking-[0.15em] text-fog">
            © 2025 Amazink Studio. All rights reserved.
          </p>
          <p className="font-dm-mono text-[0.6rem] tracking-[0.15em] text-fog/50">
            Built with obsession.
          </p>
        </div>
      </div>
    </footer>
  );
}
