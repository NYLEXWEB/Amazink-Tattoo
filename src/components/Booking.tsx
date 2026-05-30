"use client";

import React, { FormEvent } from "react";

export default function Booking() {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert("Request received! We will get in touch shortly.");
  };

  return (
    <section className="booking" id="booking">
      <div className="booking-img fade-up">
        <img src="https://images.unsplash.com/photo-1565058379802-bbe93b2f703a?w=700&q=80" alt="Tattoo studio" />
      </div>
      <div className="fade-up">
        <p className="about-tag">Get In Touch</p>
        <div className="divider"></div>
        <h2 className="section-title">Book a <em>Consultation</em></h2>
        <p className="about-body" style={{ marginBottom: "36px" }}>All new client work starts with a free 30-minute consultation. Tell us what you're imagining.</p>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input id="firstName" type="text" placeholder="Diane" required />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input id="lastName" type="text" placeholder="Reynolds" required />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input id="email" type="email" placeholder="you@email.com" required />
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="artist">Preferred Artist</label>
              <select id="artist" defaultValue="">
                <option value="">No preference</option>
                <option value="Mara Solis">Mara Solis</option>
                <option value="Kenji Muro">Kenji Muro</option>
                <option value="Zoe Harrington">Zoe Harrington</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="style">Style</label>
              <select id="style" defaultValue="">
                <option value="">Select style</option>
                <option value="Fine Line">Fine Line</option>
                <option value="Blackwork">Blackwork</option>
                <option value="Japanese">Japanese</option>
                <option value="Geometric">Geometric</option>
                <option value="Neo-Traditional">Neo-Traditional</option>
                <option value="Cover-Up">Cover-Up</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="idea">Tell Us Your Idea</label>
            <textarea id="idea" placeholder="Describe your concept, reference images, placement, size…" required></textarea>
          </div>
          <button type="submit" className="btn-primary" style={{ display: "inline-block", marginTop: "8px", border: "none", cursor: "pointer" }}>Submit Request</button>
        </form>
      </div>
    </section>
  );
}
