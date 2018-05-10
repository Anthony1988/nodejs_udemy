const Emitter = require('./emitter');
const emtr = new Emitter();

emtr.on('greet', () => console.log('Hello there!!'));
emtr.on('greet', () => console.log('Someone greeted.'));

console.log('Hello');
emtr.emit('greet');