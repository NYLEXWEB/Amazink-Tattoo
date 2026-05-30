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

      {/* Luxury Brand Map & Footer */}
      <Footer />
    </>
  );
}
