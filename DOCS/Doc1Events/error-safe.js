const EventEmitter = require('node:events');
class MyEmitter extends EventEmitter {};

const myEmitter = new MyEmitter();

myEmitter.on('error', (err) => {
    console.log('Whoops! There was an error')
});
myEmitter.emit('error', new Error('Whoops'))