import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const location = useLocation();
  const [selectedCourse, setSelectedCourse] = useState(location.state?.selectedCourse || "");
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="contact-page">
      <div className="page-header">
        <div className="container">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Ready to start your broadcasting journey? Get in touch with our team in Dharmapuri.
          </motion.p>
        </div>
      </div>

      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            <motion.div 
              className="contact-info-panel"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2>Get In <span className="text-secondary">Touch</span></h2>
              <p className="contact-intro">
                Whether you have a question about our courses, admissions, or just want to visit our studio, we are here for you.
              </p>

              <div className="info-block">
                <MapPin className="info-icon" size={24} />
                <div>
                  <h3>Visit Our Studio</h3>
                  <p>123 Broadcast Ave, Media City<br/>Dharmapuri, Tamil Nadu 636701</p>
                </div>
              </div>

              <div className="info-block">
                <Phone className="info-icon" size={24} />
                <div>
                  <h3>Call Us</h3>
                  <p>+91 98765 43210<br/>+91 98765 01234</p>
                </div>
              </div>

              <div className="info-block">
                <Mail className="info-icon" size={24} />
                <div>
                  <h3>Email Us</h3>
                  <p>info@fxmedia-dharmapuri.com<br/>admissions@fxmedia.com</p>
                </div>
              </div>

              <div className="info-block">
                <Clock className="info-icon" size={24} />
                <div>
                  <h3>Operating Hours</h3>
                  <p>Mon - Sat: 9:00 AM - 6:00 PM<br/>Sunday: Closed</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="contact-form-panel"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h2>Send a <span className="text-secondary">Message</span></h2>
              {isSubmitted ? (
                <div className="success-message" style={{ textAlign: 'center', padding: '3rem 0' }}>
                  <h3 style={{ color: 'var(--secondary-color)', marginBottom: '1rem', fontSize: '1.8rem' }}>Success!</h3>
                  <p style={{ fontSize: '1.1rem', color: 'var(--text-color)' }}>Thank you for visiting our institute. We have received your message and will get back to you shortly.</p>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input type="text" id="name" placeholder="John Doe" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" id="email" placeholder="john@example.com" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="course">Course of Interest</label>
                    <select id="course" value={selectedCourse} onChange={(e) => setSelectedCourse(e.target.value)}>
                      <option value="">Select a Course</option>
                      <option value="voice">Voice Modulation & Diction</option>
                      <option value="teleprompter">Teleprompter Reading</option>
                      <option value="presence">On-Camera Presence</option>
                      <option value="live">Live Reporting</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Your Message</label>
                    <textarea id="message" rows="5" placeholder="How can we help you?" required></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary submit-btn">Send Message</button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
