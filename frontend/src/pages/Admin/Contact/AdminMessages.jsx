import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Admin.css";
const AdminMessages = () => {
  const [messages, setMessages] = useState([]);
  const [selectedMessage, setSelectedMessage] = useState(null);

  // Mesajları backend'den çekme
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/contact");
        setMessages(response.data);
      } catch (error) {
        console.error("Mesajlar alınamadı:", error);
      }
    };

    fetchMessages();
  }, []);

  // Mesaj başlığına tıklanınca detayları gösterme
  const handleMessageClick = (message) => {
    setSelectedMessage(message);
  };

  return (
    <div className="admin-messages">
      <h2>Admin Panel - Gelen Mesajlar</h2>
      
      <div className="message-list">
        {messages.length > 0 ? (
          messages.map((message) => (
            <div
              key={message._id}
              className="message-item"
              onClick={() => handleMessageClick(message)}
            >
              <h3>{message.subject}</h3>
              <p>{message.name}</p>
            </div>
          ))
        ) : (
          <p>No messages found</p>
        )}
      </div>

      {selectedMessage && (
        <div className="message-detail">
          <h3>Message Detail</h3>
          <p><strong>Name:</strong> {selectedMessage.name}</p>
          <p><strong>Email:</strong> {selectedMessage.email}</p>
          <p><strong>Message:</strong> {selectedMessage.message}</p>
        </div>
      )}
    </div>
  );
};

export default AdminMessages;
