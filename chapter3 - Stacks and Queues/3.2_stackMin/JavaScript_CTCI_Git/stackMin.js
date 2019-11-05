const Stack = require("./Stack");

// Approach, keep an additional stack that keeps the mins

function StackMin() {
  this.stack = new Stack();
  this.minStack = new Stack();
  this.currMin = undefined;
};

StackMin.prototype.push = function(value) {
  if (this.currMin === undefined || value <= this.currMin) {
    this.minStack.push(this.currMin)
    this.currMin = value;
  }

  this.stack.push(value);
};

StackMin.prototype.pop = function() {
  var answer = this.stack.pop();
  if (answer === this.currMin) {
    this.currMin = this.minStack.pop();
  }

  return answer;
};

StackMin.prototype.peek = function() {
  return this.stack.peek();
}

StackMin.prototype.isEmpty = function() {
  return this.stack.isEmpty();
};

StackMin.prototype.min = function() {
  return this.currMin;
}

/* TEST */

var s = new StackMin();

s.push(9);
s.push(8);
s.push(1);
s.push(2);
s.push(9);

console.log(s.min());

s.pop();
s.pop();

console.log(s.peek());
console.log(s.min());

s.pop();
s.pop();

console.log(s.peek());
console.log(s.min());

s.pop();
s.pop();

console.log(s.isEmpty());
console.log(s.min());