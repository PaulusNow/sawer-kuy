// pages/api/socket.js
import { Server } from 'socket.io';

export default function SocketHandler(req, res) {
  if (res.socket.server.io) {
    res.end();
    return;
  }

  const io = new Server(res.socket.server);
  res.socket.server.io = io;

  io.on('connection', (socket) => {
    console.log('User connected', socket.id);

    socket.on('send_message', (data) => {
      io.emit('receive_message', data);
    });

    socket.on('disconnect', () => {
      console.log('User disconnected', socket.id);
    });
  });

  res.end();
}
