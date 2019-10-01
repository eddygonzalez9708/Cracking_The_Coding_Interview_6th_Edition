/*
2.6 Palindrome: Implement a function to check if a linked list is a palindrome.

Hints: #5, #13, #29, #61, #101
*/

// My Solution

const LinkedList =  require('./util/LinkedList');

function checkPalindrome(head) {
  let str1 = '';
  let str2 = '';

  while (head) {
    if (head.value !== ' ') {
      str1 += head.value;
      str2 = head.value + str2;
    }

    head = head.next;
  }

  return str1 === str2 && str1 !== '' && str2 !== '';
}

// Tests for My Solution
let a = new LinkedList('A');
let b = new LinkedList('B');
let c = new LinkedList('C');
let d = new LinkedList('B');
let e = new LinkedList('A');

a.next = b;
b.next = c;
c.next = d;
d.next = e;

console.log(checkPalindrome(a));

a = new LinkedList('t');
b = new LinkedList('a');
c = new LinkedList('c');
d = new LinkedList('o');
e = new LinkedList(' ');
f = new LinkedList('c');
g = new LinkedList('a');
h = new LinkedList('t');

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
f.next = g;
g.next = h;

console.log(checkPalindrome(a));

a = new LinkedList('e');
b = new LinkedList('d');
c = new LinkedList('d');
d = new LinkedList('y');

a.next = b;
b.next = c;
c.next = d;

console.log(checkPalindrome(a));