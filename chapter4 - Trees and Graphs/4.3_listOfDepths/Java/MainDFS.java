import dfs.BST;
import dfs.ListOfDepths;
import dfs.TreeNode;

import java.util.ArrayList;
import java.util.LinkedList;
import java.util.Iterator;

public class MainDFS {
  public static void printList(ArrayList<LinkedList<TreeNode>> list) {
    for (LinkedList ll : list) {
      Iterator<TreeNode> iterate = ll.iterator();
      
      while (iterate.hasNext()) {
        System.out.print(iterate.next().val + " ");
      }

      System.out.println();
    }
  }

  public static void main(String args[]) {
    BST tree = new BST(4);

    tree.insert(2);
    tree.insert(6);
    tree.insert(1);
    tree.insert(3);
    tree.insert(5);
    tree.insert(7);

    tree.printLevel();

    System.out.println();

    ListOfDepths listOfDepths = new ListOfDepths();
    ArrayList<LinkedList<TreeNode>> list1 = listOfDepths.createLevelLinkedList(tree.root);

    printList(list1);

    System.out.println();

    tree.insert(8);

    tree.printLevel();

    System.out.println();

    ArrayList<LinkedList<TreeNode>> list2 = listOfDepths.createLevelLinkedList(tree.root);

    printList(list2);
  }
}