import { useEffect, useState } from "react";
import axios from "axios";
import "./Admin.css";
const Messages = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/contact");
        setMessages(res.data);
      } catch (err) {
        console.error("Mesajlar getirilemedi:", err);
      }
    };

    fetchMessages();
  }, []);

  return (
    <div>
      <h2>Gelen Mesajlar</h2>
      <ul>
        {messages.map((msg) => (
          <li key={msg._id}>
            <p><strong>İsim:</strong> {msg.name}</p>
            <p><strong>Email:</strong> {msg.email}</p>
            <p><strong>Konu:</strong> {msg.subject}</p>
            <p><strong>Mesaj:</strong> {msg.message}</p>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Messages;
