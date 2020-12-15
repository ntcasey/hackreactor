var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    let nodeVal = Node(value);
    if (list.tail === null) {
      list.head = nodeVal;
      list.tail = nodeVal;
      return;
    }

    let beforeTail = list.tail;
    list.tail = nodeVal;
    beforeTail.next = list.tail;
  };

  list.removeHead = function() {
    let val = list.head.value;
    if (list.head === list.tail) {
      list.head === null;
      list.tail === null;
      return val;
    }
    let afterHead = list.head.next;
    list.head.next = null;
    list.head = afterHead;

    return val;
  };

  list.contains = function(target) {
    let ptr = list.head;
    while (ptr !== null) {
      if (ptr.value === target) {
        return true;
      }
      ptr = ptr.next;
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};
  node.value = value;
  node.next = null;

  return node;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
