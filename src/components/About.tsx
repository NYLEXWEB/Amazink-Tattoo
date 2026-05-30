'use client';

export default function About() {
  return (
    <section id="about" className="section-spacing bg-bg-secondary border-t border-b border-border-dark overflow-hidden">
      <div className="museum-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Left Column: Asymmetric Image Presentation */}
          <div className="lg:col-span-6 relative">
            <div className="relative w-full aspect-[4/5] max-w-[500px] mx-auto lg:mx-0 group">
              {/* Offset border */}
              <div className="absolute -inset-4 border border-gold/35 translate-x-3 translate-y-3 transition-transform duration-750 ease-out group-hover:translate-x-0 group-hover:translate-y-0"></div>
              
              <div className="relative w-full h-full overflow-hidden bg-white border border-border-dark shadow-lg">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?q=80&w=800&auto=format&fit=crop"
                  alt="AMAZINK Luxury Studio Space"
                  className="w-full h-full object-cover grayscale transition-transform duration-1000 group-hover:scale-103"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/5 pointer-events-none"></div>
              </div>

              {/* Float aesthetic badge */}
              <div className="absolute -bottom-6 -right-6 bg-white border border-gold/30 px-6 py-6 hidden sm:flex flex-col items-center justify-center shadow-md">
                <span className="font-serif text-3xl text-gold font-light tracking-widest">
                  X
                </span>
                <span className="text-[7px] tracking-[0.4em] text-text-dark/40 uppercase mt-1">
                  YEARS ELITE
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Text & Philosophy */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Small Gold Tag */}
            <span className="luxury-label mb-6">01 // THE PHILOSOPHY</span>

            {/* Serif Heading */}
            <h2 className="editorial-title text-[42px] sm:text-[56px] text-text-dark leading-[1.05] mb-8 font-light">
              REDEFINING <br />
              <span className="italic font-light">THE ATELIER</span> EXPERIENCE.
            </h2>

            {/* Thin Gold Divider */}
            <div className="w-16 h-[1px] bg-gold mb-10"></div>

            {/* Long Copy */}
            <div className="space-y-6 text-text-dark/70 font-light tracking-wide leading-relaxed text-sm sm:text-base">
              <p>
                AMAZINK is born from the convergence of fine art, couture aesthetics, and master-level body ornamentation. We reject the standard, loud tattoo shop paradigm. In its place, we have built a sanctuary—a silent luxury space of premium design and museum-like focus.
              </p>
              <p className="border-l-2 border-gold/45 pl-6 font-serif italic text-text-dark text-lg sm:text-xl py-2">
                "We do not merely create tattoos; we design permanent visual narratives that harmonize with the contours of the human canvas."
              </p>
              <p>
                Every project is approached as a commission for a private collection. We work by appointment only, ensuring that each client is afforded complete privacy, undivided focus, and a bespoke artistic dialogue that starts long before the ink meets the skin.
              </p>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-3 gap-6 pt-12 mt-8 border-t border-border-dark">
              <div>
                <p className="font-serif text-2xl sm:text-3xl text-gold font-light">100%</p>
                <p className="text-[9px] tracking-[0.2em] uppercase text-text-dark/50 mt-1 font-semibold">Bespoke</p>
              </div>
              <div>
                <p className="font-serif text-2xl sm:text-3xl text-gold font-light">08+</p>
                <p className="text-[9px] tracking-[0.2em] uppercase text-text-dark/50 mt-1 font-semibold">Awards</p>
              </div>
              <div>
                <p className="font-serif text-2xl sm:text-3xl text-gold font-light">1500+</p>
                <p className="text-[9px] tracking-[0.2em] uppercase text-text-dark/50 mt-1 font-semibold">Portfolios</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
