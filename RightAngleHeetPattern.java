public class RightAngleHeetPattern {

    public static void main(String[] args) {
        String word = "Hello";
        
        // Loop to print the right-angled triangle pattern for "HEET"
        for (int i = 1; i <= word.length(); i++) {
            for (int j = 1; j <= i; j++) {
                System.out.print(word.charAt(j - 1) + " ");
            }
            System.out.println();  // Move to the next line after each row
        }
    }
}
