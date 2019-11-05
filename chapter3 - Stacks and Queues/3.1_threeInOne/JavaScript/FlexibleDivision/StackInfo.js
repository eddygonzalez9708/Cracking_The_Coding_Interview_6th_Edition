/* StackInfo is a simple class that holds a set of data about each stack. It
  does not hold the actual items in the stack. We could have done this with 
  just a bunch of individual variables, but that's messy and doesn't gain us much. */

class StackInfo {
  constructor(start, capacity, multistack) {
    this.start = start;
    this.capacity = capacity;
    this.size = 0;
    this.values = multistack.values;
    this.adjustIndex = multistack.adjustIndex
  }
  
  /* Check if an index on the full array is within the stack boundaries.
  The stack can wrap around to the start of the array. */
  
  isWithinStackCapacity(index) {
    /* If outside of bounds in array, return false. */
    if (index < 0 || index >= this.values.length) {
      return false;
    }
  
    /* If index wraps around, adjust it. */
    const contigousIndex = index < this.start ? index + this.values.length : index;
    const end = this.start + this.capacity;
      
    return this.start <= contigousIndex && contigousIndex < end;
  }
  
  lastCapacityIndex() { 
    return this.adjustIndex(this.start + this.capacity - 1);
  }
  
  lastElementIndex() {
    return this.adjustIndex(this.start + this.size - 1);
  }
  
  isFull() {
    return this.size === this.capacity;
  }
  
  isEmpty() {
    return this.size === 0;
  }
}

module.exports = StackInfo;