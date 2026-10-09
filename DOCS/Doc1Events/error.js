const EventEmitter = require('node:events');

class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();

myEmitter.emit('error', new Error('whoops'));
