class Emitter {
    constructor () {
      this.events = {};
    }

    on(type, listener) {
      this.events[type] = this.events[type] || [];
      this.events[type].push(listener);
    }

    emit(type) {
      if(this.events[type]) {
          this.events[type].forEach(listener => {
              listener();
          });
      }
    }
}


/*
-----------------------
|  Prototypical style |
-----------------------

function Emitter() {
  this.events = {};
}

Emitter.prototype.on = function (type, listener) {
    this.events[type] = this.events[type] || [];
    this.events[type].push(listener);
};

Emitter.prototype.emit = function(type) {
    if(this.events[type]) {
        this.events[type].forEach(listener => {
            listener();
        });
    }
};

*/

module.exports = Emitter;