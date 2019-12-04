let mid;

function checkSide(currNode, side) {
  if (side === "left" && currNode.val > mid) {
    return false;
  } else if (side === "right" && currNode.val < mid) {
    return false;
  } else {
    return true;
  }
};

function checkLeft(root, currNode, side) {
  if (!currNode) {
    return true;
  }

  if (currNode.val <= root.val) {
    if (!checkSide(currNode, side)) {
      return false;
    }

    return true && checkLeft(currNode, currNode.left, side) && checkRight(currNode, currNode.right, side);
  }
  
  return false;
};

function checkRight(root, currNode, side) {
  if (!currNode) {
    return true;
  }

  if (currNode.val > root.val) {
    if (!checkSide(currNode, side)) {
      return false;
    }
    
    return true && checkLeft(currNode, currNode.left, side) && checkRight(currNode, currNode.right, side);
  }
  
  return false;
};

function validateBST(root) {
  if (root) {
    mid = root.val;
    return true && checkLeft(root, root.left, "left") && checkRight(root, root.right, "right");
  }

  return false;
};

module.exports = validateBST;