/*
2.7 Intersection:

Given two (singly) linked lists, determine if the two lists intersect.
Return the intersecting node.
Note that the intersection is defined based on reference, not value.
That is, if the kth node of the first linked list is the exact same node (by reference) as the jth node of the second linked list, then they are intersecting.

Hints: #20, #45, #55, #65, #76, #93, #111, #120, #129
*/

const LinkedList = require('../util/LinkedList');

function intersection(node1, node2) {
  while (node1.next || node2.next) {
    if (node1.next && node2.next) {
      node1 = node1.next;
      node2 = node2.next;
    } else if (node1.next && !node2.next) {
      node1 = node1.next; 
    } else {
      node2 = node2.next;
    }
  }

  return node1 === node2;
}

let a = new LinkedList('a');
let b = new LinkedList('a');
let c = new LinkedList('a');
let d = new LinkedList('a');
let e = new LinkedList('a');
let f = new LinkedList('a');
let g = new LinkedList('a');
let h = new LinkedList('a');

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
f.next = g;
g.next = h;

let i = new LinkedList('i');
let j = new LinkedList('j');
let k = new LinkedList('k');

i.next = j;
j.next = k;
k.next = d;

console.log(intersection(a, i));