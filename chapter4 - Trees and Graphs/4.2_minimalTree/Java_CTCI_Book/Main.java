import java.util.LinkedList;
import java.util.Queue;
import java.util.ArrayList;

public class Main {
  public static TreeNode createMinimalBST(int array[]) {
    return createMinimalBST(array, 0, array.length - 1);
  }

  public static TreeNode createMinimalBST(int arr[], int start, int end) {
    if (end < start) {
      return null;
    }

    int mid = (start + end) / 2;
    TreeNode n = new TreeNode(arr[mid]);
    n.left = createMinimalBST(arr, start, mid - 1);
    n.right = createMinimalBST(arr, mid + 1, end);
    return n;
  }

  public static void inOrderPrint(TreeNode root) {
    if (root.left != null) {
      inOrderPrint(root.left);
    }

    System.out.println(root.val);

    if (root.right != null) {
      inOrderPrint(root.right);
    }
  }

  public static void printLevel(TreeNode root) {
    Queue<TreeNode> mainQueue = new LinkedList<>();
    Queue<TreeNode> levelQueue = new LinkedList<>();
    Queue<TreeNode> tempQueue = new LinkedList<>();

    mainQueue.add(root);

    while (!mainQueue.isEmpty()) {
      TreeNode currNode = mainQueue.poll();
      levelQueue.add(currNode);

      if (currNode.left != null) {
        tempQueue.add(currNode.left);
      }

      if (currNode.right != null) {
        tempQueue.add(currNode.right);
      }

      if (mainQueue.isEmpty()) {
        ArrayList<Integer> tempArrList = new ArrayList<>();
        
        while (!levelQueue.isEmpty()) {
          TreeNode levelNode = levelQueue.poll();
          tempArrList.add(levelNode.val);
        }

        mainQueue = tempQueue;
        tempQueue = new LinkedList<>();

        System.out.println(tempArrList);
      }
    }
  }

  public static void main(String args[]) {
    int[] arr1 = {1, 2, 3, 4, 5, 6};
    TreeNode minBST = createMinimalBST(arr1);

    inOrderPrint(minBST);

    System.out.println();

    printLevel(minBST);

    System.out.println();

    int[] arr2 = {1, 2, 3, 4, 5, 6, 7, 8};
    TreeNode minBST2 = createMinimalBST(arr2);

    inOrderPrint(minBST2);

    System.out.println();

    printLevel(minBST2);
  }
}