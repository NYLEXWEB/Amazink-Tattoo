import React from "react";

export default function Navbar() {
  return (
    <nav>
      <a href="#" className="nav-logo">
        AMAZ<span>INK</span>
      </a>
      <div className="nav-links">
        <a href="#about">Studio</a>
        <a href="#gallery">Work</a>
        <a href="#artists">Artists</a>
        <a href="#services">Services</a>
        <a href="#booking" className="nav-cta">
          Book Now
        </a>
      </div>
    </nav>
  );
}
