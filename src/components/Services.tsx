import React from 'react';

export default function Services() {
  return (
    <section className="py-[120px]" id="services">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        <div className="fade-up">
          <p className="font-dm-mono text-[0.65rem] tracking-[0.3em] uppercase text-rust mb-5">What We Offer</p>
          <div className="w-12 h-[1px] bg-rust mb-6"></div>
          <h2 className="font-playfair text-[clamp(2.5rem,4vw,3.8rem)] font-bold leading-[1.05] text-bone mb-0">
            Our <em className="italic text-rust font-normal">Services</em>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[2px] mt-16">
          <div className="p-12 bg-ash border border-bone/5 transition-colors duration-300 hover:bg-[#e8e2d9] flex flex-col fade-up">
            <div className="font-bebas text-[5rem] text-bone/5 leading-none mb-6">01</div>
            <h3 className="font-playfair text-[1.8rem] font-bold text-bone mb-4">Custom Tattoo Design</h3>
            <p className="text-[1rem] font-normal text-fog leading-[1.7] flex-1">
              We begin with a consultation to understand your vision, history, and skin. The design is yours alone — never reused, never resold. This is bespoke tattooing.
            </p>
            <a href="#booking" className="mt-7 font-dm-mono text-[0.65rem] tracking-[0.25em] uppercase text-rust no-underline inline-flex items-center gap-3 transition-all duration-300 hover:gap-5 after:content-['→']">
              Start a Project
            </a>
          </div>
          <div className="p-12 bg-ash border border-bone/5 transition-colors duration-300 hover:bg-[#e8e2d9] flex flex-col fade-up">
            <div className="font-bebas text-[5rem] text-bone/5 leading-none mb-6">02</div>
            <h3 className="font-playfair text-[1.8rem] font-bold text-bone mb-4">Cover-Up & Rework</h3>
            <p className="text-[1rem] font-normal text-fog leading-[1.7] flex-1">
              Old work doesn&apos;t have to be a regret. Our artists specialize in transforming existing tattoos into new chapters — same skin, new story.
            </p>
            <a href="#booking" className="mt-7 font-dm-mono text-[0.65rem] tracking-[0.25em] uppercase text-rust no-underline inline-flex items-center gap-3 transition-all duration-300 hover:gap-5 after:content-['→']">
              Get a Consultation
            </a>
          </div>
          <div className="p-12 bg-ash border border-bone/5 transition-colors duration-300 hover:bg-[#e8e2d9] flex flex-col fade-up">
            <div className="font-bebas text-[5rem] text-bone/5 leading-none mb-6">03</div>
            <h3 className="font-playfair text-[1.8rem] font-bold text-bone mb-4">Large-Scale Work</h3>
            <p className="text-[1rem] font-normal text-fog leading-[1.7] flex-1">
              Full sleeves, back pieces, chest panels. We plan large projects with surgical care — mapping your body&apos;s topography to create coherent, flowing compositions.
            </p>
            <a href="#booking" className="mt-7 font-dm-mono text-[0.65rem] tracking-[0.25em] uppercase text-rust no-underline inline-flex items-center gap-3 transition-all duration-300 hover:gap-5 after:content-['→']">
              Plan Your Piece
            </a>
          </div>
          <div className="p-12 bg-ash border border-bone/5 transition-colors duration-300 hover:bg-[#e8e2d9] flex flex-col fade-up">
            <div className="font-bebas text-[5rem] text-bone/5 leading-none mb-6">04</div>
            <h3 className="font-playfair text-[1.8rem] font-bold text-bone mb-4">Touch-Up & Restoration</h3>
            <p className="text-[1rem] font-normal text-fog leading-[1.7] flex-1">
              Age changes ink. We bring faded or blurred work back to its intended clarity — whether our own or another artist&apos;s. Skin deserves maintenance.
            </p>
            <a href="#booking" className="mt-7 font-dm-mono text-[0.65rem] tracking-[0.25em] uppercase text-rust no-underline inline-flex items-center gap-3 transition-all duration-300 hover:gap-5 after:content-['→']">
              Book a Touch-Up
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
