'use client';

export default function Footer() {
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 90; // Height of navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-white border-t border-border-dark pt-24 pb-12 overflow-hidden">
      <div className="museum-container">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-border-dark/60">
          {/* Brand & Positioning (md: 5 cols) */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <span className="font-serif text-3xl tracking-[0.25em] text-text-dark font-light block">
                AMAZINK
              </span>
              <span className="text-[9px] tracking-[0.45em] text-text-dark/45 uppercase mt-1 pl-0.5 block">
                TATTOO STUDIO
              </span>
              <p className="font-sans text-xs sm:text-sm text-text-dark/50 leading-relaxed font-light mt-6 max-w-sm">
                An elite, custom tattoo atelier focused on artistic storytelling, fine-needle geometry, and premium, highly sterile client environments.
              </p>
            </div>
            
            <div className="mt-8 md:mt-16">
              <span className="text-[9px] tracking-[0.25em] text-gold font-semibold uppercase block mb-3">
                SECURE ATELIER LOCATIONS
              </span>
              <p className="text-xs text-text-dark/70 font-light tracking-wide leading-relaxed">
                Suite 404, Bond Street, London, W1S <br />
                84 Rue du Faubourg Saint-Honoré, Paris, 75008
              </p>
            </div>
          </div>

          {/* Quick Navigation (md: 3 cols) */}
          <div className="md:col-span-3">
            <span className="text-[9px] tracking-[0.25em] text-gold font-semibold uppercase block mb-6">
              STUDIO MAP
            </span>
            <ul className="space-y-3">
              {[
                { name: 'Home', id: 'hero' },
                { name: 'About The Atelier', id: 'about' },
                { name: 'Resident Masters', id: 'artists' },
                { name: 'Gallery', id: 'gallery' },
                { name: 'The Publication', id: 'journal' },
                { name: 'Concierge Booking', id: 'booking' },
              ].map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => handleScrollTo(item.id)}
                    className="text-xs text-text-dark/60 hover:text-gold transition-colors duration-300 font-light tracking-wide cursor-pointer text-left"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Channels (md: 2 cols) */}
          <div className="md:col-span-2">
            <span className="text-[9px] tracking-[0.25em] text-gold font-semibold uppercase block mb-6">
              CHANNELS
            </span>
            <ul className="space-y-3">
              {[
                { name: 'Instagram', href: 'https://www.instagram.com/amazinktattoo_calicut?igsh=MWYzcGo3cG95MGNobA==' },
                { name: 'Pinterest Editorial', href: 'https://pinterest.com' },
                { name: 'Vero Journal', href: 'https://vero.co' },
                { name: 'YSL Atelier Feature', href: '#' },
              ].map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs text-text-dark/60 hover:text-gold transition-colors duration-300 font-light tracking-wide block"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Opening Hours & Inquiries (md: 2 cols) */}
          <div className="md:col-span-2">
            <span className="text-[9px] tracking-[0.25em] text-gold font-semibold uppercase block mb-6">
              ACCESSIBILITY
            </span>
            <ul className="space-y-3 text-xs text-text-dark/60 font-light tracking-wide">
              <li>
                <span className="text-text-dark/40 block text-[9px] tracking-[0.1em] font-semibold">TUES - SAT</span>
                11:00 AM — 07:00 PM
              </li>
              <li>
                <span className="text-text-dark/40 block text-[9px] tracking-[0.1em] font-semibold">SUN - MON</span>
                Strictly Closed
              </li>
              <li>
                <span className="text-text-dark/40 block text-[9px] tracking-[0.1em] font-semibold">CONTACT</span>
                atelier@amazink.online
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left gap-4">
          <p className="text-[9px] tracking-[0.25em] text-text-dark/40 uppercase font-semibold">
            © {new Date().getFullYear()} AMAZINK COUTURE. ALL RIGHTS RESERVED.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-[9px] tracking-[0.25em] text-text-dark/40 hover:text-gold uppercase font-semibold transition-colors duration-300">
              PRIVACY BRIEF
            </a>
            <span className="text-[9px] tracking-[0.25em] text-text-dark/15 select-none">|</span>
            <a href="#" className="text-[9px] tracking-[0.25em] text-text-dark/40 hover:text-gold uppercase font-semibold transition-colors duration-300">
              TERMS OF DOSSIER
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
