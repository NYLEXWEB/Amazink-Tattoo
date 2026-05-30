import React from 'react';

export default function Testimonials() {
  return (
    <section className="py-[120px] bg-ash relative overflow-hidden">
      <div className="absolute -top-10 left-8 font-playfair text-[30rem] text-rust/[0.06] leading-none pointer-events-none before:content-['\201C']"></div>
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 relative z-10">
        <div className="fade-up relative z-10">
          <p className="font-dm-mono text-[0.65rem] tracking-[0.3em] uppercase text-rust mb-5">Client Stories</p>
          <div className="w-12 h-[1px] bg-rust mb-6"></div>
          <h2 className="font-playfair text-[clamp(2.5rem,4vw,3.8rem)] font-bold leading-[1.05] text-bone mb-0">
            What They <em className="italic text-rust font-normal">Say</em>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[2px] mt-16 relative z-10">
          <div className="p-10 bg-ink border-t-2 border-rust fade-up">
            <div className="text-gold text-[0.75rem] tracking-[0.15em] mb-5">★★★★★</div>
            <p className="text-[1.05rem] italic font-normal text-bone leading-[1.7] mb-7">
              &quot;Mara turned a vague idea about my grandmother&apos;s garden into something that brings me to tears every time I look at it. The linework is impossibly precise.&quot;
            </p>
            <div className="font-dm-mono text-[0.65rem] tracking-[0.2em] uppercase text-fog">
              <strong className="block text-bone mb-1 font-bold">Diane R.</strong>
              Botanical sleeve, 2024
            </div>
          </div>
          <div className="p-10 bg-ink border-t-2 border-rust fade-up">
            <div className="text-gold text-[0.75rem] tracking-[0.15em] mb-5">★★★★★</div>
            <p className="text-[1.05rem] italic font-normal text-bone leading-[1.7] mb-7">
              &quot;I came in with a bad tattoo I&apos;d had for 10 years and left with a piece I&apos;m genuinely proud of. Kenji didn&apos;t just cover it — he transformed it.&quot;
            </p>
            <div className="font-dm-mono text-[0.65rem] tracking-[0.2em] uppercase text-fog">
              <strong className="block text-bone mb-1 font-bold">Marcus T.</strong>
              Cover-up, full arm, 2025
            </div>
          </div>
          <div className="p-10 bg-ink border-t-2 border-rust fade-up">
            <div className="text-gold text-[0.75rem] tracking-[0.15em] mb-5">★★★★★</div>
            <p className="text-[1.05rem] italic font-normal text-bone leading-[1.7] mb-7">
              &quot;Zoe&apos;s consultation process alone is worth it. She spent an hour understanding my concept before touching a pencil. The result is perfectly me.&quot;
            </p>
            <div className="font-dm-mono text-[0.65rem] tracking-[0.2em] uppercase text-fog">
              <strong className="block text-bone mb-1 font-bold">Asha K.</strong>
              Geometric back piece, 2025
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
