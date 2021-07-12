const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const port = 6789;
const hostname = "10.0.0.7"

app.use(express.static(__dirname + '/'));

io.on('connection', (socket) => {
	console.log('user connected');
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });
});

server.listen(port, hostname, () => {
	console.log(`server port: ${port}`);
});