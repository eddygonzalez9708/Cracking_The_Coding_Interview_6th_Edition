/*
2.5 Sum Lists:

You have two numbers represented by a linked list, where each node contains a single digit.
The digits are stored in reverse order, such that the 1's digit is at the head of the list.

Write a function that adds the two numbers and returns the sum as a linked list.

EXAMPLE

Input: (7 -> 1 -> 6) + (5 -> 9 -> 2). That is, 617 + 295.

Output: 2 -> 1 -> 9. That is, 912.

FOLLOW UP

Suppose the digits are stored in forward order.
Repeat the above problem.

EXAMPLE

Input: (6 -> 1 -> 7) + (2 -> 9 -> 5). That is, 617 + 295.

Output: 9 -> 1 -> 2. That is, 912.

Hints: #7, #30, #71, #95, #109
*/

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
};

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
};

function sumListsReverse(l1, l2) {
  let node1 = l1.head;
  let node2 = l2.head;
  const list = new LinkedList();
  let carryNum = 0;
  
  while (node1 || node2 || carryNum) {
    if (!node1 && !node2) {
      list.addToTail(carryNum);
      carryNum = 0;
    } else if (node1 && !node2) {
      list.addToTail(node1.val + carryNum)
      carryNum = 0;
      node1 = node1.next; 
    } else if (!node1 && node2) {
      list.addToTail(node2.val + carryNum);
      carryNum = 0;
      node2 = node2.next;
    } else {
      const total = node1.val + node2.val + carryNum;
      
      if (total < 10) {
        list.addToTail(total);
        carryNum = 0;
      } else {
        list.addToTail(total % 10);
        carryNum = (total - (total % 10)) / 10;
      }

      node1 = node1.next;
      node2 = node2.next;
    }
  }
  
  return list;
}

// Tests for My Solution
console.log("\n*** Sum Lists Reversed ***");
const list1 = new LinkedList();
const list2 = new LinkedList();

list1.addToTail(6);
list1.addToTail(1);
list1.addToTail(7);

list2.addToTail(2);
list2.addToTail(9);
list2.addToTail(5);

const list3 = sumListsReverse(list1, list2);
list3.printList();
console.log();

const list4 = new LinkedList();
const list5 = new LinkedList();

list4.addToTail(2);
list4.addToTail(4);
list4.addToTail(2);

list5.addToTail(5);
list5.addToTail(9);

const list6 = sumListsReverse(list4, list5);
list6.printList();
console.log();

const list7 = new LinkedList();
const list8 = new LinkedList();

list7.addToTail(9);
list7.addToTail(7);
list7.addToTail(8);

list8.addToTail(6);
list8.addToTail(8);
list8.addToTail(5);

const list9 = sumListsReverse(list7, list8);
list9.printList();
console.log();