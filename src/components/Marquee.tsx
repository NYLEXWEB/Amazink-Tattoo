import React from 'react';

const ITEMS = [
  "Custom Design",
  "Fine Line",
  "Japanese Traditional",
  "Black & Grey",
  "Neo-Traditional",
  "Geometric",
  "Cover-Up",
  "Watercolor",
  "Custom Design",
  "Fine Line",
  "Japanese Traditional",
  "Black & Grey",
  "Neo-Traditional",
  "Geometric",
  "Cover-Up",
  "Watercolor"
];

export default function Marquee() {
  return (
    <div className="border-t border-b border-bone/10 overflow-hidden py-[18px] bg-ash">
      <div className="flex gap-0 animate-marquee whitespace-nowrap">
        {ITEMS.map((item, index) => (
          <span key={index} className="font-bebas text-base tracking-[0.25em] text-fog px-12 uppercase">
            {item} <span className="text-rust mx-3">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
