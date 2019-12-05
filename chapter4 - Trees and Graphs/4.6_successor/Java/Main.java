import successor.TreeNode;
import successor.Successor;

class Main {
  public static void main(String args[]) {
    Successor sucessor = new Successor();


    TreeNode nodeA = new TreeNode(2);
    TreeNode nodeB = new TreeNode(3);
    TreeNode nodeC = new TreeNode(4);
    TreeNode nodeD = new TreeNode(5);
    TreeNode nodeE = new TreeNode(6);
    TreeNode nodeF = new TreeNode(7);
    TreeNode nodeG = new TreeNode(10);

    nodeG.left = nodeA; nodeA.parent = nodeG;
    nodeA.right = nodeB; nodeB.parent = nodeA;
    nodeB.right = nodeC; nodeC.parent = nodeB;
    nodeC.right = nodeE; nodeE.parent = nodeC;
    nodeE.left = nodeD; nodeD.parent = nodeE;
    nodeE.right = nodeF; nodeF.parent = nodeE;

    System.out.println(sucessor.inorderSucc(nodeA) + " " + 3);
    System.out.println(sucessor.inorderSucc(nodeB) + " " + 4);
    System.out.println(sucessor.inorderSucc(nodeC) + " " + 5);
    System.out.println(sucessor.inorderSucc(nodeD) + " " + 6);
    System.out.println(sucessor.inorderSucc(nodeE) + " " + 7);
    System.out.println(sucessor.inorderSucc(nodeF) + " " + 10);
    System.out.println(sucessor.inorderSucc(nodeG) + " " + null);
  }
}