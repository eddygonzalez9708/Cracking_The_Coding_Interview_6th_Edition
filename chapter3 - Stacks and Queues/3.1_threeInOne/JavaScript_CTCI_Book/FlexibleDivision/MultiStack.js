const StackInfo = require("./StackInfo");

class MultiStack {
  constructor(numberOfStacks, defaultSize) {
    this.info = Array(numberOfStacks).fill(null);
    this.values = Array(numberOfStacks * defaultSize).fill(null);

    /* Create metadata for all the stacks. */
    for (let i = 0; i < numberOfStacks; i++) {
      this.info[i] = new StackInfo(defaultSize * i, defaultSize, this);
    }
  }

  /* Push value onto stack num, shifting/expanding stacks as necessary. Throws 
  exception if all stacks are full. */

  push(stackNum, value) {
    if (this.allStacksAreFull()) {
      console.log("All stacks are full.");
      return;
    }

    /* If this stack is full, expand it. */
    const stack = this.info[stackNum];

    if (stack.isFull()) {
      this.expand(stackNum);
    }

    /* Find the index of the top element in the array + 1, and increment the 
    stack pointer */
    stack.size++;
    this.values[stack.lastElementIndex()] = value;
  }

  /* Remove value from stack. */
  
  pop(stackNum) {
    const stack = this.info[stackNum];

    if (stack.isEmpty()) {
      console.log(`Stack ${stackNum} is empty.`);
      return;
    }

    /* Remove last element. */
    const value = this.values[stack.lastElementIndex()];
    this.values[stack.lastElementIndex()] = null; // Clear item
    stack.size--; // Shrink size
    
    return value;
  }

  /* Get top element of stack. */ 
  
  peek(stackNum) {
    const stack = this.info[stackNum];
    return this.values[stack.lastElementIndex()];
  }

  /* Shift items in stack over by one element. If we have available capacity, then
  we'll end up shrinking the stack by one element. If we don't have available 
  capacity, then we'll need to shift the next stack over too. */
  
  shift(stackNum) {
    console.log("/// Shifting " + stackNum);
    const stack = this.info[stackNum];

    /* If this stack is at its full capacity, then you need to move the next
    stack over by one element. The stack can now claim the freed index. */
    if (stack.size >= stack.capacity) {
      const nextStack = (stackNum + 1) % this.info.length;
      this.shift(nextStack);
      stack.capacity++; // claim index that next stack lost
    }

    /* Shift all elements in stack over by one. */
    let index = stack.lastCapacityIndex();
    while (stack.isWithinStackCapacity(index)) {
      this.values[index] = this.values[this.previousIndex(index)];
      index = this.previousIndex(index);
    }

    /* Adjust stack data. */
    this.values[stack.start] = 0; // Clear item
    stack.start = this.nextIndex(stack.start); // move start
    stack.capacity--; // Shrink capacity
  }

  /* Expand stack by shifting over other stacks */
  expand(stackNum) {
    this.shift((stackNum + 1) % this.info.length);
    this.info[stackNum].capacity++;
  }

  /* Returns the number of items actually present in all stacks. */
  numberOfElements() {
    let size = 0;

    for (let x = 0; x < this.info.length; x++) {
      size += this.info[x].size;
    }

    return size;
  }

  /* Returns true if all the stacks are full. */
  allStacksAreFull() {
    return this.numberOfElements() === this.values.length;
  }

  /* Adjust index to be within the range of 0 -> length - 1. */ 
  adjustIndex(index) {
    /* Javascript's mod operator can return neg values. For example, (-11 % 5) will 
    return -1, not 4. We actually want the value to be 4 (since we're wrapping
    around the index). */
    const max = this.values.length;
    return ((index % max) + max) % max;
  }

  /* Get index after this index, adjusted for wrap around. */ 
  nextIndex(index) {
    return this.adjustIndex(index + 1);
  }

  /* Get index before this index, adjusted for wrap around. */
  previousIndex(index) {
    return this.adjustIndex(index - 1);
  }
}

module.exports = MultiStack;