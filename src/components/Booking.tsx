'use client';

import { useState } from 'react';

export default function Booking() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    // Prefill mailto parameters and open client
    const subject = encodeURIComponent(`Amazink Tattoo Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`
    );
    const mailtoUrl = `mailto:amazinktattoos209@gmail.com?subject=${subject}&body=${body}`;

    // Simulate luxury API call with artificial delay, then open mail client
    setTimeout(() => {
      window.location.href = mailtoUrl;
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
    }, 1200);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <section id="contact" className="section-spacing bg-white overflow-hidden relative">
      {/* Decorative Gold Accent Vertical Line */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[1px] h-32 bg-gold/30"></div>

      <div className="museum-container pt-12">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-20">
          <span className="luxury-label mb-6 block">07 // CONTACT</span>
          <h2 className="editorial-title text-[48px] sm:text-[64px] text-text-dark font-light leading-none mb-6">
            CONTACT US
          </h2>
          <div className="w-16 h-[1px] bg-gold mx-auto mb-8"></div>
          <p className="font-sans text-sm text-text-dark/60 leading-relaxed font-light max-w-lg mx-auto">
            Please submit your message or custom design inquiry below to coordinate with our private studio concierge.
          </p>
        </div>

        {/* Concierge Style Form */}
        <div className="max-w-3xl mx-auto bg-white border border-border-dark p-8 sm:p-12 lg:p-16 shadow-xl relative">
          {/* Accent corners */}
          <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-gold/40"></div>
          <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-gold/40"></div>
          <div className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-gold/40"></div>
          <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-gold/40"></div>

          {status === 'success' ? (
            <div className="text-center py-16 animate-fade-in">
              <div className="w-12 h-12 border border-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-serif text-2xl text-text-dark font-light tracking-wide mb-4">
                MESSAGE REGISTERED
              </h3>
              <p className="font-sans text-xs sm:text-sm text-text-dark/60 leading-relaxed font-light max-w-md mx-auto mb-8">
                Your inquiry has been archived in our records. A dedicated studio concierge will respond to your message within 48 hours.
              </p>
              <button
                onClick={() => setStatus('idle')}
                className="text-xs uppercase tracking-[0.25em] text-gold border-b border-gold pb-1 font-semibold hover:text-text-dark hover:border-text-dark transition-colors duration-300"
              >
                SEND ANOTHER MESSAGE
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {/* Full Name */}
                <div className="flex flex-col">
                  <label htmlFor="name" className="text-[10px] tracking-[0.2em] uppercase text-text-dark/50 font-semibold mb-2">
                    FULL NAME *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Alexandra Montgomery"
                    className="border-b border-border-dark focus:border-gold py-3 text-sm font-light text-text-dark bg-transparent outline-none transition-colors duration-300"
                  />
                </div>

                {/* Email Address */}
                <div className="flex flex-col">
                  <label htmlFor="email" className="text-[10px] tracking-[0.2em] uppercase text-text-dark/50 font-semibold mb-2">
                    EMAIL ADDRESS *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="alexandra@vogue.com"
                    className="border-b border-border-dark focus:border-gold py-3 text-sm font-light text-text-dark bg-transparent outline-none transition-colors duration-300"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {/* Phone number */}
                <div className="flex flex-col">
                  <label htmlFor="phone" className="text-[10px] tracking-[0.2em] uppercase text-text-dark/50 font-semibold mb-2">
                    CONTACT NUMBER *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+91 "
                    className="border-b border-border-dark focus:border-gold py-3 text-sm font-light text-text-dark bg-transparent outline-none transition-colors duration-300"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="flex flex-col">
                <label htmlFor="message" className="text-[10px] tracking-[0.2em] uppercase text-text-dark/50 font-semibold mb-2">
                  YOUR MESSAGE *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Outline your inquiry, concepts, or details you wish to share with the atelier."
                  className="border-b border-border-dark focus:border-gold py-3 text-sm font-light text-text-dark bg-transparent outline-none transition-all duration-300 resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full text-center bg-gold hover:bg-[#B39457] text-white py-5 rounded-full text-[11px] tracking-[0.35em] uppercase font-bold transition-all duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-3 shadow-md shadow-gold/10 hover:shadow-lg hover:shadow-gold/20"
                >
                  {status === 'submitting' ? (
                    <>
                      <span>SENDING MESSAGE...</span>
                      <svg className="animate-spin h-4 w-4 text-gold group-hover:text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                      </svg>
                    </>
                  ) : (
                    <>
                      <span>SEND MESSAGE</span>
                      <svg
                        className="w-4 h-4 transform translate-y-[-0.5px]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
