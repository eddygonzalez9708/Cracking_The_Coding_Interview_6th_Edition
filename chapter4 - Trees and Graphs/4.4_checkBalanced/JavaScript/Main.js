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

console.log(checkBalanced(tree1.root), true);

tree1.insert(12);

console.log(checkBalanced(tree1.root), false);

console.log();

// Test 2

const tree2 = new BST(10);

tree2.printLevel();

console.log(checkBalanced(tree2.root), true);

tree2.insert(11);

console.log(checkBalanced(tree2.root), true);

tree2.insert(12);

console.log(checkBalanced(tree2.root), false);

tree2.insert(9);
tree2.insert(9);

console.log(checkBalanced(tree2.root), true);

console.log();

// Test 3

const tree3 = new BST(1);

tree3.insert(2);
tree3.insert(3);
tree3.insert(4);

tree3.printLevel();

console.log(checkBalanced(tree3.root), false);

console.log();

// Test 4

const tree4 = new BST(4);

tree4.insert(2);
tree4.insert(6);
tree4.insert(1);
tree4.insert(3);
tree4.insert(5);
tree4.insert(7);

tree4.printLevel();

console.log(checkBalanced(tree4.root), true);