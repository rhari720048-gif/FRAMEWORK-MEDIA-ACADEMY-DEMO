import React from 'react';
import { Mic, MapPin, Phone, Mail } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-section">
          <div className="footer-logo">
            <Mic className="logo-icon" size={24} />
            <span>FX Media</span>
          </div>
          <p className="footer-desc">
            The premier news reader and media training institute in Dharmapuri. Empowering voices for the modern broadcasting era.
          </p>
        </div>
        
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/courses">Courses</a></li>
            <li><a href="/admissions">Admissions</a></li>
            <li><a href="/careers">Careers</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Contact Info</h3>
          <ul className="contact-info">
            <li><MapPin size={18} /> 123 Broadcast Ave, Dharmapuri, Tamil Nadu</li>
            <li><Phone size={18} /> +91 98765 43210</li>
            <li><Mail size={18} /> info@fxmedia-dharmapuri.com</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} FX Media Training Institute. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
