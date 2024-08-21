import { EventEmitter } from 'node:events';
const emitter = new EventEmitter();
emitter.on('message', (message) => {
    console.log(`Message received: ${message}`);
});
emitter.emit('message', 'Hello World!');

// You can also register multiple event listeners and emitters for the same event

// setInterval(() => {
//     emitter.emit('message', `Interval (${Date.now()})`);
    
// }, 1000);

emitter.on('message', (message) => {
    console.log(`Additional Listener Received : ${message}`);
});
emitter.emit(`message`, 'Hello World!');