import solution1.TreeNode;
import solution1.CheckBST;

class Main1 {
  public static void main(String args[]) {
    CheckBST validateBST = new CheckBST();

    TreeNode node1a = new TreeNode(2);
    TreeNode node1b = new TreeNode(3);
    TreeNode node1c = new TreeNode(4);
    TreeNode node1d = new TreeNode(6);
    TreeNode node1e = new TreeNode(7);
    TreeNode node1f = new TreeNode(8);
    TreeNode node1g = new TreeNode(9);

    node1c.left = node1a;
    node1a.right = node1e;
    node1e.left = node1b;
    node1c.right = node1d;
    node1d.right = node1f;
    node1f.right = node1g;

    System.out.println(validateBST.checkBST(node1c) + " " + false);

    // Test 2

    TreeNode node2a = new TreeNode(1);
    TreeNode node2b = new TreeNode(2);
    TreeNode node2c = new TreeNode(3);
    TreeNode node2d = new TreeNode(4);
    TreeNode node2e = new TreeNode(5);
    TreeNode node2f = new TreeNode(6);
    TreeNode node2g = new TreeNode(7);

    node2d.left = node2b;
    node2b.left = node2a;
    node2b.right = node2c;
    node2d.right = node2f;
    node2f.left = node2e;
    node2f.right = node2g;

    System.out.println(validateBST.checkBST(node2d) + " " + true);

    // Test 3

    TreeNode node3a = new TreeNode(1);
    TreeNode node3b = new TreeNode(4);
    TreeNode node3c = new TreeNode(5);
    TreeNode node3d = new TreeNode(6);
    TreeNode node3e = new TreeNode(100);

    node3c.left = node3b;
    node3c.right = node3d;
    node3b.left =node3a;
    node3b.right = node3e;

    System.out.println(validateBST.checkBST(node3c) + " " + false);

    // Test 4

    TreeNode node4a = new TreeNode(1);
    TreeNode node4b = new TreeNode(3);
    TreeNode node4c = new TreeNode(4);
    TreeNode node4d = new TreeNode(5);
    TreeNode node4e = new TreeNode(6);

    node4d.left = node4b;
    node4d.right = node4e;
    node4b.left = node4a;
    node4b.right = node4c;

    System.out.println(validateBST.checkBST(node4d) + " " + true);
  }
}