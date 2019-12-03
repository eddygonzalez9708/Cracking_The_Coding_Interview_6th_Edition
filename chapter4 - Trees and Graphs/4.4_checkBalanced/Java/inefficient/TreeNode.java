package inefficient;

public class TreeNode {
  int val;
  TreeNode left;
  TreeNode right;

  public TreeNode(int val) {
    this.val = val;
  }

  public void insert(int val) {
    if (val < this.val) {
      if (this.left == null) {
        this.left = new TreeNode(val);
      } else {
        this.left.insert(val);
      }
    } else {
      if (this.right == null) {
        this.right = new TreeNode(val);
      } else {
        this.right.insert(val);
      }
    }
  }
}