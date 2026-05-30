import React from "react";

export default function Testimonials() {
  const reviews = [
    {
      stars: "★★★★★",
      text: '"Mara turned a vague idea about my grandmother\'s garden into something that brings me to tears every time I look at it. The linework is impossibly precise."',
      author: "Diane R.",
      details: "Botanical sleeve, 2024",
    },
    {
      stars: "★★★★★",
      text: '"I came in with a bad tattoo I\'d had for 10 years and left with a piece I\'m genuinely proud of. Kenji didn\'t just cover it — he transformed it."',
      author: "Marcus T.",
      details: "Cover-up, full arm, 2025",
    },
    {
      stars: "★★★★★",
      text: '"Zoe\'s consultation process alone is worth it. She spent an hour understanding my concept before touching a pencil. The result is perfectly me."',
      author: "Asha K.",
      details: "Geometric back piece, 2025",
    },
  ];

  return (
    <section className="testimonials">
      <div className="fade-up">
        <p className="about-tag">Client Stories</p>
        <div className="divider"></div>
        <h2 className="section-title">What They <em>Say</em></h2>
      </div>
      <div className="testimonials-grid">
        {reviews.map((review, idx) => (
          <div key={idx} className="testimonial-card fade-up">
            <div className="stars">{review.stars}</div>
            <p className="testimonial-text">{review.text}</p>
            <div className="testimonial-author">
              <strong>{review.author}</strong>
              {review.details}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
