import React from 'react';

export default function Contact() {
  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Contact Me</h2>
      <p className="text-center mb-5 fs-5">
        Feel free to reach out! You can contact me through the details below.
      </p>

      <div className="row">
        <div className="col-md-6 mb-4">
          <div >
            <h5>Email:</h5>
            <p>daniyaljumshaid74@gmail.com</p>

            <h5>GitHub:</h5>
            <p><a href="https://github.com/daniyaljumshaid" target="_blank" rel="noopener noreferrer">Daniyal Jumshaid</a></p>

            <h5>LinkedIn:</h5>
            <p><a href="https://www.linkedin.com/in/daniyal-jumshaid-b37516247" target="_blank" rel="noopener noreferrer">Daniyal Jumshaid</a></p>
          </div>
        </div>

      
      </div>
    </div>
  );
}
