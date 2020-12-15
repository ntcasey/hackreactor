// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  if (typeof obj === 'boolean') {
    return String(obj);
  } else if (typeof obj === 'string') {
    return '"' + obj + '"';
  } else if (typeof obj === 'number') {
    return String(obj);
  } else if (obj === NaN || obj === null || obj === Infinity) {
    return String(null);
  }

  // For Array:
  if (Array.isArray(obj)) {
    var arrayString = '[';
    for (var i = 0; i < obj.length; i++) {
      arrayString += stringifyJSON(obj[i]) + ',';
    }

    if (obj.length !== 0) {
      arrayString = arrayString.substring(0, arrayString.length - 1);
    }
    arrayString += ']';

    return arrayString;
  }

  // For Objects:
  if (typeof obj === 'object') {
    var objString = '{';
    for (var property in obj) {
      if (typeof obj[property] === 'undefined' || typeof obj[property] === 'function' ) {
        continue;
      }

      objString += stringifyJSON(property) + ':' + stringifyJSON(obj[property]) + ',';
    }

    if (objString.length !== 1) {
      objString = objString.substring(0, objString.length - 1);
    }
    objString += '}';

    return objString;
  }
};

