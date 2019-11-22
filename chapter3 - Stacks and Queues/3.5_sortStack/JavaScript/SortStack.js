const Stack = require("./Stack");

class SortStack {
  constructor() {
    this.min = null;
    this.tempStackOne = new Stack();
    this.tempStackTwo = new Stack();
  };

  sort(stack) {
    while (!stack.isEmpty()) {
      this.tempStackOne.push(stack.pop());
    }

    while (!this.tempStackOne.isEmpty()) {
      if (!this.min) {
        this.min = this.tempStackOne.pop();
      } else if (this.tempStackOne.peek() < this.min) {
        this.tempStackTwo.push(this.min);
        this.min = this.tempStackOne.pop();
      } else {
        this.tempStackTwo.push(this.tempStackOne.pop())
      }

      if (this.tempStackOne.isEmpty()) {
        stack.push(this.min);
        this.min = null;
        this.tempStackOne = this.tempStackTwo;
        this.tempStackTwo = new Stack();
      }
    }
  };
};

module.exports = SortStack;