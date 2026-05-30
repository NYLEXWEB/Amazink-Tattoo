import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Artists from '@/components/Artists';
import Gallery from '@/components/Gallery';
import Testimonials from '@/components/Testimonials';
import Journal from '@/components/Journal';
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

        {/* Editorial Publications */}
        <Journal />

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
            viewBox="0 0 24 24"
          >
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.717-1.456L0 24zm6.59-4.846c1.66.986 3.288 1.498 4.76 1.499 5.485.002 9.943-4.407 9.945-9.825.002-2.626-1.019-5.093-2.877-6.953-1.859-1.86-4.322-2.883-6.942-2.884-5.488 0-9.946 4.41-9.949 9.828-.001 1.955.513 3.864 1.49 5.568l-.978 3.57 3.654-.958zm12.091-6.53c-.302-.15-1.786-.882-2.063-.982-.277-.1-.478-.15-.678.15-.2.3-.778.982-.953 1.182-.177.2-.353.226-.655.076-.301-.15-1.274-.47-2.426-1.498-.897-.8-1.502-1.788-1.678-2.088-.177-.3-.02-.462.13-.61.137-.133.302-.35.453-.526.15-.175.201-.3.302-.5.101-.2.05-.376-.026-.526-.075-.15-.678-1.634-.93-2.235-.244-.589-.493-.509-.678-.518-.176-.01-.377-.01-.577-.01-.2 0-.527.075-.803.376-.277.3-.1 .982-.1 2.428 0 2.236 1.633 4.394 1.86 4.695.226.3 3.218 4.912 7.795 6.89 1.089.47 1.939.75 2.6.96.101.32.226.6.353.88.243.528.536.428.88.428.344 0 1.786-.88 2.038-1.73.25-.85.25-1.58.175-1.73-.075-.15-.276-.25-.577-.4z" />
          </svg>
        </a>
      </div>

      {/* Luxury Brand Map & Footer */}
      <Footer />
    </>
  );
}
