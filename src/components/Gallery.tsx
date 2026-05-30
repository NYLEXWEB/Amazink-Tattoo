'use client';

import { useState } from 'react';

type Artwork = {
  id: number;
  title: string;
  category: 'Fine Line' | 'Blackwork' | 'Custom Design';
  imgUrl: string;
  artist: string;
  dimensions: string;
};

const ARTWORKS: Artwork[] = [
  {
    id: 1,
    title: 'THE BOTANIST ARCHIVE',
    category: 'Fine Line',
    imgUrl: 'https://images.unsplash.com/photo-1550537687-c91072c4792d?q=80&w=800&auto=format&fit=crop',
    artist: 'Valerie Vance',
    dimensions: '14cm x 8cm',
  },
  {
    id: 2,
    title: 'GEOMETRIC ORNAMENTATION NO. IV',
    category: 'Blackwork',
    imgUrl: 'https://images.unsplash.com/photo-1605647540924-852290f6b0d5?q=80&w=800&auto=format&fit=crop',
    artist: 'Elena Rostova',
    dimensions: '22cm x 12cm',
  },
  {
    id: 3,
    title: 'THE MODERN ABSTRACT',
    category: 'Custom Design',
    imgUrl: 'https://images.unsplash.com/photo-1590246814883-57f511436533?q=80&w=800&auto=format&fit=crop',
    artist: 'Marcus Sterling',
    dimensions: '18cm x 18cm',
  },
  {
    id: 4,
    title: 'DELICATE SPINE FLORA',
    category: 'Fine Line',
    imgUrl: 'https://images.unsplash.com/photo-1612459284970-e8f027596582?q=80&w=800&auto=format&fit=crop',
    artist: 'Valerie Vance',
    dimensions: '30cm x 6cm',
  },
  {
    id: 5,
    title: 'EULERIAN HARMONICS',
    category: 'Custom Design',
    imgUrl: 'https://images.unsplash.com/photo-1542282088-fe8426682b8f?q=80&w=800&auto=format&fit=crop',
    artist: 'Marcus Sterling',
    dimensions: '15cm x 15cm',
  },
  {
    id: 6,
    title: 'BLACKWORK CONTINUUM',
    category: 'Blackwork',
    imgUrl: 'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?q=80&w=800&auto=format&fit=crop',
    artist: 'Elena Rostova',
    dimensions: '28cm x 20cm',
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
              FEATURED EXHIBITIONS
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
              <div className="relative overflow-hidden bg-bg-secondary aspect-[4/5] z-10 border border-border-dark">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={art.imgUrl}
                  alt={art.title}
                  className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.03]"
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
