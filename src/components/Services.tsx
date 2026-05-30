import React from "react";

export default function Services() {
  const items = [
    {
      num: "01",
      title: "Custom Tattoo Design",
      desc: "We begin with a consultation to understand your vision, history, and skin. The design is yours alone — never reused, never resold. This is bespoke tattooing.",
      linkText: "Start a Project",
    },
    {
      num: "02",
      title: "Cover-Up & Rework",
      desc: "Old work doesn't have to be a regret. Our artists specialize in transforming existing tattoos into new chapters — same skin, new story.",
      linkText: "Get a Consultation",
    },
    {
      num: "03",
      title: "Large-Scale Work",
      desc: "Full sleeves, back pieces, chest panels. We plan large projects with surgical care — mapping your body's topography to create coherent, flowing compositions.",
      linkText: "Plan Your Piece",
    },
    {
      num: "04",
      title: "Touch-Up & Restoration",
      desc: "Age changes ink. We bring faded or blurred work back to its intended clarity — whether our own or another artist's. Skin deserves maintenance.",
      linkText: "Book a Touch-Up",
    },
  ];

  return (
    <section className="services" id="services">
      <div className="fade-up">
        <p className="about-tag">What We Offer</p>
        <div className="divider"></div>
        <h2 className="section-title">Our <em>Services</em></h2>
      </div>
      <div className="services-grid">
        {items.map((item, index) => (
          <div key={index} className="service-item fade-up">
            <div className="service-num">{item.num}</div>
            <h3 className="service-title">{item.title}</h3>
            <p className="service-desc">{item.desc}</p>
            <a href="#booking" className="service-link">{item.linkText}</a>
          </div>
        ))}
      </div>
    </section>
  );
}
