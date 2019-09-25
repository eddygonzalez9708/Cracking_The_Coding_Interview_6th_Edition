/*
2.3 Delete Middle Node:

Implement an algorithm to delete a node in the middle 

(i.e., any node but the first and last node, not necessarily the exact middle) of a singly linked list, given only access to that node.

EXAMPLE

Input: the node c from the linked list a -> b -> c -> d -> e -> f

Result: nothing is returned, but the new linked list looks like a -> b -> d -> e -> f

Hints: #72
*/

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
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  }

  printList() {
    let n = this.head;

    while (n) {
      console.log(n.val);
      n = n.next;
    }
  }

  movePtr(ptr, steps) {
    let count = 0;
    
    while (ptr && count < steps) {
      count++;
      ptr = ptr.next;   
    }

    return ptr;
  }

  delMidNode() {
    let ptr1 = this.head;
    let ptr2 = this.head;
    let prev_node = null;

    ptr2 = this.movePtr(ptr2, 2);

    if (!ptr2) {
      console.log("\nCannot remove the head or tail in the Linked List.");
    } else {
      while (ptr2) {
        prev_node = ptr1;
        ptr1 = ptr1.next;
        ptr2 = this.movePtr(ptr2, 2);
      }

      prev_node.next = prev_node.next.next;
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

list.addToTail(1);
list.addToTail(2);
list.addToTail(3);
list.addToTail(4);
list.addToTail(5);
list.addToTail(6);
list.addToTail(7);
list.addToTail(8);
list.addToTail(9);
list.addToTail(10);

console.log("\n*** Start of the Linked List ***");
list.printList();
console.log("*** End of the Linked List ***");

// Test for My Solution
list.delMidNode();

console.log("\n*** Start of the Linked List After Removing the Middle Node ***");
list.printList();
console.log("*** End of the Linked List After Removing the Middle Node ***");

// CTCI Solution

function LinkedListTwo(value) {
  this.value = value;
  this.next = null;
};

function deleteMidNode(midNode) {
  var node = midNode;
  
  while (node !== null && node.next !== null) {
    node.value = node.next.value;
    
    if (node.next.next === null) {
      node.next = null;
    } 
    
    node = node.next;
  }
};

// a -> b -> c -> d -> e -> f, input c
// a -> b -> *d -> d -> e -> f
// a -> b -> d -> *e -> e -> f
// a -> b -> d -> e -> *f -> f
// a -> b -> d -> e -> f -> *null

function printList(head) {
  console.log();
  
  while (head !== null) {
    console.log(head.value);
    head = head.next;
  }
  
  console.log('done printing');
};

var a = new LinkedListTwo('a');
var b = new LinkedListTwo('b');
var c = new LinkedListTwo('c');
var d = new LinkedListTwo('d');
var e = new LinkedListTwo('e');
var f = new LinkedListTwo('f');

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

// Test for CTCI Solution
printList(a);
deleteMidNode(c);
printList(a);