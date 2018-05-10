/* pattern 3: using a function constructor */
function Greet3() {
  this.greeting = 'Hello World';
  this.greet = function() {
    console.log(this.greeting);
  }
}

module.exports = new Greet3();