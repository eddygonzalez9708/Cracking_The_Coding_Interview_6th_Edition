const BST = require("./BST");
const listOfDepths = require("./ListOfDepths");

const bst = new BST();
bst.create([1, 2, 3, 4, 5, 6]);

const list = listOfDepths.create(bst.root);
listOfDepths.printLevel(list);

console.log();

const bst2 = new BST();
bst2.create([1, 2, 3, 4, 5, 6, 7, 8]);

const list2 = listOfDepths.create(bst2.root);
listOfDepths.printLevel(list2);