import React from "react";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-images fade-up">
        <img className="about-img-main" src="https://images.unsplash.com/photo-1542856391-010fb87dcfed?w=700&q=80" alt="Tattoo studio interior" />
        <img className="about-img-secondary" src="https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=400&q=80" alt="Tattoo detail" />
      </div>
      <div className="fade-up">
        <p className="about-tag">Our Philosophy</p>
        <div className="divider"></div>
        <h2 className="section-title">Where Craft Meets <em>Obsession</em></h2>
        <p className="about-body">
          Amazink was founded on a single belief: that tattooing is fine art. Not commodity. Not convention. We are four walls of obsessive craftsmanship, where every client leaves with something that will outlast us all.
        </p>
        <p className="about-body">
          Our studio is built on appointment-based intimacy — no walk-ins, no rush. Your story deserves time, deliberation, and a space that feels sacred.
        </p>
        <div className="stat-row">
          <div>
            <div className="stat-num">16<span>+</span></div>
            <div className="stat-label">Years in Business</div>
          </div>
          <div>
            <div className="stat-num">8<span>K</span></div>
            <div className="stat-label">Pieces Completed</div>
          </div>
          <div>
            <div className="stat-num">9<span>.</span>8</div>
            <div className="stat-label">Client Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
}
