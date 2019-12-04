const TreeNode = require("./TreeNode");
const validateBST = require("./ValidateBST");

// Test 1

const node1a = new TreeNode(2);
const node1b = new TreeNode(3);
const node1c = new TreeNode(4);
const node1d = new TreeNode(6);
const node1e = new TreeNode(7);
const node1f = new TreeNode(8);
const node1g = new TreeNode(9);

node1c.left = node1a;
node1a.right = node1e;
node1e.left = node1b;
node1c.right = node1d;
node1d.right = node1f;
node1f.right = node1g;

console.log(validateBST(node1c), false);

// Test 2

const node2a = new TreeNode(1);
const node2b = new TreeNode(2);
const node2c = new TreeNode(3);
const node2d = new TreeNode(4);
const node2e = new TreeNode(5);
const node2f = new TreeNode(6);
const node2g = new TreeNode(7);

node2d.left = node2b;
node2b.left = node2a;
node2b.right = node2c;
node2d.right = node2f;
node2f.left = node2e;
node2f.right = node2g;

console.log(validateBST(node2d), true);

// Test 3

const node3a = new TreeNode(1);
const node3b = new TreeNode(4);
const node3c = new TreeNode(5);
const node3d = new TreeNode(6);
const node3e = new TreeNode(100);

node3c.left = node3b;
node3c.right = node3d;
node3b.left =node3a;
node3b.right = node3e;

console.log(validateBST(node3c), false);

// Test 4

const node4a = new TreeNode(1);
const node4b = new TreeNode(3);
const node4c = new TreeNode(4);
const node4d = new TreeNode(5);
const node4e = new TreeNode(6);

node4d.left = node4b;
node4d.right = node4e;
node4b.left = node4a;
node4b.right = node4c;

console.log(validateBST(node4d), true);