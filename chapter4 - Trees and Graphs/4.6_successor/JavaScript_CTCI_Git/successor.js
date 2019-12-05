var BSTp = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;
  this.parent = null;
};

var findSuccessor = function(node) {
  var sucessor = null;

  if (node.right !== null) {
    sucessor = node.right;

    while (sucessor.left !== null) {
      sucessor = sucessor.left;
    }
  } else if (node.parent !== null) {
    var currNode = node;

    while (currNode.parent !== null && sucessor === null) {
      if (currNode.parent.left === currNode) {
        sucessor = currNode.parent;
      }

      currNode = currNode.parent;
    }
  }

  return sucessor ? sucessor.value : null;
};

/* TEST */

var a = new BSTp(10);
var b = new BSTp(2);
var c = new BSTp(3);
var d = new BSTp(4);
var e = new BSTp(6);
var f = new BSTp(5);
var g = new BSTp(7);

a.left = b; b.parent = a;
b.right = c; c.parent = b;
c.right = d; d.parent = c;
d.right = e; e.parent = d;
e.left = f; f.parent = e;
e.right = g; g.parent = e;

console.log(findSuccessor(a), null);
console.log(findSuccessor(b), 3);
console.log(findSuccessor(c), 4);
console.log(findSuccessor(d), 5);
console.log(findSuccessor(e), 7);
console.log(findSuccessor(f), 6);
console.log(findSuccessor(g), 10);