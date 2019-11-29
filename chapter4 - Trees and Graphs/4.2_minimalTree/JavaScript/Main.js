const MinimalTree = require("./MinimalTree");
const print = require("./Print");

const minTree = new MinimalTree();

minTree.create([1, 2, 3, 4, 5, 6, 7, 8]);

print(minTree.root);