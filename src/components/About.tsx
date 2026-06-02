'use client';

export default function About() {
  return (
    <section id="about" className="section-spacing bg-bg-secondary border-t border-b border-border-dark overflow-hidden">
      <div className="museum-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Left Column: Asymmetric Image Presentation */}
          <div className="lg:col-span-6 relative pb-10 pr-10">
            <div className="relative w-full aspect-[4/3.8] max-w-[580px] mx-auto lg:mx-0 group">
              {/* Background Landscape Image (Left/Top) */}
              <div className="w-[72%] aspect-[4/4.5] overflow-hidden bg-white border border-border-dark shadow-xl relative z-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/about-landscape.png"
                  alt="Amazink Atelier Inspiration - Exquisite Fine Line Tattoo Work"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-102"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/5 pointer-events-none"></div>
              </div>

              {/* Foreground Tattoo Image (Right/Bottom) */}
              <div className="absolute bottom-[-10%] right-[-6%] w-[58%] aspect-[4/4.5] overflow-hidden bg-white border-8 border-white shadow-2xl z-10 transition-transform duration-750 hover:scale-[1.03]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/about-tattoo.png"
                  alt="Amazink Couture Tattoo - Masterful Blackwork back tattoo detailing"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-103"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/5 pointer-events-none"></div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Text & Philosophy */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Small Gold Tag */}
            <span className="luxury-label mb-6">01 // ABOUT US</span>

            {/* Serif Heading */}
            <h2 className="editorial-title text-[42px] sm:text-[56px] text-text-dark leading-[1.05] mb-8 font-light">
              REDEFINING <br />
              <span className="italic font-light">THE ATELIER</span> EXPERIENCE.
            </h2>

            {/* Thin Gold Divider */}
            <div className="w-16 h-[1px] bg-gold mb-10"></div>

            {/* Long Copy */}
            <div className="space-y-6 text-text-dark/70 font-light tracking-wide leading-relaxed text-sm sm:text-base">
              <p>
                Amazink Tattoo is born from the convergence of fine art, couture aesthetics, and master-level body ornamentation. Established as the premier <strong>Tattoo Studio in Kozhikode, Kerala</strong>, loud tattoo shop paradigm. In its place, we have built a sanctuary—a silent luxury space of premium design and museum-like focus.
              </p>
              <p className="border-l-2 border-gold/45 pl-6 font-serif italic text-text-dark text-lg sm:text-xl py-2">
                "We do not merely create tattoos; we design permanent visual narratives that harmonize with the contours of the human canvas."
              </p>
              <p>
                As a renowned <strong>Tattoo Shop Calicut</strong> trusted by clients seeking the <strong>Best Tattoo Artist Calicut</strong>, we ensure that each client is afforded complete privacy, undivided focus, and a bespoke artistic dialogue at our <strong>Hygienic Tattoo Studio Calicut</strong>.
              </p>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-3 gap-6 pt-12 mt-8 border-t border-border-dark">
              <div>
                <p className="font-serif text-2xl sm:text-3xl text-gold font-light">100%</p>
                <p className="text-[9px] tracking-[0.2em] uppercase text-text-dark/50 mt-1 font-semibold">Bespoke</p>
              </div>
              <div>
                <p className="font-serif text-2xl sm:text-3xl text-gold font-light">08+</p>
                <p className="text-[9px] tracking-[0.2em] uppercase text-text-dark/50 mt-1 font-semibold">Awards</p>
              </div>
              <div>
                <p className="font-serif text-2xl sm:text-3xl text-gold font-light">1500+</p>
                <p className="text-[9px] tracking-[0.2em] uppercase text-text-dark/50 mt-1 font-semibold">Portfolios</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
