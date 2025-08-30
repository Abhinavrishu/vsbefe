import dotenv from 'dotenv';
dotenv.config();

import { app } from './src/app.js';
import http from 'http';
import { Server } from 'socket.io';
import mainRouter from './src/routes/index.js';
import  errorHandler  from './src/middleware/errorHandler.middleware.js';

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    credentials: true,
  },
});

const connectedUsers = new Map();

io.on('connection', (socket) => {
  console.log(`User connected: ${socket.id}`);
  socket.on('addUser', (userId) => {
    if (userId) {
      connectedUsers.set(userId, socket.id);
      console.log(`User ${userId} mapped to socket ${socket.id}`);
    }
  });
  socket.on('send-message', (messageData) => {
    const receiverSocketId = connectedUsers.get(messageData.recieverid);
    if (receiverSocketId) {
      io.to(receiverSocketId).emit('receive-message', messageData);
    }
  });
  socket.on('disconnect', () => {
    console.log(`User disconnected: ${socket.id}`);
    for (let [userId, socketId] of connectedUsers.entries()) {
      if (socketId === socket.id) {
        connectedUsers.delete(userId);
        console.log(`Removed mapping for user ${userId}`);
        break;
      }
    }
  });
});

app.use((req, res, next) => {
  req.app.set('socketio', { io, connectedUsers });
  next();
});

app.use(mainRouter);

app.use(errorHandler);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});