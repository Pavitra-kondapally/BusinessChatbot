import React from 'react';
import './FailurePage.css';

function FailurePage() {
  return (
    <div className="failure-container">
      <h1>Integration Failed</h1>
      <p>It seems the integration process didn't work. Please try again or contact support.</p>

      <button className="retry-btn" onClick={() => window.location.reload()}>Try Again</button>
      <button className="contact-support-btn" onClick={() => alert("Contacting support...")}>Contact Support</button>
    </div>
  );
}

export default FailurePage;
