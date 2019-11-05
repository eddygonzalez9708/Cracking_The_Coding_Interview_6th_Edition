const MultiStack = require("./MultiStack");

const mul = new MultiStack(3, 1);

mul.push(0, 1);
mul.push(0, 2);
mul.push(0, 3);

mul.pop(0);
mul.pop(0);
mul.pop(0);