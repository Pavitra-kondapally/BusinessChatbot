import React, { useState, useEffect } from "react";
import "./Chatbot.css";

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if the URL contains ?openChatbot=true
    const params = new URLSearchParams(window.location.search);
    if (params.get("openChatbot") === "true") {
      setIsOpen(true); // Open chatbot automatically
    }
  }, []);

  return (
    <div className="chatbot-container">
      {/* Chatbot Toggle Button */}
      <button className="chatbot-toggle" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "Close Chat" : "Chat with Bot"}
      </button>

      {/* Chatbot Window */}
      {isOpen && (
        <div className="chatbot-window">
          <p>👋 Hi! How can I assist you today?</p>
          <input type="text" placeholder="Type a message..." />
          <button>Send</button>
        </div>
      )}
    </div>
  );
}

export default Chatbot;
