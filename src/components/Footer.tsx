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
    <footer className="bg-bg-secondary border-t border-border-dark/30 pt-12 pb-6 overflow-hidden">
      <div className="museum-container">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b border-border-dark/20">
          {/* Brand & Positioning (md: 3 cols) */}
          <div className="md:col-span-3 flex flex-col justify-between">
            <div>
              <div className="mb-4">
                <img 
                  src="/logo (3).png" 
                  alt="Amazink Tattoos" 
                  className="h-20 w-auto object-contain no-grayscale opacity-90 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
              <p className="font-sans text-sm sm:text-[15px] text-text-dark/70 leading-relaxed font-light mt-4 max-w-sm">
                An elite, custom tattoo atelier focused on artistic storytelling, fine-needle geometry, and premium, highly sterile client environments.
              </p>
            </div>

            <div className="mt-6">
              <span className="text-[11px] tracking-[0.25em] text-gold font-semibold uppercase block">
                STUDIO LOCATION
              </span>
              <div className="w-8 h-[1px] bg-gold/40 mt-2 mb-3"></div>
              <p className="text-sm text-text-dark/85 font-light tracking-wide leading-relaxed">
                HDFC bank building Society Building, 673001, <br />
                YMCA Cross Rd, near Malabar christian college, <br />
                Kozhikode, Kerala 673001, India
              </p>
            </div>
          </div>

          {/* Quick Navigation (md: 2 cols) */}
          <div className="md:col-span-2">
            <span className="text-[11px] tracking-[0.25em] text-gold font-semibold uppercase block">
              STUDIO MAP
            </span>
            <div className="w-8 h-[1px] bg-gold/40 mt-2 mb-5"></div>
            <ul className="space-y-2.5">
              {[
                { name: 'Home', id: 'hero' },
                { name: 'About Us', id: 'about' },
                { name: 'Resident Masters', id: 'artists' },
                { name: 'Gallery', id: 'gallery' },
                { name: 'Contact Us', id: 'contact' },
              ].map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => handleScrollTo(item.id)}
                    className="text-sm text-text-dark/75 hover:text-gold hover:translate-x-1 transition-all duration-300 font-light tracking-wide cursor-pointer text-left block"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Channels (md: 2 cols) */}
          <div className="md:col-span-2">
            <span className="text-[11px] tracking-[0.25em] text-gold font-semibold uppercase block">
              CHANNELS
            </span>
            <div className="w-8 h-[1px] bg-gold/40 mt-2 mb-5"></div>
            <ul className="space-y-2.5">
              {[
                { name: 'Instagram', href: 'https://www.instagram.com/amazinktattoo_calicut?igsh=MWYzcGo3cG95MGNobA==' },
                { name: 'Facebook', href: 'https://www.facebook.com/AmazinktattoosIndia' },
              ].map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-text-dark/75 hover:text-gold hover:translate-x-1 transition-all duration-300 font-light tracking-wide block"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Opening Hours & Inquiries (md: 2 cols) */}
          <div className="md:col-span-2">
            <span className="text-[11px] tracking-[0.25em] text-gold font-semibold uppercase block">
              ACCESSIBILITY
            </span>
            <div className="w-8 h-[1px] bg-gold/40 mt-2 mb-5"></div>
            <ul className="space-y-3.5 text-sm text-text-dark/75 font-light tracking-wide">
              <li>
                <span className="text-text-dark/60 block text-[10px] tracking-[0.1em] font-semibold">SUNDAY - SATURDAY</span>
                <span className="block text-xs text-text-dark/70 font-light mt-1.5 space-y-1">
                  <span>Sunday: Open 24 hours</span><br />
                  <span>Monday: Open 24 hours</span><br />
                  <span>Tuesday: Open 24 hours</span><br />
                  <span>Wednesday: Open 24 hours</span><br />
                  <span>Thursday: Open 24 hours</span><br />
                  <span>Friday: Open 24 hours</span><br />
                  <span>Saturday: Open 24 hours</span>
                </span>
              </li>
              <li>
                <span className="text-text-dark/60 block text-[10px] tracking-[0.1em] font-semibold">CONTACT</span>
                <a href="mailto:amazinktattoos209@gmail.com" className="hover:text-gold transition-colors duration-300">
                  amazinktattoos209@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Interactive Map (md: 3 cols) */}
          <div className="md:col-span-3 flex flex-col">
            <span className="text-[11px] tracking-[0.25em] text-gold font-semibold uppercase block">
              ATELIER MAP
            </span>
            <div className="w-8 h-[1px] bg-gold/40 mt-2 mb-5"></div>
            <div className="relative w-full h-36 rounded-sm border border-border-dark/30 overflow-hidden group shadow-sm bg-white">
              <iframe
                src="https://maps.google.com/maps?q=AMAZINK%2BTATTOO%2BAmazink%2BTattoo%2BIndia%2BYMCA%2BCross%2BRoad%2BNear%2BHDFC%2BBANK%2B1st%2BFloor%2BNear%2BBalus%2BSaloon%2BOpp%2BMyG%2BYmca&sll=11.2604,75.7793&t=&z=14&ie=UTF8&iwloc=&output=embed"
                className="absolute inset-0 w-full h-full border-0 opacity-95 group-hover:opacity-100 transition-opacity duration-300"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              {/* Subtle overlay gold corner details */}
              <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-gold/40 pointer-events-none"></div>
              <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-gold/40 pointer-events-none"></div>
            </div>
            <a
              href="https://maps.google.com/maps?q=AMAZINK%2BTATTOO%2BAmazink%2BTattoo%2BIndia%2BYMCA%2BCross%2BRoad%2BNear%2BHDFC%2BBANK%2B1st%2BFloor%2BNear%2BBalus%2BSaloon%2BOpp%2BMyG%2BYmca&sll=11.2604,75.7793"
              target="_blank"
              rel="noreferrer"
              className="text-[10px] tracking-[0.2em] text-gold hover:text-text-dark transition-colors duration-300 uppercase font-semibold mt-2.5 inline-block text-left"
            >
              OPEN IN MAPS →
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-4 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left gap-4">
          <p className="text-[10px] tracking-[0.25em] text-text-dark/65 uppercase font-semibold">
            © {new Date().getFullYear()} AMAZINK TATTOO STUDIO. ALL RIGHTS RESERVED.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-[10px] tracking-[0.25em] text-text-dark/65 hover:text-gold transition-colors duration-300 uppercase font-semibold">
              PRIVACY BRIEF
            </a>
            <span className="text-[10px] tracking-[0.25em] text-text-dark/30 select-none">|</span>
            <a href="#" className="text-[10px] tracking-[0.25em] text-text-dark/65 hover:text-gold transition-colors duration-300 uppercase font-semibold">
              TERMS OF DOSSIER
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
