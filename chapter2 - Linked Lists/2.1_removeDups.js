/*
2.1 Remove Dups: 

Write code to remove duplicates from an unsorted linked list.

FOLLOW UP

How would you solve this problem if a temporary buffer is not allowed?

Hints: #9, #40
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

const list = new LinkedList();

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

// Test for My Solution
console.log();
console.log('*** Linked List Before Removing Duplicates ***');
list.printList();
console.log();

console.log('*** Linked List After Removing Duplicates ***');
list.removeDuplicates();
list.printList();