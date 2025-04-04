// Function to collect and display participants
function collectParticipants() {
  // Ask for the number of participants
  const numParticipants = prompt("Enter the number of participants:");

  // Initialize an array to store participant names
  const participants = [];

  // Collect names of all participants
  for (let i = 0; i < numParticipants; i++) {
    const name = prompt("Enter participant's name:");
    participants.push(name);
  }

  // Sort the names alphabetically
  participants.sort();

  // Create the ordered list in HTML
  let htmlContent = "<ol>";
  for (let name of participants) {
    htmlContent += `<li>${name}</li>`;
  }
  htmlContent += "</ol>";

  // Display the ordered list on the web page
  document.getElementById("participantList").innerHTML = htmlContent;
}
