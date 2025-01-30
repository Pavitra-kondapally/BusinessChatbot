import React from 'react';
import './SuccessPage.css'; // Add any styles you need

function SuccessPage() {
  return (
    <div className="success-page">
      <h1>Integration Successful!</h1>
      <p>Your chatbot is now integrated and ready to go!</p>

      <div className="action-buttons">
        <button onClick={() => window.location.href = '/admin-panel'}>Explore Admin Panel</button>
        <button onClick={() => window.location.href = '/start-chatbot'}>Start talking to your chatbot</button>
      </div>
      
      <div className="social-buttons">
        <button onClick={() => window.location.href = 'https://facebook.com/sharer/sharer.php?u=' + window.location.href}>
          Share on Facebook
        </button>
        <button onClick={() => window.location.href = 'https://twitter.com/share?url=' + window.location.href}>
          Share on Twitter
        </button>
      </div>
    </div>
  );
}

export default SuccessPage;
