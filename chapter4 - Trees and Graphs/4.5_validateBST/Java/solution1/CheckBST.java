package solution1;

public class CheckBST {
  int index;

  public void copyBST(TreeNode root, int[] array) {
    if (root == null) return;
    copyBST(root.left, array);
    array[index] = root.val;
    index++;
    copyBST(root.right, array);
  }

  public boolean checkBST(TreeNode root) {
    int[]  array = new int[root.getSize()];
    index = 0;
    copyBST(root, array);
    
    for (int i = 1; i < array.length; i++) {
      if (array[i] <= array[i - 1]) return false;
    }

    return true;
  }
}