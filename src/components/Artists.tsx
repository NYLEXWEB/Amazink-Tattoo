'use client';

import { useState } from 'react';

type ArtistProfile = {
  id: string;
  name: string;
  role: string;
  specialty: string;
  experience: string;
  awards: string[];
  philosophy: string;
  quote: string;
  imageUrl: string;
  signature: string;
};

const ARTISTS: ArtistProfile[] = [
  {
    id: 'valerie',
    name: 'VALERIE VANCE',
    role: 'Founder & Principal Master Artist',
    specialty: 'Single-Needle Botanicals & Delicate Geometrics',
    experience: '10 Years of Couture Needlework',
    awards: [
      'Gold Ink Grand Prix — Florence 2024',
      'Atelier Avant-Garde Award — Milan 2023',
    ],
    philosophy: 'Body art should act as permanent haute couture. I strive to design pieces that behave as custom garments, tracing the natural contour lines of the skeletal and muscular structures to enhance human elegance.',
    quote: "The skin is a temple, and my ink is a silent devotion.",
    imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop',
    signature: 'Valerie Vance',
  },
  {
    id: 'marcus',
    name: 'MARCUS STERLING',
    role: 'Senior Resident Artist',
    specialty: 'Bespoke Architectural Forms & Sacred Math',
    experience: '14 Years in Fine Arts & Ink',
    awards: [
      'Master Designer of the Year — Paris 2025',
      'Structural Art Award — Zurich 2022',
    ],
    philosophy: 'My background in classical architecture dictates my needle. I analyze the body as an architectural monument, plotting perfect angles, structural weight, and mathematical symmetry to tell deep spatial stories.',
    quote: "Lines are paths of energy; they must guide, never bind.",
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop',
    signature: 'M. Sterling',
  },
  {
    id: 'elena',
    name: 'ELENA ROSTOVA',
    role: 'Resident Artist',
    specialty: 'Editorial Matte Blackwork & High-Contrast Surrealism',
    experience: '9 Years in Editorial Engraving',
    awards: [
      'Vanguard Surrealism Award — Berlin 2024',
      'Best in Blackwork — Tokyo Convention 2023',
    ],
    philosophy: 'I view tattooing as a high-fashion editorial print. I utilize deep, light-absorbing matte blacks and high-contrast skin spacing to produce pieces that feel like ink carvings on a museum statue.',
    quote: "Contrast is the language of truth. In deep black, we find ultimate light.",
    imageUrl: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=800&auto=format&fit=crop',
    signature: 'Elena Rostova',
  },
];

export default function Artists() {
  const [selectedArtist, setSelectedArtist] = useState<string>('valerie');

  const artist = ARTISTS.find(a => a.id === selectedArtist) || ARTISTS[0];

  return (
    <section id="artists" className="section-spacing bg-white overflow-hidden">
      <div className="museum-container">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 border-b border-border-dark/60 pb-8">
          <div>
            <span className="luxury-label mb-4 block">04 // THE ARCHITECTS</span>
            <h2 className="editorial-title text-[42px] sm:text-[56px] text-text-dark font-light leading-none">
              RESIDENT MASTERS
            </h2>
          </div>

          {/* Artist Selector Tabs */}
          <div className="flex space-x-6 mt-8 md:mt-0">
            {ARTISTS.map((item) => (
              <button
                key={item.id}
                onClick={() => setSelectedArtist(item.id)}
                className={`text-xs uppercase tracking-[0.25em] font-medium transition-all duration-300 pb-1 cursor-pointer ${
                  selectedArtist === item.id 
                    ? 'text-gold border-b border-gold font-semibold' 
                    : 'text-text-dark/40 hover:text-text-dark'
                }`}
              >
                {item.name.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Magazine Spread Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-stretch">
          {/* Column 1: Massive Editorial Portrait (lg: 6 cols) */}
          <div className="lg:col-span-6 relative">
            <div className="relative w-full aspect-[3/4] h-full min-h-[500px] overflow-hidden bg-bg-secondary border border-border-dark group">
              <div className="absolute -inset-4 border border-gold/30 translate-x-2 -translate-y-2 z-0 transition-transform duration-700 ease-out group-hover:translate-x-0 group-hover:translate-y-0"></div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={artist.imageUrl}
                alt={`${artist.name} - Professional Tattoo Artist Calicut & Kozhikode`}
                className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-104 z-10 relative"
              />
              <div className="absolute bottom-6 left-6 z-20 text-white/80 text-[8px] tracking-[0.4em] uppercase font-semibold pl-2 border-l border-gold">
                {artist.role}
              </div>
            </div>
          </div>

          {/* Column 2: Bio, Philosophy & Editorial Interview (lg: 6 cols) */}
          <div className="lg:col-span-6 flex flex-col justify-between py-4">
            <div>
              {/* Artist Name & Title */}
              <span className="text-[10px] tracking-[0.3em] uppercase text-gold font-semibold block mb-2">
                {artist.role}
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-text-dark font-light tracking-wide mb-6">
                {artist.name}
              </h3>
              
              {/* Specialty & Experience Details */}
              <div className="space-y-2 border-l border-border-dark/60 pl-4 py-1 mb-8">
                <p className="text-xs text-text-dark/50 uppercase tracking-widest font-semibold">
                  SPECIALTY: <span className="text-text-dark font-medium">{artist.specialty}</span>
                </p>
                <p className="text-xs text-text-dark/50 uppercase tracking-widest font-semibold">
                  TENURE: <span className="text-text-dark font-medium">{artist.experience}</span>
                </p>
              </div>

              {/* Story/Philosophy Paragraph */}
              <div className="space-y-6 text-text-dark/70 font-light tracking-wide leading-relaxed text-sm sm:text-base mb-10">
                <p>{artist.philosophy}</p>
                
                {/* Pull-out Quote */}
                <p className="font-serif italic text-gold text-lg sm:text-xl border-t border-b border-border-dark/30 py-6 my-8">
                  "{artist.quote}"
                </p>
              </div>
            </div>

            {/* Awards & Signature footer */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8 border-t border-border-dark/40">
              {/* Awards List */}
              <div>
                <span className="text-[9px] tracking-[0.25em] text-text-dark/40 uppercase block mb-3 font-semibold">
                  SELECT ACCOLADES
                </span>
                <ul className="space-y-1.5">
                  {artist.awards.map((award, i) => (
                    <li key={i} className="text-xs text-text-dark/80 font-light leading-snug">
                      • {award}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Master Signature block */}
              <div className="flex flex-col items-start sm:items-end justify-center">
                <span className="text-[9px] tracking-[0.25em] text-text-dark/40 uppercase block mb-2 font-semibold">
                  OFFICIAL SIGNATURE
                </span>
                <span className="font-serif text-3xl italic text-gold font-light select-none tracking-widest mt-1">
                  {artist.signature}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
