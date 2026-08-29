import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Video, Mic, PenTool } from 'lucide-react';
import './Careers.css';

const Careers = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const jobs = [
    {
      id: 1,
      title: "News Anchor / Presenter",
      type: "Full-Time",
      icon: <Mic size={24} />,
      desc: "Looking for an energetic, confident news presenter to host our prime-time bulletin.",
    },
    {
      id: 2,
      title: "Field Reporter",
      type: "Full-Time",
      icon: <Video size={24} />,
      desc: "Join our dynamic reporting team in Dharmapuri. Must be ready for on-the-spot live reporting.",
    },
    {
      id: 3,
      title: "Content Writer / Script Editor",
      type: "Part-Time",
      icon: <PenTool size={24} />,
      desc: "Draft compelling news scripts and edit content for our daily broadcasts.",
    },
    {
      id: 4,
      title: "Broadcast Technician",
      type: "Full-Time",
      icon: <Briefcase size={24} />,
      desc: "Handle studio equipment, teleprompters, and lighting systems during live broadcasts.",
    }
  ];

  return (
    <div className="careers-page">
      <div className="page-header">
        <div className="container">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Careers at FX Media
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Join our passionate team and help shape the future of media and broadcasting.
          </motion.p>
        </div>
      </div>

      <section className="careers-section">
        <div className="container">
          <div className="careers-intro">
            <h2>Current <span className="text-secondary">Openings</span></h2>
            <p>We are always on the lookout for talented individuals. If you have the passion for media, we have the platform for you.</p>
          </div>

          <div className="jobs-grid">
            {jobs.map((job, index) => (
              <motion.div 
                className="job-card" 
                key={job.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="job-icon">{job.icon}</div>
                <h3>{job.title}</h3>
                <span className="job-type">{job.type}</span>
                <p>{job.desc}</p>
                <button className="btn btn-outline" style={{width: '100%'}}>Apply Now</button>
              </motion.div>
            ))}
          </div>

          <div className="general-application">
            <h3>Don't see a fit?</h3>
            <p>Send your resume and showreel to <strong>careers@fxmedia-dharmapuri.com</strong> and we'll keep you in mind for future roles.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
