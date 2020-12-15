var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  let someInstance = Object.create(stackMethods);
  someInstance.current = 0;
  someInstance.storage = {};

  return someInstance;
};

var stackMethods = {
  push: function(value) {
    this.current += 1;
    this.storage[this.current] = value;
  },

  pop: function() {
    if (this.current === 0) { return; }

    let val = this.storage[this.current];
    delete this.storage[this.current];
    this.current -= 1;
    return val;
  },

  size: function() {
    return this.current;
  }
};


