const TreeNode = require("./TreeNode");
const findSuccessor = require("./Successor");

const nodeA = new TreeNode(2);
const nodeB = new TreeNode(3);
const nodeC = new TreeNode(4);
const nodeD = new TreeNode(5);
const nodeE = new TreeNode(6);
const nodeF = new TreeNode(7);
const nodeG = new TreeNode(10);

nodeG.left = nodeA; nodeA.par = nodeG;
nodeA.right = nodeB; nodeB.par = nodeA;
nodeB.right = nodeC; nodeC.par = nodeB;
nodeC.right = nodeE; nodeE.par = nodeC;
nodeE.left = nodeD; nodeD.par = nodeE;
nodeE.right = nodeF; nodeF.par = nodeE;

console.log(findSuccessor(nodeA), 3);
console.log(findSuccessor(nodeB), 4);
console.log(findSuccessor(nodeC), 5);
console.log(findSuccessor(nodeD), 6);
console.log(findSuccessor(nodeE), 7);
console.log(findSuccessor(nodeF), 10);
console.log(findSuccessor(nodeG), null);