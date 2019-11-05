/* My Solution */

class Stack {
  constructor() {
    this.stack = [];
    this.minStack = [];
    this.min = null;
  }

  push(val) {
    this.stack.push(val);

    if (!this.min || val <= this.min) {
      this.minStack.push(val);
      this.min = val;
    }
  };

  pop() {
    const val = this.stack.length ? this.stack.pop() : null;

    if (val === this.min) {
      this.minStack.pop();
      if (this.minStack.length) {
        const topNum = this.minStack.length - 1;
        this.min = this.minStack[topNum];
      } else {
        this.min = null;
      }
    }

    return val;
  };

  getMin() {
    console.log(`This minimum number is ${this.min}.`);
  };
};

/* Tests for My Solution */

const stackOne = new Stack();

stackOne.push(5);
stackOne.push(1);
stackOne.push(2);
stackOne.push(7);

stackOne.getMin();

stackOne.pop();
stackOne.pop();
stackOne.pop();

stackOne.getMin();

const stackTwo = new Stack();

stackTwo.push(5);
stackTwo.push(4);
stackTwo.push(3);
stackTwo.push(2);

stackTwo.getMin();

stackTwo.pop();
stackTwo.pop();
stackTwo.pop();

stackTwo.getMin();

const stackThree = new Stack();

stackThree.push(1);
stackThree.push(1);
stackThree.push(1);
stackThree.push(1);

stackThree.getMin();

stackThree.pop();
stackThree.pop();
stackThree.pop();

stackThree.getMin();