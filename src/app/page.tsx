import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Artists from '@/components/Artists';
import Gallery from '@/components/Gallery';
import Services from '@/components/Services';
import Process from '@/components/Process';
import Testimonials from '@/components/Testimonials';
import Journal from '@/components/Journal';
import Booking from '@/components/Booking';
import Footer from '@/components/Footer';

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

        {/* Concierge Services List */}
        <Services />

        {/* Architectural Workflow Steps */}
        <Process />

        {/* High-End Collector Testimonials */}
        <Testimonials />

        {/* Editorial Publications */}
        <Journal />

        {/* Exclusive Booking Dossier Portal */}
        <Booking />
      </main>

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
