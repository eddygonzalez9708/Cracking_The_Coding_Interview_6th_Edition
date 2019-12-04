package solution2;

public class CheckBST {
  Integer last_printed;

  public boolean checkBSTHelper(TreeNode n) {
    if (n == null) return true;

    // Check // recurse left
    if (!checkBSTHelper(n.left)) return false;

    // Check current
    if (last_printed != null && n.val <= last_printed) {
      return false;
    }

    last_printed = n.val;

    // Check / recurse right

    if (!checkBSTHelper(n.right)) return false;

    return true; // All good!
  }

  public boolean checkBST(TreeNode n) {
    last_printed = null;
    return checkBSTHelper(n);
  }
}