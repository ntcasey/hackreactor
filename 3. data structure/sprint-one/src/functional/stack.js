var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  let current = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    current += 1;
    storage[current] = value;
  };

  someInstance.pop = function() {
    if (current === 0) { return; }

    let val = storage[current];
    delete storage[current];
    current -= 1;
    return val;
  };

  someInstance.size = function() {
    return current;
  };

  return someInstance;
};
