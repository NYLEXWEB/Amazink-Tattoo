import React from "react";

export default function Marquee() {
  const items = [
    "Custom Design",
    "Fine Line",
    "Japanese Traditional",
    "Black & Grey",
    "Neo-Traditional",
    "Geometric",
    "Cover-Up",
    "Watercolor",
  ];

  // Duplicate items twice to ensure smooth infinite marquee effect
  const marqueeItems = [...items, ...items];

  return (
    <div className="marquee-wrap">
      <div className="marquee-track">
        {marqueeItems.map((item, index) => (
          <span key={index} className="marquee-item">
            {item} <span>✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
