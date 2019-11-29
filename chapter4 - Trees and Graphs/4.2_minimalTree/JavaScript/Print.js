function print(root) {
  if (root.left) {
    print(root.left);
  }

  console.log(root.val);

  if (root.right) {
    print(root.right);
  }
};

module.exports = print;