'use client';

import { useState } from 'react';

type Service = {
  id: string;
  number: string;
  name: string;
  description: string;
  details: string[];
  startingPrice: string;
  timeAllocation: string;
};

const SERVICES: Service[] = [
  {
    id: 'fine-line',
    number: '01',
    name: 'FINE LINE & GEOMETRICS',
    description: 'Ultra-delicate single-needle execution, focused on fluid botanical formations, crisp celestial patterns, and intricate structural geometry. Ideal for placements requiring ultimate subtlety and absolute precision.',
    details: [
      'Single needle specialized techniques',
      'High-contrast premium charcoal pigments',
      'Ideal for wrists, ribs, spines, and fingers',
      'Virtually zero blowout risk craftsmanship'
    ],
    startingPrice: '$350/hr',
    timeAllocation: '2 - 6 hrs per session',
  },
  {
    id: 'blackwork',
    number: '02',
    name: 'EDITORIAL BLACKWORK',
    description: 'High-contrast, saturated black pigment application designed to mimic high-fashion graphic patterns, dark surrealism, and architectural lines. Bold statement compositions that flow naturally with muscular topography.',
    details: [
      'Deep matte black imported vegan ink',
      'Custom organic flow fitting',
      'Dramatic graphic and block silhouettes',
      'Exceptional lifetime aging resilience'
    ],
    startingPrice: '$400/hr',
    timeAllocation: '4 - 8 hrs per session',
  },
  {
    id: 'custom-design',
    number: '03',
    name: 'BESPOKE ART COMMISSIONS',
    description: 'A completely custom multi-disciplinary design service where we construct a unique visual language based on your personal narrative, fashion preferences, and conceptual desires. Includes full digital/sketch consultations.',
    details: [
      'Direct primary artist collaboration',
      'Included unlimited digital iterations',
      'Exclusive placement topography maps',
      'Archived digital ownership file'
    ],
    startingPrice: 'By Quote Only',
    timeAllocation: 'Full Day / Multi-Session',
  },
];

export default function Services() {
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  return (
    <section id="services" className="section-spacing bg-bg-secondary border-t border-b border-border-dark overflow-hidden">
      <div className="museum-container">
        {/* Section Header */}
        <div className="max-w-xl mb-24">
          <span className="luxury-label mb-4 block">03 // THE OFFERINGS</span>
          <h2 className="editorial-title text-[42px] sm:text-[56px] text-text-dark font-light leading-none">
            ATELIER SERVICES
          </h2>
          <p className="font-sans text-xs sm:text-sm text-text-dark/50 mt-6 tracking-wider font-light uppercase">
            Curated techniques designed for the discerning collector.
          </p>
        </div>

        {/* Accordion / Row-Based Premium Layout (No Cards) */}
        <div className="border-t border-border-dark/60">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="border-b border-border-dark/60 py-10 lg:py-16 transition-all duration-700 relative group"
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
            >
              {/* Row content */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start relative z-10">
                {/* Number & Name */}
                <div className="lg:col-span-4 flex items-center space-x-6">
                  <span className="font-serif text-2xl lg:text-3xl text-gold font-light tracking-wide w-12">
                    {service.number}
                  </span>
                  <h3 className="font-serif text-2xl lg:text-3xl xl:text-4xl text-text-dark group-hover:text-gold transition-colors duration-500 font-light tracking-wide">
                    {service.name}
                  </h3>
                </div>

                {/* Description */}
                <div className="lg:col-span-5">
                  <p className="font-sans text-sm sm:text-base text-text-dark/70 font-light tracking-wide leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Detailed features (expand on hover or show beautifully in grid) */}
                  <div className={`mt-8 space-y-3 transition-all duration-700 ease-in-out ${
                    hoveredService === service.id 
                      ? 'max-h-[250px] opacity-100' 
                      : 'max-h-0 opacity-0 lg:max-h-[250px] lg:opacity-100 overflow-hidden'
                  }`}>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {service.details.map((detail, index) => (
                        <li key={index} className="flex items-center space-x-2 text-xs text-text-dark/60 font-light">
                          <span className="w-1.5 h-1.5 border border-gold rounded-full bg-transparent flex-shrink-0"></span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Investment & Duration Details */}
                <div className="lg:col-span-3 lg:text-right flex lg:flex-col justify-between items-center lg:items-end lg:space-y-4 pt-4 lg:pt-0 border-t border-border-dark/30 lg:border-t-0">
                  <div>
                    <span className="text-[9px] tracking-[0.25em] text-text-dark/40 uppercase block font-semibold">
                      INVESTMENT
                    </span>
                    <span className="font-serif text-xl sm:text-2xl text-gold font-medium mt-1 block">
                      {service.startingPrice}
                    </span>
                  </div>
                  <div>
                    <span className="text-[9px] tracking-[0.25em] text-text-dark/40 uppercase block font-semibold">
                      ALLOCATION
                    </span>
                    <span className="font-sans text-xs text-text-dark/70 font-medium mt-1 block">
                      {service.timeAllocation}
                    </span>
                  </div>
                </div>
              </div>

              {/* Dynamic luxury line height extension on hover */}
              <div className="absolute left-0 bottom-0 w-0 h-[2px] bg-gold group-hover:w-full transition-all duration-700 ease-out z-20"></div>
            </div>
          ))}
        </div>

        {/* Pricing notice */}
        <p className="text-[10px] tracking-[0.25em] text-text-dark/35 uppercase text-center mt-12 font-medium">
          * Premium materials, strict single-use disposables, and full sterilization protocols are included in all commissions.
        </p>
      </div>
    </section>
  );
}
