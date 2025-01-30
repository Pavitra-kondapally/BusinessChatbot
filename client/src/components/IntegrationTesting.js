import React, { useState } from "react";
import { useNavigate } from "react-router-dom";  // for navigation
import "./IntegrationTesting.css";

function IntegrationTesting() {
  const [showIntegrationOptions, setShowIntegrationOptions] = useState(false);
  const navigate = useNavigate();  // Initialize the navigate function

  const handleTestChatbot = () => {
    // Redirecting to the e-commerce page with the chatbot
    navigate("/ecommerce");  // This will navigate to the EcommercePage component
  };

  const handleTestIntegration = () => {
    // Simulating API call to check integration success
    const integrationSuccess = Math.random() > 0.8; // 50% chance of success

    if (integrationSuccess) {
      // Open SuccessPage in new tab on successful integration
      window.open("/success", "_blank"); 
    } else {
      // Open FailurePage in new tab on failed integration
      window.open("/failure", "_blank"); 
    }
  };

  return (
    <div className="integration-card">
      <div className="topbar">
        Chatbot not working as intended? <a href="#">Share feedback</a>
      </div>
      <h2 className="integration-heading">Chatbot Integration & Testing</h2>

      {/* Test Chatbot Button */}
      <button type="button" className="test-btn" onClick={handleTestChatbot}>
        Test Chatbot
      </button>

      {/* Integrate on your website Button (2nd button) */}
      <button
        type="button"
        className="test-btn"
        onClick={() => setShowIntegrationOptions(!showIntegrationOptions)}
      >
        Integrate on your website
      </button>

      {/* Test Integration Button (3rd button) */}
      <button type="button" className="test-btn" onClick={handleTestIntegration}>
        Test Integration
      </button>

      {/* Integration Options */}
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
