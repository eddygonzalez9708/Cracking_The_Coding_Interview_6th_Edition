/*
2.8 Loop Detection:

Given a circular linked list, implement an algorithm that returns the node at the beginning of the loop.

DEFINITION

Circular linked list:

A (corrupt) linked list in which a node's next pointer points to an earlier node, so as to make a loop in the linked list.

EXAMPLE

Input: A -> B -> C -> D -> E -> C  [the same C as earlier]

Output: C

Hints: #50, #69, #83, #90
*/

const LinkedList = require('../util/LinkedList')

function loopDetection(node) {
  const weakmap = new WeakMap();

  while (node) {
    if (weakmap.has(node)) {
      return node.value;
    } else {
      weakmap.set(node, true);
    }

    node = node.next;
  }

  return false;
};

const a = new LinkedList('a')
const b = new LinkedList('b')
const c = new LinkedList('c')
const d = new LinkedList('d')
const e = new LinkedList('e')

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = c;

console.log(loopDetection(a));