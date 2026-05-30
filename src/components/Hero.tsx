import React from 'react';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row relative overflow-hidden bg-ink">
      <div className="w-full md:w-1/2 flex justify-end z-10">
        <div className="w-full max-w-[640px] flex flex-col justify-end px-6 md:px-12 pb-20 pt-32 md:pt-0 min-h-[50vh] md:min-h-screen">
          <p className="font-dm-mono text-[0.65rem] tracking-[0.3em] uppercase text-rust mb-6">
            Est. 2008 — Los Angeles, CA
          </p>
          <h1 className="font-playfair text-[clamp(4rem,7vw,7rem)] font-black leading-[0.9] text-bone mb-8">
            Permanent<br />
            <em className="italic text-rust font-normal">Art</em><br />
            On Skin
          </h1>
          <p className="font-cormorant text-[1.15rem] font-normal text-fog max-w-[380px] leading-[1.7] mb-12">
            We don&apos;t just tattoo — we collaborate. Every piece is a dialogue between artist and skin, between memory and permanence.
          </p>
          <div className="flex gap-5 items-center flex-wrap">
            <a
              href="#booking"
              className="font-dm-mono text-[0.7rem] tracking-[0.2em] uppercase text-ink bg-bone px-9 py-4 no-underline inline-block transition-colors duration-300 hover:bg-rust hover:text-white"
            >
              Book a Session
            </a>
            <a
              href="#gallery"
              className="font-dm-mono text-[0.7rem] tracking-[0.2em] uppercase text-fog no-underline inline-flex items-center gap-3 transition-colors duration-300 hover:text-bone group"
            >
              <span className="block w-10 h-[1px] bg-rust transition-all duration-300 group-hover:w-[60px]"></span>
              View Our Work
            </a>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 relative overflow-hidden h-[50vh] md:min-h-screen">
        <img
          src="https://images.unsplash.com/photo-1598207950893-82cc7e24b13d?w=900&q=80"
          alt="Tattoo artist at work"
          className="w-full h-full object-cover grayscale-[20%] contrast-110 opacity-90"
        />
        {/* Gradients to match the original CSS overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-ink to-transparent to-[30%]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-ink to-transparent to-[30%] mt-auto md:hidden"></div>
      </div>
    </section>
  );
}
