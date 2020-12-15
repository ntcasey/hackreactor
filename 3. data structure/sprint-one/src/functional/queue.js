var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  var highestPriority; //  lower the number, higher the priority it has to be popped from Queue.
  var enqueuePriority = 1; // when an obj gets enqueue w. enqueue priority.
  var storageSize = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    debugger;
    // storage is "inside" the closure that is created when this specific function object is created
    if (enqueuePriority === 1) {
      highestPriority = 1;
    }
    storage[enqueuePriority] = value;
    enqueuePriority++;
    storageSize++;
  };

  someInstance.dequeue = function() {
    if (storageSize === 0) {
      return;
    }
    
    let nextHighest = highestPriority + 1;
    var deq = storage[highestPriority];
    delete storage[highestPriority];
    highestPriority = nextHighest;
    storageSize--;
    return deq;
  };

  someInstance.size = function() {
    return storageSize;
  };

  return someInstance;
};



