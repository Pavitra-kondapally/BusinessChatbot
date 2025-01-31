import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import "./IntegrationTesting.css";

function IntegrationTesting() {
  const [showIntegrationOptions, setShowIntegrationOptions] = useState(false);
  const navigate = useNavigate();

  const handleTestChatbot = () => {
    navigate("/ecommerce");
  };

  const handleTestIntegration = () => {
    // Simulating API call for success/failure
    const integrationSuccess = Math.random() > 0.8; // 50% chance of success

    if (integrationSuccess) {
      // Open SuccessPage in a new tab
      window.open(window.location.origin + "/success", "_blank");
    } else {
      // Open FailurePage in a new tab
      window.open(window.location.origin + "/failure", "_blank");
    }
  };

  return (
    <div className="integration-card">
      <div className="topbar">
        Chatbot not working as intended? <a href="#">Share feedback</a>
      </div>
      <h2 className="integration-heading">Chatbot Integration & Testing</h2>

      <button type="button" className="test-btn" onClick={handleTestChatbot}>
        Test Chatbot
      </button>

      <button
        type="button"
        className="test-btn"
        onClick={() => setShowIntegrationOptions(!showIntegrationOptions)}
      >
        Integrate on your website
      </button>

      <button type="button" className="test-btn" onClick={handleTestIntegration}>
        Test Integration
      </button>

      {showIntegrationOptions && (
        <div className="integration-options">
          <button
            type="button"
            className="option-btn"
            onClick={() =>
              alert("Copy the integration code and paste it in your website's <head> section.")
            }
          >
            View Instructions
          </button>
          <button
            type="button"
            className="option-btn"
            onClick={() => alert("Instructions sent to your developer!")}
          >
            Mail Instructions
          </button>
        </div>
      )}
    </div>
  );
}

export default IntegrationTesting;
