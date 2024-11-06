// pages/client2.js
import { useState } from 'react';
import Link from 'next/link';
import io from 'socket.io-client';

const socket = io();

export default function Client2() {
  const [sender, setSender] = useState('');
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState('');
  const [bgColor, setBgColor] = useState('#ffffff');

  const sendMessage = () => {
    const data = { sender, amount, message };
    socket.emit('send_message', data);
    setMessage('');
  };

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
        {/* Col-8: Form area for sending messages */}
        <div className="col-8">
          <div
            className="p-3 rounded border"
            style={{ backgroundColor: bgColor }}
          >
            <div className="form-group mb-3">
              <label>Nama Pengirim:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Nama Pengirim"
                value={sender}
                onChange={(e) => setSender(e.target.value)}
              />
            </div>

            <div className="form-group mb-3">
              <label>Jumlah Uang:</label>
              <input
                type="number"
                className="form-control"
                placeholder="Jumlah Uang"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>

            <div className="form-group mb-3">
              <label>Pesan:</label>
              <textarea
                className="form-control"
                placeholder="Pesan"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>

            <button className="btn btn-primary" onClick={sendMessage}>
              Kirim
            </button>
          </div>
        </div>

        {/* Col-4: Button for changing color */}
        <div className="col-4 d-flex flex-column">
          <button
            className="btn btn-secondary mb-3"
            onClick={handleColorChange}
          >
            Change Message Box Color
          </button>
        </div>
      </div>
    </div>
  );
}
