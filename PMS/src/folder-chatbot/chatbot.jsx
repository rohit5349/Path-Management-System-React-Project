import React, { useState } from "react";
import axios from "axios";
import "./chatbot.css";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input) return;
    const newMessages = [...messages, { text: input, sender: "user" }];
    setMessages(newMessages);

    try {
      const response = await axios.post("http://localhost:4000/api/chatbot", {
        message: input,
      });
      setMessages([...newMessages, { text: response.data.reply, sender: "bot" }]);
    } catch (error) {
      console.error("Error: ", error);
    }

    setInput("");
  };

  return (
    <div className="chatbot-page">
      <div className="page-container">
        <div className="intro">
          <h2>Path Management System</h2>
          <p>
            Find the shortest and most efficient routes between multiple locations 
            using our intelligent path management system.
          </p>
        </div>

        <div className="chat-container">
          <div className="chat-box">
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.sender}`}>
                <strong>{msg.sender}:</strong> {msg.text}
              </div>
            ))}
          </div>
          <div className="input-container">
            <input
              className="chat-input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
            />
            <button className="send-button" onClick={sendMessage}>
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
