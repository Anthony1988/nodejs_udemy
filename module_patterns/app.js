/* Module patterns */

// pattern 1: when module.exports gets a reference to a custom object
const greet1 = require('./greet');
// pattern 2: when module.exports is mutated with a new property
const greet2 = require('./greet2').greet;
// pattern 3: when using a function constructor (note that you cannot use the same trick as with pattern 2)
const greet3 = require('./greet3');
// pattern 4: when using es6 classes
const greet4 = require('./greet4');
// pattern 5: revealing module pattern (exposing only what is returned and encapsulate other logic or data)
const greet5 = require('./greet5');

greet1();
greet2();
greet3.greet();
//greet4.greet();
greet5.greet();