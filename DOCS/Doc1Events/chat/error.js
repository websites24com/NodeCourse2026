const EventEmitter = require('node:events');
class ChatRoom extends EventEmitter {}
const chatRoom = new ChatRoom();
chatRoom.emit('error', new Error('Connection lost'));
// Throws and crashes Node.js