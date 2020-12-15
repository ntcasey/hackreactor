var BinarySearchTree = function(value) {

  this.value = value;
  this.left = null;
  this.right = null;
};

BinarySearchTree.prototype.insert = function(insertValue) {
  if (insertValue >= this.value) {
    if (this.right === null) {
      this.right = new BinarySearchTree(insertValue);
    } else {
      this.right.insert(insertValue);
    }
  } else {
    if (this.left === null) {
      this.left = new BinarySearchTree(insertValue);
    } else {
      this.left.insert(insertValue);
    }
  }
};

BinarySearchTree.prototype.contains = function(insertValue) {
  if (this.value === insertValue) {
    return true;
  }

  if (insertValue > this.value) {
    if (this.right === null) {
      return false;
    }
    return this.right.contains(insertValue);
  } else {
    if (this.left === null) {
      return false;
    }
    return this.left.contains(insertValue);
  }
};


BinarySearchTree.prototype.depthFirstLog = function(callback) {
  callback(this.value);

  if (this.left !== null) {
    this.left.depthFirstLog(callback);
  }

  if (this.right !== null) {
    this.right.depthFirstLog(callback);
  }




};



var t = new BinarySearchTree(5);
t.insert(2);
t.insert(3);
t.insert(7);
t.insert(6);

console.log(t.left.right.value);
console.log(t.right.left.value);

/*
 * Complexity: What is the time complexity of the above functions?
 */
