function findSuccessor(n) {
  if (!n.right) {
    return checkPar(n.par, n.val);
  } else if (n.right && !n.right.left) {
    return n.right.val;
  } else {
    return n.right.left.val;
  }
};

function checkPar(n, val) {
  if (!n) {
    return null;
  }

  if (n.val > val) {
    return n.val;
  } else {
    return checkPar(n.par, val);
  }
};

module.exports = findSuccessor;