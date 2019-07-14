/**
 * we can create custom events with the event emitter and even emit them
 *  with bellow structure
 */
var events=require('events');
var emitter= new events.EventEmitter();

emitter.on("cuntomEmitter",function (message,status) {
   console.log(`${message}:${status}`);
});

emitter.emit("cuntomEmitter","hello !",200);