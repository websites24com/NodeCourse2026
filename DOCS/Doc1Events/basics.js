const EventEmitter = require('node:events');

// The {} is the body of the class — it’s empty here because you’re not adding any new abilities, only reusing the inherited ones.

class MyEmitter extends EventEmitter {};

// run MyEmitter’s constructor (passing no arguments, since none are needed), build one real object from it, and store that object in the variable myEmitter.”
const myEmitter = new MyEmitter();

// 1. 'event', is the event name — just a label you’re choosing; it could be any text.
// 2. name + A function handed over to be run later like this is called a callback.

myEmitter.on('event', () => {
    console.log('an event occured');
});

// .emit(...) is the method that announces an event just happened

myEmitter.emit('event');

