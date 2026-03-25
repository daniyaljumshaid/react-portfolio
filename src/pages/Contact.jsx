import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const formsEndpoint = process.env.REACT_APP_FORMSPREE_ENDPOINT;

  const openMailtoFallback = () => {
    const recipient = "daniyaljumshaid74@gmail.com";
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("saving");
    setErrorMessage("");

    if (!formsEndpoint) {
      openMailtoFallback();
      setStatus("success");
      return;
    }

    try {
      const response = await fetch(formsEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message
        })
      });

      if (!response.ok) {
        const errorPayload = await response.json().catch(() => ({}));
        const firstError = errorPayload?.errors?.[0]?.message;
        throw new Error(firstError || "Failed to submit contact form");
      }

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      openMailtoFallback();
      setStatus("error");
      setErrorMessage(error.message || "Could not send directly. Your email app was opened as a fallback.");
    }
  };

  const handleReset = () => {
    setFormData({ name: "", email: "", message: "" });
    setStatus("idle");
    setErrorMessage("");
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="container py-5 text-white">
      {/* Page Header */}
      <header className="text-center mb-4">
        <h1 className="fw-bold text-info" style={{ fontSize: "clamp(1.75rem, 5vw, 2.5rem)" }}>Contact</h1>
        <p className="lead text-light opacity-75" style={{ fontSize: "clamp(0.95rem, 3vw, 1.1rem)" }}>
          Let's connect for MERN stack projects, internships, or collaboration opportunities
        </p>
      </header>

      <div className="row g-5">
        {/* LEFT SECTION: Contact Info */}
        <div className="col-lg-5">
          <div 
            className="p-4 rounded-3 shadow-lg h-100" 
            style={{ 
              background: 'rgba(255,255,255,0.03)', 
              border: '1px solid rgba(255,255,255,0.1)',
              backdropFilter: 'blur(10px)'
            }}
          >
            <h2 className="text-info mb-4 h4">
              <span role="img" aria-hidden="true">📬</span> Get In Touch
            </h2>
            
            <div className="mb-4">
              <h3 className="text-info small fw-bold text-uppercase mb-2">Email</h3>
              <a 
                href="mailto:daniyaljumshaid74@gmail.com" 
                className="text-light text-decoration-none d-flex align-items-center gap-2"
                aria-label="Send email to daniyaljumshaid74@gmail.com"
              >
                <span className="text-info">✉</span>
                daniyaljumshaid74@gmail.com
              </a>
            </div>
            
            <div className="mb-4">
              <h3 className="text-info small fw-bold text-uppercase mb-2">GitHub</h3>
              <a 
                href="https://github.com/daniyaljumshaid" 
                className="text-light text-decoration-none d-flex align-items-center gap-2"
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Visit GitHub profile (opens in new tab)"
              >
                <span className="text-info">🔗</span>
                github.com/daniyaljumshaid
              </a>
            </div>
            
            <div className="mb-4">
              <h3 className="text-info small fw-bold text-uppercase mb-2">LinkedIn</h3>
              <a 
                href="https://www.linkedin.com/in/daniyal-jumshaid-b37516247" 
                className="text-light text-decoration-none d-flex align-items-center gap-2"
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Visit LinkedIn profile (opens in new tab)"
              >
                <span className="text-info">💼</span>
                Daniyal Jumshaid
              </a>
            </div>


          </div>
        </div>

        {/* RIGHT SECTION: Contact Form */}
        <div className="col-lg-7">
          <div 
            className="card border-0 shadow-lg overflow-hidden"
            style={{ 
              background: 'rgba(15, 32, 39, 0.8)',
              border: '1px solid rgba(13, 202, 240, 0.2)'
            }}
          >
            {/* Card Header */}
            <div 
              className="card-header py-3"
              style={{ background: 'rgba(13, 202, 240, 0.1)', borderBottom: '1px solid rgba(13, 202, 240, 0.2)' }}
            >
              <h2 className="card-title text-info mb-0 h5">
                <span role="img" aria-hidden="true">📝</span> Send a Message
              </h2>
              
            </div>

            <div className="card-body p-4">
              {/* IDLE STATE: Show Form */}
              {status === "idle" && (
                <form onSubmit={handleSubmit} className="animate__fadeIn">
                  <div className="mb-4">
                    <label htmlFor="contactName" className="form-label text-info fw-bold required">
                      Full Name
                    </label>
                    <input 
                      type="text" 
                      id="contactName"
                      className="form-control form-control-lg bg-dark text-white border-secondary" 
                      placeholder="Enter your full name"
                      value={formData.name}
                      required 
                      autoComplete="name"
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      aria-describedby="nameHelp"
                    />
                    <small id="nameHelp" className="text-muted">
                      This helps me address your message properly
                    </small>
                  </div>

                  <div className="mb-4">
                    <label htmlFor="contactEmail" className="form-label text-info fw-bold required">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="contactEmail"
                      className="form-control form-control-lg bg-dark text-white border-secondary"
                      placeholder="Enter your email address"
                      value={formData.email}
                      required
                      autoComplete="email"
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      aria-describedby="emailHelp"
                    />
                    <small id="emailHelp" className="text-muted">
                      I will use this to reply to your message
                    </small>
                  </div>

                  <div className="mb-4">
                    <label htmlFor="contactMessage" className="form-label text-info fw-bold required">
                      Message
                    </label>
                    <textarea 
                      id="contactMessage"
                      className="form-control bg-dark text-white border-secondary" 
                      rows="3"
                      placeholder="Leave a message or feedback..."
                      value={formData.message}
                      required
                      onChange={(e) => handleInputChange('message', e.target.value)}
                    />
                  </div>

                  <button 
                    type="submit" 
                    className="btn btn-info btn-lg w-100 fw-bold py-3 text-dark"
                    disabled={!formData.name || !formData.email || !formData.message}
                    aria-describedby="submitHelp"
                  >
                    <span role="img" aria-hidden="true">📨</span> Send Message
                  </button>
                  <small id="submitHelp" className="text-muted d-block text-center mt-2">
                    Share your project details and I will get back to you soon
                  </small>
                </form>
              )}

              {/* SAVING STATE: Show Loading */}
              {status === "saving" && (
                <div className="text-center py-5 animate__fadeIn" role="status" aria-live="polite">
                  <div 
                    className="spinner-border text-info mb-4" 
                    style={{ width: "4rem", height: "4rem" }}
                    aria-hidden="true"
                  ></div>
                  <h3 className="text-info mb-2 animate-pulse">Sending...</h3>
                  <p className="text-muted mb-0">Submitting your contact message</p>
                  <div className="progress mt-4 mx-auto" style={{ maxWidth: '300px', height: '6px' }}>
                    <div 
                      className="progress-bar progress-bar-striped progress-bar-animated bg-info" 
                      style={{ width: '100%' }}
                    ></div>
                  </div>
                </div>
              )}

              {/* SUCCESS STATE: Confirmation */}
              {status === "success" && (
                <div className="text-center py-4 success-message" role="alert" aria-live="polite">
                  <div 
                    className="display-3 mb-3"
                    style={{ animation: 'successPop 0.5s ease' }}
                  >
                    ✅
                  </div>
                  <h3 className="text-success fw-bold mb-4">Message Sent!</h3>

                  <p className="text-muted mt-4 mb-0">
                    Thanks for reaching out. If direct send is not configured, your email app opens instead.
                  </p>

                  <button 
                    className="btn btn-outline-info mt-4 px-5 fw-bold" 
                    onClick={handleReset}
                    aria-label="Reset form to send another message"
                  >
                    <span role="img" aria-hidden="true">🔄</span> Send Another Message
                  </button>
                </div>
              )}

              {status === "error" && (
                <div className="text-center py-4" role="alert" aria-live="polite">
                  <div className="display-4 mb-3">!</div>
                  <h3 className="text-warning fw-bold mb-3">Message Not Sent</h3>
                  <p className="text-muted mb-0">{errorMessage}</p>
                  <p className="text-muted mt-2 mb-0">Your default email app should open with your message prefilled.</p>
                  <button
                    className="btn btn-outline-info mt-4 px-5 fw-bold"
                    onClick={handleReset}
                    aria-label="Back to contact form"
                  >
                    Back to Form
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}