const Node = require("./Node");
const Graph = require("./Graph");

// Test 1

const n1 = new Node(1);
const n2 = new Node(2);
const n3 = new Node(3);

n1.addNeighbor(n2);
n2.addNeighbor(n3);
n3.addNeighbor(n1);

const g1 = new Graph();

g1.addNodes(n1, n2, n3);

console.log(g1.routeBetweenNodes(n1, n1), true);
console.log(g1.routeBetweenNodes(n1, n2), true);
console.log(g1.routeBetweenNodes(n1, n3), true);

console.log(g1.routeBetweenNodes(n2, n1), true);
console.log(g1.routeBetweenNodes(n2, n2), true);
console.log(g1.routeBetweenNodes(n2, n3), true);

console.log(g1.routeBetweenNodes(n3, n1), true);
console.log(g1.routeBetweenNodes(n3, n2), true);
console.log(g1.routeBetweenNodes(n3, n3), true);

// Test 2

const n4 = new Node(4);
const n5 = new Node(5);
const n6 = new Node(6);
const n7 = new Node(7);

n4.addNeighbor(n5);
n5.addNeighbor(n6);
n6.addNeighbor(n4, n7);

const g2 = new Graph();

g2.addNodes(n4, n5, n6, n7);

console.log(g1.routeBetweenNodes(n4, n4), true);
console.log(g1.routeBetweenNodes(n4, n5), true);
console.log(g1.routeBetweenNodes(n4, n6), true);
console.log(g1.routeBetweenNodes(n4, n7), true);

console.log(g1.routeBetweenNodes(n5, n4), true);
console.log(g1.routeBetweenNodes(n5, n5), true);
console.log(g1.routeBetweenNodes(n5, n6), true);
console.log(g1.routeBetweenNodes(n5, n7), true);

console.log(g1.routeBetweenNodes(n6, n4), true);
console.log(g1.routeBetweenNodes(n6, n5), true);
console.log(g1.routeBetweenNodes(n6, n6), true);
console.log(g1.routeBetweenNodes(n6, n7), true);

console.log(g1.routeBetweenNodes(n7, n4), false);
console.log(g1.routeBetweenNodes(n7, n5), false);
console.log(g1.routeBetweenNodes(n7, n6), false);
console.log(g1.routeBetweenNodes(n7, n7), false);