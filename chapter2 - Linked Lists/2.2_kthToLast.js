/*
2.2 Return Kth to Last:

Implement an algorithm to find the kth to last element of a singly linked list.

Hints: #8, #25, #47, #67, #726
*/

// My Solution

// Linked List Class
class LinkedListOne {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // Add a node to the Linked List
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

  // Print each node value in the Linked List
  printList() {
    let n = this.head;

    while (n !== null) {
      console.log(n.val);
      n = n.next;
    }
  }

  // Return the kth to last node in the Linked List
  kthToLastNode(k) {
    let count = 0;
    // The first pointer will be the kth node
    // the second pointer will be the running node
    let ptr1 = this.head;
    let ptr2 = this.head;

    if (k < 1) {
      return null;
    }

    // Move the second pointer kth steps in the Linked List
    while (count < k && ptr2 !== null) {
      ptr2 = ptr2.next;
      count++;
    }

    // Move both pointers until the second pointer is null
    // When the second pointer is null, the first pointer will be the kth to last node
    while (count <= k && ptr2 !== null) {
      ptr1 = ptr1.next;
      ptr2 = ptr2.next;
    }

    return count < k ? null : ptr1.val;
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

console.log("\n*** Start of the Linked List ***")
list.printList();
console.log("*** End of the Linked List ***")

// Tests for My Solution
console.log(`\nIf K = ${1}. The Kth to Last Node is ${list.kthToLastNode(1)}`);
console.log(`\nIf K = ${2}. The Kth to Last Node is ${list.kthToLastNode(2)}`);
console.log(`\nIf K = ${3}. The Kth to Last Node is ${list.kthToLastNode(3)}`);
console.log(`\nIf K = ${4}. The Kth to Last Node is ${list.kthToLastNode(4)}`);
console.log(`\nIf K = ${5}. The Kth to Last Node is ${list.kthToLastNode(5)}`);
console.log(`\nIf K = ${6}. The Kth to Last Node is ${list.kthToLastNode(6)}`);
console.log(`\nIf K = ${-1}. The Kth to Last Node is ${list.kthToLastNode(-1)}`);