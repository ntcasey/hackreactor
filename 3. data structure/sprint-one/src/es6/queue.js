class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.highestPriority; //  lower the number, higher the priority it has to be popped from Queue.
    this.enqueuePriority = 1; // when an obj gets enqueue w. enqueue priority.
    this.storageSize = 0;
  }

  enqueue(value) {
    // storage is "inside" the closure that is created when this specific function object is created
    if (this.enqueuePriority === 1) {
      this.highestPriority = 1;
    }
    this.storage[this.enqueuePriority] = value;
    this.enqueuePriority++;
    this.storageSize++;
  }

  dequeue() {
    if (this.storageSize === 0) {
      return;
    }

    let nextHighest = this.highestPriority + 1;
    var deq = this.storage[this.highestPriority];
    delete this.storage[this.highestPriority];
    this.highestPriority = nextHighest;
    this.storageSize--;
    return deq;
  }

  size() {
    return this.storageSize;
  }
}


queue.enqueue('a');
expect(queue.dequeue()).to.equal('a');
queue.enqueue('b');
expect(queue.dequeue()).to.equal('b');
