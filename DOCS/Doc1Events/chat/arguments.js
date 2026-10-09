const EventEmitter = require('node:events');

class ChatRoom extends EventEmitter {};

const chatRoom = new ChatRoom();

chatRoom.on('message', (username, text) => {
    console.log(username, text);
});

chatRoom.emit('message', 'Alex', 'Hello everyone!')