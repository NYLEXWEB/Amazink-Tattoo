import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Artists from '@/components/Artists';
import Gallery from '@/components/Gallery';
import Testimonials from '@/components/Testimonials';

import Booking from '@/components/Booking';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: "Amazink Tattoo | Best Tattoo Studio in Calicut",
  description:
    "Welcome to Amazink Tattoo, the leading Tattoo Studio Calicut trusted by tattoo enthusiasts seeking creativity, quality, and professionalism. Recognized as a Best Tattoo Studio Calicut, our studio is dedicated to delivering exceptional tattoo experiences with custom artwork, advanced techniques, and the highest standards of hygiene. As a renowned Tattoo Shop Calicut and Tattoo Studio Kozhikode, we specialize in creating unique and meaningful tattoos tailored to every client's vision. Whether you are looking for the Best Tattoo Artist Calicut or an experienced Tattoo Artist Kozhikode, our skilled team is committed to transforming your ideas into stunning body art. Amazink Tattoo is a Professional Tattoo Studio Calicut offering Custom Tattoo Calicut services for clients who value originality and precision. If you are searching for a Tattoo Near Me, Best Tattoo Shop Near Me, or Tattoo Artist Near Me, our studio provides a welcoming environment where creativity meets professionalism. Conveniently located as a Tattoo Studio YMCA Cross Road Calicut, we are easily accessible for clients looking for a Tattoo Studio Near Mananchira, Tattoo Studio Near Mavoor Road, or Tattoo Studio Near Kozhikode Beach. As a trusted Tattoo Studio in Kozhikode Kerala, we proudly serve clients from across the city and beyond. Our reputation as a Premium Tattoo Studio Calicut is built on artistic excellence, customer satisfaction, and strict safety protocols. We are also known as a Hygienic Tattoo Studio Calicut, ensuring every procedure follows industry-leading sterilization practices. Our team includes highly skilled professionals recognized as Certified Tattoo Artist Calicut specialists. At Amazink Tattoo, we provide Custom Tattoo Design Calicut services across a wide range of tattoo styles. Whether you desire a Realistic Tattoo Calicut, Portrait Tattoo Calicut, Mandala Tattoo Calicut, Lion Tattoo Calicut, Sleeve Tattoo Calicut, Couple Tattoo Calicut, Cover Up Tattoo Calicut, Black and Grey Tattoo Calicut, Colour Tattoo Calicut, or Minimal Tattoo Calicut, our artists bring exceptional detail and craftsmanship to every design. Amazink Tattoo has become one of the most recognized names in the tattoo industry, with clients frequently searching for Amazink Tattoo, Amazink Tattoo Calicut, and Amazink Tattoo Kozhikode when looking for premium tattoo services. Our commitment to excellence has earned us recognition as the Best Tattoo Studio in Calicut by Amazink Tattoo, serving clients who seek world-class tattoo artistry in a safe and professional environment. Located at Amazink Tattoo YMCA Cross Road, our studio combines creativity, precision, and hygiene to deliver unforgettable tattoo experiences. Whether you're planning your first tattoo or adding to an existing collection, Amazink Tattoo is your trusted destination for custom tattoos, artistic expression, and professional tattoo services in Calicut and Kozhikode.",
  keywords: [
    "Tattoo Studio Calicut",
    "Best Tattoo Studio Calicut",
    "Tattoo Shop Calicut",
    "Tattoo Studio Kozhikode",
    "Best Tattoo Artist Calicut",
    "Tattoo Artist Kozhikode",
    "Professional Tattoo Studio Calicut",
    "Custom Tattoo Calicut",
    "Tattoo Near Me",
    "Best Tattoo Shop Near Me",
    "Tattoo Studio YMCA Cross Road Calicut",
    "Tattoo Studio Near Mananchira",
    "Tattoo Studio Near Mavoor Road",
    "Tattoo Studio Near Kozhikode Beach",
    "Tattoo Studio in Kozhikode Kerala",
    "Premium Tattoo Studio Calicut",
    "Hygienic Tattoo Studio Calicut",
    "Certified Tattoo Artist Calicut",
    "Custom Tattoo Design Calicut",
    "Realistic Tattoo Calicut",
    "Portrait Tattoo Calicut",
    "Mandala Tattoo Calicut",
    "Lion Tattoo Calicut",
    "Sleeve Tattoo Calicut",
    "Couple Tattoo Calicut",
    "Cover Up Tattoo Calicut",
    "Black and Grey Tattoo Calicut",
    "Colour Tattoo Calicut",
    "Minimal Tattoo Calicut",
    "Amazink Tattoo",
    "Amazink Tattoo Calicut",
    "Amazink Tattoo Kozhikode",
    "Best Tattoo Studio in Calicut by Amazink Tattoo",
    "Amazink Tattoo YMCA Cross Road",
    "Tattoo Artist Near Me",
    "Best Tattoo Studio in Kozhikode",
    "Tattoo Studio Kerala",
    "Best Tattoo Studio Kerala",
    "Kozhikode Tattoo Artists",
    "Custom Tattoo Design Kozhikode",
    "Affordable Tattoo Studio Calicut"
  ]
};

