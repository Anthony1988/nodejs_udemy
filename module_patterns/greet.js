/* Pattern 1: overriding the empty module.exports object with a function */
module.exports = function() {
  console.log('Hello World');
}