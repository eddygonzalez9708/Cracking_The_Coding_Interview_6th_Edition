const FixedMultStack = require('./FixedMultiStack');

const threeInOne = new FixedMultStack(3);

// Push three numbers to stack 0
threeInOne.push(0, 1);
threeInOne.push(0, 2);
threeInOne.push(0, 3);

// Push three numbers to stack 1
threeInOne.push(1, 1);
threeInOne.push(1, 2);
threeInOne.push(1, 3);

// Push three numbers to stack 2
threeInOne.push(2, 1);
threeInOne.push(2, 2);
threeInOne.push(2, 3);

// Peek at what is at the top of all three stacks
console.log("Peek at what is at the top of all three stacks.");
console.log(threeInOne.peek(0));
console.log(threeInOne.peek(1));
console.log(threeInOne.peek(2));

// Pop the top number from all three stacks
console.log("Pop the last number in all three stacks.");
console.log(threeInOne.pop(0));
console.log(threeInOne.pop(1));
console.log(threeInOne.pop(2));

// Peek at what is at the top of all three stacks
console.log("Peek at what is at the top of all three stacks.");
console.log(threeInOne.peek(0));
console.log(threeInOne.peek(1));
console.log(threeInOne.peek(2));

// Pop the top number from all three stacks
console.log("Pop the last number in all three stacks.");
console.log(threeInOne.pop(0));
console.log(threeInOne.pop(1));
console.log(threeInOne.pop(2));

// Peek at what is at the top of all three stacks
console.log("Peek at what is at the top of all three stacks.");
console.log(threeInOne.peek(0));
console.log(threeInOne.peek(1));
console.log(threeInOne.peek(2));

// Pop the top number from all three stacks
console.log("Pop the last number in all three stacks.");
console.log(threeInOne.pop(0));
console.log(threeInOne.pop(1));
console.log(threeInOne.pop(2));