export default function Home() {
  return (
    <>
      {/* Premium Sticky Navigation */}
      <Navbar />

      <main className="bg-white min-h-screen">
        {/* Full-viewport Asymmetric Hero */}
        <Hero />

        {/* Storytelling & Atelier Philosophy */}
        <About />

        {/* Resident Master Artist Portfolios */}
        <Artists />

        {/* Minimalist Museum Gallery */}
        <Gallery />

        {/* High-End Collector Testimonials */}
        <Testimonials />



        {/* Exclusive Booking Dossier Portal */}
        <Booking />
      </main>

      {/* Floating Instagram Button */}
      <div className="fixed bottom-28 right-8 z-50 flex items-center group">
        {/* Slide-out Text Label */}
        <div className="bg-text-dark text-white border border-gold/30 px-4 py-2.5 mr-3 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 pointer-events-none transition-all duration-500 ease-out shadow-lg hidden sm:block">
          <span className="text-[9px] tracking-[0.3em] uppercase font-semibold text-gold">
            INSTAGRAM GALLERY
          </span>
        </div>

        {/* Instagram Circular Trigger */}
        <a
          href="https://www.instagram.com/amazinktattoo_calicut?igsh=MWYzcGo3cG95MGNobA=="
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex items-center justify-center w-14 h-14 bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] hover:opacity-95 rounded-full shadow-2xl transition-all duration-300 hover:scale-108 cursor-pointer z-10 animate-bounce-slow"
          aria-label="Follow Amazing Tattoo on Instagram"
        >
          {/* Subtle Outer Pulsing Halo */}
          <span className="absolute -inset-1 border border-[#ee2a7b]/40 rounded-full animate-ping opacity-60 group-hover:animate-none"></span>

          {/* Minimal white SVG Instagram Icon */}
          <svg
            className="w-6 h-6 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051C.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
          </svg>
        </a>
      </div>

      {/* Floating Concierge WhatsApp Button */}
      <div className="fixed bottom-8 right-8 z-50 flex items-center group">
        {/* Slide-out Text Label */}
        <div className="bg-text-dark text-white border border-gold/30 px-4 py-2.5 mr-3 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 pointer-events-none transition-all duration-500 ease-out shadow-lg hidden sm:block">
          <span className="text-[9px] tracking-[0.3em] uppercase font-semibold text-gold">
            ATELIER CONCIERGE
          </span>
        </div>

        {/* WhatsApp Circular Trigger */}
        <a
          href="https://wa.me/919946111181"
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#128C7E] rounded-full shadow-2xl transition-all duration-300 hover:scale-108 cursor-pointer z-10"
          aria-label="Contact Atelier Concierge on WhatsApp"
        >
          {/* Subtle Outer Pulsing Halo */}
          <span className="absolute -inset-1 border border-[#25D366]/40 rounded-full animate-ping opacity-60 group-hover:animate-none"></span>

          {/* Minimal white SVG WhatsApp Icon */}
          <svg
            className="w-6 h-6 text-white"
            fill="currentColor"
            viewBox="0 0 448 512"
          >
            <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L3 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
          </svg>
        </a>
      </div>

      {/* Luxury Brand Map & Footer */}
      <Footer />
    </>
  );
}
