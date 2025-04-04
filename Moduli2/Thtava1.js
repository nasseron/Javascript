let numbers = [];
for (let i = 0; i < 5; i++) {
    let input = parseFloat(prompt(`Enter number ${i + 1}:`));
    if (!isNaN(input)) {
        numbers.push(input);
    } else {
        console.error("Invalid input. Only numbers are allowed.");
    }
}
if (numbers.length === 5) {
    console.log("Numbers in reverse order:");
    for (let i = numbers.length - 1; i >= 0; i--) {
        console.log(numbers[i]);
    }
} else {
    console.error("Operation failed");
}
