import React from 'react';

export default function Resume() {
  return (
    <div className="container py-5 d-flex flex-column align-items-center justify-content-center text-center">
      <h2 className="mb-4">My Resume</h2>

      <p className="mb-4 fs-5">
        Click the button below to download my resume (PDF format).
      </p>

      <a href="/resume.pdf" download className="btn btn-primary btn-lg">
        📄 Download Resume
      </a>
    </div>
  );
}
