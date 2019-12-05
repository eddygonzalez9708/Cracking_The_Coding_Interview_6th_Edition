package solution3;

public class TreeNode {
  public int val;
  public TreeNode left;
  public TreeNode right;

  public TreeNode(int val) {
    this.val = val;
  }

  public int getSize() {
    int left = this.left != null ? this.left.getSize() : 0;
    int right = this.right != null ? this.right.getSize() : 0;

    return 1 + left + right;
  }
}