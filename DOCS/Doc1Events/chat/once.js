const EventEmitter = require('node:events');

class ChatRoom extends EventEmitter {}

const chatRoom = new ChatRoom();

let jointCount = 0;

chatRoom.once('userJoined', () => {
    jointCount++;
    console.log('Welcome to the chat room!', jointCount);
});

chatRoom.emit('userJoined');
chatRoom.emit('userJoined');