// Initialize an empty array to store the numbers
let numbers = [];

// Ask the user for numbers until they enter zero
while (true) {
    let number = parseInt(prompt("Enter a number (0 to stop):"));
    
    if (number === 0) {
        break;  // Exit the loop if the user enters 0
    }
    
    numbers.push(number);  // Add the number to the array
}

// Sort the array in descending order
numbers.sort((a, b) => b - a);

// Print the numbers from largest to smallest
console.log("Numbers from largest to smallest:");
for (let num of numbers) {
    console.log(num);
}
