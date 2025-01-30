import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to Our Application!</h1>
      <p>Our app provides an easy-to-use chatbot integration service.</p>
      <p>It allows you to integrate a fully functional chatbot into your website, test it, and set up your organization smoothly.</p>
      <div className="features">
        <div className="feature">
          <h3>Easy Setup</h3>
          <p>Quickly set up your organization and integrate the chatbot.</p>
        </div>
        <div className="feature">
          <h3>Seamless Integration</h3>
          <p>Integrate the chatbot with just a few lines of code.</p>
        </div>
        <div className="feature">
          <h3>Real-Time Testing</h3>
          <p>Test the chatbot directly from the platform before going live.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
