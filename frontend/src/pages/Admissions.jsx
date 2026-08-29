import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FileText, Mic, CheckCircle, GraduationCap } from 'lucide-react';
import './Admissions.css';

const Admissions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const journeySteps = [
    {
      id: 1,
      title: "Step 1: Application Form",
      icon: <FileText size={32} />,
      desc: "Fill out our online application form with your basic details, educational background, and the course you are interested in."
    },
    {
      id: 2,
      title: "Step 2: Voice Test & Audition",
      icon: <Mic size={32} />,
      desc: "Shortlisted candidates will be called for a basic voice test and screen test at our Dharmapuri studio to assess raw potential."
    },
    {
      id: 3,
      title: "Step 3: Personal Interview",
      icon: <CheckCircle size={32} />,
      desc: "A one-on-one session with our senior mentors to understand your passion for journalism and career goals."
    },
    {
      id: 4,
      title: "Step 4: Enrollment & Onboarding",
      icon: <GraduationCap size={32} />,
      desc: "Congratulations! Complete the fee payment and join the orientation session to begin your journey with FX Media."
    }
  ];

  return (
    <div className="admissions-page">
      <div className="page-header">
        <div className="container">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Admissions Journey
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Your path to becoming a professional broadcaster starts here.
          </motion.p>
        </div>
      </div>

      <section className="journey-section">
        <div className="container">
          <div className="journey-timeline">
            {journeySteps.map((step, index) => (
              <motion.div 
                className="timeline-item"
                key={step.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="timeline-icon">
                  {step.icon}
                </div>
                <div className="timeline-content">
                  <h2>{step.title}</h2>
                  <p>{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="admission-cta text-center">
            <h2>Ready to take the first step?</h2>
            <p>Our next batch starts soon. Limited seats available for personalized training.</p>
            <a href="/contact" className="btn btn-primary" style={{marginTop: '1.5rem', padding: '1rem 2rem'}}>Apply Now</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admissions;
