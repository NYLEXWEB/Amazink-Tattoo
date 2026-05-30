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
      </div>
    </section>
  );
}
