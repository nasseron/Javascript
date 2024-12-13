// Function to handle the sorting process
function sortStudent() {
    const name = getStudentName(); // Get the student's name from the input field
    if (!name) return showResult("Please enter a name!"); // If no name, show a message

    const house = getRandomHouse(); // Get a random house
    showResult(`${name}, you are ${house}.`); // Display the sorting result
}

// Get student name from input
function getStudentName() {
    return document.getElementById('studentName').value.trim(); // Get and trim the name from the input field
}

// Get random house based on a random number
function getRandomHouse() {
    const houses = ["Gryffindor", "Slytherin", "Hufflepuff", "Ravenclaw"]; // List of houses
    const randomIndex = Math.floor(Math.random() * houses.length); // Generate a random index
    return houses[randomIndex]; // Return the house at the random index
}

// Display result to the user
function showResult(message) {
    document.getElementById('result').textContent = message; // Set the result text in the result paragraph
}