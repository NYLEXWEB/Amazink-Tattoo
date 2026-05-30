import React from "react";

export default function Gallery() {
  return (
    <section className="gallery" id="gallery">
      <div className="gallery-header">
        <div className="fade-up">
          <p className="about-tag">Portfolio</p>
          <div className="divider"></div>
          <h2 className="section-title">Selected <em>Work</em></h2>
        </div>
        <a href="#" className="btn-ghost fade-up">View Full Gallery</a>
      </div>
      <div className="gallery-grid">
        <div className="g1"><img src="https://images.unsplash.com/photo-1589758438368-0ad531db3366?w=600&q=80" alt="Tattoo art 1" /></div>
        <div className="g2"><img src="https://images.unsplash.com/photo-1562962230-a3f5133d4a3e?w=600&q=80" alt="Tattoo art 2" /></div>
        <div className="g3"><img src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=600&q=80" alt="Tattoo art 3" /></div>
        <div className="g4"><img src="https://images.unsplash.com/photo-1598207950762-6eed966f0e5a?w=600&q=80" alt="Tattoo art 4" /></div>
        <div className="g5"><img src="https://images.unsplash.com/photo-1584907797015-7554cd315667?w=600&q=80" alt="Tattoo art 5" /></div>
      </div>
    </section>
  );
}
