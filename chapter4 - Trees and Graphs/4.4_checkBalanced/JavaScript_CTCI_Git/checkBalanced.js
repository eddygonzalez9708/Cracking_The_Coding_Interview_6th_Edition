var BST = require("./BST");

var checkBalanced = function(bst) {
  // Case where left is null and right is not null
  if (bst.left === null && bst.right !== null) {
    if (bst.right.left !== null || bst.right.right !== null) {
      return false;
    }
  }

  // Case where left is not nulll and right is null
  if (bst.left !== null && bst.right === null) {
    if (bst.left.left !== null || bst.left.right !== null) {
      return false;
    }
  }

  // Initialize answer variable as true
  var answer = true;

  // If bst.left is not null, recursively call checkBalanced on bst.left
  if (bst.left !== null) {
    answer = answer && checkBalanced(bst.left);
  }

  // If bst.right is not null, recursively call checkBalanced on bst.right
  if (bst.right !== null) {
    answer = answer && checkBalanced(bst.right);
  }

  return answer;
};

/* TEST */

var b1 = new BST(1);

b1.insert(2);
b1.insert(3);
b1.insert(4);

console.log(checkBalanced(b1), false);

var b2 = new BST(4);

b2.insert(2);
b2.insert(6);
b2.insert(1);
b2.insert(3);
b2.insert(5);
b2.insert(7);

console.log(checkBalanced(b2), true);