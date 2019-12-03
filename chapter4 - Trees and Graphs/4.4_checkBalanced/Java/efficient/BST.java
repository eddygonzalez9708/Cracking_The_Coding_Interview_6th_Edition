package efficient;

import java.util.ArrayList;
import java.util.Queue;
import java.util.LinkedList;

public class BST {
  public TreeNode root;

  public BST(int val) {
    this.root = new TreeNode(val);
  }

  public void insert(int val) {
    this.root.insert(val);
  }

  public void printLevel() {
    ArrayList<Integer> level = new ArrayList<>();
    Queue<TreeNode> q = new LinkedList<>();
    Queue<TreeNode> nextq = new LinkedList<>();

    q.add(this.root);

    while (!q.isEmpty()) {
      TreeNode currNode = q.poll();
      level.add(currNode.val);

      if (currNode.left != null) {
        nextq.add(currNode.left);
      }

      if (currNode.right != null) {
        nextq.add(currNode.right);
      }

      if (q.isEmpty()) {
        System.out.println(level);
        q = nextq;
        nextq = new LinkedList<>();
        level = new ArrayList<>();
      }
    }
  }
}