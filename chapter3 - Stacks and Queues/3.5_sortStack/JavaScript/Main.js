const Stack = require("./Stack");
const SortStack = require("./SortStack");

const stack = new Stack();

stack.push(5);
stack.push(4);
stack.push(3);
stack.push(2);
stack.push(1);

const sortStack = new SortStack();

sortStack.sort(stack);

// Tests

console.log(stack.pop(), 5);
console.log(stack.pop(), 4);
console.log(stack.pop(), 3);
console.log(stack.pop(), 2);
console.log(stack.pop(), 1);