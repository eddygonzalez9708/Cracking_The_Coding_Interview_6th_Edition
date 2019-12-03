const BST = require("./BST");
const checkBalanced = require("./CheckBalanced");

// Test 1

const tree1 = new BST(10);

tree1.insert(8);
tree1.insert(9);
tree1.insert(6);
tree1.insert(7);
tree1.insert(20);
tree1.insert(15);
tree1.insert(14);
tree1.insert(13);
tree1.insert(16);
tree1.insert(25);
tree1.insert(24);
tree1.insert(26);

tree1.printLevel();

console.log(checkBalanced(tree1.root));

tree1.insert(12);

console.log(checkBalanced(tree1.root));

console.log();

// Test 2

const tree2 = new BST(10);

tree2.printLevel();

console.log(checkBalanced(tree2.root));

tree2.insert(11);

console.log(checkBalanced(tree2.root));

tree2.insert(12);

console.log(checkBalanced(tree2.root));

tree2.insert(9);
tree2.insert(9);

console.log(checkBalanced(tree2.root));
