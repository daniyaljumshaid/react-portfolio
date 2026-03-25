import React from "react";
import { Link } from "react-router-dom";
import mypic from "../assets/mypic.jpg"; // update the filename

export default function Home() {
  return (
    <div
      className="d-flex align-items-center justify-content-center text-white"
      style={{
        minHeight: "calc(100vh - 60px)",
        background: "linear-gradient(to right, #0f2027, #203a43, #2c5364)",
        padding: "2rem",
      }}
    >
      <div className="container">
        <div className="row align-items-center justify-content-center">
          {/* Hero Content */}
          <div className="col-lg-8 text-center">
            {/* Profile Image */}
            <img
              src={mypic}
              alt="Daniyal Jumshaid - MERN Stack Developer"
              className="rounded-circle mb-4 shadow-lg"
              style={{ 
                width: "clamp(120px, 25vw, 150px)",
                height: "clamp(120px, 25vw, 150px)", 
                objectFit: "cover", 
                border: "4px solid #0dcaf0",
                animation: "fadeIn 1s ease"
              }}
            />
            
            {/* Name & Title */}
            <h1 className="fw-bold mb-2" style={{ fontSize: "clamp(1.75rem, 6vw, 3.5rem)" }}>
              Hi, I'm <span className="text-info">Daniyal Jumshaid</span>
            </h1>
            <p className="lead text-light opacity-75 mb-4" style={{ fontSize: "clamp(1rem, 4vw, 1.5rem)" }}>
              MERN Stack Developer | Building Full-Stack Web Applications
            </p>

            {/* CTA Buttons - Clear Visual Hierarchy */}
            <div className="d-flex flex-column flex-sm-row justify-content-center gap-2 gap-sm-3 mb-5">
              <Link 
                to="/projects" 
                className="btn btn-info fw-bold text-dark" 
                style={{ padding: "0.75rem 1.5rem", fontSize: "clamp(0.9rem, 3vw, 1.1rem)" }}
                aria-label="View my project portfolio"
              >
                <span role="img" aria-hidden="true">🚀</span> See My Work
              </Link>
              <Link 
                to="/contact" 
                className="btn btn-outline-light" 
                style={{ padding: "0.75rem 1.5rem", fontSize: "clamp(0.9rem, 3vw, 1.1rem)" }}
                aria-label="Go to contact page"
              >
                <span role="img" aria-hidden="true">✉️</span> Contact Me
              </Link>
            </div>

            {/* Quick Links - Recognition over Recall */}
            <div className="d-flex flex-wrap justify-content-center gap-4 mb-4">
              {[
                { to: "/about", icon: "👤", label: "About Me" },
                { to: "/projects", icon: "💻", label: "Projects" },
                { to: "/resume", icon: "📄", label: "Resume" },
              ].map((link, idx) => (
                <Link 
                  key={idx}
                  to={link.to}
                  className="text-decoration-none text-center"
                  style={{ transition: 'transform 0.2s' }}
                >
                  <div 
                    className="rounded-circle bg-dark d-flex align-items-center justify-content-center mx-auto mb-2 shadow"
                    style={{ 
                      width: '60px', 
                      height: '60px', 
                      border: '2px solid rgba(13, 202, 240, 0.3)',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <span className="fs-4" role="img" aria-hidden="true">{link.icon}</span>
                  </div>
                  <small className="text-light">{link.label}</small>
                </Link>
              ))}
            </div>

            {/* Social Links */}
            <div className="d-flex justify-content-center gap-3 mt-4">
              <a 
                href="https://github.com/daniyaljumshaid" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-outline-info btn-sm px-3"
                aria-label="Visit GitHub profile (opens in new tab)"
              >
                GitHub
              </a>
              <a 
                href="https://www.linkedin.com/in/daniyal-jumshaid-b37516247" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-outline-info btn-sm px-3"
                aria-label="Visit LinkedIn profile (opens in new tab)"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
