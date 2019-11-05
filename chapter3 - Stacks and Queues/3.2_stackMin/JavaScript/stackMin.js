/* My Solution */

class Stack {
  constructor() {
    this.stack = [];
    this.min = null;
    this.cache = {}
  }

  push(val) {
    this.stack.push(val);

    if (this.min === null || val < this.min) {
      this.cache[val] = {
        count: 1,
        prev: this.min
      }

      this.min = val;
    } else if (this.cache[val]) {
      this.cache[val].count++;
    }
  };

  pop() {
    const val = this.stack.pop();

    if (this.cache[val]) {
      this.cache[val].count--;

      if (!this.cache[val].count) {
        if (val === this.min) {
          this.min = this.cache[val].prev;
        }

        delete this.cache[val];
      }
    }; 

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