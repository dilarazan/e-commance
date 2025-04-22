import { useEffect, useState } from "react";
import "./Admin.css";
const AdminContact = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const storedMessages = JSON.parse(localStorage.getItem("contactMessages")) || [];
    setMessages(storedMessages);
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Contact Form Messages</h2>
      {messages.length === 0 ? (
        <p>No messages found.</p>
      ) : (
        <table border="1" cellPadding="10" style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Subject</th>
              <th>Message</th>
            </tr>
          </thead>
          <tbody>
            {messages.map((msg, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{msg.name}</td>
                <td>{msg.email}</td>
                <td>{msg.subject}</td>
                <td>{msg.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AdminContact;
