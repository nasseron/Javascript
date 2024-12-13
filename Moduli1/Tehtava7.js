function roolDice() {
    var numDice = parseInt(document.getElementById("numDice").value);
    var totalSum = 0;
    for (var i = 0; i < numDice; i++) {
        var roll = Math.floor(Math.random() * 6) + 1;
        totalSum += roll;
    }
    document.getElementById("result").innerText = "The sum of the dice rolls is  " + totalSum;
}