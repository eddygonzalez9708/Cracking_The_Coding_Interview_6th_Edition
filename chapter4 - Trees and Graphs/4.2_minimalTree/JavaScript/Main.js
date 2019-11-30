const MinimalTree = require("./MinimalTree");
const inOrderPrint = require("./BT_Print").inOrderPrint;
const printLevel = require("./BT_Print").printLevel;

const minTree = new MinimalTree();

minTree.create([1, 2, 3, 4, 5, 6, 7, 8]);

inOrderPrint(minTree.root);

console.log();

printLevel(minTree.root);