package solution3;

public class CheckBST {
  public boolean checkBST(TreeNode n, Integer min, Integer max) {
    if (n == null) {
      return true;
    }

    if ((min != null && n.val <= min) || (max != null && n.val > max)) {
      return false;
    }

    if (!checkBST(n.left, min, n.val) || !checkBST(n.right, n.val, max)) {
      return false;
    }

    return true;
  }

  public boolean checkBST(TreeNode n) {
    return checkBST(n, null, null);
  }
}