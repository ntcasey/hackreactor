/*
 ********** NOTE: **********
 * Do not edit this code unless you see a bug!
 */


// This class represents an array with limited functionality and a maximum size.
// It will ensure that you don't accidentally try to use up too much space.
//
// Usage:
//   limitedArray.set(3, 'hi');
//   limitedArray.get(3); // returns 'hi'

var LimitedArray = function (limit) {
  var storage = [];

  var limitedArray = {};
  limitedArray.get = function (index) {
    checkLimit(index);
    return storage[index];
  };
  limitedArray.set = function (index, value) {
    checkLimit(index);
    storage[index] = value;
  };
  limitedArray.each = function (callback) {
    for (var i = 0; i < storage.length; i++) {
      callback(storage[i], i, storage);
    }
  };

  var checkLimit = function (index) {
    if (typeof index !== 'number') {
      throw new Error('setter requires a numeric index for its first argument');
    }
    if (limit <= index) {
      throw new Error('Error trying to access an over-the-limit index');
    }
  };

  return limitedArray;
};

// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between the
// numbers 0 and `max`
var getIndexBelowMaxForKey = function (str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};


//-----------------------------------------------------------




var HashTable = function () {
  this._limit = 8;
  this.size;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function (k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  //this.resize()

  var bucket = this._storage.get(index);
  if (bucket === undefined) {
    bucket = [];
    this._storage.set(index, bucket);
  }

  let replace = false;
  for (let i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      bucket[i] = [k, v];
      replace = true;
    }
  }

  if (!replace) {
    bucket.push([k, v]);
    this.size++;
  }
};

HashTable.prototype.retrieve = function (k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);

  if (bucket === undefined) {
    return;
  }

  for (let i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      return bucket[i][1];
    }
  }
};

HashTable.prototype.remove = function (k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);

  if (!bucket) {
    return;
  }

  // know if it is there
  let isItThere = false;
  for (let i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      isItThere = true;
      break;
    }
  }

  if (isItThere) {
    this.size--;
    bucket = bucket.filter(function (value, index, arr) {
      return value[0] !== k;
    });
  }

  this._storage.set(index, bucket);
};

HashTable.prototype.resize = function () {

  // let loadBalance = this.size / this._limit;
  // if (0.75 > loadBalance) {
  //   return;
  // }

  // let tempStorage = [];
  // if (loadBalance > 0.75) {
  //   this._limit *= 2;

  // }

  // this._storage.each(function (bucket, index) {
  //   for (let i = 0; i < bucket.length; i++) {
  //     tempStorage.push(bucket[i]);
  //   }
  //   bucket = [];
  //   this._storage.set(index, bucket);
  // });

  // for (var i = 0; i < tempStorage.length; i++) {
  //   this.insert(tempStorage[0], tempStorage[1]);
  // }




};





var g = new HashTable();
g.insert('Steven', 'Tyler');
g.remove('Steven');


/*
 * Complexity: What is the time complexity of the above functions?
 */


