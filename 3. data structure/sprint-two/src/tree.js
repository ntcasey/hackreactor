var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = []; // fix me
  for (var method in treeMethods) {
    newTree[method] = treeMethods[method];
  }

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  if (this.value === target) {
    return true;
  }
  if (this.children.length === 0) {
    return false;
  }
  var results = false;

  for (let i = 0; i < this.children.length; i++) {
    results = results || this.children[i].contains(target);
  }

  return results;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
