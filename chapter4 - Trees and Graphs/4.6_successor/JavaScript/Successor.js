function findSuccessor(n) {
  let successor = null;

  if (n.right) {
    successor = n.right;

    while (successor.left) {
      successor = successor.left;
      break;
    }
  } else if (n.par) {
    let currNode = n;

    while (currNode.par && !successor) {
      if (currNode.par.left === currNode) {
        successor = currNode.par;
      }

      currNode = currNode.par;
    }
  }

  return successor ? successor.val : null;
};

module.exports = findSuccessor;