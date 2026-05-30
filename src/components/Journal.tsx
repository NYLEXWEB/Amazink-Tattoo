'use client';

type Article = {
  id: string;
  category: string;
  date: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  readTime: string;
};

const ARTICLES: Article[] = [
  {
    id: 'aging-science',
    category: 'DERMATOLOGY & SCIENCE',
    date: 'OCTOBER 2026',
    title: 'THE ART OF INK AGING: PIGMENT PRESERVATION SCIENCE',
    excerpt: 'An in-depth look at how matte-black and charcoal pigments react to ultraviolet rays and dermal regeneration over a decade, and the revolutionary barrier creams designed to keep lines perfectly crisp.',
    imageUrl: 'https://images.unsplash.com/photo-1562962230-16e4623d36e6?q=80&w=800&auto=format&fit=crop',
    readTime: '6 MIN READ',
  },
  {
    id: 'anatomical-design',
    category: 'FINE ART & CULTURE',
    date: 'AUGUST 2026',
    title: 'ANATOMICAL FLOW: HARMONIZING LINES WITH HUMAN SKELETONS',
    excerpt: 'Exploring the mathematical grid lines of the human skeleton. How elite designers align custom fine-line curves along the clavicle, ribs, and vertebrae to produce an organic flow rather than a rigid sticker placement.',
    imageUrl: 'https://images.unsplash.com/photo-1590246814883-57f511436533?q=80&w=800&auto=format&fit=crop',
    readTime: '8 MIN READ',
  },
];

export default function Journal() {
  return (
    <section id="journal" className="section-spacing bg-bg-secondary border-t border-b border-border-dark overflow-hidden">
      <div className="museum-container">
        {/* Header */}
        <div className="max-w-xl mb-24">
          <span className="luxury-label mb-4 block">07 // THE PUBLICATION</span>
          <h2 className="editorial-title text-[42px] sm:text-[56px] text-text-dark font-light leading-none">
            THE JOURNAL
          </h2>
          <p className="font-sans text-xs sm:text-sm text-text-dark/50 mt-6 tracking-wider font-light uppercase">
            Critical reflections on body art curation, preservation, and culture.
          </p>
        </div>

        {/* Asymmetrical Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-stretch">
          {ARTICLES.map((article, index) => (
            <div 
              key={article.id} 
              className={`lg:col-span-6 flex flex-col justify-between group cursor-pointer ${
                index % 2 === 1 ? 'lg:translate-y-12' : ''
              }`}
            >
              <div>
                {/* Asymmetrical Image block */}
                <div className="relative aspect-[16/10] overflow-hidden bg-white border border-border-dark mb-8">
                  {/* Outer offset frame on hover */}
                  <div className="absolute -inset-3.5 border border-gold/0 group-hover:border-gold/30 transition-all duration-500 z-0"></div>
                  
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={article.imageUrl}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-103 relative z-10"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/5 z-20 pointer-events-none"></div>
                </div>

                {/* Date & Category */}
                <div className="flex justify-between items-center mb-4">
                  <span className="text-[10px] tracking-[0.25em] text-gold font-semibold uppercase">
                    {article.category}
                  </span>
                  <span className="text-[9px] tracking-[0.2em] text-text-dark/40 font-medium">
                    {article.date}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-serif text-xl sm:text-2xl text-text-dark font-light tracking-wide leading-snug group-hover:text-gold transition-colors duration-500 mb-4">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="font-sans text-xs sm:text-sm text-text-dark/65 font-light tracking-wide leading-relaxed mb-6">
                  {article.excerpt}
                </p>
              </div>

              {/* Read More button */}
              <div className="flex items-center space-x-3 pt-4 border-t border-border-dark/30">
                <span className="text-[10px] tracking-[0.25em] text-text-dark font-semibold uppercase group-hover:text-gold transition-colors duration-300">
                  READ THE ARTICLE
                </span>
                <svg
                  className="w-3.5 h-3.5 transform transition-transform duration-300 group-hover:translate-x-1.5 text-text-dark group-hover:text-gold"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.8}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
                <span className="text-[9px] tracking-[0.2em] text-text-dark/30 uppercase ml-auto font-medium">
                  {article.readTime}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Offset spacing container element for balancing bottom grid items */}
        <div className="h-12 hidden lg:block"></div>
      </div>
    </section>
  );
}
