package dfs;

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
    Queue<TreeNode> q = new LinkedList<>();
    Queue<TreeNode> nextq = new LinkedList<>();
    ArrayList<Integer> list = new ArrayList<>();

    q.add(this.root);

    while (!q.isEmpty()) {
      TreeNode currNode = q.poll();
      list.add(currNode.val);

      if (currNode.left != null) {
        nextq.add(currNode.left);
      }

      if (currNode.right != null) {
        nextq.add(currNode.right);
      }

      if (q.isEmpty()) {
        System.out.println(list);
        q = nextq;
        nextq = new LinkedList<>();
        list = new ArrayList<>();
      }
    }
  }
}