const greet4 = class Greet4 {
  constructor() {
    this.greeting = 'Hello World';
  }

  greet(){
    console.log(this.greeting);
  }
}

module.exports = greet4;