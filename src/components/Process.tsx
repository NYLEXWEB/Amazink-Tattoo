'use client';

type ProcessStep = {
  step: string;
  title: string;
  duration: string;
  description: string;
  details: string;
};

const PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    title: 'THE DIALOGUE',
    duration: '60 Mins',
    description: 'A private primary consultation in our silent lounge to outline your narrative concepts, desired placements, and stylistic inspirations.',
    details: 'Visual mood boarding, placement sketching, and initial scaling options.',
  },
  {
    step: '02',
    title: 'THE BLUEPRINT',
    duration: '7 - 14 Days',
    description: 'Our master artist translates your narrative into a bespoke, anatomically aligned digital concept and physical print for your review.',
    details: 'Digital rendering, custom stencil drafting, and layout adjustments.',
  },
  {
    step: '03',
    title: 'THE COUTURE INK',
    duration: 'Varies',
    description: 'An exclusive session in our sterilization atelier. Performed in absolute privacy, accompanied by premium skin numbing and calming systems.',
    details: 'Single-use premium hardware, clinical sanitation, and active skin management.',
  },
  {
    step: '04',
    title: 'THE PRESERVATION',
    duration: '21 Days',
    description: 'A premium dermatological aftercare routine, including a secondary check-in appointment at the studio to verify ideal pigment lock.',
    details: 'Hypoallergenic barrier shields, specialized ointments, and healing guides.',
  },
];

export default function Process() {
  return (
    <section className="section-spacing bg-bg-secondary border-t border-b border-border-dark overflow-hidden">
      <div className="museum-container">
        {/* Header */}
        <div className="max-w-xl mb-24">
          <span className="luxury-label mb-4 block">05 // THE JOURNEY</span>
          <h2 className="editorial-title text-[42px] sm:text-[56px] text-text-dark font-light leading-none">
            THE METHODOLOGY
          </h2>
          <p className="font-sans text-xs sm:text-sm text-text-dark/50 mt-6 tracking-wider font-light uppercase">
            Rigorous stages of craftsmanship ensuring permanent perfection.
          </p>
        </div>

        {/* Horizontal Timeline Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 relative">
          {PROCESS_STEPS.map((step, index) => (
            <div 
              key={step.step} 
              className="relative flex flex-col justify-between p-8 bg-white border border-border-dark/60 group hover:border-gold/40 transition-all duration-500 cursor-pointer shadow-sm min-h-[360px]"
            >
              {/* Top Section: Number & Duration */}
              <div className="flex justify-between items-start">
                <span className="font-serif text-5xl sm:text-6xl text-gold font-light tracking-wide select-none group-hover:scale-105 transition-transform duration-500 block">
                  {step.step}
                </span>
                <span className="text-[9px] tracking-[0.2em] uppercase bg-bg-secondary text-text-dark/50 px-3 py-1 font-semibold border border-border-dark">
                  {step.duration}
                </span>
              </div>

              {/* Bottom Section: Title, Description & Details */}
              <div className="mt-12">
                <h3 className="font-serif text-xl sm:text-2xl text-text-dark group-hover:text-gold transition-colors duration-300 font-light tracking-wider mb-4">
                  {step.title}
                </h3>
                
                <p className="font-sans text-xs sm:text-sm text-text-dark/70 font-light tracking-wide leading-relaxed mb-6">
                  {step.description}
                </p>

                {/* Micro divider line */}
                <div className="w-8 h-[1px] bg-gold/50 group-hover:w-full transition-all duration-700 mb-4"></div>

                <p className="font-sans text-[11px] text-text-dark/40 italic leading-snug">
                  {step.details}
                </p>
              </div>

              {/* Offset top-border overlay on hover */}
              <div className="absolute top-0 left-0 w-0 h-[2px] bg-gold group-hover:w-full transition-all duration-500 ease-out"></div>
            </div>
          ))}
        </div>

        {/* Curation Footer */}
        <div className="mt-20 flex justify-center">
          <p className="text-[9px] tracking-[0.3em] uppercase text-text-dark/40 font-semibold border border-border-dark px-8 py-3 bg-white">
            CLIENT PORTAL ACCESSIBILITY PROVIDED ON CONFIRMATION
          </p>
        </div>
      </div>
    </section>
  );
}
