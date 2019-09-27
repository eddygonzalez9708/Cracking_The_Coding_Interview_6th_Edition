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

function sumLists(l1, l2) {
  function helperFunc(node, exp) {
    if (!node) {
      return 0;
    }
    
    return (node.val * (10 ** exp)) + helperFunc(node.next, exp + 1);
  }
  
  const sum1 = helperFunc(l1.head, 0);
  const sum2 = helperFunc(l2.head, 0);

  function createList(total) {
    let exp = 1;
    const newList = new LinkedList();
  
    while (total) {
      const num = (total % (10 ** exp));
      const div = (10 ** (exp - 1));
      const result = num / div;
      
      newList.addToTail(result);
      
      total -= num;
      exp++;
    }

    return newList;
  }

  return createList(sum1 + sum2)
}

// Tests for My Solution

const list1 = new LinkedList();
const list2 = new LinkedList();

list1.addToTail(6);
list1.addToTail(1);
list1.addToTail(7);

list2.addToTail(2);
list2.addToTail(9);
list2.addToTail(5);

const list3 = sumLists(list1, list2);
list3.printList();
console.log();

const list4 = new LinkedList();
const list5 = new LinkedList();

list4.addToTail(2);
list4.addToTail(4);
list4.addToTail(2);

list5.addToTail(5);
list5.addToTail(9);

const list6 = sumLists(list4, list5);
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

const list9 = sumLists(list7, list8);
list9.printList();
console.log();