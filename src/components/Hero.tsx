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
      className="relative min-h-[calc(100vh-90px)] mt-[90px] flex items-center bg-white overflow-hidden pb-12 lg:pb-0"
    >
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center h-full">
        {/* Left Column (Content) */}
        <div className="lg:col-span-5 flex flex-col justify-between h-full pt-8 lg:pt-16 pb-8 lg:pb-16 z-10">
          <div className="animate-fade-up">
            {/* Elegant Luxury Monogram and Label */}
            <div className="flex items-center space-x-4 mb-10">
              <div className="relative flex items-center justify-center w-10 h-16 border-l border-gold/40">
                <span className="font-serif text-lg tracking-[0.2em] text-gold font-light pl-3">
                  N
                </span>
                <span className="absolute -top-1 left-3 text-[7px] tracking-[0.3em] text-gold/60 uppercase">
                  AMZ
                </span>
              </div>
              <span className="text-[10px] tracking-[0.35em] text-text-dark/40 uppercase font-semibold">
                Bespoke Atelier
              </span>
            </div>

            {/* Massive Serif Headline */}
            <h1 className="editorial-title text-[56px] sm:text-[72px] xl:text-[92px] text-text-dark leading-[0.95] mb-8 font-extralight tracking-tight">
              ART ON SKIN. <br />
              <span className="italic font-light">DESIGNED</span> TO LAST.
            </h1>

            {/* Subtle Accent Gold Line */}
            <div className="w-20 h-[1px] bg-gold mb-8 animate-line-reveal"></div>

            {/* Supporting Copy */}
            <p className="font-sans text-sm sm:text-base text-text-dark/60 leading-relaxed max-w-md mb-12 font-light tracking-wide">
              Custom luxury tattoos crafted with absolute precision, artistic depth, and absolute individuality. A testament of time, story, and elite craftsmanship.
            </p>

            {/* Luxury CTA Button */}
            <div>
              <button
                onClick={handleScrollToBooking}
                className="group border border-gold/40 px-10 py-5 text-[11px] tracking-[0.3em] text-gold uppercase font-semibold transition-all duration-500 hover:bg-gold hover:text-white hover:border-gold flex items-center space-x-3 cursor-pointer"
              >
                <span>BOOK CONSULTATION</span>
                <svg
                  className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Scroll Down Indicator */}
          <div className="hidden lg:flex items-center space-x-4 mt-20 animate-fade-in delay-500">
            <div className="h-16 w-[1px] bg-gold/50 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1/2 bg-gold animate-[bounce_2s_infinite]"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-[9px] tracking-[0.3em] uppercase text-text-dark/40 font-semibold leading-none">
                Scroll
              </span>
              <span className="text-[9px] tracking-[0.3em] uppercase text-text-dark/40 font-semibold leading-none mt-1">
                Down
              </span>
            </div>
          </div>
        </div>

        {/* Right Column (Image Component) */}
        <div className="lg:col-span-7 relative flex justify-center items-center h-full w-full">
          {/* Subtle Parallax Floating Frame Container */}
          <div className="relative w-full max-w-[580px] lg:max-w-none aspect-[3/4] lg:h-[75vh] w-[95%] lg:w-[90%] group overflow-visible animate-image-reveal">
            {/* Outer offset gold luxury border */}
            <div className="absolute -inset-4 border border-gold/40 transition-transform duration-700 ease-out group-hover:translate-x-1 group-hover:-translate-y-1 z-0"></div>

            {/* Image Wrapper */}
            <div className="relative w-full h-full overflow-hidden bg-bg-secondary z-10 border border-border-dark shadow-xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/hero-portrait.png"
                alt="AMAZINK Luxury Tattoo Editorial Portrait"
                className="w-full h-full object-cover grayscale contrast-115 transition-transform duration-1000 ease-out group-hover:scale-105"
              />
              
              {/* Subtle Elegant Overlay Shadow for Fashion feel */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-60 pointer-events-none"></div>
            </div>

            {/* Decorative Luxury Frame Details */}
            <div className="absolute bottom-6 right-6 z-20 text-white/70 font-sans text-[9px] tracking-[0.4em] uppercase font-semibold hidden md:block">
              AMAZINK // COUTURE
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
