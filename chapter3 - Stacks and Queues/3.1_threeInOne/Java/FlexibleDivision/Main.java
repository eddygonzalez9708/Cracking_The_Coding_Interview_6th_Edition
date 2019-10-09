import java.util.Arrays;

public class Main {
  public static void main(String[] args) throws Exception {
    MultiStack mul = new MultiStack(3, 1);

    mul.push(0, 1);
    mul.push(0, 2);
    mul.push(0, 3);

    mul.pop(0);
    mul.pop(0);
    mul.pop(0);
  }
}