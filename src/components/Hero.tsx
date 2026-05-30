import React from "react";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <p className="hero-eyebrow">Est. 2008 — Los Angeles, CA</p>
        <h1 className="hero-title">
          Permanent<br />
          <em>Art</em><br />
          On Skin
        </h1>
        <p className="hero-sub">
          We don't just tattoo — we collaborate. Every piece is a dialogue between artist and skin, between memory and permanence.
        </p>
        <div className="hero-actions">
          <a href="#booking" className="btn-primary">Book a Session</a>
          <a href="#gallery" className="btn-ghost">View Our Work</a>
        </div>
      </div>
      <div className="hero-right">
        <img src="https://images.unsplash.com/photo-1565058379802-bbe93b2f703a?w=700&q=80" alt="Tattoo artist at work" />
      </div>
    </section>
  );
}
