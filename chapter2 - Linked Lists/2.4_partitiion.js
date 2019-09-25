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

class LinkedList {
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
        l = new LinkedList();
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

const list = new LinkedList();

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