// pages/client1.js
import { useEffect, useState } from 'react';
import Link from 'next/link';
import io from 'socket.io-client';

const socket = io();

export default function Client1() {
  const [messages, setMessages] = useState([]);
  const [bgColor, setBgColor] = useState('#ffffff');
  const [showHistory, setShowHistory] = useState(false);

  useEffect(() => {
    socket.on('receive_message', (data) => {
      setMessages((prevMessages) => [...prevMessages, data]);
    });
  }, []);

  const handleColorChange = () => {
    const color = prompt("Enter background color (e.g., #f0f0f0): ");
    if (color) setBgColor(color);
  };

  return (
    <div className="container mt-4">
      {/* Navbar with logo and text */}
      <nav className="navbar navbar-light bg-primary mb-4 justify-content-center">
        <Link href="/" className="navbar-brand text-white d-flex align-items-center">
          <img
            src="/logo.png"  // Accessing from public directory
            alt="Sawerkuy Logo"
            style={{ width: '30px', height: '30px', marginRight: '10px' }}
          />
          Sawerkuy
        </Link>
      </nav>

      <div className="row">
        {/* Col-8: Message display area */}
        <div className="col-8">
          <div
            className="p-3 rounded border message-list"
            style={{ backgroundColor: bgColor, maxHeight: '400px', overflowY: 'auto' }}
          >
            {messages.map((msg, index) => (
              <div key={index} className="message mb-3 p-2 border rounded">
                <h5>From: {msg.sender}</h5>
                <p>Amount: Rp {msg.amount}</p>
                <p>Message: {msg.message}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Col-4: Buttons for changing color and showing history */}
        <div className="col-4 d-flex flex-column">
          <button
            className="btn btn-secondary mb-3"
            onClick={handleColorChange}
          >
            Change Message Box Color
          </button>
          <button
            className="btn btn-info"
            onClick={() => setShowHistory(!showHistory)}
          >
            {showHistory ? "Hide History" : "Show History"}
          </button>
        </div>
      </div>
    </div>
  );
}
