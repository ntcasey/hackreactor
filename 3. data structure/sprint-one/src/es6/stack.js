class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.current = 0;
  }

  push(value) {
    this.current += 1;
    this.storage[this.current] = value;
  }

  pop() {
    if (this.current === 0) { return; }

    let val = this.storage[this.current];
    delete this.storage[this.current];
    this.current -= 1;
    return val;
  }

  size() {
    return this.current;
  }
}


