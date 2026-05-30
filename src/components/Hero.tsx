'use client';

export default function Hero() {
  const handleScrollToBooking = () => {
    const element = document.getElementById('booking');
    if (element) {
      const offset = 90; // Height of navbar
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
      className="relative min-h-[calc(100vh-90px)] mt-[90px] flex items-center bg-white overflow-hidden pb-16 lg:pb-0 border-b border-border-dark/50"
    >
      {/* Background Architectural Grid Accent */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-0">
        <div className="absolute left-[10%] top-0 bottom-0 w-[1px] bg-text-dark"></div>
        <div className="absolute left-[50%] top-0 bottom-0 w-[1px] bg-text-dark"></div>
        <div className="absolute left-[90%] top-0 bottom-0 w-[1px] bg-text-dark"></div>
      </div>

      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0 items-center h-full relative z-10">
        {/* Left Column: Typography & Story (lg: 6 cols to support overlap) */}
        <div className="lg:col-span-6 flex flex-col justify-between h-full pt-8 lg:pt-16 pb-8 lg:pb-16 z-20">
          <div className="animate-fade-up">
            {/* Architectural Monogram & Branding Index */}
            <div className="flex items-center space-x-5 mb-12">
              <div className="relative flex items-center justify-center w-12 h-20 border-l border-gold/45">
                <span className="font-serif text-xl tracking-[0.25em] text-gold font-light pl-4">
                  N
                </span>
                <span className="absolute -top-1.5 left-4 text-[7px] tracking-[0.4em] text-gold/60 uppercase font-bold">
                  AMZ
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] tracking-[0.35em] text-text-dark/45 uppercase font-bold">
                  AMAZINK ATELIER
                </span>
                <span className="text-[8px] tracking-[0.2em] text-gold uppercase mt-0.5 font-semibold">
                  INCISION ARTISTRY // CALICUT
                </span>
              </div>
            </div>

            {/* Massive Serif Overlapping Headline */}
            <h1 className="editorial-title text-[52px] sm:text-[76px] xl:text-[96px] text-text-dark leading-[0.9] mb-8 font-extralight tracking-tighter lg:mr-[-100px] relative z-30 drop-shadow-sm">
              ART ON SKIN.<br />
              <span className="italic font-light text-gold">DESIGNED</span> TO LAST.
            </h1>

            {/* Subtle Gold Axis Line */}
            <div className="w-24 h-[1px] bg-gold mb-10 animate-line-reveal"></div>

            {/* Premium Supporting Copy */}
            <p className="font-sans text-sm sm:text-base text-text-dark/65 leading-relaxed max-w-md mb-12 font-light tracking-wide">
              An elite bespoke atelier executing anatomical fine-line and high-contrast blackwork. We harmonize geometry, story, and skin into permanent couture.
            </p>

            {/* Luxury CTA Button */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <button
                onClick={handleScrollToBooking}
                className="group border border-gold/45 px-12 py-5.5 text-[10px] tracking-[0.35em] text-gold uppercase font-bold transition-all duration-500 hover:bg-gold hover:text-white hover:border-gold flex items-center space-x-3 cursor-pointer shadow-sm relative overflow-hidden"
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
                    strokeWidth={1.8}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
              
              <div className="text-[9px] tracking-[0.25em] text-text-dark/40 uppercase font-semibold border-b border-border-dark pb-1 hidden sm:block">
                BY APPOINTMENT ONLY
              </div>
            </div>
          </div>

          {/* Scroll Down Vertical Indicator */}
          <div className="hidden lg:flex items-center space-x-4 mt-20 animate-fade-in delay-500">
            <div className="h-20 w-[1px] bg-gold/40 relative overflow-hidden">
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

        {/* Right Column: Redesigned Merged Image Block (lg: 6 cols) */}
        <div className="lg:col-span-6 relative flex justify-center items-center h-full w-full py-4 lg:py-0">
          {/* Subtle Parallax Floating Frame Container */}
          <div className="relative w-full max-w-[520px] lg:max-w-none aspect-[3/4] lg:h-[78vh] w-[95%] lg:w-[92%] group overflow-visible animate-image-reveal">
            
            {/* Outer offset gold luxury border */}
            <div className="absolute -inset-4 border border-gold/40 transition-transform duration-700 ease-out group-hover:translate-x-1.5 group-hover:-translate-y-1.5 z-0"></div>

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
              
              {/* 1. Atelier Stamp (Top Left) */}
              <div className="absolute top-6 left-6 z-20 bg-white/90 backdrop-blur-sm border border-gold/45 px-3 py-1.5 text-[8px] tracking-[0.25em] text-text-dark uppercase font-semibold hidden md:block">
                [ DOSSIER NO. 01 // ARCHIVE ]
              </div>

              {/* 2. Studio Coordinates Stamp (Top Right) */}
              <div className="absolute top-6 right-6 z-20 text-white/90 font-mono text-[9px] tracking-[0.15em] font-light hidden md:block">
                11.2607° N, 75.7792° E
              </div>

              {/* 3. Central Blueprint Grid Axis Crosshair Overlay */}
              <div className="absolute inset-0 pointer-events-none opacity-45 z-20 flex items-center justify-center">
                {/* Horizontal blueprint line */}
                <div className="w-[85%] h-[1px] bg-gold/35 relative">
                  <span className="absolute left-2 -top-3 text-[7px] font-mono tracking-widest text-gold/75">X-AXIS</span>
                </div>
                {/* Vertical blueprint line */}
                <div className="absolute h-[85%] w-[1px] bg-gold/35"></div>
                {/* Micro center crosshair box */}
                <div className="absolute w-6 h-6 border border-gold/55"></div>
              </div>

              {/* 4. Fine Needle Placement Dimensions Spec (Center Right) */}
              <div className="absolute right-6 top-[40%] z-20 border-r border-gold/45 pr-3 text-right hidden lg:block opacity-75">
                <span className="text-[7px] tracking-[0.3em] text-gold uppercase block font-semibold">PLACEMENT ZONE</span>
                <span className="text-[8px] text-white tracking-[0.1em] font-mono block mt-0.5">ANATOMY CRITERIA OK</span>
              </div>

              {/* 5. Curation Print (Bottom Left) */}
              <div className="absolute bottom-6 left-6 z-20 flex flex-col text-left">
                <span className="text-[8px] tracking-[0.35em] text-gold uppercase font-bold">
                  AMZ ATELIER // INCISION
                </span>
                <span className="text-[7px] text-white/60 tracking-[0.2em] uppercase font-light mt-0.5">
                  PATRON CAMPAIGN // KOZHIKODE
                </span>
              </div>

              {/* 6. Brand Couture Stamp (Bottom Right) */}
              <div className="absolute bottom-6 right-6 z-20 text-white/80 font-sans text-[8px] tracking-[0.45em] uppercase font-bold pr-2 border-r border-gold">
                AMAZINK // COUTURE
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
