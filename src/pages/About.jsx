import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaGitAlt,
  FaNodeJs,
} from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";

export default function About() {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        {/* About Text */}
        <div className="col-lg-10">
          <header className="mb-5 text-center">
            <h2 className="display-5 fw-bold text-info">About Me</h2>
            <p className="lead text-light opacity-75">
              Passionate MERN Stack Developer building scalable web applications.
            </p>
          </header>

          <div className="card border-0 shadow-lg" 
            style={{ 
              padding: "clamp(1.5rem, 5vw, 2rem)",
              background: 'rgba(255,255,255,0.03)',
              borderTop: '4px solid #0dcaf0',
              backdropFilter: 'blur(10px)'
            }}
          >
            <h3 className="h5 h-sm-4 text-info mb-3">Intro:</h3>
            <p className="mb-4 text-light">
              Hi, I'm <strong>Daniyal Jumshaid</strong> - a MERN Stack Developer passionate about
              building fast, scalable, and user-focused web applications.
            </p>
            
            <h3 className="h4 text-info mb-3">Current Focus:</h3>
            <p className="mb-4 text-light">
              I build full-stack projects using MongoDB, Express.js, React, and Node.js. Recently,
              I developed an e-commerce website in MERN, where I worked on frontend UI, backend APIs,
              and database integration.
            </p>
            
            <h3 className="h4 text-info mb-3">Educational Background:</h3>
            <p className="mb-4 text-light">
              I'm currently studying BSCS at UET Lahore. My academic and personal projects in C++ and
              JavaScript have helped me develop strong programming fundamentals and problem-solving skills.
            </p>
            
            <h3 className="h4 text-info mb-3">Goals:</h3>
            <p className="mb-5 text-light">
              My goal is to grow as a professional full-stack engineer by building real-world products
              and continuously improving system design and backend development skills.
            </p>
            
            <div className="border-top border-secondary pt-4">
              <h5 className="text-info text-uppercase fw-bold mb-3" style={{ fontSize: "clamp(0.9rem, 2.5vw, 1rem)" }}>Tech Stack:</h5>
              <div className="d-flex flex-wrap gap-2 gap-sm-4" style={{ fontSize: "clamp(1.5rem, 5vw, 2rem)" }}>
                <FaHtml5 title="HTML5" color="#e34c26" style={{ transition: 'transform 0.2s', cursor: 'pointer' }} className="tech-icon" />
                <FaCss3Alt title="CSS3" color="#264de4" style={{ transition: 'transform 0.2s', cursor: 'pointer' }} className="tech-icon" />
                <FaJs title="JavaScript" color="#f0db4f" style={{ transition: 'transform 0.2s', cursor: 'pointer' }} className="tech-icon" />
                <FaReact title="React" color="#61DBFB" style={{ transition: 'transform 0.2s', cursor: 'pointer' }} className="tech-icon" />
                <SiMongodb title="MongoDB" color="#47A248" style={{ transition: 'transform 0.2s', cursor: 'pointer' }} className="tech-icon" />
                <SiExpress title="Express.js" color="#ffffff" style={{ transition: 'transform 0.2s', cursor: 'pointer' }} className="tech-icon" />
                <FaNodeJs title="Node.js" color="#68A063" style={{ transition: 'transform 0.2s', cursor: 'pointer' }} className="tech-icon" />
                <FaBootstrap title="Bootstrap" color="#7952b3" style={{ transition: 'transform 0.2s', cursor: 'pointer' }} className="tech-icon" />
                <FaGitAlt title="Git" color="#f1502f" style={{ transition: 'transform 0.2s', cursor: 'pointer' }} className="tech-icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
