var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {}; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  let itemProperty = String(item);
  if (this._storage.hasOwnProperty(itemProperty)) {
    return;
  }
  this._storage[itemProperty] = item;
};

setPrototype.contains = function(item) {
  return Boolean(this._storage[String(item)]);

};

setPrototype.remove = function(item) {
  delete this._storage[String(item)];
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
