const express = require('express');
const http    = require('http');
const { Server } = require('socket.io');

const app    = express();
const server = http.createServer(app);
const io     = new Server(server);

app.use(express.static('public'));

io.on('connection', (socket) => {
  console.log(`Client connected [id=${socket.id}]`);

  const ticker = setInterval(() => {
    const n = Math.floor(Math.random() * 1000);
    io.emit('randomNumber', n);
  }, 1000);

  socket.on('disconnect', () => {
    clearInterval(ticker);
    console.log(`Client disconnected [id=${socket.id}]`);
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
