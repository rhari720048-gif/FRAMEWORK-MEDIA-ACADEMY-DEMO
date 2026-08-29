import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mic, MonitorPlay, Presentation, Video } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './Courses.css';

const Courses = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const courses = [
    {
      id: 1,
      value: "voice",
      title: "Voice Modulation & Diction",
      icon: <Mic size={40} />,
      image: "/course-voice.jpg",
      description: "Master the most critical tool for any broadcaster: your voice. This intensive module focuses on breath control, pitch, tone, pacing, and clear articulation.",
      syllabus: [
        "Fundamentals of breath control and diaphragmatic breathing",
        "Pitch and tone variations for different news types (Hard News vs. Soft News)",
        "Pronunciation, enunciation, and accent neutralization",
        "Pacing and emphasizing keywords in a script",
        "Handling vocal fatigue during long broadcasts"
      ]
    },
    {
      id: 2,
      value: "teleprompter",
      title: "Teleprompter Reading",
      icon: <MonitorPlay size={40} />,
      image: "/hero-studio.jpg",
      description: "Learn to read flawlessly from a teleprompter while maintaining eye contact with the audience and ensuring a natural, conversational delivery.",
      syllabus: [
        "Introduction to teleprompter software and hardware",
        "Reading ahead: The art of smooth delivery",
        "Maintaining natural eye contact and facial expressions",
        "Handling prompter failures and ad-libbing",
        "Speed control and coordinating with the prompter operator"
      ]
    },
    {
      id: 3,
      value: "presence",
      title: "On-Camera Presence & Body Language",
      icon: <Presentation size={40} />,
      image: "/hero-studio.jpg",
      description: "Develop a commanding and trustworthy on-screen persona. Learn how subtle changes in posture and expression can drastically alter audience perception.",
      syllabus: [
        "Posture, seating, and standing dynamics in the studio",
        "Understanding camera angles and framing",
        "Appropriate hand gestures and facial expressions",
        "Wardrobe, makeup, and styling for HD broadcasting",
        "Building rapport with co-anchors and guests"
      ]
    },
    {
      id: 4,
      value: "live",
      title: "Live Reporting & Field Journalism",
      icon: <Video size={40} />,
      image: "/about-training.jpg",
      description: "Step out of the studio. This module covers the challenges of live field reporting, interviewing techniques, and thinking on your feet.",
      syllabus: [
        "Structuring a live Piece-to-Camera (PTC)",
        "Handling breaking news without a script",
        "Effective interviewing techniques for field and studio",
        "Dealing with distractions and technical glitches on location",
        "Ethics in live reporting and objective journalism"
      ]
    }
  ];

  return (
    <div className="courses-page">
      <div className="page-header">
        <div className="container">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Training Modules
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Comprehensive, industry-aligned courses designed for aspiring media professionals.
          </motion.p>
        </div>
      </div>

      <section className="courses-content">
        <div className="container">
          {courses.map((course, index) => (
            <motion.div 
              key={course.id} 
              className={`course-module ${index % 2 !== 0 ? 'reverse' : ''}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="course-image-wrapper">
                <img src={course.image} alt={course.title} className="course-image" />
                <div className="course-icon-badge">
                  {course.icon}
                </div>
              </div>
              <div className="course-details">
                <h2>{course.title}</h2>
                <p className="course-desc">{course.description}</p>
                <div className="syllabus-box">
                  <h3>Module Highlights:</h3>
                  <ul>
                    {course.syllabus.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
                <button 
                  className="btn btn-outline" 
                  style={{marginTop: '1.5rem'}}
                  onClick={() => navigate('/contact', { state: { selectedCourse: course.value } })}
                >
                  Enroll Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Courses;
