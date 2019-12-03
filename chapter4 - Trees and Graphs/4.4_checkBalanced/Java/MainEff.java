import efficient.BST;
import efficient.CheckBalanced;

public class MainEff {
  public static void main(String args[]) {
    CheckBalanced check = new CheckBalanced();

    // Test 1

    BST tree1 = new BST(10);

    tree1.insert(8);
    tree1.insert(9);
    tree1.insert(6);
    tree1.insert(7);
    tree1.insert(20);
    tree1.insert(15);
    tree1.insert(14);
    tree1.insert(13);
    tree1.insert(16);
    tree1.insert(25);
    tree1.insert(24);
    tree1.insert(26);

    tree1.printLevel();

    System.out.println(check.isBalanced(tree1.root) + " " + true);

    tree1.insert(12);

    System.out.println(check.isBalanced(tree1.root) + " " + false);

    System.out.println();

    // Test 2

    BST tree2 = new BST(10);

    tree2.printLevel();

    System.out.println(check.isBalanced(tree2.root) + " " + true);

    tree2.insert(11);

    System.out.println(check.isBalanced(tree2.root) + " " + true);

    tree2.insert(12);

    System.out.println(check.isBalanced(tree2.root) + " " + false);

    tree2.insert(9);
    tree2.insert(9);

    System.out.println(check.isBalanced(tree2.root) + " " + true);

    System.out.println();

    // Test 3

    BST tree3 = new BST(1);

    tree3.insert(2);
    tree3.insert(3);
    tree3.insert(4);

    tree3.printLevel();

    System.out.println(check.isBalanced(tree3.root) + " " + false);
    
    System.out.println();

    // Test 4

    BST tree4 = new BST(4);

    tree4.insert(2);
    tree4.insert(6);
    tree4.insert(1);
    tree4.insert(3);
    tree4.insert(5);
    tree4.insert(7);

    tree4.printLevel();

    System.out.println(check.isBalanced(tree4.root) + " " + true);
  }
}