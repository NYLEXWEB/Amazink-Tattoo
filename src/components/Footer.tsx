import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <div>
          <div className="footer-brand">AMAZ<span>INK</span></div>
          <p className="footer-desc">A premium custom tattoo studio in Los Angeles. Appointment only. Art always.</p>
        </div>
        <div>
          <p className="footer-heading">Studio</p>
          <ul className="footer-links">
            <li><a href="#about">About Us</a></li>
            <li><a href="#artists">Our Artists</a></li>
            <li><a href="#gallery">Portfolio</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
        </div>
        <div>
          <p className="footer-heading">Services</p>
          <ul className="footer-links">
            <li><a href="#services">Custom Design</a></li>
            <li><a href="#services">Cover-Up</a></li>
            <li><a href="#services">Large Scale</a></li>
            <li><a href="#services">Touch-Up</a></li>
          </ul>
        </div>
        <div>
          <p className="footer-heading">Contact</p>
          <ul className="footer-links">
            <li><a href="mailto:studio@amazink.co">studio@amazink.co</a></li>
            <li><a href="tel:+13235550192">+1 (323) 555-0192</a></li>
            <li><a href="#">4812 Sunset Blvd<br />Los Angeles, CA 90027</a></li>
            <li style={{ marginTop: "16px" }}><a href="#">Instagram</a></li>
            <li><a href="#">TikTok</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="footer-copy">© 2025 Amazink Studio. All rights reserved.</p>
        <p className="footer-copy" style={{ color: "rgba(90,82,74,0.5)" }}>Built with obsession.</p>
      </div>
    </footer>
  );
}
