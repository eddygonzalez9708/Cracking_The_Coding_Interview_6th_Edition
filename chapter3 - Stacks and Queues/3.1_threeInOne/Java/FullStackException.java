public class FullStackException extends Exception {
  public FullStackException(int stackNum) {
    super ("Stack " + stackNum + " is full.");
  }
}