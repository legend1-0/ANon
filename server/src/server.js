const express = require('express');
const http = require('http');
const cors = require('cors');
const { Server } = require('socket.io');
const chatSocket = require('./socket/chatSocket.js');
const startRoomExpiry = require('./timers/roomExpiry.js');
const PORT = process.env.PORT || 3000;
const app = express();
app.use(cors());
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: 'http://localhost:5173',
  }
});

chatSocket(io);

startRoomExpiry(io);
app.get('/', (req, res) => {
  res.send(`Ghost Chtat Server is running on port ${PORT}`);
});
server.listen(PORT, () => {
  console.log('Server is running on port 3000');
});