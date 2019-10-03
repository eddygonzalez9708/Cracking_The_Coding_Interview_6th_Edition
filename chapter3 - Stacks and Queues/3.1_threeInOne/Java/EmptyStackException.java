public class EmptyStackException extends Exception {
  public EmptyStackException(int stackNum) {
    super ("Stack " + stackNum + " is empty.");
  }
}