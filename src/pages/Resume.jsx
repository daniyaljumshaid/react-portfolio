import React, { useState } from 'react';

export default function Resume() {
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = async (e) => {
    e.preventDefault();
    setIsDownloading(true);
    try {
      const response = await fetch('/Resume.pdf');
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Daniyal_Jumshaid_Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
      
      setIsDownloading(false);
      setDownloaded(true);
      setTimeout(() => setDownloaded(false), 3000);
    } catch (error) {
      console.error('Download failed:', error);
      setIsDownloading(false);
    }
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          {/* Header */}
          <header className="text-center mb-5">
            <h1 className="fw-bold text-info" style={{ fontSize: "clamp(1.75rem, 5vw, 3rem)" }}>My Resume</h1>
            <p className="lead text-light opacity-75" style={{ fontSize: "clamp(0.95rem, 3vw, 1.1rem)" }}>
              Download my resume to explore my MERN stack skills and project experience
            </p>
          </header>

          {/* Resume Card */}
          <div 
            className="card border-0 shadow-lg mx-auto"
            style={{ 
              maxWidth: '500px',
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.1)',
              width: '100%',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}
          >
            <div 
              className="card-header text-center py-4"
              style={{ background: 'rgba(13, 202, 240, 0.1)', borderBottom: '1px solid rgba(13, 202, 240, 0.2)' }}
            >
              <div className="display-1 mb-2">📄</div>
              <h2 className="text-info h4 mb-0">Daniyal Jumshaid</h2>
              <p className="text-light opacity-75 mb-0">MERN Stack Developer</p>
            </div>
            
            <div className="card-body p-4 text-center">
              <p className="text-light mb-4">
                Click below to download my latest resume in PDF format.
              </p>

              {/* Download Button with States */}
              {!isDownloading && !downloaded && (
                <button 
                  onClick={handleDownload}
                  className="btn btn-info btn-lg fw-bold px-5 py-3 text-dark"
                  aria-label="Download resume as PDF"
                >
                  <span role="img" aria-hidden="true">📥</span> Download Resume
                </button>
              )}

              {isDownloading && (
                <button 
                  className="btn btn-info btn-lg fw-bold px-5 py-3 text-dark" 
                  disabled
                  aria-live="polite"
                >
                  <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                  Preparing Download...
                </button>
              )}

              {downloaded && (
                <div className="text-center" role="alert" aria-live="polite">
                  <button className="btn btn-success btn-lg fw-bold px-5 py-3">
                    <span role="img" aria-hidden="true">✅</span> Download Started!
                  </button>
                  <p className="text-success small mt-2 mb-0">
                    Check your downloads folder
                  </p>
                </div>
              )}

              {/* Resume Highlights */}
              <div className="mt-4 pt-4 border-top border-secondary text-start">
                <h3 className="text-info h6 mb-3">Resume Highlights:</h3>
                <ul className="list-unstyled text-light small">
                  <li className="mb-2">✓ <strong>Education:</strong> BSCS at UET Lahore</li>
                  <li className="mb-2">✓ <strong>Skills:</strong> MongoDB, Express.js, React, Node.js, JavaScript</li>
                  <li className="mb-2">✓ <strong>Experience:</strong> MERN E-Commerce Website + Academic & Personal Projects</li>
                  <li className="mb-0">✓ <strong>Focus:</strong> Building scalable full-stack web applications</li>
                </ul>
              </div>
            </div>

            <div className="card-footer bg-transparent text-center py-3" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
              <small className="text-light opacity-75">
                Last updated: March 2026 • PDF Format
              </small>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
