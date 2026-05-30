import React from 'react';

export default function Booking() {
  return (
    <section className="py-[120px]" id="booking">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
      <div className="h-[300px] md:h-[580px] overflow-hidden relative fade-up">
        <img
          src="https://images.unsplash.com/photo-1565058379802-bbe93b2f703a?w=700&q=80"
          alt="Tattoo studio"
          className="w-full h-full object-cover grayscale-[20%]"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-rust/15 to-transparent to-[60%]"></div>
      </div>
      <div className="fade-up">
        <p className="font-dm-mono text-[0.65rem] tracking-[0.3em] uppercase text-rust mb-5">Get In Touch</p>
        <div className="w-12 h-[1px] bg-rust mb-6"></div>
        <h2 className="font-playfair text-[clamp(2.5rem,4vw,3.8rem)] font-bold leading-[1.05] text-bone mb-0">
          Book a <em className="italic text-rust font-normal">Consultation</em>
        </h2>
        <p className="text-[1.1rem] font-normal text-fog leading-[1.8] mb-9 mt-7">
          All new client work starts with a free 30-minute consultation. Tell us what you&apos;re imagining.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
          <div>
            <label className="block font-dm-mono text-[0.6rem] tracking-[0.25em] uppercase text-fog mb-2">First Name</label>
            <input type="text" placeholder="Diane" className="w-full bg-ash border border-bone/10 text-bone px-4 py-3.5 font-cormorant text-base outline-none transition-colors duration-300 focus:border-rust appearance-none" />
          </div>
          <div>
            <label className="block font-dm-mono text-[0.6rem] tracking-[0.25em] uppercase text-fog mb-2">Last Name</label>
            <input type="text" placeholder="Reynolds" className="w-full bg-ash border border-bone/10 text-bone px-4 py-3.5 font-cormorant text-base outline-none transition-colors duration-300 focus:border-rust appearance-none" />
          </div>
        </div>
        <div className="mb-5">
          <label className="block font-dm-mono text-[0.6rem] tracking-[0.25em] uppercase text-fog mb-2">Email Address</label>
          <input type="email" placeholder="you@email.com" className="w-full bg-ash border border-bone/10 text-bone px-4 py-3.5 font-cormorant text-base outline-none transition-colors duration-300 focus:border-rust appearance-none" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
          <div>
            <label className="block font-dm-mono text-[0.6rem] tracking-[0.25em] uppercase text-fog mb-2">Preferred Artist</label>
            <select className="w-full bg-ash border border-bone/10 text-bone px-4 py-3.5 font-cormorant text-base outline-none transition-colors duration-300 focus:border-rust appearance-none rounded-none">
              <option value="">No preference</option>
              <option>Mara Solis</option>
              <option>Kenji Muro</option>
              <option>Zoe Harrington</option>
            </select>
          </div>
          <div>
            <label className="block font-dm-mono text-[0.6rem] tracking-[0.25em] uppercase text-fog mb-2">Style</label>
            <select className="w-full bg-ash border border-bone/10 text-bone px-4 py-3.5 font-cormorant text-base outline-none transition-colors duration-300 focus:border-rust appearance-none rounded-none">
              <option value="">Select style</option>
              <option>Fine Line</option>
              <option>Blackwork</option>
              <option>Japanese</option>
              <option>Geometric</option>
              <option>Neo-Traditional</option>
              <option>Cover-Up</option>
              <option>Other</option>
            </select>
          </div>
        </div>
        <div className="mb-5">
          <label className="block font-dm-mono text-[0.6rem] tracking-[0.25em] uppercase text-fog mb-2">Tell Us Your Idea</label>
          <textarea placeholder="Describe your concept, reference images, placement, size…" className="w-full bg-ash border border-bone/10 text-bone px-4 py-3.5 font-cormorant text-base outline-none transition-colors duration-300 focus:border-rust appearance-none resize-y min-h-[120px]"></textarea>
        </div>
        <a href="#" className="font-dm-mono text-[0.7rem] tracking-[0.2em] uppercase text-ink bg-bone px-9 py-4 no-underline inline-block transition-colors duration-300 hover:bg-rust hover:text-white mt-2">
          Submit Request
        </a>
      </div>
      </div>
    </section>
  );
}
