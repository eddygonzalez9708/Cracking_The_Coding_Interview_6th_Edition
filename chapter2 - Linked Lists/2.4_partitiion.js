/*
2.4 Partition:

Write code to partition a linked list around a value x, such that all nodes less than x come before all nodes greater than or equal to x.
lf x is contained within the list, the values of x only need to be after the elements less than x (see below).The partition element x can appear anywhere in the "right partition";
it does not need to appear between the left and right partitions.

Input: 3 -> 5 -> 8 -> 5 ->10 -> 2 -> 1 [partition=5)
Output: 3 -> 1 -> 2 -> 10 -> 5 -> 5 -> 8

Hints: #3, #24
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

  partition(par) {
    let less_list = null;
    let equal_list = null;
    let greater_list = null;

    let node = this.head;

    function addNode(l, node) {
      if (!l) {
        l = new LinkedListOne();
        l.addToTail(node.val);
      } else {
        l.addToTail(node.val);
      }

      return l;
    }

    while (node) {      
      if (node.val < par) {
        less_list = addNode(less_list, node);
      } else if (node.val === par) {
        equal_list = addNode(equal_list, node);
      } else {
        greater_list = addNode(greater_list, node);
      }

      node = node.next;
    }

    if (!equal_list) {
      console.log(`The partition ${par} does not exist in the Linked List.`);
    } else if (!less_list && greater_list) {
      equal_list.tail.next = greater_list.head;
      this.head = equal_list.head;
      this.tail = greater_list.tail;
    } else if (!greater_list && less_list) {
      less_list.tail.next = equal_list.head;
      this.head = less_list.head;
      this.tail = equal_list.tail;
    } else if (less_list && greater_list) {
      less_list.tail.next = equal_list.head;
      equal_list.tail.next = greater_list.head;
      this.head = less_list.head;
      this.tail = greater_list.tail;
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

list.addToTail(3);
list.addToTail(5);
list.addToTail(8);
list.addToTail(5);
list.addToTail(10);
list.addToTail(2);
list.addToTail(1);

console.log("\n*** Start of the Linked List ***");
list.printList();
console.log("*** End of the Linked List ***");

console.log("\n*** Start of the Linked List After Partitioning ***");
list.partition(5);
list.printList();
console.log("*** End of the Linked List After Partitioning ***");

// CTCI Solution

function LinkedListTwo(value) {
  this.value = value;
  this.next = null;
};

function partition(head, partition) {
  // approach is to create left and right threads
  // and attach nodes with values less than partition value to the left
  // and nodes with values more than partition value to the right
  var left;
  var right;
  var currLeft = null;
  var currRight = null;

  var node = head;
  
  while (node !== null) {
    if (node.value < partition) {
      if (currLeft === null) {
        left = node;
        currLeft = left;
      } else {
        currLeft.next = node;
        currLeft = currLeft.next;
      }
    } else {
      if (currRight === null) {
        right = node;
        currRight = right;
      } else {
        currRight.next = node;
        currRight = currRight.next;
      }
    }
    
    node = node.next;
  }

  currRight.next = null;
  currLeft.next = right; // connect two partitions together
  return left; // return head of new linkedList
};

// Test for the CTCI Solution

function printList(a) {
  while (a !== null) {
    console.log(a.value);
    a = a.next;
  }
};

var a = new LinkedListTwo(3);
var b = new LinkedListTwo(5);
var c = new LinkedListTwo(8);
var d = new LinkedListTwo(5);
var e = new LinkedListTwo(10);
var f = new LinkedListTwo(2);
var g = new LinkedListTwo(1);

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
f.next = g;

var newa = partition(a, 5);
console.log();
printList(newa);