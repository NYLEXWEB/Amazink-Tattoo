import React from 'react';

export default function Artists() {
  return (
    <section className="py-[120px] bg-ash" id="artists">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        <div className="mb-16 fade-up">
          <p className="font-dm-mono text-[0.65rem] tracking-[0.3em] uppercase text-rust mb-5">The Team</p>
          <div className="w-12 h-[1px] bg-rust mb-6"></div>
          <h2 className="font-playfair text-[clamp(2.5rem,4vw,3.8rem)] font-bold leading-[1.05] text-bone mb-0">
            Meet the <em className="italic text-rust font-normal">Artists</em>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[2px]">
          {/* Artist 1 */}
          <div className="relative overflow-hidden h-[480px] group">
            <img
              src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&q=80"
              alt="Artist Mara Solis"
              className="w-full h-full object-cover grayscale-[40%] transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 px-8 pt-10 pb-8 bg-gradient-to-t from-[#fdfbf7f2] to-transparent translate-y-5 transition-transform duration-400 group-hover:translate-y-0">
              <p className="font-dm-mono text-[0.6rem] tracking-[0.3em] uppercase text-rust mb-2">Fine Line / Blackwork</p>
              <h3 className="font-playfair text-[1.8rem] font-bold text-bone mb-2">Mara Solis</h3>
              <p className="text-[0.9rem] font-normal text-fog opacity-0 translate-y-2 transition-all duration-400 delay-100 group-hover:opacity-100 group-hover:translate-y-0">
                13 years refining the tension between delicacy and permanence. Known for her botanical linework and invisible healing technique.
              </p>
            </div>
          </div>
          {/* Artist 2 */}
          <div className="relative overflow-hidden h-[480px] group">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80"
              alt="Artist Kenji Muro"
              className="w-full h-full object-cover grayscale-[40%] transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 px-8 pt-10 pb-8 bg-gradient-to-t from-[#fdfbf7f2] to-transparent translate-y-5 transition-transform duration-400 group-hover:translate-y-0">
              <p className="font-dm-mono text-[0.6rem] tracking-[0.3em] uppercase text-rust mb-2">Japanese / Neo-Traditional</p>
              <h3 className="font-playfair text-[1.8rem] font-bold text-bone mb-2">Kenji Muro</h3>
              <p className="text-[0.9rem] font-normal text-fog opacity-0 translate-y-2 transition-all duration-400 delay-100 group-hover:opacity-100 group-hover:translate-y-0">
                Trained in Osaka, now based in LA. His tebori technique produces depth and saturation that machines simply cannot replicate.
              </p>
            </div>
          </div>
          {/* Artist 3 */}
          <div className="relative overflow-hidden h-[480px] group">
            <img
              src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&q=80"
              alt="Artist Zoe Harrington"
              className="w-full h-full object-cover grayscale-[40%] transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 px-8 pt-10 pb-8 bg-gradient-to-t from-[#fdfbf7f2] to-transparent translate-y-5 transition-transform duration-400 group-hover:translate-y-0">
              <p className="font-dm-mono text-[0.6rem] tracking-[0.3em] uppercase text-rust mb-2">Geometric / Sacred Geometry</p>
              <h3 className="font-playfair text-[1.8rem] font-bold text-bone mb-2">Zoe Harrington</h3>
              <p className="text-[0.9rem] font-normal text-fog opacity-0 translate-y-2 transition-all duration-400 delay-100 group-hover:opacity-100 group-hover:translate-y-0">
                A former architect who found her true medium in skin. Every pattern is mathematically precise, every curve intentional.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
