var LinkedList = require('../util/LinkedList');

var loopDetection = (head) => {
  var hare = head;
  var tortoise = head;
  
  while (hare !== null) {
    tortoise = tortoise.next;
    hare = hare.next;
    
    if (hare === tortoise && hare !== head.next) {
      return true;
    }
    
    if (hare !== null) {
      hare = hare.next;
      
      if (hare === tortoise) {
        return true;
      }
    }
  }

  return false;
};

/* TEST */
// A -> B -> C -> D -> E -> C

var a = new LinkedList('a');
var b = new LinkedList('b');
var c = new LinkedList('c');
var d = new LinkedList('d');
var e = new LinkedList('e');
var f = new LinkedList('f');

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
f.next = c;

console.log(loopDetection(a), true);

var A = new LinkedList('A');
var B = new LinkedList('B');
var C = new LinkedList('C');
var D = new LinkedList('D');
var E = new LinkedList('E');
var F = new LinkedList('F');

A.next = B;
B.next = C;
C.next = D;
D.next = E;
E.next = F;

console.log(loopDetection(A), false);