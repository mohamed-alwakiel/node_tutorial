const EventEmitter = require('events');

var customEmitter = new EventEmitter();

customEmitter.on('my_event', () => {
    console.log('data received successfully.');
});

customEmitter.on('my_event', (name) => {
    console.log(`data received successfully from user : ${name}.`);
});

customEmitter.emit('my_event', 'wiko');