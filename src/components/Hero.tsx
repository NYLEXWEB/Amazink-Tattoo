'use client';

export default function Hero() {
  const handleScrollToContact = () => {
    const element = document.getElementById('contact');
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
    <section 
      id="hero" 
      className="relative h-auto lg:h-[calc(100vh-120px)] mt-[102px] flex items-center bg-white overflow-hidden pb-12 pt-6 lg:pb-0 lg:pt-0 border-b border-border-dark/50 lg:min-h-[640px]"
    >
      {/* Background Architectural Grid Accent */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-0">
        <div className="absolute left-[10%] top-0 bottom-0 w-[1px] bg-text-dark"></div>
        <div className="absolute left-[50%] top-0 bottom-0 w-[1px] bg-text-dark"></div>
        <div className="absolute left-[90%] top-0 bottom-0 w-[1px] bg-text-dark"></div>
      </div>

      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-0 items-center h-full relative z-10">
        {/* Left Column: Typography & Story (lg: 6 cols) */}
        <div className="lg:col-span-6 flex flex-col justify-center h-full pt-4 pb-4 z-20">
          <div className="animate-fade-up">
            {/* Architectural Monogram & Branding Index */}
            <div className="flex items-center space-x-4 mb-6">
              <div className="flex flex-col">
                <span className="text-[10px] tracking-[0.35em] text-text-dark/45 uppercase font-bold">
                  AMAZINK TATTOO STUDIO
                </span>
                <span className="text-[8px] tracking-[0.2em] text-gold uppercase mt-0.5 font-semibold">
                  BEST TATTOO STUDIO IN CALICUT // KOZHIKODE, KERALA
                </span>
              </div>
            </div>

            {/* Massive Serif Overlapping Headline - Adjusted size for 100% viewport containment */}
            <h1 className="editorial-title text-[40px] sm:text-[60px] xl:text-[78px] text-text-dark leading-[0.92] mb-6 font-extralight tracking-tighter lg:mr-[-80px] relative z-30 drop-shadow-sm">
              <span className="sr-only">Amazink Tattoo - Best Tattoo Studio in Calicut, Kozhikode Kerala</span>
              ART ON SKIN.<br />
              <span className="italic font-light text-gold">DESIGNED</span> TO LAST.
            </h1>

            {/* Subtle Gold Axis Line */}
            <div className="w-20 h-[1px] bg-gold mb-6 animate-line-reveal"></div>

            {/* Premium Supporting Copy */}
            <p className="font-sans text-xs sm:text-sm text-text-dark/65 leading-relaxed max-w-md mb-8 font-light tracking-wide">
              We are the Best Tattoo Studio in Kozhikode and Tattoo Studio in Calicut Welcome to Amazink Tattoo, a leading Tattoo Studio Kozhikode known for custom designs, premium hygiene standards, and exceptional artistry. Our experienced Tattoo Artist Kozhikode team specializes in realism tattoos, portrait tattoos, black and grey tattoos region.fix
            </p>

            {/* Solid Rounded-Full Gold CTA Button */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <button
                onClick={handleScrollToContact}
                className="group bg-gold hover:bg-[#B39457] text-white px-10 py-4.5 rounded-full text-[10px] tracking-[0.3em] uppercase font-bold transition-all duration-300 flex items-center space-x-3 cursor-pointer shadow-md shadow-gold/10 hover:shadow-lg hover:shadow-gold/20 relative overflow-hidden"
              >
                <span>INITIATE BRIEF</span>
                <svg
                  className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-2"
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
              
              <div className="text-[9px] tracking-[0.25em] text-text-dark/40 uppercase font-semibold border-b border-border-dark pb-1 hidden sm:block">
                BY APPOINTMENT ONLY
              </div>
            </div>
          </div>

          {/* Scroll Down Vertical Indicator - Placed cleanly within viewport bounds */}
          <div className="hidden lg:flex items-center space-x-4 mt-8 xl:mt-12 animate-fade-in delay-500">
            <div className="h-14 w-[1px] bg-gold/40 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1/2 bg-gold animate-[bounce_2s_infinite]"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-[9px] tracking-[0.3em] uppercase text-text-dark/40 font-semibold leading-none">
                SCROLL
              </span>
              <span className="text-[9px] tracking-[0.3em] uppercase text-text-dark/40 font-semibold leading-none mt-1">
                DOWN
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Constrained Merged Image Block (lg: 6 cols) */}
        <div className="lg:col-span-6 relative flex justify-center items-center h-full w-full py-2 lg:py-0">
          {/* Subtle Parallax Floating Frame Container - constrained height to fit single screen */}
          <div className="relative w-full max-w-[420px] lg:max-w-none aspect-[3/4] lg:h-[62vh] w-[90%] lg:w-[88%] group overflow-visible animate-image-reveal">
            
            {/* Outer offset gold luxury border */}
            <div className="absolute -inset-3 border border-gold/40 transition-transform duration-700 ease-out group-hover:translate-x-1 group-hover:-translate-y-1 z-0"></div>

            {/* Image Wrapper */}
            <div className="relative w-full h-full overflow-hidden bg-bg-secondary z-10 border border-border-dark shadow-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/hero-portrait.png"
                alt="AMAZINK Luxury Tattoo Editorial Portrait"
                className="w-full h-full object-cover grayscale contrast-115 transition-transform duration-1000 ease-out group-hover:scale-103"
              />
              
              {/* Subtle Elegant Overlay Shadow for Fashion feel */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/15 opacity-60 pointer-events-none"></div>

              {/* INTEGRATED INTERESTING STAMPS & BLUEPRINTS (Merged concept) */}
              
              {/* 2. Studio Coordinates Stamp (Top Right) */}
              <div className="absolute top-4 right-4 z-20 text-white/90 font-mono text-[8px] tracking-[0.15em] font-light hidden md:block">
                11.2607° N, 75.7792° E
              </div>

              {/* 3. Central Blueprint Grid Axis Crosshair Overlay */}
              <div className="absolute inset-0 pointer-events-none opacity-45 z-20 flex items-center justify-center">
                {/* Horizontal blueprint line */}
                <div className="w-[85%] h-[1px] bg-gold/35 relative">
                  <span className="absolute left-2 -top-3 text-[6.5px] font-mono tracking-widest text-gold/75">X-AXIS</span>
                </div>
                {/* Vertical blueprint line */}
                <div className="absolute h-[85%] w-[1px] bg-gold/35"></div>
                {/* Micro center crosshair box */}
                <div className="absolute w-5 h-5 border border-gold/55"></div>
              </div>

              {/* 6. Brand Couture Stamp (Bottom Right) */}
              <div className="absolute bottom-4 right-4 z-20 text-white/80 font-sans text-[7.5px] tracking-[0.45em] uppercase font-bold pr-1.5 border-r border-gold">
                AMAZINK // TATTOO STUDIO
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
