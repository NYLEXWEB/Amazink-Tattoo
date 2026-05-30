import React from 'react';

export default function Gallery() {
  return (
    <section className="pb-[120px]" id="gallery">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        <div className="flex justify-between items-end mb-12">
          <div className="fade-up">
            <p className="font-dm-mono text-[0.65rem] tracking-[0.3em] uppercase text-rust mb-5">Portfolio</p>
            <div className="w-12 h-[1px] bg-rust mb-6"></div>
            <h2 className="font-playfair text-[clamp(2.5rem,4vw,3.8rem)] font-bold leading-[1.05] text-bone mb-0">
              Selected <em className="italic text-rust font-normal">Work</em>
            </h2>
          </div>
          <a
            href="#"
            className="font-dm-mono text-[0.7rem] tracking-[0.2em] uppercase text-fog no-underline inline-flex items-center gap-3 transition-colors duration-300 hover:text-bone group fade-up"
          >
            <span className="block w-10 h-[1px] bg-rust transition-all duration-300 group-hover:w-[60px]"></span>
            View Full Gallery
          </a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-12 md:grid-rows-[repeat(2,280px)] gap-3 auto-rows-[220px]">
          <div className="col-span-1 md:col-start-1 md:col-end-5 md:row-start-1 md:row-end-3 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1589758438368-0ad531db3366?w=600&q=80"
              alt="Tattoo art 1"
              className="w-full h-full object-cover grayscale-[20%] contrast-[1.05] transition-all duration-400 hover:grayscale-0 hover:contrast-[1.1] hover:scale-102 block"
            />
          </div>
          <div className="col-span-1 md:col-start-5 md:col-end-8 md:row-start-1 md:row-end-2 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1562962230-a3f5133d4a3e?w=600&q=80"
              alt="Tattoo art 2"
              className="w-full h-full object-cover grayscale-[20%] contrast-[1.05] transition-all duration-400 hover:grayscale-0 hover:contrast-[1.1] hover:scale-102 block"
            />
          </div>
          <div className="col-span-1 md:col-start-8 md:col-end-13 md:row-start-1 md:row-end-2 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=600&q=80"
              alt="Tattoo art 3"
              className="w-full h-full object-cover grayscale-[20%] contrast-[1.05] transition-all duration-400 hover:grayscale-0 hover:contrast-[1.1] hover:scale-102 block"
            />
          </div>
          <div className="col-span-1 md:col-start-5 md:col-end-9 md:row-start-2 md:row-end-3 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1598207950762-6eed966f0e5a?w=600&q=80"
              alt="Tattoo art 4"
              className="w-full h-full object-cover grayscale-[20%] contrast-[1.05] transition-all duration-400 hover:grayscale-0 hover:contrast-[1.1] hover:scale-102 block"
            />
          </div>
          <div className="col-span-2 md:col-start-9 md:col-end-13 md:row-start-2 md:row-end-3 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1584907797015-7554cd315667?w=600&q=80"
              alt="Tattoo art 5"
              className="w-full h-full object-cover grayscale-[20%] contrast-[1.05] transition-all duration-400 hover:grayscale-0 hover:contrast-[1.1] hover:scale-102 block"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
