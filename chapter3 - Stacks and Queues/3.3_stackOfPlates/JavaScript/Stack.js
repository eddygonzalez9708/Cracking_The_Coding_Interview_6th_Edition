class Stack {
  constructor(capacity) {
    this.stack = [];
    this.capacity = capacity;
    this.size = 0;
  };

  push(val) {
    this.stack.push(val);
    this.size++;
  };

  pop(index) {
    this.size--;

    if (index !== undefined) {
      return this.stack.splice(index, 1)[0];
    }

    return this.stack.pop();
  };

  isEmpty() {
    return this.size === 0;
  };

  isFull() {
    return this.size === this.capacity;
  };
};

module.exports = Stack;