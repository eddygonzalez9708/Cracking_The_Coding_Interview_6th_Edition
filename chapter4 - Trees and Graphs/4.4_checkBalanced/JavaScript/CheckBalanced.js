function checkBalanced(root) {
  if (!root) {
    return false;
  }

  function helperFunc(root) {
    if (!root) {
      return 0;
    }

    const leftResult = helperFunc(root.left);
    const rightResult = helperFunc(root.right);
    const total = Math.abs(leftResult - rightResult);

    if (leftResult < 0 || rightResult < 0 || total > 1) {
      return -1;
    } else {
      return 1 + Math.max(leftResult, rightResult);
    }
  };

  const leftResult = helperFunc(root.left);
  const rightResult = helperFunc(root.right);
  const total = Math.abs(leftResult - rightResult);

  if (leftResult < 0 || rightResult < 0 || total > 1) {
    return false
  } else {
    return true;
  }
}

module.exports = checkBalanced;