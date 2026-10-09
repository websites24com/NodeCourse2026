const EventEmitter = require('node:events');

class ChatRoom extends EventEmitter {};

const chatRoom = new ChatRoom();

chatRoom.on('message', () => {
    console.log('A new message arrived!');
});

chatRoom.emit('message');