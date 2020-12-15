var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  // Use an object with numeric keys to store values
  this.storage = {};
  //  lower the number, higher the priority it has to be popped from Queue.
  this.highestPriority = 0;
  this.enqueuePriority = 1;
  this.storageSize = 0;
};

Queue.prototype.enqueue = function(value) {
  debugger;
  // storage is "inside" the closure that is created when this specific function object is created
  if (this.enqueuePriority === 1) {
    this.highestPriority = 1;
  }
  this.storage[this.enqueuePriority] = value;
  this.enqueuePriority++;
  this.storageSize++;
};

Queue.prototype.dequeue = function() {
  if (this.storageSize === 0) {
    return;
  }

  let nextHighest = this.highestPriority + 1;
  var deq = this.storage[this.highestPriority];
  delete this.storage[this.highestPriority];
  this.highestPriority = nextHighest;
  this.storageSize--;
  return deq;
};

Queue.prototype.size = function() {
  return this.storageSize;
};