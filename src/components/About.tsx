import React from 'react';

export default function About() {
  return (
    <section className="py-[120px]" id="about">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
      <div className="relative h-[300px] md:h-[580px] fade-up">
        <img
          className="absolute top-0 left-0 w-[75%] h-[88%] object-cover grayscale-[15%]"
          src="https://images.unsplash.com/photo-1542856391-010fb87dcfed?w=700&q=80"
          alt="Tattoo studio interior"
        />
        <img
          className="absolute bottom-0 right-0 w-[55%] h-[55%] object-cover grayscale-[15%] border-[6px] border-ink"
          src="https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=400&q=80"
          alt="Tattoo detail"
        />
      </div>
      <div className="fade-up">
        <p className="font-dm-mono text-[0.65rem] tracking-[0.3em] uppercase text-rust mb-5">Our Philosophy</p>
        <div className="w-12 h-[1px] bg-rust mb-6"></div>
        <h2 className="font-playfair text-[clamp(2.5rem,4vw,3.8rem)] font-bold leading-[1.05] text-bone mb-7">
          Where Craft Meets <em className="italic text-rust font-normal">Obsession</em>
        </h2>
        <p className="text-[1.1rem] font-normal text-fog leading-[1.8] mb-5">
          Amazink was founded on a single belief: that tattooing is fine art. Not commodity. Not convention. We are four walls of obsessive craftsmanship, where every client leaves with something that will outlast us all.
        </p>
        <p className="text-[1.1rem] font-normal text-fog leading-[1.8] mb-5">
          Our studio is built on appointment-based intimacy — no walk-ins, no rush. Your story deserves time, deliberation, and a space that feels sacred.
        </p>
        <div className="flex gap-12 mt-12 pt-10 border-t border-bone/10">
          <div>
            <div className="font-bebas text-[3.5rem] text-bone leading-none">
              16<span className="text-rust">+</span>
            </div>
            <div className="font-dm-mono text-[0.65rem] tracking-[0.2em] uppercase text-fog mt-1.5">
              Years in Business
            </div>
          </div>
          <div>
            <div className="font-bebas text-[3.5rem] text-bone leading-none">
              8<span className="text-rust">K</span>
            </div>
            <div className="font-dm-mono text-[0.65rem] tracking-[0.2em] uppercase text-fog mt-1.5">
              Pieces Completed
            </div>
          </div>
          <div>
            <div className="font-bebas text-[3.5rem] text-bone leading-none">
              9<span className="text-rust">.</span>8
            </div>
            <div className="font-dm-mono text-[0.65rem] tracking-[0.2em] uppercase text-fog mt-1.5">
              Client Rating
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
