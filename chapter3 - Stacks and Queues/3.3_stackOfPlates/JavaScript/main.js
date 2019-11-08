const SetOfStacks = require("./SetOfStacks");

const setOfStacks = new SetOfStacks(3);

console.log(setOfStacks.pop());
console.log(setOfStacks.popAt(1));

setOfStacks.push(1);
setOfStacks.push(2);
setOfStacks.push(3);
setOfStacks.push(4);
setOfStacks.push(5);
setOfStacks.push(6);
setOfStacks.push(7);
setOfStacks.push(8);
setOfStacks.push(9);

console.log(setOfStacks.set);

setOfStacks.pop();
setOfStacks.popAt(5);
setOfStacks.popAt(5);
setOfStacks.popAt(0);
setOfStacks.pop();

console.log(setOfStacks.set);