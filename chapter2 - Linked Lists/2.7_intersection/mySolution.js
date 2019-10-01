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
  const stack1 = [];
  const stack2 = [];

  while (node1.next || node2.next) {
    if (node1.next && node2.next) {
      stack1.push(node1);
      stack2.push(node2);
      node1 = node1.next;
      node2 = node2.next;
    } else if (node1.next && !node2.next) {
      stack1.push(node1);
      node1 = node1.next; 
    } else {
      stack2.push(node2);
      node2 = node2.next;
    }
  }

  if (node1 === node2) {
    let intersect = null;

    while (stack1[stack1.length - 1] === stack2[stack2.length - 1]) {
      intersect = stack1[stack1.length - 1].value;
      stack1.pop();
      stack2.pop();
    }

    return intersect;
  }

  return null;
}

let a = new LinkedList('a');
let b = new LinkedList('b');
let c = new LinkedList('c');
let d = new LinkedList('d');
let e = new LinkedList('e');
let f = new LinkedList('f');
let g = new LinkedList('g');
let h = new LinkedList('h');

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