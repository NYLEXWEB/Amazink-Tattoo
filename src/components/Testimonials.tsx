'use client';

type Review = {
  quote: string;
  author: string;
  role: string;
  project: string;
};

const REVIEWS: Review[] = [
  {
    quote: "AMAZINK is not a tattoo studio; it is a high-fashion atelier for the skin. The silent space, the absolute focus, and the anatomical precision of Valerie's botanical sleeve transformed a permanent concept into a breathtaking piece of art.",
    author: "Alexandra Montgomery",
    role: "Creative Director, Vogue Europe",
    project: "Botanical Spine & Sleeve Commission",
  },
  {
    quote: "From the initial digital drafting to the actual session in the private suite, the level of professionalism felt exactly like commissioning a luxury yacht or architectural piece. Marcus's lines are incredibly crisp.",
    author: "Harrison Sterling",
    role: "Founder, Sterling Partners Capital",
    project: "Sacred Math Upper Arm Commission",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-spacing bg-white overflow-hidden">
      <div className="museum-container">
        {/* Section Header */}
        <div className="max-w-xl mb-24">
          <span className="luxury-label mb-4 block">06 // THE ACCOLADES</span>
          <h2 className="editorial-title text-[42px] sm:text-[56px] text-text-dark font-light leading-none">
            COLLECTOR TESTIMONIALS
          </h2>
          <p className="font-sans text-xs sm:text-sm text-text-dark/50 mt-6 tracking-wider font-light uppercase">
            In the words of our elite patrons.
          </p>
        </div>

        {/* Large Typography Reviews Grid (No Carousel) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {REVIEWS.map((review, index) => (
            <div 
              key={index}
              className="flex flex-col justify-between h-full relative pl-8 border-l border-gold/30 pt-2 pb-2 group"
            >
              {/* Huge Serif Quote */}
              <blockquote className="font-serif text-xl sm:text-2xl lg:text-[26px] text-text-dark/85 font-light leading-snug tracking-wide mb-8 transition-colors duration-500 group-hover:text-text-dark">
                “{review.quote}”
              </blockquote>

              {/* Author & Project Details */}
              <div className="mt-6">
                <p className="font-serif text-base sm:text-lg text-gold font-light tracking-wider">
                  {review.author}
                </p>
                <p className="text-[10px] tracking-[0.2em] uppercase text-text-dark/50 mt-1 font-semibold">
                  {review.role}
                </p>
                <span className="inline-block mt-3 text-[9px] tracking-[0.25em] text-text-dark/30 uppercase font-semibold border border-border-dark px-3 py-1 bg-bg-secondary">
                  {review.project}
                </span>
              </div>

              {/* Left border active trigger on hover */}
              <div className="absolute left-[-1px] top-0 w-[1px] h-0 bg-gold group-hover:h-full transition-all duration-700"></div>
            </div>
          ))}
        </div>

        {/* Google Verified Review Curation CTA (Exact requested Google Review Card design) */}
        <div className="mt-28 bg-[#FCFAF7] border border-[#E5E2DA] p-8 sm:p-12 md:py-14 md:px-16 relative rounded max-w-5xl mx-auto shadow-sm">
          {/* Elegant L-shaped corner brackets */}
          <div className="absolute top-2.5 left-2.5 w-3 h-3 border-t border-l border-[#C8A96B]/30"></div>
          <div className="absolute top-2.5 right-2.5 w-3 h-3 border-t border-r border-[#C8A96B]/30"></div>
          <div className="absolute bottom-2.5 left-2.5 w-3 h-3 border-b border-l border-[#C8A96B]/30"></div>
          <div className="absolute bottom-2.5 right-2.5 w-3 h-3 border-b border-r border-[#C8A96B]/30"></div>

          {/* Overlapping Google Emblem */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full flex items-center justify-center border border-[#E5E2DA] shadow-md z-20">
            <svg className="w-8 h-8" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
              />
            </svg>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center relative z-10">
            {/* Left Column: Badge, Ratings, Quote */}
            <div className="md:col-span-7 lg:col-span-8 text-left space-y-6">
              <div>
                <span className="text-[10px] tracking-[0.25em] border border-[#C8A96B]/30 text-[#C8A96B] px-3.5 py-1.5 font-semibold uppercase rounded-none inline-block">
                  GOOGLE VERIFIED ATELIER
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl text-[#111111] font-light tracking-wide mt-4 mb-2">
                  Google Rating
                </h3>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-1">
                  <span className="font-sans text-3xl sm:text-[38px] text-[#111111] font-semibold leading-none">4.9</span>
                  <div className="flex text-[#C8A96B] text-xl sm:text-2xl space-x-1">
                    <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                  </div>
                  <div className="h-6 w-[1px] bg-[#111111]/15 hidden sm:block"></div>
                  <span className="font-serif text-2xl sm:text-[26px] text-[#111111]/90 font-light tracking-wide">
                    250+ Reviews
                  </span>
                </div>
              </div>

              {/* Quote Block */}
              <div className="pt-2">
                <blockquote className="font-sans text-sm sm:text-base md:text-[17px] text-[#111111]/90 leading-relaxed font-light">
                  <span className="font-serif text-2xl text-[#C8A96B]/50 mr-1.5 -ml-1.5 inline-block">“</span>
                  Exceptional tattoo experience. Highly professional artists, world-class hygiene, and outstanding attention to detail.
                  <span className="font-serif text-2xl text-[#C8A96B]/50 ml-1 inline-block">”</span>
                </blockquote>
                <p className="text-xs sm:text-sm text-[#111111]/60 italic font-light mt-3">
                  — Verified Google Customer
                </p>
              </div>
            </div>

            {/* Right Column: CTA & Star Ornament */}
            <div className="md:col-span-5 lg:col-span-4 flex flex-col items-center md:items-end justify-between h-full pt-4 md:pt-0">
              <a
                href="https://www.google.com/maps/place/Amazink+tattoo+studio+calicut/@11.2606895,75.7765858,17z/data=!4m18!1m9!3m8!1s0x3ba65ebf6972431f:0x28291246983dbf15!2sAmazink+tattoo+studio+calicut!8m2!3d11.2606895!4d75.7791607!9m1!1b1!16s%2Fg%2F11c1r2bq8t!3m7!1s0x3ba65ebf6972431f:0x28291246983dbf15!8m2!3d11.2606895!4d75.7791607!9m1!1b1!16s%2Fg%2F11c1r2bq8t?entry=ttu&g_ep=EgoyMDI2MDUyNy4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full px-8 py-4 bg-[#111111] hover:bg-[#C8A96B] text-white rounded-full text-[10px] tracking-[0.25em] uppercase font-bold flex items-center justify-center space-x-3 transition-all duration-500 hover:scale-[1.03] shadow-md border border-[#111111] hover:border-[#C8A96B]"
              >
                <span>VIEW ALL REVIEWS</span>
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.8}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                  />
                </svg>
              </a>

              {/* Faint gold compass star ornament */}
              <div className="flex justify-center md:justify-end w-full mt-8 md:mt-14 opacity-[0.22] pr-2 md:pr-4 select-none">
                <svg className="w-24 h-24 text-[#C8A96B]" viewBox="0 0 100 100" fill="none" stroke="currentColor">
                  {/* Fine dotted layout axes */}
                  <line x1="50" y1="8" x2="50" y2="92" strokeWidth="0.5" strokeDasharray="1.5 1.5" />
                  <line x1="8" y1="50" x2="92" y2="50" strokeWidth="0.5" strokeDasharray="1.5 1.5" />
                  
                  {/* Circular orbits */}
                  <circle cx="50" cy="50" r="28" strokeWidth="0.5" strokeDasharray="2 2" />
                  <circle cx="50" cy="50" r="16" strokeWidth="0.5" />
                  
                  {/* North Point */}
                  <polygon points="50,50 46,46 50,12" fill="none" strokeWidth="0.5" />
                  <polygon points="50,50 54,46 50,12" fill="currentColor" opacity="0.25" strokeWidth="0.5" />
                  
                  {/* South Point */}
                  <polygon points="50,50 46,54 50,88" fill="currentColor" opacity="0.25" strokeWidth="0.5" />
                  <polygon points="50,50 54,54 50,88" fill="none" strokeWidth="0.5" />
                  
                  {/* East Point */}
                  <polygon points="50,50 54,46 88,50" fill="currentColor" opacity="0.25" strokeWidth="0.5" />
                  <polygon points="50,50 54,54 88,50" fill="none" strokeWidth="0.5" />
                  
                  {/* West Point */}
                  <polygon points="50,50 46,46 12,50" fill="none" strokeWidth="0.5" />
                  <polygon points="50,50 46,54 12,50" fill="currentColor" opacity="0.25" strokeWidth="0.5" />
                  
                  {/* Diagonal NE Point */}
                  <polygon points="50,50 50,45 74,26" fill="none" strokeWidth="0.5" />
                  <polygon points="50,50 55,50 74,26" fill="currentColor" opacity="0.15" strokeWidth="0.5" />
                  
                  {/* Diagonal SW Point */}
                  <polygon points="50,50 50,55 26,74" fill="none" strokeWidth="0.5" />
                  <polygon points="50,50 45,50 26,74" fill="currentColor" opacity="0.15" strokeWidth="0.5" />
                  
                  {/* Diagonal NW Point */}
                  <polygon points="50,50 45,50 26,26" fill="none" strokeWidth="0.5" />
                  <polygon points="50,50 50,45 26,26" fill="currentColor" opacity="0.15" strokeWidth="0.5" />
                  
                  {/* Diagonal SE Point */}
                  <polygon points="50,50 55,50 74,74" fill="none" strokeWidth="0.5" />
                  <polygon points="50,50 50,55 74,74" fill="currentColor" opacity="0.15" strokeWidth="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
