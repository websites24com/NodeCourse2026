const EventEmitter = require('node:events');

class MyEmitter extends EventEmitter {};
const myEmitter = new MyEmitter();

const callbackA = () => {
    console.log('A')
    myEmitter.removeListener('event', callbackB)
};

const callbackB = () => {
    console.log('B')
};

myEmitter.on('event', callbackA);   // list becomes: [callbackA]
myEmitter.on('event', callbackB);   // list becomes: [callbackA, callbackB]

myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event');


