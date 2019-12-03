package inefficient;

public class CheckBalanced {
  public int getHeight(TreeNode root) {
    if (root == null) return -1; // Base case
    return Math.max(getHeight(root.left), getHeight(root.right)) + 1;
  }

  public boolean isBalanced(TreeNode root) {
    if (root == null) return true; // Base case

    int heightDiff = getHeight(root.left) - getHeight(root.right);

    if (Math.abs(heightDiff) > 1) {
      return false;
    } else { // Recurse
      return isBalanced(root.left) && isBalanced(root.right);
    }
  }
}