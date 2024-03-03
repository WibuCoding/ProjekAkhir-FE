import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section about">
            <h2>About Us</h2>
            <p>
              Selamat datang di Booking Lapangan Futsal! Kami menyediakan layanan booking lapangan futsal secara online untuk memudahkan Anda dalam merencanakan pertandingan atau bermain futsal bersama teman-teman.
            </p>
            <div className="contact">
              <span><i className="fas fa-envelope"></i> Email: info@bookingfutsal.com</span>
            </div>
            <div className="fText">Copyright © 2024 Bookinglapangan.</div>
          </div>

          <div className="footer-section links">
            <h2>Quick Links</h2>
            <ul>
              <li><a href="#">Lapangan</a></li>
              <li><a href="#">Cara Booking</a></li>
            </ul>
          </div>

          <div className="footer-section contact-form">
            <h2>Contact Us</h2>
            <form action="#" method="post">
              <input type="email" name="email" className="text-input contact-input" placeholder="Your email address..." />
              <textarea rows="4" name="message" className="text-input contact-input" placeholder="Your message..."></textarea>
              <button type="submit" className="btn btn-big contact-btn">
                <i className="fas fa-envelope"></i>
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
