const EventEmitter = require("./events");

//const EventEmitter = require('events');

class Emitter extends EventEmitter {};

const myE = new Emitter();

myE.on("foo", () => {
    console.log("An event occured 1")
});

myE.on("foo", () => {
    console.log("An event occured 2")
});

myE.on("foo", (x) => {
    console.log("An event with a parameter occured")
    console.log(x)
});

myE.emit("foo")
myE.emit("foo", "some text");