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

        {/* Google Verified Review Curation CTA */}
        <div className="mt-24 border border-gold/30 p-8 sm:p-12 bg-bg-secondary relative group overflow-hidden max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm">
          {/* Elegant corners */}
          <div className="absolute top-3 left-3 w-3 h-3 border-t border-l border-gold/40"></div>
          <div className="absolute top-3 right-3 w-3 h-3 border-t border-r border-gold/40"></div>
          <div className="absolute bottom-3 left-3 w-3 h-3 border-b border-l border-gold/40"></div>
          <div className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-gold/40"></div>

          <div className="space-y-3 text-center md:text-left relative z-10">
            <div className="flex items-center justify-center md:justify-start space-x-3">
              <span className="text-[9px] tracking-[0.25em] bg-white border border-gold/30 text-gold px-3 py-1 font-semibold uppercase">
                GOOGLE VERIFIED ATELIER
              </span>
              <div className="flex text-gold space-x-0.5 text-sm">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              </div>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl text-text-dark font-light tracking-wide">
              AMAZINK TATTOO STUDIO CALICUT
            </h3>
            <p className="font-sans text-[10px] sm:text-xs text-text-dark/50 tracking-wider font-light uppercase">
              Rated 4.9 stars by over 250+ clients for ultimate precision & sterile luxury.
            </p>
          </div>

          <a
            href="https://www.google.com/maps/place/Amazink+tattoo+studio+calicut/@11.2606895,75.7765858,17z/data=!4m18!1m9!3m8!1s0x3ba65ebf6972431f:0x28291246983dbf15!2sAmazink+tattoo+studio+calicut!8m2!3d11.2606895!4d75.7791607!9m1!1b1!16s%2Fg%2F11c1r2bq8t!3m7!1s0x3ba65ebf6972431f:0x28291246983dbf15!8m2!3d11.2606895!4d75.7791607!9m1!1b1!16s%2Fg%2F11c1r2bq8t?entry=ttu&g_ep=EgoyMDI2MDUyNy4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center justify-center px-10 py-5 bg-text-dark text-white hover:bg-gold hover:text-white border border-text-dark hover:border-gold text-[10px] tracking-[0.3em] uppercase font-semibold transition-all duration-500 group shadow-md z-10 cursor-pointer"
          >
            <span>EXPLORE VERIFIED REVIEWS</span>
            <svg
              className="w-4 h-4 ml-3 transform transition-transform duration-300 group-hover:translate-x-1.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.8}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
