const EventEmitter = require('node:events');
class ChatRoom extends EventEmitter {}
const chatRoom = new ChatRoom();
chatRoom.on('error', (err) => {
  console.error(err.message);
});
chatRoom.emit('error', new Error('Connection lost'));