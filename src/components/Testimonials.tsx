'use client';

import { useState } from 'react';

export default function Testimonials() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="testimonials" className="section-spacing bg-white overflow-hidden">
      <div className="museum-container">
        {/* Section Header */}
        <div className="max-w-xl mb-20">
          <span className="luxury-label mb-4 block">06 // THE ACCOLADES</span>
          <h2 className="editorial-title text-[42px] sm:text-[56px] text-text-dark font-light leading-none">
            PATRON TESTIMONIAL
          </h2>
          <p className="font-sans text-xs sm:text-sm text-text-dark/50 mt-6 tracking-wider font-light uppercase">
            A featured review from our esteemed collector.
          </p>
        </div>

        {/* Central Single Testimony Block */}
        <div className="max-w-4xl mx-auto bg-[#FCFAF7] border border-[#E5E2DA] p-8 sm:p-12 md:p-16 relative rounded shadow-sm">
          {/* Elegant corner brackets */}
          <div className="absolute top-3 left-3 w-4 h-4 border-t border-l border-[#C8A96B]/30"></div>
          <div className="absolute top-3 right-3 w-4 h-4 border-t border-r border-[#C8A96B]/30"></div>
          <div className="absolute bottom-3 left-3 w-4 h-4 border-b border-l border-[#C8A96B]/30"></div>
          <div className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-[#C8A96B]/30"></div>

          {/* Rating stars & Author Header */}
          <div className="flex flex-col items-center text-center mb-8 border-b border-[#E5E2DA] pb-8">
            <div className="flex text-[#C8A96B] text-xl space-x-1.5 mb-4">
              <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
            </div>
            <h3 className="font-serif text-3xl sm:text-4xl text-[#111111] font-light tracking-wide">
              Aswathi T P
            </h3>
            <p className="text-[10px] sm:text-[11px] tracking-[0.25em] uppercase text-gold font-bold mt-2">
              Senior Chartered Accountant, KPMG USA
            </p>
          </div>

          {/* Quote Content */}
          <div className="space-y-6 text-text-dark/85 font-light tracking-wide leading-relaxed text-sm sm:text-base text-justify">
            {/* Paragraph 1 - Always Visible */}
            <p className="font-serif text-lg sm:text-xl md:text-2xl text-[#111111]/90 italic font-light leading-relaxed text-center mb-8">
              “There aren't enough words in the English vocabulary that would express how much I love the tattoos I got and how grateful I am to Midhun @ Amazink Tattoos for helping me fulfill this long-time dream of mine.”
            </p>

            {/* Paragraph 2 - Always Visible */}
            <p>
              For one, getting an accomplished tattoo artist near home was a surprise in itself. I did have my concerns so I read through all the review comments in Google (which turned out to be really great) and additionally to get some more clarity I called Midhun and set an appointment with him. The studio is easily accessible and in a prime location. The interiors are well-maintained and hygienic.
            </p>

            {/* Collapsible Content */}
            <div className={`space-y-6 transition-all duration-700 ease-in-out overflow-hidden ${isExpanded ? 'max-h-[2500px] opacity-100 mt-6' : 'max-h-0 opacity-0 pointer-events-none'}`}>
              <p>
                Midhun is a wonderful, passionate artist and patiently answered all my questions. We decided on the dates and schedule as well.
              </p>
              <p>
                It took two days to complete the tattoos as I had decided to go all out and get mandala tattoos on both my legs (from the area below the knee to my feet). The designs included lots of fine detailing and required an immense amount of patience.
              </p>
              <p>
                Midhun is very particular about ensuring that everything is perfect, he wouldn't rest till he is satisfied with the results. He even helped me choose the right designs and design combinations.
              </p>
              <p>
                Additionally, at the studio they also ensured that my brother, who had accompanied me on both the days, was comfortable and included him in all the conversations. I totally believe that if you go to him for getting your tattoos, you are in really safe hands.
              </p>
              <p>
                Then there is Prabeesh, who is another accomplished artist working alongside Midhun. He did take over some part of my tattooing and is equally particular about following all the rules and ensuring that the end product is spectacular.
              </p>
              <p>
                If you are someone looking for an assurance, go right ahead and book an appointment with them. You would be in the best hands.
              </p>

              {/* Attributes & Services Details (Luxury styled lists) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-[#E5E2DA] mt-8 text-left">
                {/* Positives */}
                <div>
                  <h4 className="text-[10px] tracking-[0.25em] uppercase font-bold text-gold mb-3.5">
                    HIGHLIGHTS
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {["Cleanliness", "Quality", "Professionalism", "Value"].map((pos, idx) => (
                      <span key={idx} className="text-[10px] tracking-wider text-text-dark/75 border border-gold/30 px-3 py-1 bg-white">
                        {pos}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Services */}
                <div>
                  <h4 className="text-[10px] tracking-[0.25em] uppercase font-bold text-gold mb-3.5">
                    SERVICES RENDERED
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {["Tattoo aftercare", "Geometric patterns and mandalas", "Sleeve tattoos", "Tattoo design"].map((srv, idx) => (
                      <span key={idx} className="text-[10px] tracking-wider text-text-dark/75 border border-neutral-300 px-3 py-1 bg-white">
                        {srv}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Read More Trigger */}
            <div className="flex justify-center pt-6">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="group inline-flex items-center space-x-2 text-[10px] tracking-[0.3em] text-[#C8A96B] font-bold uppercase transition-all duration-300 hover:text-[#111111] border-b border-[#C8A96B]/50 hover:border-[#111111] pb-1 cursor-pointer animate-pulse-slow"
              >
                <span>{isExpanded ? 'READ LESS' : 'READ FULL REVIEW'}</span>
                <svg
                  className={`w-3.5 h-3.5 transform transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Google Verified Review Curation CTA */}
        <div className="mt-20 bg-[#FCFAF7] border border-[#E5E2DA] p-8 sm:p-12 md:py-12 md:px-16 relative rounded max-w-4xl mx-auto shadow-sm">
          <div className="absolute top-2.5 left-2.5 w-3 h-3 border-t border-l border-[#C8A96B]/30"></div>
          <div className="absolute top-2.5 right-2.5 w-3 h-3 border-t border-r border-[#C8A96B]/30"></div>
          <div className="absolute bottom-2.5 left-2.5 w-3 h-3 border-b border-l border-[#C8A96B]/30"></div>
          <div className="absolute bottom-2.5 right-2.5 w-3 h-3 border-b border-r border-[#C8A96B]/30"></div>

          {/* Overlapping Google Emblem */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-white rounded-full flex items-center justify-center border border-[#E5E2DA] shadow-md z-20">
            <svg className="w-7 h-7" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
              />
            </svg>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center relative z-10">
            {/* Left Column */}
            <div className="md:col-span-8 text-left space-y-4">
              <div>
                <span className="text-[9px] tracking-[0.25em] border border-[#C8A96B]/30 text-[#C8A96B] px-3 py-1 font-semibold uppercase rounded-none inline-block">
                  GOOGLE VERIFIED ATELIER
                </span>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-4">
                  <span className="font-sans text-3xl text-[#111111] font-semibold leading-none">4.9</span>
                  <div className="flex text-[#C8A96B] text-xl space-x-1">
                    <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                  </div>
                  <div className="h-6 w-[1px] bg-[#111111]/15 hidden sm:block"></div>
                  <span className="font-serif text-xl text-[#111111]/90 font-light tracking-wide">
                    250+ Verified Reviews
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: CTA */}
            <div className="md:col-span-4 flex flex-col items-center md:items-end justify-center h-full">
              <a
                href="https://www.google.com/maps/place/Amazink+tattoo+studio+calicut/@11.2606895,75.7765858,17z/data=!4m18!1m9!3m8!1s0x3ba65ebf6972431f:0x28291246983dbf15!2sAmazink+tattoo+studio+calicut!8m2!3d11.2606895!4d75.7791607!9m1!1b1!16s%2Fg%2F11c1r2bq8t!3m7!1s0x3ba65ebf6972431f:0x28291246983dbf15!8m2!3d11.2606895!4d75.7791607!9m1!1b1!16s%2Fg%2F11c1r2bq8t?entry=ttu&g_ep=EgoyMDI2MDUyNy4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full px-8 py-4 bg-[#111111] hover:bg-[#C8A96B] text-white rounded-full text-[10px] tracking-[0.25em] uppercase font-bold flex items-center justify-center space-x-3 transition-all duration-500 hover:scale-[1.03] shadow-md border border-[#111111] hover:border-[#C8A96B]"
              >
                <span>WRITE A REVIEW</span>
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.8}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
