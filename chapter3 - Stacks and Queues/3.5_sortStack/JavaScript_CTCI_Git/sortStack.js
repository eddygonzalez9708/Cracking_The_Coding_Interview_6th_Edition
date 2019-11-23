// Notes:
// Hold the smallest item as a variable, put the rest into the other stack.
// Pop back the stack, place the smallest item into the bottom, and repeat.
// When completed, pop back into the original stack.

var Stack = require("./Stack");

var sortStack = function(stack) {
  var tempStack = new Stack();
  var currMin = Infinity;
  var stackDepth = 0;

  while (!stack.isEmpty()) {
    if (stack.peek() <= currMin) {
      if (currMin !== Infinity) {
        tempStack.push(currMin);
      }

      currMin = stack.pop();
    } else {
      tempStack.push(stack.pop());
    }

    stackDepth++;
  }

  while (!tempStack.isEmpty()) {
    stack.push(tempStack.pop());
  }

  tempStack.push(currMin);
  currMin = Infinity;
  stackDepth--;

  while (stackDepth > 0) {
    while (!stack.isEmpty()) {
      if (stack.peek() <= currMin) {
        if (currMin !== Infinity) {
          tempStack.push(currMin);
        }

        currMin = stack.pop();
      } else {
        tempStack.push(stack.pop());
      } 
    }

    for (var i = 0; i < stackDepth - 1; i++) {
      stack.push(tempStack.pop());
    }

    tempStack.push(currMin);
    currMin = Infinity;
    stackDepth--;
  }

  while (!tempStack.isEmpty()) {
    stack.push(tempStack.pop());
  }

  return stack;
};

/* TEST */
var s = new Stack();

s.push(99);
s.push(4);
s.push(1);
s.push(6);
s.push(8);
s.push(10);
s.push(22);
s.push(3);
s.push(72);

var sortS = sortStack(s);

while (!sortS.isEmpty()) {
  console.log(sortS.pop());
}