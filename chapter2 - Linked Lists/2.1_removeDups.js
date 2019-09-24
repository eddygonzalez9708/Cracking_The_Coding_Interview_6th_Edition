/*
2.1 Remove Dups: 

Write code to remove duplicates from an unsorted linked list.

FOLLOW UP

How would you solve this problem if a temporary buffer is not allowed?

Hints: #9, #40
*/

// My Solution

class LinkedListOne {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addToTail(val) {
    const node = new Node(val);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else if (this.head === this.tail) {
      this.tail = node;
      this.head.next = this.tail;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  }

  printList() {
    let n = this.head;

    while (n !== null) {
      console.log(n.val);
      n = n.next
    }
  }

  removeDuplicates() {
    const cache = {};
    let n = this.head;
    let prev_n = null;

    while (n !== null) {
      if (cache[n.val]) {
        prev_n.next = n.next;
        n = prev_n.next;
      } else {
        cache[n.val] = true;
        prev_n = n;
        n = n.next;
      }
    }
  }
};

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
};

const list = new LinkedListOne();
const list2 = new LinkedListOne();
const list3 = new LinkedListOne();
const list4 = new LinkedListOne();

list.addToTail(1);
list.addToTail(1);
list.addToTail(2);
list.addToTail(2);
list.addToTail(2);
list.addToTail(2);
list.addToTail(4);
list.addToTail(2);
list.addToTail(5);
list.addToTail(5);

list2.addToTail('a');
list2.addToTail('b');
list2.addToTail('c');
list2.addToTail('d');
list2.addToTail('e');

list3.addToTail('f');
list3.addToTail('g');
list3.addToTail('g');
list3.addToTail('g');
list3.addToTail('g');

list4.addToTail('g');
list4.addToTail('g');
list4.addToTail('g');
list4.addToTail('b');
list4.addToTail('g');

// Test for My Solution
console.log();
console.log('*** Linked List One Before Removing Duplicates ***');
list.printList();
console.log();

console.log('*** Linked List One After Removing Duplicates ***');
list.removeDuplicates();
list.printList();

console.log();
console.log('*** Linked List Two Before Removing Duplicates ***');
list2.printList();
console.log();

console.log('*** Linked List Two After Removing Duplicates ***');
list2.removeDuplicates();
list2.printList();

console.log();
console.log('*** Linked List Three Before Removing Duplicates ***');
list3.printList();
console.log();

console.log('*** Linked List Three After Removing Duplicates ***');
list3.removeDuplicates();
list3.printList();

console.log();
console.log('*** Linked List Four Before Removing Duplicates ***');
list4.printList();
console.log();

console.log('*** Linked List Four After Removing Duplicates ***');
list4.removeDuplicates();
list4.printList();

// CTCI Solution

/* CLASS */
function LinkedListTwo(value) {
  this.value = value;
  this.next = null;
};

/* FUNCTIONS */
function checkDups(head, node) {
  var currNode = head;
  
  while (currNode !== node) {
    if (currNode.value === node.value) {
      return true;
    }
    currNode = currNode.next;
  }
  
  return false;
};

function printLinkedList(head) {
  var node = head;
  
  console.log('\nstart of linked list');
  
  while (node !== null) {
    console.log(node.value);
    node = node.next;
  }

  console.log('end of linked list');
};

function removeDups(head) {
  var node = head;
  
  while (node !== null) {
    if (node.next !== null && checkDups(head, node.next)) {
      node.next = node.next.next;
    } else {
      node = node.next;
    }
  }
  
  return head;
};

// TESTS for CTCI Solution
var a = new LinkedListTwo('a');
var b = new LinkedListTwo('b');
var c = new LinkedListTwo('c');
var d = new LinkedListTwo('d');
var e = new LinkedListTwo('e');

a.next = b;
b.next = c;
c.next = d;
d.next = e;

removeDups(a);
printLinkedList(a);

var f = new LinkedListTwo('f');
var g = new LinkedListTwo('g');
var h = new LinkedListTwo('g');
var i = new LinkedListTwo('g');
var j = new LinkedListTwo('g');

f.next = g;
g.next = h;
h.next = i;
i.next = j;

removeDups(f);
printLinkedList(f);

var k = new LinkedListTwo('g');
var l = new LinkedListTwo('g');
var m = new LinkedListTwo('g');
var n = new LinkedListTwo('b');
var o = new LinkedListTwo('g');

k.next = l;
l.next = m;
m.next = n;
n.next = o;

removeDups(k);
printLinkedList(k);

var p = new LinkedListTwo(1);
var q = new LinkedListTwo(1);
var r = new LinkedListTwo(2);
var s = new LinkedListTwo(2);
var t = new LinkedListTwo(2);
var u = new LinkedListTwo(2);
var v = new LinkedListTwo(4);
var w = new LinkedListTwo(2);
var x = new LinkedListTwo(5);
var y = new LinkedListTwo(5);

p.next = q;
q.next = r;
r.next = s;
s.next = t;
t.next = u;
u.next = v;
v.next = w;
w.next = x;
x.next = y;

removeDups(p);
printLinkedList(p);