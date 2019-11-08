const Stack = require("./Stack");

class SetOfStacks {
  constructor(capacity) {
    this.set = [];
    this.size = 0;
    this.vals = 0;
    this.capacity = capacity;
  };

  push(val) {
    if (!this.size || this.set[this.size - 1].isFull()) {
      const newStack = new Stack(this.capacity);
      newStack.push(val);
      this.set.push(newStack);
      this.size++;
    } else {
      const stack = this.set[this.size - 1];
      stack.push(val);
    }

    this.vals++;
  };

  pop() {
    if (this.size) {
      const stack = this.set[this.size - 1];
      const val = stack.pop();

      if (stack.isEmpty()) {
        this.set.pop();
        this.size--;
      }

      this.vals--;
      return val;
    }

    return undefined;
  };

  popAt(index) {
    if (this.size) {
      if (index < 0 || index >= this.vals) {
        this.set[this.set.length - 1].pop();
      } else {
        const stackIndex = this.findStackIndex(index);
        this.set[stackIndex].pop(index % this.capacity);
        this.shift(stackIndex);
      }

      this.vals--;
    }

    return undefined;
  };

  findStackIndex(index) {
    let count = 1;

    for (let x = 0; x < this.set.length; x++) {
      if (index < this.capacity * count) {
        return count - 1;
      }

      count++;
    }
  };

  shift(index) {
    if (index < this.set.length - 1) {
      const curr_stack = this.set[index];
      const next_stack = this.set[index + 1];
      

      while (!curr_stack.isFull() && !next_stack.isEmpty()) {
        const val = next_stack.stack.shift();
        curr_stack.push(val);
        next_stack.size--;
      }

      this.shift(index + 1);
    }

    if (this.set[index].isEmpty()) {
      this.set.pop();
      this.size--;
    }
  }
};

module.exports = SetOfStacks;