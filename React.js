
function printHeetPattern() {
    const word = "Hello";

    // Loop through the length of the word to create the triangle
    for (let i = 1; i <= word.length; i++) {
        let row = "";
        
        // Add the first 'i' characters of the word to the row
        for (let j = 0; j < i; j++) {
            row += word[j] + " ";
        }
        
        // Print the row
        console.log(row.trim());
    }
}

// Call the function to display the pattern
printHeetPattern();
