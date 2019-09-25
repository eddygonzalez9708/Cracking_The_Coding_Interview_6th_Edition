/*
2.3 Delete Middle Node:

Implement an algorithm to delete a node in the middle 

(i.e., any node but the first and last node, not necessarily the exact middle) of a singly linked list, given only access to that node.

EXAMPLE

Input: the node c from the linked list a -> b -> c -> d -> e -> f

Result: nothing is returned, but the new linked list looks like a -> b -> d -> e -> f

Hints: #72
*/

// 1 2 3

// 1 2 3 4

// 1 2 3 4 5

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
}

const list = new LinkedList();

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

list.delMidNode();

console.log("\n*** Start of the Linked List After Removing the Middle Node ***");
list.printList();
console.log("*** End of the Linked List After Removing the Middle Node ***");