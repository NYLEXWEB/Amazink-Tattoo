'use client';

import { useState } from 'react';

type Artwork = {
  id: number;
  title: string;
  category: 'Fine Line' | 'Blackwork' | 'Custom Design';
  imgUrl: string;
  artist: string;
  dimensions: string;
  altText: string;
};

const ARTWORKS: Artwork[] = [
  {
    id: 1,
    title: 'COSMIC VISIONARY',
    category: 'Blackwork',
    imgUrl: '/astronaut-eye-surrealism-tattoo-kozhikode.jpg',
    artist: 'Midhun',
    dimensions: '18cm x 10cm',
    altText: 'Surrealist astronaut blackwork forearm tattoo with a large all-seeing eye replacing the helmet visor, surrounded by celestial and geometric alignments, custom designed at Amazing Tattoo in Kozhikode.',
  },
  {
    id: 2,
    title: 'THE ALL-SEEING MANDALA',
    category: 'Blackwork',
    imgUrl: '/mandala-all-seeing-eye-forearm-tattoos-calicut.jpg',
    artist: 'Midhun & Akhil Saju',
    dimensions: '16cm x 12cm',
    altText: 'Intricate matching sacred geometry mandalas with the Eye of Providence forearm tattoos, custom styled by Midhun and Akhil Saju at Amazing Tattoo in Calicut.',
  },
  {
    id: 3,
    title: 'EGYPTIAN ROYALTY',
    category: 'Custom Design',
    imgUrl: '/egyptian-goddess-eye-providence-tattoo-kerala.jpg',
    artist: 'Midhun',
    dimensions: '20cm x 10cm',
    altText: 'Detailed black and grey forearm tattoo of an Egyptian queen wearing a tribal cat headdress above the Eye of Providence, created by artist Midhun at Amazing Tattoo in Kerala.',
  },
  {
    id: 4,
    title: 'POLYNESIAN SOUL',
    category: 'Blackwork',
    imgUrl: '/polynesian-tribal-calf-tattoo-kozhikode.jpg',
    artist: 'Midhun',
    dimensions: '22cm x 14cm',
    altText: 'Bold Polynesian tribal mask leg tattoo on the calf with sharp blackwork curls and striking red accent eyes, inked by Midhun at Amazing Tattoo in Kozhikode.',
  },
  {
    id: 5,
    title: 'MAHADEV DEVOTION',
    category: 'Custom Design',
    imgUrl: '/lord-shiva-shiva-lingam-tattoo-calicut.jpg',
    artist: 'Midhun',
    dimensions: '24cm x 10cm',
    altText: 'Divine Lord Shiva portrait with a Shiva Lingam forearm tattoo in spiritual black and grey, custom designed and inked by Midhun at Amazing Tattoo, Calicut, Kerala.',
  },
  {
    id: 6,
    title: 'THE NORSE WARRIOR',
    category: 'Custom Design',
    imgUrl: '/viking-warrior-sword-realism-tattoo-kozhikode.jpg',
    artist: 'Midhun',
    dimensions: '20cm x 12cm',
    altText: 'A highly detailed black and grey realism forearm tattoo of a bearded Viking warrior with a facial scar, holding a sword hilt under his chin, custom designed at Amazing Tattoo in Kozhikode.',
  },
  {
    id: 7,
    title: 'HORNED SERPENT GODDESS',
    category: 'Blackwork',
    imgUrl: '/horned-serpent-goddess-skeleton-tattoo-kerala.jpg',
    artist: 'Midhun',
    dimensions: '22cm x 11cm',
    altText: 'A surreal blackwork forearm tattoo of a mystical horned goddess with a coiled snake and an exposed skeletal ribcage, custom designed by Midhun at Amazing Tattoo in Kerala.',
  },
  {
    id: 8,
    title: 'THE PREDATOR',
    category: 'Custom Design',
    imgUrl: '/predator-sci-fi-character-tattoo-calicut.jpg',
    artist: 'Midhun',
    dimensions: '12cm x 12cm',
    altText: 'A circular black and grey realism tattoo of the iconic sci-fi Predator character in its biomechanical helmet with glowing red eyes, inked at Amazing Tattoo in Calicut.',
  },
  {
    id: 9,
    title: 'CLEOPATRA & PHARAOH SKULL',
    category: 'Custom Design',
    imgUrl: '/egyptian-queen-cleopatra-skull-tattoo-kozhikode.jpg',
    artist: 'Midhun',
    dimensions: '26cm x 12cm',
    altText: 'A detailed black and grey realism forearm sleeve tattoo combining a portrait of Egyptian Queen Cleopatra and an ancient pharaoh skull, done by Midhun at Amazing Tattoo in Kozhikode.',
  },
];


export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<'All' | 'Fine Line' | 'Blackwork' | 'Custom Design'>('All');

  const filteredArtworks = activeCategory === 'All' 
    ? ARTWORKS 
    : ARTWORKS.filter(art => art.category === activeCategory);

  return (
    <section id="gallery" className="section-spacing bg-white overflow-hidden">
      <div className="museum-container">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <span className="luxury-label mb-4 block">02 // THE ARCHIVE</span>
            <h2 className="editorial-title text-[42px] sm:text-[56px] text-text-dark font-light leading-none">
              GALLERY
            </h2>
          </div>

          {/* Luxury Categories Filter Tab */}
          <div className="flex flex-wrap gap-x-8 gap-y-3 mt-8 md:mt-0 border-b border-border-dark/60 pb-2">
            {(['All', 'Fine Line', 'Blackwork', 'Custom Design'] as const).map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`text-xs uppercase tracking-[0.25em] font-medium transition-all duration-300 pb-1 relative cursor-pointer ${
                  activeCategory === category 
                    ? 'text-gold' 
                    : 'text-text-dark/40 hover:text-text-dark'
                }`}
              >
                {category}
                {activeCategory === category && (
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gold animate-line-reveal"></span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry-Style Grid without standard cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
          {filteredArtworks.map((art) => (
            <div 
              key={art.id} 
              className="group relative cursor-pointer transition-all duration-700"
            >
              {/* Gold frame that appears on hover */}
              <div className="absolute -inset-2.5 border border-gold/0 group-hover:border-gold/35 transition-all duration-500 z-0"></div>

              {/* Image Block */}
              <div className="relative overflow-hidden bg-bg-secondary aspect-[4/5] z-10 border border-border-dark p-3 bg-white flex items-center justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={art.imgUrl}
                  alt={art.altText}
                  className="w-full h-full object-contain transition-transform duration-1000 ease-out group-hover:scale-[1.03]"
                  loading="lazy"
                />
                
                {/* Minimal Luxury Overlay on Hover */}
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>

              {/* Minimal Text Details */}
              <div className="relative mt-5 pl-2 z-10 flex justify-between items-start">
                <div>
                  <h3 className="font-serif text-base tracking-[0.05em] text-text-dark font-medium group-hover:text-gold transition-colors duration-300">
                    {art.title}
                  </h3>
                  <p className="text-[10px] tracking-[0.2em] uppercase text-text-dark/40 mt-1 font-semibold">
                    {art.artist} — {art.category}
                  </p>
                </div>
                <span className="font-serif text-[11px] text-gold/60 italic tracking-wider">
                  {art.dimensions}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Curation Footer */}
        <div className="mt-20 flex justify-center">
          <div className="w-full max-w-lg h-[1px] bg-border-dark relative">
            <span className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-8 text-[9px] tracking-[0.35em] text-text-dark/40 uppercase font-semibold">
              CURATED COLLECTION
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
