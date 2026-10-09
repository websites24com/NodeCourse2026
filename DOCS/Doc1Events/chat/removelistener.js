const EventEmitter = require ('node:events');
class ChatRoom extends EventEmitter {}
const chatRoom = new ChatRoom();

const logMessage = () => {
    console.log('Logged: new message');
    chatRoom.removeListener('message', playSound);
};

const playSound = () => {
    console.log(('Playing notification sound!'))
};

chatRoom.on('message', logMessage);
chatRoom.on('message', playSound);

chatRoom.emit('message');
chatRoom.emit('message');