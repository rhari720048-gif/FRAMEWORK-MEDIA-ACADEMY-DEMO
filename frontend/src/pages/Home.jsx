import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Video, Mic, MonitorPlay, Star, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Home.css';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const highlightsRef = useRef(null);

  useEffect(() => {
    // Scroll animation for highlights
    const highlights = highlightsRef.current.children;
    gsap.fromTo(highlights, 
      { y: 50, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        stagger: 0.2, 
        duration: 0.8,
        scrollTrigger: {
          trigger: highlightsRef.current,
          start: "top 80%",
        }
      }
    );
  }, []);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-container">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="badge">Dharmapuri's #1 Media Institute</span>
            <h1 className="hero-title">Master the Art of <br/><span className="text-secondary">News Reading</span></h1>
            <p className="hero-subtitle">
              Professional training for aspiring anchors, journalists, and media presenters. 
              Step into the studio with confidence, pristine voice modulation, and unmatched on-camera presence.
            </p>
            <div className="hero-cta">
              <Link to="/courses" className="btn btn-primary">Explore Courses <ArrowRight size={18} style={{verticalAlign: 'middle', marginLeft: '5px'}} /></Link>
              <Link to="/contact" className="btn btn-outline" style={{marginLeft: '15px'}}>Join Now</Link>
            </div>
          </motion.div>
          <motion.div 
            className="hero-image-wrapper"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img src="/hero-studio.jpg" alt="News Broadcasting Studio" className="hero-image" />
          </motion.div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="highlights-section bg-light">
        <div className="container">
          <h2 className="section-title">Why Choose FX Media?</h2>
          <div className="highlights-grid" ref={highlightsRef}>
            <div className="highlight-card">
              <div className="icon-wrapper"><Video size={32} /></div>
              <h3>State-of-the-Art Studios</h3>
              <p>Practice in real-world broadcast environments with professional cameras, lighting, and teleprompter setups.</p>
            </div>
            <div className="highlight-card">
              <div className="icon-wrapper"><Mic size={32} /></div>
              <h3>Voice Modulation</h3>
              <p>Learn to control your pitch, tone, and pacing. Master the authoritative yet engaging voice required for modern news.</p>
            </div>
            <div className="highlight-card">
              <div className="icon-wrapper"><MonitorPlay size={32} /></div>
              <h3>Live Reporting</h3>
              <p>Hands-on training for breaking news scenarios, unscripted segments, and field reporting techniques.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mentors Section */}
      <section className="mentors-section">
        <div className="container">
          <h2 className="section-title">Meet Our <span className="text-secondary">Mentors</span></h2>
          <div className="mentors-grid">
            <motion.div 
              className="mentor-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <img src="https://api.dicebear.com/7.x/micah/svg?seed=Felix&backgroundColor=f1f5f9" alt="Rajesh Kumar" className="mentor-image" />
              <h3>Rajesh Kumar</h3>
              <p className="mentor-role">Senior News Anchor</p>
              <p className="mentor-desc">With 15+ years of prime-time anchoring, Rajesh brings unparalleled expertise in voice modulation and on-camera presence.</p>
            </motion.div>
            <motion.div 
              className="mentor-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <img src="https://api.dicebear.com/7.x/micah/svg?seed=Jasmine&backgroundColor=f1f5f9" alt="Priya Sharma" className="mentor-image" />
              <h3>Priya Sharma</h3>
              <p className="mentor-role">Field Journalism Expert</p>
              <p className="mentor-desc">A veteran reporter known for her fearless live coverage. Priya trains students in unscripted, high-pressure field reporting.</p>
            </motion.div>
            <motion.div 
              className="mentor-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <img src="https://api.dicebear.com/7.x/micah/svg?seed=Oliver&backgroundColor=f1f5f9" alt="Karthik Raj" className="mentor-image" />
              <h3>Karthik Raj</h3>
              <p className="mentor-role">Technical Director</p>
              <p className="mentor-desc">Master of the studio floor. Karthik teaches the technical aspects of teleprompter reading and multi-camera setups.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section bg-light">
        <div className="container">
          <h2 className="section-title">Success <span className="text-secondary">Stories</span></h2>
          <div className="testimonials-grid">
            {[1, 2, 3].map((item, index) => (
              <motion.div 
                key={index}
                className="testimonial-card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="stars">
                  <Star size={16} fill="var(--secondary-color)" color="var(--secondary-color)" />
                  <Star size={16} fill="var(--secondary-color)" color="var(--secondary-color)" />
                  <Star size={16} fill="var(--secondary-color)" color="var(--secondary-color)" />
                  <Star size={16} fill="var(--secondary-color)" color="var(--secondary-color)" />
                  <Star size={16} fill="var(--secondary-color)" color="var(--secondary-color)" />
                </div>
                <p className="testimonial-text">
                  "FX Media completely transformed my career. The hands-on training with professional equipment gave me the confidence to ace my audition. I am now a full-time anchor at a leading regional news channel!"
                </p>
                <div className="student-info">
                  <div className="student-avatar"></div>
                  <div>
                    <h4>Student {item}</h4>
                    <p>News Anchor, City TV</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Teaser */}
      <section className="about-teaser">
        <div className="container">
          <div className="teaser-content">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2>Empowering Voices in <span className="text-secondary">Dharmapuri</span></h2>
              <p>
                FX Media was founded with a singular vision: to bridge the gap between raw talent and professional broadcasting standards. We understand the dynamic nature of the media industry. Our expert trainers bring decades of real-world experience from top news channels right to our state-of-the-art facility in Dharmapuri.
              </p>
              <Link to="/about" className="btn btn-outline" style={{marginTop: '20px'}}>Read Our Story</Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
