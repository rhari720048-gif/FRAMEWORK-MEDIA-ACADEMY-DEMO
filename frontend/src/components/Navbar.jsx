import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Mic } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <NavLink to="/" className="nav-logo">
          <Mic className="logo-icon" size={28} />
          <span>FX Media</span>
        </NavLink>

        <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </div>

        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <NavLink to="/" className="nav-links" onClick={() => setIsOpen(false)}>
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" className="nav-links" onClick={() => setIsOpen(false)}>
              About Us
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/courses" className="nav-links" onClick={() => setIsOpen(false)}>
              Courses
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/admissions" className="nav-links" onClick={() => setIsOpen(false)}>
              Admissions
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/careers" className="nav-links" onClick={() => setIsOpen(false)}>
              Careers
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact" className="nav-links" onClick={() => setIsOpen(false)}>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
