'use client';

type ArtistProfile = {
  id: string;
  name: string;
  role: string;
  specialty: string;
  experience: string;
  philosophy: string;
  quote: string;
  signature: string;
};

const ARTISTS: ArtistProfile[] = [
  {
    id: 'midhun',
    name: 'MIDHUN KV',
    role: 'Founder & Principal Master Artist',
    specialty: 'Surrealism, Sacred Geometry, Realism & Bold Blackwork',
    experience: '14 Years of Couture Needlework',
    philosophy: 'Body art should behave as a custom-fit canvas for individual stories. I analyze the unique flow of muscle and bone structures to design permanent visual masterpieces that harmonize with the body, delivering originality and uncompromising precision at our hygienic Calicut studio.',
    quote: "Every line drawn is an indelible legacy; custom ink is a conversation that lasts a lifetime.",
    signature: 'Midhun KV',
  }
];

export default function Artists() {
  const artist = ARTISTS[0];

  return (
    <section id="artists" className="section-spacing bg-white overflow-hidden">
      <div className="museum-container">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="luxury-label mb-4 block">03 // THE RESIDENT MASTER</span>
          <h2 className="editorial-title text-[42px] sm:text-[56px] text-text-dark font-light leading-none">
            THE MASTER PORTFOLIO
          </h2>
        </div>

        {/* Single Artist Monograph Spread (Centered and Full-Width) */}
        <div className="max-w-4xl mx-auto border border-border-dark bg-bg-secondary p-8 sm:p-12 md:p-16 relative overflow-hidden shadow-xl animate-fade-in">
          {/* Subtle Watermark Monogram Background */}
          <div className="absolute right-[-30px] bottom-[-30px] opacity-[0.03] select-none pointer-events-none font-serif text-[180px] leading-none text-text-dark font-light">
            MKV
          </div>

          <div className="relative z-10 flex flex-col justify-between h-full">
            <div>
              {/* Role & Name */}
              <div className="text-center mb-8">
                <span className="text-[10px] tracking-[0.3em] uppercase text-gold font-bold block mb-3">
                  {artist.role}
                </span>
                <h3 className="font-serif text-4xl sm:text-5xl md:text-6xl text-text-dark font-light tracking-wide mb-6">
                  {artist.name}
                </h3>
                <div className="w-16 h-[1px] bg-gold mx-auto mb-8"></div>
              </div>

              {/* Specialty & Experience Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto border-t border-b border-border-dark/65 py-6 mb-10 text-center sm:text-left">
                <p className="text-xs text-text-dark/50 uppercase tracking-widest font-semibold sm:border-r sm:border-border-dark/30 sm:pr-4">
                  SPECIALTY: <br /><span className="text-text-dark font-medium block mt-1">{artist.specialty}</span>
                </p>
                <p className="text-xs text-text-dark/50 uppercase tracking-widest font-semibold sm:pl-6">
                  TENURE & EXPERIENCE: <br /><span className="text-text-dark font-medium block mt-1">{artist.experience}</span>
                </p>
              </div>

              {/* Philosophy & Quote */}
              <div className="max-w-2xl mx-auto space-y-8 text-center text-text-dark/75 font-light tracking-wide leading-relaxed text-base">
                <p>{artist.philosophy}</p>
                
                {/* Pull-out Quote */}
                <p className="font-serif italic text-gold text-xl sm:text-2xl border-t border-b border-border-dark/30 py-8 my-8 max-w-lg mx-auto leading-relaxed">
                  "{artist.quote}"
                </p>
              </div>
            </div>

            {/* Signature Footer */}
            <div className="pt-8 border-t border-border-dark/30 max-w-2xl mx-auto w-full mt-10 flex flex-col items-center justify-center">
              <span className="text-[9px] tracking-[0.25em] text-text-dark/40 uppercase block mb-2 font-semibold text-center">
                OFFICIAL ATELIER SIGNATURE
              </span>
              <span className="font-serif text-4.5xl italic text-gold font-light select-none tracking-widest mt-1 text-center">
                {artist.signature}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
