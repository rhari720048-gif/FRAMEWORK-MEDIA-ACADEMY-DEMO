import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Award, Users, BookOpen, Clock } from 'lucide-react';
import './About.css';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about-page">
      <div className="page-header">
        <div className="container">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            About FX Media
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Pioneering the future of broadcasting from Dharmapuri.
          </motion.p>
        </div>
      </div>

      <section className="about-content">
        <div className="container about-grid">
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2>Our <span className="text-secondary">Story</span></h2>
            <p>
              Founded in the vibrant city of Dharmapuri, FX Media has quickly established itself as the premier institution for media and journalism training. Our inception was driven by a single, powerful realization: while raw talent is abundant, the polished, authoritative presence required for modern broadcasting is an art that must be meticulously cultivated.
            </p>
            <p>
              We bring the standards of top-tier national newsrooms to local talent. Our founders and instructors are seasoned veterans of the media industry, having spent decades in front of the camera, breaking stories, and leading news desks. We impart this invaluable real-world experience to our students.
            </p>
            <p>
              At FX Media, we don't just teach you how to read a script. We teach you how to command the screen, modulate your voice for impact, and handle the high-pressure environment of live television with absolute grace and professionalism.
            </p>
          </motion.div>
          <motion.div 
            className="about-image-wrapper"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img src="/about-training.jpg" alt="FX Media Training Session" className="about-image" />
          </motion.div>
        </div>
      </section>

      <section className="stats-section">
        <div className="container stats-grid">
          <div className="stat-card">
            <Award size={48} className="stat-icon" />
            <h3 className="stat-number">15+</h3>
            <p>Years Industry Experience</p>
          </div>
          <div className="stat-card">
            <Users size={48} className="stat-icon" />
            <h3 className="stat-number">500+</h3>
            <p>Successful Alumni</p>
          </div>
          <div className="stat-card">
            <BookOpen size={48} className="stat-icon" />
            <h3 className="stat-number">12</h3>
            <p>Specialized Modules</p>
          </div>
          <div className="stat-card">
            <Clock size={48} className="stat-icon" />
            <h3 className="stat-number">100%</h3>
            <p>Practical Training</p>
          </div>
        </div>
      </section>

      <section className="vision-mission bg-light">
        <div className="container">
          <div className="vm-grid">
            <div className="vm-card">
              <h2>Our <span className="text-secondary">Vision</span></h2>
              <p>
                To be the gold standard in media education in South India, consistently producing journalists and news anchors who set benchmarks in credibility, articulation, and on-screen presence. We aim to transform Dharmapuri into a hub for exceptional broadcasting talent.
              </p>
            </div>
            <div className="vm-card">
              <h2>Our <span className="text-secondary">Mission</span></h2>
              <p>
                To provide state-of-the-art facilities, rigorous curriculum, and personalized mentorship to every aspiring media professional. We are committed to fostering an environment of excellence, ethics, and continuous learning, ensuring our graduates are instantly ready for the newsroom.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
