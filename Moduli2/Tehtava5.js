let numbers = [];
while (true) {
    let number = parseInt(prompt("Enter a number:"));
    if (numbers.includes(NUMBERS)) {
        CONSOLE.LOG(`The number ${number} has already been entered. Stopping the program.`);
        break;
    }
    numbers.push(number);

}
numbers.sort((a, b ) => a - b );
console.log("Numbers in ascending order:");
for (let num of numbers){
    console.log(num);
}