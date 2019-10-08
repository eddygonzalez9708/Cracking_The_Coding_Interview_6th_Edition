class FixedMultiStack {
  constructor(stackCapacity) {
    this.stackCapacity = stackCapacity;
    this.sizes = Array(3).fill(0);
    this.values = Array(3 * stackCapacity).fill(null);
  }

  push(stackNum, val) {
    if (this.isFull(stackNum)) {
      console.log(`Stack ${stackNum} is full.`);
      return;
    }

    this.sizes[stackNum]++;
    this.values[this.indexOfTop(stackNum)] = val;
  }

  pop(stackNum) {
    if (this.isEmpty(stackNum)) {
      console.log(`Stack ${stackNum} is empty.`);
      return;
    }

    const val = this.values[this.indexOfTop(stackNum)];
    this.values[this.indexOfTop(stackNum)] = null;
    this.sizes[stackNum]--;
    
    return val;
  }

  peek(stackNum) {
    if (this.isEmpty(stackNum)) {
      console.log(`Stack ${stackNum} is empty.`);
      return;
    }

    return this.values[this.indexOfTop(stackNum)];
  }

  isFull(stackNum) {
    return this.sizes[stackNum] === this.stackCapacity;
  }

  isEmpty(stackNum) {
    return this.sizes[stackNum] === 0;
  }

  indexOfTop(stackNum) {
    const offset = stackNum * this.stackCapacity;
    const size = this.sizes[stackNum];
    return offset + size - 1;
  }
}

module.exports = FixedMultiStack;